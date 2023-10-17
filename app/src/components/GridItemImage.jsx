export default function GridItemImage({ backgroundColor, catImage }) {
  return (
    <div className={`${backgroundColor} grid grid-cols-3 gap-6 rounded-lg`}>
      <div></div>
      <div className="flex py-16">
        <img src={catImage} />
      </div>
      <div></div>
    </div>
  );
}
