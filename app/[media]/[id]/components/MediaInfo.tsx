import { Credits, MediaDetails } from "@/types/MediaModels";
import { convertMinutesToHours } from "@/utils/convertMinutesToHours";
import { formatDate } from "@/utils/formatDate";
import React from "react";

interface Props {
  details: MediaDetails;
  directors: Credits[];
  writers: Credits[];
}

const MediaInfo = ({ details, directors, writers }: Props) => {
  return (
    <div className='mt-6 grid min-w-0 max-w-full grid-cols-3 gap-2 text-sm'>
      <div>
        <h2>Estado:</h2>
        <p className='text-gray-400'>{details.status}</p>
      </div>
      <div>
        <h2>Lançamento:</h2>
        <p className='text-gray-400'>
          {formatDate(details.first_air_date! || details.release_date!)}
        </p>
      </div>
      <div>
        <h2>Duração:</h2>
        <p className='text-gray-400'>
          {convertMinutesToHours(details.runtime! || details.episode_run_time!)}
        </p>
      </div>
      {/* Second row */}
      <div className='col-span-3 grid grid-flow-col grid-cols-[auto,1fr] gap-2 border-t border-gray-700 pt-2'>
        <h2>Diretor:</h2>
        <div className='flex flex-wrap'>
          {directors.map((director, index) => (
            <React.Fragment key={director.id}>
              <p className='break-words text-gray-400'>{director.name}</p>
              {index !== directors.length - 1 && (
                <span className='pr-1 text-gray-400'>, </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className='col-span-3 grid grid-flow-col grid-cols-[auto,1fr] gap-2 border-t border-gray-700 pt-2'>
        <h2>Roteiristas:</h2>
        <div className='flex flex-wrap'>
          {writers.map((writer, index) => (
            <React.Fragment key={writer.id}>
              <p className='break-words text-gray-400'>{writer.name}</p>
              {index !== writers.length - 1 && (
                <span className='pr-1 text-gray-400'>,</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default MediaInfo;
