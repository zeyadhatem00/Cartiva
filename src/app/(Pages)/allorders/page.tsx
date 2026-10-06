"use client";

import { Order } from "@/app/interface/Orders";
import { GetOrders } from "@/app/Services/GetUserOrders.api";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  CreditCard,
  DollarSign,
  Heart,
  MapPin,
  Package,
  PackageOpen,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function OrdersPage() {
  let { data: session } = useSession();
  let [orders, setOrders] = useState<Order[]>([]);
  let [showorderDetalis, setShow] = useState<string | null>(null);

  async function getOrders() {
    let orders = await GetOrders(session!.user.id);
    setOrders(orders);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#151922]">
     

        {orders.length == 0 ? (
          <main className="mx-auto flex min-h-[calc(100vh-188px)] max-w-330 items-center justify-center px-4 py-12 lg:px-8 lg:py-16">
            <section className="w-full max-w-180 text-center">
              <div className="relative mx-auto grid size-28 place-items-center rounded-[30px] border border-[#c9d7f2] bg-[#eef6ff] text-[#2864d7] shadow-[0_18px_40px_rgba(40,100,215,0.12)] sm:size-32">
                <div className="absolute inset-3 rounded-[22px] border border-dashed border-[#9fc0f2]" />
                <PackageOpen size={48} strokeWidth={1.35} />
                <span className="absolute -right-2 -top-2 grid size-9 place-items-center rounded-full bg-[#2864d7] text-[11px] font-black text-white shadow-[0_8px_18px_rgba(40,100,215,0.25)]">
                  0
                </span>
              </div>
              <p className="mt-8 text-[10px] font-black uppercase tracking-[0.18em] text-[#2864d7]">
                Your order space is ready
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-[-0.08em] sm:text-6xl">
                No orders yet.
              </h1>
              <p className="mx-auto mt-5 max-w-[42ch] text-sm leading-6 text-[#667180] sm:text-base">
                Once you place an order, you’ll find every delivery update,
                payment detail, and receipt right here.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/Shop"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2864d7] px-6 py-3.5 text-[11px] font-black uppercase tracking-widest] text-white shadow-[0_8px_18px_rgba(40,100,215,0.2)] transition-all hover:bg-[#151922] active:scale-[0.98] sm:w-auto"
                >
                  Start shopping <ArrowRight size={15} />
                </Link>
                <Link
                  href="/Categories"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#dfe4ea] bg-white px-6 py-3.5 text-[11px] font-black uppercase tracking-widest] text-[#394351] transition-colors hover:border-[#2864d7] hover:text-[#2864d7] sm:w-auto"
                >
                  Browse categories
                </Link>
              </div>
              <div className="mx-auto mt-10 grid max-w-155 gap-3 border-t border-[#e4e7ec] pt-6 text-left sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-[#e4e7ec]">
                <div className="flex items-center gap-3 px-3 sm:justify-center">
                  <Truck size={19} className="text-[#2864d7]" />
                  <span>
                    <strong className="block text-[11px]">Fast delivery</strong>
                    <small className="text-[10px] text-[#8a929f]">
                      Track every order
                    </small>
                  </span>
                </div>
                <div className="flex items-center gap-3 px-3 sm:justify-center">
                  <ShieldCheck size={19} className="text-[#2864d7]" />
                  <span>
                    <strong className="block text-[11px]">
                      Secure checkout
                    </strong>
                    <small className="text-[10px] text-[#8a929f]">
                      Protected payments
                    </small>
                  </span>
                </div>
                <div className="flex items-center gap-3 px-3 sm:justify-center">
                  <Heart size={19} className="text-[#2864d7]" />
                  <span>
                    <strong className="block text-[11px]">Easy returns</strong>
                    <small className="text-[10px] text-[#8a929f]">
                      30 days, no drama
                    </small>
                  </span>
                </div>
              </div>
    
            </section>
          </main>
        ) : (
          <>
             <main className="mx-auto max-w-330 px-4 py-8 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <nav
              className="flex items-center gap-2 text-[11px] font-semibold text-[#8a929f]"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-[#2864d7]">
                Home
              </Link>
              <ChevronRight size={13} />
              <span className="font-bold text-[#394351]">My orders</span>
            </nav>
            <div className="mt-5 flex items-center gap-4">
              <span className="grid size-12 place-items-center rounded-2xl bg-[#eef6ff] text-[#2864d7]">
                <Package size={23} />
              </span>
              <div>
                <h1 className="font-display text-3xl font-bold tracking-[-0.07em] sm:text-4xl">
                  My orders
                </h1>
                <p className="mt-1 text-xs text-[#667180]">
                  Track and manage your Cartiva purchases.
                </p>
              </div>
            </div>
          </div>
          <Link
            href="/Shop"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.08em] text-[#2864d7] hover:text-[#151922]"
          >
            <ArrowLeft size={14} /> Continue shopping
          </Link>
        </div>
            {orders.map((order) => {
              return (
                <section
                  key={order._id}
                  className="mt-8 overflow-hidden rounded-[24px] border border-[#c9d7f2] bg-white shadow-[0_12px_30px_rgba(40,100,215,0.06)]"
                >
                  <div className="flex flex-col gap-6 border-b border-[#edf0f3] bg-[#f8fbff] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="relative grid size-16 shrink-0 place-items-center  rounded-2xl bg-[#eef1f4]">
                        <Image
                          src={order.cartItems[0].product.imageCover}
                          alt={order.cartItems[0].product.title}
                          className="size-full object-cover"
                          width={100}
                          height={100}
                        />
                        <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-[#151922] text-[9px] font-black text-white">
                          {order.cartItems.length == 1
                            ? order.cartItems.length
                            : `+ ${order.cartItems.length - 1}`}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-[#eef6ff] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.08em] text-[#2864d7]">
                            {order.isPaid ? "On the way" : "Processing"}
                          </span>
                          <span className="text-[10px] font-bold text-[#8a929f]">
                            Order #{order.id}
                          </span>
                        </div>
                        <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-[#8a929f]">
                          <span>
                            {new Date(order.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              },
                            )}
                          </span>
                          <span>•</span>
                          <span>{order.cartItems.length} items</span>
                        </p>
                        <p className="mt-2 font-display text-xl font-bold tracking-tighter text-[#151922]">
                          {order.totalOrderPrice} EGP
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center  sm:self-end">
                      <button
                        onClick={() => {
                          setShow(
                            showorderDetalis == order._id ? null : order._id,
                          );
                        }}
                        type="button"
                        className="cursor-pointer active:scale-[0.98] inline-flex items-center gap-2 rounded-xl bg-[#eef6ff] px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.08em] text-[#2864d7] transition-all duration-150 hover:bg-[#2864d7] hover:text-white"
                      >
                        Details{" "}
                        <ChevronDown
                          className={` ${showorderDetalis == order._id ? "rotate-180 " : "rotate-0"} transition-all duration-150 `}
                          size={13}
                        />
                      </button>
                    </div>
                  </div>

                  <div
                    className={` ${showorderDetalis == order._id ? "visible opacity-100 max-h-fit p-5 sm:p-7" : "invisible opacity-0 max-h-0"} transition-all  duration-150 `}
                  >
                    <div className="flex items-center gap-2 text-xs font-black text-[#394351]">
                      <span className="grid size-6 place-items-center rounded-lg bg-[#eef6ff] text-[#2864d7]">
                        <Package size={13} />
                      </span>{" "}
                      Order items
                    </div>
                    <div className="mt-3 rounded-2xl border border-[#edf0f3] px-4 sm:px-5">
                      {order.cartItems.map((item) => {
                        return (
                          <div
                            key={item._id}
                            className="flex items-center gap-3 border-t border-[#edf0f3] py-3 first:border-t-0 sm:gap-4"
                          >
                            <div className=" size-14 shrink-0 place-items-center overflow-hidden rounded-xl bg-[#f1f3f6] sm:size-16">
                              <Image
                                src={item.product.imageCover}
                                alt={item.product.title}
                                width={100}
                                height={100}
                                className="size-full object-cover"
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-xs font-black text-[#151922] sm:text-sm">
                                {item.product.title}
                              </p>
                              <p className="mt-1 text-[12px] text-[#8a929f]">
                                {item.count} x {item.price}EGP
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs font-black text-[#151922] sm:text-sm">
                                {item.price * item.count} EGP
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                      <div className="rounded-2xl border border-[#e4e7ec] bg-[#fbfcfd] p-5">
                        <div className="flex items-center gap-2 text-xs font-black text-[#394351]">
                          <MapPin size={15} className="text-[#2864d7]" />{" "}
                          Delivery address
                        </div>
                        <p className="mt-4 text-sm font-black text-[#151922]">
                          {order.shippingAddress.city}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-[#667180]">
                          {order.shippingAddress.details}
                          <br />
                          {order.shippingAddress.phone}
                        </p>

                        <div className="mt-4 border-t border-[#edf0f3] pt-4">
                          <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#8a929f]">
                            {order.paymentMethodType == "card" ? (
                              <CreditCard
                                size={13}
                                className="text-[#2864d7]"
                              />
                            ) : (
                              <DollarSign
                                size={13}
                                className="text-[#15704a]"
                              />
                            )}{" "}
                            Payment method
                          </p>
                          <p className="mt-1.5 text-xs font-black text-[#151922]">
                            {order.paymentMethodType}
                          </p>
                          {order.paymentMethodType == "card" ? (
                            <p className="mt-1 text-[10px] text-[#8a929f]">
                              Paid securely at checkout
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-[#c9d7f2] bg-[#eef6ff] p-5">
                        <div className="flex items-center gap-2 text-xs font-black text-[#2864d7]">
                          <ShieldCheck size={15} /> Order summary
                        </div>
                        <div className="mt-4 space-y-3 text-xs">
                          <div className="flex justify-between gap-4 text-[#667180]">
                            <span>Subtotal</span>
                            <strong className="text-[#151922]">
                              {order.totalOrderPrice} EGP
                            </strong>
                          </div>
                          <div className="flex justify-between gap-4 text-[#667180]">
                            <span>Shipping</span>
                            <strong className="text-[#2864d7]">
                              {order.shippingPrice}
                            </strong>
                          </div>
                          <div className="flex justify-between gap-4 text-[#667180]">
                            <span>Payment</span>
                            <strong className="inline-flex items-center gap-1.5 text-[#151922]">
                              {order.paymentMethodType == "card" ? (
                                <CreditCard
                                  size={13}
                                  className="text-[#2864d7]"
                                />
                              ) : (
                                <DollarSign
                                  size={13}
                                  className="text-[#15704a]"
                                />
                              )}
                              {order.paymentMethodType}
                            </strong>
                          </div>
                          <div className="flex justify-between gap-4 border-t border-[#c9d7f2] pt-3 font-black text-[#151922]">
                            <span>Total</span>
                            <strong>{order.totalOrderPrice} EGP</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
            <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-[#e4e7ec] pt-6 sm:flex-row sm:items-center">
              <p className="text-xs text-[#8a929f]">
                Showing your latest purchases and delivery updates.
              </p>
              <Link
                href="/Shop"
                className="inline-flex items-center gap-2 rounded-xl bg-[#2864d7] px-4 py-2.5 text-xs font-black text-white transition-colors hover:bg-[#151922]"
              >
                Shop more products <ArrowRight size={14} />
              </Link>
            </div>
</main>

          </>
        )}
      
    </div>
  );
}
