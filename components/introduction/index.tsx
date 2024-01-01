import React from "react";
import Reviews from "../shared/review";

type Props = {};

const IntroductionContainer = (props: Props) => {
  return (
    <>
      <div className=" bg-black w-full  flex justify-center items-center pb-10">
        <div className=" w-[96%] sm:w-[93%] md:w-[90%] lg:w-[85%] xl:w-[65%]  p-6 flex justify-center items-center flex-col">
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center md:leading-[4rem] lg:leading-snug">
            Industry-leading{" "}
            <b className="bg-[#5FFDAA] text-black font-extrabold">
              Expert Advisors
            </b>{" "}
            for MetaTrader 4/5
          </h2>
          <div className="flex justify-center items-center">
            <p className="text-[#A9C1C1] my-7 text-center text-sm sm:text-base md:text-xl w-[96%] sm:w-[93%] md:w-[70%]  xl:w-[60%]">
              Discover the secret Expert Advisors that will give you stable
              <b className="font-bold text-white"> long-term results</b> while
              keeping a low <b className="font-bold text-white"> drawdown</b>,
              on complete autopilot
            </p>
          </div>

          <Reviews />
        </div>
      </div>
      <div className="bg-white  relative flex justify-center items-center h-12">
        <div className="arrow__bottom"></div>
      </div>
    </>
  );
};

export default IntroductionContainer;
