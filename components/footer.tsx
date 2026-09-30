import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#222] py-8">
      <div className="container-custom flex flex-col justify-between gap-5 text-xs text-[#555] sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} Revathi Tamarana
        </p>

        <p className="uppercase tracking-widest">
          Data • Business • Analytics
        </p>

        <a
          href="#home"
          className="flex items-center gap-2 transition hover:text-white"
        >
          Back to top
          <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}