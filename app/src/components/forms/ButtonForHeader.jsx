export default function ButtonForHeader({ onClick, children }) {
  return (
    <button
      className="bg-white text-black font-semibold px-6 py-1 rounded-full hover:bg-gridYellow  focus:outline-none focus:ring focus:ring-yellow-500} "
      onClick={onClick}
    >
      {children}
    </button>
  );
}
