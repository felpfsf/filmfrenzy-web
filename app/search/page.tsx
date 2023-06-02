import MediaSlider from "@/components/MediaSlider";
import { MediaDetails } from "@/types/MediaModels";

const fetchSearch = async (query: string) => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const language = "pt-BR";
  const pageCount = 1;

  const REVALIDATE_TIME = 60 * 60 * 1; //1 hora
  const SHUFFLE_THRESHOLD = 0.5;
  const RANDOM_HERO_MEDIA_COUNT = 20;
  // /search/multi?

  const searchUrl = `${baseUrl}/search/multi?api_key=${apiKey}&language=${language}&page=${pageCount}&include_adult=false&query=${query}`;

  try {
    const searchedMediaResponse = await fetch(searchUrl, {
      next: { revalidate: REVALIDATE_TIME },
    });
    if (!searchedMediaResponse.ok) {
      throw new Error("Falha ao carregar os dados");
    }

    const searchResult: MediaDetails[] = (await searchedMediaResponse.json())
      .results;

    const moviesResult = searchResult.filter(
      (item) => item.media_type === "movie"
    );
    const tvsResult = searchResult.filter((item) => item.media_type === "tv");

    return { moviesResult, tvsResult };
  } catch (error) {
    console.error(error);
  }
};

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
