import { useEffect, useState } from 'react'
import { QueryObserverSuccessResult, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import {
  fetchMoviesNowPlaying,
  fetchMoviesPopular,
  fetchTvShowsOnAir,
  fetchTvShowsPopular
} from '../data/queries'
import { TMDB_BACKDROP_POSTER } from '../utils/env'

interface HeroProps {
  type: 'movies' | 'tvshows' | 'movies_now_playing' | 'tvshows_on_air'
}

interface ItemProps {
  release_date: string
  first_air_date: string
  vote_average: number
  name: string
  title: string
  overview: string
  number_of_seasons: number
  backdrop_path: string
  id: string
}

export const Hero = ({ type }: HeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  // TODO - INTERFACE DATA TYPES FOR FETCHING
  const { data: items } = useQuery(
    'api_data',
    type === 'movies_now_playing'
      ? fetchMoviesNowPlaying
      : type === 'movies'
      ? fetchMoviesPopular
      : type === 'tvshows_on_air'
      ? fetchTvShowsOnAir
      : fetchTvShowsPopular
  ) as QueryObserverSuccessResult<any, unknown>

  const currentItem: ItemProps = items ? items[currentIndex] : {}

  // slideshow
  useEffect(() => {
    if (!items) return
    const intervalID = setInterval(() => {
      setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1)
    }, 5000)
    return () => clearInterval(intervalID)
  }, [currentIndex, items])

  // preload
  useEffect(() => {
    const preloadImg = new Image()
    preloadImg.src = `${TMDB_BACKDROP_POSTER}/${currentItem?.backdrop_path}`
    preloadImg.onload = () => setImageLoaded(true)
  }, [currentItem])

  const getFullYearReleaseDate = (date: string) => {
    return new Date(date).getFullYear()
  }

  const truncateOverviewText = (overview: string, length: number) => {
    if (overview.length > length) {
      return overview.substring(0, length) + '...'
    }
    return overview
  }

  const nav = useNavigate()
  const handleClick = () => {
    // console.log('movie id ->', currentItem.id)
    if (currentItem.title) {
      nav(`/movies/${currentItem.id}`)
    } else {
      nav(`/tvshows/${currentItem.id}`)
    }
  }

  return (
    <div
      style={{
        backgroundImage: `url(${TMDB_BACKDROP_POSTER}/${currentItem?.backdrop_path})`,
        opacity: imageLoaded ? 1 : 0
      }}
      className='easy-in-out h-screen w-full bg-cover bg-center transition-all duration-500'
      aria-live='polite'
      aria-atomic='true'
      aria-label={
        currentItem?.title
          ? `image of ${currentItem?.title}`
            ? currentItem.name
            : `image of ${currentItem?.name}`
          : 'image placeholder'
      }>
      <div className='h-full w-full bg-posterGradient'>
        <div className='duration-600 flex h-full w-full flex-col justify-end bg-contentPosterGradient pl-8 pb-16 transition-all ease-in-out'>
          <h1 className='font-bold md:text-6xl'>
            {currentItem?.title || currentItem?.name}
          </h1>
          <div className='mt-2 flex flex-col gap-2 md:w-[50%]'>
            <div className='flex gap-4'>
              {/* Todo - change to api rating */}
              <p>rating: {currentItem?.vote_average}</p>
              <p>
                Lançamento:{' '}
                {currentItem.release_date
                  ? getFullYearReleaseDate(currentItem.release_date)
                  : getFullYearReleaseDate(currentItem.first_air_date)}
              </p>
              {currentItem.number_of_seasons ? (
                <p>{`${currentItem.number_of_seasons} temporada${
                  currentItem.number_of_seasons != 1 ? 's' : null
                }`}</p>
              ) : null}
            </div>
            {currentItem.overview ? (
              <p className='hidden md:block'>
                {truncateOverviewText(currentItem.overview, 160)}
              </p>
            ) : null}
            <div className='mt-2 flex gap-4'>
              <button className='rounded-md bg-button px-4 py-2 font-semibold ring-[#FFB500] duration-500 hover:bg-button_hover hover:ring-1'>
                ▶ Watch Trailer
              </button>
              <button
                className='rounded-md bg-button px-4 py-2 font-semibold ring-[#FFB500] duration-500 hover:bg-button_hover hover:ring-1'
                onClick={handleClick}>
                + More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
