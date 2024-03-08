import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
const Marquee = () => {
  const textObj = {
    "Unmatched speeds":
      "Eclipse runs the highly performant Solana Virtual Machine (SVM) as its execution environment. This means optimized parallel execution capable of handling truly massive scale.",
    "Security properties from Etherium":
      "Our validating bridge is on Ethereum. The bridge will validate all Eclipse transactions, preventing submission of invalid states. Additionally, it will enforce eventual liveness and censorship resistance under certain failure cases.",
    "Composabilty across many apps":
      "It’s complicated to maintain accounts across many chains. It’s worse UX to keep bridging and worrying about what gas token you need. Eclipse is a shared general-purpose L2 that can support most (if not all) use cases.",
    "Scalabale and verifiable":
      "Celestia’s data availability sampling (DAS) light node support means users can verify for themselves that Eclipse block data has been made available while contributing to securely scaling the entire network.",
  };

  const textArr = Object.entries(textObj);
  const [click, setClick] = useState(Array(textArr.length).fill(false));
  const handleClick = (e) => {
    const newClick = [...click];
    newClick[e] = !newClick[e];
    setClick(newClick);
  };

  return (
    <div className="w-full flex relative">
      <div className="w-1/2  text-white">
        <div
          style={{ height: "calc(100% - 12vh)" }}
          className={`w-full bg-[#FF4201] flex flex-col justify-between py-8 pl-10`}
        >
          <h1 className="text-6xl font-medium">
            A Layer 2 built for the future
          </h1>
          <h1 className="text-2xl font-medium">
            Superior speed, security, and
            <span className="block" /> scalability for powerful apps.
          </h1>
        </div>
        <div className="w-full h-[12vh] flex justify-between items-center px-10 text-2xl font-medium bg-black hover:bg-[#C4FEC3] hover:text-black transition-all duration-200 ease-out border-r-[0.07px] border-[#5e5e5e]">
          <h1>Learn how it works</h1>
          <FaArrowRight />
        </div>
      </div>
      <div className="w-1/2 text-white bg-black">
        {textArr.map(([key, value], index) => (
          <div
            onClick={() => {
              handleClick(index);
            }}
            key={index}
            className={`${
              click[index]
                ? "h-[35vh] border-[#FF4201]"
                : "h-[12vh] border-[#5e5e5e]"
            } w-full border-t-[0.1px] transition-all duration-[600ms] ease-[cubic-beizure(0.76, 1, 0.24, 0)] cursor-pointer select-none  overflow-hidden flex flex-col`}
          >
            <div
              className={`flex gap-5 items-center text-2xl px-10 pt-10 pb-2`}
            >
              <div
                className={`${
                  click[index] ? "text-[#FF4201]" : "text-white"
                } transition-all duration-[600ms] ease-[cubic-beizure(0.76, 1, 0.24, 0)]`}
              >
                <FaCircle />
              </div>
              <h1>{key}</h1>
            </div>
            <h1 className="px-24 py-10 text-xl">{value}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
