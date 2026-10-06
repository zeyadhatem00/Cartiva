"use client";

import { Product } from "@/app/interface/Products";
import { Star } from "lucide-react";
import { motion } from "motion/react";

import Image from "next/image";
import Link from "next/link";
import AddTocartBtn from "../AddtocartButton/page";
import ADDtoWishlist from "../AddtoWishlistbtn/page";

export default function ProductCard(details: Product) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {" "}
        <article className="group rounded-2xl border border-[#e4e7ec] bg-white p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9d7f2] hover:shadow-[0_16px_30px_rgba(21,25,34,0.08)]">
          <div className="relative overflow-hidden rounded-xl bg-[#f0f2f5]">
            <ADDtoWishlist id={details._id} detailsPage={false} />
            <Link href={`/productDetails/${details._id}`}>
              {" "}
              <Image
                src={details.imageCover}
                alt={details.title}
                width={200}
                height={200}
                className="aspect-[1.04] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="px-1.5 pb-1 pt-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-[#8a929f]">
              {details.category.name}
            </p>
            <Link href={`/productDetails/${details._id}`}>
              {" "}
              <h3 className="mt-1.5 min-h-9.5 hover:text-[#2864d7] transition-all duration-150 cursor-pointer font-display text-[1rem] font-bold leading-[1.06] tracking-[-0.035em] text-[#151922]">
                {details.title}
              </h3>
            </Link>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1 rounded bg-[#fff5cf] px-1.5 py-1 text-[10px] font-black text-[#806413]">
                <Star size={10} className="fill-[#e7b93e] text-[#e7b93e]" />{" "}
                {details.ratingsAverage}
              </span>
              <span className="text-[10px] text-[#8a929f]">
                {details.ratingsQuantity} reviews
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-[#edf0f3] pt-3">
              <div className="flex items-baseline gap-1.5">
                <strong className="text-[1.03rem] font-black tracking-[-0.03em] text-[#151922]">
                  {details.price} EGP
                </strong>
              </div>
              <AddTocartBtn detailsPage={false} id={details._id} />
            </div>
          </div>
        </article>
      </motion.div>
    </>
  );
}
