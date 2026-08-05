import { Diamonds, Reveal, TicketButton } from "./ui";

const ITEMS = [
  {
    img: "imagem-open-food.png",
    title: "Open food o dia todo",
    text: "As três estações liberadas, do salgado à sobremesa, sem consumação e sem limite de idas.",
  },
  {
    img: "chope-tap.jpg",
    title: "Open bar Hockenheim",
    text: "Chope Pilzen e Weissbier artesanais, drink exclusivo, refrigerante e água.",
  },
  {
    img: "mesa-garantida.jpg",
    title: "Mesa garantida",
    text: "Mesas longas compartilhadas, no estilo das tendas de Munique. Ninguém fica de pé com o copo na mão.",
  },
  {
    img: "provas-alemas.jpg",
    title: "Programação completa",
    text: "Danças típicas, provas alemãs (chope de metro e Masskrugstemmen) e as bandas ao vivo.",
  },
  {
    img: "espaco-kids.jpg",
    title: "Espaço para crianças",
    text: "Brinquedos infláveis com monitores. Dá para vir com a família e continuar sentado.",
  },
  {
    img: "lugares-para-fotos.jpg",
    title: "Estações para foto",
    text: "Cenários montados pela festa inteira. Marque @hockenheim_br e apareça no nosso perfil.",
  },
];

function cellClasses(i: number) {
  const classes = ["py-10", "md:p-10"];
  if (i > 0) classes.push("border-t border-cream-15");
  classes.push(i >= 2 ? "md:border-t" : "md:border-t-0");
  classes.push(i % 2 !== 0 ? "md:border-l md:border-cream-15" : "md:border-l-0");
  classes.push(i >= 3 ? "lg:border-t" : "lg:border-t-0");
  classes.push(i % 3 !== 0 ? "lg:border-l lg:border-cream-15" : "lg:border-l-0");
  return classes.join(" ");
}

export function Incluso() {
  return (
    <section id="incluso" className="pb-[clamp(56px,7vw,105px)] pt-8 md:pt-10">
      <div className="container-okt">
        <Reveal>
          <div className="rounded-[28px] bg-navy px-5 py-8 md:px-16 md:py-[72px]">
            <div className="flex flex-col items-center text-center">
              <Diamonds />
              <p className="eyebrow-okt mt-3 text-blue">Um ingresso, tudo dentro</p>
              <h2 className="h2-okt mt-4 text-cream">O que está incluso</h2>
              <p className="lead-okt mt-6 text-cream-70">Você entra, senta e para de abrir a carteira.</p>
            </div>

            <ul className="mt-12 grid grid-cols-1 md:-m-10 md:mt-6 md:grid-cols-2 lg:grid-cols-3">
              {ITEMS.map((item, i) => (
                <Reveal as="li" key={item.title} delay={(i % 3) * 80} className={cellClasses(i)}>
                  <div className="mb-4 h-44 w-full overflow-hidden rounded-xl md:h-72 lg:h-80">
                    <img
                      src={`/images/${item.img}?v=8`}
                      alt={item.title}
                      loading="lazy"
                      className="size-full object-cover object-center"
                    />
                  </div>
                  <h3 className="h3-okt mt-5 text-cream">{item.title}</h3>
                  <p className="body-sm-okt mt-3 text-cream-70">{item.text}</p>
                </Reveal>
              ))}
            </ul>

            <div className="mt-12 flex justify-center md:mt-20">
              <TicketButton />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
