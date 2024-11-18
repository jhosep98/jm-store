import type { Metadata } from "next";

import RowCard from "@/ui/row-card";
import HomeHero from "@/ui/home-hero";
import { useFindHomeInfoQuery } from "@/providers";

export const metadata: Metadata = {
  title: "JM Store",
  description: "JM Store",
};

export default async function HomePage() {
  const { firstSubtitle } = await useFindHomeInfoQuery();

  return (
    <>
      <div className="max-w-screen-lg container mx-auto px-4 pt-[1.5rem]">
        <HomeHero />
      </div>

      <main
        id="new-releases"
        className="max-w-screen-lg container mx-auto px-4 py-[75px] my-[75px]"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">{firstSubtitle}</h2>

        <RowCard />
      </main>
    </>
  );
}
