import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

interface SearchbarProps {
  onSearchSubmitted?: () => void;
}

export const Searchbar = ({ onSearchSubmitted }: SearchbarProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/search/?q=${query}`);
    setQuery("");
    // Fecha o menu depois de clicar em pesquisar
    if (onSearchSubmitted) {
      onSearchSubmitted();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <form className='relative' onSubmit={handleSubmit}>
        <input
          className='border-b border-b-neutral-200 bg-transparent px-2 placeholder-neutral-300 placeholder:italic placeholder:text-sm'
          type='text'
          placeholder='Pesquise pelo nome aqui'
          aria-placeholder='Pesquise pelo nome aqui'
          aria-label='Pesquise filmes e séries pelo título'
          aria-describedby='Pequisa'
          onChange={(e) => handleChange(e)}
          value={query}
        />
        <button className='absolute top-1 right-2'>
          <HiOutlineMagnifyingGlass />
        </button>
      </form>
    </div>
  );
};
