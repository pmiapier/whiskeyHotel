import AvailableRoomCard from "../../components/AvailableRoomCard";
import Button from "../../components/Button";
import ConfirmBookingDetails from "../../components/ComfirmBookingDetails";
import Chillout from "../../components/roomTypes/Chillout";
import Cozy from "../../components/roomTypes/Cozy";
import Party from "../../components/roomTypes/Party";
import { useGrid } from "../../hooks/useGrid";
import { useReservation } from "../../hooks/useReservation";

export default function ConfirmBooking() {
  const { reserveRoom } = useReservation();

  // Get the current URL
  const url = new URL(window.location.href);

  // Get the value of the 'room' parameter
  const roomType = url.searchParams.get("room");
  const checkinDate = url.searchParams.get("checkinDate");
  const checkoutDate = url.searchParams.get("checkoutDate");
  const totalStay = (new Date(checkoutDate) - new Date(checkinDate)) / 86400000; // in day format - divide by milleseconds in a day
  return (
    <div className="bg-offWhite flex flex-col items-center py-10">
      <div className="flex gap-10 justify-around items-center p-10">
        <div className="bg-white rounded-lg shadow-lg">
          <ConfirmBookingDetails text={"CHECK IN"} dateOrNumber={checkinDate} />
          <ConfirmBookingDetails
            text={"CHECK OUT "}
            dateOrNumber={checkoutDate}
          />
          <ConfirmBookingDetails
            text={"TOTAL STAYING "}
            dateOrNumber={totalStay}
          />
          {/* totalSatying = checkout - checkin */}
        </div>
        <div>
          {roomType === "Cozy" ? (
            <Cozy />
          ) : roomType === "Chillout" ? (
            <Chillout />
          ) : (
            <Party />
          )}

          {/* <Chillout /> */}
          {/* <Party /> */}
        </div>
      </div>
      <div>
        <Button
          onClick={() => {
            reserveRoom(roomType, checkinDate, checkoutDate);
          }}
        >
          CONFIRM BOOKING
        </Button>
      </div>
    </div>
  );
}
