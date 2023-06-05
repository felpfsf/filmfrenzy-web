import MediaSlider from "@/components/MediaSlider";
import { fetchSearch } from "@/utils/fetchSearchedMedia";

const Search = async ({
  searchParams: { q },
}: {
  searchParams: { q: string };
}) => {
  const data = await fetchSearch(q);
  return (
    <main className='mx-auto w-full max-w-screen-xl px-4 py-24'>
      <p>
        Resultados para{" "}
        <em className='underline underline-offset-2'>&quot;{q}&quot;</em>
      </p>
      <section>
        <h1>Filmes</h1>
        {data?.moviesResult && <MediaSlider media={data.moviesResult} />}
      </section>
      <section>
        <h1>Séries</h1>
        {data?.tvsResult && <MediaSlider media={data.tvsResult} />}
      </section>
    </main>
  );
};

export default Search;
