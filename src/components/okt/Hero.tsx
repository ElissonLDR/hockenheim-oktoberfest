import { Diamonds, Reveal, TicketButton } from "./ui";

export function Hero() {
  return (
    <section id="top" className="pt-[88px] md:pt-[104px]">
      <div className="mx-auto w-[98%]">
        <div className="relative isolate flex min-h-[840px] overflow-hidden rounded-[28px] md:min-h-[min(88vh,820px)]">
          <img
            src="/images/hero-section-banner-mobile.png?v=10"
            alt="Oktoberfest Hockenheim: chope, burger e bretzels"
            className="absolute inset-0 size-full scale-110 object-cover object-bottom blur-md md:hidden"
          />
          <img
            src="/images/hero-section-banner-desktop.png?v=10"
            alt="Oktoberfest Hockenheim: chope, burger e bretzels"
            className="absolute inset-0 hidden size-full scale-110 object-cover object-right blur-md md:block"
          />

          <img
            src="/images/hocky.png?v=9"
            alt="Hocky, mascote da Oktoberfest Hockenheim"
            className="pointer-events-none absolute bottom-3 left-1/2 z-30 h-[96px] w-auto -translate-x-1/2 drop-shadow-lg md:bottom-4 md:left-auto md:right-5 md:translate-x-0 md:h-[150px] lg:h-[170px]"
          />

          <div className="relative z-20 flex w-full items-start md:items-center">
            <div className="container-okt grid w-full items-center gap-10 pb-36 pt-6 text-center md:grid-cols-2 md:py-14 md:text-left">
              <div className="w-full">
                <Reveal>
                  <span className="inline-flex items-center rounded-full border border-navy/25 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-navy">
                    2ª Edição
                  </span>
                </Reveal>

                <Reveal delay={80}>
                  <div className="mt-3 flex flex-wrap items-center justify-center gap-3 md:mt-8 md:justify-start">
                    <Diamonds />
                    <p className="eyebrow-okt text-blue">Hockenheim · Cervejaria Artesanal</p>
                    <Diamonds />
                  </div>
                </Reveal>

                <Reveal delay={160}>
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
                  <p className="lead-okt mt-3 text-navy max-md:mx-auto md:mt-6">
                    Um dia inteiro de open food, open bar de chope artesanal, provas típicas e música ao vivo, dos
                    tanques da fábrica ao palco.
                  </p>
                </Reveal>

                <Reveal delay={480}>
                  <div className="mt-6 flex flex-col items-center gap-4 md:mt-10 md:items-start md:gap-6">
                    <TicketButton />
                    <a
                      href="#a-festa"
                      className="group relative inline-flex items-center gap-2 pb-1.5 text-[16px] font-semibold text-navy"
                    >
                      Conheça a festa
                      <span
                        aria-hidden
                        className="absolute bottom-0 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-blue transition-all duration-300 group-hover:w-full md:left-0 md:translate-x-0"
                      />
                    </a>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={240}>
                <div className="flex justify-center">
                  <video
                    src="/videos/oktoberfest-hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/images/hero-evento.jpg"
                    aria-label="Vídeo da Oktoberfest Hockenheim"
                    className="aspect-[9/16] w-[72%] max-w-[300px] rounded-[28px] border-4 border-blue object-cover shadow-[0_12px_32px_rgba(27,47,74,.14)] md:w-full md:max-w-[360px]"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
