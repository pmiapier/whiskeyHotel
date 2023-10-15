export default function AvailabilityImages({ backgroundColor, roomImage }) {
  return (
    <div className={`${backgroundColor} grid grid-cols-1 items-center`}>
      <div>
        <img src={roomImage} />
      </div>
    </div>
  );
}
