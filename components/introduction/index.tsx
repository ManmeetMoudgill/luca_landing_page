import React from "react";
import Reviews from "../shared/review";
import AnimateInViewPort from "../shared/animate-in-view-port";

const IntroductionContainer = () => {
  return (
    <>
      <div className=" bg-black w-full  flex justify-center items-center pb-10">
        <div className=" w-[96%] sm:w-[93%] md:w-[90%] lg:w-[85%] xl:w-[65%]  p-6 flex justify-center items-center flex-col">
          <AnimateInViewPort>
            <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center md:leading-[4rem] lg:leading-snug">
              SniperForex :&nbsp;
              <b className="bg_text text-black font-extrabold">
                Soluzioni Intelligenti
              </b>{" "}
              per il Trading
            </h2>
          </AnimateInViewPort>
          <AnimateInViewPort>
            <div className="flex justify-center items-center">
              <p className="text-[#A9C1C1] my-7 text-center text-sm sm:text-base md:text-xl w-[96%] sm:w-[93%] md:w-[70%]  xl:w-[60%]">
                Il <b className="font-bold text-white">Futuro del Trading</b> è
                Qui: Scopri i Nostri Servizi&nbsp;
                <b className="font-bold text-white">Innovativi.</b>
              </p>
            </div>
          </AnimateInViewPort>
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
