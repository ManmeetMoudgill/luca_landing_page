import React from "react";
import Approve from "./approve";
import Reviews from "../shared/review";

type Props = {};

const OnceAgain = (props: Props) => {
  return (
    <div className="py-8 md:py-12 relative ">
      <div className="flex justify-center items-center py-10 bg-black">
        <div className=" flex flex-col items-center justify-center w-[90%] sm:w-[80%] md:w-[70%]   lg:w-[60%]">
          <h3 className="text_color text-xl lg:text-2xl font-bold my-2 uppercase">
            Di nuovo
          </h3>
          <h2 className="my-2 w-full  sm:w-[90%] lg:w-[70%] text-white font-bold text-3xl lg:text-[45px]  leading-tight text-center">
            Lasciando il tuo trading nelle mani dei miei EA potrai:
          </h2>
          <div className="my-4 flex flex-col ">
            <Approve text="Ottieni profitti costanti con il pilota automatico" />
            <Approve text="pur mantenendo un drawdown basso" />
            <Approve text="e goditi il reddito passivo" />
          </div>
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default OnceAgain;
