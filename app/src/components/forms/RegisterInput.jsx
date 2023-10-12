export default function RegisterInput({ type = "text", placeholder, name }) {
  return (
    <input
      className="text-xl py-5 px-8 rounded-lg cursor-pointer"
      style={{ width: "500px" }}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
}
