"use client";
import { Credits } from "@/types/MediaModels";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import CastCard from "./CastCard";

interface CastSlideProps {
  cast: Credits[];
}
const CastSlider = ({ cast }: CastSlideProps) => {
  return (
    <Swiper
      modules={[Navigation]}
      loop={false}
      // navigation={true}
      className='w-full'
      breakpoints={{
        320: {
          slidesPerView: 2.5,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 4.5,
          spaceBetween: 16,
        },
        1440: {
          slidesPerView: 9.5,
          spaceBetween: 16,
        },
      }}
    >
      <>
        {cast.map((cast) => (
          <SwiperSlide key={cast.id}>
            
            <CastCard {...cast} />
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};

export default CastSlider;
