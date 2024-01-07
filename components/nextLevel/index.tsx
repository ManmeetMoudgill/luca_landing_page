"use client";
import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
const index = () => {
  return (
    <>
      <div className="  h-[80vh] text-xl px-[1.5rem] md:px-[5grem]  justify-center items-center">
        <div className="h-full justify-center items-center py-8 md:py-12">
          <div className="bg_img1 h-full border border-gray-300 shadow-xl  rounded-2xl flex flex-col justify-center items-center mx-auto max-w-[55rem]">
            <div className="bg-[#7c7a7a] text-white flex justify-center items-center px-2 py-3 sm:px-6 sm:py-3 md:px-5 md:py-3   lg:py-4 rounded-3xl cursor-pointer shadow-2xl ">
              {/* left part */}
              <div className="w-[15%] flex justify-between items-center z-10">
                <button
                  className=" animate-spin"
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/_sniperforex_?igsh=dmswbHdwbHVyMzRz",
                      "_blank"
                    );
                  }}
                >
                  <RiInstagramFill className="text-4xl text-white " />
                </button>
                <button
                  className=" animate-spin"
                  onClick={() => {
                    window.open("https://t.me/Sniper_ForexVip", "_blank");
                  }}
                >
                  <FaTelegram className="text-4xl text-white" />
                </button>
              </div>

              {/* right part */}
              <div className="flex justify-center items-center mx-3">
                <p className=" my-2  text-2xl text-center ">
                  Entra per rimane aggiornato su ogni news!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
