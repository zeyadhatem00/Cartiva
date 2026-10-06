import CategoryCard from "@/app/_Components/CategoryCard/page";
import { Getcategories } from "@/app/Services/Category.api";
import { Grid2X2 } from "lucide-react";

export default async function CategoriesPage() {
  let catogries = await Getcategories();

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#151922]">
      <main className="mx-auto max-w-330 px-4 pb-20 lg:px-8">
        <section className="relative mt-6 overflow-hidden rounded-3xl bg-[#151922] px-6 py-12 text-white shadow-[0_20px_48px_rgba(21,25,34,0.12)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -right-32 -top-40 size-136 rounded-full bg-[#2864d7]/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-48 left-1/3 size-112 rounded-full bg-[#d9f7e9]/10 blur-3xl" />
          <div className="absolute -right-2 top-4 hidden font-display text-[12rem] font-bold leading-none tracking-[-0.15em] text-white/[0.035] sm:block">
            CATEGORIES
          </div>
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-md bg-[#d9f7e9] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-[#15704a]">
                <Grid2X2 size={12} /> Curated for everyday
              </p>
              <h1 className="mt-5 max-w-[10ch] font-display text-[clamp(3.3rem,8vw,6.5rem)] font-bold leading-[0.84] -tracking-widest">
                Find your <span className="text-[#8fc4ff]">category.</span>
              </h1>
              <p className="mt-7 max-w-[51ch] text-sm leading-6 text-white/65 sm:text-base">
                Explore the collections behind the products that make everyday
                life better, from tech and sport to style, home, and more.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.12em] text-white/60">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2">
                <Grid2X2 size={13} className="text-[#d9f7e9]" /> Browse the
                catalog
              </span>
              <span className="rounded-full border border-white/15 px-3 py-2">
                {catogries.length} collections
              </span>
            </div>
          </div>
        </section>

        <section id="category-grid" className="mt-12">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#2864d7]">
                The Cartiva catalog
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.07em] sm:text-4xl">
                Shop by category
              </h2>
              <p className="mt-2 max-w-[52ch] text-sm leading-6 text-[#667180]">
                A clear starting point for whatever you are looking for next.
              </p>
            </div>
            <span className="text-xs font-bold text-[#8a929f]">
              {catogries.length} collections
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {catogries.map((category) => {
              return (
                <CategoryCard
                  key={category._id}
                  {...category}
                  categoryPage={true}
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
