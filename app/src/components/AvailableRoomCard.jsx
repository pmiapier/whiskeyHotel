import Button from "./Button";

export default function AvailableRoomCard({
  roomImage,
  roomType,
  pricePerNight,
  maxCapacity,
  checkinDate,
  checkoutDate,
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
          <a href={`/dashboard/confirmbooking?room=${roomType}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}`}>
            <Button>RESERVE THIS ROOM</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
