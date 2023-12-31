import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { SUPPORT_LIST } from "./constants";

interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <>
      <div className="px-3 py-5 bg-black text-white flex flex-col lg:flex-row lg:justify-around lg:p-8">
        <div className="flex flex-col  items-start">
          <h1 className="mt-2 text-lg">Follow me on social media</h1>
          <div className="flex  my-4">
            <div className=" bg-[#5FFDAA] p-2 rounded-lg mr-3 lg:mr-5 hover:bg-black border border-[rgb(95,253,170)] ">
              <FaLocationArrow className="text-xl bg" />
            </div>
            <div className=" bg-[#5FFDAA] p-2 rounded-lg hover:bg-black border border-[#5FFDAA] ">
              <IoLogoYoutube className="text-xl" />
            </div>
          </div>
        </div>
        <div className="border border-white" />
        <div className=" p-2">
          <h1 className="text-lg my-2">Support</h1>
          <div className="flex flex-wrap ">
            {SUPPORT_LIST?.map((item, index) => (
              <span key={item.text} className="mr-5 ">
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white my-3 ">
        <p className="ml-3 sm:ml-10 text-base">
          Luca Cupellaro Trading @ 2023-24 All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
