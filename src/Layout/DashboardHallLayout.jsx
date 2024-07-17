import { FiMenu } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";
import AsideDashboard from "../Components/Dashboard/AsideDashboard";
const DashboardHallLayout = () => {
    
return (

  <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-start">
  
    {/* Page content here */}
  
  <div className=" w-full h-20 flex items-center bg-white   border-s-2 px-5">
  <label htmlFor="my-drawer-2" className="btn bg-orange-500 drawer-button lg:hidden">
  <FiMenu className="text-xl text-white"/>
  </label>
  
  <Link to="/">
  <img src="https://i.ibb.co/8xvPxSF/Event-Ease.png" className="h-10 ml-3" alt="" />  
  </Link>
  <h1 className="ml-4 text-2xl font-bold hidden md:block "> Welcome to <span className="text-orange-500">Dashboard</span>  </h1>
  </div>


  <div className="bg-[url(https://i.ibb.co/tc5HwLj/pattern.jpg)] bg-cover min-h-screen w-full">
  <div className="bg-white/80 min-h-full ">
  <Outlet/>
  </div>
  </div>


  </div>


  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu  pt-24 text-base-content min-h-full w-80 p-4 gap-3">
      {/* Sidebar content here */}
      <AsideDashboard/>
    </ul>
  </div>
 </div>
                                          
    );
};

export default DashboardHallLayout;