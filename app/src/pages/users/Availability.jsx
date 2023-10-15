import BookingDetails from "../../components/BookingDetails";
import RoomAvailabilityGrid from "../../components/RoomAvailabilityGrid";

export default function Availability() {
  return (
    <div className="flex justify-center gap-20 bg-offWhite py-40">
      <BookingDetails />
      <RoomAvailabilityGrid />
    </div>
  );
}
