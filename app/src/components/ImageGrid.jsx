import GridItemImage from "./GridItemImage";
import catImage from "../assets/catImage/cat08.png";
import catImage02 from "../assets/catImage/cat06.png";
import catImage03 from "../assets/catImage/cat07.png";

const array = [
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

export default function ImageGrid() {
  return (
    <div className="grid grid-rows-1 grid-cols-3 gap-2 px-20">
      {array.map((el) => {
        return (
          <GridItemImage
            backgroundColor={el.bgcolor}
            catImage={el.catImg}
          ></GridItemImage>
        );
      })}
    </div>
  );
}
