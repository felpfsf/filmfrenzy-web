import { Cast } from "../types";

export const CastCard = ({ name, profile_path }: Cast) => {
  return (
    <div className='relative h-56 w-40 overflow-hidden bg-slate-400 md:rounded-xl'>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/original/${profile_path}`
            : `https://dummyimage.com/2000x3000/000/fff.png&text=Placeholder+of+${name}`
        }
        alt={`Image+Placeholder+of+${name}`}
      />
      <p className='absolute bottom-0 flex h-12 w-full items-center bg-posterGradient px-2 text-paragraph'>
        {name}
      </p>
    </div>
  );
};
