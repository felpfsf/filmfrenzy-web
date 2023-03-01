import { CardProps } from "../types";
import { useNavigateToMedia } from "../hooks/useNavigateToMedia";

export const Card = ({ title, name, poster_path, id }: CardProps) => {
  const navigateToMedia = useNavigateToMedia();

  const handleClick = () => {
    if (title) {
      navigateToMedia(title, id, "movie");
      // console.log('movie card clicked');
    } else {
      navigateToMedia(name, id, "tvshow");
    }
  };
  return (
    <div
      className='h-auto w-full max-w-xs cursor-pointer border-transparent duration-200 ease-in-out md:rounded-xl md:border-l-8 md:border-b-8 md:hover:translate-x-2 md:hover:translate-y-[.125rem] md:hover:border-primary'
      onClick={handleClick}
    >
      <div className='relative overflow-hidden rounded-lg bg-background'>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original/${poster_path}`
              : `https://dummyimage.com/2000x3000/000/fff.png&text=Image+Placeholder+of+${
                  title || name
                }`
          }
          alt=''
          className='h-full w-full object-cover'
        />
        <div className='hidden h-20 w-full items-center md:flex md:bg-none'>
          <h3 className='text-xs font-bold md:text-base'>{title || name}</h3>
        </div>
      </div>
    </div>
  );
};
