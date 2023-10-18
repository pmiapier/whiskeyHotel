import Button from "../Button";
import Cozy from "../../components/roomTypes/Cozy";
import { Link } from "react-dom";

export default function ManageBookingDetails() {
  return (
    <div className="px-10 py-5">
      <div className="text-xl font-medium">Reservation List</div>
      <div className=" shadow-lg rounded-lg bg-white">
        <div className="flex gap-10 justify-center items-center py-10">
          <div className="flex flex-col gap-5">
            <div className="flex bg-offWhite py-3 px-3 rounded-lg">
              <div className="font-medium">CHECK IN: </div>
              <div className="text-green-600">2023-11-10</div>
            </div>

            <div className="flex bg-offWhite py-3 px-3 rounded-lg">
              <div className="font-medium">CHECK OUT: </div>
              <div className="text-green-600">2023-11-10</div>
            </div>
          </div>
          <div>
            <Cozy />
          </div>
        </div>
        <div className=" flex gap-5 justify-center py-10">
          <a href="/dashboard">
            <Button>Change Dates</Button>
          </a>

          <Button>Cancel Reservation</Button>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex bg-white border-gray-300 border-2 rounded-lg py-40">
<div className="flex flex-col gap-5 p-10">
<div className="flex bg-offWhite py-3 px-3 rounded-lg">
  <div className="font-medium">CHECK IN:</div>
  <div>2023-11-01</div>
</div>

<div className="flex bg-offWhite py-3 px-3 rounded-lg">
  <div className="font-medium">CHECK OUT: </div>
  <div>2023-11-10</div>
</div>
</div>

<div>
<Cozy />
</div>
<div className="flex gap-5 justify-center">
<Button></Button>
<Button>Cancel Reservation</Button>
</div>
</div> */
}
