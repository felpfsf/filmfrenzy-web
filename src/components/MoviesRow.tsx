import { useQuery } from "react-query";
import { fetchMoviesPopular } from "../data/queries";
import { Card } from "./Card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CardProps } from "../types";

export const MoviesRow = ({ title }: { title: string }) => {
  const { data: movies } = useQuery<CardProps[]>(
    "getPop",
    () => fetchMoviesPopular(),
    { staleTime: 0, cacheTime: 0 }
  );
  // console.log(movies);
  return (
    <section className='w-full px-4 pb-4 lg:px-8'>
      <h2 className='my-4 text-2xl font-bold'>{title}</h2>
      <Swiper
        spaceBetween={6}
        slidesPerView={2.2}
        breakpoints={{
          1024: {
            // screen min-width 1024px ...
            slidesPerView: 4,
            spaceBetween: 4,
          },
          1440: {
            slidesPerView: 5.6,
            spaceBetween: 1,
          },
          2560: {
            slidesPerView: 7.5,
            spaceBetween: 0,
          },
          3180: {
            slidesPerView: 9.3,
            spaceBetween: 0,
          },
        }}
      >
        {/* map */}
        {movies &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Card {...movie} />
            </SwiperSlide>
          ))}
        {/* map */}
      </Swiper>
    </section>
  );
};
