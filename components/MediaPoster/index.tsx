import clsx from "clsx";
import LazyImage from "../LazyImage";
const posterUrl = process.env.NEXT_PUBLIC_POSTER_URL;

interface PosterProps {
  posterPath: string;
  title: string;
  className?: string;
}

const MediaPoster = ({ className, posterPath, title }: PosterProps) => {
  const style = clsx("w-full min-w-[10rem] self-center overflow-hidden rounded-xl", className);
  const dummyPosterUrl =
    "https://dummyimage.com/2000x3000/000/fff.png&text=Poster+de+";
  return (
    <div className={style}>
      <LazyImage
        image={{
          alt: `Poster de ${title}`,
          src: posterPath
            ? `${posterUrl}/${posterPath}`
            : "/no-poster.png",
          width: 384,
          height: 576,
        }}
      />
    </div>
  );
};

export default MediaPoster;
