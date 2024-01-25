import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import Explore from "../pages/explore";
import Nortifications from "../pages/Nortifications";
import MainLayout from "../layouts/main/index.jsx";
import NotFound from "../pages/not-found/index.jsx";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
              index: true,
              element: <Home/>
            },
            {
                path: '/explore',
                element: <Explore/>
            },
            {
                path: 'nortifications',
                element: <Nortifications/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }

])

export default routes