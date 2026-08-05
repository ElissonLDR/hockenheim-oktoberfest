import { useEffect, useRef, useState, type ReactNode } from "react";

export const TICKET_URL = "https://zig.tickets/eventos/oktoberfest-hockenheim-2026";

export function Diamonds({ count = 4, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="block size-[10px] rotate-45 bg-blue" />
      ))}
    </div>
  );
}

export function SectionDivider() {
  return (
    <div className="container-okt" aria-hidden="true">
      <div className="relative h-px w-full bg-navy-10">
        <span className="absolute left-1/2 top-1/2 size-[10px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-blue" />
      </div>
    </div>
  );
}

export function DarkDivider({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full bg-cream-15 ${className}`} aria-hidden="true" />;
}

export function Reveal({
  children,
  delay = 0,
  blur = false,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  blur?: boolean;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "header" | "footer";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`okt-reveal ${blur ? "okt-reveal-blur" : ""} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function TicketButton({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const heights = {
    sm: "h-11 px-5 text-[13px] md:px-6 md:text-[14px]",
    md: "h-12 px-5 text-[13px] md:h-14 md:px-8 md:text-[16px]",
    lg: "h-12 px-5 text-[13px] md:h-16 md:px-10 md:text-[16px]",
  };
  return (
    <a
      href={TICKET_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-blue font-bold tracking-[0.02em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:brightness-92 hover:shadow-soft active:translate-y-0 active:shadow-none ${heights[size]} ${className}`}
    >
      Garantir meu ingresso
      <BeerIcon />
    </a>
  );
}

export function BeerIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`okt-beer-icon transition-transform duration-300 ${className}`}
    >
      <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
      <path d="M9 12v6" />
      <path d="M13 12v6" />
      <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1 .5 2.5.5S10 2 11 2s1.44.5 3 .5 2-.5 3-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5H14Z" />
      <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
    </svg>
  );
}
