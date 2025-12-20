import React from "react";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
const BorSaed = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col gap-5">
        <h3 className="flex text-2xl md:text-3xl font-bold gap-1 items-center">
          <FaMapMarkerAlt /> العنوان
        </h3>
        <p className="text-gray-600 text-2xl">بلطيم شارع بورسعيد </p>

        <h3 className="flex text-2xl md:text-3xl font-bold gap-1 items-center">
          <FaClock /> ساعات العمل
        </h3>
        <p className="text-gray-600 text-2xl">من 8 صباحاً حتى 11 مساءً</p>
        <h3 className="flex text-2xl md:text-3xl font-bold gap-3 items-center">
          <FaPhone /> للتواصل
        </h3>
        <p className="flex text-2xl md:text-3xl font-bold gap-3 items-center">
          <FaPhone /> 01022204917
        </p>

        <a
          className="flex text-2xl mb-3 md:mb-0 md:text-3xl font-bold gap-1 items-center transition hover:text-cyan-800 hover:scale-102"
          href="https://wa.me/201022204917?text=Hello"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> تواصل معنا عبر الواتساب
        </a>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3399.8890759655833!2d31.091679875612865!3d31.554658674198276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDMzJzE2LjgiTiAzMcKwMDUnMzkuMyJF!5e0!3m2!1sen!2seg!4v1764419819478!5m2!1sen!2seg"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default BorSaed;
