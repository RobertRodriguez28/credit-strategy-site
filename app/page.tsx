"use client";

import { useState } from "react";
import Link from "next/link";

const calendlyLink =
  "https://calendly.com/robert-28-qbaj/30min";

const navItems = [
  { label: "Travel", href: "/travel-rewards" },
  { label: "Funding", href: "/business-funding" },
  { label: "Hacks", href: "/credit-hacks" },
  { label: "Credit", href: "/credit-improvement" },
  { label: "Tools", href: "/#tools" },
  { label: "Learn", href: "/#education" },
  { label: "About", href: "/#about" },
  { label: "Shop", href: "/shop" },
];

const tools = [
  {
    icon: "card",
    title: "Credit Utilization Calculator",
    description:
      "Calculate individual and overall utilization across multiple credit cards. Estimate payments to reach your target.",
    href: "/credit-utilization",
  },
  {
    icon: "chart",
    title: "Credit Card Payoff Planner",
    description:
      "Estimate payoff timelines, compare repayment strategies, and understand potential interest savings.",
    href: "/credit-payoff",
  },
  {
    icon: "calendar",
    title: "0% APR Payment Planner",
    description:
      "Plan monthly payments to pay down promotional balances before introductory rates expire.",
    href: "/zero-apr-planner",
  },
  {
    icon: "plane",
    title: "Credit Card Rewards Calculator",
    description:
      "Estimate cash back, points, and miles based on your everyday spending habits.",
    href: "/travel-rewards-calculator",
  },
];

const featureCards = [
  {
    icon: "plane",
    label: "Travel Rewards",
    title: "Turn spending into trips.",
    description:
      "Learn how points, miles, welcome bonuses, and card benefits can help reduce travel costs.",
    href: "/travel-rewards",
    accent: "#e7c778",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=85&fit=crop",
  },
  {
    icon: "building",
    label: "Business Funding",
    title: "Use 0% APR with discipline.",
    description:
      "Understand promotional APR, repayment windows, cash-flow planning, and financial risk.",
    href: "/business-funding",
    accent: "#a78bfa",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=85&fit=crop",
  },
  {
    icon: "card",
    label: "Credit Hacks",
    title: "Build smarter habits.",
    description:
      "Explore credit utilization, payment timing, and responsible credit card strategies.",
    href: "/credit-hacks",
    accent: "#22d3ee",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85&fit=crop",
  },
  {
    icon: "chart",
    label: "Credit Improvement",
    title: "Strengthen your profile.",
    description:
      "Learn about payment history, credit limits, credit reports, and application preparation.",
    href: "/credit-improvement",
    accent: "#34d399",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=85&fit=crop",
  },
];

