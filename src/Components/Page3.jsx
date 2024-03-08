import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const Page3 = () => {
  return (
    <div className="w-full flex relative">
      <div className="w-1/2 bg-white py-10 pl-10">
        <div className="text-[4vw] leading-none tracking-tight font-medium pb-[100px] sticky top-10">
          What would you build if throughput weren't an issue?
        </div>
      </div>
      <div className="w-1/2 text-white">
        <div className="bg-black py-10 pl-10">
          <div className="text-2xl font-medium w-1/2 mb-[10rem]">
            Every second...
          </div>
          <div className="text-2xl font-medium w-1/2 mb-[10rem]">
            <span className="text-6xl font-semibold block pb-4">50,000+</span>
            Push notifications are sent.
          </div>
          <div className="text-2xl font-medium w-1/2 mb-[10rem]">
            <span className="text-6xl font-semibold block pb-4">
              3.4 million
            </span>
            Emails are sent.
          </div>
          <div className="text-2xl font-medium w-1/2 mb-[10rem]">
            <span className="text-6xl font-semibold block pb-4">100,000+</span>
            Google searches are made.
          </div>
          <div className="text-2xl font-medium w-1/2">
            The biggest gaming sites host hundreds of thousands of players
            <span className="text-6xl font-semibold block pb-2">at once.</span>
          </div>
        </div>
        <div className="h-screen w-full text-black bg-[#EEEEEE] hover:bg-[#C4FEC3] transition-all duration-200 ease-out flex flex-col justify-between p-10">
          <h1 className="text-2xl font-medium">
            The best applications
            <span className="block" /> couldn't be built in web3.
          </h1>
          <div className="w-full flex justify-between items-end text-6xl font-medium">
            <a href="#">
              Until now.
              <span className="block" /> Find out how.
            </a>
            <a href="#">
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
