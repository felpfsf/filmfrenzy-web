import clsx from "clsx";

interface TitleProps {
  releaseDate: number;
  title: string;
  tagline?: string;
  className?: string;
}

const MediaTitle = ({ releaseDate, title, className, tagline }: TitleProps) => {
  const style = clsx("flex gap-1", className);

  return (
    <div>
      <h1 className={style}>
        {title} ({releaseDate})
      </h1>
      <h6 className='italic text-gray-400'>{tagline}</h6>
    </div>
  );
};

export default MediaTitle;
