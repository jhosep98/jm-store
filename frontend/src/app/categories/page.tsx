import { EmptyCart } from "@/components";

export default function CategoriesPage() {
  return (
    <main className="max-w-screen-lg container mx-auto px-4">
      <div className="pt-[1.5rem]">
        <div className="min-h-[40vh] flex justify-center items-center bg-slate-50">
          <h1 className="text-3xl font-bold">Categorías</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="col-span-1 py-16 my-16">
          <div className="flex justify-start items-center">
            <h2 className="text-4xl font-semibold underline">Dragon Ball</h2>
          </div>

          <div>
            <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 my-16 py-16">
              card 1
            </section>

            <EmptyCart
              title="No se encontraron productos"
              description="Node se encontrado productos en esta categoría."
            />
          </div>
        </div>

        <div className="col-span-1 py-16 my-16">
          <div className="flex justify-center items-center">
            <h2 className="text-xl font-bold">Naruto</h2>
          </div>

          <div>
            <EmptyCart
              title="No se encontraron productos"
              description="Node se encontrado productos en esta categoría."
            />
          </div>
        </div>
      </div>
    </main>
  );
}
