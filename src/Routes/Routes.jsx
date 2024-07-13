
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
        }
      ]
    },
  ]);