import React from "react";
interface Props {
  text: string;
}
const index = ({ text }: Props) => {
  return (
    <>
      &nbsp;
      <span>
        <a href="" className="decoration-solid text-[#007bff] ">
          {text}
        </a>
      </span>
      &nbsp;
    </>
  );
};

export default index;
