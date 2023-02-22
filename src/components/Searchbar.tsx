import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Searchbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!query) return navigate("/");
    navigate(`/search/?q=${query}`);
    setQuery("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <form className='relative' onSubmit={handleSubmit}>
        <input
          className='border-b border-b-neutral-200 bg-transparent px-2 placeholder-neutral-300 placeholder:italic'
          type='text'
          placeholder='Search title here'
          aria-placeholder='Search title here'
          aria-label='Search for Movies and TV shows by title'
          aria-describedby='Search'
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
