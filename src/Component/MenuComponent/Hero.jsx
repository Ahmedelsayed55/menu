import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import logo from "../../assets/hero.jpg";
import "swiper/css";
const Hero = () => {
  return (
    <div className="h-[30vh] md:h-auto">
      <Swiper
        className="h-full"
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="flex justify-center h-full">
          <img className="w-full h-full object-cover" src={logo} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center h-full">
          <img className="w-full h-full object-cover" src={logo} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
