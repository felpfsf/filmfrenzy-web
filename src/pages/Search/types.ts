import { CardProps } from "../../types";

export interface DataSearch {
  id: number;
  media_type: "movie" | "tv";
  title?: string;
  name?: string;
}

export interface DataSearchResult {
  movies: CardProps[];
  tvShows: CardProps[];
}
