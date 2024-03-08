import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
const Marquee2 = ({ heading, arr, border }) => {
  const [hover, setHover] = useState(null);

  return (
    <div
      className={`relative w-full min-h-[30vh] bg-white flex py-8 ${
        border && "border-b-[1px] border-[#e8e8e8]"
      }`}
    >
      <div className="w-1/2 px-10 text-6xl font-medium">{heading}</div>
      <div className="w-1/2 px-10">
        {arr.map((item, index) => (
          <a href="#" key={index}>
            <div
              onMouseEnter={() => {
                setHover(index);
              }}
              onMouseLeave={() => {
                setHover(null);
              }}
              className={`flex justify-start items-center gap-2 text-2xl font-medium`}
            >
              <div
                className={`${
                  hover === index && "text-[#ff4201]"
                } text-3xl font-semibold transition-color duration-200 ease-[(0.76, 1, 0.24, 0)]`}
              >
                <FiArrowUpRight />
              </div>
              <div
                className={`${
                  hover === index && "pl-3 text-[#ff4201]"
                } transition-all duration-200 ease-[(0.76, 1, 0.24, 0)]`}
              >
                {item}
              </div>
            </div>
          </a>
        ))}
        <h1 className="flex gap-3 items-center text-2xl font-medium">
          <span className="pl-[5px]">+</span>more
        </h1>
      </div>
    </div>
  );
};

export default Marquee2;
