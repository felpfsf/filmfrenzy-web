import axios from "axios";
import { TMDB_API_KEY, TMDB_BASE_URL } from "../utils/env";

// TODO - TRANSFORM INTO fetchMoviesPopular, fetchMoviesNowPlaying, fetchTvShowsOnAir, fetchTvShowsPopular

export const fetchMoviesPopular = async () => {
  const response = await axios.get(
    `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=pt-BR&page=1&include_adult=false`
  );
  return response.data.results;
};
export const fetchMoviesNowPlaying = async () => {
  const response = await axios.get(
    `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&language=pt-BR&page=1&include_adult=false`
  );
  return response.data.results;
};
export const fetchTvShowsOnAir = async () => {
  const response = await axios.get(
    `${TMDB_BASE_URL}/tv/on_the_air?api_key=${TMDB_API_KEY}&language=pt-BR&page=1&include_adult=false`
  );
  return response.data.results;
};
export const fetchTvShowsPopular = async () => {
  const response = await axios.get(
    `${TMDB_BASE_URL}/tv/popular?api_key=${TMDB_API_KEY}&language=pt-BR&page=1&include_adult=false`
  );
  return response.data.results;
};

export const fetchDetails = async (movie_id: string, media_type: string) => {
  const response = await axios.get(`
  ${TMDB_BASE_URL}/${media_type}/${movie_id}?api_key=${TMDB_API_KEY}&language=pt-BR
  `);

  return response.data;
};

export const fetchSearch = async (query: string) => {
  const response = await axios.get(`
  ${TMDB_BASE_URL}/search/multi?api_key=${TMDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}
  `);

  return response.data.results;
};

export const fetchCast = async (movie_id: string, media_type: string) => {
  const response = await axios.get(`
  https://api.themoviedb.org/3/${media_type}/${movie_id}/credits?api_key=${TMDB_API_KEY}&language=pt-BR
  `);

  return response.data.cast;
};

export const fetchVideo = async (media_id: string, media_type: string) => {
  const response = await axios.get(`
  https://api.themoviedb.org/3/${media_type}/${media_id}/videos?api_key=${TMDB_API_KEY}&language=pt-BR
  `);

  return response.data.results;
};
