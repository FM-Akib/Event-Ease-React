import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { TbCalendarTime } from "react-icons/tb";
import useUserInfo from "../../Hooks/useUserInfo";


const AsideDashboard = () => {
  const userInfo = useUserInfo();
    return (
      <>
      <li className="border-[1px] py-1 px-1 rounded-lg bg-white/80"><Link to={`${userInfo?.type === 'hall' ? '/dashboardHall/home':"/dashboardUser/home"}`} className="flex items-center"><FaRegUserCircle className="text-xl"/> Profile     </Link></li>
      <li className="border-[1px] py-1 px-1 rounded-lg bg-white/80"><Link to="/dashboardHall/edit" className="flex items-center"><FaUserEdit  className="text-xl"/>Edit Profile</Link></li>
      <li className="border-[1px] py-1 px-1 rounded-lg bg-white/80"><Link to="/dashboardHall/bookings" className="flex items-center"><TbCalendarTime  className="text-xl"/>Bookings</Link></li>   
      </>
    );
};

export default AsideDashboard;