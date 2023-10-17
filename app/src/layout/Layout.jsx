import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
