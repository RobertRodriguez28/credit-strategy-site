"use client";

import { useState } from "react";
import Link from "next/link";

type CreditCard = {
  id: number;
  name: string;
  balance: string;
  limit: string;
};

const emptyCard = (): CreditCard => ({
  id: 1,
  name: "",
  balance: "",
  limit: "",
});

const money = (amount: number) =>
  amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

const inputClass =
  "w-full min-w-0 rounded-xl border border-white/15 bg-[#080e1c] px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-cyan-300";

const panel =
  "rounded-3xl border border-white/10 bg-white/[0.045] p-5 sm:p-7";

const validAmount = (value: string) =>
  value.trim() !== "" &&
  Number.isFinite(Number(value)) &&
  Number(value) >= 0;

const validLimit = (value: string) =>
  value.trim() !== "" &&
  Number.isFinite(Number(value)) &&
  Number(value) > 0;

const roundPayment = (value: number) =>
  Math.max(
    0,
    Math.ceil(value * 100 - 1e-8) / 100
  );

function getColor(percentage: number) {
  if (percentage < 10) return "#34d399";
  if (percentage < 30) return "#22d3ee";
  if (percentage < 50) return "#fbbf24";
  return "#fb7185";
}

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
        <rect
          x="2"
          y="5"
          width="20"
          height="14"
          rx="3"
        />
        <path d="M2 10h20M6 15h4" />
      </>
    ),

    chart: (
      <>
        <path d="M3 3v18h18" />
        <path d="m7 15 4-5 4 3 6-8" />
      </>
    ),

    wallet: (
      <>
        <rect
          x="3"
          y="5"
          width="18"
          height="15"
          rx="3"
        />
        <path d="M21 10h-6v5h6M17 12.5h1" />
      </>
    ),

    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),

    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,

    back: <path d="M20 12H4m6-6-6 6 6 6" />,

    plus: <path d="M12 5v14M5 12h14" />,

    trash: (
      <>
        <path d="M3 6h18M8 6V3h8v3M6 6l1 15h10l1-15M10 10v7M14 10v7" />
      </>
    ),

    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),

    check: <path d="m5 12 4 4L19 6" />,

    reset: (
      <>
        <path d="M3 12a9 9 0 1 1 3 6.7M3 5v7h7" />
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

function UtilizationGauge({
  percentage,
  valid,
}: {
  percentage: number;
  valid: boolean;
}) {
  const radius = 88;
  const circumference = 2 * Math.PI * radius;

  const progress = Math.min(
    100,
    Math.max(0, percentage)
  );

  const color = valid
    ? getColor(percentage)
    : "#334155";

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[260px]">

      <svg
        viewBox="0 0 220 220"
        className="h-full w-full"
        aria-hidden="true"
      >

        <circle
          cx="110"
          cy="110"
          r="105"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
          fill="none"
        />

        <circle
          cx="110"
          cy="110"
          r={radius}
          stroke="#243044"
          strokeWidth="15"
          fill="none"
        />

        <circle
          cx="110"
          cy="110"
          r={radius}
          stroke={color}
          strokeWidth="15"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={
            circumference -
            (progress / 100) * circumference
          }
          transform="rotate(-90 110 110)"
          className="transition-all duration-500"
        />

        <circle
          cx="110"
          cy="110"
          r="70"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
          fill="none"
        />

      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <p
          className="text-4xl font-black tracking-tight sm:text-5xl"
          style={{ color }}
        >
          {valid
            ? `${percentage.toFixed(1)}%`
            : "—"}
        </p>

        <p className="mt-2 text-xs uppercase tracking-widest text-slate-400">
          Overall utilization
        </p>

        <p className="mt-2 text-[10px] text-slate-500">
          {valid
            ? "Combined credit cards"
            : "Awaiting card details"}
        </p>

      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  icon,
  color = "#67e8f9",
}: {
  label: string;
  value: string;
  icon: string;
  color?: string;
}) {
  return (
    <div className="min-w-0 rounded-2xl border border-white/5 bg-black/20 p-4 sm:p-5">

      <div className="flex items-center justify-between gap-2">

        <p className="text-xs leading-5 text-slate-400">
          {label}
        </p>

        <div style={{ color }}>
          <Icon
            name={icon}
            className="h-5 w-5"
          />
        </div>

      </div>

      <p className="mt-4 break-words text-xl font-bold sm:text-2xl">
        {value}
      </p>

    </div>
  );
}

