import BookingDetails from "./BookingDetails";
import BookingImages from "./BookingImages";

export default function Booking() {
  return (
    <div className="flex justify-around bg-offWhite py-20">
      <BookingDetails />
      <BookingImages />
    </div>
  );
}
