import Link from "next/link";

const products = [
  {
    id: "credit-mastery",
    category: "CREDIT EDUCATION",
    title: "Credit Mastery Playbook",
    subtitle: "Master the fundamentals.",
    description:
      "Understand how credit works, avoid common mistakes, manage utilization and develop stronger financial habits.",
    price: 29,
    format: "Digital PDF Guide",
    color: "#67e8f9",
    background:
      "linear-gradient(145deg, #164e63, #172554, #080d19)",
    number: "01",
    features: [
      "Credit scoring fundamentals",
      "Credit utilization strategies",
      "Payment timing explained",
      "Credit application preparation",
      "Personal credit checklist",
    ],
  },
  {
    id: "travel-rewards",
    category: "TRAVEL REWARDS",
    title: "Travel Rewards Blueprint",
    subtitle: "Spend smarter. Travel further.",
    description:
      "Learn how everyday spending, credit card rewards, points and miles can make travel more affordable.",
    price: 49,
    format: "Digital PDF Guide",
    color: "#fde68a",
    background:
      "linear-gradient(145deg, #854d0e, #292524, #080d19)",
    number: "02",
    features: [
      "Points and miles explained",
      "Welcome bonus fundamentals",
      "Travel redemption strategies",
      "Credit card benefits",
      "Rewards planning checklist",
    ],
  },
  {
    id: "business-funding",
    category: "BUSINESS FINANCING",
    title: "Business Funding Blueprint",
    subtitle: "Build with discipline.",
    description:
      "Explore business credit, promotional financing, responsible borrowing and cash-flow planning.",
    price: 49,
    format: "Digital PDF Guide",
    color: "#c4b5fd",
    background:
      "linear-gradient(145deg, #5b21b6, #312e81, #080d19)",
    number: "03",
    features: [
      "Business credit fundamentals",
      "Understanding 0% APR offers",
      "Financing considerations",
      "Cash-flow planning",
      "Repayment strategy worksheet",
    ],
  },
  {
    id: "masterclass",
    category: "COMPLETE EDUCATION",
    title: "CreditLeverage Masterclass",
    subtitle: "Knowledge is your advantage.",
    description:
      "A comprehensive educational course bringing credit fundamentals, travel rewards and financing strategies together.",
    price: 149,
    format: "Online Course",
    color: "#6ee7b7",
    background:
      "linear-gradient(145deg, #065f46, #134e4a, #080d19)",
    number: "04",
    features: [
      "Credit education modules",
      "Travel rewards education",
      "Responsible financing strategies",
      "Practical financial exercises",
      "Downloadable resources",
    ],
  },
];

const bookingUrl =
  "https://calendly.com/robert-28-qbaj/30min";

