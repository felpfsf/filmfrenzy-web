"use client";
import { Trailer } from "@/types/MediaModels";
import { PlayCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import * as Dialog from "@radix-ui/react-dialog";
import dynamic from "next/dynamic";

const DialogTrigger = ({ officialTrailer }: { officialTrailer: Trailer }) => {
  const ReactPlayer = dynamic(() => import("react-player/lazy"), {
    ssr: false,
  });
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className='flex w-fit items-center gap-2'>
          <PlayCircleIcon className='h-6 w-6' />
          <p>Trailer</p>
        </button>
      </Dialog.Trigger>
      {/* <DialogModal /> */}
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 z-10 bg-body/60 blur-3xl data-[state=open]:animate-overlayShown' />
        <Dialog.Content className='fixed left-1/2 top-1/2 z-10 aspect-video w-full max-w-3xl translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-lg border data-[state=open]:animate-modalShown'>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${officialTrailer.key}`}
            controls
            width='100%'
            height='100%'
          />{" "}
          <Dialog.Close asChild>
            <button className='absolute -top-6 right-0' aria-label='Fechar'>
              <XMarkIcon className='h-6 w-6' />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogTrigger;
