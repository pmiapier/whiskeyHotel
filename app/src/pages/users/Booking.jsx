import BookingDetails from "./BookingDetails";
import BookingImages from "./BookingImages";

export default function Booking() {
  return (
    <div className="flex justify-center gap-20 bg-offWhite py-40">
      <BookingDetails />
      <BookingImages />
    </div>
  );
}
