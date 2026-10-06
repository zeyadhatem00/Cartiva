import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CreditCard,
  FileText,
  Mail,
  RotateCcw,
  Scale,
  Truck,
  UserCheck,
  UserRoundCog,
} from "lucide-react";
import Link from "next/link";

function TermLine({
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

function TermCard({
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
      className={`group relative overflow-hidden rounded-[22px] border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${featured ? "border-[#f0d69b] bg-[#fffaf0] shadow-[0_16px_34px_rgba(185,133,36,0.08)]" : "border-[#e4e7ec] bg-white shadow-[0_8px_24px_rgba(21,25,34,0.035)] hover:border-[#c9d7f2] hover:shadow-[0_16px_32px_rgba(21,25,34,0.08)]"}`}
    >
      <div className="pointer-events-none absolute -right-10 -top-12 size-32 rounded-full bg-[#d9f7e9]/35 blur-2xl transition-transform duration-500 group-hover:scale-125" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <span
              className={`grid size-10 shrink-0 place-items-center rounded-xl ${featured ? "bg-[#f5b83d] text-[#151922]" : "bg-[#eef6ff] text-[#2864d7]"}`}
            >
              {icon}
            </span>
            <div>
              <p
                className={`text-[9px] font-black uppercase tracking-[0.15em] ${featured ? "text-[#a46a00]" : "text-[#2864d7]"}`}
              >
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

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#151922]">
      <main className="mx-auto max-w-330 px-4 pb-20 lg:px-8">
        <section className="relative mt-6 overflow-hidden rounded-3xl bg-[#151922] px-6 py-12 text-white shadow-[0_20px_48px_rgba(21,25,34,0.12)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -right-28 -top-32 size-112 rounded-full bg-[#2864d7]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 left-1/2 size-96 rounded-full bg-[#d9f7e9]/10 blur-3xl" />
          <div className="relative z-10 max-w-180">
            <p className="mb-5 inline-flex items-center gap-2 rounded-md bg-[#d9f7e9] px-2.5 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-[#15704a]">
              <BadgeCheck size={12} /> Fair shopping, clear terms
            </p>
            <h1 className="max-w-[9ch] font-display text-[clamp(3.3rem,8vw,6.5rem)] font-bold leading-[0.86] -tracking-widest">
              Terms, <span className="text-[#8fc4ff]">made clear.</span>
            </h1>
            <p className="mt-6 max-w-[48ch] text-sm leading-6 text-white/70 sm:text-base">
              The simple guide to using Cartiva, placing orders, receiving
              deliveries, and understanding the agreement between us.
            </p>
          </div>
        </section>

        <section className="relative mt-8 overflow-hidden rounded-[22px] border border-[#f0d69b] bg-[#fffaf0] p-5 shadow-[0_8px_24px_rgba(185,133,36,0.05)] sm:p-6">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-linear-to-l from-[#f5b83d]/15 to-transparent" />
          <div className="relative flex gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#f5b83d] text-[#151922]">
              <AlertTriangle size={18} />
            </span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#a46a00]">
                Important notice
              </p>
              <h2 className="mt-1 font-display text-lg font-bold tracking-[-0.04em] text-[#151922]">
                Please read before using Cartiva.
              </h2>
              <p className="mt-1 max-w-[80ch] text-xs leading-5 text-[#667180]">
                By accessing or using Cartiva, you agree to be bound by these
                terms. If you do not agree with them, please do not use the
                service or place an order.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-10 flex items-end justify-between gap-5">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#2864d7]">
              The agreement
            </p>
            <h2 className="mt-2 font-display text-[2rem] font-bold tracking-[-0.07em] sm:text-[2.7rem]">
              Everything in one place.
            </h2>
          </div>
          <p className="hidden max-w-[27ch] text-right text-xs leading-5 text-[#8a929f] sm:block">
            Clear language, practical expectations, and no legal maze.
          </p>
        </div>

        <section className="mt-6 grid gap-5 md:grid-cols-2">
          <TermCard
            icon={<FileText size={18} />}
            article="Article 01"
            title="Acceptance of terms"
            featured
          >
            <TermLine number="1.1">
              By accessing or using Cartiva, you acknowledge that you have read,
              understood, and agree to these Terms.
            </TermLine>
            <TermLine number="1.2">
              If you do not agree to these Terms, you must not access or use the
              Service.
            </TermLine>
            <TermLine number="1.3">
              We may update these Terms from time to time, with changes
              effective upon posting.
            </TermLine>
          </TermCard>
          <TermCard
            icon={<UserCheck size={18} />}
            article="Article 02"
            title="User eligibility"
          >
            <TermLine number="2.1">
              Cartiva is intended for users who are at least eighteen (18) years
              of age.
            </TermLine>
            <TermLine number="2.2">
              By using the Service, you represent and warrant that you are
              legally able to form a binding contract.
            </TermLine>
            <TermLine number="2.3">
              If you access Cartiva for an organization, you confirm that you
              have authority to bind that organization.
            </TermLine>
          </TermCard>
          <TermCard
            icon={<UserRoundCog size={18} />}
            article="Article 03"
            title="Account registration"
          >
            <TermLine number="3.1">
              You may be required to create an account to access certain Cartiva
              features.
            </TermLine>
            <TermLine number="3.2">
              You agree to provide accurate, current, and complete information
              during registration.
            </TermLine>
            <TermLine number="3.3">
              You are responsible for keeping your account credentials
              confidential.
            </TermLine>
            <TermLine number="3.4">
              You agree to notify us immediately of unauthorized use of your
              account.
            </TermLine>
          </TermCard>
          <TermCard
            icon={<CreditCard size={18} />}
            article="Article 04"
            title="Orders and payments"
          >
            <TermLine number="4.1">
              All orders are subject to acceptance, product availability, and
              confirmation of the order details.
            </TermLine>
            <TermLine number="4.2">
              Prices may change without prior notice, but the price shown at
              checkout applies to your order.
            </TermLine>
            <TermLine number="4.3">
              Payment must be made in full using an approved payment method.
            </TermLine>
            <TermLine number="4.4">
              We reserve the right to refuse or cancel an order at our sole
              discretion.
            </TermLine>
          </TermCard>
          <TermCard
            icon={<Truck size={18} />}
            article="Article 05"
            title="Shipping and delivery"
          >
            <TermLine number="5.1">
              Shipping times are estimates only and are not guaranteed.
            </TermLine>
            <TermLine number="5.2">
              Risk of loss and title for items purchased passes to you upon
              delivery to the carrier.
            </TermLine>
            <TermLine number="5.3">
              We are not responsible for delays caused by carriers, customs, or
              factors beyond our control.
            </TermLine>
          </TermCard>
          <TermCard
            icon={<RotateCcw size={18} />}
            article="Article 06"
            title="Returns and refunds"
          >
            <TermLine number="6.1">
              Our return policy allows eligible returns within 14 days of
              delivery.
            </TermLine>
            <TermLine number="6.2">
              Returned products must be unused and in original packaging.
            </TermLine>
            <TermLine number="6.3">
              Approved refunds are processed within 5–7 business days after
              receiving the returned item.
            </TermLine>
          </TermCard>
          <TermCard
            icon={<Scale size={18} />}
            article="Article 07"
            title="Limitation of liability"
          >
            <p>
              To the maximum extent permitted by applicable law, Cartiva shall
              not be liable for indirect, incidental, special, consequential, or
              punitive damages, or for any loss of profits or revenue, whether
              incurred directly or indirectly.
            </p>
          </TermCard>
          <TermCard
            icon={<Mail size={18} />}
            article="Article 08"
            title="Contact us"
          >
            <p>
              If you have questions about these Terms, please contact our
              support team at{" "}
              <a
                href="mailto:support@Cartiva.store"
                className="font-bold text-[#2864d7] underline decoration-[#c9d7f2] underline-offset-2 hover:text-[#151922]"
              >
                support@Cartiva.store
              </a>
              .
            </p>
            <p className="mt-2">
              For privacy questions, review our{" "}
              <Link
                href="/privacy"
                className="font-bold text-[#2864d7] underline decoration-[#c9d7f2] underline-offset-2 hover:text-[#151922]"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </TermCard>
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
            Ask a question <ArrowRight size={13} />
          </a>
        </div>
      </main>
    </div>
  );
}
