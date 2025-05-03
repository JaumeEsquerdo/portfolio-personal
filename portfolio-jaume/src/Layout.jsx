import { Outlet, useLocation } from "react-router-dom"
import Aside from "./components/Aside"
import { AnimatePresence } from "framer-motion"
import PageTransition from "./components/PageTransition";
import { useRef } from "react";


function Layout() {
  const location = useLocation();
  const prevPath = useRef(location.pathname) //guardar la ruta de donde vengo (el valor anterior)

  const isReturningHome = location.pathname === '/' && prevPath.current !== '/';
  const direction = isReturningHome ? 'down' : 'up';

  // actualizar el valor anterior a la ruta nueva
  prevPath.current = location.pathname;

  // el <AnimatePresence mode="wait"> es para q espere la animacion de salida antes de mostrar la siguiente pagina


  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', backgroundColor: '#333' }}>

        <AnimatePresence mode="wait">

          <PageTransition key={location.pathname} direction={direction}>
            {location.pathname !== '/' && <Aside />}
            <Outlet />
          </PageTransition>

        </AnimatePresence>
      </div>
    </>
  )
}

export default Layout
