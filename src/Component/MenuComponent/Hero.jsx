import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import logo from '../../assets/hero.jpg'
import 'swiper/css';
const Hero = () => {
  return (
<div className="container mx-auto mt-2 md:mt-10">
  <Swiper
    modules={[ Pagination, Scrollbar, A11y, Autoplay]}
    slidesPerView={1}
   
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    autoplay={{
      delay: 3000, 
      disableOnInteraction: false,
    }}
    
  >
    <SwiperSlide className='flex justify-center'><img className='w-full object-cover' src={logo} alt="" /></SwiperSlide>
    <SwiperSlide className='flex justify-center'><img className='w-full object-cover' src={logo} alt="" /></SwiperSlide>
  </Swiper>
</div>
  )
}

export default Hero
