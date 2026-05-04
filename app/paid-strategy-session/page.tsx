const calendlyLink = "https://calendly.com/robert-28-qbaj/30min";

export default function PaidStrategySession() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16 text-white">
      <a href="/" className="text-sm text-cyan-300">← Back Home</a>

      <section className="mx-auto mt-16 max-w-4xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-300">
          Paid Strategy Session
        </p>

        <h1 className="mt-4 text-5xl font-black md:text-6xl">
          Get a focused credit strategy breakdown.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-slate-300">
          A deeper session for people who want help thinking through credit cards, travel rewards, 0% APR strategy, and next steps.
        </p>

        <div className="mx-auto mt-10 max-w-md rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
          <p className="text-5xl font-black">$97</p>
          <p className="mt-2 text-slate-400">One-time strategy session</p>

          <ul className="mt-8 space-y-3 text-left text-slate-300">
            <li>✓ Credit profile review</li>
            <li>✓ Card strategy discussion</li>
            <li>✓ Travel/funding goal planning</li>
            <li>✓ Safer next-step roadmap</li>
          </ul>

          <a
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-8 py-4 font-black text-slate-950"
          >
            Book For Now
          </a>

          <p className="mt-4 text-xs text-slate-500">
            Stripe payment button coming later.
          </p>
        </div>
      </section>
    </main>
  );
}