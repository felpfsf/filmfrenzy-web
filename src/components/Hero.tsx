import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import {
  fetchMoviesNowPlaying,
  fetchMoviesPopular,
  fetchTvShowsOnAir,
  fetchTvShowsPopular,
} from "../data/queries";
import { HeroProps, MediaDetails } from "../types";
import { TMDB_BACKDROP_POSTER } from "../utils/env";
import { Button } from "./ui/Button";
import { useNavigateToMedia } from "../hooks/useNavigateToMedia";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { getFullYearReleaseDate } from "../utils/GetFullYearReleaseDate";
import { SwiperButtons } from "./SwiperButtons";
import { truncateOverviewText } from "../utils/truncateOverviewText";
SwiperCore.use([Autoplay]);

const HERO_OVERVIEW_TRUNCATE_LENGTH = 160;
const HERO_SLIDER_DELAY = 5000;

export const Hero = ({ type, shuffledItems }: HeroProps) => {
  const nav = useNavigate();
  const navigateToMedia = useNavigateToMedia();
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: itemsData } = useQuery<MediaDetails[]>(
    ["api_data"],
    type === "movies_now_playing"
      ? fetchMoviesNowPlaying
      : type === "movies"
      ? fetchMoviesPopular
      : type === "tvshows_on_air"
      ? fetchTvShowsOnAir
      : fetchTvShowsPopular,
    { staleTime: 0, cacheTime: 0 }
  );

  const currentItem = shuffledItems
    ? shuffledItems[currentIndex]
    : itemsData
    ? itemsData[currentIndex]
    : undefined;

  const handleClick = () => {
    if (currentItem) {
      const { id, title, name } = currentItem;
      if (title) {
        navigateToMedia(title, id, "movie");
      } else if (name) {
        navigateToMedia(name, id, "tvshow");
      }
    }
  };

  return (
    <Swiper
      slidesPerView={1}
      autoplay={{ delay: HERO_SLIDER_DELAY }}
      onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
      className='-z-2 group relative'
    >
      {itemsData &&
        itemsData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              style={{
                backgroundImage: currentItem?.backdrop_path
                  ? `url(${TMDB_BACKDROP_POSTER}/${currentItem?.backdrop_path})`
                  : `https://dummyimage.com/2000x3000/000/fff.png&text=Image+Placeholder+of+${
                      currentItem?.title || currentItem?.name
                    }`,
              }}
              className='h-screen w-full bg-cover bg-center'
              aria-live='polite'
              aria-atomic='true'
              aria-label={
                currentItem?.title
                  ? `image of ${currentItem?.title}`
                    ? currentItem.name
                    : `image of ${currentItem?.name}`
                  : "image placeholder"
              }
            >
              <div className='h-full w-full bg-posterGradient'>
                <div className='flex h-full w-full flex-col justify-end bg-contentPosterGradient px-8 pb-14 md:pl-8 md:pb-32'>
                  <h1 className='text-lg font-bold md:text-6xl'>
                    {currentItem?.title || currentItem?.name}
                  </h1>
                  <div className='mt-2 flex flex-col gap-2 md:w-[50%]'>
                    <div className='flex gap-4'>
                      {/* Todo - change to api rating */}
                      <p>rating: {currentItem?.vote_average}</p>
                      <p>
                        Lançamento:{" "}
                        {currentItem?.release_date
                          ? getFullYearReleaseDate(currentItem.release_date)
                          : getFullYearReleaseDate(
                              currentItem?.first_air_date ?? ""
                            )}
                      </p>
                      {currentItem?.number_of_seasons ? (
                        <p>{`${currentItem.number_of_seasons} temporada${
                          currentItem.number_of_seasons != 1 ? "s" : null
                        }`}</p>
                      ) : null}
                    </div>
                    {currentItem?.overview ? (
                      <p className='hidden md:block'>
                        {truncateOverviewText(
                          currentItem.overview,
                          HERO_OVERVIEW_TRUNCATE_LENGTH
                        )}
                      </p>
                    ) : null}
                    <div className='mt-2 flex gap-4'>
                      <Button label='▶ Watch Trailer' />
                      <Button label='+ More Info' handleClick={handleClick} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      <SwiperButtons />
    </Swiper>
  );
};
