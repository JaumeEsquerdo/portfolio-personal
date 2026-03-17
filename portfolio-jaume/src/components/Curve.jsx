import "../css/curve.css";
import { motion } from "framer-motion";

/* efecto curva para el desplegable de navegación */

// Path SVG que dibuja una forma curva lateral
// Sintaxis de comandos:
// M = MoveTo → mueve el "lápiz" al punto inicial (x y)
// L = LineTo → dibuja una línea recta hasta (x y)
// Q = Quadratic Bezier → curva usando un punto de control
//     formato: Q cx cy x y
//
// En este caso:
// M100 0 → empieza arriba a la derecha
// L100 height → baja en línea recta hasta abajo a la derecha
// Q0 height/2 100 0 → curva desde abajo hasta arriba,
//   usando como punto de control la izquierda (0, mitad de altura),
//   creando la forma curva lateral

/* 
M100 0
👉 empieza arriba a la derecha

L100 height
👉 baja recto hacia abajo

Q0 height/2 100 0
👉 vuelve arriba haciendo una curva 
*/

export const Curve = () => {
  const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className="SvgCurve">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
};
