import { Reset } from "@/app/Services/ForgetPass/ResetPass";
import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Spinner2 from "../Spinner/Spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetSchema } from "@/app/Schema/ResetSchema";

export default function ResetPass() {
  let route = useRouter();
  let [loading, setLoading] = useState(false);
  let [ShowPass, setShow] = useState(false);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      newPassword: "",
    },
    resolver: zodResolver(resetSchema),
  });

  async function SendData(data: { email: string; newPassword: string }) {
    setLoading(true);
    let res = await Reset(data);
    if (res.token) {
      toast.success("Password updated");
      route.push("/LogIn");
      setLoading(false);
    } else {
      setLoading(false);
      toast.error("Something Went Wrong");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(SendData)} className="mt-8 space-y-5">
        <label htmlFor="new-password" className="block">
          <span className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#394351]">
            <Mail size={14} className="text-[#2864d7]" />
            Email
            <span className="text-[#2864d7]">*</span>
          </span>
          <span className="relative block">
            <input
              {...register("email")}
              type="email"
              placeholder="you@gmail.com"
              className="h-14 w-full rounded-xl border border-[#dfe4ea] bg-white px-4 pr-12 text-sm font-semibold text-[#151922] outline-none transition-all placeholder:text-[#a5adb7] hover:border-[#bfc9d6] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
            />
            {errors.email && (
              <span className="mt-2 block text-[14px] leading-4 text-red-600">
                {errors.email.message}
              </span>
            )}
          </span>
        </label>

        <label htmlFor="confirm-password" className="block">
          <span className="mb-2 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#394351]">
            <LockKeyhole size={14} className="text-[#2864d7]" />
            New password
            <span className="text-[#2864d7]">*</span>
          </span>
          <span className="relative block">
            <input
              id="confirm-password"
              {...register("newPassword")}
              type={ShowPass ? "text" : "password"}
              placeholder="New password"
              autoComplete="new-password"
              minLength={8}
              className="h-14 w-full rounded-xl border border-[#dfe4ea] bg-white px-4 pr-12 text-sm font-semibold text-[#151922] outline-none transition-all placeholder:text-[#a5adb7] hover:border-[#bfc9d6] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
            />
            {errors.newPassword && (
              <span className="mt-2 block text-[14px] leading-4 text-red-600">
                {errors.newPassword.message}
              </span>
            )}
            <div
              className="group cursor-pointer"
              onClick={() => {
                setShow(!ShowPass);
              }}
            >
              {ShowPass ? (
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
          </span>
        </label>

        <div className="rounded-xl border border-[#d8efe2] bg-[#effbf4] px-4 py-4">
          <p className="text-[10px] font-black uppercase tracking-[0.12em] text-[#15704a]">
            Password checklist
          </p>
          <div className="mt-3 grid gap-2 text-xs font-semibold text-[#667180] sm:grid-cols-2">
            <p className="inline-flex items-center gap-2">
              <Check size={14} className="text-[#2864d7]" />
              At least 8 characters
            </p>
            <p className="inline-flex items-center gap-2">
              <Check size={14} className="text-[#2864d7]" />
              One uppercase letter
            </p>
            <p className="inline-flex items-center gap-2">
              <Check size={14} className="text-[#2864d7]" />
              One number
            </p>
            <p className="inline-flex items-center gap-2">
              <Check size={14} className="text-[#2864d7]" />
              Both passwords match
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="group flex h-14 transition-all duration-150 cursor-pointer w-full items-center justify-center gap-2 rounded-xl bg-[#2864d7] text-xs font-black uppercase tracking-[0.12em] text-white shadow-[0_10px_20px_rgba(40,100,215,0.2)]  hover:bg-[#151922] active:scale-[0.98]"
        >
          {loading ? (
            <Spinner2 />
          ) : (
            <>
              {" "}
              Reset password
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </>
          )}
        </button>
      </form>
    </>
  );
}
