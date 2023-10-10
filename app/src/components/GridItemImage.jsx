export default function GridItemImage({ backgroundColor, catImage }) {
  return (
    <div
      className={`${backgroundColor} flex flex-col items-center gap-6 rounded-lg`}
    >
      <div className="w-24 h-52 flex items-center ">
        <img src={catImage} />
      </div>
    </div>
  );
}
