import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import { Toaster } from "react-hot-toast";
import bg from '../assets/pattern8.png'


const MainLayout = () => {
    return (
        <>
         <Toaster />
          <Navbar/> 

        <div className="bg-cover" style={{backgroundImage: `url(${bg})`}}>
          <div className="bg-[#FEFCE8]/95 pt-20">
          <Outlet/> 
          </div>
        </div>
        </>
    );
};

export default MainLayout;