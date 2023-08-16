import Image from "next/image";
import React from "react";
import insta from "@/assets/Insta.png";
import meta from "@/assets/meta.png";
import x from "@/assets/x.png";

const Footer = () => {
  return (
    <div className="grid grid-flow-col gap-16 text-[#dbdbdb] py-6 justify-center items-center">
      <div className="justify-self-center grid grid-flow-row justify-center items-center">
        {" "}
        <Image height={150} width={150} src="/logo.png" />
        <h1 className="justify-self-center font-[600] text-lg">TRAVEL DAPP</h1>
      </div>

      <div className="justify-self-center font-[200] italic">
        <ul className="grid grid-flow-row gap-3 justify-center items-center justify-self-center">
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <div className="justify-self-center font-[200] italic">
        <ul className="grid grid-flow-row gap-3 justify-center items-center justify-self-center">
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="justify-self-center font-[200] italic">
        <ul className="grid grid-flow-row gap-3 justify-center items-center justify-self-center">
          <li>Blog and Travel Guides</li>
          <li>Partner Programs</li>
          <li>NFT and Rewards</li>
        </ul>
      </div>
      <div className="grid grid-flow-row gap-1">
        <div className="grid grid-flow-col gap-6 justify-center items-center">
          <Image height={30} width={30} src={insta} />
          <Image height={39} width={39} src={meta} />
          <Image height={33} width={33} src={x} />
        </div>
        <form
          action=""
          className="grid grid-flow-row justify-center items-center"
        >
          <label htmlFor="" className="text-md">
            Newsletter:
          </label>
          <input
            type="email"
            placeholder="Enter Email Id..."
            className="rounded-md text-xs h-7 w-40 p-1"
          />
          <input
            type="submit"
            placeholder="Subscribe"
            className="w-20 rounded-md mt-1 h-6 text-sm place-self-end bg-[#ff8a15]"
          />
        </form>
      </div>
    </div>
  );
};

export default Footer;
