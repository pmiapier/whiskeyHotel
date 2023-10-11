import GridItemImage from "./GridItemImage";
import { useGrid } from "../hooks/useGrid";

export default function ImageGrid() {
  const { gridImages } = useGrid();

  return (
    <div className="grid grid-rows-1 grid-cols-3 gap-2 px-20">
      {gridImages.map((el) => {
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
