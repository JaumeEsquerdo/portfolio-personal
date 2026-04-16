import { Outlet, useLocation } from "react-router-dom";

import CustomCursor from "./components/CustomCursor";

import Header from "./components/Header";

function Layout() {
  const location = useLocation();

  return (
    <>
      <CustomCursor key={location.pathname} />
      {location.pathname !== "/" && <Header />}
      <Outlet />
    </>
  );
}

export default Layout;
