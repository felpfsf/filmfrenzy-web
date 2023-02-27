import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchTvDetails } from "../data/queries";
import { motion } from "framer-motion";
import {
  MOTION_OPACITY_ANIMATE,
  MOTION_OPACITY_INITIAL,
  MOTION_TRANSITION_DURATION,
} from "../utils/motionProps";
import { TMDB_BACKDROP_POSTER } from "../utils/env";

export const TVShow = () => {
  /**
   * TODO - TV SHOW DETAILS PAGE
   * This page will display the selected show details like:
   * Trailers
   * Poster, Title, Year, Genre, Director, Actors, Overview, Ratings
   * Episodes cards separated by Seasons
   * Latest reviews
   */

  // https://api.themoviedb.org/3/tv/{tvshow_id}?api_key=${TMDB_API_KEY}&language=pt-BR

  const { tvshow_id } = useParams();

  const {
    data: tvshow,
    isLoading,
    isError,
  } = useQuery("tvshow_details", () => fetchTvDetails(tvshow_id || ""));

  if (isError) {
    return (
      <div className='mx-auto h-full w-full max-w-screen-2xl pt-32'>
        <h1>Error loading TV Show Details</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='mx-auto h-full w-full max-w-screen-2xl pt-32'>
        <h1>Loading...</h1>
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
        src={`${TMDB_BACKDROP_POSTER}${tvshow?.backdrop_path}`}
        alt=''
        className='absolute inset-0 -z-10 h-1/2 w-full object-cover object-center'
      />
      <div className='flex flex-col items-center gap-4 lg:flex-row lg:items-start'>
        <img
          src={`https://image.tmdb.org/t/p/original/${tvshow.poster_path}`}
          alt=''
          className='w-full min-w-[192px] max-w-sm rounded-xl drop-shadow-sm'
        />
        <div className='flex flex-col gap-4'>
          <h1>
            <strong>{tvshow.name}</strong>
          </h1>
          <p>{tvshow.tagline}</p>
          <p>{tvshow.overview}</p>
        </div>
      </div>
    </motion.div>
  );
};
