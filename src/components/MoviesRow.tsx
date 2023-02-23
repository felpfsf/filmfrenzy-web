import { useQuery } from "react-query";
import { fetchMoviesPopular } from "../data/queries";
import { MovieCard } from "./MovieCard";

export const MoviesRow = ({ title }: { title: string }) => {
  const { data: movies } = useQuery("getPop", () => fetchMoviesPopular());
  console.log(movies);
  return (
    <section className='px-4 pt-0 lg:px-8'>
      <h2 className='font-bold text-white md:text-xl'>{title}</h2>
      <div className='mx-auto h-full w-full overflow-x-scroll whitespace-nowrap'>
        {movies &&
          movies.map((movie: any) => (
            <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
};
