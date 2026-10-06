import Image from "next/image";

export default function BrandCard({
  logo,
  name,
}: {
  logo: string;
  name: string;
}) {
  return (
    <>
      <div
        className={`group relative flex min-h-39 flex-col justify-between overflow-hidden rounded-[20px] border p-5 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7] sm:min-h-43.5 sm:p-6 border-[#e4e7ec] bg-white shadow-[0_8px_22px_rgba(21,25,34,0.035)] hover:border-[#c9d7f2] hover:shadow-[0_16px_32px_rgba(21,25,34,0.08)]`}
      >
        <span className="pointer-events-none absolute -right-9 -top-9 size-24 rounded-full bg-[#d9f7e9]/45 blur-2xl transition-transform duration-500 group-hover:scale-150" />

        <div className="overflow-hidden">
          <Image
            src={logo}
            width={300}
            height={300}
            alt="BrandLogo"
            className="hover:scale-105 duration-150 ease-in-out transition-all"
          />
        </div>
        <span className="relative flex items-center justify-between border-t border-[#edf0f3] pt-3 text-[10px] font-bold text-[#667180]">
          <span>{name}</span>
        </span>
      </div>
    </>
  );
}
