"use client";

import { cartcontext } from "@/app/context/CartContext";
import { Wishlistcontext } from "@/app/context/wishlistContext";
import { Addtocart } from "@/app/Services/CartActions/AddToCart";
import { GetCartProducts } from "@/app/Services/CartActions/GetCartProducts";
import { DeleteAWishlist } from "@/app/Services/WishlistActions/deleteWishlist";
import { GetmyWishlist } from "@/app/Services/WishlistActions/GetmyWishlist";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Gift,
  Heart,
  PackageSearch,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Trash2,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "sonner";

export default function WishlistPage() {
  let { Wishlist, setWishlist } = useContext(Wishlistcontext);
  let { cart, setCart } = useContext(cartcontext);

  return (
    <>
      {Wishlist?.data.length == 0 ? (
        <div className="min-h-screen bg-[#f7f8fa] text-[#151922]">
          <main className="mx-auto flex max-w-[1320px] flex-col px-4 py-8 lg:px-8 lg:py-10">
            <nav
              className="flex items-center gap-2 text-[11px] font-semibold text-[#8a929f]"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-[#2864d7]">
                Home
              </Link>
              <span>/</span>
              <span className="font-bold text-[#394351]">Wishlist</span>
            </nav>

            <section className="relative mt-6 overflow-hidden rounded-[28px] border border-[#dfe8f7] bg-white px-5 py-12 shadow-[0_18px_50px_rgba(40,100,215,0.07)] sm:px-10 sm:py-16 lg:px-16">
              <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-[#eef6ff] blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 -left-20 size-72 rounded-full bg-[#f1f6ff] blur-3xl" />
              <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
                <div className="relative grid size-28 place-items-center rounded-[30px] border border-[#c9d7f2] bg-[#eef6ff] text-[#2864d7] shadow-[0_16px_35px_rgba(40,100,215,0.12)] sm:size-32">
                  <span className="absolute -right-3 -top-3 grid size-10 place-items-center rounded-full bg-[#2864d7] text-white shadow-[0_8px_18px_rgba(40,100,215,0.25)]">
                    <Sparkles size={16} />
                  </span>
                  <Heart size={54} strokeWidth={1.45} />
                </div>
                <p className="mt-8 text-[10px] font-black uppercase tracking-[0.18em] text-[#2864d7]">
                  Your saved space
                </p>
                <h1 className="mt-3 font-display text-4xl font-bold tracking-[-0.075em] text-[#151922] sm:text-5xl">
                  Your wishlist is waiting.
                </h1>
                <p className="mt-4 max-w-md text-sm leading-6 text-[#667180]">
                  Save products you love and keep them ready for later. Your
                  favorite finds will appear here.
                </p>
                <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                  <Link
                    href="/Shop"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2864d7] px-6 py-3.5 text-xs font-black uppercase tracking-[0.08em] text-white shadow-[0_10px_22px_rgba(40,100,215,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#151922] active:scale-[0.98]"
                  >
                    <ShoppingCart size={15} /> Start shopping
                  </Link>
                  <Link
                    href="/Categories"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#dfe4ea] bg-white px-6 py-3.5 text-xs font-black uppercase tracking-[0.08em] text-[#394351] transition-colors hover:border-[#2864d7] hover:text-[#2864d7]"
                  >
                    <PackageSearch size={15} /> Browse categories
                  </Link>
                </div>
                <Link
                  href="/"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-black text-[#8a929f] transition-colors hover:text-[#2864d7]"
                >
                  <ArrowLeft size={14} /> Back to home
                </Link>
              </div>
            </section>

            <section className="mt-5 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#e4e7ec] bg-white sm:grid-cols-3">
              <div className="flex items-center gap-3 border-b border-[#edf0f3] px-5 py-4 sm:border-b-0 sm:border-r">
                <span className="grid size-9 place-items-center rounded-lg bg-[#eef6ff] text-[#2864d7]">
                  <Truck size={17} />
                </span>
                <div>
                  <p className="text-xs font-black text-[#151922]">
                    Fast delivery
                  </p>
                  <p className="text-[10px] text-[#8a929f]">
                    Track every order
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 border-b border-[#edf0f3] px-5 py-4 sm:border-b-0 sm:border-r">
                <span className="grid size-9 place-items-center rounded-lg bg-[#eef6ff] text-[#2864d7]">
                  <ShieldCheck size={17} />
                </span>
                <div>
                  <p className="text-xs font-black text-[#151922]">
                    Secure checkout
                  </p>
                  <p className="text-[10px] text-[#8a929f]">
                    Protected payments
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-4">
                <span className="grid size-9 place-items-center rounded-lg bg-[#eef6ff] text-[#2864d7]">
                  <Gift size={17} />
                </span>
                <div>
                  <p className="text-xs font-black text-[#151922]">
                    Weekly new finds
                  </p>
                  <p className="text-[10px] text-[#8a929f]">More to discover</p>
                </div>
              </div>
            </section>

            <div className="mt-8 flex items-center justify-between border-t border-[#e4e7ec] pt-5 text-[10px] font-bold text-[#8a929f]">
              <span>Need help finding something?</span>
              <Link
                href="/support"
                className="inline-flex items-center gap-1.5 text-[#2864d7] hover:text-[#151922]"
              >
                Contact support <ArrowRight size={13} />
              </Link>
            </div>
          </main>
        </div>
      ) : (
        <div className="min-h-screen bg-[#f7f8fa] text-[#151922]">
          <main className="mx-auto max-w-[1320px] px-4 py-8 lg:px-8 lg:py-10">
            <nav
              className="flex items-center gap-2 text-[11px] font-semibold text-[#8a929f]"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-[#2864d7]">
                Home
              </Link>
              <ChevronRight size={13} />
              <span className="font-bold text-[#394351]">Wishlist</span>
            </nav>
            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-2xl bg-[#eef6ff] text-[#2864d7]">
                  <Heart size={23} fill="currentColor" />
                </span>
                <div>
                  <h1 className="font-display text-3xl font-bold tracking-[-0.07em] sm:text-4xl">
                    My wishlist
                  </h1>
                  <p className="mt-1 text-xs text-[#667180]">
                    Keep the things you love close until you’re ready.
                  </p>
                </div>
              </div>
              <Link
                href="/Shop"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.08em] text-[#2864d7] hover:text-[#151922]"
              >
                <ArrowLeft size={14} /> Continue shopping
              </Link>
            </div>

            <section className="mt-6 space-y-3">
              <div className="hidden grid-cols-[minmax(0,1fr)_130px_250px] items-center gap-4 rounded-2xl border border-[#dfe5ed] bg-white px-5 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#8a929f] shadow-[0_6px_18px_rgba(21,25,34,0.03)] sm:grid">
                <span>Product</span>
                <span>Price</span>
                <span className="text-right">Actions</span>
              </div>
              {Wishlist?.data.map((item) => {
                return (
                  <article
                    key={item._id}
                    className="group grid gap-5 rounded-[20px] border border-[#dfe5ed] bg-white px-4 py-5 transition-all hover:-translate-y-0.5 hover:border-[#c9d7f2] hover:shadow-[0_12px_28px_rgba(40,100,215,0.08)] sm:grid-cols-[minmax(0,1fr)_130px_250px] sm:items-center sm:px-5 sm:py-6"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <Link
                        href={`productDetails/${item._id}`}
                        className=" size-20 shrink-0 place-items-center overflow-hidden rounded-2xl bg-[#f0f2f5] ring-1 ring-transparent transition-all group-hover:ring-[#2864d7]/30 sm:size-[84px]"
                      >
                        <Image
                          src={item.imageCover}
                          width={100}
                          height={100}
                          alt={item.title}
                          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </Link>
                      <div className="min-w-0">
                        <p className="text-[9px] font-black uppercase tracking-[0.14em] text-[#8a929f]">
                          {item.category.name}
                        </p>
                        <Link
                          href={`/productDetails/${item._id}`}
                          className="mt-1 block truncate font-display text-lg font-bold tracking-[-0.045em] text-[#151922] hover:text-[#2864d7]"
                        >
                          {item.title}
                        </Link>
                        <p className="mt-1 text-[10px] text-[#8a929f]">
                          Saved to your wishlist
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:block">
                      <span className="text-[10px] font-bold text-[#8a929f] sm:hidden">
                        Price
                      </span>
                      <strong className="text-base font-black text-[#151922]">
                        {item.price} EGP
                      </strong>
                    </div>
                    <div className="flex items-center gap-2 sm:justify-end">
                      <Link
                        href={`productDetails/${item._id}`}
                        className="flex flex-1 items-center active:scale-[0.98]  duration-150 justify-center gap-1.5 rounded-lg bg-[#2864d7] px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.06em] text-white shadow-[0_6px_14px_rgba(40,100,215,0.16)] transition-all hover:-translate-y-0.5 hover:bg-[#151922] sm:flex-none"
                      >
                        View product{" "}
                        <ChevronRight
                          className="translate-y-[-0.5px]"
                          size={13}
                        />
                      </Link>
                      <button
                        type="button"
                        disabled={cart?.data.products.some((product) => {
                          return product.product._id == item._id;
                        })}
                        onClick={async () => {
                          let res = await Addtocart(item._id);
                          if (res.status == "success") {
                            let cart = await GetCartProducts();
                            setCart(cart);
                            toast.success(res.message);
                          } else {
                            toast.error(res.message);
                          }
                        }}
                        className={`inline-flex cursor-pointer disabled:bg-green-700 disabled:text-white flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#151922] px-3 py-2.5 text-[9px] font-black uppercase tracking-[0.05em] text-white duration-150 transition-all hover:-translate-y-0.5 hover:bg-[#2864d7] active:scale-[0.98] sm:flex-none`}
                        aria-label="Add product to cart"
                      >
                        <ShoppingBag className="translate-y-[-1px]" size={12} />{" "}
                        {cart?.data.products.some((product) => {
                          return product.product._id == item._id;
                        })
                          ? "In cart"
                          : "Add to cart"}
                      </button>
                      <button
                        type="button"
                        onClick={async () => {
                          let res = await DeleteAWishlist(item._id);
                          if (res.status == "success") {
                            let wishlist = await GetmyWishlist();
                            setWishlist(wishlist);
                            toast.success(res.message);
                          }
                        }}
                        className="grid cursor-pointer active:scale-[0.98] duration-150 size-10 shrink-0 place-items-center rounded-lg border border-[#e4e7ec] bg-white text-[#8a929f] transition-all hover:border-red-500 hover:bg-red-100 hover:text-red-500"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </article>
                );
              })}
            </section>
          </main>
        </div>
      )}
    </>
  );
}
