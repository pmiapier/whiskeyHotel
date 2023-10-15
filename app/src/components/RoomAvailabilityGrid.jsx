import { useGrid } from "../hooks/useGrid";
import AvailabilityImages from "./AvailabilityImages";

export default function RoomAvailabilityGrid() {
  const { roomAvailability } = useGrid();
  return (
    <div>
      {roomAvailability.map((el) => {
        return(
          <AvailabilityImages
            backgroundColor={el.backgroundColor}
            roomImage={el.roomImage}>
          </AvailabilityImages>
        )
      })}
    </div>
  );
}
