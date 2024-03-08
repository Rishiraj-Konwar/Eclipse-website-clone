import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { svgNav } from "./Data";
const Navbar = () => {
  const navlist = ["How it works", "Careers", "News", "Docs"];
  const [hovered, setHovered] = useState(null);
  const [hover2, setHover2] = useState(false);
  return (
    <nav className="flex justify-between items-center px-10 py-5">
      <div className="w-fit scale-[0.8]">
        <div
          style={{ animationDuration: "10s" }}
          className="w-[100px] h-[100px]  hover:animate-spin"
        >

          {svgNav.image}
        </div>
      </div>
      <div className="w-[45vw]">
        <ul className="grid grid-cols-2 gap-x-10">
          {navlist.map((item, index) => {
            return (
              <li
                onMouseEnter={() => {
                  setHovered(index);
                  setHover2(true);
                }}
                onMouseLeave={() => {
                  setHovered(null);
                  setHover2(false);
                }}
                className={`border-t-[1px] pb-3 flex text-lg items-center justify-between transition-all duration-[0.2s] ease-out ${
                  hover2 === false
                    ? "text-black border-black"
                    : hovered === index
                    ? "text-black border-black"
                    : "text-[#777] border-[#777]"
                }`}
                key={index}
              >
                <a href="#">{item}</a>
                {index === 3 && <FiArrowUpRight size="20" />}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
