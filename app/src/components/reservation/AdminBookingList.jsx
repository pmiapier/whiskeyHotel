import React from "react";

export default function AdminBookingList() {
  return (
    <div>
      <div>Reservation Lists</div>

      <div className="bg-white rounded-lg flex justify-between items-center gap-20 py-10 px-20">
        <div className="flex flex-col gap-5 font-semibold">
          <div className="flex">
            <div>Contact: </div>
            <div>Panalee Pierce</div>
          </div>

          <div className="flex">
            <div className="font-thin w-40">Check in date</div>
            <div className="text-green-600">2023-11-01</div>
          </div>

          <div className="flex">
            <div className="font-thin w-40">Check out date</div>
            <div className="text-orange-500">2023-11-10</div>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="bg-purple-400 py-2 px-6 rounded-lg text-lg font-normal text-white tracking-wider hover:bg-purpleBlackground cursor-pointer">
            CHANGE DATE
          </button>
          <button className="bg-gridMidnight py-2 px-6 rounded-lg text-lg font-normal text-white tracking-wider hover:bg-black cursor-pointer">
            CANCEL
          </button>
          <button className="bg-gridGreen py-2 px-6 rounded-lg text-lg font-normal text-white tracking-wider hover:bg-green-500 cursor-pointer">
            CHECK IN
          </button>
          <button className="bg-orange-400 py-2 px-6 rounded-lg text-lg font-normal text-white tracking-wider hover:bg-orange-500 cursor-pointer">
            CHECK OUT
          </button>
        </div>
      </div>
    </div>
  );
}
