import { Link } from "react-router-dom";
import catImg from "../assets/catImage/cat07.png";
import AvailableRoomList from "./AvailableRoomList";
import { useReservation } from "../hooks/useReservation";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // adding 1 because months are 0-indexed
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function BookingDetails({ id = null }) {
  const {
    checkinDate,
    setCheckinDate,
    checkoutDate,
    setCheckoutDate,
    roomsAvailable,
    getRoomAvailability,
  } = useReservation();

  const [changeReservationId, setChangeReservationId] = useState();
  const [firstLoad, setFirstLoad] = useState(true);

  if (id && firstLoad) {
    ///get-reservation-id
    axios.get(`/reservation/get-reservation-id?id=${id}`).then((res) => {
      setCheckinDate(formatDate(res.data.reservation.check_in_date));
      setCheckoutDate(formatDate(res.data.reservation.check_out_date));
      setChangeReservationId(id);
      setFirstLoad(false);
    }, []);
  }

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
              value={checkinDate}
              type="date"
              // required

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
              value={checkoutDate}
              type="date"
              // required
              className="bg-offWhite text-sm text-gray-500  py-3 px-8 rounded-lg cursor-pointer"
            ></input>
          </div>
        </div>
        <div className="text-center py-10">
          <button
            className="bg-black py-3 px-10 rounded-lg text-xl font-normal text-white tracking-wider hover:bg-gridMidnight cursor-pointer"
            onClick={async () => {
              if (!checkinDate || !checkoutDate) {
                return toast.error("Please select checkin and checkout date.");
              }
              await getRoomAvailability();
              if (!roomsAvailable) {
                toast.error(
                  "Sorry, no room available for the selection dates."
                );
              }
            }}
            // implement try, catch to fix the problem
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
          changeReservationId={changeReservationId}
        />
      </div>
    </>
  );
}
