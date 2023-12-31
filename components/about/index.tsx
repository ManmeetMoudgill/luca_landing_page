import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="text-[#707070] text-xl px-[1.5rem] md:px-[5rem]  justify-center items-center">
      <div className=" justify-center items-center py-12 md:py-16">
        <div className="md:mx-auto md:w-[90%] lg:w-[70%]">
          <div className="flex flex-col justify-between items-center md:flex-row ">
            <div className="md:w-[10%]">
              <div className="border-2 border-[#5FFDAA] p-2 rounded-full w-[7rem] h-[7rem] ">
                <Image
                  src="/assets/images/icon.jpg"
                  alt="Profile pic"
                  width={114}
                  height={114}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-[77%]">
              <p className="font-base leading-6 mt-8 md:mt-0 text-center break-words md:text-left">
                Hi - I am Valeriia Mishchenko and you may already know me for my
                Forex Expert Advisors which are rated among the best ones in the
                market
              </p>
            </div>
          </div>
          <div className="mt-12">
            <p className="mb-4">
              I've been developing algo-trading systems for over 10 years, with
              some of them reaching &nbsp;
              <span>
                <a href="" className="decoration-solid text-[#007bff] ">
                  +7800% account growth
                </a>
              </span>
              &nbsp; with over +67 consecutive months in profit, all of which
              live track-records are available on my verified&nbsp;
              <span>
                <a href="" className="decoration-solid text-[#007bff] ">
                  MyFxBook
                </a>
              </span>
              &nbsp; profile as well as on the live signals of my&nbsp;
              <span>
                <a href="" className="decoration-solid text-[#007bff] ">
                  MQL market profile
                </a>
              </span>
              &nbsp;
            </p>
            <p className="mb-4">
              So trust me. I'm an expert when it comes to developing EAs that
              will exploit market opportunities to&nbsp;
              <span className="font-bold bg-[#5FFDAA] text-black">
                make you big profits on autopilot
              </span>
              &nbsp;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
