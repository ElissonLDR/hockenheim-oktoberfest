import { Diamonds, TicketButton } from "./ui";

const LINKS = [
  { label: "A festa", href: "#a-festa" },
  { label: "Comidas", href: "#comidas" },
  { label: "Roteiro", href: "#roteiro" },
  { label: "Incluso", href: "#incluso" },
  { label: "Dúvidas", href: "#duvidas" },
];

function InstagramIcon({ className = "" }: { className?: string }) {
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
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="container-okt py-14 pb-32 md:py-16 md:pb-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-md">
            <a href="#top" aria-label="Voltar ao topo">
              <img
                src="/images/logo-oktoberfest.png?v=3"
                alt="Logo Oktoberfest Hockenheim"
                loading="lazy"
                className="h-12 w-auto brightness-0 invert md:h-14"
              />
            </a>
            <Diamonds className="mt-6" />
            <p className="mt-4 text-[15px] leading-relaxed text-cream">
              31 de outubro · 2026 · das 13h às 21h
              <br />
              Cervejaria Hockenheim
            </p>
            <a
              href="https://maps.google.com/?q=Estrada+do+Vinho+5043+Canguera+Sao+Roque+SP+18145-002"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-[14px] font-bold leading-relaxed text-cream transition-colors hover:text-blue"
            >
              Estrada do Vinho, 5043 · Canguera
              <br />
              São Roque · SP · 18145-002
            </a>
            <a
              href="https://maps.google.com/?q=Estrada+do+Vinho+5043+Canguera+Sao+Roque+SP+18145-002"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-[14px] font-bold text-cream transition-colors hover:text-blue"
            >
              Estacionamento cortesia para todos os visitantes.
            </a>
            <a
              href="https://instagram.com/hockenheim_br"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-blue transition-opacity hover:opacity-80"
            >
              <InstagramIcon />
              @hockenheim_br
            </a>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end" aria-label="Rodapé">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[13px] font-semibold uppercase tracking-[0.1em] text-cream-70 transition-colors hover:text-blue"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <TicketButton size="sm" />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-cream-15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-cream-70/60">
            © 2026 Cervejaria Hockenheim · Todos os direitos reservados.
          </p>
          <a
            href="#top"
            className="text-[13px] font-semibold uppercase tracking-[0.1em] text-cream-70 transition-colors hover:text-blue"
          >
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}
