import chillout from "../../assets/roomType/chillout.jpg";

export default function Chillout() {
  return (
    <div className="bg-gridMidnight flex rounded-lg">
      <div>
        <img src={chillout} className="w-48 h-48 "></img>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 text-white px-5">
        <div className="text-2xl font-bold tracking-wider">CHILLOUT</div>
        <div> Price : 500 baht /night</div>
        <div> Max Guests : 3 </div>
      </div>
    </div>
  );
}
