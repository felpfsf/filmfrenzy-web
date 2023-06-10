import { MediaDetails } from "@/types/MediaModels";

export const fetchSearch = async (query: string) => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
  const language = "pt-BR";
  const pageCount = 1;

  const REVALIDATE_TIME = 60 * 60 * 1; //1 hora
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
    throw new Error("Falha ao carregar os dados");
  }
};
