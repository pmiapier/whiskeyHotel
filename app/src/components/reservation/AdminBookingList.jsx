import React, { useEffect, useState } from "react";
import { useReservation } from "../../hooks/useReservation";
import axios from "../../config/axios";

export default function AdminBookingList() {
  const { getAllReservations, reservations } = useReservation();
  const [allReservations, setAllReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // delay useEffect

  console.log("hello", allReservations); // check value get allReservations

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  }

  useEffect(() => {
    axios
      .get("reservation/get-all-reservations")
      // getAllReservations()
      .then((res) => {
        setAllReservations(res.data.reservations);
        console.log(res.data.reservations);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(setIsLoading(false));
  }, []);

  const fetchReservations = async () => {
    const response = await axios.get("/reservation/get-all-reservations");
    setAllReservations(response.data.reservations);
  };

  const cancelReservation = async (reservation) => {
    await axios.post(`/reservation/cancel-reservation-admin`, reservation);
    fetchReservations();
  };

  return (
    <div className="bg-white w-full">
      <div className="text-2xl font-semibold p-5">Reservation Lists</div>
      <div className="rounded-lg flex flex-col justify-between items-center gap-20 py-10 px-20 ">
        {allReservations.map((el, index) => {
          return (
            <div>
              <div className="flex flex-col gap-2 font-semibold">
                <div className="flex flex-col gap-2">
                  <div>
                    GUEST: {el.user.first_name} {el.user.last_name}{" "}
                  </div>
                  <div>ROOM TYPE: {el.room.type}</div>
                </div>

                <div className="flex">
                  <div className="font-thin w-40">Check in date</div>
                  <div className="text-green-600">
                    {formatDate(el.check_in_date)}
                  </div>
                </div>

                <div className="flex">
                  <div className="font-thin w-40">Check out date</div>
                  <div className="text-orange-500">
                    {formatDate(el.check_out_date)}
                  </div>
                </div>
                <button
                  className="bg-gridMidnight py-2 px-6 rounded-lg text-lg font-normal text-white tracking-wider hover:bg-black cursor-pointer"
                  onClick={() => cancelReservation(el)}
                >
                  CANCEL
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
