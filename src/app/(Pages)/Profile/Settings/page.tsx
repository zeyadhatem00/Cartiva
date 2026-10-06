"use client";
import ChangePass from "@/app/_Components/ChangePass/page";
import Spinner2 from "@/app/_Components/Spinner/Spinner";
import { UpdateData } from "@/app/Services/UserProfile/UpdateData";
import { Save, UserRound } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Settings() {
  type data = {
    name: string;
    email: string;
    phone: string;
  };

  let { data: Session } = useSession();
  let [loading, setloading] = useState(false);
  let { register, handleSubmit } = useForm({
    defaultValues: {
      name: `${Session?.user.name}`,
      email: `${Session?.user.email}`,
      phone: "",
    },
  });

  async function sendData(data: data) {
    setloading(true);
    let res = await UpdateData(data);
    if (res.message == "success") {
      setloading(false);
      toast.success("Profile Updated");
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
      <section className="min-w-0">
        <div className="mb-5">
          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#2864d7]">
            Account settings
          </p>

          <h2 className="mt-1 font-display text-3xl font-bold tracking-[-0.07em] text-[#151922] sm:text-4xl">
            Manage your account
          </h2>

          <p className="mt-2 text-sm text-[#7b8490]">
            Update your profile information and change your password.
          </p>
        </div>

        {/* Profile Information Card */}
        <section className="overflow-hidden rounded-[22px] border border-[#dfe4ea] bg-white shadow-[0_12px_32px_rgba(21,25,34,0.04)]">
          <div className="border-b border-[#edf0f3] px-5 py-5 sm:px-7">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-[#d9f7e9] text-[#15704a]">
                <UserRound size={19} />
              </span>

              <div>
                <h3 className="text-sm font-black text-[#151922]">
                  Profile information
                </h3>

                <p className="mt-1 text-[10px] text-[#8a929f]">
                  Update your personal details.
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
                htmlFor="full-name"
                className="mb-1.5 block text-xs font-bold text-[#394351]"
              >
                Full name
              </label>

              <input
                id="full-name"
                {...register("name")}
                type="text"
                required
                defaultValue="Ahmed Abd Al-Muti"
                className="h-11 w-full rounded-xl border border-[#dfe4ea] bg-[#fbfcfd] px-3 text-sm text-[#151922] outline-none transition-colors focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs font-bold text-[#394351]"
              >
                Email address
              </label>

              <input
                id="email"
                {...register("email")}
                type="email"
                required
                defaultValue="ahmedmuttii4012@gmail.com"
                className="h-11 w-full rounded-xl border border-[#dfe4ea] bg-[#fbfcfd] px-3 text-sm text-[#151922] outline-none transition-colors focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1.5 block text-xs font-bold text-[#394351]"
              >
                Phone number
              </label>

              <input
                id="phone"
                {...register("phone")}
                type="tel"
                required
                placeholder="+201140608713"
                className="h-11 w-full rounded-xl border border-[#dfe4ea] bg-[#fbfcfd] px-3 text-sm text-[#151922] outline-none transition-colors focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
              />
              <p className="text-[12px] leading-4 mt-2 text-gray-500 pl-2 font-semibold">
                Only Egyptian Phone Numbers
              </p>
            </div>

            <button
              type="submit"
              className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-[#2864d7] px-5 text-xs font-black text-white shadow-[0_8px_18px_rgba(40,100,215,0.16)] transition-all duration-150 hover:bg-[#151922] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7] active:scale-[0.98]"
            >
              {loading ? (
                <Spinner2 />
              ) : (
                <>
                  <Save size={14} />
                  Save changes
                </>
              )}
            </button>
          </form>

          <div className="border-t border-[#edf0f3] bg-[#fbfcfd] px-5 py-5 sm:px-7">
            <div className="flex flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-black text-[#151922]">Account information</p>

                <p className="mt-1 text-[10px] text-[#8a929f]">
                  Your account access details.
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-[10px] text-[#8a929f]">Role</p>

                <span className="mt-1 inline-flex rounded-full bg-[#d9f7e9] px-2.5 py-1 text-[10px] font-black text-[#15704a]">
                  {Session?.user.role}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Change Password Card */}
        <ChangePass />
      </section>
    </>
  );
}
