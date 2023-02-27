import { useNavigate } from "react-router-dom";
import slugify from "slugify";

export const MovieCard = (props: any) => {
  const nav = useNavigate();
  const handleClick = () => {
    if (props.title) {
      nav(
        `/movie/${props.id}/${slugify(props.title, {
          replacement: "-",
          remove: /:/,
          lower: true,
        })}`
      );
    } else {
      nav(
        `/tvshow/${props.id}/${slugify(props.name, {
          replacement: "-",
          remove: /:/,
          lower: true,
        })}`
      );
    }
  };
  return (
    <div
      className='h-auto w-full max-w-xs cursor-pointer border-transparent duration-200 ease-in-out md:rounded-xl md:border-l-8 md:border-b-8 md:hover:translate-x-2 md:hover:translate-y-[2px] md:hover:border-primary'
      onClick={handleClick}
    >
      <div className='relative overflow-hidden rounded-lg bg-background'>
        <img
          src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
          alt=''
          className='h-full w-full object-cover'
        />
        <div className='absolute bottom-0 z-10 flex h-20 w-full items-center bg-movieCardGradient p-4 md:static md:bg-none'>
          <h3 className='text-xs font-bold md:text-base'>{props.title}</h3>
        </div>
      </div>
    </div>
  );
};
