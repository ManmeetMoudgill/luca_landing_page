import React from "react";
import NavbarListItem from "../header/navbarListItem";

type SideBarProps = {
  isSideBarOpen?: boolean;
  currentActiveLink?: string;
  setCurrentActiveLink?: React.Dispatch<React.SetStateAction<string>>;
};

const SideBar = ({
  isSideBarOpen,
  currentActiveLink,
  setCurrentActiveLink,
}: SideBarProps) => {
  return (
    <div
      className={` ${
        isSideBarOpen ? "left-0" : "-left-full"
      } top-0 transition-all delay-100 flex lg:hidden ease-out relative w-[75%]  bg-black h-[89vh]`}
    >
      <ul className="flex flex-col mt-6 w-full">
        <NavbarListItem
          setCurrentActiveLink={setCurrentActiveLink}
          currentActiveLink={currentActiveLink}
          isForMobileDevice
          text="About"
          link="#about"
        />
        <NavbarListItem
          setCurrentActiveLink={setCurrentActiveLink}
          currentActiveLink={currentActiveLink}
          isForMobileDevice
          text="Expert Advisiors"
          link="#expertAdvisiors"
        />
        <NavbarListItem
          setCurrentActiveLink={setCurrentActiveLink}
          currentActiveLink={currentActiveLink}
          isForMobileDevice
          text="Testimonials"
          link="#testimonials"
        />
        <NavbarListItem
          setCurrentActiveLink={setCurrentActiveLink}
          currentActiveLink={currentActiveLink}
          isForMobileDevice
          text="Contact Us"
          link="#contactUs"
        />
      </ul>
    </div>
  );
};

export default SideBar;
