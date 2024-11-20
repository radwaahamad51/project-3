

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Navber from "../Main-Design/Navber";
import Footer from "../Main-Design/footer";



const Google = () => {
    const { handelgogolesignin } = useContext(AuthContext);
    const handelGogolesignin = () => {
        handelgogolesignin()
            .then(() => {
                console.log("User logged in with Google!");
            })
            .catch((error) => {
                console.error("Google Login Error:", error);
            });
    };

    return (
        <div>
            <Navber></Navber>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="p-6 bg-white rounded shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Login with Google</h1>
                    <button
                        onClick={handelGogolesignin}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Sign in with Google
                    </button>
                </div>
            </div>
            <div className="bg-cover bg-center bg-no-repeat h-64"
           style={{ backgroundImage: "url('https://i.ibb.co.com/yWQDsSz/footer-bg-e36870be2a883.jpg')" }}>
        <Footer></Footer>
       </div>
        </div>
    )
}
export default Google