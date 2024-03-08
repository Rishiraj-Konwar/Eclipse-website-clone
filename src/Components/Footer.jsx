import React from "react";
import { socialArr } from "./Data";
import { FiArrowUpRight } from "react-icons/fi";
import Marquee3 from "./Marquee3";
const Footer = () => {
  return (
   <footer className="relative w-full">
    <div style={{zIndex: "100"}} className="w-full relative">
    <Marquee3/>
    </div>
    <div style={{zIndex: "5"}} className="sticky bottom-0 bg-black w-full h-[60vh] text-[#c4fec3] overflow-hidden ">
    <h1 className="w-full text-[27.5vw] relative -top-12 font-semibold">eclipse</h1>
    <div className="absolute bottom-0 left-0 flex items-center gap-10 px-10 py-8 w-fit">
      {socialArr.map((item, index) => (
        <a href="#" key={index} className="flex items-center gap-5 text-[#c4fec3]">
          <h1>{item}</h1>
       <FiArrowUpRight size={20}/>
        </a>
      ))}
    </div>
    </div>
   
   </footer>
  );
};

export default Footer;
