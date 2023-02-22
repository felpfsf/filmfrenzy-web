import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { fetchSearch } from "../data/queries";

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
    <div className='mx-auto h-full w-full max-w-screen-2xl px-4 pt-32 md:px-8'>
      <strong>
        Results for <em className='underline underline-offset-2'>{query}</em>
      </strong>
      <div
        className={`mt-4 grid gap-4 opacity-0 transition-opacity duration-300 ease-in-out ${
          movies.length || tvShows.length ? "opacity-100" : ""
        }`}
      >
        {movies && (
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
        )}

        {tvShows && (
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
        )}
      </div>
    </div>
  );
};
