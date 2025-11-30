import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const NavItem = ({ id26, id20, id18, idMixed, idGato }) => {
  const [active, setActive] = useState(id26);

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
      { threshold: 0.3 }
    );

    sections.forEach((sec) => observer.observe(sec));

    const onScroll = () => {
      if (window.scrollY === 0) {
        setActive(id26); // ترجع لأول section لما تكون في أول الصفحة
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const sizes = [
    { id: id26, label: "تورته مقاس (26)" },
    { id: id20, label: "تورته مقاس (20)" },
    { id: id18, label: "تورته مقاس (18)" },
    { id: idMixed, label: "تورت مقاسات متنوعة" },
    { id: idGato, label: "جاتو" },
  ];

  return (
   <div className="sticky top-2 mr-5  bg-gray-200 rounded-b my-3 z-50">
  <Swiper
    className="h-13 md:h-16"   // <<< ثبّت الارتفاع هنا
    spaceBetween={10}
    slidesPerView="auto"
    freeMode={true}
  >
    {sizes.map((item) => (
      <SwiperSlide key={item.id} className="!w-auto flex items-stretch">
        <a
          href={`#${item.id}`}
          className={`h-full flex items-center px-5 rounded-b-md transition whitespace-nowrap text-[12px] md:text-[14px] lg:text-[16px] ${
            active === item.id
              ? "bg-gray-600 text-white"
              : "text-black"
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
