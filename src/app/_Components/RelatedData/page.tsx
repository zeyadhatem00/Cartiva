"use client";
import { productscontext } from "@/app/context/productsContext";
import ProductCard from "../ProductCard/page";
import { Product } from "@/app/interface/Products";

import { useContext } from "react";

export default function RelatedData({ cat }: { cat: string }) {
  let { products } = useContext(productscontext);
  let relatedata = structuredClone(products);
  let results: Product[] = relatedata.filter((product) => {
    return product.category.name == cat;
  });

  function generateRandomNumbers(arrayLength: number) {
    if (arrayLength < 3) {
      throw new Error("Array length must be at least 3.");
    }

    const numbers = new Set<number>();

    while (numbers.size < 3) {
      numbers.add(Math.floor(Math.random() * arrayLength));
    }

    return [...numbers];
  }

  const randomNumbers = generateRandomNumbers(results.length);

  return (
    <>
      <ProductCard {...results[randomNumbers[0]]} />
      <ProductCard {...results[randomNumbers[1]]} />
      <ProductCard {...results[randomNumbers[2]]} />
    </>
  );
}
