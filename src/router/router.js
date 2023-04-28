import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/HomePage/Homepage";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Newsletter from "../pages/Newsletter/Newsletter";
import ProSearch from "../pages/Search/Pro/ProSearch";
import BandSearch from "../pages/Search/Band/BandSearch";
import ArtSearch from "../pages/Search/Art/ArtSearch";
import HomeRegister from "../pages/Register/HomeRegister";
import RegisterPerso from "../pages/Register/PersoRegister/Register";
import RegisterPro from "../pages/Register/ProRegister/Register";
import { userLoader } from "../Loader/userLoader";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Profile from "../pages/Profile/Profile";
import Forget from "../pages/Forget/Forget";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        loader: userLoader,
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
                path: '/forget',
                element: <Forget />
            },
            {
                path: '/home-register',
                element: <HomeRegister />
            },
            {
                path: '/register-perso',
                element: <RegisterPerso />
            },
            {
                path: '/register-pro',
                element: <RegisterPro />
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
            },
            {
                path: '/arts',
                element: <ArtSearch />
            },
            {
                path: '/profile',
                element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                )
            }
        ]
    }
])