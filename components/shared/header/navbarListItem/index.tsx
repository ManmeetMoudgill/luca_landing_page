import Link from "next/link";
import React from "react";

type NavbarListItemProps = {
  text: string;
  link: string;
  isForMobileDevice?: boolean;
};

const NavbarListItem = ({
  text,
  link,
  isForMobileDevice = false,
}: NavbarListItemProps) => {
  return (
    <li
      className={`text-white text-lg mx-4  flex flex-col group ${
        isForMobileDevice ? "my-3  px-2" : "my-0 px-0"
      }`}
    >
      <Link href={link}>
        <span>{text}</span>
      </Link>
      <span className="w-[0px] group-hover:w-full transition-all delay-75 ease-in-out min-h-[2px] bg-[#3cd13e]"></span>
    </li>
  );
};

export default NavbarListItem;
