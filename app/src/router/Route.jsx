import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Booking from "../pages/users/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    path: "/user",
    element: <Layout />,
    children: [
      { path: "/user", element: <Home /> },
      { path: "/user/booking", element: <Booking /> },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
