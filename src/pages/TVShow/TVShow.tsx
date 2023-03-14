import { useCallback } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCast, fetchDetails, fetchVideo } from "../../data/queries";
import { motion } from "framer-motion";
import {
  MOTION_OPACITY_ANIMATE,
  MOTION_OPACITY_INITIAL,
  MOTION_TRANSITION_DURATION,
} from "../../utils/";
import { TMDB_BACKDROP_POSTER } from "../../utils/env";
import { Cast, Trailer, TVShowDetails } from "../../types";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CastCard } from "../../components/CastCard/CastCard";
import { TrailerCard } from "../../components/TrailerCard/TrailerCard";
import { getFullYearReleaseDate } from "../../utils/GetFullYearReleaseDate";
import { SwiperButtons } from "../../components/SwiperButtons/SwiperButtons";

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

  // https://api.themoviedb.org/3/tv/{tv_id}/credits?api_key=${TMDB_API_KEY}&language=pt-BR

  // https://api.themoviedb.org/3/movie/{tvshow_id}/videos?api_key=${TMDB_API_KEY}&language=pt-BR

  const { tvshow_id } = useParams();

  const {
    data: tvshow,
    isLoading,
    isError,
  } = useQuery<TVShowDetails>(
    "tvshow_details",
    () => fetchDetails(tvshow_id || "", "tv"),
    { staleTime: 0, cacheTime: 0 }
  );

  const { data: cast_data } = useQuery<Cast[]>(["cast", tvshow_id], () =>
    fetchCast(tvshow_id || "", "tv")
  );

  const { data: video_data } = useQuery<Trailer[]>(["video", tvshow_id], () =>
    fetchVideo(tvshow_id || "", "tv")
  );

  if (isError) {
    return (
      <div className='mx-auto h-full w-full max-w-screen-2xl pt-32'>
        <h1>Error loading TV Show Details</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='mx-auto h-full w-full max-w-screen-2xl pt-32'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <motion.div
      className='mx-auto h-full w-full max-w-screen-2xl px-4 pt-32'
      initial={{ opacity: MOTION_OPACITY_INITIAL }}
      animate={{ opacity: MOTION_OPACITY_ANIMATE }}
      exit={{
        opacity: MOTION_OPACITY_ANIMATE,
        transition: { duration: MOTION_TRANSITION_DURATION },
      }}
    >
      <img
        src={
          tvshow?.backdrop_path
            ? `${TMDB_BACKDROP_POSTER}${tvshow?.backdrop_path}`
            : `https://dummyimage.com/2000x3000/000/fff.png&text=Image+Placeholder+of+${tvshow?.name}`
        }
        alt=''
        className='absolute inset-0 -z-10 h-1/2 w-full object-cover object-center'
      />
      <div className='absolute inset-0 -z-10 h-1/2 w-full bg-posterGradient' />
      <div className='flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-24'>
        <img
          src={`https://image.tmdb.org/t/p/original/${tvshow?.poster_path}`}
          alt={`Poster of ${tvshow?.poster_path}`}
          className='w-full min-w-[10rem] max-w-xs rounded-xl border-l-2 border-b-2 drop-shadow-sm'
        />
        <div className='flex max-w-3xl flex-col gap-4 px-2 lg:mt-0'>
          <div>
            <h1 className='text-2xl font-semibold md:text-3xl'>
              {tvshow?.name}{" "}
              {tvshow?.first_air_date && (
                <span>({getFullYearReleaseDate(tvshow.first_air_date)})</span>
              )}
            </h1>
            <div className='my-1 flex flex-wrap gap-2'>
              {tvshow?.genres.map(({ id, name }) => (
                <span
                  key={id}
                  className='rounded bg-genreCaption px-2 py-1 text-xs'
                >
                  {name}
                </span>
              ))}
              <span>- Total de temporadas: {tvshow?.seasons.length}</span>
            </div>
            {tvshow?.tagline && <em>"{tvshow?.tagline}"</em>}
          </div>
          <p className='text-justify md:text-lg'>{tvshow?.overview}</p>
        </div>
      </div>
      {/* Cast */}
      <div className='my-8 flex flex-col gap-4'>
        <h1 className='text-2xl font-semibold'>Elenco</h1>
        <div className='w-full'>
          <Swiper
            slidesPerView={1.9}
            spaceBetween={10}
            breakpoints={{
              768: {
                slidesPerView: 4.2,
                spaceBetween: 10,
              },
              1024: {
                // screen min-width 1024px ...
                slidesPerView: 6,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 8.5,
                spaceBetween: 10,
              },
            }}
            className='group relative'
          >
            {cast_data &&
              cast_data.map((cast) => (
                <SwiperSlide key={cast.id}>
                  <CastCard {...cast} />
                </SwiperSlide>
              ))}
            <SwiperButtons />
          </Swiper>
        </div>
      </div>
      {/* Cast */}
      {/* Trailers */}
      {video_data?.length != 0 && (
        <div className='my-8 flex flex-col gap-4'>
          <h1 className='text-2xl font-semibold'>Trailers</h1>
          <div className='w-full'>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              className='group relative'
            >
              {video_data &&
                video_data.map((trailer) => (
                  <SwiperSlide key={trailer.id}>
                    <TrailerCard trailer_key={trailer.key} />
                  </SwiperSlide>
                ))}
              <SwiperButtons />
            </Swiper>
          </div>
        </div>
      )}
      {/* Trailers */}
    </motion.div>
  );
};
