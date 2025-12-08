import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const NavBar = () => {
  return (
    <div className="container px-2  absolute top-0 left-1/2 -translate-x-1/2 z-50 ">
      <header className="flex justify-between items-center px-1.5  md:px-5 py-2 md:py-5 backdrop-blur-2xl bg-gray-400/10 rounded-b-2xl">
        <nav className="flex gap-1 md:gap-3">
          <Link
            className="text-[14px] text-yellow-600 md:text-[20px] p-3 border-b-2 border-yellow-900/0 hover:border-b-2 hover:border-b-yellow-600"
            to="/"
          >
            الرئيسية
          </Link>
          <Link
            className="text-[14px] text-yellow-600 md:text-[20px] p-3 border-b-2 border-yellow-900/0 hover:border-b-2 hover:border-b-yellow-600"
            to="/contact"
          >
            تواصل معنا
          </Link>
        </nav>
         <img className="w-12 h-10 md:w-19 md:h-15" src={logo} alt="Logo" />
         
         {/* <Link to={"/menu"} className="-mt-4  text-3xl md:text-4xl text-yellow-700 md:px-10 cursor-pointer">ريتاج</Link> */}
      </header>
    </div>
  );
};

export default NavBar;
