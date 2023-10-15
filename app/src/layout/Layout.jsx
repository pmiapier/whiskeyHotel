import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="h-full">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
