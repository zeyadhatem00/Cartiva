"use client";

import {
  Check,
  CircleAlert,
  Clock3,
  Headphones,
  Home,
  RefreshCw,
  WifiOff,
} from "lucide-react";
import Link from "next/link";

export default function error() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f8fa] text-[#151922]">
      <div className="pointer-events-none absolute -right-40 -top-40 size-144 rounded-full bg-[#e5edf8] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-32 size-120 rounded-full bg-[#d9f7e9] blur-3xl" />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-330 flex-col px-5 py-5 sm:px-8 lg:px-12">
        <section className="flex flex-1 items-center justify-center py-12 sm:py-16 lg:py-20">
          <div className="grid w-full max-w-270 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="order-2 lg:order-1">
              <p className="mb-5 inline-flex items-center gap-2 rounded-md bg-[#fff0d2] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-[#9a6500]">
                <CircleAlert size={12} /> Something went wrong
              </p>
              <h1 className="font-display text-[clamp(4rem,9vw,8.5rem)] font-bold leading-[0.72] tracking-[-0.13em] text-[#2864d7]">
                Oops<span className="text-[#151922]">.</span>
              </h1>
              <h2 className="mt-10 max-w-[10ch] font-display text-[clamp(2.6rem,5vw,5rem)] font-bold leading-[0.88] tracking-[-0.09em]">
                Something went wrong.
              </h2>
              <p className="mt-6 max-w-[41ch] text-sm leading-6 text-[#667180] sm:text-base">
                We couldn’t complete that request right now. Please try again,
                or head back home and continue shopping.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    window.location.reload();
                  }}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#2864d7] px-5 py-3.5 text-[11px] font-black uppercase tracking-widest text-white transition-colors hover:bg-[#151922] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
                >
                  Try again <RefreshCw size={15} />
                </button>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#dfe4ea] bg-white px-5 py-3.5 text-[11px] font-black uppercase tracking-widest text-[#2864d7] transition-colors hover:border-[#2864d7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
                >
                  <Home size={14} /> Back home
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto aspect-square w-full max-w-110 overflow-hidden rounded-[38px] border border-[#dce6f6] bg-[#e5edf8] p-7 shadow-[0_28px_70px_rgba(21,25,34,0.08)] sm:p-12">
                <div className="absolute right-7 top-7 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.12em] text-[#9a6500] shadow-sm">
                  <span className="size-1.5 rounded-full bg-[#f5b83d]" /> Please
                  try again
                </div>
                <div className="absolute inset-0 m-auto grid size-[75%] place-items-center rounded-full border border-white/80 bg-white/65 shadow-[inset_0_0_0_18px_rgba(255,255,255,0.25)]">
                  <div className="relative grid size-32 place-items-center rounded-[30px] bg-[#151922] text-white shadow-[0_20px_34px_rgba(21,25,34,0.22)] sm:size-40 sm:rounded-[36px]">
                    <WifiOff
                      size={60}
                      strokeWidth={1.45}
                      className="text-[#8fc4ff] sm:size-19"
                    />
                    <span className="absolute -right-3 -top-3 grid size-9 place-items-center rounded-full border-[5px] border-[#e5edf8] bg-[#f5b83d] text-[#151922]">
                      <CircleAlert size={15} />
                    </span>
                    <span className="absolute bottom-7 left-9 h-1 w-14 rounded-full bg-[#d9f7e9]/80 sm:bottom-9 sm:left-11 sm:w-20" />
                  </div>
                </div>
                <div className="absolute bottom-7 left-7 rounded-xl bg-white/90 px-3.5 py-2.5 backdrop-blur-sm sm:bottom-10 sm:left-10">
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#2864d7]">
                    Request status
                  </p>
                  <p className="mt-1 text-xs font-bold text-[#151922]">
                    Your cart is still safe.
                  </p>
                </div>
                <span className="absolute left-12 top-20 size-2 rounded-full bg-[#2864d7]/30" />
                <span className="absolute bottom-24 right-12 size-3 rounded-full bg-[#15704a]/35" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-8 grid w-full max-w-270 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#e4e7ec] bg-white/85 p-4 shadow-sm">
            <div className="flex items-center gap-2 text-[#15704a]">
              <Check size={15} />
              <span className="text-[10px] font-black uppercase tracking-[0.12em]">
                Your data is safe
              </span>
            </div>
            <p className="mt-2 text-xs leading-5 text-[#667180]">
              Your account and saved cart are protected. Please try again in a
              moment.
            </p>
          </div>
          <div className="rounded-2xl border border-[#e4e7ec] bg-white/85 p-4 shadow-sm">
            <div className="flex items-center gap-2 text-[#2864d7]">
              <Clock3 size={15} />
              <span className="text-[10px] font-black uppercase tracking-[0.12em]">
                Try again
              </span>
            </div>
            <p className="mt-2 text-xs leading-5 text-[#667180]">
              Refresh the page or try the action again.
            </p>
          </div>
          <div className="rounded-2xl border border-[#e4e7ec] bg-white/85 p-4 shadow-sm">
            <div className="flex items-center gap-2 text-[#2864d7]">
              <Headphones size={15} />
              <span className="text-[10px] font-black uppercase tracking-[0.12em]">
                Need help?
              </span>
            </div>
            <p className="mt-2 text-xs leading-5 text-[#667180]">
              Contact{" "}
              <a
                href="mailto:hello@cartiva.store"
                className="font-bold text-[#2864d7] hover:text-[#151922]"
              >
                hello@cartiva.store
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
