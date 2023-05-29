import { Credits } from "@/types/MediaModels";
import Image from "next/image";

const CastCard = ({ character, name, profile_path }: Credits) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="w-32 h-32 overflow-hidden rounded-full">
        <Image
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/original/${profile_path}`
              : `https://dummyimage.com/2000x3000/000/fff.png&text=Foto+de+${name}`
          }
          alt={""}
          width={125}
          height={125}
          className='h-full w-full object-cover'
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
