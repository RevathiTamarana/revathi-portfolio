import { GraduationCap } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section border-t border-[#1c1c1c]">
      <div className="container-custom">
        <div className="grid gap-14 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <p className="section-label">05 / Education</p>

            <h2 className="section-title">
              Building the
              <br />
              foundation.
            </h2>
          </div>

          <div className="lg:pt-16">
            <div className="border border-[#222] bg-[#090909] p-8 md:p-12">
              <div className="flex flex-col justify-between gap-8 sm:flex-row">
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#292929]">
                    <GraduationCap
                      size={21}
                      className="text-[#d9ff57]"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#666]">
                      Bachelor&apos;s Degree
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold">
                      {portfolio.education.degree}
                    </h3>

                    <p className="mt-2 text-sm text-[#777]">
                      {portfolio.education.college}
                    </p>
                  </div>
                </div>

                <div className="text-sm text-[#777]">
                  {portfolio.education.period}
                </div>
              </div>

              <div className="mt-12 grid gap-4 border-t border-[#222] pt-8 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#555]">
                    Status
                  </p>

                  <p className="mt-2 text-sm text-[#aaa]">
                    {portfolio.education.status}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-[#555]">
                    CGPA
                  </p>

                  <p className="mt-2 text-sm text-[#aaa]">
                    {portfolio.education.cgpa}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}