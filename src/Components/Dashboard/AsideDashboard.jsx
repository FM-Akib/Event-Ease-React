import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";



const AsideDashboard = () => {
    return (
      <>
      <li className="border-[1px] py-1 px-1 rounded-lg bg-white/80"><Link to="/dashboardHall/home" className="flex items-center"><FaRegUserCircle className="text-xl"/> Profile     </Link></li>
      <li className="border-[1px] py-1 px-1 rounded-lg bg-white/80"><Link to="/dashboardHall/edit" className="flex items-center"><FaUserEdit  className="text-xl"/>Edit Profile</Link></li>
      <li className="border-[1px] py-1 px-1 rounded-lg bg-white/80"><Link to="" className="flex items-center">Sidebar Item 2</Link></li>   
      </>
    );
};

export default AsideDashboard;