"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import * as Dialog from "@radix-ui/react-dialog";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
  loading: () => (
    <div className='fixed left-1/2 top-1/2 z-10 flex h-32 w-32 translate-x-[-50%] translate-y-[-50%] animate-pulse items-center justify-center overflow-hidden rounded-full bg-slate-600'>
      <p className='text-sm font-semibold text-red-500'>Carregando...</p>
    </div>
  ),
});

const DialogModal = ({ videoKey }: { videoKey: string }) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className='fixed inset-0 z-10 bg-body/60 blur-3xl data-[state=open]:animate-overlayShown' />
      <Dialog.Content className='fixed left-1/2 top-1/2 z-10 aspect-video w-full max-w-3xl translate-x-[-50%] translate-y-[-50%] data-[state=open]:animate-modalShown'>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoKey}`}
          controls
          width='100%'
          height='100%'
        />
        <Dialog.Close asChild>
          <button className='absolute -top-6 right-0' aria-label='Fechar'>
            <XMarkIcon className='h-6 w-6' />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default DialogModal;
