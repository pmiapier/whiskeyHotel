export default function Button({ children }) {
  return (
    <button className="bg-purple-500 py-3 px-10 rounded-lg text-xl font-normal text-white tracking-wider hover:bg-purpleBlackground cursor-pointer">
      {children}
    </button>
  );
}
