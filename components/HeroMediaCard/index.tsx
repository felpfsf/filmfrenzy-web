import { MediaDetails } from "@/types/MediaModels";
import { getYearReleaseDate } from "@/utils/getYearReleaseDate";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const HeroMediaCard = (media: MediaDetails) => {
  const posterUrl = process.env.NEXT_PUBLIC_POSTER_URL;
  const dummyPosterUrl =
    "https://dummyimage.com/2000x3000/000/fff.png&text=Poster+de+";
  const releaseDate = getYearReleaseDate(
    media.first_air_date || media.release_date
  );
  return (
    <div className='relative h-[90vh] w-full bg-gradient-poster'>
      <div className='absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-center'>
        <Image
          src={
            media.backdrop_path
              ? `${posterUrl}/${media.backdrop_path}`
              : `${dummyPosterUrl}${media.name || media.title}`
          }
          alt={`Poster de ${media.title || media.name}`}
          width={3326}
          height={1870}
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mP8dtatnoEIwDiqkL4KASH/GVugFkABAAAAAElFTkSuQmCC'
          placeholder='blur'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='z-10 flex h-full flex-col justify-end bg-gradient-content px-8 pb-16'>
        <div className='flex w-full max-w-screen-xl flex-col gap-4'>
          <h1 className='text-xl font-bold md:text-4xl'>
            {media.name || media.title}
          </h1>
          <div className='flex w-full flex-col gap-4 md:w-1/2'>
            {/* Nota e lançamento */}
            <div className='flex items-center gap-6 text-sm'>
              <span className='flex items-center gap-2'>
                <StarIcon className='h-4 w-4' /> {media.vote_average}
              </span>
              -<p>Lançamento: {releaseDate}</p>
            </div>
            <Link
              href={media.title ? `/movie/${media.id}` : `/tv/${media.id}`}
              className='flex h-12 w-full max-w-[160px] items-center justify-center rounded-lg bg-accent px-10 py-2 text-sm font-bold uppercase text-primary transition-colors duration-200 ease-in-out hover:bg-accent-hover'
            >
              Mais Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMediaCard;
