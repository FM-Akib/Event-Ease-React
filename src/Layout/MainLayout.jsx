import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <>
         <Toaster />
          <Navbar/> 
          <div className="bg-[#FEFCE8] pt-20">
          <Outlet/> 
          </div>
        </>
    );
};

export default MainLayout;