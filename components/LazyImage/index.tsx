"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

interface ImageProps {
  image: {
    alt: string | "";
    src: string;
    width: number;
    height: number;
  };
}

const LazyImage = ({ image }: ImageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <Image
      alt={image.alt}
      src={image.src}
      width={image.width}
      height={image.height}
      className={clsx(
        "h-full w-full object-cover duration-700 ease-in-out",
        { "scale-110 blur-2xl grayscale": isLoading },
        { "scale-100 blur-0 grayscale-0": !isLoading }
      )}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
};

export default LazyImage;
