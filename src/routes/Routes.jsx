import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Chefs from "../pages/Chefs/Chefs";
import Recipes from '../pages/Chefs/Recipes';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        loader: () => fetch('http://localhost:5000/chefs')
    },
    {
        path: "chef/:id",
        element: <Recipes></Recipes>,
        loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
    },
    {
        path: "login",
        element: <Login></Login>
    },
    {
        path: "sign-up",
        element: <SignUp></SignUp>
    }
]);

export default router;