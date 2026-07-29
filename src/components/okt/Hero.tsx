import { Diamonds, Reveal, TicketButton } from "./ui";

export function Hero() {
  return (
    <section id="top" className="px-6 pt-[88px] md:px-10 md:pt-[104px]">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="relative isolate overflow-hidden rounded-[28px]" style={{ height: "min(88vh, 820px)" }}>
          <img
            src="/images/hero-evento.jpg"
            alt="Público celebrando na Oktoberfest da Cervejaria Hockenheim"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-navy-90),var(--color-navy-70))]" />

          <div className="relative flex size-full items-center">
            <div className="w-full px-6 py-14 text-center md:px-14 md:text-left">
              <Reveal>
                <span className="inline-flex items-center rounded-full border border-cream-40 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-cream">
                  2ª Edição
                </span>
              </Reveal>

              <Reveal delay={80}>
                <Diamonds className="mt-8 justify-center md:justify-start" />
              </Reveal>

              <Reveal delay={160}>
                <p className="eyebrow-okt mt-3 text-blue">Hockenheim · Cervejaria Artesanal</p>
              </Reveal>

              <Reveal delay={240}>
                <p className="mt-4 flex items-baseline justify-center gap-2 font-display text-cream md:justify-start">
                  <span className="text-[40px] leading-[0.95] md:text-[72px]">31 de outubro</span>
                  <span className="text-[16px] leading-none text-cream-70 md:text-[29px]">· 2026</span>
                </p>
              </Reveal>

              <Reveal delay={320} blur>
                <h1 className="h1-okt mt-6 max-w-[16ch] text-cream max-md:mx-auto">
                  A Oktoberfest chegou na fábrica da Hockenheim.
                </h1>
              </Reveal>

              <Reveal delay={400}>
                <p className="lead-okt mt-6 text-cream-70 max-md:mx-auto">
                  Um dia inteiro de open food, open bar de chope artesanal, provas típicas e música ao vivo — dos
                  tanques da fábrica ao palco.
                </p>
              </Reveal>

              <Reveal delay={480}>
                <div className="mt-10 flex flex-col items-center gap-6 md:items-start">
                  <TicketButton />
                  <a
                    href="#a-festa"
                    className="inline-flex items-center gap-2 text-[16px] font-semibold text-cream transition-opacity hover:opacity-80"
                  >
                    <span className="okt-bounce inline-block">▾</span> conheça a festa
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
