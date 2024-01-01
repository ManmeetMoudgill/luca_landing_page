import React from "react";
import Reviews from "../shared/review";

const index = () => {
  return (
    <div className="text-[#707070] text-xl px-[1.5rem] md:px-[5rem]  justify-center items-center">
      <div className=" justify-center items-center py-8 md:py-12">
        <div className="bg_img p-8 lg:p-16 flex flex-col justify-center items-center mx-auto max-w-[55rem]">
          <p className="my-2">AND IF YOU'RE ALL CAUGHT-UP…</p>
          <p className="mb-6 text-white text-3xl text-center">
            It's time for you to take your trading to the next level
          </p>
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default index;
