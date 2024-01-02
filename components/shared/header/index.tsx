"use client";
import React, { useEffect, useState } from "react";
import NavbarListItem from "./navbarListItem";
import UserInformationLogo from "./userInfoLogo";
import { BsList } from "react-icons/bs";
import SideBar from "../sidebar";
import { disableScroolbar } from "@/hooks/useDisableScroolbar";
interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [currentActiveLink, setCurrentActiveLink] = useState<string>("about");

  disableScroolbar({ condition: isSidebarOpen });

  return (
    <header>
      <div className="bg-black px-2 md:px-7 py-5 lg:px-5 lg:py-5 flex  justify-center items-center  ">
        <div className="hidden  lg:w-[89%] xl:w-[80%] 2xl:w-[65%]  p-2 lg:flex items-center">
          {/* LEFT UPPER CONTAINER */}
          <UserInformationLogo />
          {/* RIGHT UPPER CONTAINER */}
          <div className=" w-[70%] ">
            <ul className="flex items-center justify-center">
              <NavbarListItem text="Chi sono" link="#chiSono" />
              <NavbarListItem text="Recensioni" link="#recensioni" />
              <NavbarListItem text="Risultati" link="#risultati" />
              <NavbarListItem text="Contatta ci" link="#contattaCi" />
            </ul>
          </div>
        </div>

        <div className="flex justify-between lg:hidden w-[95%]  xs:w-[87%] px-0 lg:px-2 ">
          <div className="flex items-center">
            <UserInformationLogo />
          </div>

          <div className="flex items-center ">
            <div className="border-[2px] rounded-md shadow-md border-green-200 w-[2.3rem] h-[2.3rem] sm:w-[2.7rem] sm:h-[2.7rem] flex justify-center items-center">
              <div
                className="w-[1.6rem] h-[1.6rem] sm:w-[2.1rem] sm:h-[2.1rem] flex justify-center items-center bg-[#5FFDAA]"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSidebarOpen(!isSidebarOpen);
                }}
              >
                <BsList
                  id="toggle__side__bar__button"
                  color="black"
                  className="text-3xl font-bold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SideBar
        isSideBarOpen={isSidebarOpen}
        setSidebarOpen={setIsSidebarOpen}
        currentActiveLink={currentActiveLink}
        setCurrentActiveLink={setCurrentActiveLink}
      />
    </header>
  );
};

export default Header;
