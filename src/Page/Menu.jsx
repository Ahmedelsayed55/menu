import { useEffect, useState, lazy, Suspense } from "react";
import Hero from "../Component/MenuComponent/Hero";
import NavItem from "../Component/MenuComponent/NavItem";
import { IoArrowUp } from "react-icons/io5";

import { NavLink } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { favorites } from "../store/Favorites";
import SectionLoader from "../Component/MenuComponent/LoderSec";

// 🔥 lazy imports بدل imports العادية
const Gato = lazy(() => import("../Component/MenuComponent/WesternWeets/Gato"));
const Cake26 = lazy(
  () => import("../Component/MenuComponent/WesternWeets/Cake26"),
);
const Cake20 = lazy(
  () => import("../Component/MenuComponent/WesternWeets/Cake20"),
);
const Cake18 = lazy(
  () => import("../Component/MenuComponent/WesternWeets/Cake18"),
);
const AssortedCakes = lazy(
  () => import("../Component/MenuComponent/WesternWeets/AssortedCakes"),
);
const Chocolate = lazy(
  () => import("../Component/MenuComponent/Chocolate/Chocolate"),
);
const CakeLayers = lazy(
  () => import("../Component/MenuComponent/WesternWeets/CakeLayers"),
);
const RamadanSweets = lazy(
  () => import("../Component/MenuComponent/EsternSweets/RamadanSweets"),
);
const Konafa = lazy(
  () => import("../Component/MenuComponent/EsternSweets/Konafa"),
);
const Tary = lazy(() => import("../Component/MenuComponent/EsternSweets/Tary"));
const Bogasha = lazy(
  () => import("../Component/MenuComponent/EsternSweets/Bogasha"),
);
const Zyout = lazy(
  () => import("../Component/MenuComponent/EsternSweets/Zyout"),
);
const Foram = lazy(
  () => import("../Component/MenuComponent/EsternSweets/Foram"),
);
const Sewareh = lazy(
  () => import("../Component/MenuComponent/EsternSweets/Sewareh"),
);
const DryNuts = lazy(() => import("../Component/MenuComponent/Dry&/DryNuts"));
const DollMillk = lazy(
  () => import("../Component/MenuComponent/Dry&/DollMillk"),
);
const Coconut = lazy(() => import("../Component/MenuComponent/Dry&/Coconut"));
const ReadyPackages = lazy(
  () => import("../Component/MenuComponent/Dry&/ReadyPackages"),
);
const HartCake = lazy(
  () => import("../Component/MenuComponent/WesternWeets/HartCake"),
);
const Nawaem = lazy(() => import("../Component/MenuComponent/Nawaem/Nawaem"));

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

      {/* 👇 نفس الترتيب ونفس الشكل */}
      <section className="max-w-[1920px] mx-auto" id={idGato}>
        <Suspense fallback={<SectionLoader />}>
          <Gato />
        </Suspense>
      </section>
      <section className="max-w-[1920px] mx-auto" id={idCake26}>
        <Suspense fallback={<SectionLoader />}>
          <Cake26 />
        </Suspense>
      </section>
      <section className="max-w-[1920px] mx-auto" id={idCake20}>
        <Suspense fallback={<SectionLoader />}>
          <Cake20 />
        </Suspense>
      </section>
      <section className="max-w-[1920px] mx-auto" id={idCake18}>
        <Suspense fallback={<SectionLoader />}>
          <Cake18 />
        </Suspense>
      </section>
      <section className="max-w-[1920px] mx-auto" id={idHartCake}>
        <Suspense fallback={<SectionLoader />}>
          <HartCake />
        </Suspense>
      </section>
      <section className="max-w-[1920px] mx-auto" id={idMixed}>
        <Suspense fallback={<SectionLoader />}>
          <AssortedCakes />
        </Suspense>
      </section>
      <section className="max-w-[1920px] mx-auto" id={idLayers}>
        <Suspense fallback={<SectionLoader />}>
          <CakeLayers />
        </Suspense>
      </section>

      <section className="max-w-[1920px] mx-auto" id={idRamadan}>
        <Suspense fallback={<SectionLoader />}>
          <RamadanSweets />
        </Suspense>
      </section>
      <section className="max-w-[1920px] mx-auto" id={idKonafa}>
        <Suspense fallback={<SectionLoader />}>
          <Konafa />
        </Suspense>
      </section>
      <section className="max-w-[1920px] mx-auto" id={idTary}>
        <Suspense fallback={<SectionLoader />}>
          <Tary />
        </Suspense>
      </section>
      <section className="max-w-[1920px] mx-auto" id={idBogasha}>
        <Suspense fallback={<SectionLoader />}>
          <Bogasha />
        </Suspense>
      </section>
      <section className="max-w-[1920px] mx-auto" id={idZyout}>
        <Suspense fallback={<SectionLoader />}>
          <Zyout />
        </Suspense>
      </section>
      <section className="max-w-[1920px] mx-auto" id={idForam}>
        <Suspense fallback={<SectionLoader />}>
          <Foram />
        </Suspense>
      </section>
      <section className="max-w-[1920px] mx-auto" id={idSewareh}>
        <Suspense fallback={<SectionLoader />}>
          <Sewareh />
        </Suspense>
      </section>

      <section className="max-w-[1920px] mx-auto" id={idDryNuts}>
        <Suspense fallback={<SectionLoader />}>
          <DryNuts />
        </Suspense>
      </section>
      <section className="max-w-[1920px] mx-auto" id={idDollMillk}>
        <Suspense fallback={<SectionLoader />}>
          <DollMillk />
        </Suspense>
      </section>
      <section className="max-w-[1920px] mx-auto" id={idCoconut}>
        <Suspense fallback={<SectionLoader />}>
          <Coconut />
        </Suspense>
      </section>
      <section className="max-w-[1920px] mx-auto" id={idReadyPack}>
        <Suspense fallback={<SectionLoader />}>
          <ReadyPackages />
        </Suspense>
      </section>

      <section className="max-w-[1920px] mx-auto" id={idNawaem}>
        <Suspense fallback={<SectionLoader />}>
          <Nawaem />
        </Suspense>
      </section>
      <section className="max-w-[1920px] mx-auto" id={idChocolate}>
        <Suspense fallback={<SectionLoader />}>
          <Chocolate />
        </Suspense>
      </section>

      {show && (
        <div className="fixed bottom-6 right-6 flex flex-col gap-7">
          <NavLink
            to="/favorites"
            className="relative bg-yellow-600 p-3 text-3xl text-white rounded-full"
          >
            <MdOutlineFavoriteBorder />
            {favoritsItem.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-800 text-white px-2 rounded-full text-sm">
                {favoritsItem.length}
              </span>
            )}
          </NavLink>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-cyan-600 text-white p-5 rounded-full"
          >
            <IoArrowUp />
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
