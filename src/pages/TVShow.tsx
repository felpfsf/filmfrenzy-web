import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { fetchTvDetails } from '../data/queries'

export const TVShow = () => {
  /**
   * TODO - TV SHOW DETAILS PAGE
   * This page will display the selected show details like:
   * Trailers
   * Poster, Title, Year, Genre, Director, Actors, Overview, Ratings
   * Episodes cards separated by Seasons
   * Latest reviews
   */

  // https://api.themoviedb.org/3/tv/{tvshow_id}?api_key=${TMDB_API_KEY}&language=pt-BR

  const params = useParams()

  const {
    data: tvshow,
    isLoading,
    isError
  } = useQuery('tvshow_details', () => fetchTvDetails(params))

  if (isError) {
    return (
      <div className='mx-auto h-full w-full max-w-screen-2xl pt-32'>
        <h1>Error loading TV Show Details</h1>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='mx-auto h-full w-full max-w-screen-2xl pt-32'>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className='mx-auto h-full w-full max-w-screen-2xl pt-32'>
      <h1>TV Show Details</h1>
      <p>{tvshow.name}</p>
      <p>{tvshow.tagline}</p>
    </div>
  )
}
