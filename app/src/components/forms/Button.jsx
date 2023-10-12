export default function Button({ children }) {
  return (
    <button className="bg-white text-black font-semibold px-7 py-2 rounded-full hover:text-white active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-400} ">
      {children}
    </button>
  );
}
