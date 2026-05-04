export default function Admin() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16 text-white">
      <a href="/" className="text-sm text-cyan-300">← Back Home</a>

      <section className="mx-auto mt-12 max-w-6xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-violet-300">
          Admin Dashboard
        </p>

        <h1 className="mt-4 text-4xl font-black md:text-5xl">
          Lead dashboard
        </h1>

        <p className="mt-4 text-slate-300">
          This is where client intake submissions will appear once we connect Supabase.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {["New Leads", "Booked Calls", "Paid Sessions"].map((item) => (
            <div key={item} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <p className="text-slate-400">{item}</p>
              <p className="mt-3 text-4xl font-black">0</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}