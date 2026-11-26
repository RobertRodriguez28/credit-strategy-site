
import Link from "next/link";

const bookingUrl =
  "https://calendly.com/robert-28-qbaj/30min";

export const products = {
  "credit-mastery": {
    number: "01",
    category: "CREDIT EDUCATION",
    title: "Credit Mastery Playbook",
    headline: "Understand credit. Make smarter moves.",
    description:
      "A practical educational guide designed to help you understand credit, avoid common mistakes and develop stronger financial habits.",
    price: 29,
    format: "Digital PDF Guide",
    color: "#67e8f9",
    background:
      "linear-gradient(145deg, #164e63, #172554, #080d19)",
    chapters: [
      {
        title: "Understanding Credit",
        description:
          "Learn how credit reports, credit scores and lending decisions work.",
      },
      {
        title: "Credit Utilization",
        description:
          "Understand individual and overall utilization and how balances are reported.",
      },
      {
        title: "Payment Strategies",
        description:
          "Learn about statement dates, due dates and responsible repayment habits.",
      },
      {
        title: "Application Preparation",
        description:
          "Understand common application considerations, inquiries and credit history.",
      },
      {
        title: "Your Personal Credit Checklist",
        description:
          "Create an organized approach to reviewing and managing your credit profile.",
      },
    ],
    audience: [
      "People who are new to credit cards",
      "Anyone looking to understand their credit profile",
      "Individuals preparing for future applications",
      "People interested in better financial habits",
    ],
  },

  "travel-rewards": {
    number: "02",
    category: "TRAVEL REWARDS",
    title: "Travel Rewards Blueprint",
    headline: "Spend smarter. Experience more.",
    description:
      "Explore how everyday spending, points, miles and credit card benefits can help make travel more affordable.",
    price: 49,
    format: "Digital PDF Guide",
    color: "#fde68a",
    background:
      "linear-gradient(145deg, #854d0e, #292524, #080d19)",
    chapters: [
      {
        title: "Points and Miles Fundamentals",
        description:
          "Understand how rewards currencies are earned and redeemed.",
      },
      {
        title: "Welcome Bonuses",
        description:
          "Learn about spending requirements, eligibility and offer restrictions.",
      },
      {
        title: "Travel Redemptions",
        description:
          "Explore travel portals, transfer partners and redemption values.",
      },
      {
        title: "Credit Card Benefits",
        description:
          "Understand annual fees, travel credits and other potential benefits.",
      },
      {
        title: "Your Rewards Roadmap",
        description:
          "Build a rewards strategy around your normal spending and travel goals.",
      },
    ],
    audience: [
      "People interested in affordable travel",
      "Credit card rewards beginners",
      "Travelers looking to understand points and miles",
      "Anyone comparing travel card benefits",
    ],
  },

  "business-funding": {
    number: "03",
    category: "BUSINESS FINANCING",
    title: "Business Funding Blueprint",
    headline: "Build with capital. Plan with discipline.",
    description:
      "An educational guide covering business credit, promotional financing, repayment planning and responsible borrowing.",
    price: 49,
    format: "Digital PDF Guide",
    color: "#c4b5fd",
    background:
      "linear-gradient(145deg, #5b21b6, #312e81, #080d19)",
    chapters: [
      {
        title: "Business Credit Fundamentals",
        description:
          "Understand business credit and its relationship to personal credit.",
      },
      {
        title: "Promotional Financing",
        description:
          "Learn how introductory APR offers work and what happens when they expire.",
      },
      {
        title: "Funding Considerations",
        description:
          "Understand lender requirements, personal guarantees and borrowing risks.",
      },
      {
        title: "Cash-Flow Planning",
        description:
          "Explore ways to evaluate business expenses and repayment capacity.",
      },
      {
        title: "Repayment Strategy Worksheet",
        description:
          "Develop a realistic repayment plan before taking on financing.",
      },
    ],
    audience: [
      "Aspiring entrepreneurs",
      "Small business owners",
      "People researching business credit cards",
      "Anyone exploring responsible business financing",
    ],
  },

  masterclass: {
    number: "04",
    category: "COMPLETE CREDIT EDUCATION",
    title: "CreditLeverage Masterclass",
    headline: "Knowledge is your financial advantage.",
    description:
      "A comprehensive planned educational course bringing credit fundamentals, travel rewards and responsible financing strategies together.",
    price: 149,
    format: "Online Course",
    color: "#6ee7b7",
    background:
      "linear-gradient(145deg, #065f46, #134e4a, #080d19)",
    chapters: [
      {
        title: "Credit Foundations",
        description:
          "Build a clear understanding of credit reports, scoring and lending.",
      },
      {
        title: "Credit Optimization",
        description:
          "Explore utilization, payment habits and responsible credit management.",
      },
      {
        title: "Travel Rewards",
        description:
          "Learn about points, miles, rewards programs and redemption strategies.",
      },
      {
        title: "Business Financing",
        description:
          "Understand business credit, promotional financing and repayment risks.",
      },
      {
        title: "Practical Financial Planning",
        description:
          "Apply the educational concepts through exercises and planning resources.",
      },
    ],
    audience: [
      "People seeking comprehensive credit education",
      "Entrepreneurs interested in financing fundamentals",
      "Travel rewards enthusiasts",
      "Individuals who prefer structured learning",
    ],
  },
};

