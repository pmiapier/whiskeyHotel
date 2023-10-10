export default function GridItem({ color, roomImg, roomType, des, price }) {
  return (
    <div
      className={` ${color} flex flex-col gap-6  text-black text-lg font-bold rounded-lg `}
    >
      <div className="px-6 py-6">
        <img
          className=" aspect-square border-2 border-white rounded-full"
          src={roomImg}
        />
      </div>
      <div className="flex flex-col gap-6 bg-white text-black text-3xl h-52 rounded-b-lg py-6">
        <h1>{roomType}</h1>
        <h1 className="text-lg font-thin">{des}</h1>
        <h1 className="text-lg font-thin"> Price : {price}</h1>
      </div>
    </div>
  );
}
