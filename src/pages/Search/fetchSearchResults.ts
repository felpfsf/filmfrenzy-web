import { fetchSearch } from "../../data/queries";
import { DataSearch, DataSearchResult } from "./types";

export const fetchSearchResults = async (
  query: string
): Promise<DataSearchResult> => {
  const searchResult = await fetchSearch(query);
  const movies = searchResult?.filter(
    (result: DataSearch) => result.media_type === "movie"
  );
  const tvShows = searchResult?.filter(
    (result: DataSearch) => result.media_type === "tv"
  );

  return { movies: movies ?? [], tvShows: tvShows ?? [] };
};
