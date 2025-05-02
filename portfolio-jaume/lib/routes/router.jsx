import { createBrowserRouter } from 'react-router'

// importe de páginas
import Home from '@/pages/Home'
import Proyectos from '@/pages/Proyectos'
import Habilidades from '@/pages/Habilidades'
import SobreMi from '@/pages/SobreMi'
import Contacto from '@/pages/Contacto'

// importe de páginas especiales
import Layout from '@/Layout'
import ErrorPage from '@/pages/ErrorPage'





const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,

    },
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'proyectos',
                element: <Proyectos />,
            },
            {
                path: 'habilidades-estudios',
                element: <Habilidades />,
            },
            {
                path: 'sobre-mi',
                element: <SobreMi />,
            },
            {
                path: 'contacto',
                element: <Contacto />,
            }

        ]
    }
    ,
    {
        path: '*',
        element: <ErrorPage />
    }

])
export default router