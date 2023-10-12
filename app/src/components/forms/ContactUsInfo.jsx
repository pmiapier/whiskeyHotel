import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

import ContactUsInput from "../ContactUsInput";

export default function ContactUsInfo() {
  return (
    <div className="flex flex-col gap-10 py-60">
      <ContactUsInput
        Icon={FaPhoneAlt}
        headline={"CALL US"}
        text={"+66 080 883 55 89"}
      />
      <ContactUsInput
        Icon={FaMapMarkerAlt}
        headline={"LOCATION"}
        text={"1501 10TH Avanue SouthEast, Salmon Arm, BC, V1E2E2"}
      />
      <ContactUsInput
        Icon={FaClock}
        headline={"BUSINESS HOURS"}
        text={"Mon - Fri....8 am - 8 pm, Sat...10 am - 9 pm, Sun...Closed"}
      />
      <div className="text-xl">We apology for the inconvinient!</div>
    </div>
  );
}
