import { Diamonds, Reveal, SectionDivider } from "./ui";

const BLOCKS = [
  {
    tag: "Open food",
    kicker: "O dia todo, sem limite",
    h3: "Open food o dia inteiro",
    text: "Comida alemã de verdade saindo na sua frente, quantas vezes você quiser voltar.",
    img: "open-food.jpg",
    alt: "Estação de open food com pratos alemães servidos na Oktoberfest",
    lists: [
      {
        strong: "Pratos principais",
        rest: " — Bretzel, Eisbein Sandwich, Oktober Burger, Hot Dog Alemão, Linguiça com Batata Alemã, Tostex Canapé Currywurst, Torresmo Crocante, Bolinho de Linguiça Blumenau e Schnitzel & Cogumelo.",
      },
      { strong: "Sobremesas", rest: " — Apfelstrudel e Oktober Eiscreme." },
    ],
  },
  {
    tag: "Open bar",
    kicker: "Direto dos tanques",
    h3: "Chope tirado na origem",
    text: "Pilzen puro malte e Weissbier de trigo, produzidos e servidos no mesmo lugar. Mais o drink exclusivo da Oktoberfest, refrigerante e água mineral — tudo liberado, o dia inteiro.",
    img: "chope.jpg",
    alt: "Chope artesanal Hockenheim sendo tirado direto dos tanques da fábrica",
  },
  {
    tag: "Provas & palco",
    kicker: "Com mestre de cerimônias",
    h3: "Provas alemãs e danças típicas",
    text: "As provas típicas confirmadas: chope de metro cronometrado e o Masskrugstemmen — quem segura a caneca no braço estendido por mais tempo —, além das danças folclóricas alemãs. À noite, as bandas assumem o palco.",
    img: "provas-alemas.jpg",
    alt: "Participantes disputando provas típicas alemãs no palco da festa",
  },
  {
    tag: "Espaço kids",
    kicker: "Pode trazer a família",
    h3: "Brinquedos infláveis com monitores",
    text: "Enquanto você fica na mesa com o chope e o bretzel, as crianças têm área própria com infláveis e monitores acompanhando. Festa alemã é festa de família — e aqui isso é levado a sério.",
    img: "espaco-kids.jpg",
    alt: "Crianças brincando nos brinquedos infláveis do espaço kids",
  },
];

export function Roteiro() {
  return (
    <section id="roteiro" className="section-gap">
      <div className="container-okt">
        <Reveal>
          <Diamonds />
          <p className="eyebrow-okt mt-3 text-blue">O roteiro do dia</p>
          <h2 className="h2-okt mt-4 text-navy">Do primeiro chope ao último show</h2>
          <p className="lead-okt mt-6 text-navy-60">
            Do open food que não para até o show que fecha a noite — assim acontece o dia 31.
          </p>
        </Reveal>

        <div className="mt-12">
          {BLOCKS.map((b, i) => (
            <div key={b.img}>
              <Reveal>
                <article className="grid items-center gap-8 md:grid-cols-12 md:gap-6">
                  <div
                    className={`overflow-hidden rounded-[28px] md:col-span-6 ${
                      i % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <img
                      src={`/images/${b.img}`}
                      alt={b.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>

                  <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <span className="tag-okt inline-flex rounded-full bg-blue-12 px-3 py-1.5 text-blue">{b.tag}</span>
                    <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-navy-50">
                      {b.kicker}
                    </p>
                    <h3 className="h3-okt mt-2 text-navy">{b.h3}</h3>
                    <p className="body-okt mt-4 text-navy-60">{b.text}</p>

                    {b.lists && (
                      <div className="mt-6 max-w-[62ch]">
                        {b.lists.map((l, li) => (
                          <p
                            key={l.strong}
                            className={`body-sm-okt text-navy-60 ${
                              li > 0 ? "mt-4 border-t border-navy-10 pt-4" : ""
                            }`}
                          >
                            <strong className="font-bold text-navy">{l.strong}</strong>
                            {l.rest}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>

              {i < BLOCKS.length - 1 && (
                <div className="py-[96px]">
                  <div className="relative h-px w-full bg-navy-10" aria-hidden="true">
                    <span className="absolute left-1/2 top-1/2 size-[10px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-blue" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[96px]">
        <SectionDivider />
      </div>
    </section>
  );
}
