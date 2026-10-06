"use client";
import Spinner2 from "@/app/_Components/Spinner/Spinner";
import { cartcontext } from "@/app/context/CartContext";
import { Wishlistcontext } from "@/app/context/wishlistContext";
import { LogININterface } from "@/app/interface/Auth";
import { loginSchema } from "@/app/Schema/loginSchema";
import { GetCartProducts } from "@/app/Services/CartActions/GetCartProducts";
import { GetmyWishlist } from "@/app/Services/WishlistActions/GetmyWishlist";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function SignInPage() {
  let [Showpass, SetShowPass] = useState(false);
  let { setCart } = useContext(cartcontext);
  let { setWishlist } = useContext(Wishlistcontext);

  let [loadin, setLoading] = useState(false);
  let navigate = useRouter();
  let { register, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  async function sendData(data: LogININterface) {
    setLoading(true);
    let res = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (res?.ok) {
      setLoading(false);
      toast.success("Loged in Successfully");
      let cart = await GetCartProducts();
      let wishlist = await GetmyWishlist();
      setWishlist(wishlist);
      setCart(cart);
      navigate.push("/");
    } else {
      toast.error("Invalid Email or Password");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#151922]">
      <main className="mx-auto grid max-w-330 gap-6 px-4 py-8 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-8 lg:py-16">
        <section className="relative overflow-hidden rounded-[24px] bg-[#151922] px-6 py-10 text-white shadow-[0_20px_48px_rgba(21,25,34,0.12)] sm:px-10 sm:py-14 lg:min-h-162.5 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute -right-28 -top-32 size-120 rounded-full bg-[#2864d7]/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-48 -left-20 size-100 rounded-full bg-[#d9f7e9]/10 blur-3xl" />
          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 rounded-md bg-[#d9f7e9] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-[#15704a]">
              <Sparkles size={12} /> Welcome back
            </p>
            <h1 className="mt-7 max-w-[9ch] font-display text-[clamp(3.2rem,6vw,6rem)] font-bold leading-[0.84] -tracking-widest">
              Good to <span className="text-[#8fc4ff]">see you.</span>
            </h1>
            <p className="mt-7 max-w-[40ch] text-sm leading-6 text-white/65 sm:text-base">
              Your cart, your wishlist, and your next great find are waiting for
              you.
            </p>
            <div className="relative mt-12 min-h-55 overflow-hidden rounded-[22px] border border-white/10 bg-linear-to-br from-[#2864d7]/35 via-[#1b315d]/60 to-[#0d1118] p-6">
              <div className="absolute right-5 top-5 text-[#d9f7e9]/50">
                <ShoppingBag size={26} />
              </div>
              <div className="absolute -bottom-20 -right-10 size-64 rounded-full border border-[#8fc4ff]/20" />
              <div className="absolute -bottom-12 -right-2 size-44 rounded-full border border-[#8fc4ff]/20" />
              <div className="absolute bottom-7 left-6">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#d9f7e9]">
                  Your everyday marketplace
                </p>
                <p className="mt-2 max-w-[18ch] font-display text-2xl font-bold leading-tight tracking-[-0.06em]">
                  Better finds. Less noise.
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-10 mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            <div>
              <Truck size={17} className="text-[#d9f7e9]" />
              <p className="mt-2 text-xs font-black">Fast delivery</p>
              <p className="mt-1 text-[10px] text-white/45">
                Track every order
              </p>
            </div>
            <div>
              <ShieldCheck size={17} className="text-[#d9f7e9]" />
              <p className="mt-2 text-xs font-black">Secure checkout</p>
              <p className="mt-1 text-[10px] text-white/45">
                Protected payments
              </p>
            </div>
            <div>
              <Star size={17} className="text-[#f5c84b]" />
              <p className="mt-2 text-xs font-black">Loved by shoppers</p>
              <p className="mt-1 text-[10px] text-white/45">
                4.9 average rating
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[24px] border border-[#e4e7ec] bg-white p-6 shadow-[0_12px_32px_rgba(21,25,34,0.05)] sm:p-10 lg:p-12">
          <div className="mx-auto max-w-120">
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#2864d7]">
              Member access
            </p>
            <h2 className="mt-2 font-display text-[2.7rem] font-bold leading-none tracking-[-0.08em] sm:text-[3.6rem]">
              Welcome back.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#667180]">
              Sign in to continue your Cartiva shopping experience.
            </p>
            <div className="mt-8 flex-col lg:flex-row flex items-center gap-3">
              <button
                type="button"
                className="flex py-3 w-full items-center justify-center gap-2 rounded-xl border border-[#dfe4ea] bg-white text-xs font-black text-[#394351] transition-colors hover:border-[#2864d7] hover:text-[#2864d7]"
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <g fill="none" fillRule="evenodd" clipRule="evenodd">
                    <path
                      fill="#F44336"
                      d="M7.209 1.061c.725-.081 1.154-.081 1.933 0a6.57 6.57 0 0 1 3.65 1.82a100 100 0 0 0-1.986 1.93q-1.876-1.59-4.188-.734q-1.696.78-2.362 2.528a78 78 0 0 1-2.148-1.658a.26.26 0 0 0-.16-.027q1.683-3.245 5.26-3.86"
                      opacity=".987"
                    />
                    <path
                      fill="#FFC107"
                      d="M1.946 4.92q.085-.013.161.027a78 78 0 0 0 2.148 1.658A7.6 7.6 0 0 0 4.04 7.99q.037.678.215 1.331L2 11.116Q.527 8.038 1.946 4.92"
                      opacity=".997"
                    />
                    <path
                      fill="#448AFF"
                      d="M12.685 13.29a26 26 0 0 0-2.202-1.74q1.15-.812 1.396-2.228H8.122V6.713q3.25-.027 6.497.055q.616 3.345-1.423 6.032a7 7 0 0 1-.51.49"
                      opacity=".999"
                    />
                    <path
                      fill="#43A047"
                      d="M4.255 9.322q1.23 3.057 4.51 2.854a3.94 3.94 0 0 0 1.718-.626q1.148.812 2.202 1.74a6.62 6.62 0 0 1-4.027 1.684a6.4 6.4 0 0 1-1.02 0Q3.82 14.524 2 11.116z"
                      opacity=".993"
                    />
                  </g>
                </svg>
                Continue with Google
              </button>

              <button
                type="button"
                className="flex py-3 w-full  items-center justify-center gap-2 rounded-xl border border-[#dfe4ea] bg-white text-xs font-black text-[#394351] transition-colors hover:border-[#2864d7] hover:text-[#2864d7]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#1877F2"
                    d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                  />
                  <path
                    fill="#FFF"
                    d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"
                  />
                </svg>
                Continue with Facebook
              </button>
            </div>
            <div className="my-8 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#a5adb7]">
              <span className="h-px flex-1 bg-[#edf0f3]" /> or continue with
              email <span className="h-px flex-1 bg-[#edf0f3]" />
            </div>
            <form onSubmit={handleSubmit(sendData)} className="space-y-5">
              <label htmlFor="email" className="block">
                <span className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#394351]">
                  <Mail size={14} className="text-[#2864d7]" />
                  Email address<span className="text-[#2864d7]">*</span>
                </span>
                <input
                  id="email"
                  {...register("email")}
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-[#dfe4ea] bg-white px-4 text-sm font-semibold text-[#151922] outline-none transition-all placeholder:text-[#a5adb7] hover:border-[#bfc9d6] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
                />
              </label>
              <label htmlFor="password" className="block">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#394351]">
                    <LockKeyhole size={14} className="text-[#2864d7]" />
                    Password<span className="text-[#2864d7]">*</span>
                  </span>
                  <Link
                    href="/ForgotPassword"
                    className="text-[10px] font-black text-[#2864d7] hover:text-[#151922]"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    {...register("password")}
                    type={Showpass ? "text" : "password"}
                    placeholder="Enter your password"
                    className="h-12 w-full rounded-xl border border-[#dfe4ea] bg-white px-4 pr-12 text-sm font-semibold text-[#151922] outline-none transition-all placeholder:text-[#a5adb7] hover:border-[#bfc9d6] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
                  />
                  <div
                    className="group cursor-pointer"
                    onClick={() => {
                      SetShowPass(!Showpass);
                    }}
                  >
                    {Showpass ? (
                      <Eye
                        size={16}
                        className="cursor-pointer group-hover:text-[#2864d7] transition-all duration-150 absolute right-4 top-1/2 -translate-y-1/2 text-[#a5adb7]"
                      />
                    ) : (
                      <EyeOff
                        size={16}
                        className="cursor-pointer group-hover:text-[#2864d7] transition-all duration-150 absolute right-4 top-1/2 -translate-y-1/2 text-[#a5adb7]"
                      />
                    )}
                  </div>
                </div>
              </label>
              <button
                type="submit"
                className="group flex cursor-pointer h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2864d7] text-xs font-black uppercase tracking-[0.12em] text-white shadow-[0_10px_20px_rgba(40,100,215,0.2)] transition-all hover:bg-[#151922] active:scale-[0.98]"
              >
                {loadin ? (
                  <Spinner2 />
                ) : (
                  <>
                    Sign in{" "}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>
            <div className="mt-7 flex items-center justify-center gap-2 border-t border-[#edf0f3] pt-6 text-xs text-[#8a929f]">
              New to Cartiva?
              <Link
                href="/SignUp"
                className="font-black text-[#2864d7] hover:text-[#151922]"
              >
                Create an account
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
