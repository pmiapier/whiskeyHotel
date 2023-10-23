import ButtonForHeader from "../components/forms/ButtonForHeader";
import { useAuth } from "../hooks/useAuth";

export default function Header() {
  const { logout, authUser } = useAuth(); // global state
  const isAuth = authUser ? true : false;

  const loginOrLogout = isAuth ? (
    <a className="hover:text-purpleBlackground">
      <ButtonForHeader onClick={logout}>LOGOUT</ButtonForHeader>
    </a>
  ) : (
    <a href="/login" className="hover:text-purpleBlackground">
      <ButtonForHeader>LOGIN</ButtonForHeader>
    </a>
  );

  const manageBookings =
    isAuth && authUser.role !== "ADMIN" ? (
      <a
        href="/dashboard/managebooking"
        className="hover:text-purpleBlackground "
      >
        <ButtonForHeader>MANAGE BOOKINGS</ButtonForHeader>
      </a>
    ) : (
      ""
    );

  const adminDashboard =
    isAuth && authUser.role === "ADMIN" ? (
      <a href="/admin/allbookings" className="hover:text-purpleBlackground ">
        <ButtonForHeader>All BOOKINGS</ButtonForHeader>
      </a>
    ) : (
      ""
    );

  const adminStatus =
    isAuth && authUser.role === "ADMIN" ? (
      <span className="text-red-500 text-xl">ADMIN</span>
    ) : (
      ""
    );

  return (
    <header className="bg-primaryPurple rounded-t-lg p-10 text-black font-bold shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold">
            <a href="/" className="hover:underline">
              WhiskeyHotel
            </a>
          </div>
          <nav className="space-x-4">
            <a href="/" className=" hover:text-purpleBlackground ">
              HOME
            </a>
            <a href="/contact" className="hover:text-purpleBlackground ">
              CONTACT US
            </a>
            <a href="/dashboard" className="hover:text-purpleBlackground ">
              <ButtonForHeader>BOOK NOW</ButtonForHeader>
            </a>
            {manageBookings}
            {adminDashboard}
            {loginOrLogout}
            {adminStatus}
          </nav>
        </div>
      </div>
    </header>
  );
}
