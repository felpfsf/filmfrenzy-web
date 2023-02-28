export interface HeroProps {
  type: "movies" | "tvshows" | "movies_now_playing" | "tvshows_on_air" | "";
  shuffledItems?: Array<MediaDetails>;
}

export interface CardProps {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  name: string;
}

export interface MediaDetails {
  id: number;

  backdrop_path: string;
  poster_path: string;

  first_air_date: string;
  release_date: string;

  overview: string;

  name: string;
  title: string;

  trailer: Array<Trailer>;

  cast: Array<Cast>;

  number_of_seasons: number;
  seasons: Season[];

  genres: string[];

  runtime: string;

  vote_average: string;
}

export interface MovieDetails {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  release_date: string;
  genres: string[];
  runtime: number;
  vote_average: number;
  cast: Cast[];
  trailers: Trailer[];
}

export interface TVShowDetails {
  id: number;
  name: string;
  backdrop_path: string;
  poster_path: string;
  tagline: string;
  overview: string;
  first_air_date: string;
  genres: string[];
  vote_average: number;
  seasons: Season[];
  cast: Cast[];
  trailers: Trailer[];
}

export interface Cast {
  id: number;
  profile_path: string;
  name: string;
}

export interface Trailer {
  id: string;
  name: string;
  type: string;
  key: string;
}

export interface Season {
  id: number;
  name: string;
  poster_path: string;
  air_date: string;
  overview: string;
  season_number: number;
  episode_count: number;
}
