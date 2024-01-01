import React from "react";
import PictureInfo from "../shared/pictureInfo";
import { PARA1 } from "./constants";
const index = () => {
  return (
    <div>
      <PictureInfo
        title="The EA that cracked the AI formula"
        heading="PERCEPTRADER AI"
        paragraphs={PARA1}
        positionImg="left"
        imgSource="/assets/images/1.jpeg"
      />
      <PictureInfo
        title="The EA that cracked the AI formula"
        heading="PERCEPTRADER AI"
        paragraphs={PARA1}
        positionImg="right"
        imgSource="/assets/images/2.jpeg"
      />
    </div>
  );
};

export default index;
