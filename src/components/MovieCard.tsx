import { useNavigate } from "react-router-dom";
import slugify from "slugify";

export const MovieCard = (props: any) => {
  const nav = useNavigate();
  const handleClick = () => {
    if (props.title) {
      nav(
        `/movies/${props.id}/${slugify(props.title, {
          replacement: "-",
          remove: /:/,
          lower: true,
        })}`
      );
    } else {
      nav(
        `/tvshows/${props.id}/${slugify(props.name, {
          replacement: "-",
          remove: /:/,
          lower: true,
        })}`
      );
    }
  };
  return (
    <div
      className='h-auto w-full max-w-xs'
      onClick={handleClick}
    >
      <div className='relative overflow-hidden rounded-lg bg-background'>
        <div className=''>
          <img
            src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
            alt=''
            className='h-full w-full object-cover'
          />
        </div>
        <div className='absolute bottom-0 z-10 h-20 w-full bg-movieCardGradient md:bg-none p-4 md:static'>
          <h3 className='text-xs md:text-base font-bold'>{props.title}</h3>
          {/* <p className='text-sm'>{props.release_date}</p> */}
        </div>
      </div>
    </div>
  );
};
