import {Navigate, createBrowserRouter} from "react-router-dom";
import Login from "./views/login";
import Register from "./views/register";
import User from "./views/user";
import NotFound from "./views/not-found";
import DefaultLayout from "./components/defaultLayout";
import GuestLayout from "./components/guestLayout";
import Dashboard from "./views/dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/users"/> 
    },
    // parent
    {
        path: '/',
        element: <DefaultLayout/>,
        // child
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/users',
                element: <User/>
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        // child
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
          
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    },
])

export default router;