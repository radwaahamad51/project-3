import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Navber from "../Main-Design/Navber";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Footer from "../Main-Design/footer";
const Login = () => {
    
    const {userLogin, setUser} = useContext(AuthContext)
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
         console.log({ email, password });
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Login successful!")
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                setError({ ...error, login: err.code });
                console.log('error')
                toast.error("Login failed. Please check your password or email.");
            });
    };

    return (
       <div>
        <ToastContainer></ToastContainer>
        <div>
            <Navber></Navber>
            
        </div>
         <div className="min-h-screen flex justify-center items-center bg-blue-300">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">
                    Login your account
                </h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                        {error.login && (
                            <label className="label text-sm text-red-600">
                                {error.login}
                            </label>
                        )}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold">
                    Dont’t Have An Account ?{" "}
                    <Link className="text-red-500" to="/auth/register">
                        Register
                    </Link>
                </p>
            </div>
        </div>
       <div className="bg-cover bg-center bg-no-repeat h-64"
           style={{ backgroundImage: "url('https://i.ibb.co.com/yWQDsSz/footer-bg-e36870be2a883.jpg')" }}>
        <Footer></Footer>
       </div>
       </div>
    )
};
export default Login;