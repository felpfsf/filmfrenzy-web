import LazyImage from "../LazyImage";

interface PosterProps {
  posterPath: string;
  title: string;
}

const MediaPoster = ({ posterPath, title }: PosterProps) => {
  const posterUrl = process.env.NEXT_PUBLIC_POSTER_URL;
  const dummyPosterUrl =
    "https://dummyimage.com/2000x3000/000/fff.png&text=Poster+de+";
  return (
    <div className='w-full min-w-[10rem] max-w-sm self-center overflow-hidden rounded-xl'>
      <LazyImage
        image={{
          alt: `Poster de ${title}`,
          src: posterPath
            ? `${posterUrl}/${posterPath}`
            : `${dummyPosterUrl}&text=Poster+de+${title}`,
          width: 384,
          height: 576,
        }}
      />
    </div>
  );
};

export default MediaPoster;
