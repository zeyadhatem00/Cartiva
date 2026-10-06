"use client";

import { ProductDetails } from "@/app/interface/ProductDetails";
import {
  Check,
  Globe,
  RotateCcw,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import { useState } from "react";

export default function Reviews(data: ProductDetails) {
  let [activeTab, setActiveTab] = useState("details");

  let OneStar = data.reviews.filter((review) => {
    return review.rating == 1;
  });

  let twoStar = data.reviews.filter((review) => {
    return review.rating == 2;
  });

  let ThreeStar = data.reviews.filter((review) => {
    return review.rating == 3;
  });

  let FourStar = data.reviews.filter((review) => {
    return review.rating == 4;
  });

  let FiveStar = data.reviews.filter((review) => {
    return review.rating == 5;
  });

  return (
    <>
      <section
        id="details"
        className="mt-14 rounded-[22px] border border-[#e4e7ec] bg-white"
      >
        <div className="flex overflow-x-auto border-b border-[#e4e7ec] px-5 sm:px-7">
          <button
            onClick={() => setActiveTab("details")}
            className={`whitespace-nowrap border-b-2 px-1 py-5 text-xs font-bold transition-colors ${
              activeTab === "details"
                ? "border-[#2864d7] text-[#2864d7]"
                : "border-transparent text-[#8a929f] hover:text-[#2864d7]"
            }`}
          >
            Product details
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`ml-7 whitespace-nowrap border-b-2 px-1 py-5 text-xs font-bold transition-colors ${
              activeTab === "reviews"
                ? "border-[#2864d7] text-[#2864d7]"
                : "border-transparent text-[#8a929f] hover:text-[#2864d7]"
            }`}
          >
            Reviews ({data.ratingsQuantity})
          </button>

          <button
            onClick={() => setActiveTab("shipping")}
            className={`ml-7 whitespace-nowrap border-b-2 px-1 py-5 text-xs font-bold transition-colors ${
              activeTab === "shipping"
                ? "border-[#2864d7] text-[#2864d7]"
                : "border-transparent text-[#8a929f] hover:text-[#2864d7]"
            }`}
          >
            Shipping & returns
          </button>
        </div>

        <div className="p-5 sm:p-7">
          {activeTab === "reviews" && (
            <div>
              <div className="flex flex-col gap-8  pb-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.13em] text-[#2864d7]">
                    Customer ratings
                  </p>

                  <div className="mt-3 flex flex-wrap items-end gap-4">
                    <strong className="font-display text-6xl font-bold leading-none -tracking-widest text-[#151922]">
                      {data.ratingsAverage}
                    </strong>

                    <div>
                      <div className="flex gap-0.5 text-[#e7b93e]">
                        <Star size={18} className="fill-current" />
                        <Star size={18} className="fill-current" />
                        <Star size={18} className="fill-current" />
                        <Star size={18} className="fill-current" />
                        <Star size={18} className="fill-current opacity-60" />
                      </div>

                      <p className="mt-2 text-xs font-semibold text-[#667180]">
                        Based on {data.ratingsQuantity} verified reviews
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 max-w-[38ch] text-sm leading-6 text-[#667180]">
                    Shoppers love This Product for its everyday comfort, easy
                    fit, and Premium Quality.
                  </p>
                </div>

                <div className="w-full  lg:max-w-105 space-y-2.5">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="w-8 font-bold text-[#394351]">
                      5{" "}
                      <Star
                        size={11}
                        className="inline fill-[#e7b93e] text-[#e7b93e]"
                      />
                    </span>

                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#edf0f3]">
                      <div
                        style={{
                          width: `${Math.trunc((FiveStar.length / data.reviews.length) * 100)}%`,
                        }}
                        className={`h-full rounded-full bg-[#e7b93e]`}
                      />
                    </div>

                    <span className="w-8 text-right text-[#8a929f]">
                      {Math.trunc(
                        (FiveStar.length / data.reviews.length) * 100,
                      )}
                      %
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <span className="w-8 font-bold text-[#394351]">
                      4{" "}
                      <Star
                        size={11}
                        className="inline fill-[#e7b93e] text-[#e7b93e]"
                      />
                    </span>

                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#edf0f3]">
                      <div
                        style={{
                          width: `${Math.trunc((FourStar.length / data.reviews.length) * 100)}%`,
                        }}
                        className={`h-full  rounded-full bg-[#e7b93e]`}
                      />
                    </div>

                    <span className="w-8 text-right text-[#8a929f]">
                      {Math.trunc(
                        (FourStar.length / data.reviews.length) * 100,
                      )}
                      %
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <span className="w-8 font-bold text-[#394351]">
                      3{" "}
                      <Star
                        size={11}
                        className="inline fill-[#e7b93e] text-[#e7b93e]"
                      />
                    </span>

                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#edf0f3]">
                      <div
                        style={{
                          width: `${Math.trunc((ThreeStar.length / data.reviews.length) * 100)}%`,
                        }}
                        className={`h-full  rounded-full bg-[#e7b93e]`}
                      />
                    </div>

                    <span className="w-8 text-right text-[#8a929f]">
                      {Math.trunc(
                        (ThreeStar.length / data.reviews.length) * 100,
                      )}
                      %
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <span className="w-8 font-bold text-[#394351]">
                      2{" "}
                      <Star
                        size={11}
                        className="inline fill-[#e7b93e] text-[#e7b93e]"
                      />
                    </span>

                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#edf0f3]">
                      <div
                        style={{
                          width: `${Math.trunc((twoStar.length / data.reviews.length) * 100)}%`,
                        }}
                        className={`h-full rounded-full bg-[#e7b93e]`}
                      />
                    </div>

                    <span className="w-8 text-right text-[#8a929f]">
                      {Math.trunc((twoStar.length / data.reviews.length) * 100)}
                      %
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <span className="w-8 font-bold text-[#394351]">
                      1{" "}
                      <Star
                        size={11}
                        className="inline fill-[#e7b93e] text-[#e7b93e]"
                      />
                    </span>

                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#edf0f3]">
                      <div
                        style={{
                          width: `${Math.trunc((OneStar.length / data.reviews.length) * 100)}%`,
                        }}
                        className={`h-full  rounded-full bg-[#e7b93e]`}
                      />
                    </div>

                    <span className="w-8 text-right text-[#8a929f]">
                      {Math.trunc((OneStar.length / data.reviews.length) * 100)}
                      %
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab == "details" && (
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.13em] text-[#2864d7]">
                  About this product
                </p>

                <h2 className="mt-2 font-display text-2xl font-bold tracking-tighter">
                  Built for the everyday move.
                </h2>

                <p className="mt-4 max-w-[58ch] text-sm leading-6 text-[#667180]">
                  {data.description}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-[#f7f8fa] p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.11em] text-[#8a929f]">
                    Product information
                  </p>

                  <div className="mt-4 space-y-3 text-xs">
                    <div className="flex justify-between gap-3">
                      <p className="text-[#8a929f]">Category</p>
                      <p className="font-bold text-[#394351]">
                        {data.category.name}
                      </p>
                    </div>

                    <div className="flex justify-between gap-3">
                      <p className="text-[#8a929f]">Brand</p>
                      <p className="font-bold text-[#394351]">
                        {data.brand.name}
                      </p>
                    </div>

                    <div className="flex justify-between gap-3">
                      <p className="text-[#8a929f]">Sold</p>
                      <p className="font-bold flex items-center gap-1 text-[#394351]">
                        {data.sold}{" "}
                        <span className="text-[#2965d6]  text-[20px]">
                          +
                        </span>{" "}
                      </p>
                    </div>
                    <div className="flex justify-between gap-3">
                      <p className="text-[#8a929f]">Made in</p>
                      <p className="font-bold flex gap-2 items-center text-[#394351]">
                        {" "}
                        Global <Globe className="size-3 -translate-y-px" />{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-[#f7f8fa] p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.11em] text-[#8a929f]">
                    Key features
                  </p>

                  <ul className="mt-4 space-y-3 text-xs text-[#394351]">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-[#15704a]" />
                      Premium Quality Product
                    </li>

                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-[#15704a]" />
                      100% Authentic Guarantee
                    </li>

                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-[#15704a]" />
                      Quality tested
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-[#15704a]" />
                      Fast & Secure Packaging
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab == "shipping" && (
            <div>
              <div className="flex flex-col gap-5 border-b border-[#edf0f3] pb-7 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#2864d7]">
                    After you order
                  </p>

                  <h2 className="mt-2 font-display text-3xl font-bold leading-none tracking-[-0.07em] text-[#151922]">
                    From checkout to your door.
                  </h2>

                  <p className="mt-3 max-w-[52ch] text-sm leading-6 text-[#667180]">
                    Clear delivery updates, flexible returns, and support that
                    keeps your purchase feeling easy.
                  </p>
                </div>

                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#eef6ff] px-3 py-2 text-[10px] font-black uppercase tracking-widest text-[#2864d7]">
                  <ShieldCheck size={14} />
                  Cartiva promise
                </span>
              </div>

              <div className="mt-7 grid gap-4 lg:grid-cols-3">
                <article className="group rounded-2xl border border-[#e4e7ec] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b9cef3] hover:shadow-[0_14px_28px_rgba(40,100,215,0.09)]">
                  <div className="flex items-start justify-between">
                    <span className="grid size-11 place-items-center rounded-xl bg-[#eef6ff] text-[#2864d7]">
                      <Truck size={21} />
                    </span>

                    <span className="text-[10px] font-black tracking-[0.12em] text-[#b2bac5]">
                      01
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold tracking-tighter text-[#151922]">
                    Fast delivery
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#667180]">
                    Choose the pace that fits your week and follow every step.
                  </p>

                  <ul className="mt-5 space-y-3 border-t border-[#edf0f3] pt-4 text-xs text-[#394351]">
                    <li className="flex items-start gap-2">
                      <Check
                        size={14}
                        className="mt-0.5 shrink-0 text-[#2864d7]"
                      />
                      Free over $75
                    </li>

                    <li className="flex items-start gap-2">
                      <Check
                        size={14}
                        className="mt-0.5 shrink-0 text-[#2864d7]"
                      />
                      Standard: 3–5 business days
                    </li>

                    <li className="flex items-start gap-2">
                      <Check
                        size={14}
                        className="mt-0.5 shrink-0 text-[#2864d7]"
                      />
                      Express: 1–2 business days
                    </li>
                  </ul>
                </article>

                <article className="group rounded-2xl border border-[#e4e7ec] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b9e4ce] hover:shadow-[0_14px_28px_rgba(21,112,74,0.09)]">
                  <div className="flex items-start justify-between">
                    <span className="grid size-11 place-items-center rounded-xl bg-[#d9f7e9] text-[#15704a]">
                      <RotateCcw size={21} />
                    </span>

                    <span className="text-[10px] font-black tracking-[0.12em] text-[#b2bac5]">
                      02
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold tracking-tighter text-[#151922]">
                    Easy returns
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#667180]">
                    Changed your mind? Keep the process simple from start to
                    finish.
                  </p>

                  <ul className="mt-5 space-y-3 border-t border-[#edf0f3] pt-4 text-xs text-[#394351]">
                    <li className="flex items-start gap-2">
                      <Check
                        size={14}
                        className="mt-0.5 shrink-0 text-[#15704a]"
                      />
                      30-day return window
                    </li>

                    <li className="flex items-start gap-2">
                      <Check
                        size={14}
                        className="mt-0.5 shrink-0 text-[#15704a]"
                      />
                      Refund or exchange options
                    </li>

                    <li className="flex items-start gap-2">
                      <Check
                        size={14}
                        className="mt-0.5 shrink-0 text-[#15704a]"
                      />
                      Free return shipping for defects
                    </li>
                  </ul>
                </article>

                <article className="relative overflow-hidden rounded-2xl bg-[#151922] p-5 text-white shadow-[0_16px_30px_rgba(21,25,34,0.15)]">
                  <div className="absolute -right-10 -top-10 size-32 rounded-full border border-white/10" />
                  <div className="absolute -right-4 -top-4 size-20 rounded-full border border-[#8fc4ff]/20" />

                  <div className="relative flex items-start justify-between">
                    <span className="grid size-11 place-items-center rounded-xl bg-[#2864d7] text-white">
                      <ShieldCheck size={21} />
                    </span>

                    <span className="text-[10px] font-black tracking-[0.12em] text-white/35">
                      03
                    </span>
                  </div>

                  <h3 className="relative mt-6 font-display text-xl font-bold tracking-tighter">
                    Buyer protection
                  </h3>

                  <p className="relative mt-2 text-xs leading-5 text-white/60">
                    Your order is covered when something does not arrive as
                    promised.
                  </p>

                  <div className="relative mt-5 border-t border-white/10 pt-4">
                    <p className="text-xs font-bold text-white">
                      A safer way to shop.
                    </p>

                    <p className="mt-2 text-[11px] leading-5 text-white/55">
                      Get a full refund if your order does not arrive or is not
                      as described.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
