import { ShoppingCart } from "lucide-react";

export default function LoadingPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f8fa] px-5 text-[#151922]">
      <div className="pointer-events-none absolute -left-28 -top-28 size-72 rounded-full bg-[#dce9fb] blur-3xl cartiva-float" />
      <div className="pointer-events-none absolute -bottom-36 -right-24 size-80 rounded-full bg-[#dff5e9] blur-3xl cartiva-float-reverse" />
      <div className="pointer-events-none absolute left-[12%] top-[22%] size-2 rounded-full bg-[#2864d7]/25" />
      <div className="pointer-events-none absolute right-[15%] top-[30%] size-3 rounded-full bg-[#15704a]/20" />
      <div className="pointer-events-none absolute bottom-[20%] left-[18%] size-3 rounded-full bg-[#f5b83d]/30" />
      <div className="pointer-events-none absolute bottom-[28%] right-[20%] size-2 rounded-full bg-[#2864d7]/25" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#cfd8e5 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
        }}
      />
      <div className="relative z-10 flex w-full max-w-70 flex-col items-center text-center">
        <div className="cartiva-logo-fade inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]">
          <span className="relative grid size-12 place-items-center rounded-[14px] bg-[#2864d7] text-white shadow-[0_12px_26px_rgba(40,100,215,0.22)]">
            <ShoppingCart size={23} strokeWidth={2.1} />
            <span className="absolute -right-1 -top-1 size-2.5 rounded-full bg-[#d9f7e9]" />
            <span className="absolute bottom-1.5 left-2.5 h-0.5 w-3.5 rounded-full bg-[#d9f7e9]/80" />
          </span>
          <span className="font-display text-[1.8rem] font-bold tracking-[-0.08em] text-[#151922]">
            cartiva<span className="text-[#2864d7]">.</span>
          </span>
        </div>
        <div className="mt-9 flex items-center justify-center gap-2">
          <span className="size-2 rounded-full bg-[#2864d7] cartiva-dot" />
          <span className="size-2 rounded-full bg-[#2864d7] cartiva-dot-delay" />
          <span className="size-2 rounded-full bg-[#2864d7] cartiva-dot-delay-more" />
        </div>
        <p className="mt-4 text-[10px] font-black uppercase tracking-[0.16em] text-[#8a929f]">
          Loading your page
        </p>
      </div>
    </main>
  );
}
