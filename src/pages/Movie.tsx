import axios from 'axios'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { fetchMovieDetails } from '../data/queries'
import { TMDB_API_KEY } from '../utils/env'

export const Movie = () => {
  /**
   * TODO - MOVIE DETAILS PAGE
   * This page will display the selected movie details like:
   * Trailers
   * Poster, Title, Year, Genre, Director, Actors, Overview, Ratings
   * Latest reviews
   */

  // `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`

  const params = useParams()
  const {
    data: movie,
    isLoading,
    isError
  } = useQuery('movie_details', () => fetchMovieDetails(params))

  if (isLoading) {
    return (
      <div className='mx-auto h-full w-full max-w-screen-2xl pt-32'>
        <p>Loading...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className='mx-auto h-full w-full max-w-screen-2xl pt-32'>
        <p>Error loading movie details</p>
      </div>
    )
  }

  // console.log(movie.title)

  return (
    <div className='mx-auto h-full w-full max-w-screen-2xl pt-32'>
      <h1>Movie Details</h1>
      <p>{movie.title}</p>
    </div>
  )
}
