export default function ConfirmBookingDetails({ text, dateOrNumber }) {
  return (
    <div className="p-5">
      <div className="font-medium">{text}</div>
      <div className="bg-offWhite px-40 py-3 rounded-lg">{dateOrNumber}</div>
    </div>
  );
}
