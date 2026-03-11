import { Outlet } from "react-router-dom";
import { TransitionProvider } from "./context/TransitionContext";
import { CurtainOverlay } from "./components/CurtainOverlay";

export const RootLayout = () => {
  return (
    <TransitionProvider>
      <CurtainOverlay />
      <Outlet />
    </TransitionProvider>
  );
};
