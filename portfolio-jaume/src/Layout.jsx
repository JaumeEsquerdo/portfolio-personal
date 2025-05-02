import { Outlet } from "react-router-dom"
import Aside from "./components/Aside"


function Layout() {


  return (
    <>
      <Aside />
      <Outlet />
    </>
  )
}

export default Layout
