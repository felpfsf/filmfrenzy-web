import Hero from "@/components/Hero";
import MediaSlider from "@/components/MediaSlider";
import { getMedia } from "@/utils/getMedia";

const Media = async ({ params: { media } }: { params: { media: string } }) => {
  const data = await getMedia();
  const {
    onTheAirShows,
    popularMovies,
    popularShows,
    topMovies,
    topShows,
    trendingMovies,
    trendingShows,
    upcomingMovies,
  } = data;
  return (
    <main>
      <section>
        {media === "movie" && popularMovies && (
          <Hero randomHeroMedia={popularMovies} />
        )}
        {media === "tv" && popularShows && (
          <Hero randomHeroMedia={popularShows} />
        )}
      </section>

      <section className='mb-16 pl-8'>
        <div className='container mx-auto'>
          <h2 className='my-6 text-left text-2xl font-semibold capitalize'>
            Melhores avaliados:
          </h2>
        </div>
        {media === "movie" && topMovies && <MediaSlider media={topMovies} />}
        {media === "tv" && topShows && <MediaSlider media={topShows} />}
      </section>

      <section className='mb-16 pl-8'>
        <div className='container mx-auto'>
          <h2 className='my-6 text-left text-2xl font-semibold capitalize'>
            Em Alta:
          </h2>
        </div>
        {media === "movie" && trendingMovies && (
          <MediaSlider media={trendingMovies} />
        )}
        {media === "tv" && trendingShows && (
          <MediaSlider media={trendingShows} />
        )}
      </section>

      <section className='mb-16 pl-8'>
        <div className='container mx-auto'>
          <h2 className='my-6 text-left text-2xl font-semibold capitalize'>
            {media === "movie" ? "Em breve:" : "Séries No ar:"}
          </h2>
        </div>
        {media === "movie" && upcomingMovies && (
          <MediaSlider media={upcomingMovies} />
        )}
        {media === "tv" && onTheAirShows && <MediaSlider media={onTheAirShows} />}
      </section>
    </main>
  );
};

export default Media;
