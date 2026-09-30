export default function About() {
  return (
    <section id="about" className="section border-t border-[#1c1c1c]">
      <div className="container-custom">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          {/* Left */}
          <div>
            <p className="section-label">01 / About</p>

            <h2 className="mt-5 max-w-md text-[clamp(48px,7vw,88px)] font-bold leading-[0.88] tracking-[-0.07em]">
              Curious
              <br />
              about
              <br />
              <span className="text-[#d9ff57]">data.</span>
            </h2>
          </div>

          {/* Right */}
          <div>
            <p className="max-w-3xl text-xl leading-9 text-[#c5c5c5] md:text-2xl md:leading-10">
              I&apos;m a B.Tech Information Technology student focused on
              Data Analytics and Business Analytics. I enjoy working with
              data to understand patterns, solve practical problems and
              communicate insights clearly.
            </p>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#777]">
              My toolkit includes SQL, Excel, Power BI, Python and
              data visualization. I&apos;m particularly interested in
              the space where data meets business — understanding a
              problem, exploring the numbers and turning the findings
              into something useful for decision-making.
            </p>

            {/* Profile Snapshot */}
            <div className="mt-12 grid border-y border-[#222] sm:grid-cols-3">

              <div className="border-b border-[#222] py-6 sm:border-b-0 sm:border-r sm:pr-6">
                <p className="text-xs uppercase tracking-widest text-[#555]">
                  Education
                </p>

                <p className="mt-3 text-sm font-medium text-white">
                  B.Tech Information Technology
                </p>

                <p className="mt-1 text-xs text-[#666]">
                  2023 — 2027
                </p>
              </div>

              <div className="border-b border-[#222] py-6 sm:border-b-0 sm:border-r sm:px-6">
                <p className="text-xs uppercase tracking-widest text-[#555]">
                  Focus
                </p>

                <p className="mt-3 text-sm font-medium text-white">
                  Data & Business Analytics
                </p>

                <p className="mt-1 text-xs text-[#666]">
                  Analysis • Visualization • Insights
                </p>
              </div>

              <div className="py-6 sm:pl-6">
                <p className="text-xs uppercase tracking-widest text-[#555]">
                  Currently
                </p>

                <p className="mt-3 text-sm font-medium text-white">
                  Open to Opportunities
                </p>

                <p className="mt-1 text-xs text-[#666]">
                  Internships • Entry-level roles
                </p>
              </div>

            </div>

            {/* Closing Line */}
            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-[#d9ff57]" />

              <p className="text-xs uppercase tracking-[0.18em] text-[#666]">
                Data → Insight → Decision
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}