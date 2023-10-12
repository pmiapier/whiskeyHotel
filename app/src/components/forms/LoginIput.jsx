export default function LoginInput({ type = "text", placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="text-sm py-3 px-8 rounded-lg cursor-pointer"
      style={{ width: "500px" }}
    />
  );
}
