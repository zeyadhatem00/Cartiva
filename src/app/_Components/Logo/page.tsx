import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Logo({ foot }: { foot: boolean }) {
  return (
    <>
      {" "}
      <Link
        href="/"
        className="group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
        aria-label="Cartiva home"
      >
        <span className="relative grid size-9 place-items-center rounded-[11px] bg-[#2864d7] text-white shadow-[0_4px_10px_rgba(40,100,215,0.22)] transition-transform duration-200 group-hover:-rotate-6">
          <ShoppingCart size={18} strokeWidth={2.1} />
          <span className="absolute -right-1 -top-1 size-2.5 animate-pulse  rounded-full bg-[#d9f7e9] shadow-[0_0_0_3px_rgba(217,247,233,0.2)]" />
          <span className="absolute bottom-1.5 left-2.5 h-0.5 w-3 rounded-full bg-[#d9f7e9]/80 transition-all duration-200 group-hover:w-4" />
        </span>
        {foot ? (
          ""
        ) : (
          <span className="font-display text-[1.5rem] font-bold tracking-[-0.075em] text-[#151922]">
            cartiva<span className="text-[#2864d7]">.</span>
          </span>
        )}
      </Link>
    </>
  );
}
