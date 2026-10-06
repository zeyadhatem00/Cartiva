"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { GetmyWishlist } from "../Services/WishlistActions/GetmyWishlist";

type WishlistShape = {
  Wishlist: wishlist | null;
  setWishlist: Dispatch<SetStateAction<wishlist | null>>;
};

export const Wishlistcontext = createContext<WishlistShape>({
  Wishlist: null,
  setWishlist: () => undefined,
});

export function WishlistProvider({ children }: { children: ReactNode }) {
  let [Wishlist, setWishlist] = useState<wishlist | null>(null);

  async function GetMywishlist() {
    let Wishlist = await GetmyWishlist();
    setWishlist(Wishlist);
  }

  useEffect(() => {
    GetMywishlist();
  }, []);

  return (
    <Wishlistcontext.Provider value={{ Wishlist, setWishlist }}>
      {children}
    </Wishlistcontext.Provider>
  );
}
