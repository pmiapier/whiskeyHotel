import AvailableRoomCard from "../../components/AvailableRoomCard";
import Button from "../../components/Button";
import ConfirmBookingDetails from "../../components/ComfirmBookingDetails";
import Chillout from "../../components/roomTypes/Chillout";
import Cozy from "../../components/roomTypes/Cozy";
import Party from "../../components/roomTypes/Party";
import { useReservation } from "../../hooks/useReservation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ConfirmBooking() {
  const { reserveRoom, changeReservation } = useReservation();

  // Get the current URL
  const url = new URL(window.location.href);

  // Get the value of the 'room' parameter
  const roomType = url.searchParams.get("room");
  const checkinDate = url.searchParams.get("checkinDate");
  const checkoutDate = url.searchParams.get("checkoutDate");
  const changeReservationId = url.searchParams.get("changeReservationId");
  const totalStay = (new Date(checkoutDate) - new Date(checkinDate)) / 86400000; // in day format - divide by milleseconds in a day
  const navigate = useNavigate();
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
        </div>
        <div>
          {roomType === "Cozy" ? (
            <Cozy />
          ) : roomType === "Chillout" ? (
            <Chillout />
          ) : (
            <Party />
          )}
        </div>
      </div>
      <div>
        {changeReservationId ? (
          <Button
            onClick={async () => {
              await changeReservation(
                roomType,
                checkinDate,
                checkoutDate,
                changeReservationId
              );
              toast.success("Your room is now successfully rebooked!");
              navigate("/dashboard/managebooking");
            }}
          >
            CHANGE BOOKING
          </Button>
        ) : (
          <Button
            onClick={async () => {
              await reserveRoom(roomType, checkinDate, checkoutDate);
              toast.success("Your room is now successfully reserved!");
              navigate("/dashboard/managebooking");
            }}
          >
            CONFIRM BOOKING
          </Button>
        )}
      </div>
    </div>
  );
}
