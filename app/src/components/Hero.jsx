export default function Hero() {
    return (
        <div className="bg-blue-500 text-white py-24">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Welcome to WhiskeyHotel
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                    Book your room now
                </p>
                <div className="space-x-4">
                    <a href="/register" className="bg-blue-700 hover:bg-blue-800 py-2 px-6 rounded-full text-xl font-semibold transition duration-300">
                        Get Started
                    </a>
                    <a href="/about" className="text-blue-200 hover:text-blue-100 py-2 px-6 rounded-full text-xl font-semibold transition duration-300">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
}
