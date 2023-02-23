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
    <div className='max-w-40 inline-block h-64 p-4' onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/original/${props.backdrop_path}`}
        alt=''
        className='h-full max-h-52 w-full rounded-lg object-cover'
      />
      <p className='py-1.5 line-clamp-2'>{props.title}</p>
    </div>
  );
};
