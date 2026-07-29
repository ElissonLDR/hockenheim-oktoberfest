import { useEffect, useRef, useState, type ReactNode } from "react";

export const TICKET_URL = "#ingressos";

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
  const heights = { sm: "h-11 px-6 text-[14px]", md: "h-14 px-8 text-[16px]", lg: "h-16 px-10 text-[16px]" };
  return (
    <a
      href={TICKET_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-blue font-bold tracking-[0.02em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:brightness-92 hover:shadow-soft active:translate-y-0 active:shadow-none ${heights[size]} ${className}`}
    >
      Garantir meu ingresso
      <ArrowRight />
    </a>
  );
}

export function ArrowRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
