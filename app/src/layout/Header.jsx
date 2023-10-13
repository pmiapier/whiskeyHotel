import Button from "../components/forms/Button";
import LoginForm from "../components/forms/LoginForm";

export default function Header() {
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
            <a href="/user/booking" className="hover:text-purpleBlackground ">
              MY BOOKING
            </a>
            <a href="/contact" className="hover:text-purpleBlackground ">
              CONTACT US
            </a>
            <a href="/login" className="hover:text-purpleBlackground">
              <Button>LOGIN</Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
