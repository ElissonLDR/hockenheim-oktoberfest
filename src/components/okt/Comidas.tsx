import { Diamonds, Reveal, TicketButton } from "./ui";

const ITEMS = [
  { title: "Bretzel", cat: "Comida", img: "bretzel.jpg" },
  { title: "Oktober Burger", cat: "Comida", img: "oktober-burger.jpg" },
  { title: "Eisbein Sandwich", cat: "Comida", img: "eisbein-sandwich.jpg" },
  { title: "Hot Dog Alemão", cat: "Comida", img: "hot-dog-alemao.jpg" },
  { title: "Torresmo Crocante", cat: "Comida", img: "torresmo-crocante.jpg" },
  { title: "Apfelstrudel", cat: "Sobremesa", img: "apfelstrudel.jpg" },
  { title: "Oktober Eiscreme", cat: "Sobremesa", img: "oktober-eiscreme.jpg" },
];

export function Comidas() {
  return (
    <section id="comidas" className="section-gap">
      <div className="container-okt">
        <Reveal>
          <Diamonds />
          <p className="eyebrow-okt mt-3 text-blue">Open food o dia inteiro</p>
          <h2 className="h2-okt mt-4 text-navy">As comidas típicas da festa</h2>
          <p className="lead-okt mt-6 text-navy-60">
            Cozinha alemã de verdade, do salgado à sobremesa, liberada o dia todo. Uma amostra do que sai nas estações.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal as="li" key={item.img} delay={(i % 4) * 80}>
              <figure className="group relative h-full overflow-hidden rounded-[20px]">
                <img
                  src={`/images/${item.img}?v=3`}
                  alt={item.title}
                  loading="lazy"
                  className="aspect-[8/7] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] md:aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-navy-90),var(--color-navy-70)_28%,transparent_62%)] opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <p className="tag-okt text-blue">{item.cat}</p>
                  <h3 className="mt-2 font-display text-[24px] leading-[1.05] text-cream">{item.title}</h3>
                </figcaption>
              </figure>
            </Reveal>
          ))}

          <Reveal as="li" delay={3 * 80}>
            <div className="flex aspect-[8/7] h-full flex-col items-center justify-center rounded-[20px] bg-navy p-6 text-center md:aspect-auto md:p-8">
              <Diamonds />
              <h3 className="h3-okt mt-4 text-cream">Faça parte dessa experiência</h3>
              <p className="body-sm-okt mt-3 text-cream-70">
                Garanta seu lugar e aproveite tudo isso sem limite.
              </p>
              <div className="mt-8">
                <TicketButton size="sm" />
              </div>
            </div>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
