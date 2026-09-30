
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="grid-background relative min-h-screen overflow-hidden pt-28"
    >
      <div className="container-custom flex min-h-[calc(100vh-7rem)] items-center py-20">
        <div className="grid w-full gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

          {/* Left Side */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-[#d9ff57]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#aaa]">
                Open to Data Analytics & Business Analytics Opportunities
              </span>
            </div>

            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-[#777]">
              Hello, I&apos;m Revathi
            </p>

            <h1 className="max-w-5xl text-[clamp(52px,9vw,115px)] font-bold leading-[0.85] tracking-[-0.075em]">
              Turning
              <br />
              <span className="text-[#d9ff57]">data</span>
              <br />
              into decisions.
            </h1>

            <p className="mt-10 max-w-xl text-lg leading-8 text-[#929292]">
              B.Tech Information Technology student focused on Data
              Analytics and Business Analytics. I work with data,
              dashboards and practical tools to turn complexity into
              clarity.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group flex items-center gap-3 border border-[#333] bg-[#0a0a0a] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#d9ff57] hover:bg-[#d9ff57] hover:text-black"
              >
                View Projects

                <ArrowDownRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="border border-[#333] px-6 py-3 text-sm font-semibold transition hover:border-[#d9ff57] hover:text-[#d9ff57]"
              >
                View Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex items-center gap-5">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-[#777] transition hover:text-white"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-[#777] transition hover:text-white"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:tamaranarevathi@gmail.com"
                aria-label="Email"
                className="text-[#777] transition hover:text-white"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative hidden lg:block">
            <div className="float relative mx-auto aspect-square max-w-[440px] border border-[#252525] bg-[#090909] p-7">

              <div className="flex items-center justify-between border-b border-[#222] pb-5">
                <span className="text-xs uppercase tracking-widest text-[#666]">
                  DATA / 01
                </span>

                <span className="text-xs text-[#666]">
                  ANALYTICS
                </span>
              </div>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-widest text-[#666]">
                  Focus
                </p>

                <div className="mt-3 text-5xl font-bold tracking-[-0.06em]">
                  Data
                  <span className="text-[#d9ff57]"> → </span>
                  Insight
                </div>
              </div>

              <div className="mt-12 space-y-5">

                {/* SQL */}
                <div>
                  <div className="mb-2 text-[10px] uppercase tracking-wider text-[#666]">
                    SQL
                  </div>

                  <div className="h-1 bg-[#222]">
                    <div className="h-1 w-[90%] bg-[#d9ff57]" />
                  </div>
                </div>

                {/* Power BI */}
                <div>
                  <div className="mb-2 text-[10px] uppercase tracking-wider text-[#666]">
                    Power BI
                  </div>

                  <div className="h-1 bg-[#222]">
                    <div className="h-1 w-[88%] bg-[#d9ff57]" />
                  </div>
                </div>

                {/* Excel */}
                <div>
                  <div className="mb-2 text-[10px] uppercase tracking-wider text-[#666]">
                    Excel
                  </div>

                  <div className="h-1 bg-[#222]">
                    <div className="h-1 w-[90%] bg-[#d9ff57]" />
                  </div>
                </div>

                {/* Python */}
                <div>
                  <div className="mb-2 text-[10px] uppercase tracking-wider text-[#666]">
                    Python
                  </div>

                  <div className="h-1 bg-[#222]">
                    <div className="h-1 w-[72%] bg-[#d9ff57]" />
                  </div>
                </div>

                {/* Business Analysis */}
                <div>
                  <div className="mb-2 text-[10px] uppercase tracking-wider text-[#666]">
                    Business Analysis
                  </div>

                  <div className="h-1 bg-[#222]">
                    <div className="h-1 w-[84%] bg-[#d9ff57]" />
                  </div>
                </div>

              </div>

              <div className="absolute bottom-7 left-7 right-7 border-t border-[#222] pt-4 text-[10px] uppercase tracking-widest text-[#555]">
                Explore • Analyze • Communicate
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
