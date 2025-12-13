import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ImHome } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";
const NavBar = () => {
  return (
    <div className="container mx-auto ">
      <header className="flex justify-between items-center px-3  md:px-7 py-2 md:py-5 ">
        <nav className="flex gap-10 md:gap-20">
          <Link
            className="text-2xl md:text-4xl text-yellow-600 transition-all hover:text-white"
            to="/"
          >
            <ImHome />
          </Link>
          <Link
            className="text-2xl md:text-4xl text-yellow-600 transition-all hover:text-white"
            to="/contact"
          >
            <FiPhoneCall />
          </Link>
        </nav>
        <img className="w-12 h-10 md:w-19 md:h-15" src={logo} alt="Logo" />

        {/* <Link to={"/menu"} className="-mt-4  text-3xl md:text-4xl text-yellow-700 md:px-10 cursor-pointer">ريتاج</Link> */}
      </header>
    </div>
  );
};

export default NavBar;
