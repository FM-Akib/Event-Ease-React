import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { TbCalendarTime } from "react-icons/tb";
import useUserInfo from "../../Hooks/useUserInfo";
import { MdDomain } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";


const AsideDashboard = () => {
  const {userInfo} = useUserInfo();
    return (
      <>
      <li className="border-[1px] py-1 px-1 rounded-lg bg-white/80"><Link to={`${userInfo?.type === 'hall' ? '/dashboardHall/home':"/dashboardUser/home"}`} className="flex items-center"><FaRegUserCircle className="text-xl"/> Profile     </Link></li>
    
    {
      userInfo?.type === 'hall' ? <>
      

      <li className="border-[1px] py-1 px-1 rounded-lg bg-white/80"><Link to="/dashboardHall/edit" className="flex items-center"><FaUserEdit  className="text-xl"/>Edit Profile</Link></li>
      <li className="border-[1px] py-1 px-1 rounded-lg bg-white/80"><Link to="/dashboardHall/bookings" className="flex items-center"><TbCalendarTime  className="text-xl"/>Bookings</Link></li>  
      
      </>:<>

      
      <li className="border-[1px] py-1 px-1 rounded-lg bg-white/80"><Link to="/dashboardUser/mybookings" className="flex items-center"><TbCalendarTime  className="text-xl"/>My Bookings</Link></li>  
      </>
    }

     <div className="w-full flex justify-center py-4">
     <img src="https://i.ibb.co/gVsMD6G/divider.png" alt="" />
     </div>
     
      <li className="border-[1px] py-1 px-1 rounded-lg bg-white/80"><Link to="/" className="flex items-center"><RiHome3Line  className="text-xl"/>Home</Link></li>
      <li className="border-[1px] py-1 px-1 rounded-lg bg-white/80"><Link to="/halls" className="flex items-center"><MdDomain  className="text-xl"/>All Halls</Link></li>

 
      </>
    );
};

export default AsideDashboard; 