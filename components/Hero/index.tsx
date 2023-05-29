"use client";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroMediaCard from "../HeroMediaCard";
SwiperCore.use([Autoplay]);

const Hero = ({ randomHeroMedia }: any) => {
  return (
    <Swiper
      modules={[Pagination]}
      autoplay={{ delay: 6000 }}
      loop={true}
      pagination={{ clickable: true, dynamicBullets: true }}
    >
      {randomHeroMedia.map((media: any) => (
        <SwiperSlide key={media.id}>
          <HeroMediaCard {...media} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
