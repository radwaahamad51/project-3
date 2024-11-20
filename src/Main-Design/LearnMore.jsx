import { useContext,  useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Navber from "./Navber";
import Footer from "./footer";
import { Link } from "react-router-dom";

const Learn = () => {
    const { learData } = useContext(AuthContext);

    
    // State for comments
    const [comments, setComments] = useState([]);
    const [inputValue, setInputValue] = useState("");
    // Handle adding a comment
    const handleAddComment = () => {
        if (inputValue.trim()) {
            setComments([...comments, inputValue]);
            setInputValue(""); // Clear input field
        }
    };


    if (!learData) {
        return (
            <div className="text-center mt-20">
                <p className="text-gray-500">Read successful! <Link to="/">go to home</Link></p>
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


                {/* Feedback Section */}
                <div className="mt-10 w-full md:w-3/4 mx-auto">
                    <h2 className="text-xl font-semibold mb-4">Feedback/Comments</h2>
                    <textarea
                        className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows="4"
                        placeholder="Write your comment or feedback here..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    ></textarea>
                    <button
                        onClick={handleAddComment}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                        Comment/Feedback
                    </button>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-3">Submitted Comments:</h3>
                        {comments.length > 0 ? (
                            <ul className="space-y-4">
                                {comments.map((comment, index) => (
                                    <li
                                        key={index}
                                        className="bg-gray-100 p-3 rounded-md shadow-sm"
                                    >
                                        {comment}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500">
                                No comments yet. Be the first to comment!
                            </p>
                        )}
                    </div>
                </div>

            </main>
            <div className="bg-cover bg-center bg-no-repeat h-64"
                style={{ backgroundImage: "url('https://i.ibb.co.com/yWQDsSz/footer-bg-e36870be2a883.jpg')" }}>
                <Footer></Footer>
            </div>
        </div>
    );
};
export default Learn