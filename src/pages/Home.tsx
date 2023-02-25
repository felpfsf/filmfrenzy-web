import axios from "axios";
import { useQuery } from "react-query";
import { Hero } from "../components/Hero";
import { MoviesRow } from "../components/MoviesRow";
import { TMDB_API_KEY, TMDB_BASE_URL } from "../utils/env";

export const Home = () => {
  const { data: items } = useQuery(["movies", "tvShows"], async () => {
    const [moviesResponse, tvShowsResponse] = await Promise.all([
      axios.get(
        `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&language=pt-BR&page=1&include_adult=false`
      ),
      axios.get(
        `${TMDB_BASE_URL}/tv/on_the_air?api_key=${TMDB_API_KEY}&language=pt-BR&page=1&include_adult=false`
      ),
    ]);

    return [...moviesResponse.data.results, ...tvShowsResponse.data.results];
  });

  const shuffledItems = items && items.sort(() => Math.random() - 0.5);

  return (
    <main className='w-full'>
      <Hero type={""} shuffledItems={shuffledItems} />
      <MoviesRow title='Most Popular' />
    </main>
  );
};
