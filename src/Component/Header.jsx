import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const wishListData = useSelector((store) => store.app.wishListData); // in the this wish list data are store
  const cartData = useSelector((store) => store.app.cartData); // it gives cart data
  let totalWishListItems = wishListData.length; // it give how many items are in the wish List we are not using routing yet
  return (
    <>
      <nav className="flex justify-between bg-slate-100 items-center px-10 min-h-[10vh]">
        <div className="logo uppercase text-2xl font-bold tracking-wide">
          ABHI COmmerce
        </div>
        <div className="flex items-center space-x-5 ">
          <div>items ({cartData.length})</div>
          <FaShoppingCart className="text-2xl cursor-pointer" />
          <div className="relative">
            <p className="absolute -top-4 right-2">{totalWishListItems}</p>
            <FaRegHeart className="text-2xl cursor-pointer" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
