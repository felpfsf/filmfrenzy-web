import { useSwiper } from "swiper/react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

const SwiperPrevButton = () => {
  const swiper = useSwiper();
  return (
    <button
      className='z-10 flex h-full w-14 items-center justify-center bg-gradient-to-r from-[#111]/95  to-transparent/5  focus:ring-2'
      aria-labelledby='Go back to previous slide'
      onClick={() => swiper.slidePrev()}
    >
      <RxCaretLeft size={48} />
    </button>
  );
};

const SwiperNextButton = () => {
  const swiper = useSwiper();
  return (
    <button
      className='z-10 flex h-full w-14 items-center justify-center bg-gradient-to-l from-[#111]/95  to-transparent/5 focus:ring-2'
      aria-labelledby='Go foward to next slide'
      onClick={() => swiper.slideNext()}
    >
      <RxCaretRight size={48} />
    </button>
  );
};

export const SwiperButtons = () => {
  return (
    <div className='absolute top-0 flex h-full w-full items-center justify-between opacity-0 group-hover:opacity-100'>
      <SwiperPrevButton />
      <SwiperNextButton />
    </div>
  );
};
