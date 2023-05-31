import LazyImage from "@/components/LazyImage";
import { Credits } from "@/types/MediaModels";

const CastCard = ({ character, name, profile_path }: Credits) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='h-32 w-32 overflow-hidden rounded-full'>
        {/* <Image
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/original/${profile_path}`
              : `https://dummyimage.com/2000x3000/000/fff.png&text=Foto+de+${name}`
          }
          alt={""}
          width={125}
          height={125}
          className='h-full w-full object-cover'
        /> */}
        <LazyImage
          image={{
            alt: `Poster de ${name}`,
            src: profile_path
              ? `https://image.tmdb.org/t/p/original/${profile_path}`
              : `https://dummyimage.com/2000x3000/000/fff.png&text=Foto+de+${name}`,
            width: 125,
            height: 125,
          }}
        />
      </div>
      <div>
        <p className='mt-2 text-center text-sm leading-none'>{name}</p>
        <p className='mt-2 text-center text-xs leading-none text-gray-400'>
          {character}
        </p>
      </div>
    </div>
  );
};

export default CastCard;
