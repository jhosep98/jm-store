import { FavoritesList } from "@/ui/favorites-list";

const { STRAPI_HOST } = process.env;

export default function FavoritesPage() {
  return (
    <main className="max-w-screen-lg container mx-auto px-4">
      <div className="pt-[1.5rem]">
        <div className="min-h-[40vh] flex justify-center items-center bg-content1">
          <h1 className="text-3xl font-bold">Tus favoritos</h1>
        </div>
      </div>

      <FavoritesList strapiHost={STRAPI_HOST ?? ""} />
    </main>
  );
}
