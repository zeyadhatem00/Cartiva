"use client";
import ResetPass from "@/app/_Components/ResetPass/page";
import Spinner2 from "@/app/_Components/Spinner/Spinner";
import VerifyCode from "@/app/_Components/VerifyCode/page";
import { SendCODE } from "@/app/Services/ForgetPass/SendCode";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function ForgotPasswordPage() {
  let [Step, setStep] = useState(1);
  let [email, setEmail] = useState("");
  let [loading, setLoading] = useState(false);
  let { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });

  async function SendData(data: { email: string }) {
    setLoading(true);
    let res = await SendCODE(data);
    if (res.statusMsg == "success") {
      setLoading(false);
      setStep(2);
      toast.success(res.message);
    } else {
      setLoading(false);
      toast.error(res.message);
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
              <Sparkles size={12} />
              Account recovery
            </p>

            <h1 className="mt-7 max-w-[10ch] font-display text-[clamp(3.1rem,6vw,6rem)] font-bold leading-[0.84] -tracking-widest">
              Back to your
              <span className="text-[#8fc4ff]"> account.</span>
            </h1>

            <p className="mt-7 max-w-[40ch] text-sm leading-6 text-white/65 sm:text-base">
              No worries. Enter your email and we&apos;ll help you get back to
              the Cartiva experience.
            </p>

            <div className="relative mt-12 overflow-hidden rounded-[22px] border border-white/10 bg-linear-to-br from-[#2864d7]/35 via-[#1b315d]/60 to-[#0d1118] p-6">
              <div className="absolute right-5 top-5 text-[#d9f7e9]/60">
                <LockKeyhole size={26} />
              </div>
              <div className="absolute -bottom-20 -right-10 size-64 rounded-full border border-[#8fc4ff]/20" />
              <div className="absolute -bottom-12 -right-2 size-44 rounded-full border border-[#8fc4ff]/20" />

              <div className="relative z-10 flex min-h-55 items-center justify-center">
                <div className="relative grid size-32 place-items-center rounded-[28px] border border-white/15 bg-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                  <div className="absolute -left-10 top-8 grid size-14 -rotate-12 place-items-center rounded-2xl border border-white/15 bg-white/10 text-[#8fc4ff]">
                    <Mail size={22} />
                  </div>
                  <div className="absolute -right-10 bottom-8 grid size-14 rotate-12 place-items-center rounded-2xl border border-white/15 bg-white/10 text-[#d9f7e9]">
                    <ShieldCheck size={22} />
                  </div>
                  <div className="grid size-20 place-items-center rounded-[22px] bg-[#2864d7] text-white shadow-[0_12px_28px_rgba(40,100,215,0.35)]">
                    <LockKeyhole size={36} strokeWidth={1.7} />
                  </div>
                  <div className="absolute -bottom-6 flex gap-2">
                    <span className="size-2 rounded-full bg-[#8fc4ff]" />
                    <span className="size-2 rounded-full bg-[#2864d7]" />
                    <span className="size-2 rounded-full bg-[#d9f7e9]" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 border-t border-white/10 pt-5">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#d9f7e9]">
                  A secure reset
                </p>
                <p className="mt-2 max-w-[22ch] font-display text-2xl font-bold leading-tight tracking-[-0.06em]">
                  Your account is still yours.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            <div>
              <Mail size={17} className="text-[#d9f7e9]" />
              <p className="mt-2 text-xs font-black">Email verification</p>
              <p className="mt-1 text-[10px] text-white/45">
                A private reset link
              </p>
            </div>
            <div>
              <ShieldCheck size={17} className="text-[#d9f7e9]" />
              <p className="mt-2 text-xs font-black">Secure reset</p>
              <p className="mt-1 text-[10px] text-white/45">
                Protected account access
              </p>
            </div>
            <div>
              <Check size={17} className="text-[#d9f7e9]" />
              <p className="mt-2 text-xs font-black">Simple steps</p>
              <p className="mt-1 text-[10px] text-white/45">Back in moments</p>
            </div>
          </div>
        </section>

        <section className="rounded-[24px] border border-[#e4e7ec] bg-white p-6 shadow-[0_12px_32px_rgba(21,25,34,0.05)] sm:p-10 lg:p-12">
          <div className="mx-auto max-w-120">
            <Link
              href="/LogIn"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8a929f] transition-colors hover:text-[#2864d7]"
            >
              <ChevronLeft size={15} />
              Back to sign in
            </Link>

            <p className="mt-8 text-[10px] font-black uppercase tracking-[0.15em] text-[#2864d7]">
              Reset access
            </p>

            <h2 className="mt-2 font-display text-[2.7rem] font-bold leading-none tracking-[-0.08em] sm:text-[3.6rem]">
              {Step == 1 && "Forgot your password"}
              {Step == 2 && "Check your email"}
              {Step == 3 && "Create a new password"}
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#667180]">
              {Step == 1 &&
                ` Enter the email connected to your Cartiva account. We&apos;ll send
              you a secure link to create a new password.`}
              {Step == 2 && `We've sent a verification code to ${email}.`}
              {Step == 3 &&
                "Your new password must be different from previous password"}
            </p>

            <div className="mt-8 flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-full bg-[#2864d7] text-white text-xs font-black ">
                1
              </span>
              <span
                className={`h-px flex-1 ${Step > 1 ? "bg-[#2864d7]" : "bg-[#dfe4ea]"}`}
              />
              <span
                className={`grid size-8 place-items-center rounded-full ${Step > 1 ? "bg-[#2864d7] text-white" : "bg-[#f0f2f5] text-[#8a929f]"}  text-xs font-black `}
              >
                2
              </span>
              <span
                className={`h-px flex-1 ${Step > 2 ? "bg-[#2864d7]" : "bg-[#dfe4ea]"}`}
              />
              <span
                className={`grid size-8 place-items-center rounded-full ${Step > 2 ? "bg-[#2864d7] text-white" : "bg-[#f0f2f5] text-[#8a929f]"}  text-xs font-black `}
              >
                3
              </span>
            </div>
            {/*Forms*/}
            {Step == 1 && (
              <form
                onSubmit={handleSubmit(SendData)}
                className="mt-8 space-y-5"
              >
                <label htmlFor="email" className="block">
                  <span className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#394351]">
                    <Mail size={14} className="text-[#2864d7]" />
                    Email address
                    <span className="text-[#2864d7]">*</span>
                  </span>
                  <input
                    id="email"
                    {...register("email")}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="h-12 w-full rounded-xl border border-[#dfe4ea] bg-white px-4 text-sm font-semibold text-[#151922] outline-none transition-all placeholder:text-[#a5adb7] hover:border-[#bfc9d6] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
                  />
                </label>

                <button
                  type="submit"
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2864d7] text-xs font-black uppercase tracking-[0.12em] text-white shadow-[0_10px_20px_rgba(40,100,215,0.2)] transition-all hover:bg-[#151922] active:scale-[0.98]"
                >
                  {loading ? (
                    <Spinner2 />
                  ) : (
                    <>
                      {" "}
                      Send reset link
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </form>
            )}

            {Step == 2 && <VerifyCode setStep={setStep} email={email} />}
            {Step == 3 && <ResetPass />}

            {/**************************/}

            {Step == 1 && (
              <div className="mt-7 flex items-center justify-center gap-2 border-t border-[#edf0f3] pt-6 text-xs text-[#8a929f]">
                Remember your password?
                <Link
                  href="/LogIn"
                  className="font-black text-[#2864d7] hover:text-[#151922]"
                >
                  Sign in
                </Link>
              </div>
            )}

            {Step == 2 && (
              <div className="mt-7 group flex items-center justify-center gap-1 border-t border-[#edf0f3] pt-6 text-xs text-[#8a929f]">
                <ArrowLeft
                  size={15}
                  className="text-[#2864d7] group-hover:-translate-x-1 transition-all duration-150"
                />{" "}
                <span
                  onClick={() => setStep(1)}
                  className="text-[#2864d7] font-bold cursor-pointer hover:underline"
                >
                  Change email Address ?
                </span>
              </div>
            )}

            {Step == 3 && (
              <div className="mt-7 flex items-center justify-center gap-2 border-t border-[#edf0f3] pt-6 text-xs text-[#8a929f]">
                Remember your password?
                <Link
                  href="/LogIn"
                  className="font-black text-[#2864d7] hover:text-[#151922]"
                >
                  Sign in
                </Link>
              </div>
            )}

            <div className="mt-5 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-[#a5adb7]">
              <LockKeyhole size={13} className="text-[#15704a]" />
              secured recovery
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
