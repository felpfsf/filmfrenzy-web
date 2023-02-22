import { useEffect } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { fetchSearch } from "../data/queries";

// SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${pageNumber}&include_adult=false&query=${queryParam}`
// BASE_URL, API_KEY and query='queryParam

interface SearchResult {
  id: number;
  media_type: "movie" | "tv";
  title?: string;
  name?: string;
}

export const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const {
    data: search_result,
    isLoading,
    isError,
  } = useQuery("search", () => fetchSearch(query || ""));

  const movies = search_result?.filter(
    (result: SearchResult) => result.media_type === "movie"
  );
  const tvShows = search_result?.filter(
    (result: SearchResult) => result.media_type === "tv"
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
    <div className='mx-auto h-full w-full max-w-screen-2xl pt-32'>
      <strong>
        Results for <em className='underline underline-offset-2'>{query}</em>
      </strong>
      <div className='mt-4 grid gap-4'>
        {movies ? (
          <div className='border border-red-600'>
            <strong>Movies</strong>
            <div className='mt-4 grid grid-cols-4'>
              {movies.map((movie: any) => (
                <div key={movie.id}>
                  <strong>{movie.title}</strong>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {tvShows ? (
          <div className='border border-red-600'>
            <strong>TV Shows</strong>
            <div className='mt-4 grid grid-cols-4'>
              {tvShows.map((tvshow: any) => (
                <div key={tvshow.id}>
                  <strong>{tvshow.name}</strong>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
