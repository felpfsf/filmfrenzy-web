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
        <p className='self-center text-sm text-gray-400 lg:self-start lg:text-xl'>
          Não há informações disponíveis:(
        </p>
      )}
    </section>
  );
};

export default MediaSection;
