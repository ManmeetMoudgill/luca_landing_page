"use client";
import React, { useState } from "react";
import CalcTradingItem from "./calcContainer";
import { calcTradings } from "./constants";
import AnimateInViewPort from "../shared/animate-in-view-port";

interface CalcTradingProps {}

const CalcTrading = (props: CalcTradingProps) => {
  const [chosen, setChosen] = useState<string>("Perceptrader AI");
  return (
    <div className="flex flex-col bg-black py-4">
      <AnimateInViewPort>
        <div className="flex justify-center items-center my-4">
          <div className="hidden   w-[85%] lg:w-[60%]  sm:flex justify-center  flex-wrap items-center ">
            {calcTradings?.map((item) => {
              return (
                <span
                  key={item?.id}
                  onClick={() => {
                    setChosen(item?.name);
                  }}
                  className={`px-4 py-2 text-white mx-8 text-lg cursor-pointer ${
                    chosen === item?.name ? "bg-[#0F93FE] rounded-full " : ""
                  }`}
                >
                  {item?.name}
                </span>
              );
            })}
          </div>
        </div>
      </AnimateInViewPort>
      {calcTradings?.map((item) => {
        return (
          <div
            key={item?.id}
            className={`${
              item?.name === chosen ? "block" : "hidden"
            } transition-all delay-75 transform ease-in-out`}
          >
            <CalcTradingItem imgUrl={item?.imgUrl} />
          </div>
        );
      })}
    </div>
  );
};

export default CalcTrading;
