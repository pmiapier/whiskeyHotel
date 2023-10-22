import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Booking from "../pages/users/Booking";
import ChangeDates from "../pages/users/ChangeDates";
// import Availability from "../pages/users/Availability";
import RedirectIfAuthenticated from "../components/forms/RedirectIfAuthenticated";
import Authenticated from "../components/Authenticated";
import ManageBooking from "../pages/users/ManageBooking";
import ConfirmBooking from "../pages/users/ConfirmBooking";
import AdminManageBooking from "../pages/admins/AdminManageBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/login",
        element: (
          <RedirectIfAuthenticated>
            <Login />
          </RedirectIfAuthenticated>
        ),
      },
      {
        path: "/register",
        element: (
          <RedirectIfAuthenticated>
            <Register />
          </RedirectIfAuthenticated>
        ),
      },
      // { path: "/user", element: <Home /> },
      {
        path: "/dashboard",
        element: (
          <Authenticated>
            <Booking />
          </Authenticated>
        ),
      },
      {
        path: "changeDates",
        element: (
          <Authenticated>
            <ChangeDates />
          </Authenticated>
        ),
      },
      { path: "/dashboard/managebooking", element: <ManageBooking /> },
      { path: "/dashboard/confirmbooking", element: <ConfirmBooking /> },
      { path: "/admin", element: <AdminManageBooking /> },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}

// {
//   path: "/user",
//   element: <Layout />,
//   children: [

//   ],
// },
