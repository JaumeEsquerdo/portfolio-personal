import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  /* transitioning: estado que CurtainOverlay escucha para mostrar/ocultar el panel */
  const [transitioning, setTransitioning] = useState(false);
  const navigate = useNavigate();

  /* función para navegar con transición */
  const goTo = (path) => {
    // evita disparar otra transición si ya hay una en curso
    if (transitioning) return;
    setTransitioning(true);

    /* cambia la ruta cuando el panel ya cubre la pantalla (invisible para el usuario) */
    setTimeout(() => navigate(path), 880);
    /* baja el panel, revelando la page */
    setTimeout(() => setTransitioning(false), 1000);
  };

  return (
    <TransitionContext.Provider value={{ goTo, transitioning }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const usePageTransition = () => useContext(TransitionContext);
