 
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Box = ({ singleNews }) => {
    const { handleAddBtn } = useContext(AuthContext);
   
    

    return (
        <div className="grid grid-cols-1 gap-4 card w-80 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure>
                <img src={singleNews.image} alt="" className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{singleNews.serviceName}</h2>
                <p className="text-sm text-gray-500 justify-end">Category: {singleNews.category} </p>
                <p className="text-sm text-gray-500">Counselor:{singleNews.counselor} </p>
                <p className="font-bold text-lg">{singleNews.pricing}</p>
                <div className="card-actions justify-end mt-5">

                    <Link onClick={ () => handleAddBtn (singleNews)} className="btn btn-primary" to={`/news/${singleNews.id}`} >
                        Learn More
                    </Link>
                </div>
               
            </div>
        </div>
    );
};
export default Box;

// {
//     "id": 1,
//     "image": "https://i.ibb.co.com/xs9z2qC/istockphoto-1352686769-612x612.jpg",
//     "serviceName": "Career Counseling Sessions",
//     "category": "Online",
//     "description": "Personalized career guidance to help you navigate your professional journey.",
//     "pricing": "$50",
//     "duration": "2024-12-05T17:00:00Z - 2024-12-05T18:00:00Z",
//     "counselor": "Dr. Emily Johnson",
//     "rating": 4.8,
//     "buttonText": "Learn More"
// },