export default function CreditUtilizationPage() {
  const [cards, setCards] = useState<CreditCard[]>([
    emptyCard(),
  ]);

  const [target, setTarget] = useState("");
  const [nextId, setNextId] = useState(2);

  const updateCard = (
    id: number,
    field: "name" | "balance" | "limit",
    value: string
  ) => {
    setCards((current) =>
      current.map((card) =>
        card.id === id
          ? { ...card, [field]: value }
          : card
      )
    );
  };

  const addCard = () => {
    setCards((current) => [
      ...current,
      {
        id: nextId,
        name: "",
        balance: "",
        limit: "",
      },
    ]);

    setNextId((id) => id + 1);
  };

  const removeCard = (id: number) => {
    setCards((current) =>
      current.length > 1
        ? current.filter((card) => card.id !== id)
        : current
    );
  };

  const clearAll = () => {
    setCards([emptyCard()]);
    setTarget("");
    setNextId(2);
  };

  const cardsValid = cards.every(
    (card) =>
      validAmount(card.balance) &&
      validLimit(card.limit)
  );

  const targetValid =
    target.trim() !== "" &&
    Number.isFinite(Number(target)) &&
    Number(target) >= 0 &&
    Number(target) <= 100;

  const valid = cardsValid && targetValid;

  const totalBalance = cards.reduce(
    (sum, card) =>
      sum +
      (validAmount(card.balance)
        ? Number(card.balance)
        : 0),
    0
  );

  const totalLimit = cards.reduce(
    (sum, card) =>
      sum +
      (validLimit(card.limit)
        ? Number(card.limit)
        : 0),
    0
  );

  const availableCredit = cardsValid
    ? cards.reduce(
        (sum, card) =>
          sum +
          Math.max(
            0,
            Number(card.limit) -
              Number(card.balance)
          ),
        0
      )
    : 0;

  const utilization =
    cardsValid && totalLimit > 0
      ? (totalBalance / totalLimit) * 100
      : 0;

  const targetBalance = valid
    ? (totalLimit * Number(target)) / 100
    : 0;

  const paymentNeeded = valid
    ? roundPayment(totalBalance - targetBalance)
    : 0;

  const cardPayments = valid
    ? cards.map((card, index) => {
        const balance = Number(card.balance);
        const limit = Number(card.limit);

        const percentage =
          (balance / limit) * 100;

        const payment = roundPayment(
          balance -
            (limit * Number(target)) / 100
        );

        return {
          id: card.id,
          name:
            card.name.trim() ||
            `Card ${index + 1}`,
          balance,
          limit,
          percentage,
          payment,
          projectedBalance: Math.max(
            0,
            balance - payment
          ),
        };
      })
    : [];

  const individualPaymentsTotal =
    cardPayments.reduce(
      (sum, card) => sum + card.payment,
      0
    );

  const projectedUtilization =
    valid && totalLimit > 0
      ? (Math.max(
          0,
          totalBalance - paymentNeeded
        ) /
          totalLimit) *
        100
      : 0;

  const status = !cardsValid
    ? "Enter your credit card details"
    : utilization < 10
    ? "Low overall utilization"
    : utilization < 30
    ? "Moderate overall utilization"
    : utilization < 50
    ? "Elevated overall utilization"
    : "High overall utilization";

  return (
    <main className="min-h-screen overflow-x-clip bg-[#080d19] text-white">

      {/* NAVIGATION */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080d19]/95 backdrop-blur-xl">

        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-5 sm:px-6">

          <Link
            href="/"
            className="text-xl font-black tracking-tight sm:text-2xl"
          >
            Credit
            <span className="text-cyan-300">
              Leverage
            </span>
          </Link>

          <div className="flex items-center gap-3">

            <Link
              href="/#tools"
              className="hidden rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300 transition hover:bg-white/10 sm:inline-flex"
            >
              All Calculators
            </Link>

            <Link
              href="/"
              className="flex items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-3 py-3 text-xs font-bold text-cyan-300 sm:px-5 sm:text-sm"
            >
              <Icon
                name="back"
                className="h-4 w-4"
              />

              Home
            </Link>

          </div>

        </nav>

      </header>

      {/* HEADER */}

      <section className="relative border-b border-white/10">

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(34,211,238,0.10),transparent_60%),radial-gradient(ellipse_at_90%_50%,rgba(139,92,246,0.15),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20">

          <div className="mb-7 flex flex-wrap items-center gap-3 text-xs text-slate-500">

            <Link
              href="/"
              className="hover:text-white"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/#tools"
              className="hover:text-white"
            >
              Financial Tools
            </Link>

            <span>/</span>

            <span className="text-cyan-300">
              Credit Utilization
            </span>

          </div>

          <div className="enter-page">

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-bold text-cyan-300">

              <span className="h-2 w-2 rounded-full bg-cyan-300" />

              FREE FINANCIAL CALCULATOR

            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">

              Take control of your{" "}

              <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                credit utilization.
              </span>

            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-lg">
              Manage multiple credit cards, visualize
              your utilization and calculate how much
              you need to pay to reach your personal
              utilization target.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 text-xs">

              {[
                ["card", "Multiple cards"],
                ["chart", "Live calculations"],
                ["target", "Custom targets"],
                ["shield", "No account required"],
              ].map(([icon, label]) => (

                <div
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-300"
                >

                  <Icon
                    name={icon}
                    className="h-4 w-4 text-cyan-300"
                  />

                  {label}

                </div>

              ))}

            </div>
          </div>
        </div>
      </section>

      {/* MAIN CALCULATOR */}

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16">

        <div className="grid items-start gap-7 lg:grid-cols-[1fr_1.05fr]">

          {/* LEFT SIDE: CREDIT CARD INPUTS */}

          <section className="min-w-0 space-y-5">

            <div className="flex items-start justify-between gap-4">

              <div>

                <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                  Step 01
                </p>

                <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                  Your Credit Cards
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Add your current revolving credit
                  card balances and limits.
                </p>

              </div>

              <div className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">

                <p className="text-xl font-bold text-cyan-300">
                  {cards.length}
                </p>

                <p className="mt-1 text-[10px] text-slate-400">
                  Cards
                </p>

              </div>

            </div>

            {cards.map((card, index) => {

              const cardValid =
                validAmount(card.balance) &&
                validLimit(card.limit);

              const percentage = cardValid
                ? (Number(card.balance) /
                    Number(card.limit)) *
                  100
                : 0;

              const color = cardValid
                ? getColor(percentage)
                : "#334155";

              const individualPayment =
                cardValid && targetValid
                  ? roundPayment(
                      Number(card.balance) -
                        (Number(card.limit) *
                          Number(target)) /
                          100
                    )
                  : 0;

              return (

                <div
                  key={card.id}
                  className={`${panel} enter-page`}
                >

                  {/* CARD HEADER */}

                  <div className="mb-6 flex items-center justify-between gap-4">

                    <div className="flex min-w-0 items-center gap-3">

                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300">

                        <Icon name="card" />

                      </div>

                      <div className="min-w-0">

                        <p className="truncate font-bold">
                          {card.name.trim() ||
                            `Credit Card ${index + 1}`}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Revolving credit account
                        </p>

                      </div>

                    </div>

                    {cards.length > 1 && (

                      <button
                        type="button"
                        aria-label={`Remove card ${index + 1}`}
                        onClick={() =>
                          removeCard(card.id)
                        }
                        className="shrink-0 rounded-xl border border-rose-400/20 bg-rose-400/5 p-3 text-rose-300 transition hover:bg-rose-400/15"
                      >

                        <Icon
                          name="trash"
                          className="h-5 w-5"
                        />

                      </button>

                    )}

                  </div>

                  {/* CARD NAME */}

                  <div className="mb-5">

                    <label
                      htmlFor={`name-${card.id}`}
                      className="mb-2 block text-sm text-slate-400"
                    >
                      Card name (optional)
                    </label>

                    <input
                      id={`name-${card.id}`}
                      type="text"
                      placeholder="e.g. Chase Freedom"
                      value={card.name}
                      onChange={(e) =>
                        updateCard(
                          card.id,
                          "name",
                          e.target.value
                        )
                      }
                      className={inputClass}
                    />

                  </div>

                  {/* FINANCIAL INPUTS */}

                  <div className="grid gap-4 sm:grid-cols-2">

                    <div className="min-w-0">

                      <label
                        htmlFor={`balance-${card.id}`}
                        className="mb-2 block text-sm text-slate-400"
                      >
                        Current balance
                      </label>

                      <div className="relative">

                        <span className="absolute left-4 top-3 text-slate-500">
                          $
                        </span>

                        <input
                          id={`balance-${card.id}`}
                          type="number"
                          inputMode="decimal"
                          min="0"
                          step="0.01"
                          placeholder="Enter balance"
                          value={card.balance}
                          onChange={(e) =>
                            updateCard(
                              card.id,
                              "balance",
                              e.target.value
                            )
                          }
                          className={`${inputClass} pl-8`}
                        />

                      </div>

                    </div>

                    <div className="min-w-0">

                      <label
                        htmlFor={`limit-${card.id}`}
                        className="mb-2 block text-sm text-slate-400"
                      >
                        Credit limit
                      </label>

                      <div className="relative">

                        <span className="absolute left-4 top-3 text-slate-500">
                          $
                        </span>

                        <input
                          id={`limit-${card.id}`}
                          type="number"
                          inputMode="decimal"
                          min="0.01"
                          step="0.01"
                          placeholder="Enter limit"
                          value={card.limit}
                          onChange={(e) =>
                            updateCard(
                              card.id,
                              "limit",
                              e.target.value
                            )
                          }
                          className={`${inputClass} pl-8`}
                        />

                      </div>

                    </div>

                  </div>

                  {/* INDIVIDUAL UTILIZATION */}

                  <div className="mt-6 rounded-2xl border border-white/5 bg-black/20 p-4">

                    <div className="flex items-center justify-between gap-3">

                      <p className="text-sm text-slate-400">
                        Card utilization
                      </p>

                      <p
                        className="text-xl font-black"
                        style={{ color }}
                      >
                        {cardValid
                          ? `${percentage.toFixed(1)}%`
                          : "—"}
                      </p>

                    </div>

                    <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">

                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: cardValid
                            ? `${Math.min(
                                100,
                                percentage
                              )}%`
                            : "0%",
                          backgroundColor: color,
                        }}
                      />

                    </div>

                    <div className="mt-2 flex justify-between text-[10px] text-slate-500">

                      <span>0%</span>
                      <span>30%</span>
                      <span>50%</span>
                      <span>100%</span>

                    </div>

                    {cardValid && (

                      <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4">

                        <span className="text-xs text-slate-400">
                          Available credit
                        </span>

                        <span className="text-sm font-bold text-slate-200">
                          {money(
                            Math.max(
                              0,
                              Number(card.limit) -
                                Number(card.balance)
                            )
                          )}
                        </span>

                      </div>

                    )}

                    {cardValid &&
                      targetValid && (

                        <div className="mt-3 flex items-center justify-between gap-4">

                          <span className="text-xs text-slate-400">
                            Payment to reach {target}%
                            on this card
                          </span>

                          <span className="text-right text-sm font-bold text-emerald-300">
                            {money(individualPayment)}
                          </span>

                        </div>

                      )}

                    {!cardValid && (

                      <p className="mt-4 text-xs leading-5 text-slate-500">
                        Enter a nonnegative balance
                        and a credit limit greater
                        than zero.
                      </p>

                    )}

                  </div>

                  {cardValid &&
                    percentage > 100 && (

                      <p className="mt-4 rounded-xl border border-rose-400/20 bg-rose-400/5 p-3 text-xs leading-6 text-rose-300">
                        This card's balance exceeds
                        its credit limit.
                      </p>

                    )}

                </div>

              );
            })}

            {/* ADD CARD BUTTON */}

            <button
              type="button"
              onClick={addCard}
              className="flex w-full items-center justify-center gap-3 rounded-2xl border border-dashed border-cyan-300/30 bg-cyan-300/5 p-5 text-sm font-bold text-cyan-300 transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
            >

              <Icon name="plus" />

              Add Another Credit Card

            </button>

            {/* RESET BUTTON */}

            <button
              type="button"
              onClick={clearAll}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 p-4 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
            >

              <Icon
                name="reset"
                className="h-5 w-5"
              />

              Clear All Inputs

            </button>

          </section>

          {/* RIGHT SIDE: RESULTS DASHBOARD */}

          <section className="min-w-0 space-y-5">

            <div>

              <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                Step 02
              </p>

              <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                Credit Overview
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Your combined credit profile updates
                as you enter your information.
              </p>

            </div>

            {/* MAIN UTILIZATION DASHBOARD */}

            <div className="overflow-hidden rounded-3xl border border-cyan-300/15 bg-[#101929] shadow-2xl">

              <div className="flex items-center justify-between gap-4 border-b border-white/10 p-5 sm:p-6">

                <div className="flex items-center gap-3">

                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-300/10 text-cyan-300">

                    <Icon name="chart" />

                  </div>

                  <div>

                    <h3 className="font-bold">
                      Utilization Dashboard
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Combined revolving credit
                    </p>

                  </div>

                </div>

                <div className="flex shrink-0 items-center gap-2 text-xs text-cyan-300">

                  <span className="h-2 w-2 rounded-full bg-cyan-300" />

                  Live

                </div>

              </div>

              <div className="p-5 sm:p-7">

                {/* LIVE CIRCULAR GAUGE */}

                <UtilizationGauge
                  percentage={utilization}
                  valid={cardsValid}
                />

                <p
                  className="mt-4 text-center text-sm font-semibold"
                  style={{
                    color: cardsValid
                      ? getColor(utilization)
                      : "#94a3b8",
                  }}
                >
                  {status}
                </p>

                <p className="mt-2 text-center text-xs leading-6 text-slate-500">
                  Balance divided by total credit limit
                </p>

                {/* SUMMARY CARDS */}

                <div className="mt-7 grid grid-cols-2 gap-3">

                  <MetricCard
                    label="Total balances"
                    icon="wallet"
                    value={
                      cardsValid
                        ? money(totalBalance)
                        : "—"
                    }
                  />

                  <MetricCard
                    label="Total credit limits"
                    icon="card"
                    value={
                      cardsValid
                        ? money(totalLimit)
                        : "—"
                    }
                    color="#a78bfa"
                  />

                  <MetricCard
                    label="Available credit"
                    icon="chart"
                    value={
                      cardsValid
                        ? money(availableCredit)
                        : "—"
                    }
                    color="#34d399"
                  />

                  <MetricCard
                    label="Active card entries"
                    icon="card"
                    value={String(cards.length)}
                    color="#fbbf24"
                  />

                </div>

                {/* UTILIZATION BREAKDOWN */}

                <div className="mt-6 rounded-2xl border border-white/5 bg-black/20 p-5">

                  <div className="flex justify-between gap-4">

                    <p className="text-xs text-slate-400">
                      Utilized credit
                    </p>

                    <p className="text-xs font-bold text-cyan-300">
                      {cardsValid
                        ? `${utilization.toFixed(1)}%`
                        : "—"}
                    </p>

                  </div>

                  <div className="mt-4 h-5 overflow-hidden rounded-full bg-[#263449]">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-500"
                      style={{
                        width: cardsValid
                          ? `${Math.min(
                              utilization,
                              100
                            )}%`
                          : "0%",
                      }}
                    />

                  </div>

                  <div className="mt-4 flex flex-wrap gap-5 text-xs text-slate-400">

                    <div className="flex items-center gap-2">

                      <span className="h-3 w-3 rounded-sm bg-cyan-400" />

                      Used credit

                    </div>

                    <div className="flex items-center gap-2">

                      <span className="h-3 w-3 rounded-sm bg-[#263449]" />

                      Unused share of total limits

                    </div>

                  </div>

                </div>

              </div>
            </div>

            {/* TARGET UTILIZATION */}

            <div className={panel}>

              <div className="flex items-center gap-3">

                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-violet-300/15 bg-violet-300/10 text-violet-300">

                  <Icon name="target" />

                </div>

                <div>

                  <p className="text-xs font-bold uppercase tracking-widest text-violet-300">
                    Step 03
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    Set Your Target
                  </h3>

                </div>

              </div>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Enter the utilization percentage
                you would like to reach. No target
                is selected automatically.
              </p>

              <div className="mt-5">

                <label
                  htmlFor="target"
                  className="mb-2 block text-sm text-slate-400"
                >
                  Target utilization percentage
                </label>

                <div className="relative">

                  <input
                    id="target"
                    type="number"
                    inputMode="decimal"
                    min="0"
                    max="100"
                    step="0.1"
                    placeholder="Enter your target"
                    value={target}
                    onChange={(e) =>
                      setTarget(e.target.value)
                    }
                    className={`${inputClass} pr-10`}
                  />

                  <span className="absolute right-4 top-3 text-slate-400">
                    %
                  </span>

                </div>

              </div>

              {/* OPTIONAL TARGET SHORTCUTS */}

              <div className="mt-4 flex flex-wrap gap-2">

                {[0, 5, 10, 20, 30].map(
                  (percentage) => (

                    <button
                      key={percentage}
                      type="button"
                      onClick={() =>
                        setTarget(
                          String(percentage)
                        )
                      }
                      className={`rounded-xl border px-4 py-2 text-xs font-bold transition ${
                        targetValid &&
                        Number(target) === percentage
                          ? "border-violet-300/40 bg-violet-300/15 text-violet-200"
                          : "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10"
                      }`}
                    >
                      {percentage}%
                    </button>

                  )
                )}

              </div>

              {target.trim() !== "" &&
                !targetValid && (

                  <p className="mt-3 text-xs text-rose-300">
                    Enter a valid percentage
                    between 0 and 100.
                  </p>

                )}

              {/* REQUIRED PAYMENT */}

              <div className="relative mt-7 overflow-hidden rounded-2xl border border-emerald-300/15 bg-gradient-to-br from-emerald-300/[0.08] to-transparent p-5 sm:p-7">

                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-300/10 blur-3xl" />

                <div className="relative">

                  <p className="text-sm font-medium text-slate-400">
                    Payment needed to reach
                    your overall target
                  </p>

                  <p className="mt-4 break-words text-4xl font-black text-emerald-300 sm:text-5xl">
                    {valid
                      ? money(paymentNeeded)
                      : "—"}
                  </p>

                  <p className="mt-3 text-xs leading-6 text-slate-400">
                    {valid
                      ? paymentNeeded === 0
                        ? "Your overall utilization is already at or below your selected target."
                        : `Pay approximately ${money(
                            paymentNeeded
                          )} toward your combined balances to reach your ${target}% overall target.`
                      : "Complete all card details and choose a target to calculate your payment."}
                  </p>

                </div>

              </div>

              {/* TARGET BALANCE AND PROJECTION */}

              <div className="mt-4 grid grid-cols-2 gap-3">

                <MetricCard
                  label="Maximum target balance"
                  icon="target"
                  value={
                    valid
                      ? money(targetBalance)
                      : "—"
                  }
                  color="#a78bfa"
                />

                <MetricCard
                  label="Projected utilization"
                  icon="chart"
                  value={
                    valid
                      ? `${projectedUtilization.toFixed(
                          1
                        )}%`
                      : "—"
                  }
                  color="#34d399"
                />

              </div>

              {/* BEFORE AND AFTER BARS */}

              {valid && (

                <div className="mt-6 rounded-2xl border border-white/5 bg-black/20 p-5">

                  <h4 className="font-bold">
                    Before vs. After
                  </h4>

                  <div className="mt-5">

                    <div className="flex justify-between gap-3 text-xs">

                      <span className="text-slate-400">
                        Current utilization
                      </span>

                      <span className="font-bold text-cyan-300">
                        {utilization.toFixed(1)}%
                      </span>

                    </div>

                    <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">

                      <div
                        className="h-full rounded-full bg-cyan-400"
                        style={{
                          width: `${Math.min(
                            100,
                            utilization
                          )}%`,
                        }}
                      />

                    </div>

                  </div>

                  <div className="mt-6">

                    <div className="flex justify-between gap-3 text-xs">

                      <span className="text-slate-400">
                        Projected utilization
                      </span>

                      <span className="font-bold text-emerald-300">
                        {projectedUtilization.toFixed(
                          1
                        )}
                        %
                      </span>

                    </div>

                    <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">

                      <div
                        className="h-full rounded-full bg-emerald-400 transition-all duration-500"
                        style={{
                          width: `${Math.min(
                            100,
                            projectedUtilization
                          )}%`,
                        }}
                      />

                    </div>

                  </div>

                </div>

              )}

            </div>

          </section>

        </div>

        {/* INDIVIDUAL PAYMENT BREAKDOWN */}

        <section className="mt-12">

          <div className={panel}>

            <div className="flex flex-wrap items-center justify-between gap-5">

              <div>

                <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                  Payment breakdown
                </p>

                <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                  Individual Card Strategy
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                  See how much each card needs to
                  be paid down to individually reach
                  your selected utilization target.
                </p>

              </div>

              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300">

                <Icon name="chart" />

              </div>

            </div>

            {valid ? (

              <>

                {/* DESKTOP TABLE */}

                <div className="mt-7 hidden overflow-x-auto rounded-2xl border border-white/10 md:block">

                  <table className="w-full text-left text-sm">

                    <thead className="bg-white/5 text-xs text-slate-400">

                      <tr>

                        <th className="p-4">
                          Credit Card
                        </th>

                        <th className="p-4">
                          Balance
                        </th>

                        <th className="p-4">
                          Limit
                        </th>

                        <th className="p-4">
                          Utilization
                        </th>

                        <th className="p-4">
                          Payment Needed
                        </th>

                        <th className="p-4">
                          New Balance
                        </th>

                      </tr>

                    </thead>

                    <tbody>

                      {cardPayments.map((card) => (

                        <tr
                          key={card.id}
                          className="border-t border-white/10 transition hover:bg-white/[0.025]"
                        >

                          <td className="max-w-44 break-words p-4 font-semibold">
                            {card.name}
                          </td>

                          <td className="p-4 text-slate-300">
                            {money(card.balance)}
                          </td>

                          <td className="p-4 text-slate-300">
                            {money(card.limit)}
                          </td>

                          <td
                            className="p-4 font-bold"
                            style={{
                              color: getColor(
                                card.percentage
                              ),
                            }}
                          >
                            {card.percentage.toFixed(
                              1
                            )}
                            %
                          </td>

                          <td className="p-4 font-bold text-emerald-300">
                            {money(card.payment)}
                          </td>

                          <td className="p-4 text-slate-300">
                            {money(
                              card.projectedBalance
                            )}
                          </td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

                {/* MOBILE PAYMENT CARDS */}

                <div className="mt-6 space-y-4 md:hidden">

                  {cardPayments.map((card) => (

                    <div
                      key={card.id}
                      className="rounded-2xl border border-white/10 bg-black/20 p-5"
                    >

                      <div className="flex items-center justify-between gap-3">

                        <p className="min-w-0 break-words font-bold">
                          {card.name}
                        </p>

                        <span
                          className="shrink-0 text-sm font-bold"
                          style={{
                            color: getColor(
                              card.percentage
                            ),
                          }}
                        >
                          {card.percentage.toFixed(
                            1
                          )}
                          %
                        </span>

                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-4 text-sm">

                        <div>

                          <p className="text-xs text-slate-500">
                            Balance
                          </p>

                          <p className="mt-2 break-words font-semibold">
                            {money(card.balance)}
                          </p>

                        </div>

                        <div>

                          <p className="text-xs text-slate-500">
                            Credit limit
                          </p>

                          <p className="mt-2 break-words font-semibold">
                            {money(card.limit)}
                          </p>

                        </div>

                        <div>

                          <p className="text-xs text-slate-500">
                            Payment needed
                          </p>

                          <p className="mt-2 break-words font-bold text-emerald-300">
                            {money(card.payment)}
                          </p>

                        </div>

                        <div>

                          <p className="text-xs text-slate-500">
                            New balance
                          </p>

                          <p className="mt-2 break-words font-semibold">
                            {money(
                              card.projectedBalance
                            )}
                          </p>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

                {/* PAYMENT STRATEGY COMPARISON */}

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-6">

                    <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                      Strategy A
                    </p>

                    <h3 className="mt-3 font-bold">
                      Reach Overall Target
                    </h3>

                    <p className="mt-4 break-words text-3xl font-black text-cyan-300">
                      {money(paymentNeeded)}
                    </p>

                    <p className="mt-3 text-xs leading-6 text-slate-400">
                      Minimum combined balance
                      reduction needed to reach
                      your overall utilization target.
                      Some individual cards may
                      remain above the target.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-emerald-300/15 bg-emerald-300/5 p-6">

                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                      Strategy B
                    </p>

                    <h3 className="mt-3 font-bold">
                      Reach Target on Every Card
                    </h3>

                    <p className="mt-4 break-words text-3xl font-black text-emerald-300">
                      {money(individualPaymentsTotal)}
                    </p>

                    <p className="mt-3 text-xs leading-6 text-slate-400">
                      Total payments required to
                      reduce every individual card
                      to or below your selected
                      utilization target.
                    </p>

                  </div>

                </div>

              </>

            ) : (

              <div className="mt-7 flex min-h-48 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black/15 p-7 text-center">

                <Icon
                  name="target"
                  className="h-12 w-12 text-slate-600"
                />

                <p className="mt-4 font-semibold text-slate-400">
                  Your payment breakdown will appear here.
                </p>

                <p className="mt-3 max-w-md text-xs leading-6 text-slate-500">
                  Enter your credit cards and choose
                  a utilization target to compare
                  your available repayment strategies.
                </p>

              </div>

            )}

          </div>

        </section>

        {/* UTILIZATION EDUCATION */}

        <section className="mt-12">

          <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
            Understand your numbers
          </p>

          <h2 className="mt-4 text-3xl font-black">
            Credit Utilization Explained
          </h2>

          <div className="mt-7 grid gap-5 md:grid-cols-3">

            {[
              {
                icon: "chart",
                title: "Overall Utilization",
                description:
                  "Add your revolving credit balances and divide them by your combined credit limits. Multiply by 100 to get your overall utilization percentage.",
              },
              {
                icon: "card",
                title: "Individual Utilization",
                description:
                  "Each credit card also has its own utilization percentage. A heavily utilized card may matter even when your combined utilization is relatively low.",
              },
              {
                icon: "target",
                title: "Choosing a Target",
                description:
                  "Lower reported utilization can generally be beneficial, but no single percentage guarantees a particular score or credit approval.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className={`${panel} lift-card`}
              >

                <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-300/10 text-cyan-300">

                  <Icon name={item.icon} />

                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* EDUCATIONAL DISCLAIMER */}

        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">

          <Icon
            name="shield"
            className="h-6 w-6 shrink-0 text-cyan-300"
          />

          <div>

            <h3 className="text-sm font-bold">
              Important Information
            </h3>

            <p className="mt-3 text-xs leading-6 text-slate-400">
              Calculator results are educational
              estimates and assume fixed credit
              limits, no additional purchases,
              no new fees, and no additional
              interest. Actual reported balances
              may differ from current balances.
              Utilization color ranges are
              illustrative, not official credit
              scoring thresholds. Always make
              your required minimum payments
              on time. No specific utilization
              percentage guarantees credit
              score improvement.
            </p>

            <p className="mt-3 text-xs leading-6 text-slate-400">
              Your entries are held in this page's
              temporary React state. This calculator
              does not save the entries to a database,
              and refreshing the page clears them.
              Do not enter account numbers or other
              sensitive account identifiers.
            </p>

          </div>

        </div>

        {/* MORE FINANCIAL TOOLS */}

        <section className="mt-16">

          <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
            Explore more
          </p>

          <h2 className="mt-4 text-3xl font-black">
            Your Financial Toolkit
          </h2>

          <div className="mt-7 grid gap-5 md:grid-cols-3">

            {[
              {
                title: "Credit Card Payoff Planner",
                description:
                  "Estimate repayment timelines and interest costs.",
                href: "/credit-payoff",
                icon: "chart",
              },
              {
                title: "0% APR Payment Planner",
                description:
                  "Plan payments before promotional financing expires.",
                href: "/zero-apr-planner",
                icon: "wallet",
              },
              {
                title: "Travel Rewards Calculator",
                description:
                  "Estimate your points, miles and rewards value.",
                href: "/travel-rewards-calculator",
                icon: "card",
              },
            ].map((tool) => (

              <Link
                key={tool.href}
                href={tool.href}
                className={`${panel} lift-card group`}
              >

                <div className="grid h-12 w-12 place-items-center rounded-xl bg-violet-300/10 text-violet-300">

                  <Icon name={tool.icon} />

                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {tool.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {tool.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-bold text-cyan-300">

                  Open Calculator

                  <Icon
                    name="arrow"
                    className="h-5 w-5 transition group-hover:translate-x-1"
                  />

                </div>

              </Link>

            ))}

          </div>

        </section>

        {/* BOOKING SECTION */}

        <section className="relative mt-16 overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-[#112938] via-[#151c36] to-[#251742] p-7 text-center sm:p-14">

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl" />

          <div className="relative">

            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Take the next step
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              Want help building a smarter
              credit strategy?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Explore your options, understand
              your credit profile and create a
              responsible plan for your
              financial goals.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

              <a
                href="https://calendly.com/robert-28-qbaj/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-300 to-violet-300 px-7 py-4 text-sm font-bold text-slate-950 transition hover:brightness-110"
              >

                Book Free Strategy Call

                <Icon
                  name="arrow"
                  className="h-5 w-5"
                />

              </a>

              <Link
                href="/intake"
                className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Complete Intake Form
              </Link>

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
            Educational information only. Not
            individualized financial, legal or tax
            advice. Credit scoring and approval
            outcomes are not guaranteed.
          </p>

        </div>

      </footer>

    </main>
  );
}