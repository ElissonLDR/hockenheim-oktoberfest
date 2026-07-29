import { Diamonds, Reveal, TicketButton } from "./ui";

export function Hero() {
  return (
    <section id="top" className="pt-[88px] md:pt-[104px]">
      <div className="mx-auto w-[98%]">
        <div className="relative isolate h-[min(135dvh,1100px)] overflow-hidden rounded-[28px] md:h-[min(88vh,820px)]">
          <img
            src="/images/hero-section-banner-mobile.png?v=10"
            alt="Oktoberfest Hockenheim — chope, burger e bretzels"
            className="absolute inset-0 size-full object-cover object-bottom md:hidden"
          />
          <img
            src="/images/hero-section-banner-desktop.png?v=10"
            alt="Oktoberfest Hockenheim — chope, burger e bretzels"
            className="absolute inset-0 hidden size-full object-cover object-right md:block"
          />

          <img
            src="/images/hocky.png?v=9"
            alt="Hocky, mascote da Oktoberfest Hockenheim"
            className="pointer-events-none absolute bottom-3 right-3 z-30 h-[120px] w-auto drop-shadow-lg md:bottom-4 md:right-5 md:h-[150px] lg:h-[170px]"
          />

          <div className="relative z-20 flex size-full items-start md:items-center">
            <div className="container-okt w-full pt-6 pb-14 text-center md:py-14 md:text-left">
              <div className="w-full md:w-1/2">
                <Reveal>
                  <span className="inline-flex items-center rounded-full border border-navy/25 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-navy">
                    2ª Edição
                  </span>
                </Reveal>

                <Reveal delay={80}>
                  <Diamonds className="mt-3 justify-center md:mt-8 md:justify-start" />
                </Reveal>

                <Reveal delay={160}>
                  <p className="eyebrow-okt mt-2 text-blue md:mt-3">Hockenheim · Cervejaria Artesanal</p>
                </Reveal>

                <Reveal delay={240}>
                  <div className="mt-3 flex justify-center md:mt-4 md:justify-start">
                    <span className="inline-flex items-baseline gap-2 rounded-full border border-blue/50 bg-blue/20 px-6 py-2 font-display text-navy backdrop-blur-sm">
                      <span className="text-[28px] leading-[1] md:text-[42px]">31 de outubro</span>
                      <span className="text-[28px] leading-none md:text-[42px]">· 2026</span>
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={320} blur>
                  <h1 className="h1-okt mt-4 max-w-[16ch] text-navy max-md:mx-auto md:mt-6">
                    A Oktoberfest chegou na fábrica da Hockenheim.
                  </h1>
                </Reveal>

                <Reveal delay={400}>
                  <p className="lead-okt mt-3 text-navy max-md:mx-auto md:mt-6 md:text-navy-60">
                    Um dia inteiro de open food, open bar de chope artesanal, provas típicas e música ao vivo — dos
                    tanques da fábrica ao palco.
                  </p>
                </Reveal>

                <Reveal delay={480}>
                  <div className="mt-6 flex flex-col items-center gap-4 md:mt-10 md:items-start md:gap-6">
                    <TicketButton />
                    <a
                      href="#a-festa"
                      className="inline-flex items-center gap-2 text-[16px] font-semibold text-navy transition-opacity hover:opacity-80"
                    >
                      conheça a festa
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