export type ProductId = keyof typeof products;

export default function ProductPage({
  productId,
}: {
  productId: ProductId;
}) {
  const product = products[productId];

  const faqs = [
    {
      question: "Can I purchase this product today?",
      answer:
        "Not yet. This resource is currently in development. Purchases will open once the content and checkout system are ready.",
    },
    {
      question: "Is this a subscription?",
      answer:
        "This product is planned as a one-time purchase with no recurring subscription fee.",
    },
    {
      question: "How will I receive the product?",
      answer:
        productId === "masterclass"
          ? "Online course access is planned following successful checkout."
          : "The guide is planned as a digital PDF delivered electronically after successful checkout.",
    },
    {
      question: "Are financial results guaranteed?",
      answer:
        "No. These resources are educational and cannot guarantee credit score improvements, approvals, funding or rewards.",
    },
    {
      question: "Can I speak with someone first?",
      answer:
        "Yes. You can book a free introductory call to learn more about CreditLeverage and its educational resources.",
    },
  ];

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

          <div className="hidden items-center gap-6 text-sm text-slate-400 md:flex">

            {[
              ["Travel", "/travel-rewards"],
              ["Funding", "/business-funding"],
              ["Hacks", "/credit-hacks"],
              ["Credit", "/credit-improvement"],
              ["Tools", "/#tools"],
              ["Learn", "/#education"],
              ["Shop", "/shop"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className={
                  label === "Shop"
                    ? "font-bold text-cyan-300"
                    : "transition hover:text-white"
                }
              >
                {label}
              </Link>
            ))}

          </div>

          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-cyan-300 px-4 py-3 text-xs font-bold text-slate-950 hover:bg-cyan-200 sm:text-sm"
          >
            Book Free Call
          </a>

          <div className="flex w-full gap-6 text-xs text-slate-400 md:hidden">

            <Link href="/">Home</Link>
            <Link href="/#tools">Tools</Link>
            <Link href="/#education">Learn</Link>
            <Link href="/shop" className="text-cyan-300">
              Shop
            </Link>

          </div>

        </nav>
      </header>

      {/* BREADCRUMBS */}

      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-6 py-7 text-xs text-slate-400">

        <Link href="/" className="hover:text-white">
          Home
        </Link>

        <span>/</span>

        <Link href="/shop" className="hover:text-white">
          Shop
        </Link>

        <span>/</span>

        <span style={{ color: product.color }}>
          {product.title}
        </span>

      </div>

      {/* PRODUCT HERO */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div
          className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full blur-[150px]"
          style={{ background: `${product.color}15` }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-8 sm:px-6 lg:grid-cols-2 lg:py-16">

          {/* PRODUCT ARTWORK */}

          <div
            className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 p-10 sm:min-h-[540px]"
            style={{ background: product.background }}
          >

            <div
              className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[35px] opacity-10"
              style={{ borderColor: product.color }}
            />

            <div
              className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full border-[30px] opacity-10"
              style={{ borderColor: product.color }}
            />

            <span className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-xs text-slate-300">
              Product concept
            </span>

            <div
              className="relative flex aspect-[3/4] w-full max-w-[280px] flex-col justify-between rounded-r-2xl border bg-black/20 p-8 shadow-2xl"
              style={{
                borderColor: `${product.color}66`,
                boxShadow:
                  "20px 30px 60px rgba(0,0,0,0.45)",
              }}
            >

              <div className="absolute inset-y-0 left-0 w-3 bg-white/10" />

              <div>
                <p
                  className="text-xs font-bold tracking-[0.2em]"
                  style={{ color: product.color }}
                >
                  CREDITLEVERAGE
                </p>

                <div
                  className="mt-8 text-6xl font-black"
                  style={{ color: product.color }}
                >
                  {product.number}
                </div>
              </div>

              <h2 className="my-8 text-3xl font-black leading-tight sm:text-4xl">
                {product.title}
              </h2>

              <div
                className="border-t border-white/20 pt-5 text-xs tracking-widest"
                style={{ color: product.color }}
              >
                DIGITAL EDITION
              </div>

            </div>

          </div>

          {/* PRODUCT SALES INFORMATION */}

          <div>

            <div
              className="inline-flex rounded-full border px-4 py-2 text-xs font-bold tracking-wider"
              style={{
                color: product.color,
                borderColor: `${product.color}44`,
                background: `${product.color}08`,
              }}
            >
              {product.category}
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              {product.title}
            </h1>

            <h2
              className="mt-5 text-xl font-bold sm:text-2xl"
              style={{ color: product.color }}
            >
              {product.headline}
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-400">
              {product.description}
            </p>

            <div className="my-7 border-t border-white/10" />

            <div className="flex flex-wrap items-end gap-5">

              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  Planned launch price
                </p>

                <p className="mt-2 text-6xl font-black">
                  ${product.price}
                </p>
              </div>

              <div className="pb-2 text-sm text-slate-400">
                One-time purchase
                <br />
                {product.format}
              </div>

            </div>

            <button
              disabled
              className="mt-8 w-full cursor-not-allowed rounded-xl px-6 py-4 text-base font-black text-slate-950 opacity-70"
              style={{ background: product.color }}
            >
              Coming Soon
            </button>

            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block w-full rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-center text-sm font-bold transition hover:bg-white/10"
            >
              Book a Free Introductory Call
            </a>

            <p className="mt-4 text-center text-xs leading-6 text-slate-500">
              Currently in development. No payment is
              being collected.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">

              {[
                "Self-paced education",
                "Practical resources",
                "One-time purchase",
                "Digital access",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-2 text-xs text-slate-400"
                >
                  <span style={{ color: product.color }}>
                    ✓
                  </span>
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CHAPTER PREVIEW */}

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24">

        <p
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: product.color }}
        >
          Inside the resource
        </p>

        <h2 className="mt-4 text-3xl font-black sm:text-5xl">
          What you will learn.
        </h2>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
          Explore the planned curriculum and educational
          topics included in this resource.
        </p>

        <div className="mt-10 space-y-4">

          {product.chapters.map((chapter, index) => (

            <div
              key={chapter.title}
              className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-white/25 sm:p-7"
            >

              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border text-sm font-black"
                style={{
                  color: product.color,
                  borderColor: `${product.color}33`,
                  background: `${product.color}0d`,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>

                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  {productId === "masterclass"
                    ? "Module"
                    : "Chapter"}{" "}
                  {index + 1}
                </p>

                <h3 className="mt-2 text-lg font-bold sm:text-xl">
                  {chapter.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {chapter.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* TARGET AUDIENCE */}

      <section className="border-y border-white/10 bg-white/[0.025]">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

          <div>

            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: product.color }}
            >
              Designed for you
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              Is this resource right for you?
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-400">
              Whether you are starting your financial
              education or expanding your knowledge,
              CreditLeverage focuses on clear concepts
              and responsible financial decisions.
            </p>

          </div>

          <div className="space-y-4">

            {product.audience.map((item) => (

              <div
                key={item}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#101727] p-5"
              >

                <span
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full"
                  style={{
                    color: product.color,
                    background: `${product.color}15`,
                  }}
                >
                  ✓
                </span>

                <p className="text-sm font-medium text-slate-300">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FREE CALL CTA */}

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6">

        <div
          className="overflow-hidden rounded-[2rem] border border-white/10 p-8 sm:p-14"
          style={{ background: product.background }}
        >

          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">

            <div>

              <p
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: product.color }}
              >
                One-on-one guidance
              </p>

              <h2 className="mt-5 text-3xl font-black sm:text-5xl">
                Have questions before getting started?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-slate-300">
                Schedule a free introductory conversation
                to discuss your goals and explore our
                educational resources.
              </p>

            </div>

            <div className="rounded-2xl border border-white/15 bg-black/20 p-7">

              <p className="text-xs font-bold uppercase tracking-widest text-slate-300">
                Introductory consultation
              </p>

              <p className="mt-3 text-5xl font-black">
                Free
              </p>

              <p className="mt-3 text-sm text-slate-300">
                30-minute conversation
              </p>

              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-xl px-6 py-4 text-center text-sm font-black text-slate-950 transition hover:brightness-110"
                style={{ background: product.color }}
              >
                Book Free Call →
              </a>

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

          {faqs.map((faq) => (

            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6"
            >

              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold sm:text-base">

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

      {/* RELATED PRODUCTS */}

      <section className="border-y border-white/10 bg-white/[0.025]">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6">

          <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
            Explore the collection
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Continue your education.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {Object.entries(products)
              .filter(([id]) => id !== productId)
              .map(([id, item]) => (

                <Link
                  key={id}
                  href={`/shop/${id}`}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-[#101727] transition hover:-translate-y-1 hover:border-white/25"
                >

                  <div
                    className="flex min-h-[220px] items-center justify-center p-8"
                    style={{ background: item.background }}
                  >

                    <div
                      className="flex aspect-[3/4] w-32 flex-col justify-between rounded-r-lg border bg-black/20 p-4 shadow-xl"
                      style={{
                        borderColor: `${item.color}66`,
                      }}
                    >

                      <p
                        className="text-[8px] font-bold tracking-widest"
                        style={{ color: item.color }}
                      >
                        CREDITLEVERAGE
                      </p>

                      <p className="text-base font-black">
                        {item.title}
                      </p>

                      <p
                        className="text-[8px]"
                        style={{ color: item.color }}
                      >
                        DIGITAL EDITION
                      </p>

                    </div>

                  </div>

                  <div className="p-6">

                    <h3 className="text-lg font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-400">
                      {item.format} · Coming soon
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">

                      <span className="text-2xl font-black">
                        ${item.price}
                      </span>

                      <span
                        className="text-xs font-bold"
                        style={{ color: item.color }}
                      >
                        View Details →
                      </span>

                    </div>

                  </div>

                </Link>

              ))}

          </div>

          <div className="mt-10 text-center">

            <Link
              href="/shop"
              className="inline-flex rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold transition hover:bg-white/10"
            >
              View Entire Collection →
            </Link>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-[#060a14]">

        <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-between gap-8 px-6 py-12">

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

            <Link href="/">Home</Link>
            <Link href="/#tools">Tools</Link>
            <Link href="/#education">Learn</Link>
            <Link href="/shop">Shop</Link>

            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </a>

          </div>

        </div>

        <div className="mx-auto max-w-7xl border-t border-white/10 px-6 py-7">

          <p className="text-xs leading-6 text-slate-500">
            © {new Date().getFullYear()} CreditLeverage.
            All rights reserved. Educational information
            only. Not individualized financial, legal
            or tax advice. Credit approvals, funding,
            rewards and score improvements are not
            guaranteed.
          </p>

        </div>

      </footer>

    </main>
  );
}
