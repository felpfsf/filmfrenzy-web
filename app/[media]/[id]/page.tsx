import DialogTrigger from "@/components/Dialog/DialogTrigger";
import { Credits, MediaDetails, Trailer } from "@/types/MediaModels";
import { convertMinutesToHours } from "@/utils/convertMinutesToHours";
import { formatDate } from "@/utils/formatDate";
import { getMediaDetails } from "@/utils/getMediaDetails";
import { getYearReleaseDate } from "@/utils/getYearReleaseDate";
import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import CastSlider from "./components/CastSlider";
import VideosSlider from "./components/VideosSlider";

interface Props {
  details: MediaDetails;
  cast: Credits[];
  directors: Credits[];
  writers: Credits[];
  videos: Trailer[];
  officialTrailer: Trailer[];
}

const Media = async ({
  params: { id, media },
}: {
  params: { id: number; media: string };
}) => {
  const posterUrl = process.env.NEXT_PUBLIC_POSTER_URL;
  const dummyPosterUrl =
    "https://dummyimage.com/2000x3000/000/fff.png&text=Poster+de+";
  const data = (await getMediaDetails(id, media)) as Props;
  const { cast, details, directors, writers, officialTrailer, videos } = data;
  const releaseDate = getYearReleaseDate(
    details.first_air_date! || details.release_date!
  );
  console.log(officialTrailer);
  return (
    <div className='mx-auto w-full max-w-screen-xl px-4 py-24'>
      <Image
        src={
          details.backdrop_path
            ? `${posterUrl}/${details.backdrop_path}`
            : `${dummyPosterUrl}${details.name || details.title}`
        }
        alt={""}
        fill
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mP8dtatnoEIwDiqkL4KASH/GVugFkABAAAAAElFTkSuQmCC'
        placeholder='blur'
        className='absolute left-0 top-0 -z-10 object-cover opacity-20'
      />
      <div className='absolute inset-0 -z-10 w-full bg-gradient-poster' />
      <div className='flex flex-col lg:flex-row lg:gap-8'>
        {/* Poster */}
        <div className='w-full min-w-[10rem] max-w-sm self-center overflow-hidden rounded-xl'>
          <Image
            src={
              details.poster_path
                ? `${posterUrl}/${details.poster_path}`
                : `${dummyPosterUrl}&text=Poster+de+${
                    details.name || details.title
                  }`
            }
            alt={`Poster de ${details.title || details.name}`}
            width={384}
            height={576}
            className='h-full w-full object-cover'
          />
        </div>
        {/* Title */}
        <div className='mt-8 flex flex-col gap-2'>
          <h1 className='flex gap-2 text-left text-2xl'>
            {details.name || details.title}
            <span className='inline-block'>({releaseDate})</span>
          </h1>
          <h6 className='italic text-gray-600'>{details.tagline}</h6>
          {/* Genres List */}
          <div className='mt-4 flex flex-wrap gap-2'>
            {details.genres.map(({ id, name }) => (
              <span
                key={id}
                className='rounded bg-accent px-2 py-px text-xs font-semibold text-primary'
              >
                {name}
              </span>
            ))}
          </div>
          {/* Votes and Trailer modal */}
          <div className='mt-6 grid grid-flow-col grid-cols-[auto,1fr] gap-8'>
            <div className='flex items-center gap-2'>
              <StarIcon className='h-6 w-6' />
              <p>{details.vote_average}</p>
            </div>
            {officialTrailer.length > 0 && (
              <DialogTrigger officialTrailer={officialTrailer[0]} />
            )}
          </div>
          {/* Overview */}
          <div className='mt-6 flex flex-col space-y-2'>
            <h1 className='font-semibold'>Sinopse</h1>
            <p className='text-sm leading-relaxed'>
              {details.overview ? details.overview : "Sinopse não disponível"}
            </p>
          </div>
          {/* Info */}
          <div className='mt-6 grid min-w-0 max-w-full grid-cols-3 gap-2 text-sm'>
            <div>
              <h2>Estado:</h2>
              <p className='text-gray-400'>{details.status}</p>
            </div>
            <div>
              <h2>Lançamento:</h2>
              <p className='text-gray-400'>
                {formatDate(details.first_air_date! || details.release_date!)}
              </p>
            </div>
            <div>
              <h2>Duração:</h2>
              <p className='text-gray-400'>
                {convertMinutesToHours(
                  details.runtime! || details.episode_run_time!
                )}
              </p>
            </div>
            {/* Second row */}
            <div className='col-span-3 grid grid-flow-col grid-cols-[auto,1fr] gap-2 border-t border-gray-700 pt-2'>
              <h2>Diretor:</h2>
              <div className='flex flex-wrap'>
                {directors.map((director, index) => (
                  <React.Fragment key={director.id}>
                    <p className='break-words text-gray-400'>{director.name}</p>
                    {index !== directors.length - 1 && (
                      <span className='pr-1 text-gray-400'>, </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className='col-span-3 grid grid-flow-col grid-cols-[auto,1fr] gap-2 border-t border-gray-700 pt-2'>
              <h2>Roteiristas:</h2>
              <div className='flex flex-wrap'>
                {writers.map((writer, index) => (
                  <React.Fragment key={writer.id}>
                    <p className='break-words text-gray-400'>{writer.name}</p>
                    {index !== writers.length - 1 && (
                      <span className='pr-1 text-gray-400'>,</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/* Cast Slider */}
      <div className='mt-6 flex flex-col gap-6'>
        <h1>Elenco</h1>
        {cast.length > 0 ? (
          <CastSlider cast={cast} />
        ) : (
          <p className='self-center text-sm text-gray-400 lg:self-start'>
            Não há informações sobre elenco :(
          </p>
        )}
      </div>
      {/* Trailer */}
      <div className='mt-6 flex flex-col gap-6'>
        <h1>Trailers</h1>
        {videos.length > 0 ? (
          <VideosSlider videos={videos} />
        ) : (
          <p className='self-center text-sm text-gray-400 lg:self-start'>
            Não há informações sobre trailers :(
          </p>
        )}
      </div>
    </div>
  );
};

export default Media;
