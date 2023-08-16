import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import testImg from "@/assets/meta.png";

const Rhs = () => {
  return (
    <div>
      <div className="grid grid-flow-row bg-[#121212] rounded-md text-[#eeeeee] m-3 p-3">
        {/* user profile */}
        <div className="grid grid-flow-col">
          {" "}
          <UserButton afterSignOutUrl="/" />
          <div className="grid grid-flow-row">
            {" "}
            <h2 className="text-xl">Name herere</h2>
            <h4 className="text-xs italic -mt-1">@username</h4>
          </div>
        </div>
        <h3 className="text-sm px-3 py-3 my-3 rounded-md bg-[#DE8B21]">
          Total XP: +103
        </h3>
      </div>
      <div className="nftBorder p-[1px] w-56 rounded-md my-3 text-[#eeeeee]">
        <div className="bg-[#121212] rounded-md py-3 px-1">
          {/* rewards */}
          <h1 className="text-xl font-[200] py-4 px-3">Your Rewards</h1>
          <ul>
            <li className="grid grid-flow-col">
              {/* reward */}
              <Image height={52} width={52} src={testImg} />
              <div>
                <h3 className="text-sm font-[300]">Surfing Rookie</h3>
                <p className="text-[9px] font-[100] text-[#c6c6c6] leading-3">
                  Lorem ipsum dolor sit amet consecte tur adipisicing elit.
                </p>
              </div>
            </li>
            <li className="border-[0.5px] my-[3px] mx-3 border-[#eeeeee90]"></li>
            <li className="grid grid-flow-col">
              {/* reward */}
              <Image height={52} width={52} src={testImg} />
              <div>
                <h3 className="text-sm font-[300]">Surfing Rookie</h3>
                <p className="text-[9px] font-[100] text-[#c6c6c6] leading-3">
                  Lorem ipsum dolor sit amet consecte tur adipisicing elit.
                </p>
              </div>
            </li>
            <li className="border-[0.5px] my-[3px] mx-3 border-[#eeeeee90]"></li>
            <li className="grid grid-flow-col">
              {/* reward */}
              <Image height={52} width={52} src={testImg} />
              <div>
                <h3 className="text-sm font-[300]">Surfing Rookie</h3>
                <p className="text-[9px] font-[100] text-[#c6c6c6] leading-3">
                  Lorem ipsum dolor sit amet consecte tur adipisicing elit.
                </p>
              </div>
            </li>
            <li className="border-[0.5px] my-[3px] mx-3 border-[#eeeeee90]"></li>
            <li className="grid grid-flow-col">
              {/* reward */}
              <Image height={52} width={52} src={testImg} />
              <div>
                <h3 className="text-sm font-[300]">Surfing Rookie</h3>
                <p className="text-[9px] font-[100] text-[#c6c6c6] leading-3">
                  Lorem ipsum dolor sit amet consecte tur adipisicing elit.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rhs;
