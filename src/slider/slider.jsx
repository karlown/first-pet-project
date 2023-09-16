import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <Swiper className='slider'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
        <SwiperSlide ><img className='slide' src="forest1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='slide' src="forest2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='slide' src="forest3.jpg" alt=""  /></SwiperSlide>
        <SwiperSlide><img className='slide' src="forest4.jpg" alt=""  /></SwiperSlide>
      </Swiper>
    )
}

export default Slider