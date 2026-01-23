import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" flex flex-col justify-center h-20 md:h-52 items-center bg-gray-200">
      <p className="text-[22px] text-center md:text-[28px] font-bold text-cyan-900 ">
        Created by Ahmed Elsayed © 2025
      </p>
      <a
        className="flex text-2xl mb-3 md:mb-0 md:text-3xl  p-5 rounded-2xl w-fit font-bold gap-1 transition text-green-700 hover:text-green-800 hover:scale-105"
        href="https://wa.me/201003204998?text=Hello"
        target="_blank"
        rel="noopener noreferrer"
      >
        01016223981 :<FaWhatsapp />
      </a>
    </div>
  );
};

export default Footer;
