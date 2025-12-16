import { lazy, Suspense } from "react";
import React, { useEffect, useState } from "react";
import Hero from "../Component/MenuComponent/Hero";
import NavItem from "../Component/MenuComponent/NavItem";
import { IoArrowUp } from "react-icons/io5";
import LazySection from "../Component/LazySection";

// Lazy Components
const Gato = lazy(() => import("../Component/MenuComponent/WesternWeets/Gato"));
const Cake26 = lazy(() =>
  import("../Component/MenuComponent/WesternWeets/Cake26")
);
const Cake20 = lazy(() =>
  import("../Component/MenuComponent/WesternWeets/Cake20")
);
const Cake18 = lazy(() =>
  import("../Component/MenuComponent/WesternWeets/Cake18")
);
const AssortedCakes = lazy(() =>
  import("../Component/MenuComponent/WesternWeets/AssortedCakes")
);
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
  let idSewareh = "idSewareh";
  let idDryNuts = "idDryNuts";
  let idDollMillk = "idDollMillk";
  let idCoconut = "idCoconut";
  let idReadyPack = "idReadyPack";
  let idHartCake = "idHartCake";
  let idNawaem = "idNawaem";

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
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
        idSewareh={idSewareh}
        idDryNuts={idDryNuts}
        idDollMillk={idDollMillk}
        idCoconut={idCoconut}
        idReadyPack={idReadyPack}
        idHartCake={idHartCake}
        idNawaem={idNawaem}
      />

      <LazySection id={idGato}>
        <Gato />
      </LazySection>

      <LazySection id={idCake26}>
        <Cake26 />
      </LazySection>

      <LazySection id={idCake20}>
        <Cake20 />
      </LazySection>

      <LazySection id={idCake18}>
        <Cake18 />
      </LazySection>

      <LazySection id={idHartCake}>
        <HartCake />
      </LazySection>

      <LazySection id={idMixed}>
        <AssortedCakes />
      </LazySection>

      <LazySection id={idLayers}>
        <CakeLayers />
      </LazySection>

      <LazySection id={idRamadan}>
        <RamadanSweets />
      </LazySection>

      <LazySection id={idKonafa}>
        <Konafa />
      </LazySection>

      <LazySection id={idTary}>
        <Tary />
      </LazySection>

      <LazySection id={idBogasha}>
        <Bogasha />
      </LazySection>

      <LazySection id={idZyout}>
        <Zyout />
      </LazySection>

      <LazySection id={idForam}>
        <Foram />
      </LazySection>

      <LazySection id={idSewareh}>
        <Sewareh />
      </LazySection>

      <LazySection id={idDryNuts}>
        <DryNuts />
      </LazySection>

      <LazySection id={idDollMillk}>
        <DollMillk />
      </LazySection>

      <LazySection id={idCoconut}>
        <Coconut />
      </LazySection>

      <LazySection id={idReadyPack}>
        <ReadyPackages />
      </LazySection>

      <LazySection id={idNawaem}>
        <Nawaem />
      </LazySection>

      <LazySection id={idChocolate}>
        <Chocolate />
      </LazySection>

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
