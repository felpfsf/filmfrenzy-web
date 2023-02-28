import { useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchSearch } from "../data/queries";
import { motion } from "framer-motion";
import {
  MOTION_OPACITY_ANIMATE,
  MOTION_OPACITY_INITIAL,
  MOTION_TRANSITION_DURATION,
} from "../utils/motionProps";
import { MovieCard } from "../components/MovieCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper";
import "swiper/css";
import "swiper/css/grid";

interface SearchResult {
  id: number;
  media_type: "movie" | "tv";
  title?: string;
  name?: string;
}

interface SearchResults {
  movies: SearchResult[];
  tvShows: SearchResult[];
}

const fetchSearchResults = async (query: string) => {
  const searchResult = await fetchSearch(query);
  const movies = searchResult?.filter(
    (result: SearchResult) => result.media_type === "movie"
  );
  const tvShows = searchResult?.filter(
    (result: SearchResult) => result.media_type === "tv"
  );

  return { movies, tvShows };
};

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
        <p>Loading...</p>
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

  const { movies, tvShows } = (searchResult || {}) as SearchResults;

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
            <Swiper
              slidesPerView={4}
              spaceBetween={5}
              modules={[Grid]}
              className='mt-4'
              breakpoints={{
                1024: {
                  grid: {
                    rows: 2,
                    fill: "row",
                  },
                },
              }}
            >
              {movies &&
                movies.map((movie: any) => (
                  <SwiperSlide key={movie.id}>
                    <MovieCard {...movie} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        )}

        {tvShows.length > 0 && (
          <div className=''>
            <h1 className='text-2xl font-semibold'>TV Shows</h1>
            <Swiper
              slidesPerView={4}
              spaceBetween={5}
              modules={[Grid]}
              className='mt-4'
              breakpoints={{
                1024: {
                  grid: {
                    rows: 2,
                    fill: "row",
                  },
                },
              }}
            >
              {tvShows &&
                tvShows.map((tvshow: any) => (
                  <SwiperSlide key={tvshow.id}>
                    <MovieCard {...tvshow} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        )}
      </div>
    </motion.div>
  );
};
