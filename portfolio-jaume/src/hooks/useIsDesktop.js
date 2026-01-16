import { useEffect, useState } from "react";

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    // detecta si puede hacer hover y tiene puntero preciso (es decir pc en la mayoria de casos)
    setIsDesktop(mq.matches);

    const handler = (e) => setIsDesktop(e.matches);
    // Detecta cambios dinámicos (ej: conectar un mouse a una tablet)

    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  return isDesktop;
};
