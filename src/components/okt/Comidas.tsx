import { Diamonds, Reveal } from "./ui";

const ITEMS = [
  { title: "Bretzel", cat: "Comida", img: "bretzel.jpg" },
  { title: "Oktober Burger", cat: "Comida", img: "oktober-burger.jpg" },
  { title: "Eisbein Sandwich", cat: "Comida", img: "eisbein-sandwich.jpg" },
  { title: "Hot Dog Alemão", cat: "Comida", img: "hot-dog-alemao.jpg" },
  { title: "Torresmo Crocante", cat: "Comida", img: "torresmo-crocante.jpg" },
  { title: "Apfelstrudel", cat: "Sobremesa", img: "apfelstrudel.jpg" },
  { title: "Oktober Eiscreme, gelato em casquinha", cat: "Sobremesa", img: "oktober-eiscreme.jpg" },
];

export function Comidas() {
  return (
    <section id="comidas" className="section-gap pt-0">
      <div className="container-okt">
        <Reveal>
          <Diamonds />
          <p className="eyebrow-okt mt-3 text-blue">Open food o dia inteiro</p>
          <h2 className="h2-okt mt-4 text-navy">As comidas típicas da festa</h2>
          <p className="lead-okt mt-6 text-navy-60">
            Cozinha alemã de verdade, do salgado à sobremesa, liberada o dia todo. Uma amostra do que sai nas estações.
          </p>
        </Reveal>
      </div>

      <ul className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:container-okt md:mt-12 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-10 lg:grid-cols-3">
        {ITEMS.map((item, i) => (
          <Reveal
            as="li"
            key={item.img}
            delay={(i % 3) * 80}
            className={`w-[78vw] shrink-0 snap-start md:w-auto ${i === 6 ? "lg:col-span-2" : ""}`}
          >
            <figure className="group relative h-full overflow-hidden rounded-[20px]">
              <img
                src={`/images/${item.img}`}
                alt={item.title}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
                  i === 6 ? "aspect-[4/5] lg:aspect-[8/5]" : "aspect-[4/5]"
                }`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-navy-90),var(--color-navy-70)_28%,transparent_62%)] opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <p className="tag-okt text-blue">{item.cat}</p>
                <h3 className="mt-2 font-display text-[24px] leading-[1.05] text-cream">{item.title}</h3>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
