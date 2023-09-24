import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistics from "../Pages/Statistics";

let myCreatedRoute = createBrowserRouter(
    [
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        
        children:[
            {
                path:'/',
                element: <Home></Home>,
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