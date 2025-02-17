import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import MainLayout from "../Components/Layouts/MainLayout";
import Home from "../Components/Home/Home";
import DonationCampain from "../Components/Pages/DonationCampain/DonationCampain";
import Howtohelp from "../Components/Pages/Howtohelp/Howtohelp";
import Dashboard from "../Components/Pages/Dashboard/Dashboard";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/donationcampain",
                element:<DonationCampain></DonationCampain>
            },
            {
                path:"/howtohelp",
                element:<Howtohelp></Howtohelp>
            },
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            },
        ]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element:<Register></Register>
    }
])