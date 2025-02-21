import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import MainLayout from "../Components/Layouts/MainLayout";
import Home from "../Components/Home/Home";
import DonationCampain from "../Components/Pages/DonationCampain/DonationCampain";
import Dashboard from "../Components/Pages/Dashboard/Dashboard";
import DonationDetails from "../Components/Pages/DonationCampain/DonationDetails/DonationDetails";
import DonorForm from "../Components/Pages/DonationCampain/DonorForm/DonorForm";
import Error from "../Components/Home/ErrorPage/Error";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "../Components/ForgotPassword/ForgotPassword";
import UpdateProfile from "../Components/Pages/UpdateProfile/UpdateProfile";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
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
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            },
            {
                path:"/donationdetails/:id",
                element:(
                    <PrivateRoute>
                        <DonationDetails></DonationDetails>
                    </PrivateRoute>
                ),
            },
            {
                path:"/donorform",
                element:<DonorForm></DonorForm>
            },
        ]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/forgotpassword",
        element:<ForgotPassword></ForgotPassword>
    },
    {
        path:"/updateProfile",
        element:<UpdateProfile></UpdateProfile>
    },
    {
        path:"/register",
        element:<Register></Register>
    }
])