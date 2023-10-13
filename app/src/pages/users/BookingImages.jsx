import cozy from "../../assets/roomType/cozy.jpg";
import chillout from "../../assets/roomType/chillout.jpg";
import party from "../../assets/roomType/party.jpg";

export default function BookingImages() {
  return (
    <div className="grid gap-5 " style={{ width: "500px" }}>
      <div className="flex justify-start">
        <div className="bg-gridMidnight w-64 h-64 rounded-lg shadow-md flex justify-center items-center">
          <img src={cozy} className="w-60 h-60 rounded-lg" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-gridMidnight w-64 h-64 rounded-lg shadow-md flex justify-center items-center">
          <img src={chillout} className="w-60 h-60 rounded-lg" />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-gridMidnight w-64 h-64 rounded-lg shadow-md flex justify-center items-center">
          <img src={party} className=" w-60 h-60 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
