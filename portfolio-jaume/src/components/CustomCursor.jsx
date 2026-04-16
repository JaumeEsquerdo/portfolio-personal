import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  // Estado para saber si el cursor debe estar expandido (hover sobre links/botones)
  const [isHovered, setIsHovered] = useState(false);
  const { pathname } = useLocation(); // Escuchar el cambio de página

  /**
   * useMotionValue: Valores numéricos que Framer Motion maneja fuera del ciclo de vida de React.
   * Se inicializan en -100 para que el cursor no aparezca en la esquina (0,0) al cargar la web.
   * Actualizar estos valores NO provoca un re-render del componente
   */
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  /**
   * useSpring: Crea un valor que "persigue" al MotionValue original con física de muelle.
   * stiffness (rigidez): Qué tan fuerte vuelve el muelle a su posición.
   * damping (amortiguación): Qué tanta resistencia hay para evitar que rebote infinitamente.
   * Se usa para el círculo exterior para crear ese efecto de "persecución" o delay elegante.
   */
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  /**
   * RESET POR NAVEGACIÓN:
   * Si el usuario clica en un link, la página cambia. A veces el elemento desaparece
   * antes de que el ratón "salga" de él. Esto fuerza al cursor a volver a su tamaño
   * normal al detectar el cambio de ruta.
   */ useEffect(() => {
    setIsHovered(false);
  }, [pathname]);

  // Actualiza la posición real del ratón en los MotionValues
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      // Detecta si el elemento bajo el ratón es un link, botón o input
      if (e.target.closest("a, button, .link, input, textarea")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    // RESET POR CLIC: Al pulsar el botón del ratón, el cursor se encoge.
    // Proporciona feedback táctil y evita que se quede grande tras un clic.
    const handleMouseDown = () => setIsHovered(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* CÍRCULO EXTERIOR: 
        Usa x/y vinculados a los 'Springs' para tener ese retraso suave.
        Animate gestiona el cambio de tamaño (width/height) de forma fluida.
      */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 90,
          borderRadius: "50%",
          border: "2px solid #999",
        }}
        animate={{
          width: isHovered ? 62 : 34,
          height: isHovered ? 62 : 34,
        }}
        // Añadimos una transición aquí para que el encogimiento sea suave
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* PUNTO CENTRAL: 
        Usa x/y directos del 'MotionValue' (sin delay) para que el usuario 
        sienta que el puntero es 100% preciso y rápido.
      */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 91,
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: "#333",
        }}
      />
    </>
  );
}
