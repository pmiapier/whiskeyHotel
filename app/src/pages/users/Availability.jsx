import AvailabilityImages from "../../components/AvailabilityImages";
import BookingDetails from "../../components/BookingDetails";

export default function Availability() {
  return (
    <div className="flex justify-center gap-20 bg-offWhite py-40">
      <BookingDetails />
      <AvailabilityImages />
    </div>
  );
}
