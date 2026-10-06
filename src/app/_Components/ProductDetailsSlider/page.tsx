"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductDetailsSlider({ imgs }: { imgs: string[] }) {
  let [image, setImg] = useState(0);

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="relative order-1 overflow-hidden rounded-[22px] border border-[#e4e7ec] bg-white">
          <Image
            src={imgs[image]}
            alt="item image"
            width={300}
            height={300}
            className="aspect-square w-full object-cover"
          />
        </div>

        <div className="order-2 grid grid-cols-4 gap-2">
          {imgs.map((img: string, index) => {
            return (
              <div
                onClick={() => {
                  setImg(index);
                }}
                key={index}
                className={`overflow-hidden cursor-pointer rounded-xl ${index == image ? "border-[#2864d7]" : "border-transparent hover:border-[#c9d7f2]"} border-2 bg-white p-1.5 transition-colors `}
                aria-label="Show main product image"
              >
                <Image
                  src={img}
                  width={200}
                  height={200}
                  alt="product image"
                  className="aspect-square w-full rounded-lg object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
