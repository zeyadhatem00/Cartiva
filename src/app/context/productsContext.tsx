"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { GetAllProducts } from "../Services/AllProducts.api";
import { Product } from "../interface/Products";

type ProductSHAPE = {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
};

export const productscontext = createContext<ProductSHAPE>({
  products: [],
  setProducts: () => undefined,
});

export function ProductsProvide({ children }: { children: ReactNode }) {
  let [products, setProducts] = useState<Product[]>([]);

  async function GetProducts() {
    let AllProducts = await GetAllProducts();
    setProducts(AllProducts);
  }

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <productscontext.Provider value={{ products, setProducts }}>
      {children}
    </productscontext.Provider>
  );
}
