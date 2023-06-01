import { MediaDetails } from "@/types/MediaModels";

interface MediaRespose {
  results: MediaDetails[];
}

export const getMedia = async () => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const language = "pt-BR";
  const pageCount = 1;

  const REVALIDATE_TIME = 60 * 60 * 1; //1 hora
  const SHUFFLE_THRESHOLD = 0.5;
  const RANDOM_HERO_MEDIA_COUNT = 20;

  const moviesPopUrl = `${baseUrl}/movie/popular?api_key=${apiKey}&page=${pageCount}&language=${language}`;
  const tvPopUrl = `${baseUrl}/tv/popular?api_key=${apiKey}&page=${pageCount}&language=${language}`;

  try {
    const [moviePopularResponse, tvPopularResponse] = await Promise.all([
      fetch(moviesPopUrl, { next: { revalidate: REVALIDATE_TIME } }),
      fetch(tvPopUrl, { next: { revalidate: REVALIDATE_TIME } }),
    ]);

    if (!moviePopularResponse.ok || !tvPopularResponse.ok) {
      throw new Error("Falha ao carregar dados");
    }

    const popularMovies: MediaDetails[] = (await moviePopularResponse.json())
      .results;
    const popularShows: MediaDetails[] = (await tvPopularResponse.json())
      .results;

    const shuffledMedia = [...popularMovies, ...popularShows]
      .filter((media) => media.backdrop_path)
      .slice()
      .sort(() => SHUFFLE_THRESHOLD - Math.random());
    const randomHeroMedia: MediaDetails[] = shuffledMedia.slice(
      0,
      RANDOM_HERO_MEDIA_COUNT
    );

    return { popularMovies, popularShows, randomHeroMedia };
  } catch (error) {
    console.error(error);
  }
};
