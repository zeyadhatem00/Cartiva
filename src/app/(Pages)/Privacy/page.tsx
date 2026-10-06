import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  Cookie,
  Database,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

function PolicyCard({
  icon,
  article,
  title,
  children,
  featured,
}: {
  icon: React.ReactNode;
  article: string;
  title: string;
  children: React.ReactNode;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[22px] border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${featured ? "border-[#c9d7f2] bg-[#eef6ff] shadow-[0_16px_34px_rgba(40,100,215,0.08)]" : "border-[#e4e7ec] bg-white shadow-[0_8px_24px_rgba(21,25,34,0.035)] hover:border-[#c9d7f2] hover:shadow-[0_16px_32px_rgba(21,25,34,0.08)]"}`}
    >
      <div className="pointer-events-none absolute -right-10 -top-12 size-32 rounded-full bg-[#d9f7e9]/35 blur-2xl transition-transform duration-500 group-hover:scale-125" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <span
              className={`grid size-10 shrink-0 place-items-center rounded-xl ${featured ? "bg-[#2864d7] text-white" : "bg-[#eef6ff] text-[#2864d7]"}`}
            >
              {icon}
            </span>
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#2864d7]">
                {article}
              </p>
              <h2 className="mt-1 font-display text-[1.15rem] font-bold leading-tight tracking-[-0.045em] text-[#151922]">
                {title}
              </h2>
            </div>
          </div>
          <span className="text-[10px] font-black text-[#c4ccd6]">↗</span>
        </div>
        <div className="mt-5 space-y-2.5 text-[11px] leading-5 text-[#667180]">
          {children}
        </div>
      </div>
    </article>
  );
}

function PolicyLine({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="flex gap-2">
      <span className="shrink-0 font-black text-[#2864d7]">{number}</span>
      <span>{children}</span>
    </p>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#151922]">
      <main className="mx-auto max-w-330 px-4 pb-20 lg:px-8">
        <section className="relative mt-6 overflow-hidden rounded-3xl bg-[#151922] px-6 py-12 text-white shadow-[0_20px_48px_rgba(21,25,34,0.12)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -right-28 -top-32 size-112 rounded-full bg-[#2864d7]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 left-1/2 size-96 rounded-full bg-[#d9f7e9]/10 blur-3xl" />
          <div className="relative z-10 max-w-180">
            <p className="mb-5 inline-flex items-center gap-2 rounded-md bg-[#d9f7e9] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-[#15704a]">
              <ShieldCheck size={12} /> Your trust matters
            </p>
            <h1 className="max-w-[9ch] font-display text-[clamp(3.3rem,8vw,6.5rem)] font-bold leading-[0.86] -tracking-widest">
              Privacy, <span className="text-[#8fc4ff]">made clear.</span>
            </h1>
            <p className="mt-6 max-w-[48ch] text-sm leading-6 text-white/70 sm:text-base">
              We believe privacy should be easy to understand. Here is what we
              collect, why we use it, and the choices you have when shopping
              with Cartiva.
            </p>
          </div>
        </section>

        <section className="relative mt-8 overflow-hidden rounded-[22px] border border-[#c9d7f2] bg-white p-5 shadow-[0_8px_24px_rgba(21,25,34,0.04)] sm:p-6">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-linear-to-l from-[#d9f7e9]/45 to-transparent" />
          <div className="relative flex gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#2864d7] text-white">
              <LockKeyhole size={18} />
            </span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#2864d7]">
                The short version
              </p>
              <h2 className="mt-1 font-display text-lg font-bold tracking-[-0.04em] text-[#151922]">
                Your privacy matters.
              </h2>
              <p className="mt-1 max-w-[80ch] text-xs leading-5 text-[#667180]">
                We use information to make Cartiva work, complete your orders,
                keep accounts secure, and improve the experience. We do not sell
                your personal information.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-10 flex items-end justify-between gap-5">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#2864d7]">
              The details
            </p>
            <h2 className="mt-2 font-display text-[2rem] font-bold tracking-[-0.07em] sm:text-[2.7rem]">
              Everything in one place.
            </h2>
          </div>
          <p className="hidden max-w-[27ch] text-right text-xs leading-5 text-[#8a929f] sm:block">
            Clear language, useful context, and no hidden surprises.
          </p>
        </div>

        <section className="mt-6 grid gap-5 md:grid-cols-2">
          <PolicyCard
            icon={<Database size={18} />}
            article="Article 01"
            title="Information we collect"
            featured
          >
            <PolicyLine number="1.1">
              <strong className="font-bold text-[#394351]">
                Personal data:
              </strong>{" "}
              Name, email address, phone number, and delivery address.
            </PolicyLine>
            <PolicyLine number="1.2">
              <strong className="font-bold text-[#394351]">
                Payment data:
              </strong>{" "}
              Payment details processed securely by our providers.
            </PolicyLine>
            <PolicyLine number="1.3">
              <strong className="font-bold text-[#394351]">
                Technical data:
              </strong>{" "}
              Browser, device, and access information.
            </PolicyLine>
            <PolicyLine number="1.4">
              <strong className="font-bold text-[#394351]">Usage data:</strong>{" "}
              Pages viewed, products browsed, and actions taken.
            </PolicyLine>
          </PolicyCard>
          <PolicyCard
            icon={<UsersRound size={18} />}
            article="Article 02"
            title="How we use your information"
          >
            <PolicyLine number="2.1">
              To process and fulfill your orders.
            </PolicyLine>
            <PolicyLine number="2.2">
              To send order confirmations and delivery updates.
            </PolicyLine>
            <PolicyLine number="2.3">
              To provide support and respond to questions.
            </PolicyLine>
            <PolicyLine number="2.4">
              To improve products, services, and your experience.
            </PolicyLine>
            <PolicyLine number="2.5">
              To send promotional messages with your consent.
            </PolicyLine>
          </PolicyCard>
          <PolicyCard
            icon={<ShieldCheck size={18} />}
            article="Article 03"
            title="Data protection"
          >
            <PolicyLine number="3.1">
              Industry-standard encryption protects data transfers.
            </PolicyLine>
            <PolicyLine number="3.2">
              Payment information is handled by compliant providers.
            </PolicyLine>
            <PolicyLine number="3.3">
              We conduct regular security reviews.
            </PolicyLine>
            <PolicyLine number="3.4">
              Personal data access is limited to authorized personnel.
            </PolicyLine>
          </PolicyCard>
          <PolicyCard
            icon={<UsersRound size={18} />}
            article="Article 04"
            title="Information sharing"
          >
            <PolicyLine number="4.1">
              We do not sell, trade, or rent your personal information.
            </PolicyLine>
            <PolicyLine number="4.2">
              Limited data may be shared with trusted service providers.
            </PolicyLine>
            <PolicyLine number="4.3">
              We may disclose information when required by law.
            </PolicyLine>
          </PolicyCard>
          <PolicyCard
            icon={<Check size={18} />}
            article="Article 05"
            title="Your rights"
          >
            <PolicyLine number="5.1">
              <strong className="font-bold text-[#394351]">Access:</strong>{" "}
              Request a copy of your personal data.
            </PolicyLine>
            <PolicyLine number="5.2">
              <strong className="font-bold text-[#394351]">Correction:</strong>{" "}
              Update inaccurate information.
            </PolicyLine>
            <PolicyLine number="5.3">
              <strong className="font-bold text-[#394351]">Deletion:</strong>{" "}
              Request removal where applicable.
            </PolicyLine>
            <PolicyLine number="5.4">
              <strong className="font-bold text-[#394351]">Portability:</strong>{" "}
              Request your data in a portable format.
            </PolicyLine>
            <PolicyLine number="5.5">
              <strong className="font-bold text-[#394351]">Opt out:</strong>{" "}
              Unsubscribe from marketing at any time.
            </PolicyLine>
          </PolicyCard>
          <PolicyCard
            icon={<Cookie size={18} />}
            article="Article 06"
            title="Cookies"
          >
            <PolicyLine number="6.1">
              Essential cookies keep Cartiva working smoothly.
            </PolicyLine>
            <PolicyLine number="6.2">
              Optional cookies help us understand store usage.
            </PolicyLine>
            <PolicyLine number="6.3">
              You can control settings through your browser preferences.
            </PolicyLine>
          </PolicyCard>
          <PolicyCard
            icon={<Clock3 size={18} />}
            article="Article 07"
            title="Data retention"
          >
            <p>
              We retain personal information only for as long as necessary to
              provide the service, meet legal requirements, resolve disputes,
              and enforce agreements. Account data is deleted within 30 days of
              closure when requested.
            </p>
          </PolicyCard>
          <PolicyCard
            icon={<Mail size={18} />}
            article="Article 08"
            title="Contact us"
          >
            <p>
              For questions about this policy or to exercise your rights,
              contact our privacy team at{" "}
              <a
                href="mailto:support@Cartiva.store"
                className="font-bold text-[#2864d7] underline decoration-[#c9d7f2] underline-offset-2 hover:text-[#151922]"
              >
                support@Cartiva.store
              </a>
              .
            </p>
          </PolicyCard>
        </section>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#e0e5ea] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 self-start rounded-lg border border-[#e1e5ea] bg-white px-4 py-3 text-[10px] font-black uppercase tracking-widest text-[#667180] shadow-sm transition-colors hover:border-[#2864d7] hover:text-[#2864d7]"
          >
            <ArrowLeft size={13} /> Back to home
          </Link>
          <a
            href="mailto:support@Cartiva.store"
            className="inline-flex items-center gap-2 self-start rounded-lg bg-[#2864d7] px-5 py-3 text-[10px] font-black uppercase tracking-widest text-white shadow-[0_8px_18px_rgba(40,100,215,0.18)] transition-colors hover:bg-[#151922] sm:self-auto"
          >
            Contact privacy team <ArrowRight size={13} />
          </a>
        </div>
      </main>
    </div>
  );
}
