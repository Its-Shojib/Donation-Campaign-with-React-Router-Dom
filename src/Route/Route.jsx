import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistics from "../Pages/Statistics";
import ViewDetails from "../Components/ViewDetails/ViewDetails";
import ErrorPage from "../Pages/ErrorPage";

let myCreatedRoute = createBrowserRouter(
    [
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            },
            {
                path:'/category/:id',
                element: <ViewDetails></ViewDetails>,
                loader: ()=> fetch('/data.json')
            },
            {
                path:'/donation',
                element: <Donation></Donation>,
            },
            {
                path:'/statistics',
                element: <Statistics></Statistics>,
            },
        ]
    }
]);



export default myCreatedRoute;