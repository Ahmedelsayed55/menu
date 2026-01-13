import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";

const NavItem = ({
  id26,
  id20,
  id18,
  idMixed,
  idGato,
  idChocolate,
  idLayers,
  idRamadan,
  idKonafa,
  idTary,
  idBogasha,
  idZyout,
  idForam,
  idSewareh,
  idDryNuts,
  idDollMillk,
  idCoconut,
  idReadyPack,
  idHartCake,
  idNawaem,
}) => {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(idGato);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((sec) => observer.observe(sec));

    const onScroll = () => {
      if (window.scrollY === 0) {
        setActive(idGato); // ترجع لأول section لما تكون في أول الصفحة
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const sizes = [
    { id: idGato, label: "جاتوة" },
    { id: id26, label: "تورته مقاس (26)" },
    { id: id20, label: "تورته مقاس (20)" },
    { id: id18, label: "تورته مقاس (18)" },
    { id: idHartCake, label: "تورت قلب" },
    { id: idMixed, label: "تورت مقاسات متنوعة" },
    { id: idLayers, label: "تورت أدوار" },
    { id: idRamadan, label: "رمضانيات" },
    { id: idKonafa, label: "كنافات" },
    { id: idTary, label: "الطري" },
    { id: idBogasha, label: "البغاشه" },
    { id: idZyout, label: "الزيوت" },
    { id: idForam, label: "الفورم" },
    { id: idSewareh, label: "سيواريهات" },
    { id: idDryNuts, label: "نواشف ومكسرات" },
    { id: idDollMillk, label: "الملابن والجزريه" },
    { id: idCoconut, label: "جوز الهند واللديدة" },
    { id: idReadyPack, label: "العبوات الجاهزة" },
    { id: idNawaem, label: "النواعم" },
    { id: idChocolate, label: "شيكولاتة" },
  ];
  useEffect(() => {
    if (!swiperRef.current) return;

    // هات كل السلايدز
    const slides = swiperRef.current.slides;

    // دور على السلايد اللي ليه نفس الـ id
    let targetIndex = -1;
    slides.forEach((slide, i) => {
      if (slide.dataset.id === active) {
        targetIndex = i;
      }
    });

    // لو لقيناه… اسحب عليه
    if (targetIndex !== -1) {
      swiperRef.current.slideTo(targetIndex, 400);
    }
  }, [active]);
  return (
    <div className="sticky top-3 px-7  shadow bg-gray-200 rounded-b my-3 z-50">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="h-13 md:h-16"
        spaceBetween={10}
        slidesPerView="auto"
        freeMode={true}
      >
        {sizes.map((item, index) => (
          <SwiperSlide
            key={item.id}
            data-id={item.id}
            data-index={index}
            className="!w-auto flex items-stretch"
          >
            <a
              href={`#${item.id}`}
              className={`h-full flex items-center px-5 rounded-md transition whitespace-nowrap text-[12px] md:text-[14px] lg:text-[16px] ${
                active === item.id ? "bg-cyan-950 text-white" : "text-black"
              }`}
            >
              {item.label}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NavItem;
