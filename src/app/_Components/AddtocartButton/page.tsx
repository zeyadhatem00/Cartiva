"use client";
import { Addtocart } from "@/app/Services/CartActions/AddToCart";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { useContext } from "react";
import { cartcontext } from "@/app/context/CartContext";
import { GetCartProducts } from "@/app/Services/CartActions/GetCartProducts";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function AddTocartBtn({
  detailsPage,
  id,
}: {
  detailsPage: boolean;
  id: string;
}) {
  let { setCart } = useContext(cartcontext);
  let { data: session } = useSession();
  let route = useRouter();
  async function addToCART(id: string) {
    let res = await Addtocart(id);
    if (res.status == "success") {
      let cart = await GetCartProducts();
      setCart(cart);
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  }

  return (
    <>
      {detailsPage ? (
        <button
          onClick={() => {
            if (session) {
              addToCART(id);
            } else {
              route.push("/LogIn");
            }
          }}
          className="inline-flex items-center transition-all duration-150 active:scale-[0.98]  justify-center gap-2 rounded-lg bg-[#2864d7] px-5 py-3.5 text-[11px] font-black uppercase tracking-widest text-white  hover:bg-[#151922] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
        >
          <ShoppingBag size={15} /> Add To Cart
        </button>
      ) : (
        <button
          onClick={() => {
            if (session) {
              addToCART(id);
            } else {
              route.push("/LogIn");
            }
          }}
          className="grid size-9 transition-all duration-150 active:scale-[0.98] place-items-center cursor-pointer rounded-lg bg-[#2864d7] text-white hover:bg-[#151922] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7] "
        >
          <ShoppingBag size={15} />
        </button>
      )}
    </>
  );
}
