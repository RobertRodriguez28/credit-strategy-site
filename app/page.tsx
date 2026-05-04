const calendlyLink = "https://calendly.com/robert-28-qbaj/30min";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05050a] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="text-xl font-bold tracking-tight">
          Credit<span className="text-blue-400">Leverage</span>
        </a>

        <div className="hidden gap-6 text-sm text-gray-300 md:flex">
          <a href="/travel-rewards" className="hover:text-white">Travel Rewards</a>
          <a href="/business-funding" className="hover:text-white">Business Funding</a>
          <a href="/credit-hacks" className="hover:text-white">Credit Hacks</a>
          <a href="/credit-improvement" className="hover:text-white">Credit Improvement</a>
        </div>

        <a
          href={calendlyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-5 py-2 text-sm font-bold text-black hover:opacity-80"
        >
          Book Call
        </a>
      </nav>

      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-20 top-40 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
            Credit strategy for ambitious people
          </p>

          <h1 className="mx-auto max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Turn Your Credit Into{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-300 bg-clip-text text-transparent">
              Leverage.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Learn how to build a stronger credit profile, use 0% APR offers responsibly,
            maximize travel rewards, and create better financial options without reckless guessing.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-4 font-bold text-black hover:opacity-80"
            >
              Book a Free Strategy Call
            </a>

            <a
              href="#strategies"
              className="rounded-full border border-white/20 px-8 py-4 font-bold text-white hover:bg-white hover:text-black"
            >
              Explore Strategies
            </a>
          </div>
        </div>
      </section>

      <section id="strategies" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
            Choose your strategy
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            What are you trying to do?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="/travel-rewards"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-400/10"
          >
            <div className="mb-6 text-4xl">✈️</div>
            <h3 className="text-2xl font-bold">Travel for Less</h3>
            <p className="mt-4 text-gray-300">
              Learn how points, miles, welcome bonuses, and everyday spending can reduce travel costs.
            </p>
          </a>

          <a
            href="/business-funding"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-yellow-300/50 hover:bg-yellow-300/10"
          >
            <div className="mb-6 text-4xl">💳</div>
            <h3 className="text-2xl font-bold">Fund Your Business</h3>
            <p className="mt-4 text-gray-300">
              Understand how 0% APR cards can support business cash flow when used carefully.
            </p>
          </a>

          <a
            href="/credit-hacks"
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-400/10"
          >
            <div className="mb-6 text-4xl">🧠</div>
            <h3 className="text-2xl font-bold">Credit Hacks</h3>
            <p className="mt-4 text-gray-300">
              Learn utilization timing, pre-approval strategy, statement dates, and approval prep.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-yellow-500/10 p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-yellow-200">
                The problem
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                Most people use credit blindly.
              </h2>
            </div>

            <div className="space-y-5 text-gray-300">
              <p>
                They apply randomly, carry balances badly, misunderstand utilization,
                ignore statement dates, and chase cards without a real plan.
              </p>
              <p>
                The goal here is simple: education first, strategy second, execution third.
                Better credit decisions can create better options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
            Social proof
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            What people could say
          </h2>
          <p className="mt-4 text-gray-400">
            Placeholder testimonials for now — replace these once you get real clients.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            "I finally understood how utilization, statement dates, and credit card strategy actually work.",
            "The strategy call helped me stop guessing and start thinking like lenders think.",
            "I learned how to approach rewards and 0% APR offers without being reckless."
          ].map((quote) => (
            <div key={quote} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-gray-300">“{quote}”</p>
              <p className="mt-5 font-bold text-white">Strategy Client</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center text-3xl font-black md:text-5xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-4">
          {[
            {
              q: "Do you guarantee approvals?",
              a: "No. This is educational strategy only. No approval, limit, funding amount, or outcome is guaranteed."
            },
            {
              q: "Is this credit repair?",
              a: "No. This is education around credit behavior, strategy, card usage, rewards, and planning."
            },
            {
              q: "Who is this for?",
              a: "People who want to understand credit cards, travel rewards, 0% APR offers, and credit-building strategy more responsibly."
            }
          ].map((item) => (
            <div key={item.q} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-bold">{item.q}</h3>
              <p className="mt-2 text-gray-400">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-4xl font-black md:text-6xl">
          Ready to build a smarter credit plan?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-gray-300">
          Book a free strategy call and we’ll talk through your goals, current situation,
          and what path might make sense.
        </p>

        <a
          href={calendlyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-bold text-black hover:opacity-80"
        >
          Book Your Call
        </a>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-gray-500">
        Educational information only. No credit approvals, credit limits, funding amounts,
        travel savings, or financial outcomes are guaranteed.
      </footer>
    </main>
  );
}