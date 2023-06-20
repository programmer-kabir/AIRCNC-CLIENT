import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import RoomsDetails from "../Pages/Home/Rooms/RoomsDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'/rooms-details/:id',
                element:<RoomsDetails></RoomsDetails>
            }
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/sign-up',
        element:<Register></Register>
    }
])

export default router;