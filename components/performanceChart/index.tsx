import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="px-[1.5rem] md:px-[5rem]">
      <div className="py-8 md:py-12 relative border border-blue-500">
        <div className="rich-text-fullwidth md:mx-auto md:w-[70%] lg:w-[60%] border border-emerald-600">
          {/*   <span className="border border-black text-[#ababab] abolsute w-[30px] inset-y-0 left-0  flex justify-center items-center">
          Performance
        </span> */}
          <div className="richtextblock pl-8">
            <div className="flex flex-grow">
              <div className="w-full wrappertext grid grid-cols-[1fr,1fr] lg:grid-cols-[18rem,18rem] grid-rows-[1fr,1fr] lg:grid-rows-[18rem,18rem] gap-3 lg:gap-12 border border-red-600 pl-[1.25rem] pb-[1.25rem] lg:pl-12 lg:pb-12">
                <div className="bg-[#EDEDED] rounded-lg  w-full h-[10rem] sm:h-[14rem] " />
                <div className="bg-[#EDEDED] rounded-lg w-full  h-[10rem] sm:h-[14rem]  ">
                  <Image
                    alt="Traders"
                    height={100}
                    width={100}
                    src="/assets/images/site_img.jpeg"
                    className="rounded-lg w-full h-[94%] object-cover"
                  />
                </div>
                <div className="bg-[#EDEDED]    rounded-lg w-full h-[10rem] sm:h-[14rem] " />
                <div className="bg-[#EDEDED]  rounded-lg w-full h-[10rem] sm:h-[14rem] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
