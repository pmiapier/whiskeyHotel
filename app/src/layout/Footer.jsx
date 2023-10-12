export default function Footer() {
  return (
    <footer className="bg-footerMidnight rounded-b-lg p-4 text-white bottom-0">
      <div className="container mx-auto text-center">
        <p className="mb-2">© 2023 WhiskeyHotel. All rights reserved.</p>
        <nav className="space-x-4">
          <a href="/terms" className="hover:underline text-blue-300">
            Terms & Conditions
          </a>
          <a href="/privacy" className="hover:underline text-blue-300">
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
}
