import { MediaDetails } from "@/types/MediaModels";
import { getYearReleaseDate } from "@/utils/getYearReleaseDate";
import Link from "next/link";
import MediaPoster from "../MediaPoster";

const MediaCard = (media: MediaDetails) => {
  const mediaUrl = media.title ? `/movie/${media.id}` : `/tv/${media.id}`;
  const releaseDate = getYearReleaseDate(
    media.first_air_date! || media.release_date!
  );
  const mediaTitle = media.title
    ? `${media.title} (${releaseDate})`
    : `${media.name} (${releaseDate})`;
  return (
    <Link href={mediaUrl} className='grad group'>
      <MediaPoster
        posterPath={media.poster_path}
        title={media.name || media.title}
        className='max-w-[216px]'
      />
      <div className='absolute w-full bg-gradient-poster p-6 text-center transition-all duration-300 ease-in-out bottom-0 lg:-bottom-full lg:group-hover:bottom-0'>
        <p className='text-left text-sm font-bold text-accent [text-shadow:_0_2px_4px_var(--tw-shadow-color)] shadow-black'>
          {mediaTitle}
        </p>
      </div>
    </Link>
  );
};

export default MediaCard;