const articles = [
  {
    id: "utilization",
    icon: "card",
    category: "Credit Fundamentals",
    title: "Credit Utilization: What It Is and Why It Matters",
    description:
      "Understand how utilization works, why individual card balances matter, and how to calculate your percentage.",
    readTime: "4 min read",
    paragraphs: [
      "Credit utilization measures how much of your available revolving credit you are using. If a card has a $5,000 limit and a $1,000 reported balance, its utilization is 20%.",
      "To calculate overall utilization, add the balances on your revolving credit cards and divide that amount by the sum of their credit limits. Multiply by 100 to express the result as a percentage.",
      "Credit scoring models may consider both overall utilization and utilization on individual accounts. That means one heavily utilized card can matter even when your overall percentage is relatively low.",
      "There is no universal 30% cutoff that guarantees a good credit score. Generally, lower reported utilization can be better for scoring, but the exact effect depends on the scoring model and your credit profile.",
      "Paying balances by the due date is important for avoiding late payments. If you want a lower balance to appear on a credit report, check when your card issuer typically reports account information. Reporting dates and practices vary.",
      "You do not need to carry a balance or pay interest to build credit. Paying your statement balance in full by the due date generally helps you avoid purchase interest when your grace period applies.",
    ],
    takeaway:
      "Monitor both individual and overall utilization, pay on time, and avoid carrying interest-bearing debt just to influence your credit score.",
  },
  {
    id: "apr",
    icon: "calendar",
    category: "Smart Financing",
    title: "How to Use a 0% APR Offer Responsibly",
    description:
      "Learn how promotional rates work, what happens when they expire, and how to create a repayment plan.",
    readTime: "5 min read",
    paragraphs: [
      "Some credit cards offer a promotional 0% annual percentage rate on eligible purchases, balance transfers, or both. During the introductory period, qualifying balances may not accrue interest under the terms of the offer.",
      "Before using a promotion, identify exactly which transactions qualify, the expiration date, any balance transfer fees, and the regular APR that will apply afterward.",
      "For example, a $3,600 balance with 12 months remaining on a 0% APR promotion would require $300 per month to pay off evenly, assuming no additional purchases, fees, or other changes.",
      "A promotional 0% APR offer is not necessarily the same as a deferred-interest financing offer. Some deferred-interest arrangements may charge interest retroactively if the balance is not paid in full by the deadline. Read the agreement carefully.",
      "Minimum payments are still generally required during promotional periods. Missing a payment can lead to fees, credit damage, or changes to promotional terms depending on the agreement.",
      "A practical approach is to set a monthly repayment target, automate payments when possible, and aim to finish paying off the balance before the promotion expires.",
    ],
    takeaway:
      "Treat promotional APR as a repayment schedule, not permission to take on debt you cannot afford.",
  },
  {
    id: "rewards",
    icon: "plane",
    category: "Travel & Rewards",
    title: "Credit Card Rewards: Points, Miles, and Cash Back",
    description:
      "Explore how rewards programs work and why fees, redemption values, and spending habits matter.",
    readTime: "5 min read",
    paragraphs: [
      "Credit card rewards generally come in three forms: cash back, points, and miles. Their actual value depends on the card, the rewards program, and how you redeem them.",
      "A card offering 2% cash back on eligible purchases would earn $200 on $10,000 of qualifying spending, before accounting for any fees or interest.",
      "Travel rewards can sometimes offer attractive redemption opportunities, but point values vary. Transfer partners, award availability, taxes, and booking restrictions can change the value you receive.",
      "Welcome bonuses may require a minimum amount of eligible spending within a specified period. Spending more than you otherwise would simply to earn a bonus can erase its financial benefit.",
      "Annual fees, foreign transaction fees, and interest charges should be considered when comparing cards. A card with a large advertised bonus is not automatically the best choice.",
      "The strongest rewards strategy is usually built around purchases you already planned to make, with balances paid in full whenever possible.",
    ],
    takeaway:
      "Compare the actual value of rewards against the total cost of using the card, not just the advertised points or bonus.",
  },
  {
    id: "applications",
    icon: "chart",
    category: "Credit Strategy",
    title: "Credit Card Application Timing and Preparation",
    description:
      "Understand hard inquiries, approval factors, and why applying strategically can matter.",
    readTime: "4 min read",
    paragraphs: [
      "Credit card issuers evaluate applications using factors such as credit history, income, existing obligations, and their own underwriting policies.",
      "A credit card application commonly results in a hard inquiry, which can temporarily affect your credit score. Opening a new account may also change your average account age and available credit.",
      "Applying for several credit cards in a short period can make your profile appear riskier to some lenders, although the impact varies by issuer and scoring model.",
      "Before applying, review your credit reports for errors, check your current balances, and understand the card's eligibility requirements, fees, and interest rates.",
      "Some issuers offer prequalification tools that use a soft inquiry, but prequalification does not guarantee final approval. Always read the issuer's disclosures.",
      "There is no single application schedule that guarantees approval. A thoughtful approach considers your financial needs, recent applications, repayment capacity, and the terms of each offer.",
    ],
    takeaway:
      "Apply when a card serves a genuine financial purpose and you understand its costs, requirements, and potential impact on your credit.",
  },
];

const faqs = [
  {
    question: "What is CreditLeverage?",
    answer:
      "CreditLeverage is a credit education and strategy website focused on credit profiles, rewards, responsible promotional APR use, and financial planning tools.",
  },
  {
    question: "Are the financial calculators free?",
    answer:
      "Yes. Our utilization, payoff, promotional APR and rewards calculators are free to use.",
  },
  {
    question: "What is credit utilization?",
    answer:
      "Credit utilization is the percentage of available revolving credit you are using. A $1,000 balance on a $5,000 credit limit equals 20% utilization.",
  },
  {
    question: "Is keeping utilization below 30% enough?",
    answer:
      "Not necessarily. Lower reported utilization can generally be beneficial, but 30% is not a guaranteed scoring threshold. Your credit score depends on multiple factors.",
  },
  {
    question: "How does a 0% APR offer work?",
    answer:
      "A promotional 0% APR offer temporarily eliminates interest on eligible balances under the offer's terms. Fees, expiration dates, and eligibility vary by issuer.",
  },
  {
    question: "How do I book a strategy call?",
    answer:
      "Use the Book Free Call button to open the scheduling page and review available appointment options.",
  },
];

