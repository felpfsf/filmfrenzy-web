import { Swiper, SwiperSlide } from "swiper/react";
import { GridOptions, SwiperModule } from "swiper/types";
import { SwiperButtons } from "../SwiperButtons/SwiperButtons";
import "swiper/css";
import "swiper/css/grid";
import React from "react";

interface SwiperProps<T extends { id: string | number }> {
  items: T[] | undefined;
  cardComponent: React.FC<T & { trailer_key: string }>;
  className: string;
  slidesPerView?: number | "auto";
  spaceBetween?: number | string;
  modules?: SwiperModule[];
  breakpoints?: Record<
    number,
    { slidesPerView: number; spaceBetween?: number; grid?: GridOptions }
  >;
}

export const SwiperComponent = <
  T extends {
    key?: string;
    id: string | number;
  }
>({
  items,
  className,
  breakpoints,
  modules,
  slidesPerView,
  spaceBetween,
  cardComponent: CardComponent,
}: SwiperProps<T>) => {
  return (
    <Swiper
      className={className}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      modules={modules}
      breakpoints={breakpoints}
    >
      {items &&
        items.map((item) => (
          <SwiperSlide key={item.id}>
            <CardComponent {...item} trailer_key={item.key || ""} />
          </SwiperSlide>
        ))}
      <SwiperButtons />
    </Swiper>
  );
};