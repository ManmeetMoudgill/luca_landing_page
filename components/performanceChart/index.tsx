import Image from "next/image";
import React from "react";

const PerformanceChart = () => {
  return (
    <div className="px-[1.5rem] md:px-[5rem]">
      <div className="py-8 md:py-12 relative ">
        <div className=" md:mx-auto md:w-[95%] lg:w-[75%] xl:w-[55%]  flex justify-center ">
          <div className=" w-full lg:w-min relative  gap-[10px] sm:gap-8  grid  pl-6 pb-6  min-[375px]:pl-[2.5rem]   min-[375px]:pb-[2.5rem] grid-rows-[1fr,1fr] grid-cols-[1fr,1fr]  lg:grid-cols-[18rem,18rem] lg:grid-rows-[18rem,18rem]">
            <div className="  min-[375px]:min-h-[10rem] sm:min-h-[15rem] md:min-h-auto   p-1 min-[375px]:p-4 rounded-xl bg-[#EDEDED] shadow-sm"></div>
            <div className="  min-[375px]:min-h-[10rem] sm:min-h-[15rem] md:min-h-auto  rounded-xl bg-[#EDEDED] shadow-sm">
              <Image
                src="/assets/images/traders.avif"
                width={375}
                height={375}
                alt="chart"
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" min-[375px]:min-h-[10rem]  sm:min-h-[15rem] md:min-h-auto   p-1 min-[375px]:p-4 rounded-xl bg-[#EDEDED] shadow-sm"></div>
            <div className="  min-[375px]:min-h-[10rem] sm:min-h-[15rem] md:min-h-auto  p-1 min-[375px]:p-4 rounded-xl bg-[#EDEDED] shadow-sm"></div>
            <div className="graph__lines absolute top-0 left-0 w-full h-full">
              <svg
                className="absolute top-0 left-0"
                xmlns="http://www.w3.org/2000/svg"
                width="21.414"
                height="12.121"
                viewBox="0 0 21.414 12.121"
              >
                <path
                  id="Path_1180"
                  data-name="Path 1180"
                  d="M-1704-7625l10-10,10,10"
                  transform="translate(1704.707 7636.414)"
                  fill="#DDDDDD"
                  stroke="#DDDDDD"
                  strokeWidth="2"
                ></path>
              </svg>
              <svg
                className="absolute bottom-0 right-0"
                xmlns="http://www.w3.org/2000/svg"
                width="12.121"
                height="21.414"
                viewBox="0 0 12.121 21.414"
              >
                <path
                  id="Path_1181"
                  data-name="Path 1181"
                  d="M-1704-7625l10-10,10,10"
                  transform="translate(-7624.293 1704.707) rotate(90)"
                  fill="#DDDDDD"
                  stroke="#DDDDDD"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;
