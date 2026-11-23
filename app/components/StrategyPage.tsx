"use client";

import Link from "next/link";
import { useState } from "react";

type PageType = "travel" | "funding" | "hacks" | "credit";

const content = {
  travel: {
    label: "TRAVEL REWARDS",
    title: "Your everyday spending. Your next destination.",
    description:
      "Discover how points, miles and credit card rewards can help make travel more affordable.",
    accent: "#e7c778",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85&fit=crop",
    calculator: "/travel-rewards-calculator",
    calculatorLabel: "Explore Rewards Calculator",
    features: [
      ["plane", "Airline Miles", "Compare flight redemptions and transfer opportunities."],
      ["building", "Hotel Rewards", "Explore loyalty programs and hotel redemption options."],
      ["gift", "Welcome Bonuses", "Evaluate spending requirements without overspending."],
      ["transfer", "Transfer Partners", "Compare transfer ratios, availability and fees."],
    ],
  },

  funding: {
    label: "BUSINESS FUNDING",
    title: "Build your business. Protect your cash flow.",
    description:
      "Explore business credit, promotional financing and responsible repayment strategies.",
    accent: "#a78bfa",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85&fit=crop",
    calculator: "/zero-apr-planner",
    calculatorLabel: "Open 0% APR Planner",
    features: [
      ["card", "Business Credit", "Understand issuer requirements and personal guarantees."],
      ["calendar", "0% APR Financing", "Evaluate promotional periods and financing costs."],
      ["chart", "Cash Flow Planning", "Match borrowing decisions to realistic business revenue."],
      ["shield", "Risk Management", "Prepare for repayment before promotional rates expire."],
    ],
  },

  hacks: {
    label: "CREDIT STRATEGIES",
    title: "Make every credit decision count.",
    description:
      "Understand payment timing, utilization, rewards and better credit habits.",
    accent: "#22d3ee",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=85&fit=crop",
    calculator: "/credit-utilization",
    calculatorLabel: "Calculate Your Utilization",
    features: [
      ["calendar", "Statement Timing", "Understand when your statement balance is calculated."],
      ["card", "Payment Strategy", "Pay on time and avoid unnecessary interest."],
      ["clock", "Application Timing", "Evaluate recent inquiries and your financial readiness."],
      ["gift", "Rewards Optimization", "Match spending categories to your card benefits."],
    ],
  },

  credit: {
    label: "CREDIT IMPROVEMENT",
    title: "Take control of your credit profile.",
    description:
      "Build stronger financial habits and understand the factors that influence your credit.",
    accent: "#34d399",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=85&fit=crop",
    calculator: "/credit-utilization",
    calculatorLabel: "Explore Credit Calculator",
    features: [
      ["check", "Payment History", "Make at least your required payments on time."],
      ["chart", "Utilization", "Manage revolving balances relative to available limits."],
      ["clock", "Credit History", "Understand how account age affects your profile."],
      ["book", "Credit Reports", "Review your reports and dispute inaccurate information."],
    ],
  },
};

const panel =
  "rounded-3xl border border-white/10 bg-white/[0.045] p-5 sm:p-7";

const inputClass =
  "w-full min-w-0 rounded-xl border border-white/10 bg-[#080e1c] px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-cyan-300";

const money = (value: number) =>
  value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const paths: Record<string, React.ReactNode> = {
    plane: (
      <path d="M22 2 9 15M22 2 15 22l-6-7-7-6L22 2Z" />
    ),

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

    building: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="1" />
        <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3h4v3" />
      </>
    ),

    gift: (
      <>
        <rect x="3" y="8" width="18" height="4" rx="1" />
        <path d="M5 12v9h14v-9M12 8v13" />
        <path d="M12 8H8a3 3 0 1 1 3-3l1 3ZM12 8h4a3 3 0 1 0-3-3l-1 3Z" />
      </>
    ),

    transfer: (
      <path d="M3 7h18m-5-5 5 5-5 5M21 17H3m5-5-5 5 5 5" />
    ),

    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4M17 3v4M3 10h18M8 15h2M14 15h2" />
      </>
    ),

    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),

    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l4 2" />
      </>
    ),

    check: <path d="m5 12 4 4L19 6" />,

    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,

    book: (
      <>
        <path d="M12 6c-3-3-7-3-10-2v15c4-1 7 0 10 2 3-2 6-3 10-2V4c-3-1-7-1-10 2Z" />
        <path d="M12 6v15" />
      </>
    ),

    menu: <path d="M4 6h16M4 12h16M4 18h16" />,

    close: <path d="m6 6 12 12M18 6 6 18" />,

    wallet: (
      <>
        <rect x="3" y="5" width="18" height="15" rx="3" />
        <path d="M21 10h-6v5h6M17 12.5h1" />
      </>
    ),
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

function NumberField({
  label,
  value,
  onChange,
  placeholder,
  min = 0,
  max,
  step = "0.01",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  min?: number;
  max?: number;
  step?: string;
}) {
  return (
    <label className="block min-w-0">
      <span className="mb-2 block text-sm text-slate-400">
        {label}
      </span>

      <input
        type="number"
        inputMode="decimal"
        min={min}
        max={max}
        step={step}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      />
    </label>
  );
}

