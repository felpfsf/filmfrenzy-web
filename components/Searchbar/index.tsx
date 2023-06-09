"use client";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import SearchForm from "../SearchForm";
import { useNavigationEvent } from "@/hooks/useNavigationEvent";

const Searchbar = () => {
  const searchbarRef = useRef<HTMLDivElement | null>(null);
  const [showSearchbar, setShowSearchbar] = useState<boolean>(false);

  const toggleSearchbar = () => {
    setShowSearchbar((prev) => !prev);
  };
  useOutsideClick(searchbarRef, () => {
    setShowSearchbar(false);
  });

  useNavigationEvent(setShowSearchbar)

  return (
    <>
      <button onClick={toggleSearchbar}>
        <MagnifyingGlassIcon className='h-6 w-6' />
      </button>
      <div
        ref={searchbarRef}
        className={`fixed left-0 flex max-h-screen w-full ${
          showSearchbar ? "top-[68px] animate-contentShown" : "-top-full"
        }`}
      >
        {/* Search Form */}
        <SearchForm variant={"mobile"} toggleSearchbar={toggleSearchbar} />
      </div>
    </>
  );
};

export default Searchbar;
