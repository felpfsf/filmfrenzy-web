import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { fetchSearchResults } from "./fetchSearchResults";
import { motion } from "framer-motion";
import {
  MOTION_OPACITY_ANIMATE,
  MOTION_OPACITY_INITIAL,
  MOTION_TRANSITION_DURATION,
} from "../../utils/";
import { SwiperComponent } from "../../components/SwiperComponent/SwiperComponent";
import { Grid } from "swiper";
import { MediaCard } from "../../components/MediaCard/MediaCard";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const {
    data: searchResult,
    isLoading,
    isError,
  } = useQuery(["search", query], () => fetchSearchResults(query || ""), {
    enabled: !!query,
  });

  if (isLoading) {
    return (
      <div className='mx-auto h-full w-full max-w-screen-2xl pt-32'>
        <p>Carregando...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='mx-auto h-full w-full max-w-screen-2xl pt-32'>
        <p>Error loading search results</p>
      </div>
    );
  }

  if (searchResult?.movies.length === 0 && searchResult?.tvShows.length === 0) {
    return (
      <div className='mx-auto h-full w-full max-w-screen-2xl pt-32'>
        <p>
          No results were found for{" "}
          <em className='underline underline-offset-2'>{query}</em>.
        </p>
      </div>
    );
  }

  // Se o resultado vier undefined exibe essa mensagem
  if (!searchResult) {
    return (
      <div className='mx-auto h-full w-full max-w-screen-2xl pt-32'>
        <p>No results were found.</p>
      </div>
    );
  }

  const { movies = [], tvShows = [] } = searchResult ?? {};

  return (
    <motion.div
      className='mx-auto h-full w-full max-w-screen-2xl px-4 pt-32 md:px-8'
      initial={{ opacity: MOTION_OPACITY_INITIAL }}
      animate={{ opacity: MOTION_OPACITY_ANIMATE }}
      exit={{
        opacity: MOTION_OPACITY_ANIMATE,
        transition: { duration: MOTION_TRANSITION_DURATION },
      }}
    >
      <strong>
        Results for <em className='underline underline-offset-2'>{query}</em>
      </strong>
      <div
        className={`mt-4 flex flex-col gap-10 opacity-0 transition-opacity duration-300 ease-in-out ${
          movies.length || tvShows.length ? "opacity-100" : ""
        }`}
      >
        {movies.length > 0 && (
          <div className=''>
            <h1 className='text-2xl font-semibold'>Movies</h1>
            <SwiperComponent
              cardComponent={MediaCard}
              className='group relative mt-4'
              slidesPerView={4}
              spaceBetween={5}
              modules={[Grid]}
              breakpoints={{
                320: {
                  slidesPerView: 1.2,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 4.5,
                  spaceBetween: 5,
                },
                1024: {
                  slidesPerView: 4.5,
                  spaceBetween: 5,
                  grid: {
                    rows: 2,
                    fill: "row",
                  },
                },
              }}
              items={movies}
            />
          </div>
        )}

        {tvShows.length > 0 && (
          <div className=''>
            <h1 className='text-2xl font-semibold'>TV Shows</h1>
            <SwiperComponent
              cardComponent={MediaCard}
              className='group relative mt-4'
              slidesPerView={4}
              spaceBetween={5}
              modules={[Grid]}
              breakpoints={{
                320: {
                  slidesPerView: 1.2,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 4.5,
                  spaceBetween: 5,
                },
                1024: {
                  slidesPerView: 4.5,
                  spaceBetween: 5,
                  grid: {
                    rows: 2,
                    fill: "row",
                  },
                },
              }}
              items={tvShows}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};
