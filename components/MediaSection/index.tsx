import Image from "next/image";
import { ReactNode } from "react";

interface SectionProps {
  title: string;
  content: ReactNode;
}

const MediaSection = ({ content, title }: SectionProps) => {
  return (
    <section className='mt-8 flex flex-col gap-6 lg:mt-16'>
      <h1 className='text-lg font-semibold lg:text-2xl'>{title}</h1>
      {content ? (
        content
      ) : (
        <div className='flex items-center w-full justify-center lg:justify-start'>
          <Image src="/no-results.png" alt="" width={96} height={96} className="w-24 h-24"/>
          <p className='self-center text-sm text-gray-400 lg:text-xl'>
            Não há informações de mídia disponíveis:(
          </p>
        </div>
      )}
    </section>
  );
};

export default MediaSection;
