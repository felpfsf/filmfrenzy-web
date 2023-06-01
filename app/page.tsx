import Hero from "@/components/Hero";
import MediaSlider from "@/components/MediaSlider";
import { getMedia } from "@/utils/getMedia";

export default async function Home() {
  const data = await getMedia();
  console.log("Hero Media =>", data?.popularMovies);
  return (
    <main>
      <section>
        <Hero randomHeroMedia={data?.randomHeroMedia} />
      </section>
      <section className='mb-16 pl-8'>
        <div className='container mx-auto'>
          <h2 className='text-2xl capitalize font-semibold my-6 text-left'>Filmes Populares:</h2>
        </div>
        <MediaSlider popularMedia={data?.popularMovies} />
      </section>
      <section className='mb-16 pl-8'>
        <div className='container mx-auto'>
          <h2 className='text-2xl capitalize font-semibold my-6 text-left'>Séries Populares:</h2>
        </div>
        <MediaSlider popularMedia={data?.popularShows} />
      </section>
    </main>
  );
}
