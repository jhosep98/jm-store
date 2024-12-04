import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-screen-lg container mx-auto px-4 py-[25px] my-[25px] sm:pt-[65px] sm:mb-[120px]">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-9xl font-extrabold text-foreground tracking-widest">
          404
        </h1>
        <div className="bg-primary text-white px-2 text-sm rounded rotate-12 absolute">
          Pagina no encontrada
        </div>

        <button className="mt-5">
          <span className="relative inline-block text-sm font-medium text-primary group active:text-primary-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-primary group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-foreground text-white border border-current">
              <Link href="/">Ir al inicio</Link>
            </span>
          </span>
        </button>
      </div>
    </main>
  );
}