export const metadata = {
  title: "Shop | CreditLeverage",
  description:
    "Explore CreditLeverage educational guides, financial resources and upcoming courses.",
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#080d19] text-white">

      {/* NAVIGATION */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080d19]/95 backdrop-blur-xl">

        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-6">

          <Link
            href="/"
            className="text-xl font-black tracking-tight sm:text-2xl"
          >
            Credit
            <span className="text-cyan-300">
              Leverage
            </span>
          </Link>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">

            <Link
              href="/travel-rewards"
              className="hover:text-cyan-300"
            >
              Travel
            </Link>

            <Link
              href="/business-funding"
              className="hover:text-cyan-300"
            >
              Funding
            </Link>

            <Link
              href="/credit-hacks"
              className="hover:text-cyan-300"
            >
              Hacks
            </Link>

            <Link
              href="/credit-improvement"
              className="hover:text-cyan-300"
            >
              Credit
            </Link>

            <Link
              href="/#tools"
              className="hover:text-cyan-300"
            >
              Tools
            </Link>

            <Link
              href="/#education"
              className="hover:text-cyan-300"
            >
              Learn
            </Link>

            <Link
              href="/shop"
              className="font-bold text-cyan-300"
            >
              Shop
            </Link>

          </div>

          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-cyan-300 px-4 py-3 text-xs font-bold text-slate-950 transition hover:bg-cyan-200 sm:px-5 sm:text-sm"
          >
            Book Free Call
          </a>

          <div className="flex w-full gap-5 overflow-x-auto text-xs text-slate-400 md:hidden">

            <Link href="/">Home</Link>
            <Link href="/#tools">Tools</Link>
            <Link href="/#education">Learn</Link>

            <Link
              href="/shop"
              className="font-bold text-cyan-300"
            >
              Shop
            </Link>

          </div>

        </nav>

      </header>

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-bold text-cyan-300">

              <span className="h-2 w-2 rounded-full bg-cyan-300" />

              THE CREDIT LEVERAGE COLLECTION

            </div>

            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight sm:text-6xl">

              Invest in your

              <br />

              <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                financial knowledge.
              </span>

            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">

              Practical guides, educational resources
              and upcoming courses designed to help
              you understand credit, financing and
              financial opportunities.

            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href="#products"
                className="rounded-xl bg-gradient-to-r from-cyan-300 to-violet-300 px-6 py-4 text-sm font-bold text-slate-950 transition hover:brightness-110"
              >
                Explore Collection →
              </a>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold transition hover:bg-white/10"
              >
                Book Free Call
              </a>

            </div>

          </div>

          {/* FEATURED PRODUCT ART */}

          <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#112b40] via-[#141a35] to-[#281b48] p-8 sm:min-h-[430px]">

            <div className="absolute inset-0 opacity-20">

              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[35px] border-violet-400" />

              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full border-[25px] border-cyan-400" />

            </div>

            <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
              Upcoming collection
            </div>

            <div className="relative flex items-center justify-center">

              <div
                className="hidden h-56 w-40 -rotate-12 rounded-r-xl border border-amber-200/30 p-5 shadow-2xl sm:block"
                style={{
                  background:
                    "linear-gradient(145deg, #854d0e, #1c1917)",
                }}
              >

                <p className="text-[9px] font-bold tracking-widest text-amber-200">
                  CREDITLEVERAGE
                </p>

                <div className="mt-10 text-xl font-black">
                  Travel Rewards Blueprint
                </div>

                <p className="mt-7 text-[10px] text-amber-200">
                  DIGITAL EDITION
                </p>

              </div>

              <div className="relative z-10 -ml-3 flex h-72 w-48 flex-col justify-between rounded-r-2xl border border-cyan-200/30 bg-gradient-to-br from-[#155e75] via-[#172554] to-[#0f172a] p-6 shadow-2xl sm:h-80 sm:w-56">

                <div className="absolute bottom-0 left-0 top-0 w-2 bg-white/10" />

                <p className="text-[10px] font-bold tracking-widest text-cyan-200">
                  CREDITLEVERAGE
                </p>

                <div>

                  <div className="mb-5 h-12 w-12 rounded-xl border border-cyan-200/30 bg-cyan-200/10 p-3">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#67e8f9"
                      strokeWidth="1.8"
                    >
                      <path d="M3 3v18h18M7 15l5-5 4 3 5-8" />
                    </svg>

                  </div>

                  <h2 className="text-3xl font-black leading-tight">
                    Credit Mastery Playbook
                  </h2>

                </div>

                <div className="border-t border-white/15 pt-4 text-[10px] tracking-widest text-cyan-200">
                  DIGITAL EDITION
                </div>

              </div>

              <div
                className="hidden h-56 w-40 rotate-12 rounded-r-xl border border-violet-200/30 p-5 shadow-2xl sm:block"
                style={{
                  background:
                    "linear-gradient(145deg, #5b21b6, #1e1b4b)",
                }}
              >

                <p className="text-[9px] font-bold tracking-widest text-violet-200">
                  CREDITLEVERAGE
                </p>

                <div className="mt-10 text-xl font-black">
                  Business Funding Blueprint
                </div>

                <p className="mt-7 text-[10px] text-violet-200">
                  DIGITAL EDITION
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* BENEFITS BAR */}

      <section className="border-b border-white/10 bg-white/[0.025]">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-6 py-7 text-center sm:grid-cols-4">

          {[
            "Digital Resources",
            "Practical Education",
            "Self-Paced Learning",
            "No Subscription Required",
          ].map((benefit) => (

            <div
              key={benefit}
              className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 sm:text-sm"
            >

              <span className="text-cyan-300">
                ✓
              </span>

              {benefit}

            </div>

          ))}

        </div>

      </section>

      {/* PRODUCTS */}

      <section
        id="products"
        className="mx-auto max-w-7xl scroll-mt-32 px-5 py-16 sm:px-6 sm:py-24"
      >

        <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
          Digital resource collection
        </p>

        <h2 className="mt-4 text-3xl font-black sm:text-5xl">
          Choose your next move.
        </h2>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">

          Explore our planned collection of financial
          education resources. Each product focuses
          on a different area of credit knowledge.

        </p>

        <div className="mt-5 inline-flex rounded-full border border-amber-300/20 bg-amber-300/5 px-4 py-2 text-xs text-amber-200">
          Collection currently in development
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-2">

          {products.map((product) => (

            <article
              key={product.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-white/25"
            >

              {/* PRODUCT COVER */}

              <div
                className="relative flex min-h-[310px] items-center justify-center overflow-hidden p-8"
                style={{
                  background:
                    product.background,
                }}
              >

                <div
                  className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[30px] opacity-10"
                  style={{
                    borderColor: product.color,
                  }}
                />

                <div
                  className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full border-[25px] opacity-10"
                  style={{
                    borderColor: product.color,
                  }}
                />

                <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/20 px-3 py-2 text-[10px] font-semibold text-white">

                  {product.format}

                </div>

                <div
                  className="relative flex h-60 w-44 flex-col justify-between rounded-r-xl border bg-black/20 p-5 shadow-2xl transition duration-500 group-hover:-rotate-3 group-hover:scale-105"
                  style={{
                    borderColor:
                      `${product.color}55`,
                    boxShadow:
                      "15px 20px 35px rgba(0,0,0,0.35)",
                  }}
                >

                  <div className="absolute bottom-0 left-0 top-0 w-2 bg-white/10" />

                  <div>

                    <p
                      className="text-[9px] font-bold tracking-widest"
                      style={{
                        color: product.color,
                      }}
                    >
                      CREDITLEVERAGE
                    </p>

                    <div
                      className="mt-5 text-4xl font-black"
                      style={{
                        color: product.color,
                      }}
                    >
                      {product.number}
                    </div>

                  </div>

                  <h3 className="text-xl font-black leading-tight">

                    {product.title}

                  </h3>

                  <div
                    className="border-t border-white/15 pt-3 text-[9px] tracking-widest"
                    style={{
                      color: product.color,
                    }}
                  >
                    DIGITAL EDITION
                  </div>

                </div>

              </div>

              {/* PRODUCT DETAILS */}

              <div className="p-6 sm:p-8">

                <div className="flex flex-wrap items-center justify-between gap-3">

                  <p
                    className="text-[10px] font-bold tracking-widest"
                    style={{
                      color: product.color,
                    }}
                  >
                    {product.category}
                  </p>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-slate-400">

                    Coming Soon

                  </span>

                </div>

                <h3 className="mt-4 text-2xl font-black">

                  {product.title}

                </h3>

                <p className="mt-2 text-sm font-medium text-slate-300">

                  {product.subtitle}

                </p>

                <p className="mt-4 text-sm leading-7 text-slate-400">

                  {product.description}

                </p>

                <div className="my-6 border-t border-white/10" />

                <p className="text-xs font-bold uppercase tracking-widest text-slate-300">

                  Planned content

                </p>

                <div className="mt-5 space-y-4">

                  {product.features.map(
                    (feature) => (

                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-slate-400"
                      >

                        <span
                          className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/5 text-xs"
                          style={{
                            color: product.color,
                          }}
                        >
                          ✓
                        </span>

                        {feature}

                      </div>

                    )
                  )}

                </div>

                <div className="my-7 border-t border-white/10" />

                <div className="flex flex-wrap items-center justify-between gap-4">

                  <div>

                    <p className="text-xs text-slate-500">
                      Planned launch price
                    </p>

                    <p className="mt-1 text-4xl font-black">

                      ${product.price}

                    </p>

                    <p className="mt-2 text-xs text-slate-500">
                      One-time purchase
                    </p>

                  </div>

                 <Link
  href={`/shop/${product.id}`}
  className="rounded-xl bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
>
  View Product →
</Link>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* CONSULTATION CTA */}

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 sm:pb-24">

        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-[#102c3d] via-[#151c35] to-[#291a46] p-8 sm:p-14">

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">

                ONE-ON-ONE GUIDANCE

              </p>

              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">

                Not sure where to start?

              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-slate-400 sm:text-base">

                Book a free introductory call to
                discuss your goals, learn about
                CreditLeverage and explore which
                educational resources may be useful
                for your situation.

              </p>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-xl bg-gradient-to-r from-cyan-300 to-violet-300 px-7 py-4 text-sm font-bold text-slate-950 transition hover:brightness-110"
              >

                Book Free Strategy Call →

              </a>

            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-7">

              <p className="text-xs font-bold tracking-widest text-cyan-300">

                INTRODUCTORY CALL

              </p>

              <p className="mt-4 text-5xl font-black">

                Free

              </p>

              <p className="mt-3 text-sm text-slate-400">

                30-minute conversation

              </p>

              <div className="mt-6 space-y-4 border-t border-white/10 pt-6">

                {[
                  "Discuss your financial goals",
                  "Explore educational resources",
                  "Understand available services",
                  "No purchase obligation",
                ].map((item) => (

                  <p
                    key={item}
                    className="flex gap-3 text-sm text-slate-300"
                  >

                    <span className="text-cyan-300">
                      ✓
                    </span>

                    {item}

                  </p>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="mx-auto max-w-4xl px-5 pb-20 sm:px-6">

        <p className="text-center text-xs font-bold uppercase tracking-widest text-cyan-300">

          Frequently asked questions

        </p>

        <h2 className="mt-4 text-center text-3xl font-black sm:text-4xl">

          Before you get started.

        </h2>

        <div className="mt-10 space-y-4">

          {[
            {
              question:
                "Are the products available now?",
              answer:
                "Our digital products are currently in development. Purchases will become available once the content and checkout systems are ready.",
            },
            {
              question:
                "How will digital products be delivered?",
              answer:
                "We plan to provide access to purchased digital guides electronically after successful checkout.",
            },
            {
              question:
                "Do I need a subscription?",
              answer:
                "The planned products are designed as one-time purchases rather than monthly subscriptions.",
            },
            {
              question:
                "Will these guides improve my credit score?",
              answer:
                "Our resources are educational. They explain credit concepts and responsible financial habits, but cannot guarantee score improvements, financing or credit approvals.",
            },
            {
              question:
                "Can I speak with someone before buying?",
              answer:
                "Yes. You can book a free introductory call through our website to learn more about CreditLeverage.",
            },
          ].map((faq) => (

            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6"
            >

              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-bold sm:text-base">

                {faq.question}

                <span className="text-xl text-cyan-300 transition group-open:rotate-45">

                  +

                </span>

              </summary>

              <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-7 text-slate-400">

                {faq.answer}

              </p>

            </details>

          ))}

        </div>

      </section>

      {/* FREE TOOLS CTA */}

      <section className="border-y border-white/10 bg-white/[0.025]">

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">

          <div>

            <h3 className="text-xl font-bold">

              Start learning for free.

            </h3>

            <p className="mt-3 text-sm text-slate-400">

              Explore our calculators and free
              educational guides.

            </p>

          </div>

          <Link
            href="/#tools"
            className="rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-6 py-4 text-sm font-bold text-cyan-300 transition hover:bg-cyan-300/10"
          >

            Explore Free Tools →

          </Link>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-[#060a14]">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-12 sm:flex-row">

          <div>

            <Link
              href="/"
              className="text-2xl font-black"
            >

              Credit
              <span className="text-cyan-300">
                Leverage
              </span>

            </Link>

            <p className="mt-3 text-sm text-slate-500">

              Smarter credit. Better opportunities.

            </p>

          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-400">

            <Link
              href="/"
              className="hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/#tools"
              className="hover:text-white"
            >
              Tools
            </Link>

            <Link
              href="/#education"
              className="hover:text-white"
            >
              Learn
            </Link>

            <Link
              href="/shop"
              className="hover:text-white"
            >
              Shop
            </Link>

            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Book a Call
            </a>

          </div>

        </div>

        <div className="mx-auto max-w-7xl border-t border-white/10 px-6 py-7">

          <p className="text-xs leading-6 text-slate-500">

            © {new Date().getFullYear()} CreditLeverage.
            All rights reserved. Educational
            information only. Not individualized
            financial, legal or tax advice.
            Credit approvals, funding, rewards
            and score improvements are not
            guaranteed.

          </p>

        </div>

      </footer>

    </main>
  );
}