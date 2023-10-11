import GridItemInfo from "./GridItemInfo";
import { useGrid } from "../hooks/useGrid";

export default function InfoGrid() {
  const { gridInformation } = useGrid();
  
  return (
  <div grid grid-rows-1 grid-cols-3 gap-2 px-20>
    {gridInformation.map((el) => {
      return (
        <GridItemInfo
          color={el.color}
          stepHeader={el.stepHeader}
        ></GridItemInfo>
      );
    })}
    <div>Hello</div>
    <div></div>
  </div>
  );
}
