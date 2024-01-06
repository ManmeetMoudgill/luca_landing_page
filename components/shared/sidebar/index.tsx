"use client";
import React, { memo } from "react";
import NavbarListItem from "../header/navbarListItem";

type SideBarProps = {
  isSideBarOpen?: boolean;
  currentActiveLink?: string;
  setSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentActiveLink?: React.Dispatch<React.SetStateAction<string>>;
};

const SideBar = ({
  isSideBarOpen,
  currentActiveLink,
  setCurrentActiveLink,
  setSidebarOpen,
}: SideBarProps) => {
  const handle = () => {
    setSidebarOpen!(!isSideBarOpen);
  };
  /* console.log("inside the sidebar") */
  return (
    <div
      className={`  ${
        isSideBarOpen ? "block" : "hidden"
      } w-full h-[100vh] z-[222] top-0 absolute left-0`}
      onClick={handle}
    >
      <div
        className={`  ${
          isSideBarOpen ? "left-0" : "-left-full"
        }  top-[6rem] md:top-[8rem] sm:w-[50%]  z-[111] transition-all  delay-100 flex lg:hidden ease-out absolute w-[75%]  bg-black h-full`}
      >
        <ul className="flex flex-col mt-6 w-full">
          <NavbarListItem
            setCurrentActiveLink={setCurrentActiveLink}
            currentActiveLink={currentActiveLink}
            isForMobileDevice
            text="Chi sono"
            link="#chiSono"
          />
          <NavbarListItem
            setCurrentActiveLink={setCurrentActiveLink}
            currentActiveLink={currentActiveLink}
            isForMobileDevice
            text="Recensioni"
            link="#recensioni"
          />
          <NavbarListItem
            setCurrentActiveLink={setCurrentActiveLink}
            currentActiveLink={currentActiveLink}
            isForMobileDevice
            text="Risultati"
            link="#risultati"
          />
          <NavbarListItem
            setCurrentActiveLink={setCurrentActiveLink}
            currentActiveLink={currentActiveLink}
            isForMobileDevice
            text="Contatta ci"
            link="#contattaCi"
          />
        </ul>
      </div>
    </div>
  );
};

export default memo(SideBar);
