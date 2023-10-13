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
      des: " It would be so chill for three of us there ",
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

  const gridInformation = [
    {
      color: "bg-gridPastelPink",
      stepHeader: "BOOK A ROOM",
      stepDescription:
        "You can either check availible room online, give us a call or walk-in to book with us",
    },
    {
      color: "bg-gridPastelPink",
      stepHeader: "SUBMIT VACCINE CERTIFICATE",
      stepDescription: "Providing us your feline vaccines record in advance",
    },
    {
      color: "bg-gridPastelPink",
      stepHeader: "CHECK IN",
      stepDescription: "You can check-in from 9 o'clock ",
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

  const roomAvailability = [
    {
      backgroundColor: "bg-gridMidnight",
      roomImage: cozy,
    },
    {
      backgroundColor: "bg-gridMidnight",
      roomImage: chillout,
    },
    {
      backgroundColor: "bg-gridMidnight",
      roomImage: party,
    },
  ];

  return {
    roomInformation,
    gridInformation,
    gridImages,
    roomAvailability,
  };
};
