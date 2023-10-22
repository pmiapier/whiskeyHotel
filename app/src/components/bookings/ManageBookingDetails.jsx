import Button from "../Button";
import Cozy from "../../components/roomTypes/Cozy";
import Chillout from "../../components/roomTypes/Chillout";
import Party from "../../components/roomTypes/Party";
import { Link } from "react-router-dom"; // Correct import
import axios from "axios";
import { useEffect, useState } from "react";

export default function ManageBookingDetails() {
  const [reservations, setReservations] = useState([]);

  const fetchReservations = async () => {
    const response = await axios.get("/reservation/get-reservations-by-user");
    setReservations(response.data.reservations);
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const cancelReservation = async (reservation) => {
    await axios.post(`/reservation/cancel-reservation`, reservation);
    fetchReservations();
  };

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // adding 1 because months are 0-indexed
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  return (
    <div className="px-10 py-5">
      <div className="text-xl font-medium">Reservation List</div>
      <div className=" shadow-lg rounded-lg bg-white">
        {reservations.map((reservation) => (
          <div key={reservation.id}>
            {" "}
            {/* Assuming each reservation has a unique id */}
            <div className="flex gap-10 justify-center items-center py-10">
              <div className="flex flex-col gap-5">
                <div className="flex bg-offWhite py-3 px-3 rounded-lg">
                  <div className="font-medium">CHECK IN:&nbsp;</div>
                  <div className="text-green-600">
                    {/* parse date as YYYY-MM-DD */}
                    {formatDate(reservation.check_in_date)}
                  </div>{" "}
                  {/* Example field from reservation */}
                </div>
                <div className="flex bg-offWhite py-3 px-3 rounded-lg">
                  <div className="font-medium">CHECK OUT:&nbsp;</div>
                  <div className="text-green-600">
                    {formatDate(reservation.check_out_date)}
                  </div>{" "}
                  {/* Example field from reservation */}
                </div>
              </div>
              <div>
                {reservation.room_type === "Party" && <Party />}
                {reservation.room_type === "Chillout" && <Chillout />}
                {reservation.room_type === "Cozy" && <Cozy />}
              </div>
            </div>
            <div className="flex gap-5 justify-center py-10">
              <Link to={`/changeDates?id=${reservation.id}`}>
                <Button>Change Dates</Button>
              </Link>
              <Button onClick={() => cancelReservation(reservation)}>
                Cancel Reservation
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
