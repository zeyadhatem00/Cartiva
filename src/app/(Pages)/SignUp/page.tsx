"use client";

import { SignUpINterface } from "@/app/interface/Auth";
import Spinner2 from "../../_Components/Spinner/Spinner";
import { signupSchema } from "@/app/Schema/SignupSchema";
import { signup } from "@/app/Services/SignUp.api";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  BadgeCheck,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function SignUpPage() {
  let [Showpass, SetShowPass] = useState(false);
  let [ShowRepass, SetShowRePass] = useState(false);
  let [loadin, setLoading] = useState(false);
  const route = useRouter();

  let {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(signupSchema),
  });

  async function sendData(data: SignUpINterface) {
    setLoading(true);
    let res = await signup(data);

    if (res.req) {
      setLoading(false);
      toast.success("account created ");
      route.push("/LogIn");
    } else {
      toast.error(res.respond.message);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#151922]">
      <main className="mx-auto grid max-w-330 gap-6 px-4 py-8 sm:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-8 lg:py-16">
        <section className="relative overflow-hidden rounded-[24px] bg-[#151922] px-6 py-10 text-white shadow-[0_20px_48px_rgba(21,25,34,0.12)] sm:px-10 sm:py-14 lg:sticky lg:top-6 lg:flex lg:min-h-175 lg:flex-col lg:justify-between lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute -right-24 -top-28 size-112 rounded-full bg-[#2864d7]/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 size-92 rounded-full bg-[#d9f7e9]/10 blur-3xl" />
          <div className="relative z-10">
            <p className="mb-6 inline-flex items-center gap-2 rounded-md bg-[#d9f7e9] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-[#15704a]">
              <Sparkles size={12} /> Welcome to Cartiva
            </p>
            <h1 className="max-w-[9ch] font-display text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.86] -tracking-widest">
              Shop more. <span className="text-[#8fc4ff]">Live better.</span>
            </h1>
            <p className="mt-7 max-w-[38ch] text-sm leading-6 text-white/65 sm:text-base">
              Create your Cartiva account and make every find feel a little more
              personal.
            </p>
            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-[#d9f7e9]">
                  <BadgeCheck size={18} />
                </span>
                <div>
                  <p className="text-sm font-black">Curated quality</p>
                  <p className="mt-1 text-xs leading-5 text-white/50">
                    Discover products from brands worth knowing.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-[#d9f7e9]">
                  <Truck size={18} />
                </span>
                <div>
                  <p className="text-sm font-black">Fast, simple delivery</p>
                  <p className="mt-1 text-xs leading-5 text-white/50">
                    Track your orders from checkout to doorstep.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 text-[#d9f7e9]">
                  <ShieldCheck size={18} />
                </span>
                <div>
                  <p className="text-sm font-black">Secure by design</p>
                  <p className="mt-1 text-xs leading-5 text-white/50">
                    Your account and checkout details stay protected.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-10 mt-10 border-t border-white/10 pt-6">
            <p className="text-2xl tracking-[0.14em] text-[#f5c84b]">★★★★★</p>
            <p className="mt-3 max-w-[38ch] text-sm italic leading-6 text-white/65">
              “Cartiva makes it easy to find the right things without the
              endless scrolling.”
            </p>
            <p className="mt-4 text-[10px] font-black uppercase tracking-[0.14em] text-white/45">
              — Sarah Johnson, Cartiva customer
            </p>
          </div>
        </section>

        <section className="rounded-[24px] border border-[#e4e7ec] bg-white p-6 shadow-[0_12px_32px_rgba(21,25,34,0.05)] sm:p-10 lg:p-12">
          <div className="w-full">
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#2864d7]">
              Start here
            </p>
            <h2 className="mt-2 font-display text-[2.45rem] font-bold leading-none tracking-[-0.075em] sm:text-[3.3rem]">
              Create your account.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#667180]">
              Join a smarter way to shop tech, sport, style, home, and more.
            </p>
            <div className="mt-7 flex-col lg:flex-row flex items-center gap-3">
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
            <div className="my-7 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#a5adb7]">
              <span className="h-px flex-1 bg-[#edf0f3]" /> or use your email{" "}
              <span className="h-px flex-1 bg-[#edf0f3]" />
            </div>

            <form onSubmit={handleSubmit(sendData)} className="space-y-5">
              <label htmlFor="name" className="block">
                <span className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#394351]">
                  <User size={14} className="text-[#2864d7]" />
                  Full name<span className="text-[#2864d7]">*</span>
                </span>
                <input
                  id="name"
                  {...register("name")}
                  placeholder="Ahmed Abd Al-Muti"
                  className="h-12 w-full rounded-xl border border-[#dfe4ea] bg-white px-4 text-sm font-semibold text-[#151922] outline-none transition-all placeholder:text-[#a5adb7] hover:border-[#bfc9d6] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
                />
                {errors.name && (
                  <span className="mt-2 block text-[14px] leading-4 text-red-600">
                    {errors.name.message}
                  </span>
                )}
              </label>

              <label htmlFor="email" className="block">
                <span className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#394351]">
                  <Mail size={14} className="text-[#2864d7]" />
                  Email address<span className="text-[#2864d7]">*</span>
                </span>
                <input
                  id="email"
                  {...register("email")}
                  type="email"
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-[#dfe4ea] bg-white px-4 text-sm font-semibold text-[#151922] outline-none transition-all placeholder:text-[#a5adb7] hover:border-[#bfc9d6] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
                />
                {errors.email && (
                  <span className="mt-2 block text-[14px] leading-4 text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>

              <label htmlFor="password" className="block">
                <span className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#394351]">
                  <LockKeyhole size={14} className="text-[#2864d7]" />
                  Password<span className="text-[#2864d7]">*</span>
                </span>
                <div className="relative">
                  {" "}
                  <input
                    id="password"
                    {...register("password")}
                    type={Showpass ? "text" : "password"}
                    placeholder="Create a strong password"
                    className="h-12 w-full rounded-xl border border-[#dfe4ea] bg-white px-4 text-sm font-semibold text-[#151922] outline-none transition-all placeholder:text-[#a5adb7] hover:border-[#bfc9d6] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
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
                  {errors.password && (
                    <span className="mt-2 block text-[14px] leading-4 text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                </div>
              </label>

              <label htmlFor="rePassword" className="block">
                <span className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#394351]">
                  <LockKeyhole size={14} className="text-[#2864d7]" />
                  Confirm password<span className="text-[#2864d7]">*</span>
                </span>

                <div className="relative">
                  {" "}
                  <input
                    id="rePassword"
                    {...register("rePassword")}
                    type={ShowRepass ? "text" : "password"}
                    placeholder="Repeat your password"
                    className="h-12 w-full rounded-xl border border-[#dfe4ea] bg-white px-4 text-sm font-semibold text-[#151922] outline-none transition-all placeholder:text-[#a5adb7] hover:border-[#bfc9d6] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
                  />
                  <div
                    className="group cursor-pointer"
                    onClick={() => {
                      SetShowRePass(!ShowRepass);
                    }}
                  >
                    {ShowRepass ? (
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
                  {errors.rePassword && (
                    <span className="mt-2 block text-[14px] leading-4 text-red-600">
                      {errors.rePassword.message}
                    </span>
                  )}
                </div>
              </label>

              <label htmlFor="phone" className="block">
                <span className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#394351]">
                  <Phone size={14} className="text-[#2864d7]" />
                  Phone number<span className="text-[#2864d7]">*</span>
                </span>
                <input
                  id="phone"
                  {...register("phone")}
                  type="tel"
                  placeholder="+20 1150604413"
                  className="h-12 w-full rounded-xl border border-[#dfe4ea] bg-white px-4 text-sm font-semibold text-[#151922] outline-none transition-all placeholder:text-[#a5adb7] hover:border-[#bfc9d6] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
                />
                {errors.phone && (
                  <span className="mt-2 block text-[14px] leading-4 text-red-600">
                    {errors.phone.message}
                  </span>
                )}
              </label>

              <label className="flex items-start gap-3 pt-1 text-xs leading-5 text-[#667180]">
                <input
                  type="checkbox"
                  required
                  className="mt-1 size-4 shrink-0 accent-[#2864d7]"
                />{" "}
                <span className="translate-y-0.5">
                  I agree to the{" "}
                  <Link
                    href="/Terms"
                    className="font-bold text-[#2864d7] hover:text-[#151922]"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/Privacy"
                    className="font-bold text-[#2864d7] hover:text-[#151922]"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
              <button
                type="submit"
                className="group flex cursor-pointer h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2864d7] text-xs font-black uppercase tracking-[0.12em] text-white shadow-[0_10px_20px_rgba(40,100,215,0.2)] transition-all hover:bg-[#151922] active:scale-[0.98]"
              >
                {loadin ? (
                  <Spinner2 />
                ) : (
                  <>
                    {" "}
                    Create my account
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>

            <div className="mt-7 flex items-center justify-center gap-2 border-t border-[#edf0f3] pt-6 text-sm text-[#8a929f]">
              already a customer ?
              <Link
                href="/LogIn"
                className="font-black text-[#2864d7] hover:text-[#151922]"
              >
                Log in
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
