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
    <div className='h-auto w-full max-w-xs cursor-pointer' onClick={handleClick}>
      <div className='relative overflow-hidden rounded-lg bg-background'>
        <div className=''>
          <img
            src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
            alt=''
            className='h-full w-full object-cover'
          />
        </div>
        <div className='absolute bottom-0 z-10 h-20 w-full bg-movieCardGradient p-4 md:static md:bg-none'>
          <h3 className='text-xs font-bold md:text-base'>{props.title}</h3>
          {/* <p className='text-sm'>{props.release_date}</p> */}
        </div>
      </div>
    </div>
  );
};
