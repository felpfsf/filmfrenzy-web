import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../data/queries";
import { motion } from "framer-motion";
import { MOTION_OPACITY_ANIMATE, MOTION_OPACITY_INITIAL, MOTION_TRANSITION_DURATION } from "../utils/motionProps";

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
      className='mx-auto h-full w-full max-w-screen-2xl pt-32'
      initial={{ opacity: MOTION_OPACITY_INITIAL }}
      animate={{ opacity: MOTION_OPACITY_ANIMATE }}
      exit={{
        opacity: MOTION_OPACITY_ANIMATE,
        transition: { duration: MOTION_TRANSITION_DURATION },
      }}
    >
      <h1>Movie Details</h1>
      <p>{movie.title}</p>
      <p>{movie.overview}</p>
    </motion.div>
  );
};
