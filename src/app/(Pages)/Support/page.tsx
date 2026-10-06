import {
  ArrowRight,
  Clock3,
  Globe2,
  Headphones,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";
import { ListBox, Select } from "@heroui/react";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#151922]">
      <section className="mx-auto max-w-330 px-4 lg:px-8">
        <div className="relative mt-6 overflow-hidden rounded-[24px] bg-[#151922] px-6 py-10 text-white shadow-[0_20px_48px_rgba(21,25,34,0.12)] sm:px-10 sm:py-12 lg:px-16 lg:py-14">
          <div className="pointer-events-none absolute -right-28 -top-36 size-120 rounded-full bg-[#2864d7]/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 left-1/3 size-96 rounded-full bg-[#d9f7e9]/10 blur-3xl" />
          <div className="absolute -right-2 top-1 hidden font-display text-[11rem] font-bold leading-none tracking-[-0.15em] text-white/[0.035] sm:block">
            HELP
          </div>
          <div className="relative z-10 flex max-w-3xl items-center gap-5">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[#2864d7] text-white shadow-[0_8px_18px_rgba(40,100,215,0.24)] sm:size-16">
              <Headphones size={29} strokeWidth={1.8} />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="inline-flex items-center gap-2 rounded-md bg-[#d9f7e9] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-[#15704a]">
                  <MessageCircle size={12} /> Customer care
                </p>
              </div>
              <h1 className="mt-4 font-display text-[clamp(2.6rem,6vw,5.2rem)] font-bold leading-[0.86] -tracking-widest">
                We're here to <span className="text-[#8fc4ff]">help.</span>
              </h1>
              <p className="mt-5 max-w-[48ch] text-sm leading-6 text-white/65 sm:text-base">
                Questions about an order, delivery, or product? Send us a note
                and our team will get back to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-330 px-4 py-10 lg:px-8 lg:py-14">
        <div className="grid items-start gap-7 lg:grid-cols-[300px_minmax(0,1fr)] xl:gap-10">
          <aside className="space-y-4">
            <article className="rounded-2xl border border-[#e4e7ec] bg-white p-5 shadow-[0_8px_22px_rgba(21,25,34,0.035)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c9d7f2] hover:shadow-[0_14px_28px_rgba(40,100,215,0.08)]">
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#eef6ff] text-[#2864d7]">
                  <Phone size={20} />
                </span>
                <div>
                  <h2 className="font-display text-base font-bold tracking-[-0.035em]">
                    Call us
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-[#667180]">
                    Mon–Fri from 8am to 6pm
                  </p>
                  <a
                    href="tel:+18001234567"
                    className="mt-2 inline-block text-sm font-black text-[#2864d7] hover:text-[#151922]"
                  >
                    +1 (800) 123-4567
                  </a>
                </div>
              </div>
            </article>
            <article className="rounded-2xl border border-[#e4e7ec] bg-white p-5 shadow-[0_8px_22px_rgba(21,25,34,0.035)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#b9e4ce] hover:shadow-[0_14px_28px_rgba(21,112,74,0.08)]">
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#d9f7e9] text-[#15704a]">
                  <Mail size={20} />
                </span>
                <div>
                  <h2 className="font-display text-base font-bold tracking-[-0.035em]">
                    Email us
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-[#667180]">
                    We'll reply within 24 hours
                  </p>
                  <a
                    href="mailto:support@Cartiva.store"
                    className="mt-2 inline-block text-sm font-black text-[#15704a] hover:text-[#151922]"
                  >
                    support@Cartiva.store
                  </a>
                </div>
              </div>
            </article>
            <article className="rounded-2xl border border-[#e4e7ec] bg-white p-5 shadow-[0_8px_22px_rgba(21,25,34,0.035)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c9d7f2] hover:shadow-[0_14px_28px_rgba(40,100,215,0.08)]">
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#f0f2f5] text-[#394351]">
                  <MapPin size={20} />
                </span>
                <div>
                  <h2 className="font-display text-base font-bold tracking-[-0.035em]">
                    Visit our studio
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-[#667180]">
                    123 Commerce Street
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </article>
            <article className="rounded-2xl border border-[#e4e7ec] bg-white p-5 shadow-[0_8px_22px_rgba(21,25,34,0.035)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c9d7f2] hover:shadow-[0_14px_28px_rgba(40,100,215,0.08)]">
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#fff5cf] text-[#806413]">
                  <Clock3 size={20} />
                </span>
                <div>
                  <h2 className="font-display text-base font-bold tracking-[-0.035em]">
                    Business hours
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-[#667180]">
                    Monday–Friday: 8am–6pm
                    <br />
                    Saturday: 9am–4pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </article>
            <article className="rounded-2xl border border-[#e4e7ec] bg-white p-5">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-base font-bold tracking-[-0.035em]">
                  <span className="text-[#2864d7]">Follow</span> Cartiva
                </h2>
                <Globe2 size={17} className="text-[#8a929f]" />
              </div>
              <div className="mt-4 flex gap-2">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="grid size-9 place-items-center rounded-full bg-[#f0f2f5] text-xs font-black text-[#667180] transition-colors hover:bg-[#2864d7] hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    viewBox="0 0 224 432"
                  >
                    <path
                      fill="currentColor"
                      d="M145 429H66V235H0v-76h66v-56q0-48 27-74t72-26q36 0 59 3v67l-41 1q-22 0-30 9t-8 27v49h76l-10 76h-66v194z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="grid size-9 place-items-center rounded-full bg-[#f0f2f5] text-xs font-black text-[#667180] transition-colors hover:bg-[#2864d7] hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="grid size-9 place-items-center rounded-full bg-[#f0f2f5] text-xs font-black text-[#667180] transition-colors hover:bg-[#2864d7] hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"
                    />
                  </svg>
                </a>
              </div>
            </article>
          </aside>

          <div className="space-y-5">
            <section
              id="message"
              className="rounded-[22px] border border-[#e4e7ec] bg-white p-5 shadow-[0_10px_26px_rgba(21,25,34,0.045)] sm:p-7 lg:p-8"
            >
              <div className="flex items-start gap-4 border-b border-[#edf0f3] pb-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#eef6ff] text-[#2864d7]">
                  <MessageCircle size={21} />
                </span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#2864d7]">
                    Send a message
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-bold tracking-[-0.055em] sm:text-3xl">
                    Tell us how we can help.
                  </h2>
                  <p className="mt-2 text-sm text-[#667180]">
                    Fill in the form and we'll get back to you as soon as
                    possible.
                  </p>
                </div>
              </div>
              <form className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-bold text-[#394351]">
                      Full name
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Jane Doe"
                      className="mt-2 w-full rounded-xl border border-[#dfe4ea] bg-white px-4 py-3 text-sm text-[#151922] outline-none transition-colors placeholder:text-[#9aa2ad] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold text-[#394351]">
                      Email address
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="jane@example.com"
                      className="mt-2 w-full rounded-xl border border-[#dfe4ea] bg-white px-4 py-3 text-sm text-[#151922] outline-none transition-colors placeholder:text-[#9aa2ad] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-xs font-bold text-[#394351]">
                    What can we help with?
                  </span>
                  <Select
                    className="w-full mt-2"
                    placeholder="Select a Subject : "
                  >
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item>
                          Order status
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item>
                          Delivery question
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item>
                          Returns and refunds
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item>
                          Product question
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item>
                          Account support
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </label>
                <label className="block">
                  <span className="text-xs font-bold text-[#394351]">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="How can we help you?"
                    className="mt-2 w-full resize-y rounded-xl border border-[#dfe4ea] bg-white px-4 py-3 text-sm leading-6 text-[#151922] outline-none transition-colors placeholder:text-[#9aa2ad] focus:border-[#2864d7] focus:ring-4 focus:ring-[#2864d7]/10"
                  />
                </label>
                <div className="flex flex-col gap-4 border-t border-[#edf0f3] pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[38ch] text-[11px] leading-5 text-[#8a929f]">
                    By sending this message, you agree that Cartiva may contact
                    you about your request.
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2864d7] px-6 py-3.5 text-[11px] font-black uppercase tracking-widest text-white shadow-[0_8px_18px_rgba(40,100,215,0.18)] transition-all hover:bg-[#151922] active:scale-[0.98] focus-visible:outline-none cursor-pointer focus-visible:ring-4 focus-visible:ring-[#2864d7]/20"
                  >
                    <Send size={15} /> Send message
                  </button>
                </div>
              </form>
            </section>
            <section
              id="help"
              className="relative overflow-hidden rounded-[22px] border border-[#ccebdc] bg-[#effbf4] p-5 sm:p-6"
            >
              <div className="absolute -right-8 -top-12 size-36 rounded-full border border-[#b9e4ce]/60" />
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-[#15704a] shadow-sm">
                    <HelpCircle size={21} />
                  </span>
                  <div>
                    <p className="text-sm font-black text-[#15704a]">
                      Looking for a quick answer?
                    </p>
                    <p className="mt-1 max-w-[58ch] text-xs leading-5 text-[#5e746c]">
                      Browse common answers about orders, shipping, returns,
                      payments, and your Cartiva account.
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex shrink-0 items-center gap-2 text-xs font-black text-[#15704a] hover:text-[#151922]"
                >
                  Visit help center <ArrowRight size={14} />
                </a>
              </div>
            </section>
            <div className="grid gap-4 sm:grid-cols-3">
              <article className="rounded-2xl border border-[#e4e7ec] bg-white p-5">
                <ShieldCheck size={20} className="text-[#2864d7]" />
                <h3 className="mt-4 font-display text-lg font-bold tracking-[-0.04em]">
                  Safe and secure
                </h3>
                <p className="mt-2 text-xs leading-5 text-[#667180]">
                  Your account and order details are handled with care.
                </p>
              </article>
              <article className="rounded-2xl border border-[#e4e7ec] bg-white p-5">
                <Clock3 size={20} className="text-[#15704a]" />
                <h3 className="mt-4 font-display text-lg font-bold tracking-[-0.04em]">
                  Quick replies
                </h3>
                <p className="mt-2 text-xs leading-5 text-[#667180]">
                  Most messages receive a response within one business day.
                </p>
              </article>
              <article className="rounded-2xl border border-[#e4e7ec] bg-white p-5">
                <Headphones size={20} className="text-[#806413]" />
                <h3 className="mt-4 font-display text-lg font-bold tracking-[-0.04em]">
                  Real support
                </h3>
                <p className="mt-2 text-xs leading-5 text-[#667180]">
                  Friendly help from a team that knows Cartiva.
                </p>
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
