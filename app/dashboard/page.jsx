// main prof page and dashboard
import React from "react";
import UserNav from "../components/UserNav";
import Image from "next/image";
import nft1 from "@/assets/bgSteps.png";
import Nftcard from "../components/Nftcard";
import Rhs from "../components/Rhs";
import eth from "@/assets/etherium.png";

const DashboardPage = () => {
  return (
    <div className="grid grid-flow-col grid-cols-5">
      <div className="col-span-1">
        {" "}
        <UserNav select={"dashboard"} />
      </div>
      <div className="col-span-3 py-6">
        <div className="text-[#eeeeee] text-3xl">
          <h1>Hi! Welcome to your Dashboard!</h1>
          <h1 className="italic font-[200] py-3">
            Youre Currently on{" "}
            <span className="bg-[#DE8B21] rounded-3xl py-1 px-4 text-[#121212] font-[400]">
              Trip name
            </span>
          </h1>
        </div>
        <div className="grid grid-flow-row items-center">
          <h1 className="place-self-start text-3xl mt-6 text-[#eeeeee] font-[300]">
            Tasks
          </h1>
          <div className="bg-[#121212] rounded-lg grid grid-flow-col items-center p-6 m-3">
            <div className="grid grid-flow-row items-center">
              <h2 className="place-self-start text-[#DE8B21] text-xl font-[300]">
                Task Name Comes Here
              </h2>
              <div className="grid grid-flow-row">
                <h3 className="font-[200] text-[#eeeeee] text-xs pt-3 px-3">
                  Difficulty of Task
                </h3>
                <div className="px-3 pb-3 pt-1 flex">
                  <Image height={15} width={15} src={eth} />
                  <Image height={15} width={15} src={eth} />
                  <Image height={15} width={15} src={eth} />
                </div>
              </div>
              <p className="text-[#aaaaaa] text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                qui odit dolor corporis, itaque, iure facilis molestiae laborum
                vero provident veritatis non magnam autem iusto, culpa minus
                perspiciatis hic dignissimos.
              </p>
              <div className="grid gap-3 grid-flow-col justify-center items-center place-self-start my-3">
                <button className="bg-[#DE8B21] rounded-md py-1 px-3 text-[#eeeeee]">
                  View Reward
                </button>
                <button className="border-[#DE8B21] border rounded-md py-1 px-3 text-[#DE8B21]">
                  Submit Proof
                </button>
              </div>
            </div>
            <div>
              <div>
                {/* navigation buttons */}
                {/* Image */}
                <Image
                  height={240}
                  width={240}
                  src={nft1}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="place-self-start text-3xl mt-6 text-[#eeeeee] font-[300]">
            {" "}
            <h1>Collected NFTs</h1>
            {/* maybe sorting */}
          </div>
          <div className="grid grid-flow-col gap-3 justify-center items-center mx-3">
            <Nftcard />
            <Nftcard />
            <Nftcard />
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <Rhs />
      </div>
    </div>
  );
};

export default DashboardPage;
