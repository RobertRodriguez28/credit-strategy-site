export default function Intake() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16 text-white">
      <a href="/" className="text-sm text-cyan-300">← Back Home</a>

      <section className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
          Client Intake
        </p>

        <h1 className="mt-4 text-4xl font-black md:text-5xl">
          Tell me what you’re trying to do.
        </h1>

        <p className="mt-4 text-slate-300">
          Fill this out before booking so we can talk through credit, travel rewards, or funding strategy with more clarity.
        </p>

        <form className="mt-8 space-y-5">
          <input className="w-full rounded-xl bg-white/10 p-4 outline-none" placeholder="Full name" />
          <input className="w-full rounded-xl bg-white/10 p-4 outline-none" placeholder="Email" />
          <input className="w-full rounded-xl bg-white/10 p-4 outline-none" placeholder="Phone number" />

          <select className="w-full rounded-xl bg-white/10 p-4 outline-none">
            <option>What is your main goal?</option>
            <option>Improve my credit</option>
            <option>Travel rewards</option>
            <option>0% APR business funding</option>
            <option>Credit card strategy</option>
          </select>

          <select className="w-full rounded-xl bg-white/10 p-4 outline-none">
            <option>Estimated credit score range</option>
            <option>Under 580</option>
            <option>580–649</option>
            <option>650–699</option>
            <option>700–749</option>
            <option>750+</option>
          </select>

          <textarea
            className="min-h-36 w-full rounded-xl bg-white/10 p-4 outline-none"
            placeholder="Tell me about your situation..."
          />

          <button
            type="button"
            className="w-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-8 py-4 font-black text-slate-950"
          >
            Submit Intake
          </button>
        </form>

        <p className="mt-5 text-xs text-slate-500">
          Intake form UI only for now. We’ll connect this to a database next.
        </p>
      </section>
    </main>
  );
}