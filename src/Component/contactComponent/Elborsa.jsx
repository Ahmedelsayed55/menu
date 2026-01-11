import React from "react";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
const Elborsa = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col gap-5">
        <h3 className="flex text-2xl md:text-3xl font-bold gap-1 items-center">
          <FaMapMarkerAlt /> العنوان
        </h3>
        <p className="text-gray-600 text-2xl">البورصه طريق كفر الشيخ بلطيم</p>

        <h3 className="flex text-2xl md:text-3xl font-bold gap-1 items-center">
          <FaClock /> ساعات العمل
        </h3>
        <p className="text-gray-600 text-2xl">من 8 صباحاً حتى 11 مساءً</p>
        <h3 className="flex text-2xl md:text-3xl font-bold gap-3 items-center">
          <FaPhone /> للتواصل
        </h3>
        <p className="flex text-2xl md:text-3xl font-bold gap-3 items-center">
          <FaPhone /> 01090079977
        </p>

        <a
          className="flex text-2xl mb-3 md:mb-0 md:text-3xl font-bold gap-1 items-center transition hover:text-cyan-800 hover:scale-102"
          href="https://wa.me/201090079977?text=Hello"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> تواصل معنا عبر الواتساب
        </a>
      </div>
      <div className=" h-full w-full bg-gray-200"> </div>
    </div>
  );
};

export default Elborsa;
