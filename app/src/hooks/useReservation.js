import { useState } from "react";
import axios from "axios";

export function useReservation() {
  const [checkinDate, setCheckinDate] = useState();
  const [checkoutDate, setCheckoutDate] = useState();
  const [roomsAvailable, setRoomsAvailable] = useState({});
  const [reservations, setReservations] = useState([]);
  const [reservationID, setReservationID] = useState();

  const getRoomAvailability = async () => {
    const reservationData = {
      check_in_date: checkinDate,
      check_out_date: checkoutDate,
      reservation_id: reservationID,
    };
    const res = await axios.post(
      "/reservation/get-room-availability",
      reservationData
    );
    setRoomsAvailable(res.data.roomsAvailable);
  };

  const reserveRoom = async (roomType, checkinDate, checkoutDate) => {
    const reservationData = {
      room_type: roomType,
      check_in_date: checkinDate,
      check_out_date: checkoutDate,
    };
    const res = await axios.post(
      "/reservation/create-reservation",
      reservationData
    );
    console.log(res.data);
  };

  const changeReservation = async (
    roomType,
    checkinDate,
    checkoutDate,
    reservationID
  ) => {
    const reservationData = {
      room_type: roomType,
      check_in_date: checkinDate,
      check_out_date: checkoutDate,
      id: reservationID,
    };
    const res = await axios.post(
      "/reservation/change-reservation",
      reservationData
    );
    console.log(res.data);
  };

  // const getAllReservations = async () => {
  //   const res = await axios.get("reservation/get-all-reservations");
  //   console.log(res.data);
  //   setReservations(res.data);
  // };

  return {
    checkinDate,
    setCheckinDate,
    checkoutDate,
    setCheckoutDate,
    roomsAvailable,
    getRoomAvailability,
    reserveRoom,
    changeReservation,
    // getAllReservations,
    reservations,
    setReservationID,
  };
}
