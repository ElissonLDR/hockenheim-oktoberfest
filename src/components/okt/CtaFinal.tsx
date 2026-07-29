import { Diamonds, Reveal, TicketButton } from "./ui";

export function CtaFinal() {
  return (
    <section id="ingressos-final" className="section-gap pt-0">
      <div className="container-okt">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[28px] bg-navy px-6 py-16 md:px-16 md:py-24">
            <img
              src="/images/hero-evento.jpg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="pointer-events-none absolute inset-0 size-full object-cover opacity-[0.12]"
            />
            <div className="relative flex flex-col items-center text-center">
              <Diamonds />
              <p className="eyebrow-okt mt-3 text-blue">31 de outubro · Cervejaria Hockenheim</p>
              <h2 className="h2-okt mt-4 max-w-[18ch] text-cream">O barril só é aberto uma vez por ano</h2>
              <p className="lead-okt mt-6 text-cream-70">
                Ingressos limitados à capacidade do espaço, com venda 100% antecipada. Quem deixa para depois assiste
                pelos stories.
              </p>
              <div className="mt-12">
                <TicketButton size="lg" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
