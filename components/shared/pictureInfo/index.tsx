import { ParaType } from "@/components/result/types";
import Image from "next/image";
import React from "react";
interface Props {
  title: string;
  heading: string;
  paragraphs: Array<ParaType>;
}

const index = ({ title, heading, paragraphs }: Props) => {
  return (
    <div className="text-[#707070] justify-center items-center py-8 md:py-12">
      <div className="max-w-[120rem] sm:max-w-[80rem] mx-auto px-6 sm:px-20">
        <div className="bg-black rounded-lg flex flex-col lg:flex-row justify-center items-center relative ">
          <div className=" w-full lg:w-[50%] bend_to_y_axis h-[16rem] sm:h-[18rem] lg:h-full my-auto left-0  lg:-left-10 -top-10 lg:top-0 absolute  flex justify-center items-center">
            <Image
              src="/assets/images/1.jpeg"
              alt="imagefortext"
              width={1000}
              height={1000}
              className=" w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] object-contain "
            />
          </div>
          <div className="w-full lg:w-[50%]  flex justify-center items-center h-[16rem] sm:h-[18rem] lg:h-full" />
          <div className="w-full lg:w-[50%] px-6 py-0 sm:px-8 md:px-10 lg:pl-0 sm:pb-8 lg:pb-10 lg:pr-16 lg:py-16">
            <p className="text-base my-2">"{title}"</p>
            <p className="text-3xl text-[#5FFDAA] my-2">{heading}</p>
            <div className="text-lg mt-8">
              {paragraphs?.map((item, index) => (
                <p key={index} className="mb-4 leading-6">
                  {item.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
