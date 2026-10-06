"use client";
import { productscontext } from "@/app/context/productsContext";
import { Product } from "@/app/interface/Products";
import { ArrowRight, Search, SearchX, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

export default function Searchbar() {
  let { products } = useContext(productscontext);
  let [Searchcontent, setcontent] = useState<string>("");

  let results: Product[] = products.filter((product) => {
    return product.title
      .toLowerCase()
      .includes(Searchcontent.toLowerCase().trim());
  });

  return (
    <>
      <label className="group relative flex min-w-0 flex-1 items-center rounded-full border border-[#dfe4ea] bg-white p-1.5 transition-colors focus-within:border-[#2864d7] focus-within:shadow-[0_0_0_3px_rgba(40,100,215,0.10)] w-full">
        <span className="sr-only">Search products</span>
        <Search
          size={16}
          className="ml-3 shrink-0 text-[#8a929f] transition-colors group-focus-within:text-[#2864d7]"
        />
        <input
          onChange={(e) => {
            setcontent(e.target.value);
          }}
          value={Searchcontent}
          type="search"
          placeholder="Search for products, brands and more..."
          className="min-w-0 flex-1 bg-transparent px-3 py-2 text-xs font-semibold text-[#151922] outline-none placeholder:text-[#9aa2ad]"
        />
        <button
          className="grid size-9 shrink-0 place-items-center rounded-full bg-[#2864d7] text-white transition-colors hover:bg-[#151922] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
          aria-label="Search"
        >
          <Search size={15} strokeWidth={2.2} />
        </button>
        {Searchcontent == "" || null ? (
          ""
        ) : (
          <>
            {" "}
            {results.length == 0 ? (
              <>
                {" "}
                <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-50 overflow-hidden rounded-2xl border border-[#dfe4ea] bg-white text-left shadow-[0_20px_60px_rgba(21,25,34,0.16)] ">
                  <div className="flex items-center justify-between border-b border-[#edf0f3] px-4 py-3">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#2864d7]">
                        Search results
                      </p>

                      <p className="mt-1 text-xs text-[#667180]">
                        Nothing matched{" "}
                        <strong className="text-[#151922]">
                          “{Searchcontent}”
                        </strong>
                      </p>
                    </div>

                    <span className="rounded-full bg-[#f4f7fb] px-2.5 py-1 text-[10px] font-black text-[#8a929f]">
                      0 results
                    </span>
                  </div>

                  <div className="px-4 py-5">
                    <div className="relative mx-auto grid size-16 place-items-center rounded-2xl bg-[#eef6ff] text-[#2864d7]">
                      <span className="absolute -right-1.5 -top-1.5 size-3 rounded-full bg-[#d9f7e9]" />

                      <SearchX size={28} strokeWidth={1.7} />
                    </div>

                    <div className="mt-4 text-center">
                      <h3 className="font-display text-lg font-bold tracking-[-0.045em] text-[#151922]">
                        We couldn’t find a match
                      </h3>

                      <p className="mx-auto mt-1.5 max-w-[34ch] text-xs leading-5 text-[#7b8490]">
                        Try a broader keyword, check your spelling, or browse a
                        category to discover something new.
                      </p>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          setcontent("");
                        }}
                        className="inline-flex items-center justify-center rounded-lg border border-[#dfe4ea] px-3 py-2.5 text-[10px] font-black uppercase tracking-[0.07em] text-[#394351] transition-colors hover:border-[#2864d7] hover:text-[#2864d7]"
                      >
                        Clear search
                      </button>

                      <a
                        href="/Categories"
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#2864d7] px-3 py-2.5 text-[10px] font-black uppercase tracking-[0.07em] text-white transition-colors hover:bg-[#151922]"
                      >
                        Browse categories
                        <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {" "}
                <div className="absolute  w-full right-1/2 translate-x-1/2   top-[calc(100%+10px)] z-50  max-h-[min(560px,calc(100vh-120px))] scrollbar-none overflow-y-auto rounded-2xl border border-[#dfe4ea] bg-white p-3 text-left shadow-[0_20px_60px_rgba(21,25,34,0.16)] ">
                  {/* Results header */}
                  <div className="flex items-center justify-between gap-4 border-b border-[#edf0f3] px-2 pb-3">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#2864d7]">
                        Matching products
                      </p>
                    </div>

                    <span className="rounded-full bg-[#eef6ff] px-2.5 py-1 text-[10px] font-black text-[#2864d7]">
                      {results.length} results
                    </span>
                  </div>

                  {/* Horizontal product results */}
                  <div className="space-y-2 pt-3">
                    {results.map((product) => {
                      return (
                        <Link
                          onClick={() => {
                            setcontent("");
                          }}
                          key={product._id}
                          href={`/productDetails/${product._id}`}
                          className="group/card flex items-center gap-3 rounded-xl border border-[#edf0f3] bg-white p-2 transition-all hover:border-[#c9d7f2] hover:bg-[#f8fbff] hover:shadow-[0_6px_16px_rgba(40,100,215,0.08)]"
                        >
                          <div className="size-16 shrink-0 overflow-hidden rounded-lg bg-[#e1f3ec]">
                            <Image
                              src={product.imageCover}
                              width={100}
                              height={100}
                              alt={product.title}
                              className="size-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-[#8a929f]">
                              {product.category.name}
                            </p>

                            <p className="mt-1 truncate text-sm font-black text-[#151922] group-hover/card:text-[#2864d7]">
                              {product.title}
                            </p>

                            <div className="mt-1 flex items-center gap-2">
                              <span className="inline-flex items-center gap-1 rounded bg-[#fff5cf] px-1.5 py-1 text-[9px] font-black text-[#806413]">
                                <Star
                                  size={9}
                                  className="fill-[#e7b93e] text-[#e7b93e]"
                                />
                                {product.ratingsAverage}
                              </span>

                              <span className="text-[10px] text-[#8a929f]">
                                {product.ratingsQuantity} reviews
                              </span>
                            </div>
                          </div>

                          <div className="flex shrink-0 flex-col items-end gap-2">
                            <strong className="text-sm font-black text-[#2864d7]">
                              {product.price}EGP
                            </strong>

                            <span className="grid size-7 place-items-center rounded-full bg-[#eef6ff] text-[#2864d7] transition-colors group-hover/card:bg-[#2864d7] group-hover/card:text-white">
                              <ArrowRight size={13} />
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </label>
    </>
  );
}
