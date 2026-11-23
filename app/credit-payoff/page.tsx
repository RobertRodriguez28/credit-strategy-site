
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type CreditCard = {
  id: number;
  name: string;
  balance: string;
  apr: string;
  minimum: string;
};

type Debt = {
  id: number;
  name: string;
  balance: number;
  apr: number;
  minimum: number;
};

type Strategy = "avalanche" | "snowball";

type MonthResult = {
  month: number;
  payment: number;
  interest: number;
  remaining: number;
};

type PayoffResult = {
  months: number;
  interest: number;
  totalPaid: number;
  schedule: MonthResult[];
  completed: boolean;
};

const money = (value: number) =>
  value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

const round = (value: number) =>
  Math.round(value * 100) / 100;

const emptyCard = (id: number): CreditCard => ({
  id,
  name: "",
  balance: "",
  apr: "",
  minimum: "",
});

const inputClass =
  "w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20";

const panelClass =
  "rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl sm:p-8";

function calculatePayoff(
  cards: Debt[],
  budget: number,
  strategy: Strategy
): PayoffResult {
  const debts = cards.map((card) => ({ ...card }));

  let totalInterest = 0;
  let totalPaid = 0;
  let month = 0;

  const schedule: MonthResult[] = [];
  const maxMonths = 1200;

  while (
    debts.some((debt) => debt.balance > 0.001) &&
    month < maxMonths
  ) {
    month++;

    let monthlyInterest = 0;
    let monthlyPayment = 0;
    let remainingBudget = round(budget);

    // Estimate monthly interest.
    debts.forEach((debt) => {
      if (debt.balance > 0) {
        const interest = round(
          debt.balance * (debt.apr / 100 / 12)
        );

        debt.balance = round(debt.balance + interest);
        monthlyInterest += interest;
      }
    });

    // Pay the minimum on every outstanding card.
    debts.forEach((debt) => {
      if (debt.balance > 0) {
        const payment = Math.min(
          debt.balance,
          debt.minimum,
          remainingBudget
        );

        debt.balance = round(debt.balance - payment);
        remainingBudget = round(remainingBudget - payment);
        monthlyPayment += payment;
      }
    });

    // Determine which card receives extra payments.
    const priority = debts
      .filter((debt) => debt.balance > 0)
      .sort((a, b) => {
        if (strategy === "avalanche") {
          return b.apr - a.apr || a.balance - b.balance;
        }

        return a.balance - b.balance || b.apr - a.apr;
      });

    // Apply all remaining monthly funds.
    priority.forEach((debt) => {
      if (remainingBudget > 0) {
        const payment = Math.min(
          debt.balance,
          remainingBudget
        );

        debt.balance = round(debt.balance - payment);
        remainingBudget = round(remainingBudget - payment);
        monthlyPayment += payment;
      }
    });

    totalInterest = round(
      totalInterest + monthlyInterest
    );

    totalPaid = round(totalPaid + monthlyPayment);

    const remaining = round(
      debts.reduce(
        (sum, debt) => sum + debt.balance,
        0
      )
    );

    schedule.push({
      month,
      payment: round(monthlyPayment),
      interest: round(monthlyInterest),
      remaining,
    });

    if (remaining <= 0) break;

    if (remaining > 1000000000000) break;
  }

  return {
    months: month,
    interest: totalInterest,
    totalPaid,
    schedule,
    completed: debts.every(
      (debt) => debt.balance <= 0.001
    ),
  };
}

