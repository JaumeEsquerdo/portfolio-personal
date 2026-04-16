import { Outlet, useLocation } from "react-router-dom";
import { TransitionProvider } from "./context/TransitionContext";
import { CurtainOverlay } from "./components/CurtainOverlay";
import { useEffect } from "react";
import CustomCursor from "./components/CustomCursor";

export const RootLayout = () => {
  const location = useLocation();
  useEffect(() => {
    // Cuando el componente se monta (JS funciona), añadimos la clase
    document.body.classList.add("custom-cursor-active");

    return () => {
      // Si el componente se desmonta, devolvemos el cursor normal
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    /* TransitionProvider expone goTo() y transitioning a toda la app */
    <TransitionProvider>
      {/* cortina en cada navegación */}
      <CurtainOverlay />
      {/* renderizar la página activa */}
      <CustomCursor />
      <Outlet />
    </TransitionProvider>
  );
};
