import { createBrowserRouter } from 'react-router'

// importe de páginas
import {Home} from '@/pages/Home'


// importe de páginas especiales
// import Layout from '@/Layout'
import ErrorPage from '@/pages/ErrorPage'


const router = createBrowserRouter([

    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
    }


])
export default router