import { Outlet, useLocation } from "react-router-dom";
import Aside from "./components/Aside";

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Aside />}
      <Outlet />

    </>

  );
}

export default Layout;