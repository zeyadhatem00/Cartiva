import { Category } from "@/app/interface/Products";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard(category: Category) {
  return (
    <>
      {category.categoryPage ? (
        <Link
          href={`/CategorySelection/${category.name}`}
          className="group rounded-2xl border border-[#e4e7ec] bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#b9cef3] hover:shadow-[0_18px_35px_rgba(40,100,215,0.12)]"
        >
          <div className="relative overflow-hidden rounded-xl bg-[#eef6ff]">
            <Image
              src={category.image}
              width={300}
              height={300}
              alt={category.name}
              className="aspect-[1.25] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex items-end justify-between px-1 pb-2 pt-4">
            <h3 className="font-display text-lg font-bold tracking-[-0.04em]">
              {category.name}
            </h3>

            <ArrowRight
              size={17}
              className="text-[#2864d7] transition-transform group-hover:translate-x-1"
            />
          </div>
        </Link>
      ) : (
        <Link
          href={`/CategorySelection/${category.name}`}
          className="group w-32 lg:w-40 shrink-0 rounded-2xl border border-[#e4e7ec] bg-white p-3 transition-all hover:-translate-y-1 hover:border-[#b9ccef] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
        >
          <div className="overflow-hidden rounded-xl bg-[#e5edf8]">
            <Image
              src={category.image}
              alt={category.name}
              width={100}
              height={100}
              className="aspect-square w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-display text-sm font-bold">
              {category.name}
            </span>
            <ChevronRight size={15} className="text-[#2864d7]" />
          </div>
        </Link>
      )}
    </>
  );
}
