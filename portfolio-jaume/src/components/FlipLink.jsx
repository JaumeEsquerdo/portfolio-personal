import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const DURATION = 0.2;
const STAGGER = 0.02;

export const FlipLink = ({ href, titulo }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  /* en Desktop se activa el FlipLink, en menos width tiene un hover normal de color */
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const handleChange = () => setIsDesktop(media.matches);

    handleChange(); // inicial
    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <motion.a
      href={href}
      className={`Proyecto-a ${isDesktop ? "" : "Proyecto-a--responsive"}`}
      target="_blank"
      rel="noopener noreferrer"
      initial="initial"
      whileHover={isDesktop ? "hovered" : undefined}
    >
      <div>
        <h3 className="Proyecto-titulo">
          {[...titulo].map((letra, i) => (
            <motion.span
              className={`SplitText`}
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

      {isDesktop && (
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
      )}
    </motion.a>
  );
};
