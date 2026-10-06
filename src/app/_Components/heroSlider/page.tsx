"use client";

import { ArrowRight, ArrowUpRight, Sparkles, Zap } from "lucide-react";
import Sport from "../../../assets/Sport.jpg";
import watch from "../../../assets/watch.jpg";
import laptop from "../../../assets/laptop.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Link from "next/link";

export default function heroSlider() {
  return (
    <>
      <section className="mx-auto  max-w-330 px-4 pb-8 pt-5 lg:px-8 lg:pb-12 lg:pt-8">
        <div className="relative overflow-hidden rounded-3xl  bg-[#151922]">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, EffectFade]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative flex min-h-125 items-end overflow-hidden sm:min-h-142.5 lg:min-h-156.5">
                <Image
                  src={laptop}
                  alt="Laptop on a modern workspace"
                  className="absolute inset-0 size-full object-cover "
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#151922]/90 via-[#151922]/55 to-[#151922]/10" />
                <div className="absolute inset-0 bg-linear-to-t from-[#151922]/65 via-transparent to-transparent" />
                <div className="relative z-10 max-w-140 px-6 pb-24 pt-16 text-white sm:px-12 sm:pb-28 lg:px-16 lg:pb-32">
                  <p className="mb-5 inline-flex items-center gap-2 rounded-md bg-[#d9f7e9] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.13em] text-[#15704a]">
                    <Zap size={12} fill="currentColor" /> Curated for everyday
                  </p>
                  <h1 className="max-w-[9ch] font-display text-[clamp(3.3rem,6vw,5.8rem)] font-bold leading-[0.87] tracking-[-0.09em]">
                    Everything you need,{" "}
                    <span className="text-[#8fc4ff]">in one place.</span>
                  </h1>
                  <p className="mt-6 max-w-[36ch] text-sm leading-6 text-white/75 sm:text-base">
                    A simpler way to shop tech, sport, style, home, and the
                    things that make everyday life better.
                  </p>
                  <Link
                    href="/Shop"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#2864d7] px-5 py-3.5 text-[11px] font-black uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-[#151922] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fc4ff]"
                  >
                    Explore products <ArrowUpRight size={15} />
                  </Link>
                </div>
                <div className="absolute bottom-6 right-6 z-10 rounded-xl border border-white/30 bg-white/90 px-3.5 py-2.5 backdrop-blur-md sm:bottom-8 sm:right-8">
                  <p className="text-[9px] font-black uppercase tracking-[0.11em] text-[#2864d7]">
                    Featured collection
                  </p>
                  <p className="mt-1 font-display text-sm font-bold text-[#151922]">
                    Build a better setup
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative  min-h-125 items-end overflow-hidden flex sm:min-h-142.5 lg:min-h-156.5">
                <Image
                  src={Sport}
                  alt="Red sport sneaker"
                  className="absolute inset-0 size-full object-cover  "
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#151922]/90 via-[#151922]/48 to-[#151922]/10" />
                <div className="absolute inset-0 bg-linear-to-t from-[#151922]/65 via-transparent to-transparent" />
                <div className="relative z-10 max-w-140 px-6 pb-24 pt-16 text-white sm:px-12 sm:pb-28 lg:px-16 lg:pb-32">
                  <p className="mb-5 inline-flex items-center gap-2 rounded-md bg-[#d9f7e9] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.13em] text-[#15704a]">
                    <Zap size={12} fill="currentColor" /> Move your way
                  </p>
                  <h2 className="max-w-[8ch] font-display text-[clamp(3.3rem,6vw,5.8rem)] font-bold leading-[0.87] tracking-[-0.09em]">
                    Find your <span className="text-[#ffaf98]">pace.</span>
                  </h2>
                  <p className="mt-6 max-w-[36ch] text-sm leading-6 text-white/75 sm:text-base">
                    Fresh sport, activewear, and gear that makes showing up feel
                    good.
                  </p>
                  <Link
                    href="/Shop"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#ffaf98] px-5 py-3.5 text-[11px] font-black uppercase tracking-widest text-[#151922] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffaf98]"
                  >
                    Shop sport <ArrowRight size={15} />
                  </Link>
                </div>
                <div className="absolute bottom-6 right-6 z-10 rounded-xl border border-white/30 bg-white/90 px-3.5 py-2.5 backdrop-blur-md sm:bottom-8 sm:right-8">
                  <p className="text-[9px] font-black uppercase tracking-[0.11em] text-[#e8795b]">
                    New season
                  </p>
                  <p className="mt-1 font-display text-sm font-bold text-[#151922]">
                    Ready when you are
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative rounded-xl min-h-125 items-end overflow-hidden flex sm:min-h-142.5 lg:min-h-156.5">
                <Image
                  src={watch}
                  alt="Minimal modern watch"
                  className="absolute inset-0 size-full object-cover "
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#151922]/90 via-[#151922]/50 to-[#151922]/10" />
                <div className="absolute inset-0 bg-linear-to-t from-[#151922]/65 via-transparent to-transparent" />
                <div className="relative z-10 max-w-140 px-6 pb-24 pt-16 text-white sm:px-12 sm:pb-28 lg:px-16 lg:pb-32">
                  <p className="mb-5 inline-flex items-center gap-2 rounded-md bg-[#d9f7e9] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.13em] text-[#15704a]">
                    <Sparkles size={12} /> The finishing touch
                  </p>
                  <h2 className="max-w-[8ch] font-display text-[clamp(3.3rem,6vw,5.8rem)] font-bold leading-[0.87] tracking-[-0.09em]">
                    Small details,{" "}
                    <span className="text-[#d9f7e9]">big mood.</span>
                  </h2>
                  <p className="mt-6 max-w-[36ch] text-sm leading-6 text-white/75 sm:text-base">
                    Make your everyday feel more like yours with considered
                    style and carry.
                  </p>
                  <Link
                    href="/Shop"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#d9f7e9] px-5 py-3.5 text-[11px] font-black uppercase tracking-widest  text-[#151922] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9f7e9]"
                  >
                    Shop style <ArrowUpRight size={15} />
                  </Link>
                </div>
                <div className="absolute bottom-6 right-6 z-10 rounded-xl border border-white/30 bg-white/90 px-3.5 py-2.5 backdrop-blur-md sm:bottom-8 sm:right-8">
                  <p className="text-[9px] font-black uppercase tracking-[0.11em] text-[#15704a]">
                    Just in
                  </p>
                  <p className="mt-1 font-display text-sm font-bold text-[#151922]">
                    Wear the good stuff
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
