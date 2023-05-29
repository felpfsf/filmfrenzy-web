"use client";
import { Trailer } from "@/types/MediaModels";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

interface VideoSliderProps {
  videos: Trailer[];
}

const VideosSlider = ({ videos }: VideoSliderProps) => {
  return (
    <Swiper
      modules={[Navigation]}
      loop={false}
      navigation={true}
      className='w-full'
      breakpoints={{
        320: {
          slidesPerView: 1.5,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 2.5,
          spaceBetween: 16,
        },
        1440: {
          slidesPerView: 4.5,
          spaceBetween: 16,
        },
      }}
    >
      <>
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className='flex max-w-xs overflow-hidden rounded-lg'>
              <iframe
                width='100%'
                height='100%'
                src={`https://www.youtube.com/embed/${video.key}`}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};

export default VideosSlider;
