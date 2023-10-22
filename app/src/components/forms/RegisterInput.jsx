export default function RegisterInput({
  type = "text",
  placeholder,
  name,
  onChange,
  value,
  hasError }) {
  return (
    <input
      className={`text-sm py-3 px-8 rounded-lg cursor-pointer ${
        hasError
          ? 'border border-red-500 focus:ring-red-300'
          : 'border focus:ring-blue-300 focus:border-blue-500 border-gray-300'
      }`}
      style={{ width: "500px" }}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      

    />
  );
}
