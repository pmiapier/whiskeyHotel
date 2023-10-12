export default function FormButton({ children }) {
  return (
    <button className="bg-black py-3 px-6 rounded-lg text-xl font-semibold text-white hover:bg-gridMidnight cursor-pointer">
      {children}
    </button>
  );
}
