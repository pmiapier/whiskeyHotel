import BookingDetails from "../../components/BookingDetails";
import BookingImages from "../../components/BookingImages";

export default function Booking() {
  return (
    <div className="flex justify-center gap-20 bg-offWhite py-20">
      <BookingDetails />

      <BookingImages />
    </div>
  );
}
