"use client";
import Image from "next/image";
import React from "react";

import chatImg from "../../assets/Chat.png";
import mockup from "../../assets/showcaseMockup.png";

const Showcase = () => {
  return (
    <div className="showcase pt-[100px]">
      <div className="">
        <h1 className="text-[#eeeeee] text-6xl grid grid-flow-row p-9 mt-3 ml-3">
          <span>Travel, Earn</span>
          <span>and Live Life your</span>
          <span>way!</span>
        </h1>
        <div className="ml-60 -mt-9">
          <Image src={chatImg} width={360} height={360} />
        </div>
      </div>
      <Image src={mockup} width={400} height={400} />
    </div>
  );
};

export default Showcase;
