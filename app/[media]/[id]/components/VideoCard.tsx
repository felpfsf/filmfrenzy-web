import ReactPlayer from "react-player/lazy";
interface VideoCardProps {
  videoKey: string;
  videoName: string;
}
const VideoCard = ({ videoKey, videoName }: VideoCardProps) => {
  return (
    <div className='flex max-w-xs flex-col overflow-hidden rounded-lg'>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoKey}`}
        controls
        width='100%'
        height='100%'
      />
      <p className='mt-2 text-center text-xs leading-none text-gray-400'>
        {videoName}
      </p>
    </div>
  );
};

export default VideoCard;
