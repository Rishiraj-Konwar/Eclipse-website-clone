import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { image } from "./Data";
const Marquee3 = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="w-full h-[60vh] flex relative">
      <div className="w-1/2 h-full text-6xl font-medium bg-black text-white flex flex-col gap-5 py-8 px-10 hover:bg-[#c4fec3] hover:text-black transition-all duration-200 ease-[(0.76, 1, 0.24, 0)] border-r-[0.8px] border-b-[0.8px] border-[#4f4f4f]">
        <h1>Latest news</h1>
        <FaArrowRight />
      </div>
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className="w-1/2 h-full bg-black flex flex-col justify-between hover:bg-[#c4fec3] text-white hover:text-black transition-all duration-200 ease-[(0.76, 1, 0.24, 0)] px-10 py-8"
      >
        <div
          className={`${
            hover && "filter invert"
          } transition-all duration-200 ease-[(0.76, 1, 0.24, 0)]`}
        >
          {image["image4"]}
        </div>
        <a href="#">
          <div className="flex items-center justify-between text-7xl font-medium">
            <h1>
              See open
              <span className="block" /> positions
            </h1>
            <FaArrowRight />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Marquee3;
