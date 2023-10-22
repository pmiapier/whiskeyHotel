import AvailableRoomCard from "./AvailableRoomCard";
import { useGrid } from "../hooks/useGrid";

export default function AvailableRoomList({
  checkinDate,
  checkoutDate,
  roomsAvailable
}) {
  const { roomAvailability } = useGrid();

  return (
    <div className="flex flex-col gap-5">
      {/* added a condition if there is no available room */}
      
      {roomAvailability.map((el) => (
        roomsAvailable && roomsAvailable[el.roomType] > 0 && (
          <AvailableRoomCard
            roomImage={el.roomImage}
            roomType={el.roomType}
            pricePerNight={el.pricePerNight}
            maxCapacity={el.maxCapacity}
            checkinDate={checkinDate}
            checkoutDate={checkoutDate}
          ></AvailableRoomCard>
        )
      ))}
    </div>
  );
}



// import AvailableRoomCard from "./AvailableRoomCard";
// import { useGrid } from "../hooks/useGrid";

// export default function AvailableRoomList({
//   checkinDate,
//   checkoutDate,
//   roomsAvailable
// }) {
//   const { roomAvailability } = useGrid();

//   return (
//     <div className="flex flex-col gap-5">
//       {roomsAvailable === 0 ? (
//         <p>No available rooms for the selected dates.</p>
//       ) : (
//         roomAvailability.map((el) => (
//           roomsAvailable[el.roomType] > 0 && (
//             <AvailableRoomCard
//               roomImage={el.roomImage}
//               roomType={el.roomType}
//               pricePerNight={el.pricePerNight}
//               maxCapacity={el.maxCapacity}
//               checkinDate={checkinDate}
//               checkoutDate={checkoutDate}
//             ></AvailableRoomCard>
//           )
//         ))
//       )}
//     </div>
//   );
// }




