
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <p className="section-label">06 / Contact</p>

            <h2 className="mt-5 max-w-4xl text-[clamp(48px,8vw,105px)] font-bold leading-[0.86] tracking-[-0.075em]">
              Have a problem
              <br />
              worth <span className="text-[#d9ff57]">exploring?</span>
            </h2>

            <p className="mt-10 max-w-xl text-lg leading-8 text-[#777]">
              I&apos;m currently open to Data Analytics and Business
              Analytics opportunities where I can learn, analyze and
              contribute.
            </p>
          </div>

          <div className="lg:pt-20">
            <div className="border-t border-[#222]">

              {/* Email */}
              <a
                href="mailto:tamaranarevathi@gmail.com"
                className="flex items-center justify-between border-b border-[#222] py-6 text-lg transition hover:text-[#d9ff57]"
              >
                <span className="flex items-center gap-4">
                  <Mail size={19} />
                  <span>Email</span>
                </span>

                <ArrowUpRight size={19} />
              </a>

              {/* Phone */}
              <a
                href="tel:+917032631195"
                className="flex items-center justify-between border-b border-[#222] py-6 text-lg transition hover:text-[#d9ff57]"
              >
                <span className="flex items-center gap-4">
                  <Phone size={19} />
                  <span>+91 70326 31195</span>
                </span>

                <ArrowUpRight size={19} />
              </a>

              {/* LinkedIn */}
              <a
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border-b border-[#222] py-6 text-lg transition hover:text-[#d9ff57]"
              >
                <span className="flex items-center gap-4">
                  <Linkedin size={19} />
                  <span>LinkedIn</span>
                </span>

                <ArrowUpRight size={19} />
              </a>

              {/* GitHub */}
              <a
                href={portfolio.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border-b border-[#222] py-6 text-lg transition hover:text-[#d9ff57]"
              >
                <span className="flex items-center gap-4">
                  <Github size={19} />
                  <span>GitHub</span>
                </span>

                <ArrowUpRight size={19} />
              </a>
            </div>

            <p className="mt-8 text-xs uppercase tracking-widest text-[#555]">
              {portfolio.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
