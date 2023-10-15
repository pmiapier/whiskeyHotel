import GridItemInfo from "./GridItemInfo";
import { useGrid } from "../hooks/useGrid";

export default function InfoGrid() {
  const { gridInformation } = useGrid();

  return (
    <div className=" grid grid-cols-3 gap-10">
      {gridInformation.map((el) => {
        return (
          <GridItemInfo
            color={el.color}
            stepHeader={el.stepHeader}
            stepDescription={el.stepDescription}
          ></GridItemInfo>
        );
      })}
    </div>
  );
}
