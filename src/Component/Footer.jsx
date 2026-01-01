import React from "react";

const Footer = () => {
  return (
    <div className=" flex flex-col justify-center h-20 md:h-52 items-center bg-gray-200">
      <p className="text-[22px] text-center md:text-[28px] font-bold text-cyan-900 ">
        Created by Ahmed Elsayed © 2025
      </p>
      <a
        className=" text-[20px]text-center md:text-[24px] font-bold text-cyan-900   transition hover:text-cyan-800 hover:scale-102"
        href="https://wa.me/201016223981?"
        target="_blank"
        rel="noopener noreferrer"
      >
        Phone & Whatsapp : 01016223981
      </a>
    </div>
  );
};

export default Footer;
