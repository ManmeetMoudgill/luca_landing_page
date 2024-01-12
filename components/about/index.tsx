import Image from "next/image";
import React from "react";
import LinkText from "../shared/linkText";
import GreenText from "../shared/greenText";
const About = () => {
  return (
    <section
      id="chiSono"
      className="text-[#707070] text-xl px-[1.5rem] md:px-[5rem]  justify-center items-center"
    >
      <div className=" justify-center items-center py-8 md:py-12">
        <div className="md:mx-auto md:w-[90%] lg:w-[60%]">
          <div className="flex flex-col justify-between items-center md:flex-row ">
            <div className="mx-2 ">
              <div className="border_color p-[0.5rem] rounded-full w-[7rem] h-[7rem] ">
                <Image
                  src="/assets/images/site_img.webp"
                  alt="Profile pic"
                  width={114}
                  height={114}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-grow mx-2 pl-2 ">
              <p className="font-base leading-6 mt-8 md:mt-0 text-center break-words md:text-left">
                Hi - I am Valeriia Mishchenko and you may already know me for my
                Forex Expert Advisors which are rated among the best ones in the
                market
              </p>
            </div>
          </div>
          <div className="mt-12">
            <p className="mb-4">
              Benvenuti in SniperForex, leader consolidato nel settore del
              trading. Da molti anni, abbiamo dedicato il nostro impegno a
              offrire servizi di qualità, mettendo a punto
              <GreenText text="strategie avanzate e soluzioni innovative" />
              nel mondo del trading online.
            </p>
            <p className="mb-4">
              Ecco una possibile presentazione del
              <LinkText text="vostro progetto" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
