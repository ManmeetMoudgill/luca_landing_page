"use client";
import React, { memo, useRef } from "react";
import NavbarListItem from "../header/navbarListItem";
import useClickOutside from "@/hooks/useClickOutSide";

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
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside<HTMLDivElement>({
    ref: ref,
    callback: () => {
      setSidebarOpen!(false);
    },
    isCallbackEnabled: true,
  });

  return (
    <div
      ref={ref}
      className={`  ${
        isSideBarOpen ? "left-0" : "-left-full"
      }  top-[6rem] md:top-[8rem]  z-[111] transition-all  delay-100 flex lg:hidden ease-out absolute w-[75%]  bg-black h-screen`}
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
  );
};

export default memo(SideBar);
