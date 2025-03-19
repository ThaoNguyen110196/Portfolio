import React from "react";
import Image from "next/image";
import image from "../app/assets/svg/penguin.svg";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center z-50 bg-black">
      <div className="flex flex-col items-center gap-2 animate-bounce">
        <Image
          src={image}
          alt="loading"
          className="h-[120px] w-[120px] object-cover"
        />
      </div>
    </div>
  );
};

export default Loading;
