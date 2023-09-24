import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Banner from './../Components/Banner/Banner';


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-4">
                <Header></Header>
                <Banner></Banner>
            </div>
            <div className="max-w-screen-xl mx-auto px-5">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default MainLayout;