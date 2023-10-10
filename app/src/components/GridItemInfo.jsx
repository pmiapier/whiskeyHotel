export default function GridItemInfo({ color, stepHeader }) {
  return (
    <div className={`${color} w-40 h-40`}>
      <div>
        <h1>{stepHeader}</h1>
      </div>
      <div>
        <p>Bla bla</p>
      </div>
    </div>
  );
}
