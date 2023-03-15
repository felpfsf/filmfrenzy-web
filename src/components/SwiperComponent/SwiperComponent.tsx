import { Swiper, SwiperSlide } from "swiper/react";
import { CardProps } from "../../types";
import { SwiperModule } from "swiper/types";
import { MediaCard } from "../MediaCard/MediaCard";
import { SwiperButtons } from "../SwiperButtons/SwiperButtons";
import "swiper/css";
import "swiper/css/grid";

interface SwiperProps {
  items: CardProps[] | undefined;
  className: string;
  slidesPerView?: number | "auto";
  spaceBetween?: number | string;
  modules?: SwiperModule[];
  breakpoints?: Record<
    number,
    { slidesPerView: number; spaceBetween?: number }
  >;
}

export const SwiperComponent = ({
  items,
  className,
  breakpoints,
  modules,
  slidesPerView,
  spaceBetween,
}: SwiperProps) => {
  return (
    <Swiper
      className={className}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      modules={modules}
      breakpoints={breakpoints}
      // className='mt-4'
      // slidesPerView={4}
      // spaceBetween={5}
      // modules={[Grid]}
      // breakpoints={{
      //   320: {
      //     slidesPerView: 1.2,
      //     spaceBetween: 5,
      //   },
      //   768: {
      //     slidesPerView: 2.2,
      //     spaceBetween: 5,
      //   },
      //   1024: {
      //     grid: {
      //       rows: 2,
      //       fill: "row",
      //     },
      //   },
      // }}
    >
      {items &&
        items.map((item) => (
          <SwiperSlide key={item.id}>
            <MediaCard {...item} />
          </SwiperSlide>
        ))}
      <SwiperButtons />
    </Swiper>
  );
};
