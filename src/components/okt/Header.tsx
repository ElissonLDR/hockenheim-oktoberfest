import { useEffect, useState } from "react";
import { TicketButton } from "./ui";

const LINKS = [
  { label: "A festa", href: "#a-festa" },
  { label: "Comidas", href: "#comidas" },
  { label: "Roteiro", href: "#roteiro" },
  { label: "Incluso", href: "#incluso" },
  { label: "Dúvidas", href: "#duvidas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[72px] transition-all duration-300 md:h-[88px] ${
        scrolled ? "bg-cream/90 shadow-[0_2px_20px_rgba(27,47,74,.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-okt flex h-full items-center justify-between gap-6">
        <a href="#top" className="flex items-center" aria-label="Oktoberfest Hockenheim 2026">
          <img
            src="/images/logo-oktoberfest.png"
            alt="Logo Oktoberfest Hockenheim"
            className={`h-10 w-auto transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-[14px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300 ${
                scrolled ? "text-navy" : "text-cream"
              } after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-blue after:transition-all after:duration-300 hover:after:w-full`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <span className="hidden sm:block">
          <TicketButton size="sm" />
        </span>
        <a
          href="#ingressos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center rounded-full bg-blue px-5 text-[13px] font-bold tracking-[0.02em] text-cream sm:hidden"
        >
          Ingressos
        </a>
      </div>
    </header>
  );
}
