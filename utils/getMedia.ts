import { MediaDetails } from "@/types/MediaModels";

const fetchJSON = async (url: RequestInfo | URL) => {
  const response = await fetch(url, { next: { revalidate: 60 * 60 * 1 } });
  if (!response.ok) {
    throw new Error("Falha ao carregar dados");
  }
  return response.json();
};

const fetchPopularMovies = async (
  apiKey: string,
  baseUrl: string,
  language: string,
  pageCount: number
) => {
  const url = `${baseUrl}/movie/popular?api_key=${apiKey}&page=${pageCount}&language=${language}`;
  return fetchJSON(url);
};
const fetchTrendingMovies = async (
  apiKey: string,
  baseUrl: string,
  language: string,
  pageCount: number
) => {
  const url = `${baseUrl}/trending/movie/week?api_key=${apiKey}&page=${pageCount}&language=${language}`;
  return fetchJSON(url);
};
const fetchTopRatedMovies = async (
  apiKey: string,
  baseUrl: string,
  language: string,
  pageCount: number
) => {
  const url = `${baseUrl}/movie/top_rated?api_key=${apiKey}&page=${pageCount}&language=${language}`;
  return fetchJSON(url);
};
const fetchUpcommingMovies = async (
  apiKey: string,
  baseUrl: string,
  language: string,
  pageCount: number
) => {
  const url = `${baseUrl}/movie/upcoming?api_key=${apiKey}&page=${pageCount}&language=${language}`;
  return fetchJSON(url);
};

const fetchPopularShows = async (
  apiKey: string,
  baseUrl: string,
  language: string,
  pageCount: number
) => {
  const url = `${baseUrl}/tv/popular?api_key=${apiKey}&page=${pageCount}&language=${language}`;
  return fetchJSON(url);
};
const fetchTrendingShows = async (
  apiKey: string,
  baseUrl: string,
  language: string,
  pageCount: number
) => {
  const url = `${baseUrl}/trending/tv/week?api_key=${apiKey}&page=${pageCount}&language=${language}`;
  return fetchJSON(url);
};
const fetchTopRatedShows = async (
  apiKey: string,
  baseUrl: string,
  language: string,
  pageCount: number
) => {
  const url = `${baseUrl}/tv/top_rated?api_key=${apiKey}&page=${pageCount}&language=${language}`;
  return fetchJSON(url);
};

export const getMedia = async () => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const language = "pt-BR";
  const pageCount = 1;
  const RANDOM_MEDIA_COUNT = 20;

  if (!apiKey) {
    throw new Error("Chave de API necessária");
  }
  if (!baseUrl) {
    throw new Error("URL da API não está especificada");
  }

  try {
    const [
      moviePopularResponse,
      moviesTrendingResponse,
      moviesTopResponse,
      moviesUpcommingResponse,
      tvPopularResponse,
      tvTrendingResponse,
      tvTopReponse,
    ] = await Promise.all([
      fetchPopularMovies(apiKey, baseUrl, language, pageCount),
      fetchTrendingMovies(apiKey, baseUrl, language, pageCount),
      fetchTopRatedMovies(apiKey, baseUrl, language, pageCount),
      fetchUpcommingMovies(apiKey, baseUrl, language, pageCount),
      fetchPopularShows(apiKey, baseUrl, language, pageCount),
      fetchTrendingShows(apiKey, baseUrl, language, pageCount),
      fetchTopRatedShows(apiKey, baseUrl, language, pageCount),
    ]);

    const popularMovies: MediaDetails[] = moviePopularResponse.results;
    const trendingMovies: MediaDetails[] = moviesTrendingResponse.results;
    const topMovies: MediaDetails[] = moviesTopResponse.results;
    const upcomingMovies: MediaDetails[] = moviesUpcommingResponse.results;
    const popularShows: MediaDetails[] = tvPopularResponse.results;
    const trendingShows: MediaDetails[] = tvTrendingResponse.results;
    const topShows: MediaDetails[] = tvTopReponse.results;

    const shuffledMedia = [...popularMovies, ...popularShows]
      .filter((media) => media.backdrop_path)
      .slice()
      .sort(() => 0.5 - Math.random());
    const randomHeroMedia: MediaDetails[] = shuffledMedia.slice(
      0,
      RANDOM_MEDIA_COUNT
    );

    return {
      popularMovies,
      trendingMovies,
      topMovies,
      upcomingMovies,
      popularShows,
      trendingShows,
      topShows,
      randomHeroMedia,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Falha ao carregar dados");
  }
};
