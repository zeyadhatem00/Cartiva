import { ChangePassword } from "@/app/Services/UserProfile/ChangePass";
import { Eye, EyeOff, KeyRound, LockKeyhole } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Spinner2 from "../Spinner/Spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangepassSchema } from "@/app/Schema/ChangepassSchema";

export default function ChangePass() {
  type data = {
    currentPassword: string;
    password: string;
    rePassword: string;
  };
  let [loading, setloading] = useState(false);
  let [ShowCurrentpass, SetSHowCurrent] = useState(false);
  let [ShowNewpass, SetSHowNew] = useState(false);
  let [ShowRepass, SetSHowRe] = useState(false);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(ChangepassSchema),
    defaultValues: {
      currentPassword: "",
      password: "",
      rePassword: "",
    },
  });

  async function sendData(data: data) {
    setloading(true);
    let res = await ChangePassword(data);
    if (res.message == "success") {
      setloading(false);
      toast.success("Password Updated");
      signOut({
        callbackUrl: "/LogIn",
      });
    } else {
      toast.error(res.errors.msg);
      setloading(false);
    }
  }
  return (
    <>
      {" "}
      <section className="mt-5 overflow-hidden rounded-[22px] border border-[#dfe4ea] bg-white shadow-[0_12px_32px_rgba(21,25,34,0.04)]">
        <div className="border-b border-[#edf0f3] px-5 py-5 sm:px-7">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-[#fff3d8] text-[#a96b00]">
              <LockKeyhole size={19} />
            </span>

            <div>
              <h3 className="text-sm font-black text-[#151922]">
                Change password
              </h3>

              <p className="mt-1 text-[10px] text-[#8a929f]">
                Keep your account protected with a strong password.
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(sendData)}
          className="space-y-4 px-5 py-6 sm:px-7"
        >
          <div>
            <label
              htmlFor="current-password"
              className="mb-1.5 block text-xs font-bold text-[#394351]"
            >
              Current password
            </label>

            <div className="relative">
              <input
                id="current-password"
                {...register("currentPassword")}
                type={ShowCurrentpass ? "text" : "password"}
                placeholder="Enter your current password"
                className="h-11 w-full rounded-xl border border-[#dfe4ea] bg-[#fbfcfd] px-3 pr-11 text-sm text-[#151922] outline-none transition-colors placeholder:text-[#a0a8b2] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
              />
              <div
                className="group cursor-pointer"
                onClick={() => {
                  SetSHowCurrent(!ShowCurrentpass);
                }}
              >
                {ShowCurrentpass ? (
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
          </div>

          <div>
            <label
              htmlFor="new-password"
              className="mb-1.5 block text-xs font-bold text-[#394351]"
            >
              New password
            </label>

            <div className="relative">
              <input
                id="new-password"
                {...register("password")}
                type={ShowNewpass ? "text" : "password"}
                placeholder="Enter your new password"
                className="h-11 w-full rounded-xl border border-[#dfe4ea] bg-[#fbfcfd] px-3 pr-11 text-sm text-[#151922] outline-none transition-colors placeholder:text-[#a0a8b2] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
              />

              <div
                className="group cursor-pointer"
                onClick={() => {
                  SetSHowNew(!ShowNewpass);
                }}
              >
                {ShowNewpass ? (
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

            <p className="mt-1.5 text-[10px] text-[#8a929f]">
              Use at least 8 characters with a mix of letters and numbers.
            </p>
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="mb-1.5 block text-xs font-bold text-[#394351]"
            >
              Confirm new password
            </label>

            <div className="relative">
              <input
                {...register("rePassword")}
                id="confirm-password"
                type={ShowRepass ? "text" : "password"}
                placeholder="Confirm your new password"
                className="h-11 w-full rounded-xl border border-[#dfe4ea] bg-[#fbfcfd] px-3 pr-11 text-sm text-[#151922] outline-none transition-colors placeholder:text-[#a0a8b2] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
              />

              <div
                className="group cursor-pointer"
                onClick={() => {
                  SetSHowRe(!ShowRepass);
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
          </div>

          <button
            type="submit"
            className="inline-flex h-11 cursor-pointer duration-150 items-center gap-2 rounded-xl bg-[#151922] px-5 text-xs font-black text-white transition-all hover:bg-[#2864d7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7] active:scale-[0.98]"
          >
            {loading ? (
              <Spinner2 />
            ) : (
              <>
                {" "}
                <KeyRound size={14} />
                Change password
              </>
            )}
          </button>
        </form>
      </section>
    </>
  );
}
