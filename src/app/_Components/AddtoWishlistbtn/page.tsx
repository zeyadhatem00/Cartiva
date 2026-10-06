"use client";

import { Wishlistcontext } from "@/app/context/wishlistContext";
import { AddAWishlist } from "@/app/Services/WishlistActions/AddtoWishlist";
import { GetmyWishlist } from "@/app/Services/WishlistActions/GetmyWishlist";
import { Heart } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "sonner";

export default function ADDtoWishlist({
  id,
  detailsPage,
}: {
  id: string;
  detailsPage: boolean;
}) {
  let { Wishlist, setWishlist } = useContext(Wishlistcontext);
  let { data: session } = useSession();
  let route = useRouter();
  return (
    <>
      {session ? (
        <>
          {" "}
          {detailsPage ? (
            <button
              onClick={async () => {
                let res = await AddAWishlist(id);
                if (res.status == "success") {
                  let wishlist = await GetmyWishlist();
                  setWishlist(wishlist);
                  toast.success(res.message);
                }
              }}
              className={`inline-flex cursor-pointer  items-center justify-center w-full mt-3 gap-2 rounded-lg border border-[#dfe4ea] bg-white px-5 py-3 text-xs font-bold text-[#667180] transition-all duration-150 active:scale-[0.98] ${Wishlist?.data.some((item) => item._id == id) ? "" : "hover:border-[#2864d7] hover:text-[#2864d7] focus-visible:ring-[#2864d7]"} focus-visible:outline-none focus-visible:ring-2 `}
            >
              <Heart
                size={15}
                className={
                  Wishlist?.data.some((item) => {
                    return item._id == id;
                  })
                    ? "text-transparent"
                    : ""
                }
                fill={
                  Wishlist?.data.some((item) => {
                    return item._id == id;
                  })
                    ? "red"
                    : "white"
                }
              />{" "}
              {Wishlist?.data.some((item) => {
                return item._id == id;
              })
                ? "Saved to Wishlist"
                : "Add to Wishlist"}
            </button>
          ) : (
            <button
              onClick={async () => {
                let res = await AddAWishlist(id);
                if (res.status == "success") {
                  let wishlist = await GetmyWishlist();
                  setWishlist(wishlist);
                  toast.success(res.message);
                }
              }}
              className={`absolute right-3 top-3 z-10 cursor-pointer grid size-8 place-items-center rounded-full active:scale-[0.98] bg-white/90 ${Wishlist?.data.some((item) => item._id == id) ? "" : "text-[#151922] hover:bg-[#151922] hover:text-white"}  shadow-sm transition-all duration-150   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]`}
            >
              <Heart
                size={14}
                className={
                  Wishlist?.data.some((item) => {
                    return item._id == id;
                  })
                    ? "text-transparent"
                    : ""
                }
                fill={
                  Wishlist?.data.some((item) => {
                    return item._id == id;
                  })
                    ? "red"
                    : "white"
                }
              />
            </button>
          )}
        </>
      ) : (
        <>
          {" "}
          {detailsPage ? (
            <button
              onClick={() => {
                route.push("/LogIn");
              }}
              className={`inline-flex cursor-pointer  items-center justify-center w-full mt-3 gap-2 rounded-lg border border-[#dfe4ea] bg-white px-5 py-3 text-xs font-bold text-[#667180] transition-all duration-150 active:scale-[0.98] hover:border-[#2864d7] hover:text-[#2864d7] focus-visible:ring-[#2864d7] focus-visible:outline-none focus-visible:ring-2 `}
            >
              <Heart size={15} /> Add to Wishlist
            </button>
          ) : (
            <button
              onClick={() => {
                route.push("/LogIn");
              }}
              className={`absolute right-3 top-3 z-10 cursor-pointer grid size-8 place-items-center rounded-full active:scale-[0.98] bg-white/90  text-[#151922] hover:bg-[#151922] hover:text-white  shadow-sm transition-all duration-150   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]`}
            >
              <Heart size={14} />
            </button>
          )}
        </>
      )}
    </>
  );
}
