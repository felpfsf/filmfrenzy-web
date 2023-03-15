import { useQuery } from "react-query";
import { fetchMoviesPopular } from "../../data/queries";
import { CardProps } from "../../types";
import { SwiperComponent } from "../SwiperComponent/SwiperComponent";

export const MediaRow = ({ title }: { title: string }) => {
  const { data: movies } = useQuery<CardProps[]>(
    "getPop",
    () => fetchMoviesPopular(),
    { staleTime: 0, cacheTime: 0 }
  );
  // console.log(movies);

  return (
    <section className='w-full px-4 pb-4 lg:px-8'>
      <h2 className='my-4 text-2xl font-bold'>{title}</h2>
      <SwiperComponent
        spaceBetween={6}
        slidesPerView={1.2}
        breakpoints={{
          768: {
            slidesPerView: 2.2,
            spaceBetween: 5,
          },
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
        className='group relative'
        items={movies}
      />
    </section>
  );
};
