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

export default SideBar;
