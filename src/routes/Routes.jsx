import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Recipes from '../pages/Chefs/Recipes';
import Blogs from "../pages/Shared/Blogs";
import NotFound from "../pages/Shared/NotFound";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../pages/User/UserProfile";
import AllRecipes from "../pages/Chefs/AllRecipes";
import ViewRecipe from "../pages/Chefs/ViewRecipe";
import About from "../pages/Home/About";

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
        loader: () => fetch('https://the-afghani-delight-server.vercel.app/recipe'),
        element: <AllRecipes></AllRecipes>
    },
    {
        path: "recipe/:id",
        element: <PrivateRoute><ViewRecipe></ViewRecipe></PrivateRoute>,
        loader: ({ params }) => fetch(`https://the-afghani-delight-server.vercel.app/recipe/${params.id}`)
    },
    {
        path: "about",
        element: <About></About>
    },
    {
        path: "profile",
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
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