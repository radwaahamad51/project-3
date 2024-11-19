import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Navber from "./Navber";

const Learn = () => {
    const { learData } = useContext(AuthContext);
    if (!learData) {
        return (
            <div className="text-center mt-20">
                <p className="text-gray-500">Login successful! go to home</p>
            </div>
        );
    }

    return (
        <div >
            <header>
                <Navber></Navber>
            </header>
            <main className="w-11/12 mx-auto mt-20 ">
                <div className="mt-10  w-11/12   mx-auto md:w-80 bg-base-100 shadow-xl">
                    <figure>
                        <img src={learData.image} alt="" className="h-48 w-full object-cover" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{learData.serviceName}</h2>
                        <p className="border-solid border-2 border-sky-500 rounded-xl  badge-primary mb-2">Category:{learData.category}</p>
                        <p className="text-sm text-gray-600">{learData.counselor}</p>
                        <div className="mt-4">
                            <p><strong>Price:</strong>{learData.pricing} </p>
                            <p><strong>Duration:  </strong>{learData.duration}</p>
                            <p><strong>Description:  </strong> {learData.description}</p>
                            <p><strong>Rating:  </strong>{learData.rating} ⭐</p>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};
export default Learn