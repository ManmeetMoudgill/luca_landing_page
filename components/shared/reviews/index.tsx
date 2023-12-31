import React from "react";
import { FaStar } from "react-icons/fa";
type Props = {};

const Reviews = (props: Props) => {
  return (
    <div className="bg-[#515151] mt-4 flex justify-center items-center  px-6 py-4 rounded-3xl cursor-pointer shadow-2xl hover:scale-105 delay-75 ease-in-out transition-all">
      {/* left part */}
      <div className="flex justify-center items-center mx-3">
        <FaStar
          color="white"
          className="text-xl  cursor-pointer hover:-translate-y-2 delay-75 transition-all ease-in-out"
        />
        <FaStar
          color="white"
          className="text-xl cursor-pointer  hover:-translate-y-2 delay-75 transition-all ease-in-out"
        />
        <FaStar
          color="white"
          className="text-xl cursor-pointer  hover:-translate-y-2 delay-75 transition-all ease-in-out"
        />
        <FaStar
          color="white"
          className="text-xl cursor-pointer  hover:-translate-y-2 delay-75 transition-all ease-in-out"
        />
        <FaStar
          color="white"
          className="text-xl cursor-pointer  hover:-translate-y-2 delay-75 transition-all ease-in-out"
        />
      </div>

      {/* center part */}
      <div className="flex justify-center items-center mx-3">
        <span className="text-sm text-[#8C8C8C] font-semibold ">
          4.7 basato su 300 recensioni
        </span>
      </div>
    </div>
  );
};

export default Reviews;
