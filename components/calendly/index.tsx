"use client";
import React from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  const [showCalendly, setShowCalendly] = React.useState<boolean>(false);
  return (
    <>
      <div className="fixed bottom-3 right-3 ">
        <button
          onClick={() => setShowCalendly(true)}
          className="p-3
        bg_text rounded-2xl text-white font-bold text-xl
        "
        >
          Click here to schedule
        </button>
      </div>
      {showCalendly ? (
        <div
          className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-50 "
          onClick={() => {
            setShowCalendly(false);
          }}
        >
          <div className="fixed top-[5%] bg-white w-[92%] sm:w-[80%] md:w-[70%] lg:w-[75%] xl:w-[50vw] h-[80vh]">
            <InlineWidget
              styles={{
                height: "100%",
              }}
              url="https://calendly.com/manmeetmoudgill77/free-consulation-call"
            />
          </div>
        </div>
      ) : undefined}
    </>
  );
};

export default Calendly;
