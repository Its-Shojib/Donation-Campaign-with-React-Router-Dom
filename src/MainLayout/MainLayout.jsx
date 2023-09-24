import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
                <Header></Header>
            </div>
            <div className="max-w-screen-xl mx-auto">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default MainLayout;