import { DefaultUi, Player, Youtube } from "@vime/react";
import "@vime/core/themes/default.css";
import { Trailer } from "../../types";

interface TrailerCardProps {
  trailer_key: string;
}

export const TrailerCard = ({ trailer_key }: TrailerCardProps) => {
  console.log("TrailerCard Component ->", trailer_key);
  return (
    // <Player>
    //   <Youtube videoId={trailer_key} />
    //   <DefaultUi />
    // </Player>
    <div className='aspect-2'>
      <iframe
        width='100%'
        height='100%'
        src={`https://www.youtube.com/embed/${trailer_key}`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      ></iframe>
    </div>
  );
};
