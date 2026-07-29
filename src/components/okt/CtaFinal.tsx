import { Diamonds, Reveal, TicketButton } from "./ui";

export function CtaFinal() {
  return (
    <section id="ingressos-final" className="section-gap">
      <div className="container-okt">
        <Reveal>
          <div className="relative isolate min-h-[680px] overflow-hidden rounded-[28px] md:min-h-0">
            <img
              src="/images/barril-hockenheim-banner-mobile.png?v=8"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="pointer-events-none absolute inset-0 size-full object-cover object-bottom md:hidden"
            />
            <img
              src="/images/barril-hockenheim-banner.png?v=8"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="pointer-events-none absolute inset-0 hidden size-full object-cover object-right md:block"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-navy/50 md:bg-navy/20 md:bg-gradient-to-r md:from-navy/35 md:via-navy/0 md:to-transparent"
              aria-hidden="true"
            />

            <div className="relative max-w-xl px-6 pt-8 pb-56 md:px-12 md:py-24 lg:px-16">
              <Diamonds />
              <p className="eyebrow-okt mt-4 text-blue">31 de outubro · Cervejaria Hockenheim</p>
              <h2 className="h2-okt mt-4 max-w-[18ch] text-cream">O barril só é aberto uma vez por ano</h2>
              <p className="lead-okt mt-4 text-cream-70">
                Ingressos limitados à capacidade do espaço, com venda 100% antecipada. Quem deixa para depois assiste
                pelos stories.
              </p>
              <div className="mt-6">
                <TicketButton size="lg" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
