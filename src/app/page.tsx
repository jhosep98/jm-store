// import { Container } from "/components";
import { HomeHero, RowCard } from "@/ui";

export default function Home() {
  return (
    <>
      <HomeHero />

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
