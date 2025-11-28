import React from 'react'
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
       <div className="container mx-auto">
        <header className="flex justify-between items-center py-4 " >
          <img className="w-20" src={logo} alt="Logo" />
          <nav>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Home
