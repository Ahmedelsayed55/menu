import React, { useEffect, useState } from "react";
import Hero from "../Component/MenuComponent/Hero";
import Cake26 from "../Component/MenuComponent/WesternWeets/Cake26";
import Cake20 from "../Component/MenuComponent/WesternWeets/Cake20";
import NavItem from "../Component/MenuComponent/NavItem";
import { Cake18 } from "../Component/MenuComponent/WesternWeets/Cake18";
import { AssortedCakes } from "../Component/MenuComponent/WesternWeets/AssortedCakes";
import { Gato } from "../Component/MenuComponent/WesternWeets/Gato";
import { IoArrowUp } from "react-icons/io5";
import Chocolate from "../Component/MenuComponent/Chocolate/Chocolate";
import { CakeLayers } from "../Component/MenuComponent/WesternWeets/CakeLayers";
import { RamadanSweets } from "../Component/MenuComponent/EsternSweets/RamadanSweets";
import { Konafa } from "../Component/MenuComponent/EsternSweets/Konafa";
import { Tary } from "../Component/MenuComponent/EsternSweets/Tary";
import { Bogasha } from "../Component/MenuComponent/EsternSweets/Bogasha";
import { Zyout } from "../Component/MenuComponent/EsternSweets/Zyout";
import { Foram } from "../Component/MenuComponent/EsternSweets/Foram";
import { Sewareh } from "../Component/MenuComponent/EsternSweets/Sewareh";
import DryNuts from "../Component/MenuComponent/Dry&/DryNuts";
import DollMillk from "../Component/MenuComponent/Dry&/DollMillk";
import Coconut from "../Component/MenuComponent/Dry&/Coconut";
import ReadyPackages from "../Component/MenuComponent/Dry&/ReadyPackages";
import HartCake from "../Component/MenuComponent/WesternWeets/HartCake";
import { Nawaem } from "../Component/MenuComponent/Nawaem/Nawaem";
const Menu = () => {
  let idCake26 = "idCake26";
  let idCake20 = "idCake20";
  let idCake18 = "idCake18";
  let idMixed = "idMixed";
  let idGato = "idGato";
  let idChocolate = "idChocolate";
  let idLayers = "idLayers";
  let idRamadan = "idRamadan";
  let idKonafa = "idKonafa";
  let idTary = "idTary";
  let idBogasha = "idBogasha";
  let idZyout = "idZyout";
  let idForam = "idForam";
  let idٍSewareh = "idٍSewareh";
  let idٍDryNuts = "idٍDryNuts";
  let idDollMillk = "idDollMillk";
  let idCoconut = "idCoconut";
  let idReadyPack = "idReadyPack";
  let idHartCake = "idHartCake";
  let idNawaem = "idNawaem";


    const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <Hero />

      <NavItem
        id26={idCake26}
        id20={idCake20}
        id18={idCake18}
        idMixed={idMixed}
        idGato={idGato}
        idChocolate={idChocolate}
        idLayers={idLayers}
        idRamadan={idRamadan}
        idKonafa={idKonafa}
        idTary={idTary}
        idBogasha={idBogasha}
        idZyout={idZyout}
        idForam={idForam}
        idٍSewareh={idٍSewareh}
        idٍDryNuts={idٍDryNuts}
        idDollMillk={idDollMillk}
        idCoconut={idCoconut}
        idReadyPack={idReadyPack}
        idHartCake={idHartCake}
        idNawaem={idNawaem}
      />

      <section id={idCake26} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <Cake26 />
      </section>

      <section id={idCake20} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <Cake20 />
      </section>

      <section id={idCake18} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <Cake18 />
      </section>
      <section id={idHartCake} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <HartCake />
      </section>

      <section id={idMixed} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <AssortedCakes />
      </section>
      <section id={idLayers} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <CakeLayers />
      </section>
      <section id={idGato} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <Gato />
      </section>
      <section id={idRamadan} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <RamadanSweets />
      </section>
      <section id={idKonafa} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <Konafa />
      </section>
      <section id={idTary} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <Tary />
      </section>
      <section id={idBogasha} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <Bogasha />
      </section>
      <section id={idZyout} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <Zyout />
      </section>
      <section id={idForam} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <Foram />
      </section>
      <section id={idٍSewareh} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <Sewareh />
      </section>
      <section id={idٍDryNuts} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <DryNuts />
      </section>
      <section id={idDollMillk} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <DollMillk />
      </section>
      <section id={idCoconut} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <Coconut />
      </section>
      <section id={idReadyPack} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <ReadyPackages />
      </section>
      <section id={idNawaem} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <Nawaem />
      </section>
      <section id={idChocolate} className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24">
        <Chocolate />
      </section>




      {/* Button Scroll */}
      {/* Button Scroll */}
      {/* Button Scroll */}
      {/* Button Scroll */}
       {show && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 text-2xl md:text-3xl bg-cyan-600 text-white hover:bg-cyan-700 cursor-pointer p-3 rounded-full shadow-xl transition z-2"
        >
           <IoArrowUp />
        </button>
      )}
    </div>
  );
};

export default Menu;
