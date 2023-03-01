import { DefaultUi, Player, Youtube } from "@vime/react";
import "@vime/core/themes/default.css";

interface TrailerCardProps {
  trailer_key: string;
}

export const TrailerCard = ({ trailer_key }: TrailerCardProps) => {
  return (
    <Player>
      <Youtube videoId={trailer_key} />
      <DefaultUi />
    </Player>
  );
};
