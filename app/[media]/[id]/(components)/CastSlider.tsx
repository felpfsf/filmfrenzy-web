"use client";
import { Credits } from "@/types/MediaModels";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import dynamic from "next/dynamic";
const CastCard = dynamic(() => import("./CastCard"), {
  ssr: false,
  loading: () => (
    <div className='flex h-32 w-32 animate-pulse items-center justify-center self-center overflow-hidden rounded-full bg-slate-300'>
      <p className='text-sm font-semibold text-red-500'>Carregando...</p>
    </div>
  ),
});

interface CastSlideProps {
  cast: Credits[];
}
const CastSlider = ({ cast }: CastSlideProps) => {
  return (
    <Swiper
      modules={[Navigation]}
      loop={false}
      navigation={true}
      className='w-full mediaSlider'
      breakpoints={{
        320: {
          slidesPerView: 2.5,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 4.5,
          spaceBetween: 16,
        },
        960: {
          slidesPerView: 6.5,
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
