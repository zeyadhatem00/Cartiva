import { ArrowRight, Heart, ShieldCheck, Sparkles, Truck } from "lucide-react";

import CategoryMarquee from "./_Components/CategoryMarquee/page";
import { GetHomeProducts } from "./Services/HomeProducts.api";
import ProductCard from "./_Components/ProductCard/page";
import HomeDoublecard from "./_Components/heroDoubleCARD/page";
import HeroSlider from "./_Components/heroSlider/page";
import Link from "next/link";

export default async function Home() {
  let products = await GetHomeProducts();

  return (
    <>
      <main>
        <HeroSlider />

        <section className="mx-auto max-w-330 px-4 pb-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-2 rounded-2xl border border-[#e4e7ec] bg-white p-2 sm:grid-cols-4 sm:divide-x sm:divide-[#e4e7ec] sm:gap-0">
            <div className="flex items-center gap-2.5 px-3 py-3 sm:px-5">
              <Truck size={20} className="text-[#2864d7]" />
              <div>
                <p className="text-[11px] font-black">Fast delivery</p>
                <p className="text-[10px] text-[#8a929f]">Track every order</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-3 sm:px-5">
              <ShieldCheck size={20} className="text-[#15704a]" />
              <div>
                <p className="text-[11px] font-black">Secure checkout</p>
                <p className="text-[10px] text-[#8a929f]">Protected payments</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-3 sm:px-5">
              <Heart size={20} className="text-[#2864d7]" />
              <div>
                <p className="text-[11px] font-black">Easy returns</p>
                <p className="text-[10px] text-[#8a929f]">30 days, no drama</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-3 sm:px-5">
              <Sparkles size={20} className="text-[#15704a]" />
              <div>
                <p className="text-[11px] font-black">Better finds</p>
                <p className="text-[10px] text-[#8a929f]">
                  Less noise, more signal
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="categories"
          className="mx-auto max-w-330 px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
        >
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.17em] text-[#2864d7]">
                Browse by need
              </p>
              <h2 className="font-display text-[2.15rem] font-bold leading-none tracking-[-0.075em]">
                Find your category
              </h2>
            </div>
            <Link
              href="/Categories"
              className="hidden items-center gap-1 text-xs font-black text-[#2864d7] hover:text-[#151922] sm:inline-flex"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <CategoryMarquee />
        </section>

        <section id="deals" className="border-y border-[#e4e7ec] bg-white">
          <div className="mx-auto max-w-330 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.17em] text-[#15704a]">
                  Curated for you
                </p>
                <h2 className="font-display text-[2.15rem] font-bold leading-none tracking-[-0.075em]">
                  Trending now
                </h2>
              </div>
              <a
                href="#all-products"
                className="inline-flex items-center gap-1 text-xs font-black text-[#2864d7] hover:text-[#151922]"
              >
                View all <ArrowRight size={14} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {products.map((product) => {
                return <ProductCard key={product._id} {...product} />;
              })}
            </div>
          </div>
        </section>

        <section
          id="shop"
          className="mx-auto max-w-330 px-4 overflow-hidden py-10 sm:px-6 lg:px-8 lg:py-14"
        >
          <HomeDoublecard />
        </section>

        <section className="border-y border-[#e4e7ec] bg-white">
          <div className="mx-auto max-w-330 px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.17em] text-[#2864d7]">
                  Why Orbit
                </p>
                <h2 className="max-w-[9ch] font-display text-[2.25rem] font-bold leading-[0.92] tracking-[-0.08em]">
                  Simple shopping, thoughtfully done.
                </h2>
                <p className="mt-4 max-w-[31ch] text-sm leading-6 text-[#667180]">
                  Less noise, clearer choices, and a smoother way to find what
                  fits your life.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-[#e5edf8] p-5">
                  <span className="grid size-9 place-items-center rounded-lg bg-white text-[#2864d7]">
                    <ShieldCheck size={18} />
                  </span>
                  <h3 className="mt-4 text-sm font-black">
                    Only useful details
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#667180]">
                    Clear specs, honest ratings, and no guesswork.
                  </p>
                </div>
                <div className="rounded-xl bg-[#e1f3ec] p-5">
                  <span className="grid size-9 place-items-center rounded-lg bg-white text-[#15704a]">
                    <Truck size={18} />
                  </span>
                  <h3 className="mt-4 text-sm font-black">
                    Delivery you can trust
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#5e746c]">
                    Simple tracking from checkout to your door.
                  </p>
                </div>
                <div className="rounded-xl bg-[#fce7df] p-5">
                  <span className="grid size-9 place-items-center rounded-lg bg-white text-[#e8795b]">
                    <Heart size={18} />
                  </span>
                  <h3 className="mt-4 text-sm font-black">
                    Easy when plans change
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#786d69]">
                    Flexible returns without the extra drama.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#151922] text-white">
          <div className="mx-auto flex max-w-330 flex-col justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center lg:px-8 lg:py-12">
            <div>
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#d9f7e9]">
                The good signal, weekly
              </p>
              <h2 className="font-display text-[2.2rem] font-bold leading-none tracking-[-0.075em]">
                Good finds, no noise.
              </h2>
              <p className="mt-3 max-w-[38ch] text-sm leading-6 text-white/60">
                New drops, useful guides, and the deals worth knowing about.
              </p>
            </div>

            <label className="flex w-full max-w-105 items-center rounded-lg bg-white p-1.5">
              <span className="sr-only">Your email</span>
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-[#151922] outline-none placeholder:text-[#9aa2ad]"
              />
              <button className="rounded-md bg-[#2864d7] px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#174da8]">
                Subscribe
              </button>
            </label>
          </div>
        </section>
      </main>
    </>
  );
}
