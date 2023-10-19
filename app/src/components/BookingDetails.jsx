// import FormButton from "../../components/forms/FormButton";

import { Link } from "react-router-dom";
import catImg from "../assets/catImage/cat07.png";
import AvailableRoomList from "./AvailableRoomList";
import { useReservation } from "../hooks/useReservation";

export default function BookingDetails() {
  const {
    checkinDate,
    setCheckinDate,
    checkoutDate,
    setCheckoutDate,
    roomsAvailable,
    getRoomAvailability,
  } = useReservation();

  return (
    <>
      <div className="bg-white py-20 px-8 shadow-xl" style={{ width: "500px" }}>
        <div className="text-center">
          <div className="text-2xl font-bold">WHISKEY</div>{" "}
          <div className="font-mono">CAT HOTEL</div>
        </div>
        <div className="py-10 grid grid-cols-1 gap-6 font-bold ">
          <div className="grid gap-2">
            <div className="pl-2">CHECK IN DATE</div>
            <input
              onChange={(e) => {
                let date = new Date(e.target.value);
                let formattedDate = date.toISOString().slice(0, 10);
                setCheckinDate(formattedDate);
              }}
              type="date"
              className="bg-offWhite text-sm text-gray-500 py-3 px-8 rounded-lg cursor-pointer"
            ></input>
          </div>
          <div className="grid gap-2">
            <div className="pl-2">CHECK OUT DATE</div>
            <input
              onChange={(e) => {
                let date = new Date(e.target.value);
                let formattedDate = date.toISOString().slice(0, 10);
                setCheckoutDate(formattedDate);
              }}
              type="date"
              className="bg-offWhite text-sm text-gray-500  py-3 px-8 rounded-lg cursor-pointer"
            ></input>
          </div>
        </div>
        <div className="text-center py-10">
          <button
            className="bg-black py-3 px-10 rounded-lg text-xl font-normal text-white tracking-wider hover:bg-gridMidnight cursor-pointer"
            onClick={() => {
              getRoomAvailability();
            }}
          >
            CHECK AVAILABILITY
          </button>
          <div className="flex justify-center pt-20">
            <img src={catImg} className="h-28" />
          </div>
        </div>
      </div>
      <div>
        <AvailableRoomList
          checkinDate={checkinDate}
          checkoutDate={checkoutDate}
          roomsAvailable={roomsAvailable}
        />
      </div>
    </>
  );
}
