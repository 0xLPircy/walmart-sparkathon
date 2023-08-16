import Image from "next/image";
import React from "react";
import sj from "@/assets/nfts/surferJunkie.png";
import eth from "@/assets/etherium.png";

const Nftcard = () => {
  return (
    <div className="nftBorder p-[1px] w-56 rounded-md my-3">
      <div className="bg-[#121212] rounded-md p-4 grid grid-flow-row justify-center items-center">
        <Image
          height={210}
          width={210}
          src={sj}
          className="justify-self-center pb-1"
        />
        <h2 className="text-xl italic text-[#eeeeee]">Surfer Junkie</h2>
        <p className="text-[#a9a9a9] text-xs italic">Trip name here</p>
        <div className="px-3 pb-3 pt-1 flex">
          <Image height={15} width={15} src={eth} />
          <Image height={15} width={15} src={eth} />
          <Image height={15} width={15} src={eth} />
          <Image height={15} width={15} src={eth} />
        </div>
        <button className="border border-[#DE8B21] text-[#DE8B21] rounded-md py-1 px-3 mt-3">
          Reward
        </button>
      </div>
    </div>
  );
};

export default Nftcard;
