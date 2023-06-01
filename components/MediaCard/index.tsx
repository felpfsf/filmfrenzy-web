import { MediaDetails } from "@/types/MediaModels";
import Link from "next/link";
import MediaPoster from "../MediaPoster";

const MediaCard = (media: MediaDetails) => {
  const mediaUrl = media.title ? `/movie/${media.id}` : `/tv/${media.id}`;
  return (
    <Link href={mediaUrl}>
      <MediaPoster
        posterPath={media.poster_path}
        title={media.name || media.title}
        className='max-w-[216px]'
      />
    </Link>
  );
};

export default MediaCard;
