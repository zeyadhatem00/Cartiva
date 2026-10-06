"use client";

import Pagination from "@/app/_Components/Pagination/page";
import ProductCard from "@/app/_Components/ProductCard/page";
import { productscontext } from "@/app/context/productsContext";
import { Category, Product } from "@/app/interface/Products";
import { Getcategories } from "@/app/Services/Category.api";
import { ListBox, Select } from "@heroui/react";
import {
  ChevronDown,
  RefreshCcw,
  ShoppingBag,
  X,
  SlidersHorizontal,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";

export default function ShopPage() {
  let { products } = useContext(productscontext);
  let [allcategories, setCategory] = useState<Category[]>([]);
  let [filteredProducts, setFilterProducts] = useState<Product[]>([]);
  let [categoryFiltre, setCatshow] = useState(true);
  let [PriceFiltre, setpriceshow] = useState(true);
  let [selectedCategories, setCategories] = useState<string>("");
  let [range, setRange] = useState({ min: 0, max: 50000000000 });
  let [rangevalue, setvalue] = useState("");
  let [CurrentPage, setCurrenPage] = useState(1);
  let [ProductPerPage, setProductperPage] = useState(12);
  let [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const lastProductindex = CurrentPage * ProductPerPage;
  const firstProductindex = lastProductindex - ProductPerPage;
  const CurrentProducts = filteredProducts.slice(
    firstProductindex,
    lastProductindex,
  );

  async function getdata() {
    let categories = await Getcategories();
    setCategory(categories);
  }
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    getdata();
  }, []);

  function FilterPoducts(
    category: string,
    range: { min: number; max: number },
  ) {
    let clone = structuredClone(products);
    let filtered = clone.filter((product) => {
      const categoryfilter =
        category == "" || product.category.name == category;
      const pricefilter =
        product.price >= range.min && product.price <= range.max;
      return categoryfilter && pricefilter;
    });
    setFilterProducts(filtered);
  }

  function clearfilters() {
    const defaultrange = { min: 0, max: 500000000 };
    setCategories("");
    setvalue("");
    setFilterProducts(products);
    setRange(defaultrange);
    console.log(products);
  }

  function sortHightoLow() {
    let sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
    setFilterProducts(sorted);
  }
  function sortLowtoHigh() {
    let sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    setFilterProducts(sorted);
  }

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#151922]">
      <main className="mx-auto max-w-330 px-4 pb-20 lg:px-8">
        <section className="relative mt-6 overflow-hidden rounded-[24px] bg-[#151922] px-6 py-9 text-white shadow-[0_20px_48px_rgba(21,25,34,0.12)] sm:px-10 sm:py-11 lg:px-12">
          <div className="pointer-events-none absolute -right-32 -top-40 size-124 rounded-full bg-[#2864d7]/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-52 left-1/3 size-96 rounded-full bg-[#d9f7e9]/10 blur-3xl" />
          <div className="absolute -right-3 top-0 hidden font-display text-[10rem] font-bold leading-none tracking-[-0.15em] text-white/[0.035] sm:block">
            SHOP
          </div>
          <div className="relative z-10 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-md bg-[#d9f7e9] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-[#15704a]">
                <ShoppingBag size={12} /> The Cartiva catalog
              </p>
              <h1 className="mt-5 font-display text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[0.86] -tracking-widest">
                Shop the
                <br />
                <span className="text-[#8fc4ff]">good stuff.</span>
              </h1>
              <p className="mt-5 max-w-[52ch] text-sm leading-6 text-white/65 sm:text-base">
                Browse a considered mix of tech, activewear, style, and everyday
                upgrades—organized so finding your next thing feels simple.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3 text-[10px] font-black uppercase tracking-[0.12em] text-white/60">
              <span className="rounded-full border border-white/15 px-3 py-2">
                {products.length} products
              </span>
              <span className="rounded-full border border-white/15 px-3 py-2">
                Fast delivery
              </span>
            </div>
          </div>
        </section>

        <section className="mt-8 lg:mt-10">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#2864d7]">
                Curated selection
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.07em] sm:text-4xl">
                All products
              </h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[228px_1fr] xl:grid-cols-[250px_1fr]">
            <>
              <aside className="h-fit rounded-2xl border hidden lg:block border-[#e1e5ea] bg-white p-5 shadow-[0_8px_22px_rgba(21,25,34,0.035)] lg:sticky lg:top-22.5">
                <div className="flex items-center justify-between border-b border-[#edf0f3] pb-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#2864d7]">
                      Refine by
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold tracking-tighter">
                      Filters
                    </h3>
                  </div>
                  <button
                    onClick={() => {
                      clearfilters();
                    }}
                    className="text-[10px] cursor-pointer font-black uppercase tracking-[0.08em] text-[#8a929f] hover:text-[#2864d7]"
                  >
                    Clear all
                  </button>
                </div>
                <div className="group border-b border-[#edf0f3] py-5">
                  <div
                    className={`flex cursor-pointe transition-all duration-150 items-center justify-between text-xs font-black uppercase tracking-[0.08em] text-[#151922]`}
                  >
                    Categories
                    <ChevronDown
                      onClick={() => {
                        setCatshow(!categoryFiltre);
                      }}
                      size={15}
                      className={`transition-all cursor-pointer hover:text-[#2864d7] duration-150 ${categoryFiltre ? "rotate-180" : ""}`}
                    />
                  </div>
                  <div
                    className={`mt-4 space-y-3 transition-all duration-150 overflow-auto ${categoryFiltre ? "max-h-50" : "max-h-0"} `}
                  >
                    {allcategories.map((category) => {
                      return (
                        <label
                          onClick={() => {
                            setCurrenPage(1);
                            const newcategory = category.name;
                            setCategories(newcategory);
                            FilterPoducts(newcategory, range);
                          }}
                          key={category._id}
                          className="flex items-center justify-between gap-3 text-xs text-[#667180]"
                        >
                          <span className="flex cursor-pointer items-center gap-2">
                            <input
                              readOnly
                              type="checkbox"
                              checked={
                                selectedCategories == category.name
                                  ? true
                                  : false
                              }
                              className="size-4 cursor-pointer rounded border-[#cbd2db] accent-[#2864d7]"
                            />{" "}
                            {category.name}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="group  py-5">
                  <div className="flex cursor-pointer list-none items-center justify-between text-xs font-black uppercase tracking-[0.08em] text-[#151922]">
                    Price range
                    <ChevronDown
                      onClick={() => {
                        setpriceshow(!PriceFiltre);
                      }}
                      size={15}
                      className={`transition-all cursor-pointer hover:text-[#2864d7] duration-150 ${PriceFiltre ? "rotate-180" : ""}`}
                    />
                  </div>
                  <div
                    className={`mt-4 transition-all scrollbar-none duration-150 overflow-auto ${PriceFiltre ? "max-h-50" : "max-h-0"}`}
                  >
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button
                        onClick={() => {
                          setCurrenPage(1);
                          const newrange = { min: 0, max: 50 };
                          setRange(newrange);
                          FilterPoducts(selectedCategories, newrange);
                          setvalue("50");
                        }}
                        className={` ${rangevalue == "50" ? "bg-[#2864d7] text-white  border-[#2864d7]" : "border-[#e1e5ea] text-[#667180] hover:border-[#2864d7] hover:text-[#2864d7]"} cursor-pointer  rounded-full transition-all duration-150 border px-2.5 py-1.5 text-[10px] font-bold text-[#667180] `}
                      >
                        Under 50EGP
                      </button>
                      <button
                        onClick={() => {
                          setCurrenPage(1);
                          const newrange = { min: 50, max: 150 };
                          setRange(newrange);
                          FilterPoducts(selectedCategories, newrange);
                          setvalue("50-150");
                        }}
                        className={` ${rangevalue == "50-150" ? "bg-[#2864d7] text-white  border-[#2864d7]" : "border-[#e1e5ea] text-[#667180] hover:border-[#2864d7] hover:text-[#2864d7]"} cursor-pointer  rounded-full transition-all duration-150 border px-2.5 py-1.5 text-[10px] font-bold text-[#667180] `}
                      >
                        50EGP–150EGP
                      </button>
                      <button
                        onClick={() => {
                          setCurrenPage(1);
                          const newrange = { min: 150, max: 500 };
                          setRange(newrange);
                          FilterPoducts(selectedCategories, newrange);
                          setvalue("150-500");
                        }}
                        className={` ${rangevalue == "150-500" ? "bg-[#2864d7] text-white  border-[#2864d7]" : "border-[#e1e5ea] text-[#667180] hover:border-[#2864d7] hover:text-[#2864d7]"} cursor-pointer  rounded-full transition-all duration-150 border px-2.5 py-1.5 text-[10px] font-bold text-[#667180] `}
                      >
                        150EGP–500EGP
                      </button>
                      <button
                        onClick={() => {
                          setCurrenPage(1);
                          const newrange = { min: 500, max: 50000000 };
                          setRange(newrange);
                          FilterPoducts(selectedCategories, newrange);
                          setvalue("500up");
                        }}
                        className={` ${rangevalue == "500up" ? "bg-[#2864d7] text-white  border-[#2864d7]" : "border-[#e1e5ea] text-[#667180] hover:border-[#2864d7] hover:text-[#2864d7]"} cursor-pointer  rounded-full transition-all duration-150 border px-2.5 py-1.5 text-[10px] font-bold text-[#667180] `}
                      >
                        500EGP & Above
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            </>

            <div className="min-w-0">
              <div className="mb-4 flex justify-between items-center ">
                <div>
                  {" "}
                  <Select className="md:w-[256px] w-50" placeholder="Sort : ">
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item onClick={sortHightoLow}>
                          Price: High to Low
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item onClick={sortLowtoHigh}>
                          Price: Low to High
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </div>
                <div className="flex items-center flex-col gap-3 lg:block lg:gap-0 ">
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(true)}
                    className="inline-flex items-center cursor-pointer transation-all duration-150 gap-2 rounded-lg border border-[#dfe4ea] bg-white px-3 py-2 text-[10px] font-black uppercase tracking-widest text-[#2864d7] shadow-sm hover:border-[#2864d7] lg:hidden"
                  >
                    <SlidersHorizontal size={14} />
                    Filters
                  </button>

                  <span className="text-[10px]  font-black uppercase tracking-widest text-[#8a929f]">
                    {filteredProducts.length} Products
                  </span>
                </div>
              </div>

              {filteredProducts.length == 0 ? (
                <div className="flex min-h-130 flex-col items-center justify-center rounded-2xl border border-dashed border-[#cbd9ef] bg-white px-6 py-12 text-center shadow-[0_8px_22px_rgba(21,25,34,0.025)] sm:px-12">
                  <div className="relative grid size-24 place-items-center rounded-[26px] border border-[#c9d7f2] bg-[#eef6ff] text-[#2864d7] shadow-[0_12px_28px_rgba(40,100,215,0.12)]">
                    <span className="absolute -right-2 -top-2 size-6 rounded-full bg-[#d9f7e9]" />
                    <ShoppingBag size={38} strokeWidth={1.35} />
                    <span className="absolute bottom-4 h-1 w-7 rounded-full bg-[#8fc4ff]" />
                  </div>

                  <p className="mt-7 text-[10px] font-black uppercase tracking-[0.16em] text-[#2864d7]">
                    Nothing matched your filters
                  </p>

                  <h3 className="mt-2 font-display text-3xl font-bold tracking-[-0.07em]">
                    No products found
                  </h3>

                  <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                    <button
                      onClick={() => {
                        clearfilters();
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2864d7] px-4 py-3 text-[10px] font-black uppercase tracking-widest text-white shadow-[0_7px_16px_rgba(40,100,215,0.18)] hover:bg-[#151922]"
                    >
                      <RefreshCcw size={14} />
                      Clear filters
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid pt-2 lg:pt-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {CurrentProducts.map((product) => {
                    return <ProductCard key={product._id} {...product} />;
                  })}
                </div>
              )}
              {filteredProducts.length <= 12 ? (
                ""
              ) : (
                <Pagination
                  CurrentPage={CurrentPage}
                  setCurrenPage={setCurrenPage}
                  totalProducts={filteredProducts.length}
                  productsperpage={ProductPerPage}
                />
              )}
            </div>
          </div>
        </section>
      </main>
      {/* MobileFilter */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          mobileFiltersOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <button
          type="button"
          onClick={() => setMobileFiltersOpen(false)}
          aria-label="Close filters overlay"
          className={`absolute inset-0 bg-[#151922]/45 transition-all duration-300 ${
            mobileFiltersOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <aside
          aria-label="Mobile filters"
          className={`absolute right-0 top-0 flex h-full w-[min(88vw,370px)] flex-col bg-white shadow-[-16px_0_48px_rgba(21,25,34,0.18)] transition-all duration-300 ease-out ${
            mobileFiltersOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between border-b border-[#e4e7ec] px-5 py-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#2864d7]">
                Refine your view
              </p>

              <h2 className="mt-1 font-display text-2xl font-bold tracking-[-0.06em]">
                Filters
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
              className="grid size-10 place-items-center cursor-pointer rounded-xl border border-[#dfe4ea] text-[#667180] transition-colors hover:bg-[#151922] hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto px-5 py-5">
            {/* Product count */}
            <div className="mb-5 flex items-center justify-between rounded-xl bg-[#eef6ff] px-3 py-2.5">
              <span className="text-xs font-bold text-[#667180]">
                {products.length} products available
              </span>
            </div>

            {/* Categories */}
            <div className="group border-b border-[#edf0f3] pb-5">
              <div
                className={`flex cursor-pointe transition-all duration-150 items-center justify-between text-xs font-black uppercase tracking-[0.08em] text-[#151922]`}
              >
                Categories
              </div>
              <div
                className={`mt-4 space-y-3 transition-all duration-150 overflow-auto ${categoryFiltre ? "max-h-50" : "max-h-0"} `}
              >
                {allcategories.map((category) => {
                  return (
                    <label
                      onClick={() => {
                        setCurrenPage(1);
                        const newcategory = category.name;
                        setCategories(newcategory);
                        FilterPoducts(newcategory, range);
                      }}
                      key={category._id}
                      className="flex items-center justify-between gap-3 text-xs text-[#667180]"
                    >
                      <span className="flex cursor-pointer items-center gap-2">
                        <input
                          readOnly
                          type="checkbox"
                          checked={
                            selectedCategories == category.name ? true : false
                          }
                          className="size-4 cursor-pointer rounded border-[#cbd2db] accent-[#2864d7]"
                        />{" "}
                        {category.name}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Price range */}
            <div className="group  py-5">
              <div className="flex cursor-pointer list-none items-center justify-between text-xs font-black uppercase tracking-[0.08em] text-[#151922]">
                Price range
              </div>
              <div
                className={`mt-4 transition-all scrollbar-none duration-150 overflow-auto ${PriceFiltre ? "max-h-50" : "max-h-0"}`}
              >
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      setCurrenPage(1);
                      const newrange = { min: 0, max: 50 };
                      setRange(newrange);
                      FilterPoducts(selectedCategories, newrange);
                      setvalue("50");
                    }}
                    className={` ${rangevalue == "50" ? "bg-[#2864d7] text-white  border-[#2864d7]" : "border-[#e1e5ea] text-[#667180] hover:border-[#2864d7] hover:text-[#2864d7]"} cursor-pointer  rounded-full transition-all duration-150 border px-2.5 py-1.5 text-[10px] font-bold text-[#667180] `}
                  >
                    Under 50EGP
                  </button>
                  <button
                    onClick={() => {
                      setCurrenPage(1);
                      const newrange = { min: 50, max: 150 };
                      setRange(newrange);
                      FilterPoducts(selectedCategories, newrange);
                      setvalue("50-150");
                    }}
                    className={` ${rangevalue == "50-150" ? "bg-[#2864d7] text-white  border-[#2864d7]" : "border-[#e1e5ea] text-[#667180] hover:border-[#2864d7] hover:text-[#2864d7]"} cursor-pointer  rounded-full transition-all duration-150 border px-2.5 py-1.5 text-[10px] font-bold text-[#667180] `}
                  >
                    50EGP–150EGP
                  </button>
                  <button
                    onClick={() => {
                      setCurrenPage(1);
                      const newrange = { min: 150, max: 500 };
                      setRange(newrange);
                      FilterPoducts(selectedCategories, newrange);
                      setvalue("150-500");
                    }}
                    className={` ${rangevalue == "150-500" ? "bg-[#2864d7] text-white  border-[#2864d7]" : "border-[#e1e5ea] text-[#667180] hover:border-[#2864d7] hover:text-[#2864d7]"} cursor-pointer  rounded-full transition-all duration-150 border px-2.5 py-1.5 text-[10px] font-bold text-[#667180] `}
                  >
                    150EGP–500EGP
                  </button>
                  <button
                    onClick={() => {
                      setCurrenPage(1);
                      const newrange = { min: 500, max: 50000000 };
                      setRange(newrange);
                      FilterPoducts(selectedCategories, newrange);
                      setvalue("500up");
                    }}
                    className={` ${rangevalue == "500up" ? "bg-[#2864d7] text-white  border-[#2864d7]" : "border-[#e1e5ea] text-[#667180] hover:border-[#2864d7] hover:text-[#2864d7]"} cursor-pointer  rounded-full transition-all duration-150 border px-2.5 py-1.5 text-[10px] font-bold text-[#667180] `}
                  >
                    500EGP & Above
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Drawer actions */}
          <div className="grid  gap-3 border-t border-[#e4e7ec] p-5">
            <button
              type="button"
              onClick={() => {
                setMobileFiltersOpen(false);
                clearfilters();
              }}
              className="rounded-xl transition-all duration-150 cursor-pointer border border-[#dfe4ea] px-4 py-3 text-[10px] font-black uppercase tracking-widest text-[#667180] hover:border-[#2864d7] hover:text-[#2864d7]"
            >
              Clear all
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
