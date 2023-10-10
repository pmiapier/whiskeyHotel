import GridItem from "./gridItem";
import cozy from "../assets/roomType/cozy.jpg";
import chillout from "../assets/roomType/chillout.jpg";
import party from "../assets/roomType/party.jpg";
// const imageUrl = [];

const array = [
  {
    background: "bg-gridYellow",
    roomImg: cozy,
    roomType: "Cozy",
    des: " I think it will be super cozy for two of us",
    price: "300 baht/night",
  },
  {
    background: "bg-gridMidnight",
    roomImg: chillout,
    roomType: "Chillout",
    des: " It would be so chill for 3 there of us",
    price: "500 baht/night",
  },
  {
    background: "bg-gridGrey",
    roomImg: party,
    roomType: "Party",
    des: "Let's have a party, there are more of us now ",
    price: "700 baht/night",
  },
];

export default function RoomGrid() {
  return (
    <div className="grid grid-rows-1 grid-cols-3 gap-2 px-20 ">
      {array.map((el) => {
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
