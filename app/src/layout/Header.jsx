import Button from "../components/Button";

export default function Header() {
  return (
    <header className="bg-primaryPurple p-4 text-black shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold">WhiskeyHotel</div>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">
              HOME
            </a>
            <a href="/about" className="hover:underline">
              MY BOOKING
            </a>
            <a href="/contact" className="hover:underline">
              CONTACT US
            </a>
            <a href="/contact" className="hover:underline">
              <Button>LOG IN</Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
