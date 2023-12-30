import React from "react";
import NavbarListItem from "../header/navbarListItem";

type SideBarProps = {
  isSideBarOpen?: boolean;
};

const SideBar = ({ isSideBarOpen }: SideBarProps) => {
  return (
    <div
      className={` ${
        isSideBarOpen ? "left-0" : "-left-full"
      } top-0 transition-all delay-100 flex lg:hidden ease-out relative w-[75%]  bg-black h-[89vh]`}
    >
      <ul className="flex flex-col mt-6">
        <NavbarListItem isForMobileDevice text="About" link="#about" />
        <NavbarListItem
          isForMobileDevice
          text="Expert Advisiors"
          link="#expertAdvisiors"
        />
        <NavbarListItem
          isForMobileDevice
          text="Testimonials"
          link="#testimonials"
        />
        <NavbarListItem isForMobileDevice text="Contact Us" link="#contactUs" />
      </ul>
    </div>
  );
};

export default SideBar;
