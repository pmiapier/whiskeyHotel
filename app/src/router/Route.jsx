import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Booking from "../pages/users/Booking";
import Availability from "../pages/users/Availability";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/user", element: <Home /> },
      { path: "/login/user", element: <Booking /> },
      { path: "/login/user/booking", element: <Availability /> },
    ],
  },

  // {
  //   path: "/user",
  //   element: <Layout />,
  //   children: [

  //   ],
  // },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
