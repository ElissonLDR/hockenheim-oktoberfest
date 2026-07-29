const LINKS = [
  { label: "A festa", href: "#a-festa" },
  { label: "Comidas", href: "#comidas" },
  { label: "Roteiro", href: "#roteiro" },
  { label: "Incluso", href: "#incluso" },
  { label: "Dúvidas", href: "#duvidas" },
];

export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="container-okt py-14 pb-32 md:pb-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <img
              src="/images/logo-oktoberfest.png?v=3"
              alt="Logo Oktoberfest Hockenheim"
              loading="lazy"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-5 text-[14px] text-cream">31 de outubro · 2026 · Cervejaria Hockenheim</p>
            <a
              href="https://instagram.com/hockenheim_br"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-[14px] font-semibold text-blue hover:underline"
            >
              @hockenheim_br
            </a>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Rodapé">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[14px] text-cream-70 transition-colors hover:text-blue"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-12 text-[14px] text-cream-70/60">
          © 2026 Cervejaria Hockenheim · Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
