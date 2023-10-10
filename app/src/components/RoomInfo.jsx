import ImageGrid from "./ImageGrid";
import RoomGrid from "./RoomGrid";

export default function RoomInfo() {
  return (
    <div className="bg-black text-white text-center">
      <div className="pt-20">
        <h1 className="text-3xl font-bold">Choose Your Favorite Room</h1>
        <p className="text-lg">
          Three different room types to choose for your dream holiday
        </p>
      </div>
      <div className="flex flex-col gap-2 py-20">
        <ImageGrid />
        <RoomGrid />
      </div>
    </div>
  );
}
