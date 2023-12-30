import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdVerified } from "react-icons/md";
interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <div className="bg-black p-5 flex justify-center items-center border-2 border-green-900">
      <div className="w-[60%] border-2 border-white p-2 flex items-center">
        {/* LEFT UPPER CONTAINER */}
        <div className="border-2 border-red-900 w-[30%] flex items-center">
          {/*  */}
          <div className="border-2 border-blue-900 mx-1">
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
          <div className="border-2 border-blue-900 flex flex-col mx-1">
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
        <div className="border-2 border-red-900 w-[70%]">asdsadsa</div>
        {/* RIGHT UPPER CONTAINER */}
      </div>
    </div>
  );
};

export default Header;
