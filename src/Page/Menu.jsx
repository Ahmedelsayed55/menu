import React from "react";
import Hero from "../Component/MenuComponent/Hero";
import Cake26 from "../Component/MenuComponent/Cake26";
import Cake20 from "../Component/MenuComponent/Cake20";
import NavItem from "../Component/MenuComponent/NavItem";
import { Cake18 } from "../Component/MenuComponent/Cake18";
import { AssortedCakes } from "../Component/MenuComponent/AssortedCakes";

const Menu = () => {
  let idCake26 = "idCake26";
  let idCake20 = "idCake20";
  let idCake18 = "idCake18";
  let idMixed = "idMixed";

  return (
    <div>
      <Hero />

      <NavItem
        id26={idCake26}
        id20={idCake20}
        id18={idCake18}
        idMixed={idMixed}
      />

      <section id={idCake26} className="container mx-auto py-12 scroll-mt-24">
        <Cake26 />
      </section>

      <section id={idCake20} className="container mx-auto py-12 scroll-mt-24">
        <Cake20 />
      </section>

      <section id={idCake18} className="container mx-auto py-12 scroll-mt-24">
        <Cake18 />
      </section>

      <section id={idMixed} className="container mx-auto py-12 scroll-mt-24">
        <AssortedCakes />
      </section>
    </div>
  );
};

export default Menu;
