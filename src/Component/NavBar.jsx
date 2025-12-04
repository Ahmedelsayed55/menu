import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
const NavBar = () => {
  return (
    <div className="container px-2  fixed top-3 left-1/2 -translate-x-1/2 z-50 ">
      <header className="flex justify-between items-center  md:px-5">
        <nav className="flex gap-1 md:gap-3">
          <Link
            className="text-[14px] text-cyan-500 md:text-[20px] p-3 border-b-2 border-yellow-900/0 hover:border-b-2 hover:border-b-cyan-700"
            to="/"
          >
            الرئيسية
          </Link>
          <Link
            className="text-[14px] text-cyan-500 md:text-[20px] p-3 border-b-2 border-yellow-900/0 hover:border-b-2 hover:border-b-cyan-700"
            to="/contact"
          >
            تواصل معنا
          </Link>
        </nav>
        {/* <img className="w-12 h-10 md:w-19 md:h-12" src={logo} alt="Logo" />
         */}
         <h1 className="-mt-4  text-3xl md:text-4xl text-yellow-700 md:px-10">ريتاج</h1>
      </header>
    </div>
  );
};

export default NavBar;
