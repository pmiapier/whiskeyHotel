import GridItemInfo from "./GridItemInfo";

const array = [
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

export default function InfoGrid() {
  <div grid grid-rows-1 grid-cols-3 gap-2 px-20>
    {array.map((el) => {
      return (
        <GridItemInfo
          color={el.color}
          stepHeader={el.stepHeader}
        ></GridItemInfo>
      );
    })}
    <div>Hello</div>
    <div></div>
  </div>;
}
