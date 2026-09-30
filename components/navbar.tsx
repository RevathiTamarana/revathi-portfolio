
"use client";

import { Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { portfolio } from "@/data/portfolio";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Certifications", "#certifications"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [talkOpen, setTalkOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#1c1c1c] bg-black/85 backdrop-blur-xl">
        <div className="container-custom flex h-18 items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold tracking-[-0.05em]"
          >
            RT<span className="text-[#d9ff57]">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm text-[#8b8b8b] transition hover:text-white"
              >
                {label}
              </a>
            ))}

            <button
              onClick={() => setTalkOpen(true)}
              className="border border-[#333] px-4 py-2 text-sm transition hover:border-[#d9ff57] hover:bg-[#d9ff57] hover:text-black"
            >
              Let&apos;s Talk
            </button>
          </nav>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-[#222] bg-black px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">

              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-[#aaa] transition hover:text-white"
                >
                  {label}
                </a>
              ))}

              <button
                onClick={() => {
                  setOpen(false);
                  setTalkOpen(true);
                }}
                className="w-fit border border-[#333] px-4 py-2 text-sm transition hover:border-[#d9ff57] hover:bg-[#d9ff57] hover:text-black"
              >
                Let&apos;s Talk
              </button>

            </div>
          </nav>
        )}
      </header>

      {/* Dedicated Let's Talk Panel */}
      {talkOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-5 backdrop-blur-sm"
          onClick={() => setTalkOpen(false)}
        >
          <div
            className="relative w-full max-w-lg border border-[#292929] bg-[#090909] p-7 sm:p-10"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close */}
            <button
              onClick={() => setTalkOpen(false)}
              aria-label="Close contact panel"
              className="absolute right-5 top-5 text-[#777] transition hover:text-white"
            >
              <X size={22} />
            </button>

            <p className="text-xs uppercase tracking-[0.2em] text-[#666]">
              Let&apos;s Talk
            </p>

            <h2 className="mt-5 max-w-md text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl">
              Have an opportunity?
              <br />
              <span className="text-[#d9ff57]">Let&apos;s connect.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#777]">
              I&apos;m open to Data Analytics and Business Analytics
              opportunities, projects, and meaningful conversations.
            </p>

            <div className="mt-8 border-t border-[#222]">

              {/* Email */}
              <a
                href="mailto:tamaranarevathi@gmail.com"
                className="flex items-center justify-between border-b border-[#222] py-5 transition hover:text-[#d9ff57]"
              >
                <span className="flex items-center gap-4">
                  <Mail size={18} />
                  tamaranarevathi@gmail.com
                </span>

                <span className="text-xs uppercase tracking-widest text-[#555]">
                  Email
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+917032631195"
                className="flex items-center justify-between border-b border-[#222] py-5 transition hover:text-[#d9ff57]"
              >
                <span className="flex items-center gap-4">
                  <Phone size={18} />
                  +91 70326 31195
                </span>

                <span className="text-xs uppercase tracking-widest text-[#555]">
                  Call
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border-b border-[#222] py-5 transition hover:text-[#d9ff57]"
              >
                <span>LinkedIn</span>

                <span className="text-xs uppercase tracking-widest text-[#555]">
                  Open ↗
                </span>
              </a>

            </div>

            <button
              onClick={() => setTalkOpen(false)}
              className="mt-7 border border-[#333] px-5 py-3 text-sm transition hover:border-[#d9ff57] hover:bg-[#d9ff57] hover:text-black"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </>
  );
}