import Link from "next/link";
import React from "react";

interface SocialProps {
  icon: JSX.Element;
  link: string;
}

const Social = ({ icon, link }: SocialProps) => {
  return (
    <div className="mx-2 h-12 w-12 md:w-16 md:h-16 hover:bg-gradient-to-tr hover:from-red-100 hover:to-[#be083c] transform transition-all delay-100   bg-white rounded-2xl">
      <Link
        href={link}
        target="_blank"
        rel="noreferrer"
        className="  w-full h-full flex justify-center items-center"
      >
        {icon}
      </Link>
    </div>
  );
};

export default Social;