function Gauge({
  percentage,
  display,
  subtitle,
  color,
}: {
  percentage: number;
  display: string;
  subtitle: string;
  color: string;
}) {
  const radius = 82;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.max(0, Math.min(percentage, 100));

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[220px]">

      <svg
        viewBox="0 0 200 200"
        className="h-full w-full"
        aria-hidden="true"
      >
        <circle
          cx="100"
          cy="100"
          r="96"
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
        />

        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#243044"
          strokeWidth="13"
          fill="none"
        />

        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke={color}
          strokeWidth="13"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={`${circumference}`}
          strokeDashoffset={
            circumference -
            (progress / 100) * circumference
          }
          transform="rotate(-90 100 100)"
          className="transition-all duration-500"
        />

        <circle
          cx="100"
          cy="100"
          r="67"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <p
          className="text-3xl font-black tracking-tight sm:text-4xl"
          style={{ color }}
        >
          {display}
        </p>

        <p className="mt-2 text-xs text-slate-400">
          {subtitle}
        </p>

      </div>
    </div>
  );
}

function DashboardHeading({
  title,
  subtitle,
  color,
  icon,
}: {
  title: string;
  subtitle: string;
  color: string;
  icon: string;
}) {
  return (
    <div className="mb-6 flex items-center justify-between gap-4">

      <div className="flex min-w-0 items-center gap-3">

        <div
          className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border"
          style={{
            color,
            borderColor: `${color}30`,
            backgroundColor: `${color}10`,
          }}
        >
          <Icon name={icon} />
        </div>

        <div>
          <h3 className="font-bold sm:text-lg">
            {title}
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            {subtitle}
          </p>
        </div>

      </div>

      <div className="hidden shrink-0 items-center gap-2 text-xs text-slate-400 sm:flex">

        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: color }}
        />

        Interactive

      </div>
    </div>
  );
}

function TravelDashboard() {
  const [points, setPoints] = useState("");
  const [pointValue, setPointValue] = useState("");

  const valid =
    points.trim() !== "" &&
    pointValue.trim() !== "" &&
    Number.isFinite(Number(points)) &&
    Number.isFinite(Number(pointValue)) &&
    Number(points) >= 0 &&
    Number(pointValue) > 0;

  const redemptionValue = valid
    ? (Number(points) * Number(pointValue)) / 100
    : 0;

  return (
    <div className="min-w-0 space-y-5">

      {/* PREMIUM TRAVEL CARD */}

      <div className="relative overflow-hidden rounded-[2rem] border border-amber-200/20 bg-[#111a29] shadow-2xl">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${content.travel.image}")`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07101f]/95 via-[#07101f]/75 to-[#07101f]/25" />

        <div className="relative p-6 sm:p-9">

          <div className="flex items-center justify-between gap-4">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-200">
              CreditLeverage Travel
            </p>

            <div className="rounded-full border border-amber-200/20 bg-black/20 p-3 text-amber-200 backdrop-blur-md">
              <Icon name="plane" />
            </div>

          </div>

          <p className="mt-12 text-xs uppercase tracking-widest text-slate-300">
            Your next journey
          </p>

          <h3 className="mt-3 max-w-sm text-3xl font-black leading-tight sm:text-4xl">
            More experiences.
            <br />
            <span className="text-amber-200">
              Smarter spending.
            </span>
          </h3>

          {/* FLIGHT ROUTE GRAPHIC */}

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/25 p-5 backdrop-blur-md">

            <svg
              viewBox="0 0 360 80"
              className="w-full"
              aria-hidden="true"
            >
              <path
                d="M15 60Q180 -40 345 60"
                fill="none"
                stroke="#e7c778"
                strokeWidth="1.5"
                strokeDasharray="5 6"
              />

              <circle
                cx="15"
                cy="60"
                r="5"
                fill="#e7c778"
              />

              <circle
                cx="345"
                cy="60"
                r="5"
                fill="#e7c778"
              />

              <g
                transform="translate(165 12)"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              >
                <path d="M22 2 9 15M22 2 15 22l-6-7-7-6L22 2Z" />
              </g>
            </svg>

            <div className="flex justify-between gap-3 text-xs font-bold uppercase tracking-wider text-amber-100">
              <span>Everyday spending</span>
              <span>New destinations</span>
            </div>

          </div>

        </div>
      </div>

      {/* REWARDS CALCULATOR */}

      <div className={panel}>

        <DashboardHeading
          title="Rewards Estimator"
          subtitle="Explore the value of your points"
          color="#e7c778"
          icon="gift"
        />

        <div className="grid gap-4 sm:grid-cols-2">

          <NumberField
            label="Available points"
            value={points}
            onChange={setPoints}
            placeholder="Enter points"
            step="1"
          />

          <NumberField
            label="Value per point (cents)"
            value={pointValue}
            onChange={setPointValue}
            placeholder="Enter value"
            step="0.1"
          />

        </div>

        <div className="mt-6 rounded-2xl border border-amber-200/15 bg-gradient-to-br from-amber-200/[0.08] to-transparent p-6">

          <p className="text-sm text-slate-400">
            Estimated redemption value
          </p>

          <p className="mt-3 break-words text-4xl font-black text-amber-200 sm:text-5xl">
            {valid ? money(redemptionValue) : "—"}
          </p>

          <p className="mt-3 text-xs leading-6 text-slate-500">
            {valid
              ? `${Number(points).toLocaleString()} points at ${pointValue} cents per point.`
              : "Enter your points and redemption value to see your estimate."}
          </p>

        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">

          {[
            ["plane", "Flights"],
            ["building", "Hotels"],
            ["gift", "Rewards"],
          ].map(([icon, title]) => (

            <div
              key={title}
              className="rounded-xl border border-white/5 bg-black/15 p-3 text-center sm:p-4"
            >

              <Icon
                name={icon}
                className="mx-auto h-6 w-6 text-amber-200"
              />

              <p className="mt-3 text-xs text-slate-400">
                {title}
              </p>

            </div>

          ))}

        </div>

        <p className="mt-5 text-xs leading-6 text-slate-500">
          Estimated values exclude taxes, fees and
          redemption restrictions. Actual point values vary.
        </p>

        <Link
          href="/travel-rewards-calculator"
          className="mt-5 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-bold text-amber-200"
        >
          Open full rewards calculator
          <Icon name="arrow" />
        </Link>

      </div>
    </div>
  );
}

