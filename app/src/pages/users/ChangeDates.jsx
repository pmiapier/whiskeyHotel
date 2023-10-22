import { useState } from "react";
import BookingDetails from "../../components/BookingDetails";
import AvailableRoomList from "../../components/AvailableRoomList";
import AvailableRoomCard from "../../components/AvailableRoomCard";

export default function ChangeDates() {
  const url = new URL(window.location.href);
  const bookingID = url.searchParams.get("id");
  return (
    <>
      <div className="flex bg-offWhite py-10 gap-10 justify-center">
        <BookingDetails id={bookingID} />
      </div>
    </>
  );
}
