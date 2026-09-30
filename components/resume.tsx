import {
  ArrowUpRight,
  FileText,
} from "lucide-react";

export default function Resume() {
  return (
    <section className="border-y border-[#222] bg-[#d9ff57] py-20 text-black">
      <div className="container-custom">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em]">
              Resume
            </p>

            <h2 className="mt-5 max-w-3xl text-[clamp(42px,6vw,80px)] font-bold leading-[0.9] tracking-[-0.06em]">
              Let&apos;s build something useful with data.
            </h2>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            className="group flex w-fit items-center gap-4 border border-black px-6 py-4 text-sm font-semibold transition hover:bg-black hover:text-[#d9ff57]"
          >
            <FileText size={18} />
            View Resume
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}