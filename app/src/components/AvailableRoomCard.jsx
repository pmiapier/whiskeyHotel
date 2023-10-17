export default function AvailableRoomCard({
  roomImage,
  roomType,
  pricePerNight,
  maxCapacity,
}) {
  // console.log("1", roomImage);
  return (
    <div className="bg-gridMidnight flex rounded-lg">
      <div>
        <img src={roomImage} className="w-96 h-96 "></img>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 text-white px-5">
        <div className="text-2xl font-bold tracking-wider">{roomType}</div>
        <div> Price : {pricePerNight} /night</div>
        <div> Max Guests : {maxCapacity}</div>
        <div className=" py-5">
          <button className="bg-purple-500 py-3 px-10 rounded-lg text-xl font-normal text-white tracking-wider hover:bg-purpleBlackground cursor-pointer">
            RESERVE THIS ROOM
          </button>
        </div>
      </div>
    </div>
  );
}
