import MediaSection from "@/components/MediaSection";
import MediaSlider from "@/components/MediaSlider";
import { fetchSearch } from "@/utils/fetchSearchedMedia";

const Search = async ({
  searchParams: { q },
}: {
  searchParams: { q: string };
}) => {
  const data = await fetchSearch(q);
  return (
    <main className='mx-auto flex w-full max-w-screen-xl flex-col px-4 pt-24'>
      <p>
        Resultados para{" "}
        <em className='underline underline-offset-2'>&quot;{q}&quot;</em>
      </p>
      <MediaSection
        title={"Filmes"}
        content={
          data?.moviesResult &&
          data?.moviesResult.length > 0 && (
            <MediaSlider media={data.moviesResult} />
          )
        }
      />
      <MediaSection
        title={"Séries"}
        content={
          data?.tvsResult &&
          data?.tvsResult.length > 0 && <MediaSlider media={data.tvsResult} />
        }
      />
    </main>
  );
};

export default Search;
