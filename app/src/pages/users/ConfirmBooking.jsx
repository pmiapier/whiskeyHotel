import AvailableRoomCard from "../../components/AvailableRoomCard";
import Button from "../../components/Button";
import ConfirmBookingDetails from "../../components/ComfirmBookingDetails";
import Chillout from "../../components/roomTypes/Chillout";
import Cozy from "../../components/roomTypes/Cozy";
import Party from "../../components/roomTypes/Party";
import { useGrid } from "../../hooks/useGrid";

export default function ConfirmBooking() {
  return (
    <div className="bg-offWhite flex flex-col items-center py-10">
      <div className="flex gap-10 justify-around items-center p-10">
        <div className="bg-white rounded-lg shadow-lg">
          <ConfirmBookingDetails text={"CHECK IN"} dateOrNumber="2023-10-17" />
          <ConfirmBookingDetails
            text={"CHECK OUT "}
            dateOrNumber="2023-10-20"
          />
          <ConfirmBookingDetails text={"TOTAL STAYING "} dateOrNumber="3" />
          {/* totalSatying = checkout - checkin */}
        </div>
        <div>
          <Cozy />
          {/* <Chillout /> */}
          {/* <Party /> */}
        </div>
      </div>
      <div>
        <Button>CONFIRM BOOKING</Button>
      </div>
    </div>
  );
}
