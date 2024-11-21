import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

import { PiDotsThreeOutlineVerticalDuotone } from "react-icons/pi";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext)
    return (<div className="navbar bg-base-100 bg-cyan-200 w-full mb-10 fixed top-0 left-0 z-50  ">
         <details className="dropdown lg:hidden">
            <summary className="btn btn-ghost"><PiDotsThreeOutlineVerticalDuotone></PiDotsThreeOutlineVerticalDuotone></summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <Link className="" to="/">Home</Link>
            <Link className="" to="/profile">Update.Profile</Link>
            <Link className="" to="/auth/register">Ragister</Link>
            <Link className="" to="/google">Google</Link>
            <Link className="" to="/notFound">View</Link>
            </ul>
        </details>
        <div className="navbar-start">
            <a className="btn btn-ghost text-xl text-blue-600 italic"> Career Counseling</a>
        </div>
        <div className="navbar-center lg:flex gap-4  hidden ">
            <Link className="text-neutral-950" to="/">Home</Link>
            <Link className="text-neutral-950" to="/profile">Update.Profile</Link>
            <Link className="text-neutral-950" to="/auth/register">Ragister</Link>
            <Link className="text-neutral-950" to="/google">Google</Link>
            <Link className="text-neutral-950" to="/notFound">View</Link>

        </div>
       
        <div className="navbar-end gap-2">
            <div className="form-control">
                {user && user?.email ? (
                    <button onClick={logOut} className="btn btn-primary ">
                        Log-Out
                    </button>
                ) : (
                    <Link to="/auth/login" className="btn btn-primary ">
                        Login
                    </Link>
                )}
            </div>
            <div className="dropdown dropdown-end">
                <div className=" ">
                    {user && user?.email ? (
                        <div>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user?.photoURL} />

                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><p>{user.displayName}</p></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    ) : (
                        <div className="">
                            <img className="w-10 rounded-full"
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    )}
                </div>

            </div>
        </div>
    </div>
    )

};
export default Navber;