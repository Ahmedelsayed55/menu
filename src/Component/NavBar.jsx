import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { ImHome } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineFavoriteBorder, MdOutlineMenuBook } from "react-icons/md";
import { favorites } from "../store/Favorites";
const NavBar = () => {
  const { favoritsItem } = favorites();
  return (
    <div className="relative max-w-[1420px] mx-auto ">
      <header className="absolute top-0 z-50 w-full rounded-b-2xl flex justify-between items-center px-3 shadow filter backdrop-blur-md bg-white/1 md:px-10 py-2 md:py-5 ">
        <nav className="flex gap-5 md:gap-10">
          <div className="relative flex justify-center  items-center">
            <NavLink
              className={({ isActive }) =>
                "text-2xl md:text-4xl transition duration-300 hover:bg-white hover:text-yellow-600 rounded-2xl p-2 " +
                (isActive
                  ? "bg-white text-yellow-600"
                  : "text-white bg-yellow-600")
              }
              to="/favorites"
            >
              <MdOutlineFavoriteBorder />
              {favoritsItem.length > 0 && (
                <span className="absolute text-[15px] md:text-[20px] -top-1 -right-1 rounded-full px-1 border border-yellow-600">
                  {favoritsItem.length}
                </span>
              )}
            </NavLink>
          </div>
          <NavLink
            className={({ isActive }) =>
              "text-2xl md:text-4xl text-white transition duration-300 hover:bg-white hover:text-yellow-600 rounded-2xl p-2 " +
              (isActive ? " bg-white  text-yellow-600" : "bg-yellow-600")
            }
            to="/contact"
          >
            <FiPhoneCall />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "text-2xl md:text-4xl text-white transition duration-300 hover:bg-white hover:text-yellow-600 rounded-2xl p-2 " +
              (isActive ? " bg-white  text-yellow-600" : "bg-yellow-600")
            }
            to="/"
          >
            <ImHome />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "text-2xl md:text-4xl text-white transition duration-300 hover:bg-white hover:text-yellow-600 rounded-2xl p-2 " +
              (isActive ? " bg-white  text-yellow-600" : "bg-yellow-600")
            }
            to="/menu"
          >
            <MdOutlineMenuBook />
          </NavLink>
        </nav>

        <NavLink to={"/"}>
          <img className="w-12 h-10 md:w-19 md:h-15" src={logo} alt="Logo" />
        </NavLink>
      </header>
    </div>
  );
};

export default NavBar;