function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const paths: Record<string, React.ReactNode> = {
    card: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="3" />
        <path d="M2 10h20M6 15h4" />
      </>
    ),
    chart: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 15 4-5 4 3 6-8" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4M17 3v4M3 10h18M8 15h2M14 15h2" />
      </>
    ),
    plane: (
      <>
        <path d="M22 2 9 15M22 2 15 22l-6-7-7-6L22 2Z" />
      </>
    ),
    building: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="1" />
        <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3h4v3" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    check: <path d="m5 12 4 4L19 6" />,
    book: (
      <>
        <path d="M12 6c-3-3-7-3-10-2v15c4-1 7 0 10 2 3-2 6-3 10-2V4c-3-1-7-1-10 2Z" />
        <path d="M12 6v15" />
      </>
    ),
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
  };

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.chart}
    </svg>
  );
}

const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-violet-300 px-6 py-4 font-bold text-slate-950 transition hover:brightness-110";

const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10";

const panel =
  "rounded-3xl border border-white/10 bg-white/[0.045]";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-base leading-8 text-slate-400">
        {description}
      </p>
    </div>
  );
}

function StrategyPass() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="pointer-events-none absolute inset-0 rounded-full bg-violet-500/15 blur-[100px]" />

      <div className="relative rounded-[2rem] border border-white/10 bg-[#10182d]/90 p-4 shadow-2xl sm:p-7">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Your financial workspace
            </p>
            <h2 className="mt-2 text-xl font-bold">
              Strategy Overview
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Explore
          </div>
        </div>

        <div className="float-card relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-gradient-to-br from-[#163455] via-[#171c42] to-[#4d2680] p-6 shadow-2xl sm:p-8">

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/5" />

          <div className="pointer-events-none absolute -bottom-32 -right-10 h-72 w-72 rounded-full border-[25px] border-cyan-300/10" />

          <div className="relative flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold tracking-tight">
                Credit
                <span className="text-cyan-300">
                  Leverage
                </span>
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-400">
                Strategy Pass
              </p>
            </div>

            <div className="flex -space-x-3">
              <div className="h-8 w-8 rounded-full bg-cyan-300/70" />
              <div className="h-8 w-8 rounded-full bg-violet-400/70" />
            </div>
          </div>

          <div className="relative mt-8 flex items-center gap-4">
            <svg
              viewBox="0 0 60 44"
              className="h-11 w-14"
            >
              <rect
                width="60"
                height="44"
                rx="8"
                fill="#d5ba78"
              />
              <g
                stroke="#8d783e"
                strokeWidth="1"
                fill="none"
              >
                <rect
                  x="20"
                  y="10"
                  width="20"
                  height="24"
                  rx="5"
                />
                <path d="M0 15h20M40 15h20M0 29h20M40 29h20M30 0v10M30 34v10" />
              </g>
            </svg>

            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-white/60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 9q3 3 0 6M9 6q6 6 0 12M13 3q9 9 0 18" />
            </svg>
          </div>

          <p className="relative mt-8 text-lg tracking-[0.18em] text-white/80 sm:text-2xl">
            •••• &nbsp; •••• &nbsp; ••••
          </p>

          <div className="relative mt-6 flex items-end justify-between">
            <div>
              <p className="text-[10px] tracking-widest text-slate-400">
                YOUR NEXT MOVE
              </p>

              <p className="mt-1 text-sm font-bold">
                SMARTER CREDIT
              </p>
            </div>

            <p className="text-xs italic text-white/60">
              Concept card
            </p>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3">
          {[
            {
              icon: "plane",
              title: "Travel",
              text: "Points & miles",
              color: "#e7c778",
            },
            {
              icon: "building",
              title: "Funding",
              text: "0% APR planning",
              color: "#a78bfa",
            },
            {
              icon: "chart",
              title: "Profile",
              text: "Credit utilization",
              color: "#34d399",
            },
            {
              icon: "shield",
              title: "Execution",
              text: "Responsible strategy",
              color: "#22d3ee",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div style={{ color: item.color }}>
                <Icon name={item.icon} />
              </div>

              <p className="mt-3 font-bold">
                {item.title}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-4">
          <div className="text-cyan-300">
            <Icon name="shield" />
          </div>

          <p className="text-xs leading-5 text-slate-300">
            Make credit strategic, not emotional.
          </p>
        </div>
      </div>
    </div>
  );
}

function ToolPreview({ index }: { index: number }) {
  return (
    <div
      className="mt-6 flex h-32 items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-[#080f20] p-4"
      aria-hidden="true"
    >
      {index === 0 && (
        <div className="flex w-full items-center justify-center gap-5">
          <div className="relative h-24 w-24 shrink-0">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#26334a"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="8"
                strokeDasharray="74 252"
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>

            <div className="absolute inset-0 grid place-items-center text-lg font-black text-cyan-300">
              %
            </div>
          </div>

          <div className="w-full max-w-32 space-y-3">
            {[75, 40, 55].map((width, i) => (
              <div
                key={i}
                className="h-2 rounded-full bg-slate-800"
              >
                <div
                  className="h-full rounded-full bg-cyan-400/60"
                  style={{ width: `${width}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {index === 1 && (
        <svg
          viewBox="0 0 300 110"
          className="h-full w-full"
        >
          {[20, 45, 70, 95].map((y) => (
            <path
              key={y}
              d={`M0 ${y}H300`}
              stroke="#223047"
              strokeDasharray="4 5"
            />
          ))}

          <path
            d="M5 12L45 25L85 37L125 51L165 66L205 76L245 88L295 100"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M5 12L45 25L85 37L125 51L165 66L205 76L245 88L295 100V110H5Z"
            fill="#a78bfa"
            opacity=".08"
          />
        </svg>
      )}

      {index === 2 && (
        <div className="flex h-full w-full items-end gap-2">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-gradient-to-t from-violet-700 to-violet-300"
              style={{
                height: `${100 - i * 7.8}%`,
              }}
            />
          ))}
        </div>
      )}

      {index === 3 && (
        <div className="flex w-full items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-amber-300">
              Reward value
            </p>

            <p className="mt-2 text-3xl font-black">
              $ —
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Points & cash back
            </p>
          </div>

          <div className="rounded-2xl border border-amber-300/20 bg-amber-300/5 p-5 text-amber-300">
            <Icon
              name="plane"
              className="h-10 w-10"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [activeArticle, setActiveArticle] =
    useState<string | null>(null);

  const selectedArticle = articles.find(
    (article) => article.id === activeArticle
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080d19] text-white">

      {/* NAVIGATION */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080d19]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-5 sm:px-6">

          <Link
            href="/"
            className="shrink-0 text-xl font-black tracking-tight sm:text-2xl"
          >
            Credit
            <span className="text-cyan-300">
              Leverage
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">

            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 sm:inline-flex"
            >
              Book Free Call
            </a>

            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              className="rounded-xl border border-white/15 p-3 xl:hidden"
            >
              <Icon
                name={
                  mobileMenuOpen ? "close" : "menu"
                }
              />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="mx-4 mb-4 space-y-1 rounded-2xl border border-white/10 bg-slate-900 p-4 xl:hidden">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/intake"
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-white/10"
            >
              Intake Form
            </Link>

            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl bg-cyan-300 p-3 text-center font-bold text-slate-950"
            >
              Book Free Call
            </a>
          </nav>
        )}
      </header>

      {/* HERO */}

      <section className="relative">

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_30%,rgba(34,211,238,0.09),transparent_55%),radial-gradient(ellipse_at_90%_35%,rgba(139,92,246,0.15),transparent_55%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-28">

          <div className="enter-page min-w-0">

            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-medium text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Credit education, simplified.
            </div>

            <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Stop using credit like a{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-400 bg-clip-text text-transparent">
                beginner.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Build a stronger credit profile, explore
              travel rewards, understand promotional
              financing, and make more informed
              financial decisions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              <a
                href={calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryButton}
              >
                Book Free Strategy Call
                <Icon
                  name="arrow"
                  className="h-5 w-5"
                />
              </a>

              <Link
                href="/#tools"
                className={secondaryButton}
              >
                Explore Free Tools
              </Link>

            </div>

            <div className="mt-4 flex flex-wrap gap-5 text-sm">

              <Link
                href="/intake"
                className="text-slate-400 transition hover:text-cyan-300"
              >
                Fill Intake Form →
              </Link>

              <Link
                href="/paid-strategy-session"
                className="text-slate-400 transition hover:text-cyan-300"
              >
                Paid Strategy Session →
              </Link>

              <Link
                href="/shop"
                className="font-semibold text-cyan-300 transition hover:text-white"
              >
                Explore Digital Guides →
              </Link>

            </div>

            <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-4">

              {[
                ["04", "Strategy areas"],
                ["04", "Free calculators"],
                ["04", "Learning guides"],
              ].map(([value, label]) => (

                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-3 sm:p-5"
                >
                  <p className="text-2xl font-black text-cyan-200 sm:text-3xl">
                    {value}
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    {label}
                  </p>
                </div>

              ))}

            </div>
          </div>

          <StrategyPass />

        </div>
      </section>

      {/* CREDIBILITY STRIP */}

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-6 py-7 lg:grid-cols-4">

          {[
            ["book", "Education first"],
            ["chart", "Practical calculators"],
            ["shield", "Transparent approach"],
            ["card", "Responsible credit use"],
          ].map(([icon, text]) => (

            <div
              key={text}
              className="flex items-center gap-3 text-xs font-medium text-slate-300 sm:text-sm"
            >
              <div className="shrink-0 text-cyan-300">
                <Icon name={icon} />
              </div>

              {text}
            </div>

          ))}

        </div>
      </section>

      {/* STRATEGY TOPICS */}

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28">

        <SectionHeading
          eyebrow="Explore CreditLeverage"
          title="Four strategies. More possibilities."
          description="Discover the fundamentals of credit and explore practical strategies for your personal financial goals."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {featureCards.map((feature) => (

            <Link
              key={feature.href}
              href={feature.href}
              className="lift-card group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#101727]"
            >

              <div
                className="relative h-44 overflow-hidden bg-cover bg-center sm:h-48"
                style={{
                  backgroundImage: `url("${feature.image}")`,
                  backgroundColor: "#172337",
                }}
              >

                <div className="absolute inset-0 bg-gradient-to-t from-[#101727] via-black/20 to-black/10" />

                <div
                  className="absolute bottom-4 left-5 grid h-12 w-12 place-items-center rounded-xl border backdrop-blur-xl"
                  style={{
                    color: feature.accent,
                    backgroundColor: `${feature.accent}15`,
                    borderColor: `${feature.accent}40`,
                  }}
                >
                  <Icon name={feature.icon} />
                </div>

              </div>

              <div className="flex flex-1 flex-col p-6">

                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{
                    color: feature.accent,
                  }}
                >
                  {feature.label}
                </p>

                <h3 className="mt-3 text-xl font-bold leading-snug">
                  {feature.title}
                </h3>

                <p className="mb-7 mt-4 flex-1 text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>

                <div
                  className="flex items-center justify-between border-t border-white/10 pt-5 text-sm font-bold"
                  style={{
                    color: feature.accent,
                  }}
                >
                  Explore Strategy

                  <Icon
                    name="arrow"
                    className="h-5 w-5 transition group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>

          ))}

        </div>
      </section>

      {/* FREE FINANCIAL TOOLS */}

      <section
        id="tools"
        className="scroll-mt-24 border-y border-white/10 bg-[#0b1222] py-20 sm:py-28"
      >

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <SectionHeading
            eyebrow="Free financial tools"
            title="Make smarter credit decisions."
            description="Interactive calculators that help you understand your numbers, compare strategies and plan your next financial move."
          />

          <div className="grid gap-6 md:grid-cols-2">

            {tools.map((tool, index) => (

              <Link
                key={tool.href}
                href={tool.href}
                className={`${panel} lift-card group flex min-w-0 flex-col p-5 sm:p-7`}
              >

                <div className="flex items-center justify-between gap-3">

                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300">
                    <Icon
                      name={tool.icon}
                      className="h-7 w-7"
                    />
                  </div>

                  <span className="rounded-full border border-emerald-300/20 bg-emerald-300/5 px-3 py-1 text-xs font-bold text-emerald-300">
                    Free to use
                  </span>

                </div>

                <h3 className="mt-6 text-xl font-bold sm:text-2xl">
                  {tool.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                  {tool.description}
                </p>

                <ToolPreview index={index} />

                <p className="mt-2 text-[10px] text-slate-500">
                  Illustrative tool preview
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 font-bold text-cyan-300">

                  Open Calculator

                  <Icon
                    name="arrow"
                    className="h-5 w-5 transition group-hover:translate-x-1"
                  />

                </div>
              </Link>

            ))}

          </div>

          <p className="mt-8 text-center text-xs leading-6 text-slate-500">
            Calculator results are educational estimates.
            No credit score improvement, approval, or
            financial outcome is guaranteed.
          </p>

        </div>
      </section>

      {/* DIGITAL PRODUCT COLLECTION */}

      <section
        id="digital-guides"
        className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#080d19] via-[#10182e] to-[#1b1433] py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <SectionHeading
            eyebrow="The CreditLeverage Collection"
            title="Your next level of financial knowledge."
            description="Explore practical digital guides and upcoming educational resources designed to help you build smarter credit strategies."
          />

          <div className="grid gap-6 md:grid-cols-3">

            {[
              {
                title: "Credit Mastery Playbook",
                category: "Credit Education",
                description: "Understand credit profiles, utilization, payment strategies and application preparation.",
                icon: "chart",
                color: "#67e8f9",
                gradient: "from-[#164e63] via-[#172554] to-[#101827]",
              },
              {
                title: "Travel Rewards Blueprint",
                category: "Travel & Rewards",
                description: "Learn how points, miles, welcome bonuses and travel rewards programs work.",
                icon: "plane",
                color: "#fcd34d",
                gradient: "from-[#854d0e] via-[#422006] to-[#201911]",
              },
              {
                title: "Business Funding Blueprint",
                category: "Business Education",
                description: "Explore promotional financing, repayment planning and responsible funding strategies.",
                icon: "building",
                color: "#c4b5fd",
                gradient: "from-[#6d28d9] via-[#3b176e] to-[#19132e]",
              },
            ].map((product) => (

              <Link
                key={product.title}
                href="/shop"
                className="lift-card group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#101727] p-5 transition hover:border-cyan-300/30"
              >

                <div className="flex min-h-[320px] items-center justify-center overflow-hidden rounded-2xl bg-black/25 p-8">

                  <div
                    className={`relative flex aspect-[3/4] w-full max-w-[220px] flex-col justify-between overflow-hidden rounded-r-xl rounded-l-sm border border-white/15 bg-gradient-to-br ${product.gradient} p-6 shadow-2xl transition duration-500 group-hover:scale-105`}
                  >

                    <div className="absolute inset-y-0 left-0 w-2 bg-white/10" />

                    <div>
                      <p
                        style={{ color: product.color }}
                        className="text-[10px] font-bold tracking-widest"
                      >
                        CREDITLEVERAGE
                      </p>

                      <div
                        style={{ color: product.color }}
                        className="mt-6"
                      >
                        <Icon
                          name={product.icon}
                          className="h-10 w-10"
                        />
                      </div>
                    </div>

                    <h3 className="my-5 text-2xl font-black leading-tight text-white">
                      {product.title}
                    </h3>

                    <p
                      style={{ color: product.color }}
                      className="border-t border-white/15 pt-4 text-[10px] tracking-widest"
                    >
                      DIGITAL EDITION
                    </p>

                  </div>
                </div>

                <div className="flex flex-1 flex-col px-2 pb-2 pt-6">

                  <p
                    style={{ color: product.color }}
                    className="text-xs font-bold uppercase tracking-widest"
                  >
                    {product.category}
                  </p>

                  <h3 className="mt-3 text-xl font-bold">
                    {product.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                    {product.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                      Coming Soon
                    </span>

                    <Icon
                      name="arrow"
                      className="h-5 w-5 text-cyan-300"
                    />

                  </div>
                </div>

              </Link>

            ))}

          </div>

          <div className="mt-12 text-center">
            <Link href="/shop" className={primaryButton}>
              Explore the Collection
              <Icon name="arrow" className="h-5 w-5" />
            </Link>

            <p className="mt-4 text-xs text-slate-500">
              Digital guides and educational courses in development.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28">

        <SectionHeading
          eyebrow="How it works"
          title="A clearer path forward."
          description="Start by understanding your current situation, explore your options and choose responsible next steps."
        />

        <div className="grid gap-6 md:grid-cols-3">

          {[
            {
              number: "01",
              icon: "chart",
              title: "Understand your profile",
              description:
                "Review your credit history, utilization, current accounts and financial goals.",
            },
            {
              number: "02",
              icon: "book",
              title: "Explore your options",
              description:
                "Use our calculators and educational guides to understand potential strategies.",
            },
            {
              number: "03",
              icon: "shield",
              title: "Create a responsible plan",
              description:
                "Evaluate costs, risks and repayment capacity before making financial decisions.",
            },
          ].map((item) => (

            <div
              key={item.number}
              className={`${panel} p-7`}
            >

              <div className="flex items-center justify-between">

                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                  <Icon
                    name={item.icon}
                    className="h-7 w-7"
                  />
                </div>

                <span className="text-4xl font-black text-white/10">
                  {item.number}
                </span>

              </div>

              <h3 className="mt-7 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {item.description}
              </p>

            </div>

          ))}

        </div>
      </section>

      {/* EDUCATION LIBRARY */}

      <section
        id="education"
        className="scroll-mt-24 border-y border-white/10 bg-[#0b1222] py-20 sm:py-28"
      >

        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <SectionHeading
            eyebrow="Education library"
            title="Knowledge is your advantage."
            description="Learn how credit works through clear, practical guides without unnecessary financial jargon."
          />

          <div className="grid gap-6 md:grid-cols-2">

            {articles.map((article) => (

              <button
                key={article.id}
                type="button"
                onClick={() =>
                  setActiveArticle(article.id)
                }
                className={`${panel} lift-card flex flex-col p-6 text-left sm:p-8`}
              >

                <div className="flex w-full items-center justify-between gap-3">

                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-violet-400/10 text-violet-300">
                    <Icon name={article.icon} />
                  </div>

                  <span className="text-xs text-slate-500">
                    {article.readTime}
                  </span>

                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-violet-300">
                  {article.category}
                </p>

                <h3 className="mt-3 text-xl font-bold leading-snug">
                  {article.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                  {article.description}
                </p>

                <div className="mt-6 flex w-full items-center justify-between border-t border-white/10 pt-5 font-bold text-cyan-300">

                  Read Guide

                  <Icon
                    name="arrow"
                    className="h-5 w-5"
                  />

                </div>
              </button>

            ))}

          </div>

        </div>
      </section>

      {/* ARTICLE MODAL */}

      {selectedArticle && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setActiveArticle(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setActiveArticle(null);
            }
          }}
        >

          <article
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-title"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90dvh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/15 bg-[#10192b] p-6 shadow-2xl sm:p-10"
          >

            <div className="flex items-start justify-between gap-4">

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                  {selectedArticle.category}
                </p>

                <h2
                  id="article-title"
                  className="mt-4 text-2xl font-black leading-tight sm:text-4xl"
                >
                  {selectedArticle.title}
                </h2>

                <p className="mt-3 text-xs text-slate-400">
                  {selectedArticle.readTime}
                </p>
              </div>

              <button
                autoFocus
                type="button"
                aria-label="Close article"
                onClick={() =>
                  setActiveArticle(null)
                }
                className="shrink-0 rounded-xl border border-white/15 p-3 hover:bg-white/10"
              >
                <Icon name="close" />
              </button>

            </div>

            <div className="mt-8 space-y-5 text-sm leading-8 text-slate-300 sm:text-base">

              {selectedArticle.paragraphs.map(
                (paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                )
              )}

            </div>

            <div className="mt-8 rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-5 sm:p-6">

              <h3 className="font-bold text-cyan-300">
                Key takeaway
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {selectedArticle.takeaway}
              </p>

            </div>

            <button
              type="button"
              onClick={() =>
                setActiveArticle(null)
              }
              className={`${primaryButton} mt-7 w-full`}
            >
              Back to Education Library
            </button>

          </article>
        </div>

      )}

      {/* FOUNDER AND ABOUT */}

      <section
        id="about"
        className="scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28"
      >

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              Behind CreditLeverage
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Credit should create{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
                opportunities.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              CreditLeverage was created to make credit
              education more understandable, accessible
              and practical. Our goal is to help people
              better understand how credit works and
              make informed financial decisions.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              From travel rewards to utilization and
              promotional financing, the focus is on
              understanding the numbers, evaluating
              the risks and building responsible habits.
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">

              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-cyan-300 to-violet-400 text-lg font-black text-slate-950">
                CL
              </div>

              <div>
                <p className="font-bold">
                  A note from the founder
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                  I started CreditLeverage to make credit
                  education easier to navigate, with
                  practical tools and clear explanations
                  of both the opportunities and risks.
                </p>

                <p className="mt-3 text-xs text-cyan-300">
                  Founder, CreditLeverage
                </p>

              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">

              <Link
                href="/#education"
                className={primaryButton}
              >
                Explore Free Guides
              </Link>

              <Link
                href="/intake"
                className={secondaryButton}
              >
                Get in Touch
              </Link>

            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#11192b] shadow-2xl">

            <div
              role="img"
              aria-label="Modern professional workspace"
              className="relative h-56 bg-slate-800 bg-cover bg-center sm:h-64"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=85&fit=crop")',
              }}
            >

              <div className="absolute inset-0 bg-gradient-to-t from-[#11192b] via-black/15 to-black/10" />

              <div className="absolute bottom-5 left-7">
                <p className="text-xs font-medium uppercase tracking-widest text-cyan-200">
                  Our philosophy
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  Education. Clarity. Strategy.
                </h3>
              </div>

            </div>

            <div className="space-y-6 p-6 sm:p-8">

              {[
                {
                  icon: "book",
                  title: "Practical education",
                  description:
                    "Clear guides about credit profiles, rewards, financing and application considerations.",
                },
                {
                  icon: "chart",
                  title: "Interactive financial tools",
                  description:
                    "Calculators that turn complicated financial questions into understandable numbers.",
                },
                {
                  icon: "shield",
                  title: "Transparent information",
                  description:
                    "Honest explanations of potential benefits, limitations and financial risks.",
                },
              ].map((item) => (

                <div
                  key={item.title}
                  className="flex gap-4"
                >

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-300/10 text-cyan-300">
                    <Icon name={item.icon} />
                  </div>

                  <div>
                    <h4 className="font-bold">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>

                </div>

              ))}

              <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-xs leading-6 text-slate-400">
                CreditLeverage is an educational
                resource. Information is general in
                nature and is not a substitute for
                individualized financial, legal or tax
                advice.
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}

      <section
        id="faq"
        className="scroll-mt-24 border-y border-white/10 bg-[#0b1222] py-20 sm:py-28"
      >

        <div className="mx-auto max-w-3xl px-5 sm:px-6">

          <div className="mb-12 text-center">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Have questions?
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Everything you need to know to get
              started with CreditLeverage.
            </p>

          </div>

          <div className="space-y-4">

            {faqs.map((faq, index) => (

              <div
                key={faq.question}
                className={`${panel} overflow-hidden`}
              >

                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() =>
                    setOpenFaq(
                      openFaq === index ? null : index
                    )
                  }
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                >

                  <span className="font-bold">
                    {faq.question}
                  </span>

                  <span className="shrink-0 text-2xl text-cyan-300">
                    {openFaq === index ? "−" : "+"}
                  </span>

                </button>

                {openFaq === index && (

                  <div className="border-t border-white/10 px-5 pb-6 pt-4 text-sm leading-7 text-slate-400 sm:px-6">

                    {faq.answer}

                  </div>

                )}

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">

        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-[#112938] via-[#151c36] to-[#251742] p-7 text-center sm:p-16">

          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl" />

          <div className="relative">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              Your next move
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
              Ready to make credit work smarter?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-slate-300 sm:text-base">
              Explore our educational resources,
              use our free financial calculators,
              or schedule a conversation about
              your financial goals.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

              <a
                href={calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryButton}
              >
                Book Free Call

                <Icon
                  name="arrow"
                  className="h-5 w-5"
                />
              </a>

              <Link
                href="/#tools"
                className={secondaryButton}
              >
                Explore Free Tools
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 bg-[#060a14]">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">

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

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Smarter credit education, practical
              financial tools and responsible
              financial strategies.
            </p>

          </div>

          <div>

            <h3 className="mb-5 font-bold">
              Strategies
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-400">

              {featureCards.map((feature) => (

                <Link
                  key={feature.href}
                  href={feature.href}
                  className="hover:text-cyan-300"
                >
                  {feature.label}
                </Link>

              ))}

            </div>
          </div>

          <div>

            <h3 className="mb-5 font-bold">
              Free Tools
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-400">

              {tools.map((tool) => (

                <Link
                  key={tool.href}
                  href={tool.href}
                  className="hover:text-cyan-300"
                >
                  {tool.title}
                </Link>

              ))}

            </div>
          </div>

          <div>

            <h3 className="mb-5 font-bold">
              Get Started
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-400">

              <Link
                href="/#education"
                className="hover:text-cyan-300"
              >
                Education Library
              </Link>

              <Link
                href="/#about"
                className="hover:text-cyan-300"
              >
                About CreditLeverage
              </Link>

              <Link
                href="/shop"
                className="font-semibold text-cyan-300 hover:text-white"
              >
                Shop Digital Guides
              </Link>

              <Link
                href="/intake"
                className="hover:text-cyan-300"
              >
                Intake Form
              </Link>

              <Link
                href="/paid-strategy-session"
                className="hover:text-cyan-300"
              >
                Paid Strategy Session
              </Link>

              <a
                href={calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300"
              >
                Book Free Call
              </a>

            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl border-t border-white/10 px-6 py-7">

          <p className="text-center text-xs leading-6 text-slate-500">
            © {new Date().getFullYear()} CreditLeverage.
            Educational information only. Not financial,
            legal or tax advice. Credit approval and
            scoring outcomes are not guaranteed.
          </p>

        </div>
      </footer>
    </main>
  );
}