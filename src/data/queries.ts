import axios from 'axios'
import { TMDB_API_KEY, TMDB_BASE_URL } from '../utils/env'

// TODO - TRANSFORM INTO fetchMoviesPopular, fetchMoviesNowPlaying, fetchTvShowsOnAir, fetchTvShowsPopular

export const fetchMoviesPopular = async () => {
  const response = await axios.get(
    `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=pt-BR&page=1&include_adult=false`
  )
  return response.data.results
}
export const fetchMoviesNowPlaying = async () => {
  const response = await axios.get(
    `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&language=pt-BR&page=1&include_adult=false`
  )
  return response.data.results
}
export const fetchTvShowsOnAir = async () => {
  const response = await axios.get(
    `${TMDB_BASE_URL}/tv/on_the_air?api_key=${TMDB_API_KEY}&language=pt-BR&page=1&include_adult=false`
  )
  return response.data.results
}
export const fetchTvShowsPopular = async () => {
  const response = await axios.get(
    `${TMDB_BASE_URL}/tv/popular?api_key=${TMDB_API_KEY}&language=pt-BR&page=1&include_adult=false`
  )
  return response.data.results
}

export const fetchMovieDetails = async (movie_id: number) => {
  const response = await axios.get(`
  https://api.themoviedb.org/3/movie/${movie_id}?api_key=${TMDB_API_KEY}&language=pt-BR
  `)

  return response.data
}

export const fetchTvDetails = async (tvshow_id: number) => {
  const response = await axios.get(`
  https://api.themoviedb.org/3/tv/${tvshow_id}?api_key=${TMDB_API_KEY}&language=pt-BR
  `)

  return response.data
}
