import { useEffect, useState } from "react";
import Hero from "../Component/MenuComponent/Hero";
import NavItem from "../Component/MenuComponent/NavItem";
import { IoArrowUp } from "react-icons/io5";

// components normal import
import Gato from "../Component/MenuComponent/WesternWeets/Gato";
import Cake26 from "../Component/MenuComponent/WesternWeets/Cake26";
import Cake20 from "../Component/MenuComponent/WesternWeets/Cake20";
import Cake18 from "../Component/MenuComponent/WesternWeets/Cake18";
import AssortedCakes from "../Component/MenuComponent/WesternWeets/AssortedCakes";
import Chocolate from "../Component/MenuComponent/Chocolate/Chocolate";
import CakeLayers from "../Component/MenuComponent/WesternWeets/CakeLayers";
import RamadanSweets from "../Component/MenuComponent/EsternSweets/RamadanSweets";
import Konafa from "../Component/MenuComponent/EsternSweets/Konafa";
import Tary from "../Component/MenuComponent/EsternSweets/Tary";
import Bogasha from "../Component/MenuComponent/EsternSweets/Bogasha";
import Zyout from "../Component/MenuComponent/EsternSweets/Zyout";
import Foram from "../Component/MenuComponent/EsternSweets/Foram";
import Sewareh from "../Component/MenuComponent/EsternSweets/Sewareh";
import DryNuts from "../Component/MenuComponent/Dry&/DryNuts";
import DollMillk from "../Component/MenuComponent/Dry&/DollMillk";
import Coconut from "../Component/MenuComponent/Dry&/Coconut";
import ReadyPackages from "../Component/MenuComponent/Dry&/ReadyPackages";
import HartCake from "../Component/MenuComponent/WesternWeets/HartCake";
import Nawaem from "../Component/MenuComponent/Nawaem/Nawaem";
import { NavLink } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { favorites } from "../store/Favorites";

const Menu = () => {
  const { favoritsItem } = favorites();
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
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

      <section className="max-w-[1920px] mx-auto scroll-mt-24 " id={idGato}>
        <Gato />
      </section>
      <section className="max-w-[1920px] mx-auto scroll-mt-24" id={idCake26}>
        <Cake26 />
      </section>
      <section className="max-w-[1920px] mx-auto scroll-mt-24" id={idCake20}>
        <Cake20 />
      </section>
      <section className="max-w-[1920px] mx-auto scroll-mt-24" id={idCake18}>
        <Cake18 />
      </section>
      <section className="max-w-[1920px] mx-auto scroll-mt-24" id={idHartCake}>
        <HartCake />
      </section>
      <section className="max-w-[1920px] mx-auto scroll-mt-24" id={idMixed}>
        <AssortedCakes />
      </section>
      <section className="max-w-[1920px] mx-auto scroll-mt-24" id={idLayers}>
        <CakeLayers />
      </section>
      <section className="max-w-[1920px] mx-auto scroll-mt-24" id={idRamadan}>
        <RamadanSweets />
      </section>
      <section className="max-w-[1920px] mx-auto scroll-mt-24" id={idKonafa}>
        <Konafa />
      </section>
      <section className="max-w-[1920px] mx-auto scroll-mt-24" id={idTary}>
        <Tary />
      </section>
      <section className="max-w-[1920px] mx-auto scroll-mt-24" id={idBogasha}>
        <Bogasha />
      </section>
      <section className="max-w-[1920px] mx-auto scroll-mt-24" id={idZyout}>
        <Zyout />
      </section>
      <section className="max-w-[1920px] mx-auto scroll-mt-24" id={idForam}>
        <Foram />
      </section>
      <section className="max-w-[1920px] mx-auto scroll-mt-24" id={idSewareh}>
        <Sewareh />
      </section>
      <section className="max-w-[1920px] mx-auto scroll-mt-24" id={idDryNuts}>
        <DryNuts />
      </section>
      <section className="max-w-[1920px] mx-auto scroll-mt-24" id={idDollMillk}>
        <DollMillk />
      </section>
      <section className="max-w-[1920px] mx-auto scroll-mt-24" id={idCoconut}>
        <Coconut />
      </section>
      <section className="max-w-[1920px] mx-auto scroll-mt-24" id={idReadyPack}>
        <ReadyPackages />
      </section>
      <section className="max-w-[1920px] mx-auto scroll-mt-24" id={idNawaem}>
        <Nawaem />
      </section>
      <section className="max-w-[1920px] mx-auto scroll-mt-24" id={idChocolate}>
        <Chocolate />
      </section>

      {show && (
        <div className="flex flex-col gap-7 fixed bottom-6 right-6">
          <NavLink
            className="cursor-pointer  bg-yellow-600 text-white p-3 text-3xl rounded-full"
            to="/favorites"
          >
            <MdOutlineFavoriteBorder />
            {favoritsItem.length > 0 && (
              <span className="absolute text-[15px] md:text-[20px] -top-1 -right-1 text-white rounded-full px-2 bg-yellow-800">
                {favoritsItem.length}
              </span>
            )}
          </NavLink>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer  bg-cyan-600 text-white p-5 rounded-full"
          >
            <IoArrowUp />
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
