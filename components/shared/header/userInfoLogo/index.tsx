import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdVerified } from "react-icons/md";

type Props = {};

const UserInformationLogo = (props: Props) => {
  return (
    <div className=" w-auto lg:w-[30%] flex items-center ">
      {/*  */}
      <div className="mx-1">
        <div className="border_color w-[3.3rem] h-[3.3rem] sm:w-[4.3rem] sm:h-[4.3rem]  md:w-[6rem] md:h-[6rem] rounded-full flex justify-center items-center">
          <div className="w-[2.6rem] h-[2.6rem] sm:w-[3.6rem] sm:h-[3.6rem]  md:w-[5.3rem] md:h-[5.3rem] rounded-full">
            <Link href="/">
              <Image
                priority={true}
                src="/assets/images/site_img.webp"
                alt="Picture of the author"
                width={216}
                height={216}
                className="rounded-full w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
      </div>

      {/*  */}
      <div className=" flex flex-col mx-1">
        <div className="flex items-center">
          <span className="text-white text-base md:text-lg">
            Luca Cupellaro
          </span>
          <MdVerified
            // color="#3cd13e"
            className="text_color text-base sm:text-lg ml-2"
          />
        </div>
        <div>
          <span className="text-[#707070] text-xs sm:text-sm font-light">
            Trading algorithms developer
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserInformationLogo;
