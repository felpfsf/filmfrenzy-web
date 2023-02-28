import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../data/queries";
import { motion } from "framer-motion";
import {
  MOTION_OPACITY_ANIMATE,
  MOTION_OPACITY_INITIAL,
  MOTION_TRANSITION_DURATION,
} from "../utils/motionProps";
import { TMDB_BACKDROP_POSTER } from "../utils/env";

export const Movie = () => {
  /**
   * TODO - MOVIE DETAILS PAGE
   * This page will display the selected movie details like:
   * Trailers
   * Poster, Title, Year, Genre, Director, Actors, Overview, Ratings
   * Latest reviews
   */

  // `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`

  const { movie_id } = useParams();

  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery(["movie_details", movie_id], () =>
    fetchMovieDetails(movie_id || "")
  );

  console.log(movie && movie?.backdrop_path);

  const movie_backdrop = `${TMDB_BACKDROP_POSTER}${movie?.backdrop_path}`;

  console.log(movie_backdrop);

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
      <div className='flex flex-col items-center gap-4 lg:flex-row lg:items-start'>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={`Poster of ${movie?.title}`}
          className='w-full min-w-[10rem] max-w-xs rounded-xl drop-shadow-sm'
        />
        <div className='flex flex-col gap-4'>
          <h1>
            <strong>{movie.title}</strong>
          </h1>
          <p>{movie.overview}</p>
        </div>
      </div>
    </motion.div>
  );
};
