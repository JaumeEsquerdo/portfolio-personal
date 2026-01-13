import { useMemo } from "react";

/**
 * Hook para animaciones de entrada con Framer Motion
 * Permite reutilizar la misma lógica en todas las páginas
 */

/* = {}: asegura que siempre haya un objeto para destructurar, evitando errores si no se pasa nada. */
export const useFramerAnimations = ({ stagger = 0.2, duration = 2.8 } = {}) => {
  const container = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: { staggerChildren: stagger },
      },
    }),
    [stagger]
  );

  const item = useMemo(
    () => ({
      hidden: { opacity: 0, y: 18 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration, ease: [0.22, 1, 0.36, 1] },
      },
    }),
    [duration]
  );

  return { container, item };
};
