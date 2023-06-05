import MediaSlider from "@/components/MediaSlider";
import { fetchSearch } from "@/utils/fetchSearchedMedia";

const Search = async ({
  searchParams: { q },
}: {
  searchParams: { q: string };
}) => {
  const data = await fetchSearch(q);
  return (
    <main className='mx-auto flex w-full max-w-screen-xl flex-col gap-8 px-4 pt-24'>
      <p>
        Resultados para{" "}
        <em className='underline underline-offset-2'>&quot;{q}&quot;</em>
      </p>
      <section className='container mx-auto flex flex-col gap-6'>
        <h1 className='text-left text-2xl font-semibold capitalize'>Filmes</h1>
        {data?.moviesResult && <MediaSlider media={data.moviesResult} />}
      </section>
      <section className='container mx-auto flex flex-col gap-6'>
        <h1 className='text-left text-2xl font-semibold capitalize'>Séries</h1>
        {data?.tvsResult && <MediaSlider media={data.tvsResult} />}
      </section>
    </main>
  );
};

export default Search;
