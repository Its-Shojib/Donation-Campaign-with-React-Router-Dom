import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";



const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-4">
                <Header></Header>
            </div>
            <div className="max-w-screen-xl mx-auto px-5">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default MainLayout;