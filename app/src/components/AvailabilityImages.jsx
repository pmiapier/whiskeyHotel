export default function AvailabilityImages({ backgroundColor, catImage }) {
  return (
    <div className={`${backgroundColor}grid grid-cols-1 items-center`}>
      <div>
        <img src={catImage} />
      </div>
    </div>
  );
}
