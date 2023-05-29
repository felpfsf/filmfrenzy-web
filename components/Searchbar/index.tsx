"use client";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useRef, useState } from "react";

const Searchbar = () => {
  const [showSearchbar, setShowSearchbar] = useState<boolean>(true);
  const toggleSearchbar = () => {
    setShowSearchbar((prev) => !prev);
  };

  // Input handling - separar o componente depois
  const [query, setQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    console.log(query);
  };
  const handleClearInput = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <>
      <button onClick={toggleSearchbar}>
        <MagnifyingGlassIcon className='h-6 w-6' />
      </button>
      <div
        className={`fixed left-0 flex max-h-screen w-full bg-red-500 ${
          showSearchbar ? "top-[68px] animate-contentShown" : "-top-full"
        }`}
      >
        <form className='flex w-full items-center justify-center border'>
          <label className='relative flex w-full items-center justify-center'>
            <input
              type='text'
              placeholder='Busque por seus filmes e séries'
              aria-label='Busque por seus filmes e séries'
              className='h-12 w-full px-6 text-xs text-primary outline-none'
              ref={inputRef}
              value={query}
              onChange={(e) => handleInputChange(e)}
            />
            <button
              type='button'
              title='Limpar campo de pesquisa'
              aria-label='Limpar campo de pesquisa'
              className='absolute right-2 top-3'
              onClick={handleClearInput}
            >
              <XMarkIcon className='h-6 w-6 text-primary' />
            </button>
          </label>
        </form>
      </div>
    </>
  );
};

export default Searchbar;
