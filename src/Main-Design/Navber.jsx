import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext)
    return (<div className="navbar bg-base-100">
        <div className="navbar-start">
            <a className="btn btn-ghost text-xl"> Career Counseling</a>
        </div>
        <div className="navbar-center">
           <Link to ="/">Home</Link>
        </div>
        <div className="navbar-end gap-2">
            <div className="form-control">
                {user && user?.email ? (
                    <button onClick={logOut} className="btn btn-neutral rounded-none">
                        Log-Out
                    </button>
                ) : (
                    <Link to="/auth/login" className="btn btn-neutral rounded-none">
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