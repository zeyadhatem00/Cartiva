import BrandCard from "@/app/_Components/BrandCard/BrandCard";
import { Category } from "@/app/interface/Products";
import { GetBrands } from "@/app/Services/Brands.api";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";
import Link from "next/link";

export default async function BrandsPage() {
  let data = await GetBrands();

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#151922]">
      <main className="mx-auto max-w-330 px-4 pb-20 lg:px-8">
        <section className="relative mt-6 overflow-hidden rounded-3xl bg-[#151922] px-6 py-12 text-white shadow-[0_20px_48px_rgba(21,25,34,0.12)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -right-32 -top-40 size-136 rounded-full bg-[#2864d7]/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-48 left-1/3 size-112 rounded-full bg-[#d9f7e9]/10 blur-3xl" />
          <div className="absolute -right-2 top-4 hidden font-display text-[12rem] font-bold leading-none tracking-[-0.15em] text-white/[0.035] sm:block">
            BRANDS
          </div>
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-md bg-[#d9f7e9] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-[#15704a]">
                <Sparkles size={12} /> Built for better finds
              </p>
              <h1 className="max-w-[10ch] font-display text-[clamp(3.3rem,8vw,6.5rem)] font-bold leading-[0.84] -tracking-widest">
                Find your <span className="text-[#8fc4ff]">favorites.</span>
              </h1>
              <p className="mt-7 max-w-[51ch] text-sm leading-6 text-white/65 sm:text-base">
                Explore the brands behind the products you love—from everyday
                essentials to the next thing you cannot stop thinking about.
              </p>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.12em] text-white/60">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2">
                <BadgeCheck size={13} className="text-[#d9f7e9]" /> Curated
                collection
              </span>

              <span className="rounded-full border border-white/15 px-3 py-2">
                {data.length} brands
              </span>
            </div>
          </div>
        </section>

        <section id="all-brands" className="mt-12">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#2864d7]">
                Browse the collection
              </p>
              <h2 className="mt-2 font-display text-[2rem] font-bold tracking-[-0.07em] sm:text-[2.7rem]">
                All brands.
              </h2>
            </div>
          </div>
          <div
            className={` ${data ? "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6" : "w-full"} mt-6 `}
          >
            {data.map((brand: Category, i) => {
              return <BrandCard key={i} name={brand.name} logo={brand.image} />;
            })}
          </div>
        </section>

        <section className="mt-12 overflow-hidden rounded-[22px] bg-[#d9f7e9] p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#15704a]">
                Always adding more
              </p>
              <h2 className="mt-2 font-display text-[1.75rem] font-bold tracking-[-0.06em] text-[#151922]">
                Your next favorite is probably here.
              </h2>
              <p className="mt-2 max-w-[52ch] text-xs leading-5 text-[#4d6b5c]">
                New brands and collections land on Cartiva every week. Keep
                exploring and find something that fits your world.
              </p>
            </div>
            <Link
              href="/Shop"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg bg-[#2864d7] px-4 py-3 text-[10px] font-black uppercase tracking-widest text-white shadow-[0_8px_18px_rgba(40,100,215,0.18)] transition-colors hover:bg-[#151922]"
            >
              Explore products <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
