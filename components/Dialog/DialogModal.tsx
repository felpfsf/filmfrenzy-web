"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import * as Dialog from "@radix-ui/react-dialog";

const DialogModal = () => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className='fixed inset-0 z-10 bg-body/60 blur-3xl data-[state=open]:animate-overlayShown' />
      <Dialog.Content className='fixed left-1/2 top-1/2 z-10 aspect-video w-full max-w-3xl translate-x-[-50%] translate-y-[-50%] bg-red-500 data-[state=open]:animate-modalShown'>
        Video aqui
        <Dialog.Close asChild>
          <button className='absolute -top-6 right-0' aria-label='Fechar'>
            <XMarkIcon className="w-6 h-6" />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default DialogModal;
