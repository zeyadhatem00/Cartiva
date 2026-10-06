"use client";

import Spinner2 from "@/app/_Components/Spinner/Spinner";
import { Data } from "@/app/interface/Address";
import { AddAdress } from "@/app/Services/Adresses/AddAdress";
import { DeleteAdress } from "@/app/Services/Adresses/DeleteAddress";
import { GetAddresses } from "@/app/Services/Adresses/GetUserAddresses";
import { ArrowRight, MapPin, Phone, Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function Address() {
  let [Addresses, setAddresses] = useState<Data[]>([]);
  let [isopen, setOpen] = useState(false);
  let [loading, setloading] = useState(false);
  let { handleSubmit, register } = useForm({
    defaultValues: {
      name: "",
      details: "",
      phone: "",
      city: "",
    },
  });

  async function GetAllAdress() {
    let res = await GetAddresses();
    setAddresses(res.data);
  }
  async function Delete(id: string) {
    let res = await DeleteAdress(id);
    setAddresses(res.data);
  }

  async function senddata(data: Data) {
    setloading(true);
    let res = await AddAdress(data);
    if (res.status == "success") {
      setAddresses(res.data);
      setOpen(false);
      setloading(false);
    } else {
      toast.error(res.message);
    }
  }

  useEffect(() => {
    GetAllAdress();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#2864d7]">
            Delivery details
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold tracking-[-0.07em] text-[#151922] sm:text-4xl">
            My addresses
          </h2>
          <p className="mt-2 text-sm text-[#7b8490]">
            Save delivery addresses to make checkout faster and easier.
          </p>
        </div>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="inline-flex w-fit items-center duration-150 cursor-pointer gap-2 rounded-xl bg-[#2864d7] px-4 py-3 text-xs font-black text-white shadow-[0_8px_18px_rgba(40,100,215,0.16)] transition-all hover:bg-[#151922] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7] active:scale-[0.98]"
        >
          <span className="text-base leading-none">+</span> Add address
        </button>
      </div>
      {Addresses.length == 0 ? (
        <section id="addresses" className="min-w-0">
          <div className="mt-6 rounded-[22px] border border-[#e4e7ec] bg-white px-5 py-14 text-center shadow-[0_12px_32px_rgba(21,25,34,0.04)] sm:px-8 sm:py-20">
            <div className="mx-auto grid size-20 place-items-center rounded-[22px] bg-[#eef6ff] text-[#2864d7]">
              <MapPin size={34} strokeWidth={1.5} />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold tracking-[-0.06em] text-[#151922]">
              No addresses yet
            </h3>
            <p className="mx-auto mt-2 max-w-[38ch] text-sm leading-6 text-[#7b8490]">
              Add your first delivery address and we&apos;ll make future orders
              quicker to complete.
            </p>
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#2864d7] px-5 py-3 text-xs font-black text-white shadow-[0_8px_18px_rgba(40,100,215,0.16)] transition-all hover:bg-[#151922] focus-visible:outline-none duration-150 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#2864d7] active:scale-[0.98]"
            >
              Add your first address <ArrowRight size={15} />
            </button>
          </div>
        </section>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {/* Home Address Card */}
          {Addresses.map((Address) => {
            return (
              <article
                key={Address._id}
                className="group rounded-[22px] border border-[#dfe4ea] bg-white p-5 shadow-[0_12px_32px_rgba(21,25,34,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#b9cdef] hover:shadow-[0_16px_34px_rgba(40,100,215,0.10)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#eef6ff] text-[#2864d7]">
                      <MapPin size={19} strokeWidth={2} />
                    </span>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-black text-[#151922]">
                          {Address.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-1">
                    <button
                      onClick={() => {
                        Delete(Address._id!);
                      }}
                      type="button"
                      aria-label="Remove home address"
                      className="grid size-8 duration-150 active:scale-[0.98] cursor-pointer place-items-center rounded-lg text-[#8a929f] transition-all hover:bg-[#fff1f0] hover:text-[#e04b43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e04b43]"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>

                <div className="mt-5 border-t border-[#edf0f3] pt-4">
                  <p className="text-sm font-bold leading-5 text-[#394351]">
                    {Address.details}
                  </p>

                  <p className="mt-1 text-xs text-[#8a929f]">{Address.city}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-semibold text-[#667180]">
                    <span className="inline-flex items-center gap-1.5">
                      <Phone size={12} className="text-[#2864d7]" />
                      {Address.phone}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {isopen && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-[#151922]/60 p-4 backdrop-blur-[3px]"
          role="presentation"
          onClick={() => {
            setOpen(false);
          }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="max-h-[calc(100dvh-2rem)] w-full max-w-lg overflow-y-auto rounded-[22px] bg-white p-5 shadow-[0_24px_80px_rgba(21,25,34,0.28)] sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#2864d7]">
                  Delivery details
                </p>

                <h2
                  id="add-address-title"
                  className="mt-1 font-display text-2xl font-bold tracking-[-0.06em] text-[#151922]"
                >
                  Add new address
                </h2>

                <p className="mt-1 text-xs text-[#7b8490]">
                  Save a delivery location for faster checkout.
                </p>
              </div>

              <button
                type="button"
                aria-label="Close address dialog"
                onClick={() => setOpen(false)}
                className="grid size-9 cursor-pointer duration-150 shrink-0 place-items-center active:scale-[0.98] rounded-xl bg-[#f3f5f7] text-[#667180] transition-all hover:bg-[#e8edf3] hover:text-[#151922] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
              >
                <X size={17} />
              </button>
            </div>

            <form
              onSubmit={handleSubmit(senddata)}
              className="mt-6 space-y-4"
            >
              <div>
                <label
                  htmlFor="address-name"
                  className="mb-1.5 block text-xs font-bold text-[#394351]"
                >
                  Address name
                </label>

                <input
                  id="address-name"
                  {...register("name")}
                  required
                  type="text"
                  placeholder="e.g. Home, Office"
                  className="h-11 w-full rounded-xl border border-[#dfe4ea] bg-[#fbfcfd] px-3 text-sm text-[#151922] outline-none transition-colors placeholder:text-[#a0a8b2] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="full-address"
                  className="mb-1.5 block text-xs font-bold text-[#394351]"
                >
                  Full address
                </label>

                <textarea
                  id="full-address"
                  required
                  {...register("details")}
                  rows={3}
                  placeholder="Street, building, apartment..."
                  className="w-full resize-none rounded-xl border border-[#dfe4ea] bg-[#fbfcfd] px-3 py-3 text-sm text-[#151922] outline-none transition-colors placeholder:text-[#a0a8b2] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone-number"
                    className="mb-1.5 block text-xs font-bold text-[#394351]"
                  >
                    Phone number
                  </label>

                  <input
                    id="phone-number"
                    required
                    {...register("phone")}
                    type="tel"
                    placeholder="01xxxxxxxxx"
                    className="h-11 w-full rounded-xl border border-[#dfe4ea] bg-[#fbfcfd] px-3 text-sm text-[#151922] outline-none transition-colors placeholder:text-[#a0a8b2] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="mb-1.5 block text-xs font-bold text-[#394351]"
                  >
                    City
                  </label>

                  <input
                    id="city"
                    required
                    {...register("city")}
                    type="text"
                    placeholder="Cairo"
                    className="h-11 w-full rounded-xl border border-[#dfe4ea] bg-[#fbfcfd] px-3 text-sm text-[#151922] outline-none transition-colors placeholder:text-[#a0a8b2] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
                  />
                </div>
              </div>

              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="h-11 rounded-xl border border-[#e4e7ec] bg-[#f7f8fa] px-5 text-xs font-black cursor-pointer text-[#667180] transition-all duration-150 active:scale-[0.98] hover:border-[#cbd3dd] hover:bg-white hover:text-[#151922] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7]"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="h-11 rounded-xl bg-[#2864d7] px-5 text-xs font-black cursor-pointer transition-all duration-150 active:scale-[0.98] text-white shadow-[0_8px_18px_rgba(40,100,215,0.16)]  hover:bg-[#151922] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864d7] "
                >
                  {loading ? <Spinner2 /> : "Add address"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
