"use client";
import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
const index = () => {
  return (
    <div className="text-[#707070] h-[80vh] text-xl px-[1.5rem] md:px-[5grem]  justify-center items-center">
      <div className="h-full justify-center items-center py-8 md:py-12">
        <div className="h-full border border-gray-300  rounded-2xl flex flex-col justify-center items-center mx-auto max-w-[55rem]">
          <p className=" my-2  text-2xl text-center text-black">
            <u> Entra per rimane aggiornato su ogni news!</u>
          </p>
          <div className="mb-2 lg:mb-4 flex justify-between items-center w-[20%] z-10">
            <button
              className="bg-white animate-spin"
              onClick={() => {
                window.open(
                  "https://www.instagram.com/_sniperforex_?igsh=dmswbHdwbHVyMzRz",
                  "_blank"
                );
              }}
            >
              <RiInstagramFill className="text-4xl text-black " />
            </button>
            <button
              className="bg-white animate-spin"
              onClick={() => {
                window.open("https://t.me/Sniper_ForexVip", "_blank");
              }}
            >
              <FaTelegram className="text-4xl text-black" />
            </button>
          </div>
          <div className="bg_img1 h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default index;
