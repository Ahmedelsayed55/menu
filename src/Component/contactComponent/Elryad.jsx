import React from "react";
import { FaWhatsapp } from "react-icons/fa";
const Elryad = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col gap-5">
        <h3 className="flex text-2xl md:text-3xl font-bold gap-1 items-center">
          📍 العنوان
        </h3>
        <p className="text-gray-600 text-2xl">الرياض بجوار مركز الشرطة </p>

        <h3 className="flex text-2xl md:text-3xl font-bold gap-1 items-center">
          ⏰ ساعات العمل
        </h3>
        <p className="text-gray-600 text-2xl">من 8 صباحاً حتى 11 مساءً</p>
        <h3 className="flex text-2xl md:text-3xl font-bold gap-3 items-center">
          📞 للتواصل
        </h3>
        <p className="flex text-2xl md:text-3xl font-bold gap-3 items-center">
          01022204910
        </p>

        <a
          className="flex text-2xl mb-3 md:mb-0 md:text-3xl bg-green-300 p-3 rounded-2xl w-fit font-bold gap-1 items-center transition text-green-700 hover:text-green-800 hover:scale-105"
          href="https://wa.me/201022204910?text=Hello"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> تواصل معنا عبر الواتساب
        </a>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d852.8149524338671!2d30.944058213657105!3d31.241230293522598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f701a13339cb07%3A0x2e3ea2ac35739810!2z2K3ZhNmI2KfZhtmKINix2YrYqtin2Kw!5e0!3m2!1sen!2seg!4v1764424835528!5m2!1sen!2seg"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Elryad;
