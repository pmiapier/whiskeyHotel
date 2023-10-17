import Button from "../components/forms/Button";
import { useAuth } from "../hooks/useAuth";

export default function Header() {
  const { logout, authUser } = useAuth(); // global state
  const isAuth = authUser ? true : false;

  const loginOrLogout = isAuth ? (
    <a className="hover:text-purpleBlackground">
      <Button onClick={logout}>LOGOUT</Button>
    </a>
  ) : (
    <a href="/login" className="hover:text-purpleBlackground">
      <Button>LOGIN</Button>
    </a>
  );

  const manageBookings = isAuth ? (
    <a
      href="/dashboard/managebooking"
      className="hover:text-purpleBlackground "
    >
      <Button>MANAGE BOOKINGS</Button>
    </a>
  ) : (
    ""
  );

  const adminDashboard =
    isAuth && authUser.role === "ADMIN" ? (
      <a href="/admin/" className="hover:text-purpleBlackground ">
        <Button>ADMIN</Button>
      </a>
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
              <Button>BOOK NOW</Button>
            </a>
            {manageBookings}
            {adminDashboard}
            {loginOrLogout}
          </nav>
        </div>
      </div>
    </header>
  );
}
