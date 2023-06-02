import Hero from "@/components/Hero";
import MediaSlider from "@/components/MediaSlider";
import { getMedia } from "@/utils/getMedia";

export default async function Home() {
  const data = await getMedia();
  return (
    <main>
      <section>
        {data?.randomHeroMedia && (
          <Hero randomHeroMedia={data.randomHeroMedia} />
        )}
      </section>
      <section className='mb-16 pl-8'>
        <div className='container mx-auto'>
          <h2 className='my-6 text-left text-2xl font-semibold capitalize'>
            Filmes Populares:
          </h2>
        </div>
        {data?.popularMovies && (
          <MediaSlider media={data.popularMovies} />
        )}
      </section>
      <section className='mb-16 pl-8'>
        <div className='container mx-auto'>
          <h2 className='my-6 text-left text-2xl font-semibold capitalize'>
            Séries Populares:
          </h2>
        </div>
        {data?.popularShows && <MediaSlider media={data.popularShows} />}
      </section>
    </main>
  );
}
