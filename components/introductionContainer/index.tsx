import React from "react";

type Props = {};

const IntroductionContainer = (props: Props) => {
  return (
    <div className=" bg-black w-full border-2 border-white flex justify-center items-center">
      <div className=" w-[68%] border-2 border-white p-6 flex justify-center items-center flex-col">
        <h2 className="text-white font-bold text-6xl text-center leading-snug">
          Industry-leading{" "}
          <b className="bg-[#5FFDAA] text-black font-extrabold">
            Expert Advisors
          </b>{" "}
          for MetaTrader 4/5
        </h2>
        <div className="flex justify-center items-center">
          <p className="text-[#A9C1C1] mt-6 text-center text-xl w-[60%]">
            Discover the secret Expert Advisors that will give you stable
            <b className="font-bold text-white"> long-term results</b> while
            keeping a low <b className="font-bold text-white"> drawdown</b>, on
            complete autopilot
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroductionContainer;
