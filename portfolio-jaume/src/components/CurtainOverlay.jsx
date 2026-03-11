import { motion, AnimatePresence, animate } from "framer-motion";
import { usePageTransition } from "@/context/TransitionContext";

export const CurtainOverlay = () => {
  const { transitioning } = usePageTransition();
  return (
    // AnimatePresence detecta cuando transitioning pasa a false
    // y ejecuta la animación exit antes de desmontar el panel
    <AnimatePresence>
      {transitioning && (
        <motion.div
          key="curtain"
          initial={{ y: "100%" }}
          animate={{
            y: "0%",
            transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
          }}
          exit={{
            y: "100%",
            transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
          }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#333",
            zIndex: "9999",
          }}
        />
      )}
    </AnimatePresence>
  );
};
