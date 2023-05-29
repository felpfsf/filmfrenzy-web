export interface MediaDetails {
  id: number;

  tagline: string;

  backdrop_path: string;
  poster_path: string;

  first_air_date: string;
  release_date: string;

  overview: string;

  name: string;
  title: string;

  trailer: Array<Trailer>;

  cast: Array<Credits>;

  number_of_seasons: number;
  seasons: Season[];

  genres: Genres[];

  runtime: number;
  episode_run_time:number

  status: string;

  vote_average: string;
}

export interface Genres {
  id: number;
  name: string;
}

export interface Credits {
  id: number;
  profile_path: string;
  name: string;
  character: string;
  job: string;
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