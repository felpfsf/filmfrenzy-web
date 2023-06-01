import Link from "next/link";
import MediaPoster from "../MediaPoster";

interface MediaCardProps {
  id: number;
  posterPath: string;
  title: string;
}

const MediaCard = ({ id, posterPath, title }: MediaCardProps) => {
  const mediaUrl = title ? `/movie/${id}` : `/tv/${id}`;
  return (
    <Link href={mediaUrl}>
      <MediaPoster
        posterPath={posterPath}
        title={title}
        className='max-w-[216px]'
      />
    </Link>
  );
};

export default MediaCard;
