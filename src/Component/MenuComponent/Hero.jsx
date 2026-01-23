import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import logo from "../../assets/hero11.jpg";
import hero from "../../assets/hero22.jpg";
import "swiper/css";
const Hero = () => {
  return (
    <div className="pt-10 w-full h-fit md:h-fit overflow-hidden bg-gray-100">
      <Swiper
        className="h-full"
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="flex justify-center h-fit">
          <img className="w-full h-full object-contain" src={logo} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center h-fit">
          <img className="w-full h-full object-contain" src={hero} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
