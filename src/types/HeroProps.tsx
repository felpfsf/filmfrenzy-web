export interface HeroProps {
  type: "movies" | "tvshows" | "movies_now_playing" | "tvshows_on_air" | "";
  shuffledItems?: ItemProps[];
}

export interface ItemProps {
  id: string;
  backdrop_path: string;
  first_air_date: string;
  overview: string;
  name: string;
  number_of_seasons: number;
  release_date: string;
  title: string;
  vote_average: number;
}
