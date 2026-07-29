import { Diamonds, Reveal, TicketButton } from "./ui";

export function OperaQueen() {
  return (
    <section id="a-festa" className="section-gap">
      <div className="container-okt">
        <Reveal>
          <div className="grid items-center gap-12 rounded-[28px] bg-navy p-10 md:grid-cols-12 md:gap-14 md:px-16 md:py-[72px]">
            <div className="order-2 md:order-1 md:col-span-7">
              <Diamonds />
              <p className="eyebrow-okt mt-3 text-blue">Música ao vivo · o principal atrativo</p>
              <h2 className="h2-okt mt-4 text-cream">Ópera Queen Tributo no palco</h2>
              <p className="body-okt mt-6 text-cream-70">
                A banda que fecha a noite tocando os maiores clássicos do Queen — cerveja na mão e todo mundo cantando
                junto. Antes do show principal, a Radiophonica esquenta o palco com rock ao vivo.
              </p>
              <div className="mt-12">
                <TicketButton />
              </div>
            </div>

            <div className="order-1 md:order-2 md:col-span-5">
              <div className="relative overflow-hidden rounded-[20px]">
                <img
                  src="/images/opera-queen.jpg"
                  alt="Banda Ópera Queen Tributo tocando no palco da Oktoberfest"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-[linear-gradient(to_top,var(--color-navy-70),transparent)]" />
                <img
                  src="/images/logo-opera-queen.png"
                  alt="Logo da banda Ópera Queen Tributo"
                  loading="lazy"
                  className="absolute bottom-5 left-5 h-14 w-auto"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
