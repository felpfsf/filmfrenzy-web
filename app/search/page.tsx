const Search = ({ searchParams: { q } }: { searchParams: { q: string } }) => {
  return (
    <div className='mx-auto w-full max-w-screen-xl px-4 py-24'>
      <p>
        Resultados para{" "}
        <em className='underline underline-offset-2'>&quot;{q}&quot;</em>
      </p>
    </div>
  );
};

export default Search;
