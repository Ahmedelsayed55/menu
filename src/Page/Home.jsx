import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
const Home = () => {
  return (
    <div className="bg-gray-200 pt-10 pb-10 md:py-15 lg:py-20 text-white flex items-center justify-center ">
      <div className="container mx-auto ">
        <div className=" flex items-center justify-center rounded-2xl">
          <div className="flex flex-col items-center  gap-10">
            <img className="w-30 md:w-40 lg:w-60" src={logo} alt="Logo" />
            <h1 className="text-2xl md:text-3xl font-bold text-center my-3 text-cyan-800">
              حلواني ريتاج-Retaj pastry
            </h1>
            <div className="flex flex-col gap-5">
              <Link
                className="btn text-white bg-cyan-800 px-20 md:px-40  py-6 rounded-3xl text-2xl hover:bg-transparent hover:text-black"
                to="/menu"
              >
                قائمة الاسعار
              </Link>
              <Link
                className="btn hover:text-white px-20 md:px-40 border  py-6 rounded-3xl text-2xl bg-transparent hover:bg-cyan-800 text-black "
                to="/contact"
              >
                للتواصل معنا
              </Link>
            </div>
            <div className="flex gap-5 ">
              <a
                href="https://www.facebook.com/retajpastry"
                target="_blank"
                className=" hover:scale-125 transition-transform duration-300"
              >
                <FaFacebook className="text-4xl text-cyan-800 hover:text-cyan-600" />
              </a>
              <a
                href="https://www.instagram.com/retajpastry"
                target="_blank"
                className=" hover:scale-125 transition-transform duration-300"
              >
                <FaInstagram className="text-4xl text-cyan-800 hover:text-red-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
