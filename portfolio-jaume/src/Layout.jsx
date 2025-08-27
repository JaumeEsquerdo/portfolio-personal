import { Outlet, useLocation } from "react-router-dom";

import Header from "./components/Header";

function Layout() {
    const location = useLocation();

    return (
        <>
            {location.pathname !== '/' && <Header />}
            <Outlet />

        </>

    );
}

export default Layout;