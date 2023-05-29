import { Credits, MediaDetails, Trailer } from "@/types/MediaModels";

export const getMediaDetails = async (id: number, mediaType: string) => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const language = "pt-BR";
  const REVALIDATE_TIME = 60 * 60 * 1; //1 hora

  const detailsUrl = `${baseUrl}/${mediaType}/${id}?api_key=${apiKey}&language=${language}`;

  const creditsUrl = `${baseUrl}/${mediaType}/${id}/credits?api_key=${apiKey}&language=${language}`;

  const videoUrl = `${baseUrl}/${mediaType}/${id}/videos?api_key=${apiKey}&language=${language}`;

  try {
    const [detailsResponse, creditsResponse, videoResponse] = await Promise.all(
      [
        fetch(detailsUrl, { next: { revalidate: REVALIDATE_TIME } }),
        fetch(creditsUrl, { next: { revalidate: REVALIDATE_TIME } }),
        fetch(videoUrl, { next: { revalidate: REVALIDATE_TIME } }),
      ]
    );

    if (!detailsResponse.ok || !creditsResponse.ok || !videoResponse.ok) {
      throw new Error("Falha ao carregar os dados");
    }

    const details: MediaDetails = await detailsResponse.json();
    const creditsData = await creditsResponse.json();
    const videoData = await videoResponse.json();

    const videos: Trailer[] = videoData.results;
    const crew: Credits[] = creditsData.crew;
    const cast: Credits[] = creditsData.cast;

    const directors = crew.filter(({ job }) => job === "Director");
    const writers = crew.filter(
      ({ job }) => job === "Story" || job === "Screenplay" || job === "Writer"
    );
    const officialTrailer = videos.filter(
      ({ name }) => name === "Official Trailer"
    );

    return { cast, details, directors, writers, videos, officialTrailer };
  } catch (error) {
    console.error(error);
  }
};
