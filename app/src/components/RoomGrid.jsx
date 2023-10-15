import GridItem from "./GridItem";

export default function RoomGrid({ roomInformation }) {
  return (
    <div className="grid grid-rows-1 grid-cols-3 gap-2 px-20 ">
      {roomInformation.map((el) => {
        return (
          <GridItem
            color={el.background}
            roomImg={el.roomImg}
            roomType={el.roomType}
            des={el.des}
            price={el.price}
          ></GridItem>
        );
      })}
    </div>
  );
}
