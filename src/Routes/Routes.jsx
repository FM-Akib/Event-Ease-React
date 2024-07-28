
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Landing from "../Pages/Landing";
import Halls from "../Pages/Halls";
import AHallPage from "../Pages/AHallPage";
import BookHall from "../Pages/BookHall";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Signuphall from "../Pages/Signuphall";
import DashboardHallLayout from "../Layout/DashboardHallLayout";
import HomeHall from "../Pages/HallDashboard/HomeHall";
import EditHallProfile from "../Pages/HallDashboard/EditHallProfile";
import DashboardUser from "../Layout/DashboardUser";
import HomeUser from "../Pages/UserDashboard/HomeUser";
import MyBookings from "../Pages/UserDashboard/MyBookings";
import Bookings from "../Pages/HallDashboard/Bookings";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Landing/>
        },
        {
          path: "/allhalls",
          element: <Halls/>
        },
        {
          path: "/hall/:id",
          element: <AHallPage/>,
          loader: async ({ params }) => {
            const response = await fetch(`http://localhost:5000/halls/${params.id}`);
            return response.json();
          }
        },
        {
          path: "/bookhall/:id",
          element: <BookHall/>,
          loader: async ({ params }) => {
            const response = await fetch(`http://localhost:5000/halls/${params.id}`);
            return response.json();
          }
        },
        {
          path:'/login',
          element: <Login/>
        },
        {
          path:'/signup',
          element: <Signup/>
        },
        {
          path:'/signuphall',
          element: <Signuphall/>
        }
      ]
    },
    {
      path:'/dashboardUser',
      element: <DashboardUser/>,
      children: [
        {
          path:'home',
          element: <HomeUser/>
        },
        {
          path:'mybookings',
          element: <MyBookings/>
        }
      ]
    },
    {
      path:'/dashboardHall',
      element: <DashboardHallLayout/>,
      children: [
        {
          path:'home',
          element: <HomeHall/>
        },
        {
          path:'edit',
          element: <EditHallProfile/>
        },
        {
          path:'bookings',
          element: <Bookings/>
        }
      ]
    }
  ]);