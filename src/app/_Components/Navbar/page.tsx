"use client";

import {
  Truck,
  Gift,
  Mail,
  Phone,
  UserRound,
  UserPlus,
  CircleUserRound,
  ChevronDown,
  ShieldCheck,
  Heart,
  ShoppingBag,
  Menu,
  LogOut,
  ChevronRight,
  X,
  LogOutIcon,
  PackageOpen,

  Settings,
  Package,
  MapPin,
} from "lucide-react";
import Logo from "../Logo/page";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Searchbar from "../Search/page";
import { useContext, useState } from "react";
import { cartcontext } from "@/app/context/CartContext";
import { Wishlistcontext } from "@/app/context/wishlistContext";


export default function Navbar() {
  let { data: Session } = useSession();
  let { cart } = useContext(cartcontext);
  let { Wishlist } = useContext(Wishlistcontext);
  let [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="hidden border-b border-[#e4e7ec] bg-white px-4 lg:block">
        <div className="mx-auto flex h-10 max-w-330 items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Truck size={17} className="text-[#2864d7]" />
              <span className="text-sm font-medium text-[#667180]">
                Free delivery on orders over 200 EGP
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Gift size={17} className="text-[#2864d7]" />
              <span className="text-sm font-medium text-[#667180]">
                New arrivals weekly
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="group flex items-center gap-2">
              <Mail
                size={15}
                className="text-[#7b8490] transition-colors group-hover:text-[#2864d7]"
              />
              <a
                href="mailto:support@Cartiva.store"
                className="text-sm font-medium text-[#667180] transition-colors group-hover:text-[#2864d7]"
              >
                support@Cartiva.store
              </a>
            </div>
            <div className="group flex items-center gap-2">
              <Phone
                size={15}
                className="text-[#7b8490] transition-colors group-hover:text-[#2864d7]"
              />
              <a
                href="tel:+18001234567"
                className="text-sm font-medium text-[#667180] transition-colors group-hover:text-[#2864d7]"
              >
                +1 (800) 123-4567
              </a>
            </div>
            <div className="h-4 w-px bg-[#e4e7ec]" />
            <div className="flex items-center gap-4">
              {Session ? (
                <>
                  <Link
                    href="/"
                    className="group flex items-center gap-2 text-sm font-medium text-[#667180] transition-colors hover:text-[#2864d7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
                  >
                    <UserRound
                      size={17}
                      className="text-[#7b8490] transition-colors group-hover:text-[#2864d7]"
                    />
                    {Session.user.name}
                  </Link>
                  <button
                    onClick={async () => {
                      signOut();
                    }}
                    className="group flex cursor-pointer items-center gap-2 text-sm font-medium text-[#667180] transition-colors hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
                  >
                    <LogOut
                      size={17}
                      className="text-[#7b8490] transition-colors group-hover:text-red-600"
                    />
                    Log Out
                  </button>{" "}
                </>
              ) : (
                <>
                  {" "}
                  <Link
                    href="/LogIn"
                    className="group flex items-center gap-2 text-sm font-medium text-[#667180] transition-colors hover:text-[#2864d7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
                  >
                    <UserRound
                      size={17}
                      className="text-[#7b8490] transition-colors group-hover:text-[#2864d7]"
                    />
                    Sign in
                  </Link>
                  <Link
                    href="/SignUp"
                    className="group flex items-center gap-2 text-sm font-medium text-[#667180] transition-colors hover:text-[#2864d7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
                  >
                    <UserPlus
                      size={17}
                      className="text-[#7b8490] transition-colors group-hover:text-[#2864d7]"
                    />
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* main navbar*/}
      <nav className="sticky top-0 z-50 border-b border-[#e4e7ec] bg-white text-[#151922] shadow-[0_2px_10px_rgba(21,25,34,0.06)]">
        <div className="mx-auto justify-between md:justify-normal flex w-full items-center gap-5 px-4 py-3.5 lg:px-8">
          <div className="shrink-0">
            <Logo foot={false} />
          </div>
          <div className="md:flex-1 md:flex hidden">
            <Searchbar />
          </div>
          <nav
            className="hidden items-center gap-7 text-[13px] font-bold text-[#394351] xl:flex"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#2864d7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
            >
              Home
            </Link>
            <Link
              href="/Shop"
              className="transition-colors hover:text-[#2864d7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
            >
              Shop
            </Link>
            <div className="relative flex group cursor-pointer items-center  gap-1 transition-colors hover:text-[#2864d7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]">
              Categories
              <ChevronDown
                className=" group-hover:rotate-180 transition-all duration-200"
                size={13}
              />
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 overflow-hidden flex flex-col  absolute top-7 min-w-50 bg-white rounded-xl shadow-xl border border-gray-100">
                <Link
                  href="/Categories"
                  className="px-4 transition-all duration-150 py-3.5 text-[#394351] hover:text-[#2864d7] hover:bg-[#e0edff]"
                >
                  All Categories
                </Link>
                <Link
                  href="/Shop"
                  className="px-4 transition-all duration-150 py-3.5 text-[#394351] hover:text-[#2864d7] hover:bg-[#e0edff]"
                >
                  Electronics
                </Link>
                <Link
                  href="/Shop"
                  className="px-4 transition-all duration-150 py-3.5 text-[#394351] hover:text-[#2864d7] hover:bg-[#e0edff]"
                >
                  Women's Fashion
                </Link>
                <Link
                  href="/Shop"
                  className="px-4 transition-all duration-150 py-3.5 text-[#394351] hover:text-[#2864d7] hover:bg-[#e0edff]"
                >
                  Men's Fashion
                </Link>
              </div>
            </div>

            <Link
              href="/Brands"
              className="transition-colors hover:text-[#2864d7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
            >
              Brands
            </Link>
          </nav>
          <div className="ml-auto hidden items-center gap-2 xl:flex">
            <Link
              href="/Support"
              className="group active:scale-[0.98] flex items-center gap-2 rounded-full bg-[#eef6ff] px-3 py-1.5 transition-all duration-150 hover:bg-[#e0edff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
            >
              <span className="grid size-8 place-items-center rounded-full bg-white text-[#2864d7]">
                <ShieldCheck size={15} />
              </span>
              <span className="text-[10px] leading-3 text-[#7b8490]">
                Support
                <br />
                <strong className="text-[#151922]">24/7 Help</strong>
              </span>
            </Link>
            <Link
              href="/Wishlist"
              className=" relative grid size-10 place-items-center border-l border-[#e4e7ec] text-[#394351] transition-colors hover:text-[#2864d7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
              aria-label="Wishlist"
            >
              <Heart size={19} strokeWidth={1.7} />
              {Session ? (
                <span className="absolute right-0 top-px grid size-4 place-items-center rounded-full bg-red-500 text-[9px] font-black text-white">
                  <span className="translate-y-[1.5px]">{Wishlist?.count}</span>
                </span>
              ) : (
                ""
              )}
            </Link>
            <Link
              href="/cart"
              className="relative grid size-10 place-items-center text-[#394351] transition-colors hover:text-[#2864d7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
            >
              <ShoppingBag size={20} strokeWidth={1.7} />
              {Session ? (
                <span className="absolute right-0 top-0 grid size-4 place-items-center rounded-full bg-[#2864d7] text-[9px] font-black text-white">
                  <span className="translate-y-[1.5px]">
                    {cart?.numOfCartItems}
                  </span>
                </span>
              ) : (
                ""
              )}
            </Link>
            {Session ? (
              <div className="group/account  relative">
                <button
                  type="button"
                  aria-label="Open account menu"
                  className=" items-center gap-2 size-10 place-items-center rounded-full grid  cursor-pointer  text-[12px] font-black text-[#394351] transition-colors hover:text-[#2864d7]  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7] active:scale-95"
                >
                  <CircleUserRound size={22} />
                </button>

                <div className="invisible absolute right-0 top-[calc(100%+14px)] z-50 w-[min(370px,calc(100vw-32px))] origin-top-right translate-y-2 scale-[0.98] overflow-hidden rounded-[24px] border border-[#dfe4ea] bg-white opacity-0 shadow-[0_24px_70px_rgba(21,25,34,0.18)] transition-all duration-200 group-hover/account:visible group-hover/account:translate-y-0 group-hover/account:scale-100 group-hover/account:opacity-100 group-focus-within/account:visible group-focus-within/account:translate-y-0 group-focus-within/account:scale-100 group-focus-within/account:opacity-100">
                  {/* Account header */}
                  <div className="flex items-center gap-3 border-b border-[#edf0f3] px-5 py-5">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#eef6ff] text-[#2864d7]">
                      <CircleUserRound size={24} strokeWidth={1.8} />
                    </span>

                    <div className="min-w-0">
                      <p className="truncate font-display text-lg font-bold tracking-[-0.04em] text-[#151922]">
                        {Session.user.name}
                      </p>

                      <p className="truncate text-xs text-[#8a929f]">
                        {Session.user.email}
                      </p>
                    </div>
                  </div>

                  {/* Account links */}
                  <nav
                    className="border-b border-[#edf0f3] py-2"
                    aria-label="Account menu"
                  >
                    <Link
                      href="/Profile"
                      className="flex items-center gap-3 px-5 py-3 text-sm font-semibold text-[#394351] transition-colors hover:bg-[#eef6ff] hover:text-[#2864d7] focus-visible:bg-[#eef6ff] focus-visible:text-[#2864d7] focus-visible:outline-none"
                    >
                      <CircleUserRound size={19} strokeWidth={1.8} />

                      <span className="flex-1">My profile</span>

                      <ChevronRight size={15} className="text-[#a0a8b2]" />
                    </Link>

                    <Link
                      href="/allorders"
                      className="flex items-center gap-3 px-5 py-3 text-sm font-semibold text-[#394351] transition-colors hover:bg-[#eef6ff] hover:text-[#2864d7] focus-visible:bg-[#eef6ff] focus-visible:text-[#2864d7] focus-visible:outline-none"
                    >
                      <Package size={19} strokeWidth={1.8} />

                      <span className="flex-1">My orders</span>

                      <ChevronRight size={15} className="text-[#a0a8b2]" />
                    </Link>

                    {/* Highlighted wishlist item */}
                    <Link
                      href="/Wishlist"
                      className="flex items-center gap-3 bg-[#f3fbf7] px-5 py-3 text-sm font-semibold text-[#15704a] transition-colors hover:bg-[#d9f7e9] focus-visible:bg-[#d9f7e9] focus-visible:outline-none"
                    >
                      <Heart size={19} strokeWidth={1.8} />

                      <span className="flex-1">My wishlist</span>

                      <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-black text-[#15704a]">
                        {Wishlist?.count}
                      </span>
                    </Link>

                    <a
                      href="/Profile/Address"
                      className="flex items-center gap-3 px-5 py-3 text-sm font-semibold text-[#394351] transition-colors hover:bg-[#eef6ff] hover:text-[#2864d7] focus-visible:bg-[#eef6ff] focus-visible:text-[#2864d7] focus-visible:outline-none"
                    >
                      <MapPin size={19} strokeWidth={1.8} />

                      <span className="flex-1">Addresses & support</span>

                      <ChevronRight size={15} className="text-[#a0a8b2]" />
                    </a>

                    <a
                      href="/Profile/Settings"
                      className="flex items-center gap-3 px-5 py-3 text-sm font-semibold text-[#394351] transition-colors hover:bg-[#eef6ff] hover:text-[#2864d7] focus-visible:bg-[#eef6ff] focus-visible:text-[#2864d7] focus-visible:outline-none"
                    >
                      <Settings size={19} strokeWidth={1.8} />

                      <span className="flex-1">Account settings</span>

                      <ChevronRight size={15} className="text-[#a0a8b2]" />
                    </a>
                  </nav>

                  {/* Sign out */}
                  <button
                    onClick={() => {
                      signOut();
                    }}
                    className="flex w-full items-center gap-3 px-5 py-4 cursor-pointer text-sm font-black text-red-500 transition-all duration-150 active:scale-[0.98] hover:bg-red-50 focus-visible:bg-[#fff1f3] focus-visible:outline-none"
                  >
                    <LogOut size={19} strokeWidth={1.8} />
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href="/LogIn"
                className="inline-flex items-center gap-2 rounded-full bg-[#2864d7] px-4 py-2.5 text-[12px] font-black text-white transition-all duration-150 hover:bg-[#151922] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7] active:scale-95"
              >
                <UserRound size={15} /> Sign in
              </Link>
            )}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(true);
            }}
            className="grid size-10 cursor-pointer shrink-0 place-items-center rounded-lg border border-[#dfe4ea] bg-white text-[#151922] transition-colors hover:bg-[#151922] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7] xl:hidden"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
        <div className="w-full pb-3 border-t px-2 border-t-[#e4e7ec] pt-2.5 md:hidden">
          <Searchbar />
        </div>
      </nav>

      {/*mobile menu*/}
      <div
        className={`fixed inset-0 z-50 xl:hidden ${
          mobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Dark backdrop */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-[#151922]/45 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Sidebar */}
        <aside
          aria-label="Mobile navigation"
          className={`absolute left-0 top-0 flex h-full w-[min(86vw,350px)] flex-col bg-white shadow-[16px_0_48px_rgba(21,25,34,0.18)] transition-all duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar header */}
          <div className="flex items-center justify-between border-b border-[#e4e7ec] px-5 py-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <span className="relative grid size-9 place-items-center rounded-[11px] bg-[#2864d7] text-white">
                <ShoppingBag size={18} strokeWidth={2.1} />

                <span className="absolute -right-1 -top-1 size-2.5 rounded-full bg-[#d9f7e9]" />
              </span>

              <span className="font-display text-[1.5rem] font-bold tracking-[-0.075em]">
                cartiva<span className="text-[#2864d7]">.</span>
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="grid size-10 place-items-center cursor-pointer rounded-xl border border-[#dfe4ea] text-[#667180] transition-colors hover:bg-[#151922] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable menu content */}
          <div className="flex-1 overflow-y-auto px-5 py-6">
            {/* Intro card */}
            <div className="rounded-2xl bg-[#151922] p-4 text-white">
              <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#d9f7e9]">
                Cartiva mobile
              </p>

              <p className="mt-2 font-display text-2xl font-bold leading-none tracking-[-0.07em]">
                Find your
                <span className="text-[#8fc4ff]">good stuff.</span>
              </p>

              <p className="mt-3 text-xs leading-5 text-white/60">
                A simpler way to browse tech, sport, style, and more.
              </p>
            </div>

            {/* Main navigation */}
            <nav className="mt-7" aria-label="Mobile main navigation">
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#8a929f]">
                Explore
              </p>

              <div className="space-y-1">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-black text-[#151922] transition-colors hover:bg-[#eef6ff] hover:text-[#2864d7]"
                >
                  Home
                  <ChevronRight size={16} />
                </Link>

                <Link
                  href="/Shop"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-black text-[#151922] transition-colors hover:bg-[#eef6ff] hover:text-[#2864d7]"
                >
                  Shop all products
                  <ChevronRight size={16} />
                </Link>

                <Link
                  href="/Categories"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-black text-[#151922] transition-colors hover:bg-[#eef6ff] hover:text-[#2864d7]"
                >
                  Categories
                  <ChevronRight size={16} />
                </Link>

                <Link
                  href="/Brands"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-black text-[#151922] transition-colors hover:bg-[#eef6ff] hover:text-[#2864d7]"
                >
                  Brands
                  <ChevronRight size={16} />
                </Link>
              </div>
            </nav>

            {/* Account links */}
            <div className="mt-7 border-t border-[#edf0f3] pt-6">
              {Session ? (
                <>
                  {" "}
                  <p className="mb-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#8a929f]">
                    Your account
                  </p>
                  <div className="space-y-1">
                    <Link
                      href="/Profile"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 cursor-pointer rounded-xl px-3 py-3 text-sm font-bold text-[#667180] hover:bg-[#f7f8fa] hover:text-[#2864d7]"
                    >
                      <UserRound size={17} />
                      Profile
                    </Link>
                    <Link
                      href="/allorders"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 cursor-pointer rounded-xl px-3 py-3 text-sm font-bold text-[#667180] hover:bg-[#f7f8fa] hover:text-[#2864d7]"
                    >
                      <PackageOpen size={17} />
                      My Orders
                    </Link>

                    <Link
                      href="/Wishlist"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 cursor-pointer rounded-xl px-3 py-3 text-sm font-bold text-[#667180] hover:bg-[#f7f8fa] hover:text-[#2864d7]"
                    >
                      <Heart size={17} />
                      Wishlist
                      <span className="ml-auto rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-black text-white">
                        {Wishlist?.count}
                      </span>
                    </Link>

                    <Link
                      href="/cart"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 cursor-pointer rounded-xl px-3 py-3 text-sm font-bold text-[#667180] hover:bg-[#f7f8fa] hover:text-[#2864d7]"
                    >
                      <ShoppingBag size={17} />
                      Shopping cart
                      <span className="ml-auto rounded-full bg-[#2864d7] px-2 py-0.5 text-[10px] font-black text-white">
                        {cart?.numOfCartItems}
                      </span>
                    </Link>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        signOut();
                      }}
                      className="flex w-full items-center cursor-pointer gap-3 rounded-xl px-3 transation-all duration-150 py-3 text-sm font-bold text-red-600 hover:bg-red-50 "
                    >
                      <LogOutIcon size={17} />
                      Sign Out
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex w-full gap-2 items-center ">
                  <Link
                    href={"/LogIn"}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 px-3 text-center w-full font-semibold leading-6 rounded-xl cursor-pointer transition-all duration-150 hover:bg-[#2153b0] bg-[#2863d7] text-white"
                  >
                    Log In
                  </Link>
                  <Link
                    href={"/SignUp"}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 text-center w-full px-3 font-semibold leading-6 rounded-xl cursor-pointer transition-all duration-150 hover:bg-[#2864d7] bg-transparent border border-[#2864d7] text-[#2864d7] hover:text-white"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Secure shopping footer */}
          <div className="border-t border-[#e4e7ec] p-5">
            <div className="flex items-center gap-3 rounded-xl bg-[#effbf4] p-3">
              <span className="grid size-9 place-items-center rounded-lg bg-white text-[#15704a]">
                <ShieldCheck size={18} />
              </span>

              <div>
                <p className="text-xs font-black text-[#151922]">
                  Secure shopping
                </p>

                <p className="mt-0.5 text-[10px] text-[#5e746c]">
                  Protected checkout, every time.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
