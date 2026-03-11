import { createBrowserRouter } from "react-router-dom";

// páginas
import Home from "@/pages/Home";
import Proyectos from "@/pages/Proyectos";
import Habilidades from "@/pages/Habilidades";
import SobreMi from "@/pages/SobreMi";
import Contacto from "@/pages/Contacto";
import ErrorPage from "@/pages/ErrorPage";

// layout para páginas distintas de Home
import Layout from "@/Layout";
import { RootLayout } from "@/RootLayout";

const router = createBrowserRouter([
  {
    // RootLayout envuelve TODA la app — aquí viven el contexto y la cortina
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },

      {
        path: "/",
        element: <Layout />, // Header especial
        children: [
          { path: "proyectos", element: <Proyectos /> },
          { path: "habilidades", element: <Habilidades /> },
          { path: "sobre-mi", element: <SobreMi /> },
          { path: "contacto", element: <Contacto /> },
        ],
      },
    ],
  },
]);

export default router;
