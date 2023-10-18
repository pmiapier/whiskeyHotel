import cozy from "../../assets/roomType/cozy.jpg";

export default function Cozy() {
  return (
    <div className="bg-gridMidnight flex rounded-lg">
      <div>
        <img src={cozy} className="w-48 h-48 "></img>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 text-white px-5">
        <div className="text-2xl font-bold tracking-wider">COZY</div>
        <div> Price : 300 baht /night</div>
        <div> Max Guests : 2 </div>
      </div>
    </div>
  );
}
