import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/HomePage/Homepage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register"
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Newsletter from "../pages/Newsletter/Newsletter";
import ProSearch from "../pages/Search/Pro/ProSearch";
import BandSearch from "../pages/Search/Band/BandSearch";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Homepage />,
                children: [
                    {
                        path: '/newsletter/:title',
                        element: <Newsletter />
                    }
                ]
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/newsletter',
                element: <Newsletter />
            }, 
            {
                path: '/pros',
                element: <ProSearch />
            },
            {
                path: '/bands',
                element: <BandSearch />
            }
        ]
    }
])