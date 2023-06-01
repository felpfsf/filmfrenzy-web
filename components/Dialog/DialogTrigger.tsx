"use client";
import { Trailer } from "@/types/MediaModels";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import * as Dialog from "@radix-ui/react-dialog";
import DialogModal from "./DialogModal";

const DialogTrigger = ({ officialTrailer }: { officialTrailer: Trailer }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className='flex w-fit items-center gap-2'>
          <PlayCircleIcon className='h-6 w-6' />
          <p>Trailer</p>
        </button>
      </Dialog.Trigger>
      <DialogModal videoKey={officialTrailer.key} />
    </Dialog.Root>
  );
};

export default DialogTrigger;
