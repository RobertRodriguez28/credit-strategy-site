const calendlyLink = "https://calendly.com/robert-28-qbaj/30min";

const navItems = [
  ["Travel", "/travel-rewards"],
  ["Funding", "/business-funding"],
  ["Hacks", "/credit-hacks"],
  ["Credit", "/credit-improvement"],
  ["Intake", "/intake"],
];

const strategyCards = [
  {
    href: "/travel-rewards",
    icon: "✈️",
    label: "Travel Rewards",
    title: "Turn spending into trips.",
    text: "Learn how points, miles, welcome bonuses, and card perks can help reduce travel costs.",
    glow: "from-cyan-300/35 via-blue-500/20 to-indigo-600/20",
  },
  {
    href: "/business-funding",
    icon: "💳",
    label: "Business Funding",
    title: "Use 0% APR with discipline.",
    text: "Understand promotional APR, repayment windows, cash-flow planning, and risk control.",
    glow: "from-yellow-300/35 via-orange-500/20 to-pink-600/20",
  },
  {
    href: "/credit-hacks",
    icon: "🧠",
    label: "Credit Hacks",
    title: "Master the hidden details.",
    text: "Utilization, statement dates, pre-approvals, inquiries, and smarter timing.",
    glow: "from-fuchsia-300/35 via-violet-500/20 to-cyan-600/20",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#040719] text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:90px_90px]" />
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-cyan-500/25 blur-[140px]" />
        <div className="absolute -right-40 top-20 h-[650px] w-[650px] rounded-full bg-violet-600/30 blur-[150px]" />
        <div className="absolute bottom-[-250px] left-1/3 h-[650px] w-[650px] rounded-full bg-yellow-300/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
      </div>

      {/* NAV */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="text-lg font-black tracking-tight md:text-xl">
          Credit<span className="text-cyan-300">Leverage</span>
        </a>

        <div className="hidden rounded-full border border-white/10 bg-white/10 px-5 py-2.5 shadow-2xl backdrop-blur-xl md:flex md:gap-6">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-slate-300 transition hover:text-white">
              {label}
            </a>
          ))}
        </div>

        <a
          href={calendlyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-4 py-2 text-sm font-black text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.35)] transition hover:-translate-y-0.5 md:px-5 md:py-2.5"
        >
          Book Call
        </a>
      </nav>

      {/* HERO */}
      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:pt-18">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur-xl md:text-sm">
            Premium credit strategy • Travel rewards • 0% APR education
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
            Stop using credit like a{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
              beginner.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Learn how to build your profile, prepare for stronger approvals, use 0% APR responsibly,
            and turn credit cards into travel, business cash-flow, and better financial options.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-7 py-3.5 text-center font-black text-slate-950 shadow-[0_0_45px_rgba(255,255,255,0.25)] transition hover:-translate-y-1 hover:bg-cyan-100"
            >
              Book Free Call
            </a>

            <a
              href="/intake"
              className="rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-7 py-3.5 text-center font-black text-slate-950 shadow-[0_0_45px_rgba(34,211,238,0.22)] transition hover:-translate-y-1"
            >
              Fill Intake Form
            </a>

            <a
              href="/paid-strategy-session"
              className="rounded-full border border-white/15 bg-white/10 px-7 py-3.5 text-center font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/20"
            >
              Paid Session
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {[
              ["0%", "APR strategy"],
              ["Miles", "travel rewards"],
              ["Score", "credit profile"],
            ].map(([big, small]) => (
              <div key={big} className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
                <p className="text-2xl font-black md:text-3xl">{big}</p>
                <p className="mt-1 text-xs text-slate-400">{small}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PREMIUM CARD */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-cyan-400/25 via-violet-500/25 to-yellow-300/10 blur-2xl" />

          <div className="relative rotate-1 rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-2xl">
            <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-400">CreditLeverage Card</p>
                  <p className="mt-2 text-2xl font-black tracking-tight md:text-3xl">
                    Strategy Pass
                  </p>
                </div>
                <div className="h-10 w-14 rounded-xl bg-gradient-to-br from-yellow-200 to-yellow-500 shadow-[0_0_30px_rgba(250,204,21,0.35)]" />
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3">
                {[
                  ["Travel", "Points & miles"],
                  ["Funding", "0% APR planning"],
                  ["Profile", "Utilization timing"],
                  ["Execution", "Application prep"],
                ].map(([title, subtitle]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="font-black">{title}</p>
                    <p className="mt-1 text-xs text-slate-400 md:text-sm">{subtitle}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                <p className="text-sm text-cyan-100">Next move</p>
                <p className="mt-1 text-lg font-black md:text-xl">
                  Make credit strategic, not emotional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIES */}
      <section id="strategies" className="relative z-10 mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300 md:text-sm">
            Choose your lane
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            Three ways to make credit work harder.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {strategyCards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/25"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.glow} opacity-0 transition duration-300 group-hover:opacity-100`} />
              <div className="relative">
                <div className="mb-7 text-4xl">{card.icon}</div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
                  {card.label}
                </p>
                <h3 className="mt-4 text-2xl font-black">{card.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{card.text}</p>
                <p className="mt-7 font-black">Open strategy page →</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* VALUE */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-xl md:p-10 lg:col-span-2">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-violet-300 md:text-sm">
              Why this matters
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Random applications are expensive.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Most people apply first and think later. The smarter approach is understanding your profile,
              timing, risk, goals, and repayment plan before chasing cards, rewards, or funding.
            </p>
          </div>

          <div className="rounded-[2rem] border border-yellow-300/20 bg-yellow-300/10 p-7 shadow-2xl backdrop-blur-xl md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-yellow-200 md:text-sm">
              Rule #1
            </p>
            <h3 className="mt-4 text-2xl font-black md:text-3xl">
              Credit is leverage, not free money.
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              The goal is education, discipline, and better decisions — not reckless debt.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/15 via-violet-500/15 to-fuchsia-500/15 p-7 shadow-2xl backdrop-blur-xl md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-fuchsia-300 md:text-sm">
                What you get
              </p>
              <h2 className="mt-4 text-3xl font-black md:text-5xl">
                Clarity before your next move.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                "Understand what lenders may look for before applying.",
                "Learn how utilization and statement dates can affect your profile.",
                "Compare travel rewards, cash-back, and 0% APR strategies.",
                "Build a responsible plan instead of chasing random approvals.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-slate-200">
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10 text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300 md:text-sm">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            Built for people who want clarity.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Placeholder testimonials for now — replace these once you get real clients.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            "I finally understood utilization, statement dates, and why applying randomly was hurting my strategy.",
            "This helped me think through rewards and 0% APR without treating credit like free money.",
            "I had no idea how much planning mattered before choosing cards. This made everything clearer.",
          ].map((quote) => (
            <div key={quote} className="rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-xl">
              <div className="mb-5 text-yellow-300">★★★★★</div>
              <p className="leading-8 text-slate-200">“{quote}”</p>
              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="font-black">Strategy Client</p>
                <p className="text-sm text-slate-500">Placeholder testimonial</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 px-6 py-18 text-center">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/20 via-violet-500/20 to-fuchsia-500/20 p-8 shadow-2xl backdrop-blur-xl md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300 md:text-sm">
            Start here
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            Want a smarter credit game plan?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Start with the intake form or book a free call to talk through your credit, travel, or business funding goals.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/intake"
              className="rounded-full bg-gradient-to-r from-cyan-300 via-white to-violet-300 px-8 py-4 font-black text-slate-950 shadow-[0_0_60px_rgba(34,211,238,0.25)] transition hover:-translate-y-1"
            >
              Start With Intake
            </a>

            <a
              href={calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/10 px-8 py-4 font-black text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/20"
            >
              Book Free Call
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-xs text-slate-500">
        Educational information only. No credit approvals, credit limits, funding amounts,
        travel savings, or financial outcomes are guaranteed.
      </footer>
    </main>
  );
}