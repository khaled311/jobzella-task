import React from "react";
import { Bell, BottomArrow, Search } from "../../assets";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between p-[26px_60px_18px_28px] shadow-[0px_4px_4px_rgba(103,103,103,0.08)] relative z-10">
      {/* Left */}
      <div className="flex gap-4">
        <div>
          <img src="/assets/F21.png" alt="" />
        </div>
        <div>
          <h2 className="font-bold text-2xl text-[#23262F]">
            Hello, Ahmed Muhammed
          </h2>
          <p className="text-[#828282] text-sm">Let’s start your tasks NOW!</p>
        </div>
      </div>
      {/* Left */}
      {/* Right */}
      <div className="flex gap-[37px] items-center">
        <Search className="cursor-pointer" />
        <Bell className="cursor-pointer" />

        {/* User */}
        <div className="flex gap-[8px] items-center cursor-pointer">
          <img src="/assets/user.png" alt="" width={48} height={48} />
          <BottomArrow />
        </div>
        {/* User */}
      </div>
      {/* Right */}
    </div>
  );
};

export default Navbar;
