import DialogTrigger from "@/components/Dialog/DialogTrigger";
import MediaPoster from "@/components/MediaPoster";
import MediaTitle from "@/components/MediaTitle";
import { Credits, MediaDetails, Trailer } from "@/types/MediaModels";
import { getMediaDetails } from "@/utils/getMediaDetails";
import { getYearReleaseDate } from "@/utils/getYearReleaseDate";
import { StarIcon } from "@heroicons/react/24/outline";
import BackdropImage from "./components/BackdropImage";
import Caption from "./components/Caption";
import CastSlider from "./components/CastSlider";
import MediaInfo from "./components/MediaInfo";
import Overview from "./components/Overview";
import VideosSlider from "./components/VideosSlider";

interface Props {
  details: MediaDetails;
  cast: Credits[];
  directors: Credits[];
  writers: Credits[];
  videos: Trailer[];
  officialTrailer: Trailer[];
}

const Media = async ({
  params: { id, media },
}: {
  params: { id: number; media: string };
}) => {
  const data = (await getMediaDetails(id, media)) as Props;
  const { cast, details, directors, writers, officialTrailer, videos } = data;
  const title = details.title || details.name;
  const releaseDate = getYearReleaseDate(
    details.first_air_date! || details.release_date!
  );

  return (
    <div className='mx-auto w-full max-w-screen-xl px-4 py-24'>
      <BackdropImage backdropPath={details.backdrop_path} title={title} />
      <div className='flex flex-col lg:flex-row lg:gap-8'>
        <MediaPoster posterPath={details.poster_path} title={title} />
        <div className='mt-8 flex flex-col gap-2'>
          <MediaTitle
            releaseDate={releaseDate}
            title={title}
            tagline={details.tagline}
            className='text-left text-2xl'
          />
          <div className='mt-4 flex flex-wrap gap-2'>
            {details.genres.map(({ id, name }) => (
              <Caption key={id} name={name} />
            ))}
          </div>
          {/* Votes and Trailer modal */}
          <div className='mt-6 grid grid-flow-col grid-cols-[auto,1fr] gap-8'>
            <div className='flex items-center gap-2'>
              <StarIcon className='h-6 w-6' />
              <p>{details.vote_average}</p>
            </div>
            {officialTrailer.length > 0 && (
              <DialogTrigger officialTrailer={officialTrailer[0]} />
            )}
          </div>
          <Overview overview={details.overview} />
          <MediaInfo
            details={details}
            directors={directors}
            writers={writers}
          />
        </div>
      </div>
      <div className='mt-6 flex flex-col gap-6'>
        <h1>Elenco</h1>
        {cast.length > 0 ? (
          <CastSlider cast={cast} />
        ) : (
          <p className='self-center text-sm text-gray-400 lg:self-start'>
            Não há informações sobre elenco :(
          </p>
        )}
      </div>
      {/* Trailer */}
      <div className='mt-6 flex flex-col gap-6'>
        <h1>Trailers</h1>
        {videos.length > 0 ? (
          <VideosSlider videos={videos} />
        ) : (
          <p className='self-center text-sm text-gray-400 lg:self-start'>
            Não há informações sobre trailers :(
          </p>
        )}
      </div>
    </div>
  );
};

export default Media;
