import { FavoritesList } from "@/ui/favorites-list";

export default function FavoritesPage() {
  return (
    <main className="max-w-screen-lg container mx-auto px-4 my-[75px] pb-[75px]">
      <h1>Hello Page Favorites</h1>
      
      <div className="">
        <FavoritesList />
      </div>
    </main>
  );
}
