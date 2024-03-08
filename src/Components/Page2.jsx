import React, { useState } from "react";
import { image } from "./Data";
const Page2 = () => {
  const textArr = [
    "Eclipse is",
    "Ethereum's fastest L2,",
    "powered by the",
    "Solana Virtual Machine",
  ];
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(true);
  };
  const handleHoverOut = () => {
    setHover(false);
  };

  const { image1, image2, image3 } = image;
  return (
    <div  className="relative py-10 px-8 flex bg-white z-10">
      <div className="w-2/3 h-screen flex flex-col justify-between">
        <div>
          {textArr.map((text, index) => (
            <h1
              key={index}
              className={`text-6xl tracking-tighter font-medium ${
                index === 1 && "text-[#FF4201]"
              }`}
            >
              {text}
            </h1>
          ))}
        </div>
        <div className="w-[60%]">
          <h1 className="text-2xl font-medium text-[#FF4201]">
            Eclipse is a new kind of architecture built to power the next
            generation of decentralized applications we’ve all been dreaming
            about.
          </h1>
        </div>
      </div>
      <div className="w-1/3 relative">
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
          className={`w-[300px] h-[300px] rounded-full absolute bottom-0 right-0 ${
            hover ? "bg-[#FF4201]" : "bg-black"
          } transition-all duration-300 ease-out`}
        >
          <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
            <div className="animate-spin" style={{ animationDuration: "10s" }}>
              <div
                className={`absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] ${
                  hover ? "opacity-0" : "opacity-100"
                } transition-all duration-300 ease-out`}
              >
                {image1}
              </div>
              <div
                className={`absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] ${
                  hover ? "opacity-100" : "opacity-0"
                } transition-all duration-300 ease-out`}
              >
                {image2}
              </div>
            </div>
          </div>
          <div className="w-[20%] h-[20%] absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
            {image3}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
