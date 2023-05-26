import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Chefs from "../pages/Chefs/Chefs";
import Recipes from '../pages/Chefs/Recipes';
import Blogs from "../pages/Shared/Blogs";
import NotFound from "../pages/Shared/NotFound";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../pages/User/UserProfile";
import AllRecipes from "../pages/Chefs/AllRecipes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        loader: () => fetch('https://the-afghani-delight-server.vercel.app/chefs')
    },
    {
        path: "blogs",
        element: <Blogs></Blogs>
    },
    {
        path: "chef/:id",
        element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
        loader: ({ params }) => fetch(`https://the-afghani-delight-server.vercel.app/chef/${params.id}`)
    },
    {
        path: "recipes",
        element: <AllRecipes></AllRecipes>
    },
    {
        path: "profile",
        element: <UserProfile></UserProfile>
    },
    {
        path: "login",
        element: <Login></Login>
    },
    {
        path: "sign-up",
        element: <SignUp></SignUp>
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
]);

export default router;