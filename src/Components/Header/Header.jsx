import { NavLink } from "react-router-dom";

const Header = () => {

    let links = <>
        <li>
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""}>
                Home</NavLink>
        </li>
        <li>
            <NavLink to={'/donation'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""}>
                Donation</NavLink>
        </li>
        <li>
            <NavLink to={'/statistics'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""}>
                Statistics</NavLink>
        </li>

    </>
    return (
        <div>
            <div className="navbar flex justify-around items-center">
                <div className="navbar-start">
                    <img src="/public/Logo.png" alt="" />
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden mr-8">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu text-sm dropdown-content mr-5 mt-3 z-[1]    ">
                            {links}
                        </ul>
                    </div>
                </div>

                <div className="navbar-end hidden md:flex gap-2">
                    <ul className="menu menu-horizontal">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;