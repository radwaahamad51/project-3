import { Outlet } from "react-router-dom";
import Navber from "../Main-Design/Navber";
import Footer from "../Main-Design/footer";


const Home = () => {
    return (
        <div>
           <Navber></Navber>
           
           <Outlet></Outlet>
          <div className="bg-cover bg-center bg-no-repeat h-64"
           style={{ backgroundImage: "url('https://i.ibb.co.com/yWQDsSz/footer-bg-e36870be2a883.jpg')" }}>
          <Footer></Footer>
          </div>
        </div>
    )

};

export default Home;