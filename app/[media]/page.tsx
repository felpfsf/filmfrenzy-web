import Hero from "@/components/Hero";
import { getMedia } from "@/utils/getMedia";

const Media = async ({ params: { media } }: { params: { media: string } }) => {
  console.log(media);
  const data = await getMedia();
  const popMovies = data?.popularMovies;
  const popTv = data?.popularShows;
  return (
    <main>
      <section>
        {media === "movie" && popMovies && <Hero randomHeroMedia={popMovies} />}
        {media === "tv" && popTv && <Hero randomHeroMedia={popTv} />}
      </section>
    </main>
  );
};

export default Media;
