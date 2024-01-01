import React from "react";
import { GoVerified } from "react-icons/go";
interface ApproveProps {
  text: string;
}

const Approve = ({ text }: ApproveProps) => {
  return (
    <div className="flex  items-center my-3 group cursor-pointer">
      <div className="mx-2 md:mx-4 ">
        <GoVerified
          color="#5FFDAA"
          className=" text-2xl sm:text-3xl lg:text-4xl group-hover:animate-ping duration-600 transition-all delay-75 "
        />
      </div>
      <div className="mx-2 md:mx-4 p-2 bg-[#5FFDAA] ">
        <span className="text-black font-bold text-base md:text-xl lg:text-2xl">
          {text}
        </span>
      </div>
    </div>
  );
};

export default Approve;
