import { createBrowserRouter } from "react-router";

import App from '../App';
import Home from '../pages/Home';
import AppList from '../pages/AppList';
import Installed from '../pages/Installation';
import AppDetails from "../pages/AppDetails";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
        {
            index: true,
            Component: Home,
            loader: () => fetch('/data.json')
        },
        {
            path: '/list',
            Component: AppList,
            loader: () => fetch('/data.json')
        },
        {
            path: '/installed',
            Component: Installed,
            loader: () => fetch('/data.json')
        },
        {
            path: '/details/:id',
            Component: AppDetails,
            loader: () => fetch('/data.json')
        },
    ]
  },
]);


export default router;