"use client";
import { Trailer } from "@/types/MediaModels";
import { Suspense } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoCard from "./VideoCard";

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
              <VideoCard videoKey={video.key} videoName={video.name} />
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};

export default VideosSlider;
