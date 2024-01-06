"use client";
import Link from "next/link";
import React from "react";

type NavbarListItemProps = {
  text: string;
  link: string;
  isForMobileDevice?: boolean;
  currentActiveLink?: string;
  setCurrentActiveLink?: React.Dispatch<React.SetStateAction<string>>;
};

const NavbarListItem = ({
  text,
  link,
  isForMobileDevice = false,
  currentActiveLink,
  setCurrentActiveLink,
}: NavbarListItemProps) => {
  return (
    <li
      className={`text-white text-lg mx-4  flex flex-col group ${
        isForMobileDevice ? "my-3 py-1 rounded-md shadow-md  px-2" : "my-0 px-0"
      } ${
        currentActiveLink === text?.toLowerCase() && isForMobileDevice
          ? "bg-[#2b2a2a]"
          : ""
      }`}
    >
      <Link
        href={link}
        onClick={() => {
          if (isForMobileDevice && setCurrentActiveLink) {
            setCurrentActiveLink(text?.toLowerCase());
          }
        }}
      >
        <span>{text}</span>
      </Link>
      <span
        className={`w-[0px] ${
          !isForMobileDevice ? "group-hover:w-full" : ""
        } transition-all delay-75 ease-in-out min-h-[2px] bg_text`}
      ></span>
    </li>
  );
};

export default NavbarListItem;
