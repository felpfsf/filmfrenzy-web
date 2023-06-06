import { Credits, MediaDetails, Trailer } from "@/types/MediaModels";

const fetchJSON = async (url: RequestInfo | URL) => {
  const response = await fetch(url, { next: { revalidate: 60 * 60 * 1 } });
  if (!response.ok) throw new Error("Falha ao carregar os dados");
  return response.json();
};

const fetchDetails = async (
  apiKey: string,
  baseUrl: string,
  id: number,
  language: string,
  mediaType: string
) => {
  const url = `${baseUrl}/${mediaType}/${id}?api_key=${apiKey}&language=${language}`;
  return fetchJSON(url);
};

const fetchCredits = async (
  apiKey: string,
  baseUrl: string,
  id: number,
  language: string,
  mediaType: string
) => {
  const url = `${baseUrl}/${mediaType}/${id}/credits?api_key=${apiKey}&language=${language}`;
  return fetchJSON(url);
};

const fetchVideos = async (
  apiKey: string,
  baseUrl: string,
  id: number,
  language: string,
  mediaType: string
) => {
  const url = `${baseUrl}/${mediaType}/${id}/videos?api_key=${apiKey}&language=${language}`;
  console.log(url);

  return fetchJSON(url);
};

const fetchRecommended = async (
  apiKey: string,
  baseUrl: string,
  id: number,
  language: string,
  mediaType: string
) => {
  const url = `${baseUrl}/${mediaType}/${id}/recommendations?api_key=${apiKey}&language=${language}&page=1`;
  return fetchJSON(url);
};

const fetchSimilar = async (
  apiKey: string,
  baseUrl: string,
  id: number,
  language: string,
  mediaType: string
) => {
  const url = `${baseUrl}/${mediaType}/${id}/similar?api_key=${apiKey}&language=${language}&page=1`;
  return fetchJSON(url);
};

export const getMediaDetails = async (id: number, mediaType: string) => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const language = "pt-BR";

  if (!apiKey) throw new Error("Chave de API necessária");

  if (!baseUrl) throw new Error("URL da API não está especificada");

  try {
    const [
      detailsResponse,
      creditsResponse,
      videoResponse,
      recommendationsResponse,
      similarResponse,
    ] = await Promise.all([
      fetchDetails(apiKey, baseUrl, id, language, mediaType),
      fetchCredits(apiKey, baseUrl, id, language, mediaType),
      fetchVideos(apiKey, baseUrl, id, language, mediaType),
      fetchRecommended(apiKey, baseUrl, id, language, mediaType),
      fetchSimilar(apiKey, baseUrl, id, language, mediaType),
    ]);

    const details: MediaDetails = detailsResponse;
    const creditsData = creditsResponse;
    const videoData: Trailer[] = videoResponse.results;
    const recommendedMedia: MediaDetails[] = recommendationsResponse.results;
    const similarMedia: MediaDetails[] = similarResponse.results;

    const crew: Credits[] = creditsData.crew;
    const cast: Credits[] = creditsData.cast;

    const directors = crew.filter(({ job }) => job === "Director");
    const writers = crew.filter(
      ({ job }) => job === "Story" || job === "Screenplay" || job === "Writer"
    );
    const officialTrailer = videoData.filter(({ type }) => type === "Trailer");

    return {
      cast,
      details,
      directors,
      writers,
      videos: videoData,
      officialTrailer,
      recommendedMedia,
      similarMedia,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Falha ao carregar dados");
  }
};
