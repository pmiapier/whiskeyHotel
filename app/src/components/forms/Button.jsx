export default function Button({ onClick, children }) {
  return (
    <button
    className="bg-white text-black font-semibold px-6 py-1 rounded-full hover:bg-gridYellow  focus:outline-none focus:ring focus:ring-gridYellow} "
    onClick={onClick}
    >
      {children}
    </button>
  );
}
