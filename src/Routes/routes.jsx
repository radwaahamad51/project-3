import { createBrowserRouter } from "react-router-dom";
import Home from "../componemt/Home";
import Register from "../Page/Ragister";
import Login from "../Page/Login";
import Card from "../Main-Design/CardSlider";
import Learn from "../Main-Design/LearnMore";
import PrivateRoute from "./PrivetRouter";
import Profile from "../componemt/profile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [


            {
                path: "/",
                element: <Card></Card>,
                loader: ({ params }) =>
                    fetch("\shearData.json")

            },


        ],
    },
    {
        path: "/news/:id",
        element:
           <PrivateRoute> <Learn></Learn></PrivateRoute>
        
    },
    {
        path: "/auth/login",
        element: <Login></Login>
    },
    {
        path: "/auth/register",
        element: <Register></Register>
    },
    {
        path: '*',
        element: <h2>error</h2>
    },
    {
        path:"/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
    }

]);


export default router