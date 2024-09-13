import React from "react";
import BasketIcon from "@/icons/BasketIcon";
import MenuIcon from "@/icons/MenuIcon";
import SearchIcon from "@/icons/SearchIcon";

export default function Navbar() {
  return (
    <div className="w-full h-screen">
      <div className="flex justify-between items-center border-b-[1px] border-[#D1D1D8] w-full h-20 pl-10">
        <div className="text-2xl font-semibold text-[#17183B]">
          <h1>Cozy®</h1>
        </div>
        <li className="flex justify-center gap-x-10 text-[#17183B] font-bold text-sm max-lg:hidden">
          <a href="#" className="hover:underline">
            SHOP
          </a>
          <a href="#" className="hover:underline">
            COLLECTIVE
          </a>
          <a href="#" className="hover:underline">
            DESIGNERS
          </a>
          <a href="#" className="hover:underline">
            ABOUT US
          </a>
          <a href="#" className="hover:underline">
            CONTACT
          </a>
        </li>
        <div className="flex justify-center items-center">
          <button className="mr-10">
            <MenuIcon />
          </button>
          <button className="mr-10">
            <SearchIcon />
          </button>
          <div className="border-l-[1px] border-[#D1D1D8] h-20 w-[90px] flex justify-center items-center">
            <button>
              <BasketIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
