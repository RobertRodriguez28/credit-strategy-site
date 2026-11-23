
"use client";

import { useState } from "react";
import Link from "next/link";

const currency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

const numberFormat = (value: number) =>
  new Intl.NumberFormat("en-US").format(value);

const inputClass =
  "w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400";

function validNumber(value: string) {
  return (
    value.trim() !== "" &&
    Number.isFinite(Number(value)) &&
    Number(value) >= 0
  );
}

type FieldProps = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  step?: string;
  help?: string;
};

function NumberField({
  label,
  value,
  placeholder,
  onChange,
  step = "0.01",
  help,
}: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </span>

      <input
        type="number"
        min="0"
        step={step}
        value={value}
        placeholder={placeholder}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className={inputClass}
      />

      {help && (
        <span className="mt-2 block text-xs leading-relaxed text-slate-400">
          {help}
        </span>
      )}

      {value !== "" && !validNumber(value) && (
        <span className="mt-2 block text-sm text-rose-300">
          Enter a valid nonnegative number.
        </span>
      )}
    </label>
  );
}

export default function TravelRewardsCalculator() {
  const [program, setProgram] = useState("");
  const [redemptionType, setRedemptionType] =
    useState("flight");

  const [cashPrice, setCashPrice] = useState("");
  const [pointsRequired, setPointsRequired] =
    useState("");

  const [awardFees, setAwardFees] = useState("");
  const [pointsAvailable, setPointsAvailable] =
    useState("");

  const [cashbackRate, setCashbackRate] =
    useState("");

  const validBooking =
    validNumber(cashPrice) &&
    validNumber(pointsRequired) &&
    validNumber(awardFees) &&
    Number(pointsRequired) > 0 &&
    Number.isInteger(Number(pointsRequired)) &&
    Number(cashPrice) > 0;

  const validAvailable =
    validNumber(pointsAvailable) &&
    Number.isInteger(Number(pointsAvailable));

  const validCashback = validNumber(cashbackRate);

  const cash = Number(cashPrice);
  const points = Number(pointsRequired);
  const fees = Number(awardFees);
  const available = Number(pointsAvailable);

  const netSavings = validBooking
    ? cash - fees
    : 0;

  const centsPerPoint = validBooking
    ? (netSavings / points) * 100
    : 0;

  const cashbackValue =
    validBooking && validCashback
      ? (points * Number(cashbackRate)) / 100
      : 0;

  const travelAdvantage =
    netSavings - cashbackValue;

  const additionalPoints =
    validBooking && validAvailable
      ? Math.max(0, points - available)
      : 0;

  const remainingPoints =
    validBooking && validAvailable
      ? Math.max(0, available - points)
      : 0;

  const pointsCoverage =
    validBooking && validAvailable
      ? Math.min(100, (available / points) * 100)
      : 0;

  const estimatedPortfolioValue =
    validBooking && validAvailable
      ? (available * centsPerPoint) / 100
      : 0;

  function resetCalculator() {
    setProgram("");
    setRedemptionType("flight");
    setCashPrice("");
    setPointsRequired("");
    setAwardFees("");
    setPointsAvailable("");
    setCashbackRate("");
  }

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
            Travel Rewards
            <span className="block bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              Calculator
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            Discover what your credit card points and
            miles are worth, compare redemption options,
            and make more informed travel decisions.
          </p>
        </section>

        {/* CALCULATOR */}
        <div className="grid items-start gap-8 lg:grid-cols-2">

          {/* INPUT SECTION */}
          <section className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
            <div className="mb-7 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold">
                Your Travel Redemption
              </h2>

              <button
                type="button"
                onClick={resetCalculator}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Reset
              </button>
            </div>

            <div className="space-y-6">

              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">
                  Rewards Program (Optional)
                </span>

                <input
                  type="text"
                  value={program}
                  placeholder="e.g. Chase Ultimate Rewards"
                  onChange={(event) =>
                    setProgram(event.target.value)
                  }
                  className={inputClass}
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">
                  Redemption Type
                </span>

                <select
                  value={redemptionType}
                  onChange={(event) =>
                    setRedemptionType(event.target.value)
                  }
                  className={`${inputClass} [color-scheme:dark]`}
                >
                  <option value="flight">
                    Flight
                  </option>
                  <option value="hotel">
                    Hotel Stay
                  </option>
                  <option value="other">
                    Other Travel
                  </option>
                </select>
              </label>

              <NumberField
                label="Cash Booking Price ($)"
                value={cashPrice}
                placeholder="Enter total cash price"
                onChange={setCashPrice}
                help="Enter the complete cash price, including taxes and fees."
              />

              <NumberField
                label="Points or Miles Required"
                value={pointsRequired}
                placeholder="Enter required points"
                onChange={setPointsRequired}
                step="1"
              />

              {pointsRequired !== "" &&
                (Number(pointsRequired) <= 0 ||
                  !Number.isInteger(Number(pointsRequired))) && (
                  <p className="text-sm text-rose-300">
                    Enter a positive whole number of points.
                  </p>
                )}

              <NumberField
                label="Award Booking Taxes & Fees ($)"
                value={awardFees}
                placeholder="Enter taxes and fees"
                onChange={setAwardFees}
                help="Enter 0 if there are no additional charges."
              />

              <div className="border-t border-white/10 pt-6">
                <h3 className="mb-5 text-lg font-semibold">
                  Your Rewards Balance
                </h3>

                <NumberField
                  label="Available Points (Optional)"
                  value={pointsAvailable}
                  placeholder="Enter your points balance"
                  onChange={setPointsAvailable}
                  step="1"
                />

                {pointsAvailable !== "" &&
                  !Number.isInteger(Number(pointsAvailable)) && (
                    <p className="mt-2 text-sm text-rose-300">
                      Enter a whole number of points.
                    </p>
                  )}
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="mb-5 text-lg font-semibold">
                  Cash Back Comparison
                </h3>

                <NumberField
                  label="Cash Redemption Value (Cents Per Point)"
                  value={cashbackRate}
                  placeholder="Enter cash redemption rate"
                  onChange={setCashbackRate}
                  help="Optional. Use your rewards program's actual cash redemption rate, if cash redemption is available."
                />
              </div>
            </div>
          </section>

          {/* RESULTS SECTION */}
          <section className="rounded-3xl border border-cyan-300/20 bg-white/10 p-7 backdrop-blur-xl">

            <h2 className="mb-7 text-2xl font-bold">
              Your Rewards Overview
            </h2>

            {program && (
              <div className="mb-6 rounded-xl bg-cyan-400/10 p-4 text-sm font-medium text-cyan-300">
                {program}
              </div>
            )}

            <div className="rounded-2xl bg-slate-950/50 p-6">
              <p className="text-sm text-slate-400">
                Redemption Value
              </p>

              <p className="mt-3 text-5xl font-bold text-cyan-300 md:text-6xl">
                {validBooking
                  ? centsPerPoint.toFixed(2)
                  : "—"}
              </p>

              <p className="mt-2 text-slate-300">
                Cents per point
              </p>

              <p className="mt-4 text-xs leading-relaxed text-slate-400">
                Value is calculated using the cash price
                minus award booking fees, divided by the
                number of points required.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-950/50 p-5">
                <p className="text-sm text-slate-400">
                  Cash Price
                </p>

                <p className="mt-2 text-2xl font-bold">
                  {validBooking
                    ? currency(cash)
                    : "—"}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-950/50 p-5">
                <p className="text-sm text-slate-400">
                  Award Booking Fees
                </p>

                <p className="mt-2 text-2xl font-bold">
                  {validBooking
                    ? currency(fees)
                    : "—"}
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-400/5 p-6">
              <p className="text-sm text-slate-300">
                Cash Spending Avoided
              </p>

              <p
                className={`mt-3 text-4xl font-bold ${
                  netSavings < 0
                    ? "text-rose-300"
                    : "text-cyan-300"
                }`}
              >
                {validBooking
                  ? currency(netSavings)
                  : "—"}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Cash price avoided after paying award
                booking fees, before accounting for the
                alternative value of your points.
              </p>
            </div>

            {validBooking && netSavings <= 0 && (
              <div className="mt-5 rounded-xl border border-rose-400/20 bg-rose-400/10 p-4 text-sm text-rose-300">
                The award booking fees are equal to or
                greater than the cash price. Consider
                paying cash instead.
              </div>
            )}

            {/* POINTS COVERAGE */}
            <div className="mt-8 border-t border-white/10 pt-7">
              <h3 className="mb-5 text-xl font-bold">
                Points Coverage
              </h3>

              <div className="mb-3 flex justify-between gap-2 text-sm">
                <span className="text-slate-400">
                  Available vs. Required
                </span>

                <span className="font-semibold text-cyan-300">
                  {validBooking && validAvailable
                    ? `${pointsCoverage.toFixed(0)}%`
                    : "—"}
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-500"
                  style={{
                    width: `${
                      validBooking && validAvailable
                        ? pointsCoverage
                        : 0
                    }%`,
                  }}
                />
              </div>

              {validBooking && validAvailable ? (
                <div className="mt-5 rounded-2xl bg-slate-950/50 p-5">
                  <p
                    className={`text-sm font-semibold ${
                      additionalPoints > 0
                        ? "text-amber-300"
                        : "text-emerald-300"
                    }`}
                  >
                    {additionalPoints > 0
                      ? "Additional Points Needed"
                      : "You Have Enough Points"}
                  </p>

                  <p className="mt-3 text-3xl font-bold">
                    {numberFormat(
                      additionalPoints > 0
                        ? additionalPoints
                        : remainingPoints
                    )}
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    {additionalPoints > 0
                      ? "More points required for this redemption."
                      : "Points remaining after this redemption."}
                  </p>
                </div>
              ) : (
                <p className="mt-4 text-sm text-slate-400">
                  Enter your available points to calculate
                  whether you have enough for this trip.
                </p>
              )}
            </div>

            {/* ESTIMATED POINTS VALUE */}
            {validBooking && validAvailable &&
              centsPerPoint >= 0 && (
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">
                    Estimated Value of Your Points
                  </p>

                  <p className="mt-3 text-3xl font-bold text-cyan-300">
                    {currency(estimatedPortfolioValue)}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-slate-400">
                    Illustrative value if your entire balance
                    could be redeemed at this same rate.
                    Actual redemption values may vary.
                  </p>
                </div>
              )}

            {!validBooking && (
              <p className="mt-7 text-sm text-slate-400">
                Enter a cash booking price, points required,
                and award booking fees to calculate your
                redemption value.
              </p>
            )}
          </section>
        </div>

        {/* CASH BACK COMPARISON */}
        <section className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-7">

          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Redemption Strategy
            </p>

            <h2 className="text-3xl font-bold">
              Travel vs. Cash Back
            </h2>

            <p className="mt-3 text-slate-400">
              Compare the value of using the same number
              of points for travel or cash redemption.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-400/5 p-6">
              <div className="mb-5 text-3xl">✈️</div>

              <h3 className="text-xl font-bold">
                Travel Redemption
              </h3>

              <p className="mt-4 text-4xl font-bold text-cyan-300">
                {validBooking
                  ? currency(netSavings)
                  : "—"}
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Cash booking price minus award fees.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
              <div className="mb-5 text-3xl">💵</div>

              <h3 className="text-xl font-bold">
                Cash Back Redemption
              </h3>

              <p className="mt-4 text-4xl font-bold">
                {validBooking && validCashback
                  ? currency(cashbackValue)
                  : "—"}
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Cash value of the same points using your
                entered redemption rate.
              </p>
            </div>
          </div>

          {validBooking && validCashback ? (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-slate-400">
                Redemption Comparison
              </p>

              <h3 className="mt-3 text-2xl font-bold text-cyan-300">
                {Math.abs(travelAdvantage) < 0.005
                  ? "Both options offer equal value"
                  : travelAdvantage > 0
                    ? "Travel offers more calculated value"
                    : "Cash back offers more calculated value"}
              </h3>

              <p className="mt-4 text-3xl font-bold">
                {currency(Math.abs(travelAdvantage))}
              </p>

              <p className="mt-3 text-sm text-slate-400">
                Estimated difference between the two
                redemption options. Consider your actual
                travel needs, flexibility, and program rules.
              </p>
            </div>
          ) : (
            <p className="mt-6 text-sm text-slate-400">
              Complete your booking information and enter
              your cash redemption rate to compare options.
            </p>
          )}
        </section>

        {/* EDUCATION */}
        <section className="mt-20">
          <div className="mb-10 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Travel Rewards Education
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Make every point count.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Understand the fundamentals before redeeming
              your hard-earned credit card rewards.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: "📊",
                title: "Understand Cents Per Point",
                text: "Cents per point measures the cash value you receive from a rewards redemption after accounting for additional booking fees.",
              },
              {
                icon: "✈️",
                title: "Explore Transfer Partners",
                text: "Some rewards programs allow transfers to airline and hotel partners. Compare availability, transfer ratios, and fees before moving your points.",
              },
              {
                icon: "💳",
                title: "Avoid Paying Interest",
                text: "Credit card interest can quickly outweigh the value of rewards. Only spend what you can afford and pay statement balances in full when possible.",
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

          <div className="mt-6 text-center">
            <Link
              href="/travel-rewards"
              className="inline-block rounded-full border border-cyan-300/30 px-7 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-300/10"
            >
              Explore Travel Rewards Strategies →
            </Link>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mt-20">
          <h2 className="mb-7 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto max-w-4xl space-y-4">
            {[
              {
                question: "What does cents per point mean?",
                answer: "Cents per point measures the value of a single rewards point. A $500 cash booking that costs 25,000 points and $50 in award fees provides 1.8 cents per point.",
              },
              {
                question: "Is travel always better than cash back?",
                answer: "No. Travel can provide higher redemption values, but cash back offers flexibility. Compare actual prices, fees, availability, and whether you would otherwise purchase the trip.",
              },
              {
                question: "Are all credit card points worth the same?",
                answer: "No. Point values vary depending on the rewards program, redemption method, transfer partners, and individual booking.",
              },
              {
                question: "Should I transfer my points before finding a booking?",
                answer: "Generally, confirm award availability and transfer requirements first. Transfers may be irreversible, and availability can change.",
              },
              {
                question: "Does the calculator include annual credit card fees?",
                answer: "No. This calculator evaluates a specific redemption. Annual fees, interest, and other ownership costs should be considered separately.",
              },
            ].map((item) => (
              <details
                key={item.question}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <summary className="cursor-pointer font-semibold text-white">
                  {item.question}
                </summary>

                <p className="mt-4 leading-relaxed text-slate-400">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* RELATED TOOLS */}
        <section className="mt-20">
          <h2 className="mb-7 text-2xl font-bold">
            Explore More Free Tools
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                href: "/credit-utilization",
                icon: "💳",
                title: "Credit Utilization Calculator",
                text: "Understand your individual and overall credit utilization.",
              },
              {
                href: "/credit-payoff",
                icon: "📊",
                title: "Credit Card Payoff Planner",
                text: "Estimate your debt repayment timeline and interest costs.",
              },
              {
                href: "/zero-apr-planner",
                icon: "📅",
                title: "0% APR Payment Planner",
                text: "Build a plan to repay promotional balances before expiration.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/50 hover:bg-white/10"
              >
                <div className="mb-5 text-3xl">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-400">
                  {item.text}
                </p>

                <p className="mt-5 font-semibold text-cyan-300">
                  Open Calculator →
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* BOOKING SECTION */}
        <section className="mt-16 rounded-3xl border border-cyan-300/20 bg-gradient-to-r from-cyan-400/10 to-violet-400/10 p-10 text-center">
          <h2 className="text-3xl font-bold">
            Turn your spending into smarter travel.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-300">
            Explore credit card rewards, travel strategies,
            and educational resources tailored to your
            financial goals.
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
            This calculator is provided for educational
            and informational purposes only. Results are
            estimates based solely on user-provided
            information. Rewards values, availability,
            transfer ratios, taxes, fees, and program terms
            may change. This calculator does not include
            annual fees, interest charges, or rewards earned
            on cash bookings. CreditLeverage does not
            guarantee redemption values, savings, or award
            availability.
          </p>

          <p className="mt-5 text-sm text-slate-500">
            © {new Date().getFullYear()} CreditLeverage
          </p>
        </footer>
      </div>
    </main>
  );
}
