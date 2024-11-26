import type { Metadata } from "next";

import RowCard from "@/ui/row-card";
import HomeHero from "@/ui/home-hero";
import { findHomeInfoQuery, findHomeSeoQuery } from "@/providers";

export async function generateMetadata(): Promise<Metadata> {
  const homeSeo = await findHomeSeoQuery();

  console.log(homeSeo);

  return {
    title: homeSeo.siteName,
    description: homeSeo.siteDescription,
    openGraph: {
      title: homeSeo.defaultSeo.siteName,
      description: homeSeo.defaultSeo.siteDescription,
      images: homeSeo.image,
    },
  };
}

export default async function HomePage() {
  const { firstSubtitle } = await findHomeInfoQuery();

  return (
    <>
      <div className="max-w-screen-lg container mx-auto px-4 pt-[1.5rem]">
        <HomeHero />
      </div>

      <main
        id="new-releases"
        className="max-w-screen-lg container mx-auto px-4 py-[35px] my-[35px] sm:py-[75px] sm:my-[75px]"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">{firstSubtitle}</h2>

        <RowCard />
      </main>
    </>
  );
}
