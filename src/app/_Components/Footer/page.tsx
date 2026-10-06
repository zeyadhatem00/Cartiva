import Link from "next/link";
import Logo from "../Logo/page";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0f131a] text-white">
        <div className="mx-auto max-w-330 px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Logo foot={true} />
                <span className="font-display text-[1.42rem] font-bold tracking-[-0.07em]">
                  Cartiva<span className="text-[#d9f7e9]">.</span>
                </span>
              </div>
              <p className="mt-4 max-w-[28ch] text-sm leading-6 text-white/50">
                A simpler marketplace for the products that make everyday life
                better.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#d9f7e9]">
                Shop
              </p>
              <div className="mt-4 space-y-2.5 text-sm text-white/50">
                <Link href="/Shop" className="block hover:text-white">
                  All products
                </Link>
                <Link href="/Categories" className="block hover:text-white">
                  Categories
                </Link>
                <Link href="/Shop" className="block hover:text-white">
                  Deals
                </Link>
                <Link href="/Shop" className="block hover:text-white">
                  New arrivals
                </Link>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#d9f7e9]">
                Support
              </p>
              <div className="mt-4 space-y-2.5 text-sm text-white/50">
                <Link href="/Support" className="block hover:text-white">
                  Help center
                </Link>
                <Link href="/Terms" className="block hover:text-white">
                  Delivery info
                </Link>
                <Link href="/Terms" className="block hover:text-white">
                  Returns
                </Link>
                <Link href="/Support" className="block hover:text-white">
                  Contact us
                </Link>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#d9f7e9]">
                Your account
              </p>
              <div className="mt-4 space-y-2.5 text-sm text-white/50">
                <Link href="/Profile" className="block hover:text-white">
                  Account
                </Link>
                <Link href="/allorders" className="block hover:text-white">
                  Order history
                </Link>
                <Link href="/Wishlist" className="block hover:text-white">
                  Wishlist
                </Link>
                <Link href="/cart" className="block hover:text-white">
                  Cart
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.12em] text-white/30 sm:flex-row">
            <p>© 2025 Cartiva Store</p>
            <div className="flex gap-4">
              <Link href="/Privacy" className="hover:text-white">
                Privacy
              </Link>
              <Link href="/Terms" className="hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
