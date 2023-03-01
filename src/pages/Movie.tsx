import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCast, fetchDetails, fetchVideo } from "../data/queries";
import { motion } from "framer-motion";
import {
  MOTION_OPACITY_ANIMATE,
  MOTION_OPACITY_INITIAL,
  MOTION_TRANSITION_DURATION,
} from "../utils/motionProps";
import { TMDB_BACKDROP_POSTER } from "../utils/env";
import { Cast, MovieDetails, Trailer } from "../types";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CastCard } from "../components/CastCard";

import { TrailerCard } from "../components/TrailerCard";

import { DefaultUi, Player, Youtube } from "@vime/react";
import "@vime/core/themes/default.css";

export const Movie = () => {
  /**
   * TODO - MOVIE DETAILS PAGE
   * This page will display the selected movie details like:
   * Trailers
   * Poster, Title, Year, Genre, Director, Actors, Overview, Ratings
   * Latest reviews
   */

  // `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`

  // https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=pt-BR

  // https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=${TMDB_API_KEY}&language=pt-BR

  const { movie_id } = useParams();

  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery<MovieDetails>(
    ["movie_details", movie_id],
    () => fetchDetails(movie_id || "", "movie"),
    { staleTime: 0 }
  );

  const { data: cast_data } = useQuery<Cast[]>(["cast", movie_id], () =>
    fetchCast(movie_id || "", "movie")
  );

  const { data: video_data } = useQuery<Trailer[]>(["video", movie_id], () =>
    fetchVideo(movie_id || "", "movie")
  );

  console.log(video_data);

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
        <p>Error loading movie details</p>
      </div>
    );
  }

  return (
    <motion.div
      className='mx-auto h-full w-full max-w-screen-2xl px-4 pt-32'
      initial={{ opacity: MOTION_OPACITY_INITIAL }}
      animate={{ opacity: MOTION_OPACITY_ANIMATE }}
      exit={{
        opacity: MOTION_OPACITY_ANIMATE,
        transition: { duration: MOTION_TRANSITION_DURATION },
      }}
    >
      <img
        src={
          movie?.backdrop_path
            ? `${TMDB_BACKDROP_POSTER}${movie?.backdrop_path}`
            : `https://dummyimage.com/2000x3000/000/fff.png&text=Image+Placeholder+of+${movie?.title}`
        }
        alt=''
        className='absolute inset-0 -z-10 h-1/2 w-full object-cover object-center'
      />
      <div className='absolute inset-0 -z-10 h-1/2 w-full bg-posterGradient' />
      <div className='flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-24'>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt={`Poster of ${movie?.title}`}
          className='w-full min-w-[10rem] max-w-xs rounded-xl border-l-2 border-b-2 drop-shadow-sm'
        />
        <div className='flex max-w-3xl flex-col gap-4 px-2 lg:mt-0'>
          <h1 className='text-2xl font-semibold md:text-3xl'>{movie?.title}</h1>
          <p className='text-justify md:text-lg'>{movie?.overview}</p>
        </div>
      </div>
      {/* Cast */}
      <div className='my-8 flex flex-col gap-4'>
        <h1 className='text-2xl font-semibold'>Cast</h1>
        <div className='w-full'>
          <Swiper
            slidesPerView={1.9}
            spaceBetween={10}
            breakpoints={{
              768: {
                slidesPerView: 4.2,
                spaceBetween: 10,
              },
              1024: {
                // screen min-width 1024px ...
                slidesPerView: 6,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 8.5,
                spaceBetween: 10,
              },
            }}
          >
            {cast_data &&
              cast_data.map((cast) => (
                <SwiperSlide key={cast.id}>
                  <CastCard {...cast} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      {/* Cast */}
      {/* Trailers */}
      {video_data?.length != 0 && (
        <div className='my-8 flex flex-col gap-4'>
          <h1 className='text-2xl font-semibold'>Trailers</h1>
          <div className='w-full'>
            <Swiper slidesPerView={1} spaceBetween={10}>
              {video_data &&
                video_data.map((trailer) => (
                  <SwiperSlide key={trailer.id}>
                    <TrailerCard trailer_key={trailer.key} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      )}
      {/* Trailers */}
    </motion.div>
  );
};
