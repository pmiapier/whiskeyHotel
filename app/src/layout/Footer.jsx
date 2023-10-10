export default function Footer() {
    return (
        <footer className="bg-blue-700 p-4 text-white sticky bottom-0">
        <div className="container mx-auto text-center">
            <p className="mb-2">© 2023 WhiskeyHotel. All rights reserved.</p>
            <nav className="space-x-4">
                <a href="/terms" className="hover:underline text-blue-300">Terms & Conditions</a>
                <a href="/privacy" className="hover:underline text-blue-300">Privacy Policy</a>
            </nav>
        </div>
    </footer>
    )
}