function payoffDate(months: number) {
  const date = new Date();

  date.setDate(1);
  date.setMonth(date.getMonth() + months);

  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

function formatDuration(months: number) {
  const years = Math.floor(months / 12);
  const remaining = months % 12;

  if (years === 0) {
    return `${months} ${months === 1 ? "month" : "months"}`;
  }

  return `${years} ${years === 1 ? "year" : "years"}${
    remaining
      ? `, ${remaining} ${remaining === 1 ? "month" : "months"}`
      : ""
  }`;
}

export default function CreditPayoffPage() {
  const [cards, setCards] = useState<CreditCard[]>([
    emptyCard(1),
  ]);

  const [nextId, setNextId] = useState(2);

  const [budget, setBudget] = useState("");

  const [strategy, setStrategy] =
    useState<Strategy>("avalanche");

  const [calculated, setCalculated] = useState(false);

  const [showSchedule, setShowSchedule] = useState(false);

  function updateCard(
    id: number,
    field: keyof Omit<CreditCard, "id">,
    value: string
  ) {
    setCards((previous) =>
      previous.map((card) =>
        card.id === id
          ? { ...card, [field]: value }
          : card
      )
    );

    setCalculated(false);
  }

  function addCard() {
    setCards((previous) => [
      ...previous,
      emptyCard(nextId),
    ]);

    setNextId((previous) => previous + 1);
    setCalculated(false);
  }

  function removeCard(id: number) {
    setCards((previous) =>
      previous.filter((card) => card.id !== id)
    );

    setCalculated(false);
  }

  function resetPlanner() {
    setCards([emptyCard(1)]);
    setNextId(2);
    setBudget("");
    setStrategy("avalanche");
    setCalculated(false);
    setShowSchedule(false);
  }

  const cardsValid = cards.every(
    (card) =>
      card.balance.trim() !== "" &&
      card.apr.trim() !== "" &&
      card.minimum.trim() !== "" &&
      Number.isFinite(Number(card.balance)) &&
      Number.isFinite(Number(card.apr)) &&
      Number.isFinite(Number(card.minimum)) &&
      Number(card.balance) > 0 &&
      Number(card.apr) >= 0 &&
      Number(card.apr) <= 100 &&
      Number(card.minimum) > 0 &&
      Number(card.balance) <= 100000000 &&
      Number(card.minimum) <= 100000000
  );

  const debts: Debt[] = cards.map((card, index) => ({
    id: card.id,
    name: card.name.trim() || `Card ${index + 1}`,
    balance: round(Number(card.balance)),
    apr: Number(card.apr),
    minimum: round(Number(card.minimum)),
  }));

  const totalDebt = round(
    debts.reduce((sum, card) => sum + card.balance, 0)
  );

  const totalMinimum = round(
    debts.reduce(
      (sum, card) =>
        sum + Math.min(card.minimum, card.balance),
      0
    )
  );

  const monthlyBudget = round(Number(budget));

  const validBudget =
    budget.trim() !== "" &&
    Number.isFinite(monthlyBudget) &&
    monthlyBudget > 0 &&
    monthlyBudget <= 100000000;

  const canCalculate =
    cardsValid &&
    validBudget &&
    monthlyBudget >= totalMinimum;

  const firstMonthInterest = debts.reduce(
    (sum, card) =>
      sum + round(card.balance * card.apr / 1200),
    0
  );

  const results = useMemo(() => {
    if (!calculated || !canCalculate) return null;

    const validDebts = cards.map((card, index) => ({
      id: card.id,
      name: card.name.trim() || `Card ${index + 1}`,
      balance: round(Number(card.balance)),
      apr: Number(card.apr),
      minimum: round(Number(card.minimum)),
    }));

    return {
      avalanche: calculatePayoff(
        validDebts,
        round(Number(budget)),
        "avalanche"
      ),
      snowball: calculatePayoff(
        validDebts,
        round(Number(budget)),
        "snowball"
      ),
    };
  }, [cards, budget, calculated, canCalculate]);

  const selectedResult = results
    ? results[strategy]
    : null;

  const interestDifference =
    results &&
    results.avalanche.completed &&
    results.snowball.completed
      ? Math.abs(
          results.avalanche.interest -
          results.snowball.interest
        )
      : 0;

  const cheaperStrategy =
    results &&
    results.avalanche.interest <=
      results.snowball.interest
      ? "Debt Avalanche"
      : "Debt Snowball";

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#071f30] via-[#0d1226] to-[#241344] text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">

        {/* NAVIGATION */}

        <header className="mb-16 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="text-2xl font-bold sm:text-3xl"
          >
            Credit
            <span className="text-cyan-300">
              Leverage
            </span>
          </Link>

          <Link
            href="/#tools"
            className="rounded-full border border-white/20 px-6 py-3 text-sm transition hover:bg-white/10"
          >
            Back to Tools
          </Link>
        </header>

        {/* HERO */}

        <section className="mx-auto mb-14 max-w-4xl text-center">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            Free Financial Tool
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
            Credit Card
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              Payoff Planner
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            Take control of your credit card debt.
            Compare repayment strategies, estimate interest,
            and build a personalized path toward becoming
            debt-free.
          </p>
        </section>

        {/* PLANNER GRID */}

        <div className="grid items-start gap-7 lg:grid-cols-2">

          {/* CARD INPUTS */}

          <section>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Your Credit Cards
              </h2>

              <button
                type="button"
                onClick={resetPlanner}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Reset all
              </button>
            </div>

            <div className="space-y-5">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className={panelClass}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                      Credit Card {index + 1}
                    </span>

                    <button
                      type="button"
                      disabled={cards.length === 1}
                      onClick={() => removeCard(card.id)}
                      className="rounded-lg border border-rose-400/30 px-3 py-2 text-sm text-rose-300 transition hover:bg-rose-400/10 disabled:opacity-30"
                    >
                      Remove
                    </button>
                  </div>

                  <label className="mb-2 block text-sm text-slate-300">
                    Card Name (Optional)
                  </label>

                  <input
                    aria-label={`Card ${index + 1} name`}
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

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-slate-300">
                        Current Balance ($)
                      </label>

                      <input
                        aria-label={`Card ${index + 1} balance`}
                        type="number"
                        min="0.01"
                        step="0.01"
                        placeholder="e.g. 2500"
                        value={card.balance}
                        onChange={(e) =>
                          updateCard(
                            card.id,
                            "balance",
                            e.target.value
                          )
                        }
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-slate-300">
                        Annual Interest Rate (%)
                      </label>

                      <input
                        aria-label={`Card ${index + 1} APR`}
                        type="number"
                        min="0"
                        max="100"
                        step="0.01"
                        placeholder="e.g. 24.99"
                        value={card.apr}
                        onChange={(e) =>
                          updateCard(
                            card.id,
                            "apr",
                            e.target.value
                          )
                        }
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="mb-2 block text-sm text-slate-300">
                      Monthly Minimum Payment ($)
                    </label>

                    <input
                      aria-label={`Card ${index + 1} minimum payment`}
                      type="number"
                      min="0.01"
                      step="0.01"
                      placeholder="e.g. 75"
                      value={card.minimum}
                      onChange={(e) =>
                        updateCard(
                          card.id,
                          "minimum",
                          e.target.value
                        )
                      }
                      className={inputClass}
                    />

                    <p className="mt-2 text-xs text-slate-400">
                      Enter the minimum payment shown on
                      your latest statement.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addCard}
              className="mt-5 w-full rounded-2xl border border-dashed border-cyan-400/50 bg-cyan-400/5 py-5 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
            >
              + Add Another Credit Card
            </button>

            {/* MONTHLY BUDGET */}

            <div className={`${panelClass} mt-7`}>
              <h2 className="mb-2 text-xl font-bold">
                Monthly Repayment Budget
              </h2>

              <p className="mb-5 text-sm leading-relaxed text-slate-400">
                Enter the total amount you can afford to
                pay toward all your credit cards every month,
                including minimum payments.
              </p>

              <input
                aria-label="Total monthly repayment budget"
                type="number"
                min="0.01"
                step="0.01"
                placeholder="e.g. 500"
                value={budget}
                onChange={(e) => {
                  setBudget(e.target.value);
                  setCalculated(false);
                }}
                className={inputClass}
              />

              {cardsValid && (
                <div className="mt-4 flex justify-between gap-3 text-sm">
                  <span className="text-slate-400">
                    Combined minimum payments
                  </span>

                  <span className="font-semibold text-white">
                    {money(totalMinimum)}
                  </span>
                </div>
              )}

              {cardsValid &&
                validBudget &&
                monthlyBudget < totalMinimum && (
                  <p
                    role="alert"
                    className="mt-4 rounded-xl bg-rose-400/10 p-4 text-sm text-rose-300"
                  >
                    Your monthly budget must cover at least{" "}
                    {money(totalMinimum)} in combined
                    minimum payments.
                  </p>
                )}

              {cardsValid &&
                validBudget &&
                monthlyBudget <= firstMonthInterest && (
                  <p className="mt-3 text-sm text-amber-300">
                    Your budget may not cover the estimated
                    monthly interest. Your debt could grow.
                  </p>
                )}
            </div>

            {/* CALCULATE BUTTON */}

            <button
              type="button"
              disabled={!canCalculate}
              onClick={() => {
                setCalculated(true);
                setShowSchedule(false);
              }}
              className="mt-6 w-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-8 py-5 text-lg font-bold text-slate-950 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Calculate My Payoff Plan
            </button>

            {!canCalculate && (
              <p className="mt-3 text-center text-sm text-slate-400">
                Complete all financial fields and enter a
                valid monthly budget to continue.
              </p>
            )}
          </section>

          {/* RESULTS PANEL */}

          <section className="space-y-6 lg:sticky lg:top-6">
            <div className="rounded-3xl border border-cyan-400/20 bg-white/10 p-6 backdrop-blur-xl sm:p-8">
              <h2 className="mb-7 text-2xl font-bold">
                Your Payoff Overview
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-950/50 p-4">
                  <p className="mb-2 text-xs text-slate-400">
                    Total Credit Card Debt
                  </p>

                  <p className="text-xl font-bold sm:text-2xl">
                    {cardsValid ? money(totalDebt) : "—"}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-950/50 p-4">
                  <p className="mb-2 text-xs text-slate-400">
                    Monthly Budget
                  </p>

                  <p className="text-xl font-bold sm:text-2xl">
                    {validBudget
                      ? money(monthlyBudget)
                      : "—"}
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <p className="mb-2 text-sm text-slate-300">
                  Estimated Time Until Debt-Free
                </p>

                <p className="text-4xl font-bold text-cyan-300 sm:text-5xl">
                  {selectedResult
                    ? selectedResult.completed
                      ? formatDuration(
                          selectedResult.months
                        )
                      : "Not reached"
                    : "—"}
                </p>

                {selectedResult?.completed && (
                  <p className="mt-3 text-sm text-slate-400">
                    Estimated payoff date:{" "}
                    <span className="font-semibold text-white">
                      {payoffDate(selectedResult.months)}
                    </span>
                  </p>
                )}
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-slate-950/50 p-4">
                  <p className="mb-2 text-xs text-slate-400">
                    Estimated Total Interest
                  </p>

                  <p className="text-xl font-bold text-amber-300">
                    {selectedResult?.completed
                      ? money(selectedResult.interest)
                      : "—"}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-950/50 p-4">
                  <p className="mb-2 text-xs text-slate-400">
                    Total Amount Paid
                  </p>

                  <p className="text-xl font-bold">
                    {selectedResult?.completed
                      ? money(selectedResult.totalPaid)
                      : "—"}
                  </p>
                </div>
              </div>

              {/* STRATEGY SELECTION */}

              <div className="mt-7">
                <p className="mb-3 font-semibold">
                  Choose Your Repayment Strategy
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    aria-pressed={
                      strategy === "avalanche"
                    }
                    onClick={() =>
                      setStrategy("avalanche")
                    }
                    className={`rounded-xl border p-4 text-left transition ${
                      strategy === "avalanche"
                        ? "border-cyan-400 bg-cyan-400/10"
                        : "border-white/10 bg-slate-950/30 hover:bg-white/10"
                    }`}
                  >
                    <p className="font-bold text-cyan-300">
                      Avalanche
                    </p>

                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      Highest APR debt first
                    </p>
                  </button>

                  <button
                    type="button"
                    aria-pressed={
                      strategy === "snowball"
                    }
                    onClick={() =>
                      setStrategy("snowball")
                    }
                    className={`rounded-xl border p-4 text-left transition ${
                      strategy === "snowball"
                        ? "border-violet-400 bg-violet-400/10"
                        : "border-white/10 bg-slate-950/30 hover:bg-white/10"
                    }`}
                  >
                    <p className="font-bold text-violet-300">
                      Snowball
                    </p>

                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      Smallest balance first
                    </p>
                  </button>
                </div>
              </div>

              {!selectedResult && (
                <div className="mt-6 rounded-xl border border-white/10 bg-slate-950/30 p-5 text-center">
                  <p className="text-sm leading-relaxed text-slate-400">
                    Enter your credit card information
                    and calculate your plan to see your
                    personalized results here.
                  </p>
                </div>
              )}

              {selectedResult &&
                !selectedResult.completed && (
                  <div
                    role="alert"
                    className="mt-6 rounded-xl bg-amber-400/10 p-4 text-sm text-amber-300"
                  >
                    This repayment plan did not reach
                    a zero balance within the simulation
                    limit of 100 years. Consider increasing
                    your monthly budget or exploring
                    lower-interest options.
                  </div>
                )}
            </div>

            {/* STRATEGY COMPARISON */}

            {results && (
              <div className={panelClass}>
                <h2 className="mb-5 text-xl font-bold">
                  Strategy Comparison
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  {(
                    ["avalanche", "snowball"] as Strategy[]
                  ).map((method) => {
                    const result = results[method];

                    return (
                      <div
                        key={method}
                        className="rounded-2xl bg-slate-950/50 p-4"
                      >
                        <p
                          className={`mb-4 font-bold capitalize ${
                            method === "avalanche"
                              ? "text-cyan-300"
                              : "text-violet-300"
                          }`}
                        >
                          {method}
                        </p>

                        <p className="text-xs text-slate-400">
                          Payoff Time
                        </p>

                        <p className="mt-1 font-semibold">
                          {result.completed
                            ? formatDuration(result.months)
                            : "Not reached"}
                        </p>

                        <p className="mt-4 text-xs text-slate-400">
                          Total Interest
                        </p>

                        <p className="mt-1 font-semibold">
                          {result.completed
                            ? money(result.interest)
                            : "—"}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {results.avalanche.completed &&
                  results.snowball.completed && (
                    <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
                      <p className="font-semibold text-emerald-300">
                        {interestDifference > 0
                          ? `${cheaperStrategy} saves more interest`
                          : "Both strategies have the same estimated interest cost"}
                      </p>

                      {interestDifference > 0 && (
                        <p className="mt-2 text-sm text-slate-300">
                          Estimated interest savings:{" "}
                          <strong>
                            {money(interestDifference)}
                          </strong>
                        </p>
                      )}
                    </div>
                  )}
              </div>
            )}
          </section>
        </div>

        {/* PAYOFF SCHEDULE */}

        {selectedResult?.completed && (
          <section className={`${panelClass} mt-12`}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">
                  Monthly Payoff Schedule
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Follow your estimated debt reduction
                  month by month.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setShowSchedule(!showSchedule)
                }
                aria-expanded={showSchedule}
                className="rounded-full border border-cyan-400/30 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
              >
                {showSchedule
                  ? "Hide Schedule"
                  : "View Full Schedule"}
              </button>
            </div>

            {/* DEBT REDUCTION CHART */}

            <div className="mt-8">
              <div className="mb-4 flex justify-between text-sm text-slate-400">
                <span>Starting debt</span>
                <span>Debt-free</span>
              </div>

              <div className="flex h-44 items-end gap-1">
                {selectedResult.schedule
                  .filter(
                    (_, index, array) =>
                      index %
                        Math.max(
                          1,
                          Math.ceil(array.length / 24)
                        ) === 0 ||
                      index === array.length - 1
                  )
                  .map((row) => (
                    <div
                      key={row.month}
                      title={`Month ${row.month}: ${money(row.remaining)}`}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-violet-600 to-cyan-300"
                      style={{
                        height: `${Math.max(
                          1,
                          Math.min(
                            100,
                            (row.remaining /
                              Math.max(totalDebt, 1)) *
                              100
                          )
                        )}%`,
                      }}
                    />
                  ))}
              </div>

              <div className="mt-3 flex justify-between text-xs text-slate-500">
                <span>Month 1</span>
                <span>
                  Month {selectedResult.months}
                </span>
              </div>
            </div>

            {showSchedule && (
              <div className="mt-8 max-h-[500px] overflow-auto rounded-xl border border-white/10">
                <table className="w-full min-w-[500px] text-left text-sm">
                  <thead className="sticky top-0 bg-slate-900 text-slate-300">
                    <tr>
                      <th className="p-4">Month</th>
                      <th className="p-4">Payment</th>
                      <th className="p-4">Interest</th>
                      <th className="p-4">
                        Remaining Debt
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {selectedResult.schedule.map(
                      (row) => (
                        <tr
                          key={row.month}
                          className="border-t border-white/5 transition hover:bg-white/5"
                        >
                          <td className="p-4 text-slate-300">
                            {row.month}
                          </td>

                          <td className="p-4">
                            {money(row.payment)}
                          </td>

                          <td className="p-4 text-amber-300">
                            {money(row.interest)}
                          </td>

                          <td className="p-4 font-semibold text-cyan-300">
                            {money(row.remaining)}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}

        {/* EDUCATION SECTION */}

        <section className="mt-20">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-cyan-300">
              Understand Your Options
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Two strategies. One goal.
            </h2>

            <p className="mt-4 text-slate-400">
              Choose a repayment strategy that fits your
              financial situation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className={panelClass}>
              <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-4 text-3xl">
                📊
              </div>

              <h3 className="mb-4 text-2xl font-bold text-cyan-300">
                Debt Avalanche
              </h3>

              <p className="leading-relaxed text-slate-300">
                Make the required minimum payments on
                every credit card and direct additional
                funds toward the card with the highest
                interest rate.
              </p>

              <p className="mt-5 leading-relaxed text-slate-400">
                This approach generally minimizes
                interest costs when rates and payment
                budgets remain consistent.
              </p>
            </div>

            <div className={panelClass}>
              <div className="mb-5 inline-flex rounded-2xl bg-violet-400/10 p-4 text-3xl">
                🎯
              </div>

              <h3 className="mb-4 text-2xl font-bold text-violet-300">
                Debt Snowball
              </h3>

              <p className="leading-relaxed text-slate-300">
                Make minimum payments on every card and
                direct additional funds toward the card
                with the smallest outstanding balance.
              </p>

              <p className="mt-5 leading-relaxed text-slate-400">
                Paying off smaller balances first may
                provide motivation and help you maintain
                consistent repayment habits.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section className="mx-auto mt-20 max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                question:
                  "Which repayment strategy is better?",
                answer:
                  "The avalanche method generally reduces total interest costs, while the snowball method prioritizes smaller balances and may provide motivation. The best approach is one you can consistently maintain.",
              },
              {
                question:
                  "Can I use this calculator with a 0% APR credit card?",
                answer:
                  "Yes. Enter 0 as the APR. However, this calculator assumes the entered interest rate remains constant throughout repayment. If your promotional rate expires before payoff, your actual interest costs may be higher.",
              },
              {
                question:
                  "What happens when I pay off one credit card?",
                answer:
                  "The calculator redirects unused monthly payment funds toward the next outstanding credit card according to your selected repayment strategy. Your total monthly budget remains constant until the debt is paid off.",
              },
              {
                question:
                  "Does paying off credit cards improve my credit score?",
                answer:
                  "Reducing revolving balances may lower your credit utilization, which can positively affect credit scores. However, results vary based on your overall credit profile and the scoring model used.",
              },
              {
                question:
                  "Is my financial information stored?",
                answer:
                  "This calculator performs its calculations in your browser. The values entered into this planner are not saved by the calculator and are cleared when the page is refreshed.",
              },
            ].map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {item.question}

                  <span className="text-xl text-cyan-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-slate-400">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* OTHER TOOLS */}

        <section className="mt-16 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8 text-center sm:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Explore More Tools
          </p>

          <h2 className="text-3xl font-bold">
            Understand your entire credit profile.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-300">
            Use our free multi-card utilization calculator
            to see how your outstanding balances compare
            with your available credit limits.
          </p>

          <Link
            href="/credit-utilization"
            className="mt-7 inline-block rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-8 py-4 font-bold text-slate-950 transition hover:opacity-90"
          >
            Open Utilization Calculator
          </Link>
        </section>

        {/* BOOKING SECTION */}

        <section className="mt-14 text-center">
          <h2 className="text-2xl font-bold">
            Want help planning your next move?
          </h2>

          <p className="mt-3 text-slate-400">
            Explore credit education and responsible
            repayment strategies.
          </p>

          <a
            href="https://calendly.com/robert-28-qbaj/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold transition hover:bg-white/10"
          >
            Book Free Strategy Call
          </a>
        </section>

        {/* DISCLAIMER */}

        <footer className="mt-16 border-t border-white/10 pb-6 pt-8">
          <p className="mx-auto max-w-4xl text-center text-xs leading-relaxed text-slate-500">
            This calculator is provided for educational
            and informational purposes only. Estimates
            assume constant APRs, fixed monthly minimum
            payments, a consistent monthly repayment
            budget, monthly interest calculations, no
            additional purchases, and no fees. Actual
            credit card interest may be calculated daily.
            Promotional APR expirations, changing minimum
            payments, and lender-specific terms may affect
            your results. This tool does not provide
            individualized financial advice or guarantee
            credit score improvements.
          </p>

          <p className="mt-6 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} CreditLeverage.
          </p>
        </footer>
      </div>
    </main>
  );
}
