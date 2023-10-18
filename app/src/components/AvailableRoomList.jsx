import AvailableRoomCard from "./AvailableRoomCard";
import { useGrid } from "../hooks/useGrid";

export default function AvailableRoomList({
  checkinDate,
  checkoutDate
}) {
  const { roomAvailability } = useGrid();
  // console.log(roomAvailability);
  return (
    <div className="flex flex-col gap-5">
      {roomAvailability.map((el) => (
        <AvailableRoomCard
          roomImage={el.roomImage}
          roomType={el.roomType}
          pricePerNight={el.pricePerNight}
          maxCapacity={el.maxCapacity}
          checkinDate={checkinDate}
          checkoutDate={checkoutDate}
        ></AvailableRoomCard>
      ))}
    </div>
  );
}
