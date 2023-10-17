import { useState } from "react";
import BookingDetails from "../../components/BookingDetails";
import AvailableRoomList from "../../components/AvailableRoomList";
import AvailableRoomCard from "../../components/AvailableRoomCard";

export default function Booking() {
  return (
    <>
      <div className="flex bg-offWhite py-10 gap-10 justify-center">
        <BookingDetails />
      </div>
    </>
  );
}
