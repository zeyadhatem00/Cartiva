"use client";

import {
  ChevronRight,
  MapPin,
  Settings,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  let { data: Session } = useSession();
  let path = usePathname();

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#151922]">
      <main className="mx-auto max-w-[1280px] px-4 py-6 sm:py-8 lg:px-8">
        <section className="relative overflow-hidden rounded-[24px] bg-[#151922] px-5 py-7 text-white shadow-[0_18px_44px_rgba(21,25,34,0.12)] sm:px-8 sm:py-9 lg:px-10">
          <div className="pointer-events-none absolute -right-28 -top-36 size-[28rem] rounded-full bg-[#2864d7]/35 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-44 left-1/3 size-[24rem] rounded-full bg-[#d9f7e9]/10 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold text-white/55">
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
                <ChevronRight size={13} />
                <span className="text-white/80">My account</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[#2864d7] text-white shadow-[0_10px_22px_rgba(40,100,215,0.24)]">
                  <UserRound size={28} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#d9f7e9]">
                    Cartiva account
                  </p>
                  <h1 className="mt-1 font-display text-3xl font-bold tracking-[-0.07em] sm:text-4xl">
                    My profile
                  </h1>
                  <p className="mt-1 text-xs text-white/55 sm:text-sm">
                    Manage your addresses and account preferences.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden max-w-[240px] text-right sm:block">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#8fc4ff]">
                Member account
              </p>
              <p className="mt-2 font-display text-2xl font-bold tracking-[-0.06em]">
                {Session?.user.name}
              </p>
              <p className="mt-1 text-xs text-white/50">
                {Session?.user.email}
              </p>
            </div>
          </div>
        </section>

        <div className="mt-6 grid gap-5 lg:grid-cols-[245px_minmax(0,1fr)] lg:gap-7">
          <aside className="h-fit rounded-2xl border border-[#e4e7ec] bg-white p-2 shadow-[0_10px_26px_rgba(21,25,34,0.04)]">
            <div className="border-b border-[#edf0f3] px-4 py-4">
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#8a929f]">
                My account
              </p>
              <p className="mt-1 text-sm font-bold text-[#151922]">
                Ahmed&apos;s workspace
              </p>
            </div>
            <nav className="space-y-1 p-2" aria-label="Profile navigation">
              <Link
                href="/Profile/Address"
                className={`flex items-center gap-3 rounded-xl  px-3 py-3 text-sm font-black ${path == "/Profile/Address" ? "text-[#2864d7] bg-[#eef6ff] hover:bg-[#e0edff]" : "hover:bg-[#f7f8fa] hover:text-[#2864d7] text-[#667180]"}  transition-all duration-150 `}
              >
                <MapPin size={17} />
                <span className="flex-1">My addresses</span>
                <ChevronRight size={15} />
              </Link>

              <Link
                href="/Profile/Settings"
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold ${path == "/Profile/Settings" ? "text-[#2864d7] bg-[#eef6ff] hover:bg-[#e0edff]" : "hover:bg-[#f7f8fa] hover:text-[#2864d7] text-[#667180]"}  transition-all duration-150`}
              >
                <Settings size={17} />
                <span className="flex-1">Settings</span>
                <ChevronRight size={15} />
              </Link>
            </nav>
            <div className="m-2 rounded-xl bg-[#151922] p-4 text-white">
              <ShieldCheck size={18} className="text-[#d9f7e9]" />
              <p className="mt-3 text-xs font-black">Your account is secure</p>
              <p className="mt-1 text-[10px] leading-4 text-white/50">
                Your saved details stay protected with Cartiva.
              </p>
            </div>
          </aside>

          <div>{children}</div>
        </div>
      </main>
    </div>
  );
}
