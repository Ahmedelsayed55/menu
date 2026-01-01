import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";

import Contact from "./Page/Contact";
import Menu from "./Page/Menu";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import Favorites from "./Page/Favorites";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="bg-gray-100 text-black">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
