"use client";
import { MediaDetails } from "@/types/MediaModels";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import MediaCard from "../MediaCard";

interface MediaSliderProps {
  media: MediaDetails[];
}

const MediaSlider = ({ media }: MediaSliderProps) => {
  return (
    <Swiper
      modules={[Navigation]}
      loop={false}
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 1.8,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 3.5,
          spaceBetween: 16,
        },
        960: {
          slidesPerView: 4.5,
          spaceBetween: 16,
        },
        1440: {
          slidesPerView: 6.5,
          spaceBetween: 16,
        },
      }}
      className='mediaSlider container'
    >
      <>
        {media.map((media) => (
          <SwiperSlide key={media.id}>
            <MediaCard {...media} />
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};

export default MediaSlider;
