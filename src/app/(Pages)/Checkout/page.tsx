"use client";

import { cartcontext } from "@/app/context/CartContext";
import { VisaPayment } from "@/app/Services/CheckoutACtions/Visa.api";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  CreditCard,
  LockKeyhole,
  MapPin,
  Phone,
  ShieldCheck,
  ShoppingCart,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { CashoutSchema } from "@/app/Schema/Checkoutdetails";

import { CashPayment } from "@/app/Services/CheckoutACtions/Cash.api";
import { GetCartProducts } from "@/app/Services/CartActions/GetCartProducts";
import { useRouter } from "next/navigation";
import Spinner2 from "@/app/_Components/Spinner/Spinner";

export default function CheckoutPage() {
  let { cart, setCart } = useContext(cartcontext);
  let [cash, setCash] = useState(true);
  let [visa, setVisa] = useState(false);
  let [loading, setLoading] = useState(false);
  let route = useRouter();

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CashoutSchema),
    mode: "onChange",
    defaultValues: {
      details: "",
      phone: "",
      city: "",
    },
  });

  async function SendData(data: any) {
    setLoading(true)
    if (visa) {
      let res = await VisaPayment(data, cart!.cartId);
      if (res.status == "success") {
        window.location.href = res.session.url;
        setLoading(false)
      } else {
        toast.error(res.message);
      }
    } else {
      let res = await CashPayment(data, cart!.cartId);
      if (res.status == "success") {
        setLoading(false)
        let cart = await GetCartProducts();
        setCart(cart);
        route.push("/allorders");
        toast.success("order placed");
      } else {
        toast.error("Something went wrong");
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#151922]">
      <main className="mx-auto max-w-330 px-4 py-7 lg:px-8 lg:py-10">
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
              <Link href="/cart" className="hover:text-[#2864d7]">
                Cart
              </Link>
              <ChevronRight size={13} />
              <span className="font-bold text-[#394351]">Checkout</span>
            </nav>
            <h1 className="mt-5 font-display text-[clamp(2.7rem,6vw,5rem)] font-bold leading-[0.88] -tracking-widest">
              Complete your
              <br />
              <span className="text-[#2864d7]">order.</span>
            </h1>
            <p className="mt-4 max-w-[46ch] text-sm leading-6 text-[#667180]">
              Add your delivery details and choose how you would like to pay.
            </p>
          </div>
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.08em] text-[#2864d7] hover:text-[#151922]"
          >
            <ArrowLeft size={14} /> Back to cart
          </Link>
        </div>

        <form
          onSubmit={handleSubmit(SendData)}
          className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_370px] xl:gap-10"
        >
          <div className="space-y-6">
            <section className="overflow-hidden rounded-[22px] border border-[#e4e7ec] bg-white shadow-[0_10px_26px_rgba(21,25,34,0.045)]">
              <div className="flex items-center gap-4 bg-[#151922] px-5 py-5 text-white sm:px-7">
                <span className="grid size-11 place-items-center rounded-xl bg-[#2864d7]">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#8fc4ff]">
                    Step 01
                  </p>
                  <h2 className="mt-1 font-display text-xl font-bold tracking-tighter">
                    Shipping address
                  </h2>
                </div>
              </div>
              <div className="p-5 sm:p-7">
                <div className="flex items-start gap-3 rounded-xl border border-[#cfe0f7] bg-[#eef6ff] p-4">
                  <Truck size={18} className="mt-0.5 shrink-0 text-[#2864d7]" />
                  <div>
                    <p className="text-xs font-black text-[#2864d7]">
                      Delivery information
                    </p>
                    <p className="mt-1 text-[11px] leading-5 text-[#5f7086]">
                      Please use a complete address so your order arrives
                      smoothly.
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-5">
                  <label className="block">
                    <span className="text-xs font-bold text-[#394351]">
                      City
                    </span>
                    <input
                      type="text"
                      {...register("city")}
                      placeholder="Cairo, New Cairo"
                      className="mt-2 w-full rounded-xl border border-[#dfe4ea] bg-white px-4 py-3 text-sm text-[#151922] outline-none transition-colors placeholder:text-[#9aa2ad] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
                    />
                    {errors.city && (
                      <span className="mt-2 block text-[14px] leading-4 text-red-600">
                        {errors.city.message}
                      </span>
                    )}
                    {}
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold text-[#394351]">
                      Street address
                    </span>
                    <input
                      type="text"
                      {...register("details")}
                      placeholder="Street name, building number, floor, apartment..."
                      className="mt-2 w-full rounded-xl border border-[#dfe4ea] bg-white px-4 py-3 text-sm text-[#151922] outline-none transition-colors placeholder:text-[#9aa2ad] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
                    />
                    {errors.details && (
                      <span className="mt-2 block text-[14px] leading-4 text-red-600">
                        {errors.details.message}
                      </span>
                    )}
                  </label>
                  <div className="grid ">
                    <label className="block">
                      <span className="text-xs font-bold text-[#394351]">
                        Phone number
                      </span>
                      <div className="relative mt-2">
                        <Phone
                          size={16}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8a929f]"
                        />
                        <input
                          type="tel"
                          {...register("phone")}
                          placeholder="010 0000 0000"
                          className="w-full rounded-xl border border-[#dfe4ea] bg-white py-3 pl-11 pr-4 text-sm text-[#151922] outline-none transition-colors placeholder:text-[#9aa2ad] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
                        />
                        {errors.phone && (
                          <span className="mt-2 block text-[14px] leading-4 text-red-600">
                            {errors.phone.message}
                          </span>
                        )}
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <section className="overflow-hidden rounded-[22px] border border-[#e4e7ec] bg-white shadow-[0_10px_26px_rgba(21,25,34,0.045)]">
              <div className="flex items-center gap-4 bg-[#151922] px-5 py-5 text-white sm:px-7">
                <span className="grid size-11 place-items-center rounded-xl bg-[#15704a]">
                  <CreditCard size={20} />
                </span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#b9e4ce]">
                    Step 02
                  </p>
                  <h2 className="mt-1 font-display text-xl font-bold tracking-tighter">
                    Payment method
                  </h2>
                </div>
              </div>
              <div className="space-y-4 p-5 sm:p-7">
                <label
                  onClick={() => {
                    setCash(true);
                    setVisa(false);
                  }}
                  className={`flex cursor-pointer items-start gap-4 rounded-2xl border ${cash ? "border-[#15704a] bg-[#effbf4]" : "border-[#e4e7ec] bg-white hover:bg-[#effbf4] hover:border-[#15704a]"} p-4 transition-all duration-150 `}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={cash}
                    readOnly
                    className="mt-1 size-4 accent-[#15704a]"
                  />
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#d9f7e9] text-[#15704a]">
                    <ShoppingCart size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-black text-[#151922]">
                      Cash on delivery
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-[#667180]">
                      Pay when your order arrives at your door.
                    </span>
                  </span>
                  {cash ? (
                    <Check
                      size={18}
                      className="ml-auto shrink-0 text-[#15704a]"
                    />
                  ) : (
                    ""
                  )}
                </label>
                <label
                  onClick={() => {
                    setVisa(true);
                    setCash(false);
                  }}
                  className={`flex cursor-pointer items-start gap-4 rounded-2xl border ${visa ? "bg-[#e7effd] border-[#2864d7]" : "border-[#e4e7ec] bg-white hover:border-[#2864d7] hover:bg-[#f8fbff]"}  p-4 transition-all duration-150 `}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={visa}
                    readOnly
                    className="mt-1 size-4 accent-[#2864d7]"
                  />
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#eef6ff] text-[#2864d7]">
                    <CreditCard size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-black text-[#151922]">
                      Pay online
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-[#667180]">
                      Secure payment by card. You will continue to the payment
                      step.
                    </span>
                  </span>
                  {visa ? (
                    <Check
                      size={18}
                      className="ml-auto shrink-0 text-[#2864d7]"
                    />
                  ) : (
                    ""
                  )}
                </label>
                <div className="flex items-start gap-3 rounded-xl border border-[#d8efe2] bg-[#effbf4] p-4">
                  <ShieldCheck
                    size={18}
                    className="mt-0.5 shrink-0 text-[#15704a]"
                  />
                  <div>
                    <p className="text-xs font-black text-[#15704a]">
                      Private and protected
                    </p>
                    <p className="mt-1 text-[11px] leading-5 text-[#5e746c]">
                      Your checkout details are protected with Cartiva security.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {cart ? (
            <aside className="lg:sticky lg:top-10 lg:self-start">
              <div className="overflow-hidden rounded-[22px] border border-[#e4e7ec] bg-white shadow-[0_14px_30px_rgba(21,25,34,0.07)]">
                <div className="bg-[#151922] px-6 py-5 text-white">
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#8fc4ff]">
                    Final step
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-bold tracking-[-0.06em]">
                    Order summary
                  </h2>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 border-b border-[#edf0f3] pb-5">
                    <div className="grid size-16 shrink-0 place-items-center rounded-xl bg-[#eef6ff] text-[#2864d7]">
                      <ShoppingCart size={28} strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-black text-[#151922]">
                        Cartiva everyday picks
                      </p>
                      <p className="mt-1 text-xs text-[#667180]">
                        {cart?.numOfCartItems} items · ready to ship
                      </p>
                    </div>
                    <strong className="ml-auto text-sm text-[#151922]">
                      {cart?.data.totalCartPrice} EGP
                    </strong>
                  </div>
                  <div className="space-y-4 py-5 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-[#667180]">Subtotal</span>
                      <strong> {cart?.data.totalCartPrice} EGP</strong>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-[#667180]">Delivery</span>
                      {cart?.data.totalCartPrice > 200 ? (
                        <span className="font-bold text-[#15704a]">Free</span>
                      ) : (
                        <span className="font-bold text-black">75 EGP</span>
                      )}
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-[#667180]">Estimated tax</span>
                      <span className="text-[#8a929f]">At checkout</span>
                    </div>
                  </div>
                  <div className="border-t border-[#edf0f3] pt-5">
                    <div className="flex items-end justify-between gap-4">
                      <span className="font-black">Total</span>
                      <strong className="font-display text-3xl font-bold tracking-[-0.07em] text-[#15704a]">
                        {cart?.data.totalCartPrice > 200
                          ? cart?.data.totalCartPrice
                          : cart?.data.totalCartPrice + 75}{" "}
                        EGP
                      </strong>
                    </div>
                    {visa && (
                      <button
                        type="submit"
                        className="duration-150  cursor-pointer mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2864d7] px-5 py-3.5 text-[11px] font-black uppercase tracking-widest text-white shadow-[0_8px_18px_rgba(40,100,215,0.2)] transition-all hover:bg-[#151922] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2864d7]/20"
                      >
                       
                        {loading ? (
                          <Spinner2 />
                        ) : (
                          <>
                            {" "}
                            Proceed to CheckOut
                            <ArrowRight size={15} />
                          </>
                        )}
                      </button>
                    )}
                    {cash && (
                      <button
                        type="submit"
                        className="duration-150  cursor-pointer mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2864d7] px-5 py-3.5 text-[11px] font-black uppercase tracking-widest text-white shadow-[0_8px_18px_rgba(40,100,215,0.2)] transition-all hover:bg-[#151922] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2864d7]/20"
                      >
                        {loading ? (
                          <Spinner2 />
                        ) : (
                          <>
                            {" "}
                            Place order
                            <ArrowRight size={15} />
                          </>
                        )}
                      </button>
                    )}
                    <p className="mt-4 flex items-center justify-center gap-2 text-center text-[10px] font-bold text-[#8a929f]">
                      <LockKeyhole size={13} className="text-[#15704a]" />
                      Secure checkout · Free returns
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          ) : (
            <div className="flex items-center h-100 justify-center">
              {" "}
              <Spinner2 />
            </div>
          )}
        </form>

        <Link
          href="/cart"
          className="mt-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.08em] text-[#667180] hover:text-[#2864d7]"
        >
          <ArrowLeft size={14} /> Return to cart
        </Link>
      </main>
    </div>
  );
}
