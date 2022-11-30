import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSave2Fill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1240px] mx-auto flex justify-between items-center p-4">
      {/* left side  */}
      <div onClick={() => setNav(!nav)} className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30}></AiOutlineMenu>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black rounded-full text-white p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* Search input  */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-500px">
        <AiOutlineSearch size={25}></AiOutlineSearch>
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>
      {/* cart button */}
      <button className="bg-black btn text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2"></BsFillCartFill>
        Cart
      </button>
      {/* mobile menu */}
      {/* Overlay */}

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 z-10 w-[300px] h-screen bg-white duration-300"
            : "fixed top-0 left-[-100%] z-10 w-[300px] h-screen bg-white duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex cursor-pointer">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <MdFavorite size={25} className="mr-4" /> Favorite
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <BsFillSave2Fill size={25} className="mr-4" /> Best ones
            </li>
            <li className="text-xl py-4 flex cursor-pointer">
              <FaUserFriends size={25} className="mr-4" /> Invite friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
