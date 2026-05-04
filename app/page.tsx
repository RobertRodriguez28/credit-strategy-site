export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
        Build Credit. Unlock Funding. Travel Smarter.
      </h1>

      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-8">
        Learn how to improve your credit profile, leverage 0% APR credit cards,
        and maximize travel rewards — without destroying your finances.
      </p>

      <div className="flex gap-4 mb-12">
        <a
          href="https://calendly.com/robert-28-qbaj/30min"
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:opacity-80"
        >
          Book a Consultation
        </a>

        <a
          href="#"
          className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black"
        >
          Learn More
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
        <div className="border border-gray-700 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Credit Optimization</h2>
          <p className="text-gray-400">
            Understand how credit works and how to build a strong profile lenders trust.
          </p>
        </div>

        <div className="border border-gray-700 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">0% APR Strategy</h2>
          <p className="text-gray-400">
            Learn how people use promotional credit responsibly for cash flow and business.
          </p>
        </div>

        <div className="border border-gray-700 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Travel Rewards</h2>
          <p className="text-gray-400">
            Maximize points, miles, and perks from everyday spending.
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-12 max-w-xl text-center">
        This site provides educational information only and does not guarantee credit approvals or financial outcomes.
      </p>

    </main>
  );
}