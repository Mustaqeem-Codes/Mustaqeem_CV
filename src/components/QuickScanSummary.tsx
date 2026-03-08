"use client";

export default function QuickScanSummary() {
  return (
    <section id="home" className="w-full bg-black border border-[#1e293b] px-6 py-8 md:py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Left Main: Value Proposition */}
        <div className="md:col-span-2 border-l-4 border-blue-600 pl-5">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            AI Engineer · Full-Stack Developer
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Building web, desktop, and algorithmic systems using{" "}
            <span className="text-blue-400 font-medium">React</span>,{" "}
            <span className="text-blue-400 font-medium">C#</span>,{" "}
            <span className="text-blue-400 font-medium">C++</span>, and{" "}
            <span className="text-blue-400 font-medium">SQL</span>.
            Engineered projects including a{" "}
            <span className="text-blue-400 font-medium">
              2.6K LOC airline management system
            </span>
            , a{" "}
            <span className="text-blue-400 font-medium">
              multi-role job portal
            </span>
            , and a{" "}
            <span className="text-blue-400 font-medium">
              real-time collaborative whiteboard
            </span>{" "}
            supporting 50 concurrent users.
          </p>
        </div>

        {/* Top Right: Live Status */}
        <div className="flex items-start justify-end">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-[#1e293b] rounded-full px-4 py-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>

            <span className="text-white text-sm font-medium">
              Open to Opportunities
            </span>
          </div>
        </div>

        {/* Bottom Right: Key Metrics */}
        <div className="bg-[#0f172a]/40 border border-[#1e293b] rounded-lg p-5">
          <div className="flex flex-wrap justify-center gap-6 sm:justify-between">
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-blue-600 text-2xl font-bold">6+</span>
              <span className="text-gray-400 text-xs uppercase tracking-wider whitespace-nowrap">
                Projects Built
              </span>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <span className="text-blue-600 text-2xl font-bold">2.6K</span>
              <span className="text-gray-400 text-xs uppercase tracking-wider whitespace-nowrap">
                Largest Codebase
              </span>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <span className="text-blue-600 text-2xl font-bold">50</span>
              <span className="text-gray-400 text-xs uppercase tracking-wider whitespace-nowrap">
                Concurrent Users
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}