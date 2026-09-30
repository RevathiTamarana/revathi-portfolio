import { Award, ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section border-t border-[#1c1c1c] bg-[#080808]"
    >
      <div className="container-custom">
        <p className="section-label">04 / Certifications</p>

        <h2 className="section-title max-w-4xl">
          Learning by
          <br />
          <span className="text-[#d9ff57]">doing.</span>
        </h2>

        <div className="mt-20">
          {portfolio.certifications.map((certificate, index) => (
            <div
              key={certificate.title}
              className="grid gap-6 border-t border-[#222] py-9 md:grid-cols-[80px_1fr_1fr_100px]"
            >
              <span className="text-xs text-[#555]">
                0{index + 1}
              </span>

              <div>
                <div className="flex items-center gap-3">
                  <Award size={17} className="text-[#d9ff57]" />

                  <h3 className="text-xl font-semibold">
                    {certificate.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm text-[#777]">
                  {certificate.issuer}
                </p>
              </div>

              <p className="text-sm leading-7 text-[#666]">
                {certificate.description}
              </p>

              <div className="flex items-start justify-end">
                <span
                  className={`text-[10px] uppercase tracking-widest ${
                    certificate.status === "Completed"
                      ? "text-[#d9ff57]"
                      : "text-[#777]"
                  }`}
                >
                  {certificate.status}
                </span>
              </div>
            </div>
          ))}

          <div className="border-t border-[#222]" />
        </div>
      </div>
    </section>
  );
}