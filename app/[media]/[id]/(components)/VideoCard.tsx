import DialogModal from "@/components/Dialog/DialogModal";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";

interface VideoCardProps {
  videoKey: string;
  videoName: string;
}
const VideoCard = ({ videoKey, videoName }: VideoCardProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className='group relative flex aspect-video max-w-xs cursor-pointer flex-col overflow-hidden rounded-lg duration-700 ease-in-out hover:opacity-75'>
          <Image
            src={`https://img.youtube.com/vi/${videoKey}/mqdefault.jpg`}
            alt={""}
            width={290}
            height={163}
          />
          <p className='mt-2 text-center text-xs leading-none text-gray-400'>
            {videoName}
          </p>
          <button className='absolute left-1/2 top-1/2 flex w-fit -translate-x-1/2 -translate-y-1/2 items-center gap-2 text-accent-hover duration-200 ease-in-out group-hover:text-accent-caption'>
            <PlayCircleIcon className='w-h-14 h-14' />
          </button>
        </div>
      </Dialog.Trigger>
      <DialogModal videoKey={videoKey} />
    </Dialog.Root>
  );
};

export default VideoCard;
