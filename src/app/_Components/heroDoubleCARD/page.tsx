"use client";

import bagImage from "../../../assets/bagImage.jpg";
import phoneImage from "../../../assets/phoneImage.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function heroDoubleCARD() {
  return (
    <>
      <div className="grid gap-4  lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -200, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative min-h-62.5 overflow-hidden rounded-2xl bg-[#e5edf8] p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
        >
          <Link href={"/Shop"}>
            <Image
              src={phoneImage}
              alt="Technology collection"
              className="absolute inset-0 size-full object-cover opacity-20 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#e5edf8] via-[#e5edf8]/80 to-transparent" />
            <div className="relative">
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#2864d7]">
                The tech edit
              </p>
              <h2 className="mt-3 max-w-[9ch] font-display text-[2.35rem] font-bold leading-[0.9] tracking-[-0.08em]">
                Upgrade the everyday.
              </h2>
              <span className="mt-7 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#2864d7]">
                Shop electronics <ArrowUpRight size={14} />
              </span>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 200, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative min-h-62.5 overflow-hidden rounded-2xl bg-[#e5edf8] p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
        >
          <Link href={"/Shop"}>
            {" "}
            <Image
              src={bagImage}
              alt="Lifestyle collection"
              className="absolute inset-0 size-full object-cover opacity-20 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#e1f3ec] via-[#e1f3ec]/80 to-transparent" />
            <div className="relative">
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#15704a]">
                The lifestyle edit
              </p>
              <h2 className="mt-3 max-w-[9ch] font-display text-[2.35rem] font-bold leading-[0.9] tracking-[-0.08em]">
                Better pieces, daily.
              </h2>
              <span className="mt-7 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#15704a]">
                Shop lifestyle <ArrowUpRight size={14} />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
