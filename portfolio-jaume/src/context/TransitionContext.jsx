import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  const [transitioning, setTransitioning] = useState(false);
  const navigate = useNavigate();

  const goTo = (path) => {
    if (transitioning) return;
    setTransitioning(true);

    setTimeout(() => navigate(path), 880);
    setTimeout(() => setTransitioning(false), 1000);
  };

  return (
    <TransitionContext.Provider value={{ goTo, transitioning }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const usePageTransition = () => useContext(TransitionContext);
