import Image from "next/image";
import React from "react";

type Props = {};

const Reviews = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-4xl text-center lg:text-left text-black font-bold px-4">
        Ecco perché.. i risultati contano! 💸
      </h2>
      <div className="w-[95%] sm:w-[85%] md:w-[80%]  xl:w-[55%] 2xl:w-[50%] px-1 py-3  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-3 mt-8">
        <div className=" rounded-xl  shadow-3xl h-[60vh] lg:h-[80vh] p-2 border-2 border-[#5FFDAA]  hover:-rotate-2 duration-1000 transition-all delay-75 cursor-pointer overflow-hidden">
          <Image
            src="/assets/images/review_1.jpeg"
            width={320}
            height={300}
            className="w-full h-full object-contain "
            alt="review"
          />
        </div>
        <div className=" rounded-xl  shadow-3xl h-[60vh] lg:h-[80vh]  p-2 border-2 border-[#5FFDAA]  hover:-rotate-2 duration-1000 transition-all delay-75 cursor-pointer overflow-hidden">
          <Image
            src="/assets/images/review_2.jpeg"
            width={320}
            height={300}
            className="w-full h-full object-contain "
            alt="review"
          />
        </div>
        <div className=" rounded-xl  shadow-3xl h-[60vh] lg:h-[80vh]  p-2 border-2 border-[#5FFDAA]  hover:-rotate-2 duration-1000 transition-all delay-75 cursor-pointer overflow-hidden">
          <Image
            src="/assets/images/review_3.jpeg"
            width={320}
            height={300}
            className="w-full h-full  object-contain "
            alt="review"
          />
        </div>
        <div className=" rounded-xl  shadow-3xl h-[60vh] lg:h-[80vh]  p-2 border-2 border-[#5FFDAA]  hover:-rotate-2 duration-1000 transition-all delay-75 cursor-pointer overflow-hidden">
          <Image
            src="/assets/images/review_4.jpeg"
            width={320}
            height={300}
            className="w-full h-full  object-contain "
            alt="review"
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
