import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";

import Contact from "./Page/Contact";
import Menu from "./Page/Menu";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";


const App = () => {
  return (
    <div className="bg-gray-200 text-black">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
