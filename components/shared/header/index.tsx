import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdVerified } from "react-icons/md";
import NavbarListItem from "./navbarListItem";
interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <div className="bg-black p-5 flex justify-center items-center">
      <div className="hidden  lg:w-[89%] xl:w-[80%] 2xl:w-[65%]  p-2 lg:flex items-center">
        {/* LEFT UPPER CONTAINER */}
        <div className=" w-[30%] flex items-center">
          {/*  */}
          <div className="mx-1">
            <div className="border-2 border-[#5FFDAA] w-[6rem] h-[6rem] rounded-full flex justify-center items-center">
              <div className=" w-[5.3rem] h-[5.3rem] rounded-full">
                <Link href="/">
                  <Image
                    src={"/assets/images/icon.jpg"}
                    alt="Picture of the author"
                    width={216}
                    height={216}
                    className="rounded-full w-full h-full"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/*  */}
          <div className=" flex flex-col mx-1">
            <div className="flex items-center">
              <span className="text-white text-lg">Luca Cupellaro</span>
              <MdVerified color="#3cd13e" className="text-lg ml-2" />
            </div>
            <div>
              <span className="text-[#707070] text-sm font-light">
                Trading algorithms developer
              </span>
            </div>
          </div>
        </div>
        {/* RIGHT UPPER CONTAINER */}
        <div className=" w-[70%] ">
          <ul className="flex items-center justify-center">
            <NavbarListItem text="About" link="#about" />
            <NavbarListItem text="Expert Advisiors" link="#expertAdvisiors" />
            <NavbarListItem text="Testimonials" link="#testimonials" />
            <NavbarListItem text="Contact Us" link="#contactUs" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
