"use client";
import { MediaDetails } from "@/types/MediaModels";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroMediaCard from "../HeroMediaCard";
SwiperCore.use([Autoplay]);

interface HeroSliderProps {
  randomHeroMedia: MediaDetails[];
}

const Hero = ({ randomHeroMedia }: HeroSliderProps) => {
  return (
    <Swiper
      modules={[Pagination]}
      autoplay={{ delay: 6000 }}
      loop={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      className='mainSlider'
    >
      {randomHeroMedia.map((media) => (
        <SwiperSlide key={media.id}>
          <HeroMediaCard {...media} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
