
"use client";

import { useState } from "react";
import Link from "next/link";

type PromoCard = {
  id: number;
  name: string;
  balance: string;
  expiration: string;
};

const emptyCard = (id: number): PromoCard => ({
  id,
  name: "",
  balance: "",
  expiration: "",
});

const currency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

const inputClass =
  "w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400";

function getMonths(expiration: string) {
  if (!expiration) return 0;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const end = new Date(`${expiration}T00:00:00`);

  if (!Number.isFinite(end.getTime()) || end <= today) {
    return 0;
  }

  let months = 0;

  // Count monthly payments starting today,
  // with the final payment before expiration.
  for (let i = 0; i < 1200; i++) {
    const paymentDate = new Date(
      today.getFullYear(),
      today.getMonth() + i,
      1
    );

    const lastDay = new Date(
      paymentDate.getFullYear(),
      paymentDate.getMonth() + 1,
      0
    ).getDate();

    paymentDate.setDate(
      Math.min(today.getDate(), lastDay)
    );

    if (paymentDate >= end) break;

    months++;
  }

  return months;
}

export default function ZeroAPRPlanner() {
  const [cards, setCards] = useState<PromoCard[]>([
    emptyCard(1),
  ]);

  const [budget, setBudget] = useState("");
  const [nextId, setNextId] = useState(2);

  function updateCard(
    id: number,
    field: "name" | "balance" | "expiration",
    value: string
  ) {
    setCards((previous) =>
      previous.map((card) =>
        card.id === id
          ? { ...card, [field]: value }
          : card
      )
    );
  }

  function addCard() {
    setCards((previous) => [
      ...previous,
      emptyCard(nextId),
    ]);

    setNextId((previous) => previous + 1);
  }

  function removeCard(id: number) {
    if (cards.length === 1) return;

    setCards((previous) =>
      previous.filter((card) => card.id !== id)
    );
  }

  function resetPlanner() {
    setCards([emptyCard(1)]);
    setNextId(2);
    setBudget("");
  }

  const results = cards.map((card) => {
    const balance = Number(card.balance);
    const months = getMonths(card.expiration);

    const valid =
      card.balance.trim() !== "" &&
      Number.isFinite(balance) &&
      balance >= 0 &&
      months > 0;

    const monthlyPayment = valid
      ? Math.ceil((balance / months) * 100) / 100
      : 0;

    return {
      ...card,
      numericBalance: balance,
      months,
      valid,
      monthlyPayment,
    };
  });

  const validCards = results.filter(
    (card) => card.valid
  );

  const allValid = results.every(
    (card) => card.valid
  );

  const totalBalance = validCards.reduce(
    (total, card) => total + card.numericBalance,
    0
  );

  const totalMonthlyPayment = validCards.reduce(
    (total, card) => total + card.monthlyPayment,
    0
  );

  const hasBudget =
    budget.trim() !== "" &&
    Number.isFinite(Number(budget)) &&
    Number(budget) >= 0;

  const monthlyBudget = hasBudget
    ? Number(budget)
    : 0;

  const difference =
    monthlyBudget - totalMonthlyPayment;

  const nearestExpiration = allValid
    ? [...validCards].sort((a, b) =>
        a.expiration.localeCompare(b.expiration)
      )[0]
    : null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#071f30] via-[#0d1224] to-[#241044] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* NAVIGATION */}
        <header className="mb-16 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-bold">
            Credit
            <span className="text-cyan-300">
              Leverage
            </span>
          </Link>

          <Link
            href="/#tools"
            className="rounded-full border border-white/20 px-5 py-3 text-sm transition hover:bg-white/10"
          >
            Back to Tools
          </Link>
        </header>

        {/* HERO */}
        <section className="mb-14 text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Free Financial Tool
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            0% APR
            <span className="block bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              Payment Planner
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            Build a repayment plan for your promotional
            credit card balances and prepare to pay them
            off before your introductory rates expire.
          </p>
        </section>

        {/* CALCULATOR */}
        <div className="grid items-start gap-8 lg:grid-cols-2">

          {/* CREDIT CARD INPUTS */}
          <section>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Your Promotional Balances
              </h2>

              <button
                type="button"
                onClick={resetPlanner}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Reset
              </button>
            </div>

            <div className="space-y-5">
              {results.map((card, index) => (
                <div
                  key={card.id}
                  className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                      Card {index + 1}
                    </p>

                    <button
                      type="button"
                      onClick={() => removeCard(card.id)}
                      disabled={cards.length === 1}
                      className="rounded-xl border border-rose-400/30 px-4 py-2 text-sm text-rose-300 transition hover:bg-rose-400/10 disabled:opacity-30"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="space-y-5">
                    <label className="block">
                      <span className="mb-2 block text-sm text-slate-300">
                        Credit Card Name
                      </span>

                      <input
                        type="text"
                        value={card.name}
                        placeholder="e.g. Chase Freedom Flex"
                        onChange={(e) =>
                          updateCard(
                            card.id,
                            "name",
                            e.target.value
                          )
                        }
                        className={inputClass}
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm text-slate-300">
                        Promotional Balance ($)
                      </span>

                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={card.balance}
                        placeholder="Enter your balance"
                        onChange={(e) =>
                          updateCard(
                            card.id,
                            "balance",
                            e.target.value
                          )
                        }
                        className={inputClass}
                      />

                      {card.balance !== "" &&
                        (!Number.isFinite(
                          Number(card.balance)
                        ) ||
                          Number(card.balance) < 0) && (
                          <p className="mt-2 text-sm text-rose-300">
                            Enter a valid nonnegative balance.
                          </p>
                        )}
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm text-slate-300">
                        0% APR Expiration Date
                      </span>

                      <input
                        type="date"
                        value={card.expiration}
                        onChange={(e) =>
                          updateCard(
                            card.id,
                            "expiration",
                            e.target.value
                          )
                        }
                        className={`${inputClass} [color-scheme:dark]`}
                      />
                    </label>
                  </div>

                  {card.expiration &&
                    card.months === 0 && (
                      <p className="mt-4 text-sm text-rose-300">
                        Enter a valid future promotional
                        expiration date.
                      </p>
                    )}

                  {/* INDIVIDUAL RESULTS */}
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                    <div>
                      <p className="text-sm text-slate-400">
                        Payments Remaining
                      </p>

                      <p className="mt-2 text-xl font-bold">
                        {card.months > 0
                          ? card.months
                          : "—"}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-400">
                        Monthly Payment
                      </p>

                      <p className="mt-2 text-xl font-bold text-cyan-300">
                        {card.valid
                          ? currency(card.monthlyPayment)
                          : "—"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addCard}
              className="mt-5 w-full rounded-2xl border border-dashed border-cyan-400/40 bg-cyan-400/5 py-5 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
            >
              + Add Another Credit Card
            </button>
          </section>

          {/* REPAYMENT OVERVIEW */}
          <section className="rounded-3xl border border-cyan-300/20 bg-white/10 p-7 backdrop-blur-xl lg:sticky lg:top-8">
            <h2 className="mb-7 text-2xl font-bold">
              Your Repayment Overview
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-950/50 p-5">
                <p className="text-sm text-slate-400">
                  Total Promotional Debt
                </p>

                <p className="mt-3 text-2xl font-bold">
                  {allValid
                    ? currency(totalBalance)
                    : "—"}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-950/50 p-5">
                <p className="text-sm text-slate-400">
                  Credit Cards
                </p>

                <p className="mt-3 text-2xl font-bold">
                  {cards.length}
                </p>
              </div>
            </div>

            <div className="my-8">
              <p className="text-slate-300">
                Combined Monthly Payment Target
              </p>

              <p className="mt-3 text-4xl font-bold text-cyan-300 md:text-5xl">
                {allValid
                  ? currency(totalMonthlyPayment)
                  : "—"}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Estimated combined monthly payments
                starting today to repay each balance
                before its promotional offer expires.
              </p>
            </div>

            {/* MONTHLY BUDGET */}
            <div className="rounded-2xl bg-slate-950/50 p-5">
              <label className="block">
                <span className="mb-3 block text-sm text-slate-300">
                  Your Monthly Payment Budget ($)
                </span>

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={budget}
                  placeholder="Enter your monthly budget"
                  onChange={(e) =>
                    setBudget(e.target.value)
                  }
                  className={inputClass}
                />
              </label>

              {budget !== "" && !hasBudget && (
                <p className="mt-3 text-sm text-rose-300">
                  Enter a valid nonnegative budget.
                </p>
              )}

              {allValid && hasBudget && (
                <div className="mt-5">
                  <div className="mb-3 flex flex-wrap justify-between gap-2 text-sm">
                    <span className="text-slate-400">
                      Monthly Target Coverage
                    </span>

                    <span className="font-bold text-cyan-300">
                      {totalMonthlyPayment > 0
                        ? (
                            (monthlyBudget /
                              totalMonthlyPayment) *
                            100
                          ).toFixed(0)
                        : "100"}
                      %
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        difference >= 0
                          ? "bg-gradient-to-r from-cyan-400 to-emerald-400"
                          : "bg-gradient-to-r from-orange-400 to-rose-500"
                      }`}
                      style={{
                        width: `${
                          totalMonthlyPayment > 0
                            ? Math.min(
                                100,
                                (monthlyBudget /
                                  totalMonthlyPayment) *
                                  100
                              )
                            : 100
                        }%`,
                      }}
                    />
                  </div>

                  <div
                    className={`mt-5 rounded-xl border p-4 ${
                      difference >= 0
                        ? "border-emerald-400/20 bg-emerald-400/10"
                        : "border-rose-400/20 bg-rose-400/10"
                    }`}
                  >
                    <p
                      className={`font-semibold ${
                        difference >= 0
                          ? "text-emerald-300"
                          : "text-rose-300"
                      }`}
                    >
                      {difference >= 0
                        ? "Your budget covers the target"
                        : "Monthly payment shortfall"}
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {currency(Math.abs(difference))}
                    </p>

                    <p className="mt-2 text-sm text-slate-300">
                      {difference >= 0
                        ? "Remaining monthly budget after covering your estimated payment targets."
                        : "Additional monthly budget needed for this equal-payment plan."}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* NEXT EXPIRATION */}
            {nearestExpiration && (
              <div className="mt-5 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5">
                <p className="text-sm font-semibold text-amber-300">
                  Next Promotional Expiration
                </p>

                <p className="mt-2 text-xl font-bold">
                  {nearestExpiration.name ||
                    "Unnamed Credit Card"}
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  {new Date(
                    `${nearestExpiration.expiration}T00:00:00`
                  ).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            )}

            {!allValid && (
              <p className="mt-5 text-sm text-slate-400">
                Enter a balance and future expiration date
                for every card to generate your complete
                repayment overview.
              </p>
            )}
          </section>
        </div>

        {/* REPAYMENT BREAKDOWN */}
        {validCards.length > 0 && (
          <section className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-7">
            <h2 className="text-2xl font-bold">
              Repayment Breakdown
            </h2>

            <p className="mt-3 text-slate-400">
              Review payment targets in order of
              promotional expiration.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[650px] text-left">
                <thead>
                  <tr className="border-b border-white/10 text-sm text-slate-400">
                    <th className="px-3 py-4">
                      Credit Card
                    </th>
                    <th className="px-3 py-4">
                      Balance
                    </th>
                    <th className="px-3 py-4">
                      Expiration
                    </th>
                    <th className="px-3 py-4">
                      Payments
                    </th>
                    <th className="px-3 py-4">
                      Monthly Target
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[...validCards]
                    .sort((a, b) =>
                      a.expiration.localeCompare(
                        b.expiration
                      )
                    )
                    .map((card) => (
                      <tr
                        key={card.id}
                        className="border-b border-white/10"
                      >
                        <td className="px-3 py-5 font-semibold">
                          {card.name || "Unnamed Card"}
                        </td>

                        <td className="px-3 py-5">
                          {currency(card.numericBalance)}
                        </td>

                        <td className="px-3 py-5">
                          {card.expiration}
                        </td>

                        <td className="px-3 py-5">
                          {card.months}
                        </td>

                        <td className="px-3 py-5 font-bold text-cyan-300">
                          {currency(card.monthlyPayment)}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* EDUCATIONAL SECTION */}
        <section className="mt-20">
          <div className="mb-10 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Credit Education
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Use 0% APR strategically.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Promotional financing can be useful when
              paired with a realistic repayment plan.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: "📅",
                title: "Know Your Expiration Date",
                text: "Review your credit card agreement and confirm exactly when your promotional interest rate expires.",
              },
              {
                icon: "💳",
                title: "Never Miss a Payment",
                text: "Make at least the required minimum payment by every due date, even during a promotional period.",
              },
              {
                icon: "🎯",
                title: "Build a Repayment Buffer",
                text: "Aim to pay off promotional balances early so unexpected expenses or processing delays do not disrupt your plan.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-5 text-3xl">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* RELATED TOOLS */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">
            Explore More Free Tools
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <Link
              href="/credit-utilization"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/50 hover:bg-white/10"
            >
              <h3 className="text-xl font-bold">
                Credit Utilization Calculator
              </h3>

              <p className="mt-3 text-slate-400">
                Calculate individual and combined credit
                utilization across multiple credit cards.
              </p>

              <p className="mt-5 font-semibold text-cyan-300">
                Open Calculator →
              </p>
            </Link>

            <Link
              href="/credit-payoff"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/50 hover:bg-white/10"
            >
              <h3 className="text-xl font-bold">
                Credit Card Payoff Planner
              </h3>

              <p className="mt-3 text-slate-400">
                Explore repayment timelines and estimated
                interest costs.
              </p>

              <p className="mt-5 font-semibold text-cyan-300">
                Open Payoff Planner →
              </p>
            </Link>
          </div>
        </section>

        {/* BOOKING SECTION */}
        <section className="mt-16 rounded-3xl border border-cyan-300/20 bg-gradient-to-r from-cyan-400/10 to-violet-400/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Build a smarter credit strategy.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Explore your financial goals and discuss
            available educational resources with
            CreditLeverage.
          </p>

          <a
            href="https://calendly.com/robert-28-qbaj/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-8 py-4 font-bold text-slate-950 transition hover:opacity-90"
          >
            Book Free Strategy Call
          </a>
        </section>

        {/* DISCLAIMER */}
        <footer className="mt-14 border-t border-white/10 py-8 text-center">
          <p className="mx-auto max-w-4xl text-xs leading-relaxed text-slate-500">
            This calculator is for educational and
            informational purposes only. Estimates assume
            monthly payments beginning today, no new
            purchases, no additional fees, and a 0%
            interest rate throughout the promotional
            period. Actual required minimum payments,
            billing dates, processing times, deferred
            interest terms and promotional conditions may
            vary. Always follow your card issuer's
            requirements. This tool does not provide
            individualized financial advice.
          </p>

          <p className="mt-5 text-sm text-slate-500">
            © {new Date().getFullYear()} CreditLeverage
          </p>
        </footer>
      </div>
    </main>
  );
}
