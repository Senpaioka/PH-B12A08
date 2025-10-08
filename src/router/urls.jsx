import { createBrowserRouter } from "react-router";

import App from '../App';
import Home from '../pages/Home';
import AppList from '../pages/AppList';
import Installed from '../pages/Installation';


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
        {
            index: true,
            Component: Home,
            loader: () => fetch('/data.json') 
        },
        {
            path: '/list',
            Component: AppList
        },
        {
            path: '/installed',
            Component: Installed
        },
    ]
  },
]);


export default router;