import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { text } from "stream/consumers";
interface FooterProps {}
const supportList = [
  {
    text: "Help Center",
  },
  {
    text: "Contact",
  },
  {
    text: "Telegram",
  },
  {
    text: "Guide",
  },
  {
    text: "Tutorials",
  },
  {
    text: "Terms",
  },
];
const Footer = (props: FooterProps) => {
  return (
    <>
      <div className="px-3 py-5 bg-black text-white flex flex-col lg:flex-row lg:justify-between lg:p-10">
        <div className="flex flex-col  items-start">
          <h1 className="mt-2 text-lg">Follow me on social media</h1>
          <div className="flex  my-4">
            <div className=" bg-green-400 p-2 rounded-lg mr-3 lg:mr-5">
              <FaLocationArrow className="text-xl " />
            </div>
            <div className=" bg-green-400 p-2 rounded-lg ">
              <IoLogoYoutube className="text-xl " />
            </div>
          </div>
        </div>
        <div className="border border-white" />
        <div className=" p-2">
          <h1 className="text-lg my-2">Support</h1>
          <div className="flex flex-wrap ">
            {supportList.map((item) => (
              <span className="mr-5">{item.text}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-center items-center my-3">
        <p> Valery Trading</p>
      </div>
    </>
  );
};

export default Footer;
