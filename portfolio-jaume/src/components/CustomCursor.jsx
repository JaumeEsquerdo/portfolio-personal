import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const { pathname } = useLocation(); // Escuchar el cambio de página

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // RESET 1: Cuando cambia la URL, forzamos el tamaño normal
  useEffect(() => {
    setIsHovered(false);
  }, [pathname]);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, .link, input, textarea")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    // RESET 2: Cuando clicamos, también reseteamos (por si el click cambia el DOM)
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
