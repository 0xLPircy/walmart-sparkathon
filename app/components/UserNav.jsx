import Image from "next/image";
import React from "react";
import logo from "@/assets/userNavLogo.png";

const UserNav = ({ select }) => {
  return (
    <div>
      <div>
        <Image height={180} width={240} src={logo} />
      </div>
      <div className={select}>
        <ul className="-mt-9 grid grid-flow-row items-start gap-3 text-[#b8b8b8] px-3 font-[300]">
          <li className="">Home</li>
          <li>Explore Trips</li>
          <li>DashBoard</li>
          <li>Past Trips</li>
          <li>My Rewards</li>
          <li className="bg-[#b0b0b0] border-[#b0b0b0] border my-3"></li>
          <li>Settings</li>
          <li>Help & FAQ</li>
        </ul>
      </div>
    </div>
  );
};

export default UserNav;
