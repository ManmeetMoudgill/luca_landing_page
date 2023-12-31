import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { SUPPORT_LIST } from "./constants";
import Link from "next/link";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      id="contattaCi"
      className="bg-black text-white py-5 px-10 flex flex-col lg:flex-row lg:justify-around"
    >
      <div className="flex flex-col">
        <span className="text-xl mt-3">Follow me on social media</span>
        <div className="flex items-center my-5">
          <div className="hover:bg-black mr-3 transition-all delay-75 ease-in-out lg:mr-5 rounded-lg p-2 border border_color bg_text cursor-pointer">
            <Link
              href="https://www.instagram.com/_sniperforex_/?igsh=dmswbHdwbHVyMzRz"
              target="_blank"
            >
              <FaLocationArrow className="text-xl" />
            </Link>
          </div>
          <div className="hover:bg-black transition-all delay-75 ease-in-out rounded-lg p-2 border_color bg_text cursor-pointer">
            <Link href="https://t.me/+CN-IFAUMtKtjYmRk" target="_blank">
              <FaYoutube className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border border-white" />
      <div className="flex flex-col">
        <span className="text-xl mt-3 ">Support</span>
        <div className="flex flex-wrap my-5 ">
          {SUPPORT_LIST.map((item) => (
            <span className="mr-5" key={item.link}>
              {item.title}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
