export default function RegisterInput({ type = "text", placeholder, name, onChange, value }) {
  return (
    <input
      className="text-sm py-3 px-8 rounded-lg cursor-pointer"
      style={{ width: "500px" }}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
}
