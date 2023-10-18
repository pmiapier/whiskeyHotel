export default function RoomTypeDetails() {
  return (
    <div>
      <div>
        <img src={roomImage} className="w-96 h-96 "></img>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 text-white px-5">
        <div className="text-2xl font-bold tracking-wider">{roomType}</div>
        <div> Price : {pricePerNight} /night</div>
        <div> Max Guests : {maxCapacity}</div>
      </div>
    </div>
  );
}
