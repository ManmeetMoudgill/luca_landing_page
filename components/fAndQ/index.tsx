import React from "react";
import AccordianContainer from "../shared/accordianContainer";

const paragraphs1: ParagraphsProps[] = [
  {
    text: "There are not many differences between website or MQL purchases. On MQL, each license comes with 10 VPS terminal activations, while on website it comes with the possibility to use the EAs on 10 different accounts simultaneously, not tied to a specific VPS.",
  },
  {
    text: "In order to handle these account numbers, you just need to contact me via email or Telegram and I will assist you right away. Moreover, you can get a better price at website than on MQL.",
  },
];
const index = () => {
  return (
    <div className="my-10 max-w-[95%] mx-auto w-[50rem]">
      <h1 className="text-3xl font-bold text-center mb-10">
        Got some remaining questions?
      </h1>
      <p className="mb-6">
        That's super understandable. Even though the whole point of Expert
        Advisors is to enjoy trading on auto-pilot, there are some things that
        need to be done before
      </p>

      <p className="mb-6">
        Here is a list of the most common questions I receive and the answers.
        If you need help with anything that's not here, do not hesitate to
        contact me via email or Telegram, and I'll be happy to respond to you
      </p>
      <AccordianContainer
        headText="What is the difference between buying on website or MQL?"
        paragraphs={paragraphs1}
      />
      <AccordianContainer
        headText="What is the difference between buying on website or MQL?"
        paragraphs={paragraphs1}
      />
    </div>
  );
};

export default index;
