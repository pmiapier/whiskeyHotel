import GridItem from "./gridItem";
import cozy from "../assets/roomType/cozy.jpg";
import chillout from "../assets/roomType/chillout.jpg";
import party from "../assets/roomType/party.jpg";
// const imageUrl = [];

const array = [
  {
    background: "bg-gridPink",
    roomImg: cozy,
    roomType: "Cozy",
    des: "Not too big, not too small. I think it will be super cozy for two of us",
    price: "300 baht/night",
  },
  {
    background: "bg-gridBlue",
    roomImg: chillout,
    roomType: "Chillout",
    des: " It would be so chill for 3 there of us",
    price: "500 baht/night",
  },
  {
    background: "bg-gridGreen",
    roomImg: party,
    roomType: "Party",
    des: "Let's have a party, there are more of us now ",
    price: "700 baht/night",
  },
  {
    background: "bg-gridYellow",
    catImg: "04",
  },
  {
    background: "bg-gridMidnight",
  },

  {
    background: "bg-gridGrey",
  },
];

export default function RoomGrid() {
  return (
    <div className="grid grid-rows-2 grid-cols-3 gap-4 py-20 px-60 ">
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
