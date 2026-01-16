import { motion } from "framer-motion";

const DURATION = 0.2;
const STAGGER = 0.02;

export const FlipLink = ({ href, titulo }) => {
  return (
    <motion.a
      href={href}
      className="Proyecto-a"
      target="_blank"
      rel="noopener noreferrer"
      initial="initial"
      whileHover="hovered"
    >
      <div>
        <h3 className="Proyecto-titulo">
          {[...titulo].map((letra, i) => (
            <motion.span
              className="SplitText"
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              key={i}
              style={{ display: "inline-block" }}
            >
              {letra === " " ? "\u00A0" : letra}
            </motion.span>
          ))}
        </h3>
      </div>
      <div className="MotionDiv-oculto">
        <h3 className="Proyecto-titulo">
          {[...titulo].map((letra, i) => (
            <motion.span
              className="SplitText"
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              key={i}
              style={{ display: "inline-block" }}
            >
              {letra === " " ? "\u00A0" : letra}
            </motion.span>
          ))}
        </h3>
      </div>
    </motion.a>
  );
};
