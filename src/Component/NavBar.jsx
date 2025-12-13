import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ImHome } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";
const NavBar = () => {
  return (
    <div className="  ">
      <header className="flex justify-between items-center px-3  md:px-10 py-2 md:py-5 ">
        <nav className="flex gap-10 md:gap-20">
          <Link
            className="text-2xl md:text-4xl text-white transition duration-500 hover:bg-white hover:text-yellow-600 rounded-2xl p-3 bg-yellow-600"
            to="/"
          >
            <ImHome />
          </Link>
          <Link
            className="text-2xl md:text-4xl text-white transition duration-500 hover:bg-white hover:text-yellow-600 rounded-2xl p-3 bg-yellow-600"
            to="/contact"
          >
            <FiPhoneCall />
          </Link>
        </nav>

        <Link to={"/menu"}>
          <img className="w-12 h-10 md:w-19 md:h-15" src={logo} alt="Logo" />
        </Link>
      </header>
    </div>
  );
};

export default NavBar;
