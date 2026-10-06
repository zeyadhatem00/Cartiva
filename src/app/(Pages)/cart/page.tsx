"use client";

import { cartcontext } from "@/app/context/CartContext";
import { DeleteProductFromCART } from "@/app/Services/CartActions/DeleteProductFromCART";
import { DeleteTheWholeCart } from "@/app/Services/CartActions/DeleteTheWholeCart";
import { GetCartProducts } from "@/app/Services/CartActions/GetCartProducts";
import { UpdateProductQuantity } from "@/app/Services/CartActions/UpdateProductQuantity";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Lock,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function CartPage() {
  let { cart, setCart } = useContext(cartcontext);

  async function GetmyCart() {
    let cart = await GetCartProducts();
    setCart(cart);
  }

  async function DeleteProduct(id: string) {
    let cart = await DeleteProductFromCART(id);
    setCart(cart);
  }

  async function UpgradeQuantity(count: number, id: string) {
    let cart = await UpdateProductQuantity(count, id);
    setCart(cart);
  }

  async function DeleteTheCart() {
    await DeleteTheWholeCart();
    GetmyCart();
  }

  return (
    <>
      {cart?.data.products.length == 0 || cart == null ? (
        <div className="flex min-h-screen flex-col bg-[#f7f8fa] text-[#151922]">
          <main className="flex flex-1 items-center justify-center px-4 py-16 sm:py-24">
            <div className="w-full max-w-130 rounded-[24px] ]  px-6 py-12 text-center sm:px-12 sm:py-16">
              <div className="relative mx-auto grid size-24 place-items-center rounded-full bg-[#eef6ff]  text-[#2864d7]">
                <ShoppingBag size={42} strokeWidth={1.45} />
                <span className="absolute right-1 top-0 grid size-7 place-items-center rounded-full bg-[#d9f7e9] text-[11px] font-black text-[#15704a]">
                  0
                </span>
              </div>
              <p className="mt-8 text-[10px] font-black uppercase tracking-[0.16em] text-[#2864d7]">
                Your cart is waiting
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-[-0.08em] sm:text-5xl">
                Your cart is empty.
              </h1>
              <p className="mx-auto mt-4 max-w-[36ch] text-sm leading-6 text-[#667180]">
                Looks like you haven't added anything yet. Explore Cartiva and
                find something made for your everyday.
              </p>
              <Link
                href="/Shop"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#2864d7] px-6 py-3.5 text-[11px] font-black uppercase tracking-widest text-white shadow-[0_8px_18px_rgba(40,100,215,0.2)] transition-all hover:bg-[#151922] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2864d7]/20"
              >
                Start shopping
                <ArrowRight size={15} />
              </Link>
            </div>
          </main>
        </div>
      ) : (
        <div className="min-h-screen bg-[#f7f8fa] text-[#151922]">
          <main className="mx-auto max-w-330 px-4 pb-20 lg:px-8">
            <nav
              className="flex items-center gap-2 py-6 text-[11px] font-semibold text-[#8a929f]"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-[#2864d7]">
                Home
              </Link>
              <ChevronRight size={13} />
              <span className="font-bold text-[#394351]">Shopping cart</span>
            </nav>
            <section className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="inline-flex items-center gap-2 rounded-md bg-[#d9f7e9] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-[#15704a]">
                  <ShoppingCart size={12} /> Your selection
                </p>
                <h1 className="mt-4 font-display text-[clamp(2.7rem,6vw,5rem)] font-bold leading-[0.88] -tracking-widest">
                  Shopping
                  <br />
                  <span className="text-[#2864d7]">cart.</span>
                </h1>
                <p className="mt-4 text-sm text-[#667180]">
                  You have{" "}
                  <strong className="text-[#2864d7]">
                    {cart?.data.products.length} items
                  </strong>{" "}
                  waiting for their next home.
                </p>
              </div>
            </section>

            <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_360px] xl:gap-10">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#2864d7]">
                    Ready when you are
                  </p>
                  <button
                    type="button"
                    onClick={DeleteTheCart}
                    className="inline-flex cursor-pointer items-center gap-2 text-[10px] font-black uppercase tracking-[0.08em] text-[#8a929f] transition-colors hover:text-[#e45757]"
                  >
                    <Trash2 size={13} /> Clear cart
                  </button>
                </div>

                <div className="space-y-3">
                  {" "}
                  {cart?.data.products.map((product) => {
                    return (
                      <article
                        key={product.product._id}
                        className="group relative overflow-hidden rounded-[20px] border border-[#e4e7ec] bg-white p-4 shadow-[0_8px_22px_rgba(21,25,34,0.035)] transition-all duration-300 hover:border-[#c9d7f2] hover:shadow-[0_16px_30px_rgba(40,100,215,0.08)] sm:p-5"
                      >
                        <div className="flex gap-4 sm:gap-5">
                          <div className="relative size-28 shrink-0 overflow-hidden rounded-2xl bg-[#f0f2f5] sm:size-36">
                            <Image
                              src={product.product.imageCover}
                              width={100}
                              height={100}
                              alt={product.product.title}
                              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
                            <div>
                              <p className="text-[9px] font-black uppercase tracking-[0.13em] text-[#8a929f]">
                                {product.product.category.name}
                              </p>
                              <h2 className="mt-1.5 font-display text-lg font-bold tracking-[-0.045em] sm:text-xl">
                                {product.product.title}
                              </h2>

                              <p className="mt-3 font-display text-xl font-bold tracking-tighter text-[#15704a]">
                                {product.price} EGP
                              </p>
                            </div>
                            <div className="mt-4 flex flex-wrap items-center gap-4">
                              <div className="flex h-10 items-center rounded-lg border border-[#dfe4ea] bg-white">
                                <button
                                  type="button"
                                  onClick={() => {
                                    UpgradeQuantity(
                                      product.count - 1,
                                      product.product._id,
                                    );
                                  }}
                                  className="grid cursor-pointer size-9 place-items-center text-[#667180] transition-colors hover:text-[#2864d7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
                                >
                                  <Minus size={14} />
                                </button>
                                <span className="w-7 text-center text-sm font-black text-[#151922]">
                                  {product.count}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => {
                                    UpgradeQuantity(
                                      product.count + 1,
                                      product.product._id,
                                    );
                                  }}
                                  className="grid cursor-pointer size-9 place-items-center text-[#667180] transition-colors hover:text-[#2864d7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
                                >
                                  <Plus size={14} />
                                </button>
                              </div>
                              <span className="text-[10px] font-bold text-[#8a929f]">
                                In stock · ready to ship
                              </span>
                            </div>
                          </div>
                          <div className="flex shrink-0 flex-col items-end justify-between">
                            <button
                              onClick={() => {
                                DeleteProduct(product.product._id);
                              }}
                              className="grid size-9 cursor-pointer active:scale-[0.98] transtion-all duration-150 place-items-center rounded-lg border border-[#f1d6d2] text-[#e45757] transition-colors hover:bg-[#fff0ed]"
                            >
                              <Trash2 size={15} />
                            </button>
                            <div className="text-right">
                              <p className="text-[10px] text-[#8a929f]">
                                Item total
                              </p>
                              <strong className="font-display text-xl font-bold tracking-tighter text-[#151922]">
                                {product.price * product.count} EGP
                              </strong>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#e4e7ec] pt-5">
                  <Link
                    href="/Shop"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.08em] text-[#2864d7] hover:text-[#151922]"
                  >
                    <ArrowLeft size={14} /> Continue shopping
                  </Link>
                  <span className="text-[10px] text-[#8a929f]">
                    Free delivery unlocked
                  </span>
                </div>
              </div>

              <aside className="lg:sticky lg:top-31.5">
                <div className="overflow-hidden rounded-[22px] border border-[#e4e7ec] bg-white shadow-[0_14px_30px_rgba(21,25,34,0.07)]">
                  <div className="bg-[#151922] px-6 py-5 text-white">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#8fc4ff]">
                      Your order
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-bold tracking-[-0.06em]">
                      Order summary
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between gap-4">
                        <span className="text-[#667180]">
                          Subtotal ({cart?.numOfCartItems} items)
                        </span>
                        <strong className="text-[#151922]">
                          {cart?.data.totalCartPrice.toFixed(2)} EGP
                        </strong>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-[#667180]">Shipping</span>
                        {cart.data.totalCartPrice > 200 ? (
                          <span className="font-bold text-[#15704a]">Free</span>
                        ) : (
                          <span className="font-bold text-black">75 EGP</span>
                        )}
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-[#667180]">Estimated tax</span>
                        <span className="text-[#667180]">
                          Calculated at checkout
                        </span>
                      </div>
                    </div>
                    <div className="my-5 border-t border-[#edf0f3]" />
                    <div className="flex items-end justify-between gap-4">
                      <span className="font-black text-[#151922]">
                        Estimated total
                      </span>
                      <strong className="font-display text-3xl font-bold tracking-[-0.07em] text-[#15704a]">
                        {cart?.data.totalCartPrice > 200
                          ? cart?.data.totalCartPrice
                          : cart?.data.totalCartPrice + 75}{" "}
                        EGP
                      </strong>
                    </div>
                    <Link href="/Checkout">
                      {" "}
                      <button className="mt-6 cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2864d7] px-5 py-3.5 text-[11px] font-black uppercase tracking-widest text-white shadow-[0_8px_18px_rgba(40,100,215,0.2)] transition-all duration-150 active:scale-[0.98] hover:bg-[#151922]">
                        <Lock size={15} /> Secure checkout
                      </button>
                    </Link>

                    <div className="my-6 border-t border-[#edf0f3]" />
                    <div className="space-y-3 text-xs text-[#667180]">
                      <p className="flex items-start gap-2">
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0 text-[#15704a]"
                        />
                        Your cart items will be saved
                      </p>
                      <p className="flex items-start gap-2">
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0 text-[#15704a]"
                        />
                        Track your orders easily
                      </p>
                      <p className="flex items-start gap-2">
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0 text-[#15704a]"
                        />
                        Access member-only deals
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-[#d8efe2] bg-[#effbf4] p-4">
                  <ShieldCheck
                    size={19}
                    className="mt-0.5 shrink-0 text-[#15704a]"
                  />
                  <div>
                    <p className="text-xs font-black text-[#15704a]">
                      Secure checkout
                    </p>
                    <p className="mt-1 text-[10px] leading-4 text-[#5e746c]">
                      Your payment details are protected with Cartiva.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </main>
        </div>
      )}
    </>
  );
}
