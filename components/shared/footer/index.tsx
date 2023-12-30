import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { SUPPORT_LIST } from "./constants";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-black text-white py-5 px-10 flex flex-col lg:flex-row lg:justify-around">
      <div className="flex flex-col">
        <span className="text-xl mt-3">Follow me on social media</span>
        <div className="flex items-center my-5">
          <div className="hover:bg-black mr-3 lg:mr-5 rounded-lg p-2 border border-[#5FFDAA] bg-[#5FFDAA]">
            <FaLocationArrow className="text-xl" />
          </div>
          <div className="hover:bg-black rounded-lg p-2 border border-[#5FFDAA] bg-[#5FFDAA]">
            <FaYoutube className="text-xl" />
          </div>
        </div>
      </div>
      <div className="border border-white" />
      <div className="flex flex-col">
        <span className="text-xl mt-3 ">Support</span>
        <div className="flex flex-wrap my-5 ">
          {SUPPORT_LIST.map((item) => (
            <span className="mr-5">{item.title}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
