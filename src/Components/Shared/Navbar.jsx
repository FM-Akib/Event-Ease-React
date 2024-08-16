import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useUserInfo from "../../Hooks/useUserInfo";
import admin from '../../assets/admin.png'
import logo from '../../assets/EVENT EASE.png';
import { FaSignInAlt, FaSignOutAlt, FaUserPlus } from "react-icons/fa";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const { userInfo } = useUserInfo();
  const nagate = useNavigate()

  const handleLogout = () => {
       logOut()
        .then(() => { })
        .catch(err => console.log(err));
        nagate('/')
      }
// console.log(userInfo)

  return (
    <nav className="fixed top-0 z-40 w-full bg-[#FEFCE8]/90 md:px-20">
      <div className="container m-auto px-2 md:px-12 lg:px-7">
        <div className="flex px-6 md:px-0 z-20 flex-wrap items-center justify-between py-5 gap-6 md:py-5 md:gap-0">
          <input type="checkbox" id="toggleNav" className="peer hidden" />
          <label
            htmlFor="toggleNav"
            role="overlaynav"
            className="fixed left-0 top-0 transition-all 
            md:peer-checked:hidden md:hidden opacity-0 hidden peer-checked:z-0 
            peer-checked:opacity-75 peer-checked:block w-full h-screen
            bg-gray-200 bg-opacity-75 "
          ></label>
          <div className="relative z-40">
            <NavLink to="/" aria-label="logo">
              <img
                src={logo}
                className="w-32 sm:w-36"
                alt="logo"
                width="144"
                height="68"
              />
            </NavLink>
          </div>

          <div
            id="navlinks"
            className="fixed h-full w-4/5 max-w-sm top-0 -left-full peer-checked:-left-0 md:relative md:top-0 md:left-0 transition-all z-30 md:flex items-center p-8 bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent md:w-max"
          >
            <div className="z-20 flex gap-8 md:gap-0 flex-col md:flex-row md:items-center w-full">
              <ul className="pt-28 lg:pt-0 gap-8 tracking-wide font-medium flex-col flex md:flex-row md:gap-0">
                <li className="max-w-max">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? " border-yellow-400 border-2 rounded-tr-lg rounded-bl-lg text-yellow-800 block px-3"
                        : "text-gray-600 block md:px-3"
                    }
                  >
                    <div className="relative before:absolute before:-bottom-2 md:before:-bottom-7 before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full transition">
                      <span>Home</span>
                    </div>
                  </NavLink>
                </li>

                <li className="max-w-max">
                  <NavLink
                    to="/allhalls"
                    className={({ isActive }) =>
                      isActive
                        ? " border-yellow-400 border-2 rounded-tr-lg rounded-bl-lg text-yellow-800 block px-3"
                        : "text-gray-600 block md:px-3 group"
                    }
                  >
                    <div className="relative before:absolute before:-bottom-2 md:before:-bottom-7 before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full transition group-hover:before:scale-x-100">
                      <span className="transition group-hover:text-cyan-700">
                        Halls
                      </span>
                    </div>
                  </NavLink>
                </li>

                <li className="max-w-max">
                  <NavLink
                    to="/card"
                    className={({ isActive }) =>
                      isActive
                        ? " border-yellow-400 border-2 rounded-tr-lg rounded-bl-lg text-yellow-800 block px-3"
                        : "text-gray-600 block md:px-3 group"
                    }
                  >
                    <div className="relative before:absolute before:-bottom-2 md:before:-bottom-7 before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full transition group-hover:before:scale-x-100">
                      <span className="transition group-hover:text-cyan-700">
                        Make Card
                      </span>
                    </div>
                  </NavLink>
                </li>

                <li className="max-w-max">
                  <NavLink
                    to="/vehicle"
                    className={({ isActive }) =>
                      isActive
                        ? " border-yellow-400 border-2 rounded-tr-lg rounded-bl-lg text-yellow-800 block px-3"
                        : "text-gray-600 block md:px-3 group"
                    }
                  >
                    <div className="relative before:absolute before:-bottom-2 md:before:-bottom-7 before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full transition group-hover:before:scale-x-100">
                      <span className="transition group-hover:text-cyan-700">
                        Vehicle
                      </span>
                    </div>
                  </NavLink>
                </li>

              </ul>
              <div className="flex sm:hidden pt-4 w-full">
                <NavLink to="/login">
                  <button
                    type="button"
                    title="Start buying"
                    className="flex justify-center items-center w-full py-3 px-6 text-center rounded-full transition bg-gray-900 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800"
                  >
                    <span className="block text-white text-sm">Login</span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="block-endnav w-max flex items-center gap-4">
           
           
          {
            user ? <>
            
            <NavLink to={`${userInfo.type === 'hall' ? '/dashboardHall/home' : '/dashboardUser/home'}`}>
              <div className="h-10 w-10 overflow-hidden rounded-full ring-8 transition-all 
                              ring-[#FFB347] hover:ring-[#FF8C00] active:ring-[#FF7F50] cursor-pointer">
                <img src={userInfo?.type === 'hall' ? admin : userInfo.image} 
                    className="bg-cover bg-center transform hover:scale-105 transition-transform" 
                    alt="" />
              </div>
            </NavLink>

            <button
              onClick={handleLogout}
              type="button"
              className="hidden sm:flex items-center justify-center w-full py-3 px-6 text-center rounded-md transition 
                        bg-gradient-to-r from-[#555555] to-[#777777] hover:from-[#777777] hover:to-[#999999] 
                        active:from-[#555555] active:to-[#444444] focus:ring-2 focus:ring-[#999999] 
                        sm:w-max shadow-md hover:shadow-lg focus:shadow-md active:shadow-sm 
                        transform hover:-translate-y-1 active:translate-y-0.5"
            >
              <FaSignOutAlt className="mr-2 text-[#FEFBE8] text-lg" />
              <span className="block text-[#FEFBE8] text-base font-semibold">Logout</span>
            </button>

            </>: <>

            <NavLink to="/login">
              <button
                type="button"
                className="hidden sm:flex items-center justify-center w-full py-3 px-6 text-center rounded-md transition 
                          bg-gradient-to-r from-[#FF8C00] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFB347] 
                          active:from-[#FF8C00] active:to-[#FF7F50] focus:ring-[#FFB347] 
                          sm:w-max  hover:shadow-lg focus:shadow-md active:shadow-sm 
                          transform hover:-translate-y-1 active:translate-y-0.5"
              >
                <FaSignInAlt className="mr-2 text-[#FEFBE8] text-lg" />
                <span className="block text-[#FEFBE8] text-base font-semibold">Login</span>
              </button>
            </NavLink>

            <NavLink to="/signup">
              <button
                type="button"
                className="hidden sm:flex items-center justify-center w-full py-3 px-6 text-center rounded-md transition 
                          bg-gradient-to-r from-[#FF4500] to-[#FF6347] hover:from-[#FF6347] hover:to-[#FF7F50] 
                          active:from-[#FF4500] active:to-[#FF4500]  focus:ring-[#FF7F50] 
                          sm:w-max  hover:shadow-lg focus:shadow-md active:shadow-sm 
                          transform hover:-translate-y-1 active:translate-y-0.5"
              >
                <FaUserPlus className="mr-2 text-[#FEFBE8] text-lg" />
                <span className="block text-[#FEFBE8] text-base font-semibold">Signup</span>
              </button>
            </NavLink>
            

            </>
          }




            <div className="flex items-center md:hidden max-h-10">
              <label
                htmlFor="toggleNav"
                role="button"
                aria-label="hamburger"
                id="hamburger"
                className="relative p-6 -mr-6"
              >
                <div
                  role="hidden"
                  id="line"
                  className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                ></div>
                <div
                  role="hidden"
                  id="line2"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                ></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
