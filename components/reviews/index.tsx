import Image from "next/image";
import React from "react";

type Props = {};

const Reviews = (props: Props) => {
  return (
    <section id="recensioni" className="px-[1.5rem] md:px-[5rem]">
      <div className="py-8 md:py-12 relative ">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-2xl md:text-4xl text-center lg:text-left text-black font-bold px-4">
            Ecco perché.. i risultati contano! 💸
          </h2>
          <div className="w-[95%] sm:w-[85%] md:w-[80%]  xl:w-[75%] 2xl:w-[50%] 3xl:w-[60%] px-1 py-3  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-3 mt-8">
            <div className="py-4 bg_img_review rounded-3xl   shadow-3xl h-[60vh] lg:h-[80vh]  border-2 border-[#5FFDAA] group   cursor-pointer overflow-hidden">
              <Image
                src="/assets/images/review_1.webp"
                width={320}
                height={300}
                className=" w-full h-full object-contain group-hover:scale-105 duration-1000 transition-all delay-75 "
                alt="review"
              />
            </div>
            <div className="py-4 bg_img_review rounded-3xl  shadow-3xl h-[60vh] lg:h-[80vh]   border-2 border-[#5FFDAA] group cursor-pointer overflow-hidden">
              <Image
                src="/assets/images/review_2.webp"
                width={320}
                height={300}
                className="w-full h-full object-contain group-hover:scale-105 duration-1000 transition-all delay-75"
                alt="review"
              />
            </div>
            <div className="py-4 bg_img_review rounded-3xl  shadow-3xl h-[60vh] lg:h-[80vh]  border-2 border-[#5FFDAA] group cursor-pointer overflow-hidden">
              <Image
                src="/assets/images/review_3.webp"
                width={320}
                height={300}
                className="w-full h-full  object-contain group-hover:scale-105 duration-1000 transition-all delay-75"
                alt="review"
              />
            </div>
            <div className="py-4 bg_img_review rounded-3xl  shadow-3xl h-[60vh] lg:h-[80vh]   border-2 border-[#5FFDAA] group cursor-pointer overflow-hidden">
              <Image
                src="/assets/images/review_4.webp"
                width={320}
                height={300}
                className="w-full h-full  object-contain group-hover:scale-105 duration-1000 transition-all delay-75"
                alt="review"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
