export default function GridItemInfo({ color, stepHeader, stepDescription }) {
  return (
    <div className="grid ">
      <div className={`${color} w-96 h-40 flex justify-center items-center `}>
        <h1>{stepHeader}</h1>
      </div>
      <div className=" bg-white w-96 h-80 flex justify-center items-center text-center rounded-b-3xl shadow-xl">
        <p className="text-lg font-thin w-40">{stepDescription}</p>
      </div>
    </div>
  );
}

// flex flex-col items-center gap-6 rounded-lg
