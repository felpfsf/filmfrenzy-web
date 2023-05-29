import Hero from "@/components/Hero";
import { getMedia } from "@/utils/getMedia";

export default async function Home() {
  const data = await getMedia();
  // console.log("Hero Media =>", data?.randomHeroMedia);
  return (
    <section>
      <Hero randomHeroMedia={data?.randomHeroMedia} />
    </section>
  );
}