function FundingDashboard() {
  const [balance, setBalance] = useState("");
  const [months, setMonths] = useState("");

  const valid =
    balance.trim() !== "" &&
    months.trim() !== "" &&
    Number.isFinite(Number(balance)) &&
    Number(balance) >= 0 &&
    Number.isInteger(Number(months)) &&
    Number(months) > 0 &&
    Number(months) <= 600;

  const principal = valid ? Number(balance) : 0;
  const duration = valid ? Number(months) : 0;

  const monthlyPayment = valid
    ? Math.ceil((principal / duration) * 100) / 100
    : 0;

  const [selectedPoint, setSelectedPoint] = useState(0);

  const timeline = valid
    ? Array.from(
        { length: Math.min(duration + 1, 13) },
        (_, i) => {
          const month = Math.round(
            (i * duration) / Math.min(duration, 12)
          );

          return {
            month,
            balance: Math.max(
              0,
              principal - monthlyPayment * month
            ),
          };
        }
      )
    : [];

  const chartPoints = timeline.map((item, index) => {
    const x =
      12 +
      (index / Math.max(timeline.length - 1, 1)) * 336;

    const y =
      115 -
      (principal > 0
        ? (item.balance / principal) * 100
        : 0);

    return `${x},${y}`;
  });

  const selected =
    timeline[
      Math.min(selectedPoint, timeline.length - 1)
    ];

  return (
    <div className="min-w-0 space-y-5">

      {/* BUSINESS HERO CARD */}

      <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-[#171329]">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url("${content.funding.image}")`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#171329] via-[#171329]/85 to-transparent" />

        <div className="relative p-6 sm:p-8">

          <div className="flex items-center gap-3 text-violet-300">

            <Icon name="building" />

            <p className="text-xs font-bold uppercase tracking-widest">
              Business financing
            </p>

          </div>

          <h3 className="mt-8 max-w-sm text-3xl font-black">
            Build with capital.
            <br />

            <span className="text-violet-300">
              Plan with discipline.
            </span>
          </h3>

          <div className="mt-6 flex flex-wrap gap-2">

            {["Cash flow", "0% APR", "Repayment"].map(
              (item) => (

                <span
                  key={item}
                  className="rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-2 text-xs text-violet-200"
                >
                  {item}
                </span>

              )
            )}

          </div>
        </div>
      </div>

      {/* FINANCING CALCULATOR */}

      <div className={panel}>

        <DashboardHeading
          title="Financing Workspace"
          subtitle="Promotional APR repayment planner"
          color="#a78bfa"
          icon="wallet"
        />

        <div className="grid gap-4 sm:grid-cols-2">

          <NumberField
            label="Promotional balance ($)"
            placeholder="Enter balance"
            value={balance}
            onChange={(value) => {
              setBalance(value);
              setSelectedPoint(0);
            }}
          />

          <NumberField
            label="Months remaining"
            placeholder="Enter months"
            value={months}
            min={1}
            max={600}
            step="1"
            onChange={(value) => {
              setMonths(value);
              setSelectedPoint(0);
            }}
          />

        </div>

        <div className="mt-6 rounded-2xl border border-violet-300/15 bg-violet-300/[0.05] p-6">

          <p className="text-sm text-slate-400">
            Estimated monthly repayment
          </p>

          <p className="mt-3 break-words text-4xl font-black text-violet-300 sm:text-5xl">
            {valid ? money(monthlyPayment) : "—"}
          </p>

          <p className="mt-3 text-xs text-slate-500">
            Equal monthly payments, rounded up to cents.
          </p>

        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">

          <div className="min-w-0 rounded-xl bg-black/20 p-4">

            <p className="text-xs text-slate-400">
              Starting balance
            </p>

            <p className="mt-2 break-words text-xl font-bold">
              {valid ? money(principal) : "—"}
            </p>

          </div>

          <div className="min-w-0 rounded-xl bg-black/20 p-4">

            <p className="text-xs text-slate-400">
              Target balance
            </p>

            <p className="mt-2 text-xl font-bold text-emerald-300">
              {valid ? "$0.00" : "—"}
            </p>

          </div>
        </div>

        <p className="mt-5 text-xs leading-6 text-slate-500">
          Assumes 0% APR, fixed monthly payments, and no
          additional charges or fees. Always make at least
          your required minimum payment.
        </p>

      </div>

      {/* LIVE REPAYMENT CHART */}

      <div className={panel}>

        <DashboardHeading
          title="Projected Repayment"
          subtitle="Explore your balance over time"
          color="#a78bfa"
          icon="chart"
        />

        {valid ? (

          <>

            <div className="mb-4 flex items-center justify-between gap-3">

              <div>
                <p className="text-xs text-slate-400">
                  Month {selected?.month}
                </p>

                <p className="mt-2 break-words text-2xl font-bold text-violet-200">
                  {money(selected?.balance ?? 0)}
                </p>
              </div>

              <span className="text-xs text-slate-500">
                Remaining balance
              </span>

            </div>

            <svg
              viewBox="0 0 360 140"
              className="w-full"
              role="img"
              aria-label="Projected remaining balance declining over the repayment period"
            >

              <defs>
                <linearGradient
                  id="fundingChart"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#a78bfa"
                    stopOpacity="0.3"
                  />

                  <stop
                    offset="100%"
                    stopColor="#a78bfa"
                    stopOpacity="0"
                  />

                </linearGradient>
              </defs>

              {[15, 40, 65, 90, 115].map((y) => (

                <line
                  key={y}
                  x1="12"
                  x2="348"
                  y1={y}
                  y2={y}
                  stroke="#334155"
                  strokeDasharray="4 5"
                  strokeOpacity="0.6"
                />

              ))}

              <polygon
                points={`12,115 ${chartPoints.join(" ")} 348,115`}
                fill="url(#fundingChart)"
              />

              <polyline
                points={chartPoints.join(" ")}
                fill="none"
                stroke="#a78bfa"
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
              />

              {timeline.map((item, index) => {

                const x =
                  12 +
                  (index /
                    Math.max(timeline.length - 1, 1)) *
                    336;

                const y =
                  115 -
                  (principal > 0
                    ? (item.balance / principal) * 100
                    : 0);

                return (

                  <circle
                    key={index}
                    cx={x}
                    cy={y}
                    r={selectedPoint === index ? 6 : 3}
                    fill={
                      selectedPoint === index
                        ? "#ffffff"
                        : "#a78bfa"
                    }
                  />

                );
              })}

              <text
                x="12"
                y="135"
                fill="#94a3b8"
                fontSize="10"
              >
                Start
              </text>

              <text
                x="348"
                y="135"
                fill="#94a3b8"
                fontSize="10"
                textAnchor="end"
              >
                Month {duration}
              </text>

            </svg>

            <label className="mt-5 block">

              <span className="mb-3 block text-xs text-slate-400">
                Explore repayment timeline
              </span>

              <input
                type="range"
                min="0"
                max={timeline.length - 1}
                step="1"
                value={Math.min(
                  selectedPoint,
                  timeline.length - 1
                )}
                onChange={(e) =>
                  setSelectedPoint(Number(e.target.value))
                }
                className="w-full accent-violet-400"
              />

            </label>

          </>

        ) : (

          <div className="flex min-h-40 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black/15 p-6 text-center">

            <Icon
              name="chart"
              className="h-10 w-10 text-violet-300/50"
            />

            <p className="mt-4 text-sm font-semibold text-slate-400">
              Your repayment chart will appear here.
            </p>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Enter your balance and months remaining.
            </p>

          </div>

        )}

        <Link
          href="/zero-apr-planner"
          className="mt-5 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-bold text-violet-300"
        >
          Open full 0% APR planner
          <Icon name="arrow" />
        </Link>

      </div>
    </div>
  );
}

function HacksDashboard() {
  const [balance, setBalance] = useState("");
  const [limit, setLimit] = useState("");

  const valid =
    balance.trim() !== "" &&
    limit.trim() !== "" &&
    Number.isFinite(Number(balance)) &&
    Number.isFinite(Number(limit)) &&
    Number(balance) >= 0 &&
    Number(limit) > 0;

  const utilization = valid
    ? (Number(balance) / Number(limit)) * 100
    : 0;

  const remaining = valid
    ? Math.max(0, Number(limit) - Number(balance))
    : 0;

  return (
    <div className="min-w-0 space-y-5">

      <div className="overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-[#0c1424] shadow-2xl">

        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-5 sm:px-7">

          <div className="flex items-center gap-3">

            <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-300/10 text-cyan-300">
              <Icon name="chart" />
            </div>

            <div>
              <p className="font-bold">
                Credit Workspace
              </p>

              <p className="text-xs text-slate-500">
                Personal analytics
              </p>
            </div>

          </div>

          <span className="text-xs font-medium text-cyan-300">
            Live calculator
          </span>

        </div>

        <div className="flex min-w-0">

          {/* DESKTOP DASHBOARD SIDEBAR */}

          <div className="hidden w-16 shrink-0 flex-col items-center gap-7 border-r border-white/10 py-7 text-slate-500 md:flex">

            {["chart", "card", "calendar", "shield"].map(
              (icon, i) => (

                <div
                  key={icon}
                  className={`grid h-10 w-10 place-items-center rounded-xl ${
                    i === 0
                      ? "bg-cyan-300/10 text-cyan-300"
                      : ""
                  }`}
                >
                  <Icon name={icon} />
                </div>

              )
            )}

          </div>

          <div className="min-w-0 flex-1 p-5 sm:p-7">

            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Credit optimization
            </p>

            <h3 className="mt-3 text-2xl font-black">
              Utilization Overview
            </h3>

            <div className="mt-6 grid items-center gap-5 rounded-2xl border border-white/5 bg-black/20 p-4 sm:grid-cols-2 sm:p-5">

              <Gauge
                percentage={utilization}
                display={
                  valid
                    ? `${utilization.toFixed(1)}%`
                    : "—"
                }
                subtitle="Credit utilized"
                color="#22d3ee"
              />

              <div className="min-w-0 space-y-4">

                <div>
                  <p className="text-xs text-slate-400">
                    Current balance
                  </p>

                  <p className="mt-2 break-words text-xl font-bold">
                    {valid
                      ? money(Number(balance))
                      : "—"}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4">

                  <p className="text-xs text-slate-400">
                    Credit limit
                  </p>

                  <p className="mt-2 break-words text-xl font-bold">
                    {valid
                      ? money(Number(limit))
                      : "—"}
                  </p>

                </div>

                <div className="border-t border-white/10 pt-4">

                  <p className="text-xs text-slate-400">
                    Available credit
                  </p>

                  <p className="mt-2 break-words text-xl font-bold text-cyan-300">
                    {valid ? money(remaining) : "—"}
                  </p>

                </div>
              </div>

            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <NumberField
                label="Current balance ($)"
                value={balance}
                onChange={setBalance}
                placeholder="Enter balance"
              />

              <NumberField
                label="Credit limit ($)"
                value={limit}
                onChange={setLimit}
                placeholder="Enter limit"
                min={0.01}
              />

            </div>

            {valid && utilization > 100 && (

              <p className="mt-4 rounded-xl border border-rose-400/20 bg-rose-400/5 p-4 text-xs text-rose-300">
                Your current balance exceeds your credit limit.
              </p>

            )}

            <div className="mt-6 rounded-2xl border border-cyan-300/10 bg-cyan-300/[0.04] p-4">

              <div className="flex items-start gap-3">

                <Icon
                  name="shield"
                  className="h-6 w-6 shrink-0 text-cyan-300"
                />

                <div>

                  <p className="text-sm font-bold">
                    Remember
                  </p>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    Lower reported utilization can be
                    beneficial, but no specific percentage
                    guarantees a credit score improvement.
                  </p>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MONTHLY PAYMENT WORKFLOW */}

      <div className={panel}>

        <DashboardHeading
          title="Monthly Payment Workflow"
          subtitle="Understand your credit card billing cycle"
          color="#22d3ee"
          icon="calendar"
        />

        <div>

          {[
            {
              icon: "card",
              title: "Review purchases",
              subtitle:
                "Check your balance, spending and new transactions.",
            },
            {
              icon: "calendar",
              title: "Statement closes",
              subtitle:
                "Review the statement balance and issuer reporting practices.",
            },
            {
              icon: "check",
              title: "Payment due",
              subtitle:
                "Make required payments on time. Pay in full when possible.",
            },
          ].map((item, index, items) => (

            <div
              key={item.title}
              className="flex gap-4"
            >

              <div className="flex flex-col items-center">

                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                  <Icon name={item.icon} />
                </div>

                {index < items.length - 1 && (

                  <div className="my-2 min-h-7 w-px flex-1 bg-cyan-300/20" />

                )}

              </div>

              <div className="pb-7 pt-1">

                <p className="font-semibold">
                  {item.title}
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-400">
                  {item.subtitle}
                </p>

              </div>
            </div>

          ))}

        </div>

        <Link
          href="/credit-utilization"
          className="flex items-center justify-between gap-4 border-t border-white/10 pt-5 text-sm font-bold text-cyan-300"
        >
          Open multi-card utilization calculator
          <Icon name="arrow" />
        </Link>

      </div>
    </div>
  );
}

