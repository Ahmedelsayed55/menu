import { lazy, Suspense } from "react";

import React, { useEffect, useState } from "react";
import Hero from "../Component/MenuComponent/Hero";
const Cake26 = lazy(() =>
  import("../Component/MenuComponent/WesternWeets/Cake26")
);
const Cake20 = lazy(() =>
  import("../Component/MenuComponent/WesternWeets/Cake20")
);
import NavItem from "../Component/MenuComponent/NavItem";
const Cake18 = lazy(() =>
  import("../Component/MenuComponent/WesternWeets/Cake18")
);

const AssortedCakes = lazy(() =>
  import("../Component/MenuComponent/WesternWeets/AssortedCakes")
);
const Gato = lazy(() => import("../Component/MenuComponent/WesternWeets/Gato"));
const Chocolate = lazy(() =>
  import("../Component/MenuComponent/Chocolate/Chocolate")
);
const CakeLayers = lazy(() =>
  import("../Component/MenuComponent/WesternWeets/CakeLayers")
);
const RamadanSweets = lazy(() =>
  import("../Component/MenuComponent/EsternSweets/RamadanSweets")
);
const Konafa = lazy(() =>
  import("../Component/MenuComponent/EsternSweets/Konafa")
);
const Tary = lazy(() => import("../Component/MenuComponent/EsternSweets/Tary"));
const Bogasha = lazy(() =>
  import("../Component/MenuComponent/EsternSweets/Bogasha")
);
const Zyout = lazy(() =>
  import("../Component/MenuComponent/EsternSweets/Zyout")
);
const Foram = lazy(() =>
  import("../Component/MenuComponent/EsternSweets/Foram")
);
const Sewareh = lazy(() =>
  import("../Component/MenuComponent/EsternSweets/Sewareh")
);
const DryNuts = lazy(() => import("../Component/MenuComponent/Dry&/DryNuts"));
const DollMillk = lazy(() =>
  import("../Component/MenuComponent/Dry&/DollMillk")
);
const Coconut = lazy(() => import("../Component/MenuComponent/Dry&/Coconut"));
const ReadyPackages = lazy(() =>
  import("../Component/MenuComponent/Dry&/ReadyPackages")
);
const HartCake = lazy(() =>
  import("../Component/MenuComponent/WesternWeets/HartCake")
);
const Nawaem = lazy(() => import("../Component/MenuComponent/Nawaem/Nawaem"));

// react icon
import { IoArrowUp } from "react-icons/io5";
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
      <section
        id={idGato}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
        <Gato />
      </section>

      <section
        id={idCake26}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
        <Cake26 />
      </section>

      <section
        id={idCake20}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
        <Cake20 />
      </section>

      <section
        id={idCake18}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
        <Cake18 />
      </section>
      <section
        id={idHartCake}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
        <HartCake />
      </section>

      <section
        id={idMixed}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
        <AssortedCakes />
      </section>
      <section
        id={idLayers}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
        <CakeLayers />
      </section>
      <section
        id={idRamadan}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
        <RamadanSweets />
      </section>
      <section
        id={idKonafa}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
        <Konafa />
      </section>
      <section
        id={idTary}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
        <Tary />
      </section>
      <section
        id={idBogasha}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
        <Bogasha />
      </section>
      <section
        id={idZyout}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
        <Zyout />
      </section>
      <section
        id={idForam}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
        <Foram />
      </section>
      <section
        id={idٍSewareh}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
        <Sewareh />
      </section>
      <section
        id={idٍDryNuts}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
        <DryNuts />
      </section>
      <section
        id={idDollMillk}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
        <DollMillk />
      </section>
      <section
        id={idCoconut}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
        <Coconut />
      </section>
      <section
        id={idReadyPack}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
        <ReadyPackages />
      </section>
      <section
        id={idNawaem}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
        <Nawaem />
      </section>
      <section
        id={idChocolate}
        className=" max-w-[1920px] mx-auto px-1 py-12 md:px-5 md:py-12 scroll-mt-24"
      >
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
