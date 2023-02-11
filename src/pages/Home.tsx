import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Hero } from '../components/Hero'
import { TMDB_API_KEY, TMDB_BASE_URL } from '../utils/env'


interface ItemProps {
  release_date: string
  first_air_date: string
  vote_average: number
  name: string
  original_title: string
  title: string
  overview: string
  number_of_seasons: number
  backdrop_path: string
}

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const { data: items } = useQuery(['movies', 'tvShows'], async () => {
    const [moviesResponse, tvShowsResponse] = await Promise.all([
      axios.get(
        `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&language=pt-BR&page=1&include_adult=false`
      ),
      axios.get(
        `${TMDB_BASE_URL}/tv/on_the_air?api_key=${TMDB_API_KEY}&language=pt-BR&page=1&include_adult=false`
      )
    ])

    return [...moviesResponse.data.results, ...tvShowsResponse.data.results]
  })

  const shuffledItems = items && items.sort(() => Math.random() - 0.5)
  const currentItem: ItemProps = shuffledItems
    ? shuffledItems[currentIndex]
    : {}

  useEffect(() => {
    if (!items) return
    const intervalID = setInterval(() => {
      setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1)
    }, 3000)

    return () => clearInterval(intervalID)
  })
  return (
    <div>
      <Hero
        type={
          currentItem.original_title ? 'movies_now_playing' : 'tvshows_on_air'
        }
      />
    </div>
  )
}
