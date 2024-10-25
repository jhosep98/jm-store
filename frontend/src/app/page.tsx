import { HomeHero, RowCard } from "@/ui";

export default function Home() {
  return (
    <>
      <div className="max-w-screen-lg container mx-auto px-4 pt-[1.5rem]">
        <HomeHero />
      </div>

      <main
        id="new-releases"
        className="max-w-screen-lg container mx-auto px-4 py-[75px] my-[75px]"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Nuevos Lanzamientos
        </h2>

        <RowCard />
      </main>
    </>
  );
}
