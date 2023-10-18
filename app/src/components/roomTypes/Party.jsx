import party from "../../assets/roomType/party.jpg";

export default function Party() {
  return (
    <div className="bg-gridMidnight flex rounded-lg">
      <div>
        <img src={party} className="w-48 h-48 "></img>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 text-white px-5">
        <div className="text-2xl font-bold tracking-wider">PARTY</div>
        <div> Price : 700 baht /night</div>
        <div> Max Guests : 8 </div>
      </div>
    </div>
  );
}
