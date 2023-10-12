export default function ContactUsInput({ Icon, headline, text }) {
  return (
    <div className="flex flex-col gap-2 justify-start">
      <div className="flex gap-6 items-center">
        <div>
          <Icon className="text-3xl" />
        </div>
        <div className="text-3xl font-semibold">{headline}</div>
      </div>
      <div className="text-xl font-thin">{text}</div>
    </div>
  );
}
