import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        //get form data
        const form = new FormData(e.target);
        const name = form.get("name");
        if (name.length < 5) {
            setError({ ...error, name: "name should be more then 5 character" });
            return
        }
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");
        if(password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password)){
            setErrors({ ...errors, name: "name should be more then 5 character" });
            return
        }
        console.log(email)

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({displayName: name, photoURL: photo })
                    .then((result) => {
                         navigate("/");
                        console.log(result)
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
              
            });
    };
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">
                    Register your account
                </h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    {error.name && (
                        <label className="label text-sx text-red-500">{error.name}</label>
                    )}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="photo-url"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    {/* email input  */}
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

                    <div className=" form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                        <div>
                        <button
                            onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-2 bottom-11">
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </button>
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                        {errors.password && (
                        <label className="label text-sx text-red-500">{error.name}</label>
                    )}
                    </div>
                    {error.register && <label className="label">{error.register}</label>}

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>
                <p className="text-center font-semibold">
                    Allready Have An Account ?{" "}
                    <Link className="text-red-500" to="/auth/login">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;