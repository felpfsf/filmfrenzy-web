import Image from "next/image";
const posterBaseUrl = process.env.NEXT_PUBLIC_POSTER_URL;

const BackdropImage = ({
  backdropPath,
  title,
}: {
  backdropPath: string;
  title: string;
}) => {
  const posterUrl = `${posterBaseUrl}/${backdropPath}`;
  const dummyPosterUrl = "/no-poster.png";
  return (
    <>
      <Image
        src={backdropPath ? posterUrl : dummyPosterUrl}
        alt={""}
        fill
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mP8dtatnoEIwDiqkL4KASH/GVugFkABAAAAAElFTkSuQmCC'
        placeholder='blur'
        className='absolute left-0 top-0 -z-10 object-cover opacity-20'
      />
      <div className='absolute inset-0 -z-10 w-full bg-gradient-poster' />
    </>
  );
};

export default BackdropImage;
