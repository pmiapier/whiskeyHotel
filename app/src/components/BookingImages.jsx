import cozy from "../assets/roomType/cozy.jpg";
import chillout from "../assets/roomType/chillout.jpg";
import party from "../assets/roomType/party.jpg";

export default function BookingImages() {
  return (
    <div className="grid gap-5 " style={{ width: "500px" }}>
      <div className="flex justify-start">
        {/* bg-gridMidnight w-64 h-64 rounded-lg shadow-md flex justify-center items-center */}
        <div>
          <img
            src={cozy}
            className="w-60 h-60 rounded-xl border-gridMidnight border-8"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <img
            src={chillout}
            className="w-60 h-60 rounded-xl border-gridMidnight border-8"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <div>
          <img
            src={party}
            className=" w-60 h-60 rounded-xl border-gridMidnight border-8"
          />
        </div>
      </div>
    </div>
  );
}
