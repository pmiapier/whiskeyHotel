import heroImage from "../assets/heroImagePink2.png";
export default function Hero() {
  return (
    <div className=" flex justify-center bg-primaryPurple text-white pt-10 ">
      <img src={heroImage} />
    </div>
  );
}
