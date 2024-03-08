import React from "react";
import Navbar from "./Navbar";
const Page1 = () => {

  return (
    <div  className="sticky top-0 w-full h-[100vh] bg-[#C4FEC3] flex flex-col justify-between">
      <Navbar />
      <div className="w-full h-fit relative">
        <h1 className="text-[27.5vw] font-semibold">eclipse</h1>
        <h1 className="text-[4.5vw] font-semibold tracking-tight absolute top-[12vh] right-[5vw]">
          Ethereum's fastest L2
        </h1>
      </div>
    </div>
  );
};

export default Page1;
