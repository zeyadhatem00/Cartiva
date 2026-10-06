import { GetProductDetails } from "@/app/Services/productDetails.api";
import ProductDetailsSlider from "../../../_Components/ProductDetailsSlider/page";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Heart,
  Home,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";
import Link from "next/link";
import RelatedData from "./../../../_Components/RelatedData/page";
import Reviews from "@/app/_Components/productReviews/page";
import AddTocartBtn from "@/app/_Components/AddtocartButton/page";
import { AddAWishlist } from "@/app/Services/WishlistActions/AddtoWishlist";
import ADDtoWishlist from "@/app/_Components/AddtoWishlistbtn/page";

export default async function productDetails(props: any) {
  let url = await props.params;
  let { id } = url;
  let data = await GetProductDetails(id);

  return (
    <>
      <div className={` min-h-screen bg-[#f7f8fa] text-[#151922]`}>
        <main className={` mx-auto max-w-330 px-4 pb-16 lg:px-8`}>
          <nav
            className="flex items-center gap-2 overflow-x-auto py-5 text-[11px] font-semibold whitespace-nowrap text-[#8a929f]"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-[#2864d7]"
            >
              <Home size={13} /> Home
            </Link>
            <ChevronRight size={13} />
            <a href="#related" className="hover:text-[#2864d7]">
              {data.category.name}
            </a>
            <ChevronRight size={13} />
            <a href="#details" className="hover:text-[#2864d7]">
              {data.subcategory.name}
            </a>

            <span className="font-bold text-[#394351]">{data.title}</span>
          </nav>
          <section className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
            <ProductDetailsSlider imgs={data?.images} />

            <div className="rounded-[22px] border h-fit border-[#e4e7ec] bg-white p-5 sm:p-7 lg:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-[#eef6ff] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.12em] text-[#2864d7]">
                  {data.category.name}
                </span>
                <span className="rounded-md bg-[#f0f2f5] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.12em] text-[#667180]">
                  {data.brand.name}
                </span>
              </div>
              <h1 className="mt-5 max-w-[14ch] font-display text-[clamp(2.25rem,4vw,4rem)] font-bold leading-[0.92] tracking-[-0.075em]">
                {data.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-[#fff5cf] px-2 py-1.5 text-xs font-black text-[#806413]">
                  <Star size={13} className="fill-[#e7b93e] text-[#e7b93e]" />{" "}
                  {data.ratingsAverage}
                </span>
                <span className="text-xs text-[#667180]">
                  {data.ratingsQuantity} verified reviews
                </span>
                <span className="size-1 rounded-full bg-[#b6bec8]" />
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#15704a]">
                  <Check size={14} /> In stock
                </span>
              </div>
              <div className="mt-7 flex items-end gap-3 border-b border-[#edf0f3] pb-7">
                <strong className="font-display text-[2rem] font-bold tracking-[-0.06em] text-[#151922]">
                  {data.price} EGP
                </strong>
              </div>
              <p className="mt-6 max-w-[54ch] text-sm leading-6 text-[#667180]">
                {data.description}
              </p>

              <div className="mt-5 grid ">
                <AddTocartBtn id={id} detailsPage={true} />
              </div>
<ADDtoWishlist detailsPage = {true} id = {id}/>

              <div className="mt-7 grid grid-cols-3 gap-3 border-t border-[#edf0f3] pt-6">
                <div className="text-center">
                  <Truck size={19} className="mx-auto text-[#15704a]" />
                  <p className="mt-2 text-[10px] font-bold text-[#394351]">
                    Free delivery
                  </p>
                  <p className="mt-1 text-[9px] text-[#8a929f]">
                    Orders over $75
                  </p>
                </div>
                <div className="border-x border-[#edf0f3] text-center">
                  <RotateCcw size={19} className="mx-auto text-[#15704a]" />
                  <p className="mt-2 text-[10px] font-bold text-[#394351]">
                    Easy returns
                  </p>
                  <p className="mt-1 text-[9px] text-[#8a929f]">
                    30 days, no drama
                  </p>
                </div>
                <div className="text-center">
                  <ShieldCheck size={19} className="mx-auto text-[#15704a]" />
                  <p className="mt-2 text-[10px] font-bold text-[#394351]">
                    Secure payment
                  </p>
                  <p className="mt-1 text-[9px] text-[#8a929f]">
                    Protected checkout
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Reviews {...data} />

          <section id="related" className="mt-14">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.13em] text-[#2864d7]">
                  Curated for you
                </p>
                <h2 className="mt-2 font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.07em]">
                  You may also like
                </h2>
              </div>
              <a
                href="#related"
                className="hidden items-center gap-1.5 text-xs font-bold text-[#2864d7] hover:text-[#151922] sm:inline-flex"
              >
                View all <ArrowRight size={14} />
              </a>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <RelatedData cat={data.category.name} />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
