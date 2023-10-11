import Hero from "../components/Hero";
import InfoGrid from "../components/InfoGrid";
import ImageGrid from "../components/ImageGrid";
import RoomGrid from "../components/RoomGrid";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-black text-white text-center">
        <div className="pt-20">
          <h1 className="text-3xl font-bold">CHOOSE YOUR FAVORITE ROOM</h1>
          <p className="text-lg">
            Three different room types to choose for your dream holiday
          </p>
        </div>
        <div className="flex flex-col gap-2 py-10">
          <ImageGrid />
          <RoomGrid />
        </div>
      </div>
      <div className="text-center pt-20">
        <h1 className="text-3xl font-bold">EASY STAYING</h1>
        <p className="text-lg">
          Only 3 easy steps before you can enjoy your trip and your love ones
          will be good taken care of
        </p>
      </div>

      <div className="flex justify-center pt-10 pb-40 ">
        <InfoGrid />
      </div>
    </div>
  );
}