function CreditDashboard() {
  const tasks = [
    "Review all three credit reports",
    "Set up payment reminders",
    "Review revolving credit card balances",
    "Create a debt repayment plan",
    "Dispute any inaccurate information",
  ];

  const [completed, setCompleted] = useState<number[]>([]);
  const [score, setScore] = useState("");

  const valid =
    score.trim() !== "" &&
    Number.isInteger(Number(score)) &&
    Number(score) >= 300 &&
    Number(score) <= 850;

  const scoreValue = valid ? Number(score) : 300;

  const scorePercentage = valid
    ? ((scoreValue - 300) / 550) * 100
    : 0;

  const scoreCategory = !valid
    ? "Enter your score"
    : scoreValue < 580
    ? "Poor"
    : scoreValue < 670
    ? "Fair"
    : scoreValue < 740
    ? "Good"
    : scoreValue < 800
    ? "Very good"
    : "Exceptional";

  const progress =
    (completed.length / tasks.length) * 100;

  const factors = [
    {
      name: "Payment history",
      weight: 35,
      color: "#34d399",
    },
    {
      name: "Amounts owed",
      weight: 30,
      color: "#2dd4bf",
    },
    {
      name: "Credit history",
      weight: 15,
      color: "#22d3ee",
    },
    {
      name: "Credit mix",
      weight: 10,
      color: "#60a5fa",
    },
    {
      name: "New credit",
      weight: 10,
      color: "#a78bfa",
    },
  ];

  return (
    <div className="min-w-0 space-y-5">

      {/* CREDIT PROFILE DASHBOARD */}

      <div className="rounded-[2rem] border border-emerald-300/15 bg-[#101e24] p-5 shadow-2xl sm:p-7">

        <DashboardHeading
          title="Credit Profile Overview"
          subtitle="Understand your current position"
          color="#34d399"
          icon="shield"
        />

        <div className="grid gap-5 sm:grid-cols-2">

          <div className="min-w-0 rounded-2xl border border-white/5 bg-black/20 p-5">

            <p className="text-center text-xs font-bold uppercase tracking-widest text-emerald-300">
              Your credit score
            </p>

            <div className="mt-5">

              <Gauge
                percentage={scorePercentage}
                display={valid ? score : "—"}
                subtitle="300 – 850"
                color="#34d399"
              />

            </div>

            <div className="mb-5 text-center">

              <p className="text-lg font-bold text-emerald-300">
                {scoreCategory}
              </p>

              <p className="mt-2 text-xs text-slate-500">
                General FICO score range
              </p>

            </div>

            <NumberField
              label="Your credit score"
              value={score}
              onChange={setScore}
              placeholder="Enter score"
              min={300}
              max={850}
              step="1"
            />

            <p className="mt-4 text-center text-xs leading-5 text-slate-500">
              Self-reported score. This is not a credit check
              or a score prediction.
            </p>

          </div>

          {/* FICO FACTORS */}

          <div className="min-w-0 rounded-2xl border border-white/5 bg-black/20 p-5">

            <h3 className="font-bold">
              What affects your score?
            </h3>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              General FICO scoring factors.
            </p>

            <div className="mt-6 space-y-5">

              {factors.map((factor) => (

                <div key={factor.name}>

                  <div className="flex justify-between gap-2 text-xs">

                    <span className="text-slate-300">
                      {factor.name}
                    </span>

                    <span
                      className="font-bold"
                      style={{
                        color: factor.color,
                      }}
                    >
                      {factor.weight}%
                    </span>

                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">

                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${factor.weight}%`,
                        backgroundColor: factor.color,
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

            <p className="mt-6 text-xs leading-6 text-slate-500">
              These are general category weightings.
              Individual scoring effects vary by credit
              profile and scoring model.
            </p>

          </div>

        </div>
      </div>

      {/* IMPROVEMENT CHECKLIST */}

      <div className={panel}>

        <DashboardHeading
          title="Your Improvement Roadmap"
          subtitle="Build better credit habits"
          color="#34d399"
          icon="check"
        />

        <div className="rounded-2xl border border-emerald-300/10 bg-emerald-300/[0.04] p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-xs text-slate-400">
                Roadmap progress
              </p>

              <p className="mt-2 text-3xl font-black text-emerald-300">
                {progress.toFixed(0)}%
              </p>

            </div>

            <div className="text-right">

              <p className="text-xl font-bold">
                {completed.length}/{tasks.length}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Tasks completed
              </p>

            </div>
          </div>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-800">

            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-300 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>
        </div>

        <div className="mt-5 space-y-3">

          {tasks.map((task, index) => {

            const checked = completed.includes(index);

            return (

              <label
                key={task}
                className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition ${
                  checked
                    ? "border-emerald-300/15 bg-emerald-300/5"
                    : "border-white/10 hover:bg-white/5"
                }`}
              >

                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() =>
                    setCompleted((old) =>
                      old.includes(index)
                        ? old.filter(
                            (item) => item !== index
                          )
                        : [...old, index]
                    )
                  }
                  className="h-5 w-5 shrink-0 accent-emerald-400"
                />

                <span
                  className={`text-sm leading-6 ${
                    checked
                      ? "text-slate-500 line-through"
                      : "text-slate-300"
                  }`}
                >
                  {task}
                </span>

              </label>

            );
          })}

        </div>

        <button
          type="button"
          onClick={() => setCompleted([])}
          className="mt-5 text-sm font-medium text-slate-400 transition hover:text-white"
        >
          Reset checklist
        </button>

        <p className="mt-5 text-xs leading-6 text-slate-500">
          Checklist progress represents completed tasks,
          not predicted credit score improvement.
          Progress resets when you reload this page.
        </p>

      </div>
    </div>
  );
}

function StrategyNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    {
      label: "Travel",
      href: "/travel-rewards",
    },
    {
      label: "Funding",
      href: "/business-funding",
    },
    {
      label: "Hacks",
      href: "/credit-hacks",
    },
    {
      label: "Credit",
      href: "/credit-improvement",
    },
    {
      label: "Learn",
      href: "/#education",
    },
    {
      label: "About",
      href: "/#about",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080d19]/95 backdrop-blur-xl">

      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-5 sm:px-6">

        <Link
          href="/"
          className="shrink-0 text-xl font-black tracking-tight sm:text-2xl"
        >
          Credit
          <span className="text-cyan-300">
            Leverage
          </span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">

          {navigation.map((item) => (

            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>

          ))}

        </div>

        <div className="flex items-center gap-3">

          <Link
            href="/#tools"
            className="hidden rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-5 py-3 text-sm font-bold text-cyan-300 transition hover:bg-cyan-300/10 sm:inline-flex"
          >
            Free Tools
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/10 p-3 lg:hidden"
          >
            <Icon
              name={menuOpen ? "close" : "menu"}
            />
          </button>

        </div>
      </nav>

      {menuOpen && (

        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-[#111a2d] p-3 lg:hidden">

          {navigation.map((item) => (

            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5"
            >
              {item.label}
            </Link>

          ))}

          <Link
            href="/#tools"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-xl bg-cyan-300 px-4 py-3 text-center text-sm font-bold text-slate-950"
          >
            Explore Free Tools
          </Link>

        </div>

      )}
    </header>
  );
}

