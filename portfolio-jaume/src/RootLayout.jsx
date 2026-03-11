import { Outlet } from "react-router-dom";
import { TransitionProvider } from "./context/TransitionContext";
import { CurtainOverlay } from "./components/CurtainOverlay";

export const RootLayout = () => {
  return (
    /* TransitionProvider expone goTo() y transitioning a toda la app */
    <TransitionProvider>
      {/* cortina en cada navegación */}
      <CurtainOverlay />
      {/* renderizar la página activa */}
      <Outlet />
    </TransitionProvider>
  );
};
