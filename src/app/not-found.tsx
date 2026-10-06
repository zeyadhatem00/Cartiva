import { ArrowUpRight, Search, ShoppingCart, Sparkles } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#f7f8fa] text-[#151922]">
      <div className=" absolute -right-40 -top-40 size-136 rounded-full bg-[#e5edf8] blur-3xl" />
      <div className=" absolute -bottom-48 -left-32 size-112 rounded-full bg-[#e1f3ec] blur-3xl" />
      <div className="relative z-10 mx-auto flex w-full max-w-330 flex-col px-5 py-5 sm:px-8 lg:px-12">
        <section className="flex flex-1 items-center justify-center py-16 lg:pb-20 lg:pt-0">
          <div className="grid w-full max-w-245 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="order-2 lg:order-1">
              <p className="mb-5 inline-flex items-center gap-2 rounded-md bg-[#d9f7e9] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-[#15704a]">
                <Sparkles size={12} /> Oops, wrong turn
              </p>
              <h1 className="font-display text-[clamp(6rem,15vw,12rem)] font-bold leading-[0.72] tracking-[-0.12em] text-[#2864d7]">
                404<span className="text-[#151922]">.</span>
              </h1>
              <h2 className="mt-10 max-w-[11ch] font-display text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[0.9] tracking-[-0.08em]">
                This page went out of stock.
              </h2>
              <p className="mt-6 max-w-[34ch] text-sm leading-6 text-[#667180]">
                The link may be broken, or this page may have moved. Let’s get
                you back to products worth finding.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#2864d7] px-5 py-3.5 text-[11px] font-black uppercase tracking-widest text-white transition-colors hover:bg-[#151922] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
                >
                  Continue shopping <ArrowUpRight size={15} />
                </Link>
                <Link
                  href="/#categories"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#dfe4ea] bg-white px-5 py-3.5 text-[11px] font-black uppercase tracking-widest text-[#2864d7] transition-colors hover:border-[#2864d7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
                >
                  <Search size={14} /> Browse categories
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative  mx-auto aspect-square w-full max-w-105 rounded-[38px] border border-[#dce6f6] bg-[#e5edf8] p-7 shadow-[0_28px_70px_rgba(21,25,34,0.08)] sm:p-12">
                <div className="absolute right-7 top-7 rounded-full bg-white px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.12em] text-[#2864d7] shadow-sm">
                  Nothing here
                </div>
                <div className="absolute inset-0 m-auto grid size-[73%] place-items-center rounded-full border border-white/80 bg-white/65 shadow-[inset_0_0_0_18px_rgba(255,255,255,0.25)]">
                  <div className="relative hover:rotate-[-10deg] transition-all duration-150 cursor-pointer grid size-32 place-items-center rounded-[28px] bg-[#2864d7] text-white shadow-[0_18px_28px_rgba(40,100,215,0.25)] sm:size-40 sm:rounded-[34px]">
                    <ShoppingCart
                      size={62}
                      strokeWidth={1.5}
                      className="sm:size-19"
                    />
                    <span className="absolute -right-3 -top-3 size-7 rounded-full border-[5px] border-[#e5edf8] bg-[#d9f7e9] sm:size-9" />
                    <span className="absolute bottom-7 left-9 h-1 w-14 rounded-full bg-[#d9f7e9]/80 sm:bottom-9 sm:left-11 sm:w-20" />
                  </div>
                </div>
                <div className="absolute bottom-7 left-7 rounded-xl bg-white/85 px-3.5 py-2.5 backdrop-blur-sm sm:bottom-10 sm:left-10">
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#15704a]">
                    Cartiva note
                  </p>
                  <p className="mt-1 text-xs font-bold text-[#151922]">
                    Good things are still in stock.
                  </p>
                </div>
                <span className="absolute left-12 top-20  size-2 rounded-full bg-[#2864d7]/30" />
                <span className="absolute bottom-24 right-12 size-3 rounded-full bg-[#15704a]/35" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
