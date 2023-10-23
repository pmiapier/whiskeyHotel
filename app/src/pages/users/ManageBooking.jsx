import Button from "../../components/Button";
import ManageBookingDetails from "../../components/bookings/ManageBookingDetails";

export default function ManageBooking() {
  return (
    <div className="bg-offWhite">
      <div className="flex justify-center text-2xl font-bold py-10">
        {/* Hello User */}
      </div>
      <div>
        <ManageBookingDetails />
      </div>
    </div>
  );
}
