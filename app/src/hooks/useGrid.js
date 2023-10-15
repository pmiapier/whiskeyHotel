import cozy from "../assets/roomType/cozy.jpg";
import chillout from "../assets/roomType/chillout.jpg";
import party from "../assets/roomType/party.jpg";
import catImage from "../assets/catImage/cat08.png";
import catImage02 from "../assets/catImage/cat06.png";
import catImage03 from "../assets/catImage/cat07.png";

export const useGrid = () => {
    const roomInformation = [
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

  const roomGridInformation = [
    {
      color: "bg-gridGrey",
      stepHeader: "BOOK A ROOM",
    },
    {
      color: "bg-gridGrey",
      stepHeader: "SUBMIT VACCINE CERTIFICATE",
    },
    {
      color: "bg-gridGrey",
      stepHeader: "CHECK IN",
    },
  ];

  const gridImages = [
    {
      bgcolor: "bg-gridPink",
      catImg: catImage,
    },
    {
      bgcolor: "bg-gridBlue",
      catImg: catImage03,
    },
    {
      bgcolor: "bg-gridGreen",
      catImg: catImage02,
    },
  ];

  const otherGridInformation = [
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

    return {
        roomInformation,
        roomGridInformation,
        otherGridInformation,
        gridImages
    }
}