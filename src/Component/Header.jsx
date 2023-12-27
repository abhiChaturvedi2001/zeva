import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between bg-slate-100 items-center px-10 min-h-[10vh]">
        <div className="logo uppercase text-2xl font-bold tracking-wide">
          ABHI COmmerce
        </div>
        <div className="flex items-center space-x-5 ">
          <div>Cart items</div>
          <FaShoppingCart className="text-2xl cursor-pointer" />
          <FaRegHeart className="text-2xl cursor-pointer" />
        </div>
      </nav>
    </>
  );
};

export default Header;
