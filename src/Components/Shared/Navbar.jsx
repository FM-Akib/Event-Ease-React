import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useUserInfo from "../../Hooks/useUserInfo";
import admin from '../../assets/admin.png';
import logo from '../../assets/EVENT EASE.png';
import { FaSignInAlt, FaSignOutAlt, FaUserPlus } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { userInfo } = useUserInfo();
  const navigate = useNavigate();

  // State to manage the mobile menu
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
    navigate('/');
  };

  const handleNavLinkClick = () => {
    setIsNavOpen(false); // Close mobile menu when any link is clicked
  };

  return (
    <nav className="fixed top-0 z-40 w-full bg-[#FEFCE8]/90 md:px-20">
      <div className="container m-auto px-2 md:px-12 lg:px-7">
        <div className="flex px-6 md:px-0 z-20 flex-wrap items-center justify-between py-5 gap-6 md:py-5 md:gap-0">
          
          {/* Logo */}
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

         

          {/* Nav Links */}
          <div
            className={`fixed h-full w-4/5 max-w-sm top-0 transition-all z-30 md:relative md:top-0 md:left-0 md:flex items-center p-8 bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent md:w-max ${
              isNavOpen ? "left-0" : "-left-full"
            } md:left-0`}
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
                    onClick={handleNavLinkClick} // Close menu when clicked
                  >
                    <span>Home</span>
                  </NavLink>
                </li>
                <li className="max-w-max">
                  <NavLink
                    to="/allhalls"
                    className={({ isActive }) =>
                      isActive
                        ? " border-yellow-400 border-2 rounded-tr-lg rounded-bl-lg text-yellow-800 block px-3"
                        : "text-gray-600 block md:px-3"
                    }
                    onClick={handleNavLinkClick}
                  >
                    <span>Halls</span>
                  </NavLink>
                </li>
                <li className="max-w-max">
                  <NavLink
                    to="/card"
                    className={({ isActive }) =>
                      isActive
                        ? " border-yellow-400 border-2 rounded-tr-lg rounded-bl-lg text-yellow-800 block px-3"
                        : "text-gray-600 block md:px-3"
                    }
                    onClick={handleNavLinkClick}
                  >
                    <span>Make Card</span>
                  </NavLink>
                </li>
                <li className="max-w-max">
                  <NavLink
                    to="/vehicle"
                    className={({ isActive }) =>
                      isActive
                        ? " border-yellow-400 border-2 rounded-tr-lg rounded-bl-lg text-yellow-800 block px-3"
                        : "text-gray-600 block md:px-3"
                    }
                    onClick={handleNavLinkClick}
                  >
                    <span>Vehicle</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* User Actions */}
          <div className="block-endnav w-max flex items-center gap-4">
            {user ? (
              <>
                <NavLink
                  to={`${
                    userInfo.type === "hall"
                      ? "/dashboardHall/home"
                      : "/dashboardUser/home"
                  }`}
                >
                  <div className="h-10 w-10 overflow-hidden rounded-full ring-2 transition-all 
                                  ring-[#FFB347] hover:ring-[#FF8C00] active:ring-[#FF7F50] cursor-pointer">
                    <img
                      src={userInfo?.type === "hall" ? admin : userInfo.image}
                      className="bg-cover bg-center transform hover:scale-105 transition-transform"
                      alt=""
                    />
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
                  <span className="block text-[#FEFBE8] text-base font-semibold">
                    Logout
                  </span>
                </button>
              </>
            ) : (
              <>
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
                    <span className="block text-[#FEFBE8] text-base font-semibold">
                      Login
                    </span>
                  </button>
                </NavLink>

                <NavLink to="/signup">
                  <button
                    type="button"
                    className="hidden sm:flex items-center justify-center w-full py-3 px-6 text-center rounded-md transition 
                              bg-gradient-to-r from-[#7CFC00] to-[#32CD32] hover:from-[#32CD32] hover:to-[#00FF7F] 
                              active:from-[#7CFC00] active:to-[#00FF00] focus:ring-[#32CD32] 
                              sm:w-max  hover:shadow-lg focus:shadow-md active:shadow-sm 
                              transform hover:-translate-y-1 active:translate-y-0.5"
                  >
                    <FaUserPlus className="mr-2 text-[#FEFBE8] text-lg" />
                    <span className="block text-[#FEFBE8] text-base font-semibold">
                      Sign Up
                    </span>
                  </button>
                </NavLink>
              </>
            )}
          </div>

          {/* Hamburger button for mobile */}
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="md:hidden z-40"
            aria-label="Toggle Menu"
          >
            {isNavOpen ? (
              // X Icon
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>



        </div>
      </div>
    </nav>
  );
};

export default Navbar;
