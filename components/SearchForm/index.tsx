"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

type Variants = "desktop" | "mobile";

interface SearchFormProps {
  variant: Variants;
  toggleSearchbar?: () => void;
}

const SearchForm = ({
  toggleSearchbar = () => {},
  variant,
}: SearchFormProps) => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClearInput = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    console.log(query);
  };

  const handleSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;

    router.push(`/search?q=${encodeURIComponent(query)}`);
    toggleSearchbar();
    setQuery("");
  };

  return (
    <form
      onSubmit={handleSubmitSearch}
      className={clsx(
        "flex w-full items-center justify-center",
        {
          "hidden flex-1 self-center lg:flex": variant === "desktop",
        },
        { "flex border lg:hidden": variant === "mobile" }
      )}
    >
      <label className='relative flex w-full items-center justify-center lg:max-w-xs'>
        <input
          type='text'
          placeholder='Busque por seus filmes e séries'
          aria-label='Busque por seus filmes e séries e aperte enter para iniciar a pesquisa'
          ref={inputRef}
          value={query}
          onChange={(e) => handleInputChange(e)}
          className={clsx(
            "w-full px-6 text-xs text-primary outline-none",
            { "hidden h-7 rounded-lg lg:inline-block": variant === "desktop" },
            { "h-12 lg:hidden": variant === "mobile" }
          )}
        />
        <button
          type='button'
          title='Limpar campo de pesquisa'
          aria-label='Limpar campo de pesquisa'
          className={clsx(
            "absolute leading-none",
            { "right-2 top-3": variant === "mobile" },
            { "right-2 top-0": variant === "desktop" }
          )}
          onClick={handleClearInput}
        >
          <XMarkIcon className='h-6 w-6 text-primary' />
        </button>
      </label>
    </form>
  );
};

export default SearchForm;
