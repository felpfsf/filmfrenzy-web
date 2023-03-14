import axios from "axios";
import { useQuery } from "react-query";
import { Hero } from "../../components/Hero/Hero";
import { MediaRow } from "../../components/MediaRow/MoviesRow";
import { TMDB_API_KEY, TMDB_BASE_URL } from "../../utils";
import { motion } from "framer-motion";
import {
  MOTION_OPACITY_ANIMATE,
  MOTION_OPACITY_INITIAL,
  MOTION_TRANSITION_DURATION,
} from "../../utils";

export const Home = () => {
  const { data: items } = useQuery(
    ["movies", "tvShows"],
    async () => {
      const [moviesResponse, tvShowsResponse] = await Promise.all([
        axios.get(
          `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&language=pt-BR&page=1&include_adult=false`
        ),
        axios.get(
          `${TMDB_BASE_URL}/tv/on_the_air?api_key=${TMDB_API_KEY}&language=pt-BR&page=1&include_adult=false`
        ),
      ]);

      return [...moviesResponse.data.results, ...tvShowsResponse.data.results];
    },
    { staleTime: 0, cacheTime: 0 }
  );

  const shuffledItems = items && items.sort(() => Math.random() - 0.5);

  return (
    <motion.main
      className='w-full'
      initial={{ opacity: MOTION_OPACITY_INITIAL }}
      animate={{ opacity: MOTION_OPACITY_ANIMATE }}
      exit={{
        opacity: 0,
        transition: { duration: MOTION_TRANSITION_DURATION },
      }}
    >
      <Hero type={""} shuffledItems={shuffledItems} />
      <MediaRow title='Most Popular' />
    </motion.main>
  );
};
