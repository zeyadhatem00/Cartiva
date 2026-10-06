"use client";

import ProductCard from "@/app/_Components/ProductCard/page";
import { productscontext } from "@/app/context/productsContext";
import { Product } from "@/app/interface/Products";
import { Link } from "@heroui/react";
import { ArrowRight, ChevronRight, SearchX, ShoppingBag } from "lucide-react";
import { useContext, useEffect, useState } from "react";

export default function CategoryProductsPage(Props: any) {
  let { products } = useContext(productscontext);
  let [filteredProducts, setFiltered] = useState<Product[]>([]);
  let [categoryName, setName] = useState("");
  async function getUrl() {
    let url = await Props.params;
    let { category } = url;
    setName(decodeURIComponent(category));
  }
  useEffect(() => {
    getUrl();
  }, []);

  function Filter() {
    let clone = structuredClone(products);
    let result = clone.filter((item) => {
      return item.category.name == categoryName;
    });

    setFiltered(result);
  }

  useEffect(() => {
    Filter();
  }, [categoryName, products]);

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#151922]">
      {filteredProducts.length == 0 ? (
        <>
          {" "}
          <main className="mx-auto max-w-330 px-4 pb-20 lg:px-8">
            <section className="relative mt-6 overflow-hidden rounded-[24px] bg-[#151922] px-6 py-8 text-white shadow-[0_20px_48px_rgba(21,25,34,0.12)] sm:px-10 sm:py-10 lg:px-12">
              <div className="pointer-events-none absolute -right-32 -top-40 size-124 rounded-full bg-[#2864d7]/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-52 left-1/3 size-96 rounded-full bg-[#d9f7e9]/10 blur-3xl" />
              <div className="absolute -right-4 top-0 hidden font-display text-[9rem] font-bold leading-none tracking-[-0.15em] text-white/[0.035] sm:block">
                STYLE
              </div>
              <div className="relative z-10">
                <nav className="mb-5 flex items-center gap-2 text-xs font-semibold text-white/50">
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                  <ChevronRight size={13} />
                  <Link href="/categories" className="hover:text-white">
                    Categories
                  </Link>
                  <ChevronRight size={13} />
                  <span className="text-white/80">Men&apos;s clothing</span>
                </nav>
                <div className="flex items-end justify-between gap-8">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-md bg-[#d9f7e9] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-[#15704a]">
                      <ShoppingBag size={12} />
                      Curated category
                    </span>
                    <h1 className="mt-5 font-display text-[clamp(2.7rem,5vw,5.2rem)] font-bold leading-[0.88] -tracking-widest">
                      Men&apos;s
                      <br />
                      <span className="text-[#8fc4ff]">clothing.</span>
                    </h1>
                    <p className="mt-4 max-w-[52ch] text-sm leading-6 text-white/60 sm:text-base">
                      Easy layers, everyday sneakers, and dependable essentials
                      for wherever the day takes you.
                    </p>
                  </div>
                  <div className="hidden shrink-0 gap-3 text-[10px] font-black uppercase tracking-widest text-white/60 sm:flex">
                    <span className="rounded-full border border-white/15 px-3 py-2">
                      60 products
                    </span>
                    <span className="rounded-full border border-white/15 px-3 py-2">
                      Fast delivery
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <div className="relative overflow-hidden rounded-[24px] border border-[#e1e5ea] bg-white px-6 py-14 text-center shadow-[0_16px_36px_rgba(21,25,34,0.05)] sm:px-10 sm:py-20">
                <div className="pointer-events-none absolute -left-20 -top-24 size-64 rounded-full bg-[#eef6ff] blur-3xl" />
                <div className="pointer-events-none absolute -bottom-28 -right-20 size-72 rounded-full bg-[#effbf4] blur-3xl" />
                <div className="absolute right-8 top-8 hidden font-display text-8xl font-bold tracking-[-0.12em] text-[#2864d7]/4 sm:block">
                  EMPTY
                </div>

                <div className="relative z-10 mx-auto max-w-140">
                  <div className="mx-auto grid size-20 place-items-center rounded-[24px] bg-[#eef6ff] text-[#2864d7] shadow-[0_12px_24px_rgba(40,100,215,0.10)]">
                    <SearchX size={34} strokeWidth={1.7} />
                  </div>
                  <p className="mt-7 text-[10px] font-black uppercase tracking-[0.16em] text-[#2864d7]">
                    Nothing matched this collection
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[0.95] tracking-[-0.08em] text-[#151922]">
                    This shelf is taking a short break.
                  </h2>
                  <p className="mx-auto mt-4 max-w-[44ch] text-sm leading-6 text-[#667180]">
                    We don&apos;t have products in this category right now.
                    Explore another collection or browse everything available on
                    Cartiva.
                  </p>

                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                      href="/Categories"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2864d7] px-5 py-3 text-xs font-black uppercase tracking-[0.08em] text-white shadow-[0_10px_20px_rgba(40,100,215,0.18)] transition-all hover:bg-[#151922] active:scale-[0.98]"
                    >
                      Browse categories
                      <ArrowRight size={15} />
                    </Link>
                    <Link
                      href="/Shop"
                      className="inline-flex items-center justify-center rounded-xl border border-[#dfe4ea] bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.08em] text-[#394351] transition-colors hover:border-[#2864d7] hover:text-[#2864d7]"
                    >
                      Explore all products
                    </Link>
                  </div>

                  <div className="mt-10 grid gap-3 border-t border-[#edf0f3] pt-6 text-left sm:grid-cols-3">
                    <div className="rounded-xl bg-[#f7f8fa] p-3">
                      <p className="text-[10px] font-black uppercase tracking-[0.08em] text-[#394351]">
                        New drops
                      </p>
                      <p className="mt-1 text-[11px] leading-4 text-[#8a929f]">
                        Fresh products added weekly.
                      </p>
                    </div>
                    <div className="rounded-xl bg-[#f7f8fa] p-3">
                      <p className="text-[10px] font-black uppercase tracking-[0.08em] text-[#394351]">
                        Easy browsing
                      </p>
                      <p className="mt-1 text-[11px] leading-4 text-[#8a929f]">
                        Find your next favorite faster.
                      </p>
                    </div>
                    <div className="rounded-xl bg-[#f7f8fa] p-3">
                      <p className="text-[10px] font-black uppercase tracking-[0.08em] text-[#394351]">
                        Secure checkout
                      </p>
                      <p className="mt-1 text-[11px] leading-4 text-[#8a929f]">
                        Shop confidently with Cartiva.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </>
      ) : (
        <>
          {" "}
          <main className="mx-auto max-w-330 px-4 pb-20 lg:px-8">
            <section className="relative mt-6 overflow-hidden rounded-[24px] bg-[#151922] px-6 py-8 text-white shadow-[0_20px_48px_rgba(21,25,34,0.12)] sm:px-10 sm:py-10 lg:px-12">
              <div className="pointer-events-none absolute -right-32 -top-40 size-124 rounded-full bg-[#2864d7]/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-52 left-1/3 size-96 rounded-full bg-[#d9f7e9]/10 blur-3xl" />
              <div className="absolute -right-4 top-0 hidden font-display text-[9rem] font-bold leading-none tracking-[-0.15em] text-white/[0.035] sm:block">
                {categoryName}
              </div>
              <div className="relative z-10">
                <nav className="mb-5 flex items-center gap-2 text-xs font-semibold">
                  <Link href="/" className="text-white/50 hover:text-white">
                    Home
                  </Link>
                  <ChevronRight size={13} />
                  <Link
                    href="/Categories"
                    className="text-white/50 hover:text-white"
                  >
                    Categories
                  </Link>
                  <ChevronRight size={13} />
                  <span className="text-white/80">{categoryName}</span>
                </nav>
                <div className="flex items-end justify-between gap-8">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-md bg-[#d9f7e9] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-[#15704a]">
                      <ShoppingBag size={12} />
                      Curated category
                    </span>
                    <h1 className="mt-5 font-display text-[clamp(2.7rem,5vw,5.2rem)] font-bold leading-[0.88] -tracking-widest">
                      {categoryName}
                    </h1>
                  </div>
                  <div className="hidden shrink-0 gap-3 text-[10px] font-black uppercase tracking-widest text-white/60 sm:flex">
                    <span className="rounded-full border border-white/15 px-3 py-2">
                      {filteredProducts.length} products
                    </span>
                    <span className="rounded-full border border-white/15 px-3 py-2">
                      Fast delivery
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs text-[#8a929f]">
                    Curated for everyday movement
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-bold tracking-[-0.06em] sm:text-3xl">
                    Find your next everyday favorite
                  </h2>
                </div>
                <span className="text-xs font-bold text-[#8a929f]">
                  {filteredProducts.length} products
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4 xl:gap-4">
                {filteredProducts.map((Product) => {
                  return <ProductCard key={Product._id} {...Product} />;
                })}
              </div>
            </section>
          </main>
        </>
      )}
    </div>
  );
}
