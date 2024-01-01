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
              <div className="wrappertext grid grid-cols-2  gap-4 border border-red-600 pl-[1.25rem] pb-[1.25rem] ">
                <div className="bg-[#EDEDED] rounded-lg col-span-1  h-[8rem]" />
                <div className="bg-[#EDEDED] rounded-lg  col-span-1 h-[8rem] ">
                  <Image
                    alt="Traders"
                    height={100}
                    width={100}
                    src="/assets/images/site_img.jpeg"
                    className="rounded-lg w-full h-[94%] object-cover"
                  />
                </div>
                <div className="bg-[#EDEDED]   col-span-1 rounded-lg  h-[8rem]" />
                <div className="bg-[#EDEDED]  col-span-1  rounded-lg h-[8rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
