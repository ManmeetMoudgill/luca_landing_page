import React from "react";
import Social from "../shared/social";
import { FaInstagram, FaTelegram } from "react-icons/fa";

const NextLevel = () => {
  return (
    <div className="text-[#707070] text-xl px-[1.5rem] md:px-[5rem]  justify-center items-center">
      <div className=" justify-center items-center py-8 md:py-12">
        <div className="bg_img p-12 lg:p-28 rounded-2xl flex flex-col justify-center items-center mx-auto max-w-[55rem]">
          <p className="my-2">AND IF YOU'RE ALL CAUGHT-UP…</p>
          <p className="mb-6 text-white text-3xl text-center">
            It's time for you to take your trading to the next level
          </p>
          <div className="flex mt-4">
            {/* left part */}
            <div className="flex justify-center items-center mx-3">
              <Social
                icon={
                  <FaInstagram
                    color="black"
                    className=" text-2xl md:text-4xl  cursor-pointer "
                  />
                }
                link="https://www.instagram.com/_sniperforex_/?igsh=dmswbHdwbHVyMzRz"
              />
              <Social
                icon={
                  <FaTelegram
                    color="black"
                    className=" text-2xl md:text-4xl  cursor-pointer "
                  />
                }
                link="https://t.me/+CN-IFAUMtKtjYmRk"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextLevel;
