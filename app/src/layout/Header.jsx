import Button from "../components/forms/Button";
import LoginForm from "../components/forms/LoginForm";

export default function Header() {
  return (
    <header className="bg-gridMidnight rounded-t-lg p-4 text-white shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold">
            <a href="/" className="hover:underline">
              WhiskeyHotel
            </a>
          </div>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">
              HOME
            </a>
            <a href="/booking" className="hover:underline">
              MY BOOKING
            </a>
            <a href="/contact" className="hover:underline">
              CONTACT US
            </a>
            <a href="/login" className="hover:underline">
              <Button>LOGIN</Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
