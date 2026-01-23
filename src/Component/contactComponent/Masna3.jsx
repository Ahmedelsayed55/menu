import React from "react";
import { FaWhatsapp } from "react-icons/fa";
const Masna3 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col gap-5">
        <h3 className="flex text-2xl md:text-3xl font-bold gap-1 items-center">
          📍 العنوان
        </h3>
        <p className="text-gray-600 text-2xl">بلطيم المدينه الصناعيه</p>

        <h3 className="flex text-2xl md:text-3xl font-bold gap-1 items-center">
          ⏰ ساعات العمل
        </h3>
        <p className="text-gray-600 text-2xl">من 8 صباحاً حتى 4 مساءً</p>
        <h3 className="flex text-2xl md:text-3xl font-bold gap-3 items-center">
          📞 للتواصل
        </h3>
        <p className="flex text-2xl md:text-3xl font-bold gap-3 items-center">
          01090222129
        </p>

        <a
          className="flex text-2xl mb-3 md:mb-0 md:text-3xl bg-green-300 p-3 rounded-2xl w-fit font-bold gap-1 items-center transition text-green-700 hover:text-green-800 hover:scale-105"
          href="https://wa.me/201090222129?text=Hello"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> تواصل معنا عبر الواتساب
        </a>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.0673960839493!2d31.10643017609697!3d31.543026474305837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f73c9699d0e13d%3A0x903b4db60ebccbea!2z2LTYsdmD2Kkg2LTZhdin2YQg2KfZhNiv2YTYqtin2YQg2YTZhNi12YbYp9i52KfYqiDYp9mE2LrYsNin2KbZitip2Yxb2K3ZhNmI2KfZhtuKINix2YrYqtin2KxdJUE2JTgw!5e0!3m2!1sar!2seg!4v1702472016074!5m2!1sar!2seg"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Masna3;
