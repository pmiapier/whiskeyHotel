export default function Header() {
    return (
        <header className="bg-blue-500 p-4 text-white shadow-md">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-semibold">
                        WhiskeyHotel
                    </div>
                    <nav className="space-x-4">
                        <a href="/" className="hover:underline">Home</a>
                        <a href="/about" className="hover:underline">About</a>
                        <a href="/contact" className="hover:underline">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}