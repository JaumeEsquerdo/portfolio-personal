import { Outlet, useLocation } from "react-router-dom"
import Aside from "./components/Aside"
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";


function Layout() {
  const location = useLocation();
  



  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <PageTransition key={location.pathname}>
          {location.pathname !== '/' && <Aside />}
          <Outlet />
        </PageTransition>
      </AnimatePresence>


    </>
  )
}

export default Layout
