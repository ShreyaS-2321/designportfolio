import { useEffect, useState } from "react";
import imgAvatar from "@/imports/Frame37/f62c229b36b33a89fe6d879c925541bcfcf44d8e.png";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-9">
      <nav
        aria-label="Primary"
        className={`mx-auto flex w-full max-w-[600px] items-center justify-between gap-4 rounded-[33px] border border-white/50 px-3 py-2 backdrop-blur-md transition-all duration-500 sm:gap-7 sm:px-4 ${
          scrolled
            ? "bg-[#bbddff]/60 shadow-[0_10px_30px_rgba(13,151,255,0.22)]"
            : "bg-[#bbddff]/40"
        }`}
      >
        <a href="#home" className="shrink-0" aria-label="Shreya — home">
          <img
            alt=""
            src={imgAvatar}
            className="size-9 rounded-full object-cover sm:size-10"
            width={48}
            height={48}
          />
        </a>

        <ul className="hidden items-center gap-5 text-[15px] text-black md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-1 py-0.5 transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 items-center justify-center rounded-[33px] bg-ink px-4 text-[14px] text-white transition-transform hover:-translate-y-0.5 sm:text-[15px]"
          >
            Resume
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="flex size-9 items-center justify-center rounded-full border border-white/60 bg-white/40 md:hidden"
          >
            <span className="relative block h-3 w-4.5">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 rounded bg-ink transition-transform ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 rounded bg-ink transition-transform ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="mx-auto mt-2 grid w-full max-w-[600px] gap-1 rounded-[24px] border border-white/50 bg-[#bbddff]/70 p-2 backdrop-blur-md md:hidden"
        >
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex h-11 items-center rounded-[18px] px-4 text-[18px] text-black hover:bg-white/50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
