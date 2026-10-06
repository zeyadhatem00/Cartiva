"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  totalProducts,
  productsperpage,
  setCurrenPage,
  CurrentPage,
}: {
  totalProducts: number;
  productsperpage: number;
  setCurrenPage: Function;
  CurrentPage: number;
}) {
  let pages = [];
  let totalPages = Math.ceil(totalProducts / productsperpage);
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <>
      <div className="mt-8 flex items-center justify-center gap-2">
        <button
          disabled={CurrentPage == 1}
          onClick={() => {
            setCurrenPage(CurrentPage - 1);
          }}
          className="grid transition-all cursor-pointer duration-150 size-9 place-items-center rounded-xl border border-[#dfe4ea] bg-white text-[#667180] hover:border-[#2864d7] hover:text-[#2864d7]"
          aria-label="Previous page"
        >
          <ChevronLeft size={15} />
        </button>

        {pages.map((page, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                setCurrenPage(page);
                window.scroll({ top: 0 });
              }}
              className={`grid transition-all cursor-pointer duration-150 size-9 place-items-center ${page == CurrentPage ? "bg-[#2864d7]  text-white" : "text-[#667180] border-[#dfe4ea] border bg-white hover:border-[#2864d7] hover:text-[#2864d7]"} rounded-xl  text-xs font-black `}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => {
            setCurrenPage(CurrentPage + 1);
          }}
          className="grid size-9 place-items-center rounded-xl cursor-pointer border border-[#dfe4ea] bg-white text-[#667180] hover:border-[#2864d7] hover:text-[#2864d7]"
          aria-label="Next page"
          disabled={CurrentPage == totalPages}
        >
          <ChevronRight size={15} />
        </button>
      </div>
    </>
  );
}
