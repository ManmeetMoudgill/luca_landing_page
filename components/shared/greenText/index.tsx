import React from "react";
interface Props {
  text: string;
}
const index = ({ text }: Props) => {
  return (
    <>
      &nbsp;
      <span className={`font-bold   bg_text text-black`}>{text}</span>
      &nbsp;
    </>
  );
};

export default index;
