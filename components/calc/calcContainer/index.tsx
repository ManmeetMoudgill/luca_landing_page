"use client";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";

interface CalcTradingItemProps {
  imgUrl?: string;
}
interface FormTypes {
  initialValue: number;
  // months: number;
}
const CalcTradingItem = ({ imgUrl }: CalcTradingItemProps) => {
  const [rangeValue, setRangeValue] = React.useState(0);
  const ref = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    const rangeInput = ref.current;

    if (rangeInput) {
      const min = rangeInput.min ? parseFloat(rangeInput.min) : 0;
      const max = rangeInput.max ? parseFloat(rangeInput.max) : 100;
      const percent = ((Number(rangeValue) - min) / (max - min)) * 100;

      rangeInput.style.backgroundSize = `${percent}% 100%`;
    }
  }, [rangeValue, ref]);
  const [form, setForm] = useState<FormTypes>({
    initialValue: 0,
    // months: 0,
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const [profit, setProfit] = useState(0);
  const [monthGain, setMonthGain] = useState(0);
  const [drawdown, setDrawdown] = useState(0);

  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (e: any) => {
    setSelectedValue(e.target.value);
  };
  useEffect(() => {
    const profitCalc = () => {
      console.log("Selected value:", selectedValue);
      if (selectedValue === "low") {
        setProfit(
          form.initialValue * 3 * (rangeValue / 100) + form.initialValue
        );
        setMonthGain(3);
        setDrawdown(10);
      }
      if (selectedValue === "moderate") {
        setProfit(
          form.initialValue * 6 * (rangeValue / 100) + form.initialValue
        );
        setMonthGain(6);
        setDrawdown(25);
      }

      if (selectedValue === "significant") {
        setProfit(
          form.initialValue * 9 * (rangeValue / 100) + form.initialValue
        );
        setMonthGain(9);
        setDrawdown(40);
      }
      if (selectedValue === "high") {
        setProfit(
          form.initialValue * 12 * (rangeValue / 100) + form.initialValue
        );
        setMonthGain(3);
        setDrawdown(45);
      }
    };
    profitCalc();
  }, [selectedValue, form.initialValue, rangeValue]);
  console.log(selectedValue, form.initialValue, rangeValue, profit);

  return (
    <div className="b flex justify-center items-center p-3 sm:p-8">
      <div className=" w-[98%]  sm:w-[85%] md:w-[90%] lg:w-[60%] xl:w-[50%] 2xl:w-[30%] min-[2200px]:w-[30%] flex flex-col rounded-bl-2xl rounded-br-2xl">
        {/* UPPER CONTAINER */}
        <div className=" rounded-tl-2xl rounded-tr-2xl p-4 min-[370px]:p-6 bg-[#f1f1f1]">
          <div className="deposti__part ">
            <h3 className="text-base sm:text-xl  font-bold">Deposit</h3>
            <input
              name="initialValue"
              value={form.initialValue}
              onChange={handleChange}
              type="number"
              min={0}
              className="pl-4 pr-4 pt-2 pb-2 mt-2 w-full outline-none border-black border-1 shadow-2xl text-base sm:text-xl rounded-lg"
            />
          </div>

          {/* RISK SETTINGS */}
          <div className="risk__settings ">
            <h3 className="text-base sm:text-xl  font-bold mt-8">
              Risk Settings
            </h3>
            <div className="flex mt-3 ">
              <div className="flex items-center min-[320px]:mr-8  min-[350px]:mr-12 flex-col sm:flex-row justify-center sm:justify-start sm:mr-10 md:mr-14">
                <input
                  type="radio"
                  name="risk"
                  id="risk1"
                  className="w-4 h-4 mr-2"
                  value="low"
                  checked={selectedValue === "low"}
                  onChange={handleRadioChange}
                />
                <label className="text-xs sm:text-lg" htmlFor="risk1">
                  Low
                </label>
              </div>
              <div className="flex items-center min-[320px]:mr-8  min-[350px]:mr-12 flex-col sm:flex-row justify-center sm:justify-start sm:mr-10 md:mr-14">
                <input
                  type="radio"
                  name="risk"
                  id="risk2"
                  className="w-4 h-4 mr-2"
                  value="moderate"
                  checked={selectedValue === "moderate"}
                  onChange={handleRadioChange}
                />
                <label className="text-xs sm:text-lg" htmlFor="risk2">
                  Moderate
                </label>
              </div>
              <div className="flex items-center min-[320px]:mr-8  min-[350px]:mr-12 flex-col sm:flex-row justify-center sm:justify-start sm:mr-10 md:mr-14">
                <input
                  type="radio"
                  name="risk"
                  id="risk3"
                  className="w-4 h-4 mr-2"
                  value="significant"
                  checked={selectedValue === "significant"}
                  onChange={handleRadioChange}
                />
                <label className="text-xs sm:text-lg" htmlFor="risk3">
                  Significant
                </label>
              </div>
              <div className="flex items-center min-[320px]:mr-8  min-[350px]:mr-12 flex-col sm:flex-row justify-center sm:justify-start sm:mr-10 md:mr-14">
                <input
                  type="radio"
                  name="risk"
                  id="hight"
                  className="w-4 h-4 mr-2"
                  value="high"
                  checked={selectedValue === "high"}
                  onChange={handleRadioChange}
                />
                <label className="text-xs sm:text-lg" htmlFor="hight">
                  High
                </label>
              </div>
            </div>
          </div>

          {/* TIME SETTINGS */}
          <div className="risk__settings ">
            <h3 className="text-xl  font-bold mt-8">Time</h3>
            <div className="flex mt-2 w-full">
              <input
                type="range"
                ref={ref}
                onChange={(e) => setRangeValue(parseInt(e.target.value))}
                id="dynamic__range"
                className=" range__input w-full"
                min={0}
                max={36}
                value={rangeValue}
                step={4}
              />
            </div>
            <div className=" mt-6 mb-3">
              <div className="flex justify-between">
                <div className="text-[10px] sm:text-[11px] min-w-auto">
                  {" "}
                  1/m
                </div>
                <div className="text-[10px] xs:text-[10px] sm:text-[11px] min-w-auto">
                  {" "}
                  4/m
                </div>
                <div className="text-[10px] xs:text-[10px] sm:text-[11px] min-w-auto">
                  {" "}
                  8/m
                </div>
                <div className="text-[10px] xs:text-[10px] sm:text-[11px] min-w-auto">
                  12/m
                </div>
                <div className="text-[10px] xs:text-[10px] sm:text-[11px] min-w-auto">
                  16/m
                </div>
                <div className="text-[10px] xs:text-[10px] sm:text-[11px] min-w-auto">
                  20/m
                </div>
                <div className="text-[10px] xs:text-[10px] sm:text-[11px] min-w-auto">
                  24/m
                </div>
                <div className="text-[10px] xs:text-[10px] sm:text-[11px] min-w-auto">
                  28/m
                </div>
                <div className="text-[10px] xs:text-[10px] sm:text-[11px] min-w-auto">
                  32/m
                </div>
                <div className="text-[10px] xs:text-[10px] sm:text-[11px] min-w-auto">
                  36/m
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LOWER CONTAINER */}
        <div
          className=" w-full flex-col p-6 rounded-bl-2xl rounded-br-2xl"
          style={{
            backgroundImage: `url('${imgUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" my-6 ">
            <h3 className="text-lg sm:text-xl text-white font-bold">
              Total Profit
            </h3>
            <span className="text-[#0df0f8] text-3xl sm:text-5xl font-extrabold">
              $ {profit}
            </span>
          </div>
          <div className=" my-6 ">
            <h3 className="text-lg sm:text-xl text-white font-bold">
              Montly Gain
            </h3>
            <span className="text-[#0df0f8] text-3xl sm:text-5xl font-extrabold">
              {monthGain}%
            </span>
          </div>
          <div className=" my-6 ">
            <h3 className="text-lg sm:text-xl text-white font-bold">
              Drawdown
            </h3>
            <span className="text-[#0df0f8] text-3xl sm:text-5xl font-extrabold">
              {drawdown}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalcTradingItem;
