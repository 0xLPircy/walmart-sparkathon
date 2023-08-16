import React from "react";
import Image from "next/image";
import steps from "../../assets/steps.png";

const HowToUse = () => {
  return (
    <div className="text-white howToUse grid grid-flow-row justify-center items-center">
      <div className="pt-9 howToUseContent">
        <Image
          className="justify-self-center -mt-80"
          src={steps}
          height={1110}
          width={1110}
        />
        <h1 className="text-7xl -mt-[444px]">How to use the platform</h1>
        <p className="text-2xl pt-6">
          Plan your next adventure and let Wanderlust Journeys
        </p>
        <p className="text-2xl">elevate your travel journey to new heights!</p>
      </div>
    </div>
  );
};

export default HowToUse;
