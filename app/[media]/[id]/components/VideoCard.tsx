import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
  loading: () => (
    <div className='flex h-full w-full animate-pulse items-center justify-center self-center overflow-hidden rounded-lg bg-slate-300'>
      <p className='text-sm font-semibold text-red-500'>Carregando...</p>
    </div>
  ),
});
interface VideoCardProps {
  videoKey: string;
  videoName: string;
}
const VideoCard = ({ videoKey, videoName }: VideoCardProps) => {
  return (
    <div className='flex aspect-video max-w-xs flex-col overflow-hidden rounded-lg'>
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
