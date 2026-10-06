"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { cart } from "../interface/cart";
import { GetCartProducts } from "../Services/CartActions/GetCartProducts";

type CartShape = {
  cart: cart | null;
  setCart: Dispatch<SetStateAction<cart | null>>;
};

export const cartcontext = createContext<CartShape>({
  cart: null,
  setCart: () => undefined,
});

export function CartProvider({ children }: { children: ReactNode }) {
  let [cart, setCart] = useState<cart | null>(null);

  async function GetMyCART() {
    let cart = await GetCartProducts();
    setCart(cart);
  }

  useEffect(() => {
    GetMyCART();
  }, []);

  return (
    <cartcontext.Provider value={{ cart, setCart }}>
      {children}
    </cartcontext.Provider>
  );
}