export default function StrategyPage({
  type,
}: {
  type: PageType;
}) {
  const data = content[type];

  const dashboards = {
    travel: <TravelDashboard />,
    funding: <FundingDashboard />,
    hacks: <HacksDashboard />,
    credit: <CreditDashboard />,
  };

  return (
    <main
      className="min-h-screen overflow-x-clip text-white"
      style={{
        background: `radial-gradient(ellipse at 85% 5%, ${data.accent}12, transparent 40%), #080d19`,
      }}
    >

      <StrategyNavigation />

      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* BREADCRUMBS */}

        <div className="flex flex-wrap items-center gap-3 pt-7 text-xs text-slate-500">

          <Link
            href="/"
            className="transition hover:text-white"
          >
            Home
          </Link>

          <span>/</span>

          <span style={{ color: data.accent }}>
            {data.label}
          </span>

        </div>

        {/* MAIN HERO AND INTERACTIVE DASHBOARD */}

        <section
          className={`grid items-start gap-12 py-12 sm:py-16 lg:gap-16 lg:py-24 ${
            type === "credit" || type === "hacks"
              ? "lg:grid-cols-[0.85fr_1.3fr]"
              : "lg:grid-cols-2"
          }`}
        >

          <div className="enter-page min-w-0 lg:sticky lg:top-32">

            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold tracking-wider"
              style={{
                color: data.accent,
                borderColor: `${data.accent}30`,
                backgroundColor: `${data.accent}08`,
              }}
            >

              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: data.accent,
                }}
              />

              {data.label}

            </div>

            <h1 className="mt-7 text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">

              {data.title.split(". ")[0]}

              {data.title.includes(". ") && (
                <>
                  .
                  <br />

                  <span style={{ color: data.accent }}>
                    {data.title.split(". ").slice(1).join(". ")}
                  </span>
                </>
              )}

            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              {data.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              <Link
                href={data.calculator}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-bold text-slate-950 transition hover:brightness-110"
                style={{
                  backgroundColor: data.accent,
                }}
              >

                {data.calculatorLabel}

                <Icon
                  name="arrow"
                  className="h-5 w-5"
                />

              </Link>

              <Link
                href="/intake"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold transition hover:bg-white/10"
              >
                Get Started
              </Link>

            </div>

            {/* CREDIBILITY INDICATORS */}

            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-7">

              {[
                ["book", "Education"],
                ["chart", "Planning"],
                ["shield", "Strategy"],
              ].map(([icon, title]) => (

                <div
                  key={title}
                  className="rounded-xl border border-white/5 bg-white/[0.025] p-3 sm:p-4"
                >

                  <div
                    style={{
                      color: data.accent,
                    }}
                  >
                    <Icon name={icon} />
                  </div>

                  <p className="mt-3 text-xs text-slate-400 sm:text-sm">
                    {title}
                  </p>

                </div>

              ))}

            </div>

            {/* EDUCATIONAL PHOTO PANEL */}

            {type !== "travel" && type !== "funding" && (

              <div className="relative mt-8 hidden h-48 overflow-hidden rounded-3xl border border-white/10 lg:block">

                <div
                  className="absolute inset-0 bg-slate-900 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("${data.image}")`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080d19]/95 via-[#080d19]/30 to-transparent" />

                <div className="absolute bottom-5 left-6">

                  <p
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{
                      color: data.accent,
                    }}
                  >
                    CreditLeverage
                  </p>

                  <p className="mt-2 font-bold">
                    Understand the numbers.
                  </p>

                </div>
              </div>

            )}

          </div>

          <div className="enter-page min-w-0">
            {dashboards[type]}
          </div>

        </section>

        {/* EDUCATIONAL FEATURES */}

        <section className="border-t border-white/10 py-16 sm:py-24">

          <p
            className="text-xs font-bold uppercase tracking-[0.25em]"
            style={{
              color: data.accent,
            }}
          >
            Explore the fundamentals
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Build your knowledge.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
            Understand the core concepts behind smarter
            credit decisions before choosing your next
            financial strategy.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            {data.features.map(
              ([icon, title, description], index) => (

                <div
                  key={title}
                  className={`${panel} lift-card`}
                >

                  <div className="flex items-center justify-between">

                    <div
                      className="grid h-14 w-14 place-items-center rounded-2xl border"
                      style={{
                        color: data.accent,
                        borderColor: `${data.accent}25`,
                        backgroundColor: `${data.accent}10`,
                      }}
                    >
                      <Icon
                        name={icon}
                        className="h-7 w-7"
                      />
                    </div>

                    <span className="text-3xl font-black text-white/10">
                      0{index + 1}
                    </span>

                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {description}
                  </p>

                </div>

              )
            )}

          </div>
        </section>

        {/* ADDITIONAL STRATEGIES */}

        <section className="border-t border-white/10 py-16 sm:py-24">

          <p
            className="text-xs font-bold uppercase tracking-[0.25em]"
            style={{
              color: data.accent,
            }}
          >
            Keep exploring
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Discover more possibilities.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            {[
              {
                key: "travel",
                href: "/travel-rewards",
              },
              {
                key: "funding",
                href: "/business-funding",
              },
              {
                key: "hacks",
                href: "/credit-hacks",
              },
              {
                key: "credit",
                href: "/credit-improvement",
              },
            ]
              .filter((item) => item.key !== type)
              .map((item) => {

                const section =
                  content[item.key as PageType];

                return (

                  <Link
                    key={item.key}
                    href={item.href}
                    className="lift-card group overflow-hidden rounded-3xl border border-white/10 bg-[#111827]"
                  >

                    <div
                      className="relative h-40 bg-slate-900 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("${section.image}")`,
                      }}
                    >

                      <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-black/30 to-transparent" />

                      <p
                        className="absolute bottom-4 left-6 text-xs font-bold tracking-widest"
                        style={{
                          color: section.accent,
                        }}
                      >
                        {section.label}
                      </p>

                    </div>

                    <div className="p-6">

                      <h3 className="text-lg font-bold">
                        {section.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {section.description}
                      </p>

                      <div
                        className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-bold"
                        style={{
                          color: section.accent,
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

                );
              })}

          </div>
        </section>

        {/* GET STARTED */}

        <section
          className="relative mb-16 overflow-hidden rounded-[2rem] border p-7 sm:p-12"
          style={{
            background: `linear-gradient(120deg, ${data.accent}12, #111827 70%)`,
            borderColor: `${data.accent}25`,
          }}
        >

          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[100px]"
            style={{
              backgroundColor: `${data.accent}15`,
            }}
          />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div>

              <p
                className="text-xs font-bold uppercase tracking-widest"
                style={{
                  color: data.accent,
                }}
              >
                Your next move
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Ready to plan your next move?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Explore your options, understand the risks
                and build a more informed financial strategy
                with CreditLeverage.
              </p>

            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto">

              <Link
                href="/intake"
                className="inline-flex items-center justify-center gap-3 rounded-xl px-7 py-4 font-bold text-slate-950 transition hover:brightness-110"
                style={{
                  backgroundColor: data.accent,
                }}
              >

                Complete Intake Form

                <Icon
                  name="arrow"
                  className="h-5 w-5"
                />

              </Link>

              <a
                href="https://calendly.com/robert-28-qbaj/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 px-7 py-4 text-center text-sm font-semibold transition hover:bg-white/10"
              >
                Book Free Strategy Call
              </a>

            </div>

          </div>
        </section>

      </div>

      {/* FOOTER */}

      <footer className="border-t border-white/10 bg-[#060a14]">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-6 py-10 sm:flex-row sm:items-center">

          <div>

            <Link
              href="/"
              className="text-xl font-black"
            >
              Credit
              <span className="text-cyan-300">
                Leverage
              </span>
            </Link>

            <p className="mt-3 text-xs text-slate-500">
              Smarter credit. Better opportunities.
            </p>

          </div>

          <div className="flex flex-wrap gap-5 text-xs text-slate-400">

            <Link
              href="/#tools"
              className="hover:text-white"
            >
              Free Tools
            </Link>

            <Link
              href="/#education"
              className="hover:text-white"
            >
              Education
            </Link>

            <Link
              href="/#about"
              className="hover:text-white"
            >
              About
            </Link>

            <Link
              href="/intake"
              className="hover:text-white"
            >
              Contact
            </Link>

          </div>

        </div>

        <div className="mx-auto max-w-7xl border-t border-white/10 px-6 py-7">

          <p className="text-xs leading-6 text-slate-500">

            © {new Date().getFullYear()} CreditLeverage.
            Educational information and illustrative
            calculators only. Results are estimates, not
            guarantees of credit approvals, score
            improvements or financial outcomes. Not a
            substitute for individualized financial,
            legal or tax advice.

          </p>

        </div>
      </footer>

    </main>
  );
}