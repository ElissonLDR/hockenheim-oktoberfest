import type { ReactNode } from "react";
import { Diamonds, Reveal, TicketButton } from "./ui";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const ITEMS = [
  {
    icon: (
      <Icon>
        <path d="M3 11h18" />
        <path d="M5 11a7 7 0 0 1 14 0" />
        <path d="M4 15h16" />
        <path d="M6 19h12" />
      </Icon>
    ),
    title: "Open food o dia todo",
    text: "As três estações liberadas, do salgado à sobremesa, sem consumação e sem limite de idas.",
  },
  {
    icon: (
      <Icon>
        <path d="M6 4h9v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" />
        <path d="M15 7h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3" />
        <path d="M9 8v8" />
      </Icon>
    ),
    title: "Open bar Hockenheim",
    text: "Chope Pilzen e Weissbier artesanais, drink exclusivo, refrigerante e água.",
  },
  {
    icon: (
      <Icon>
        <path d="M3 9h18" />
        <path d="M5 9v11" />
        <path d="M19 9v11" />
        <path d="M3 6h18l-1-2H4z" />
        <path d="M7 14h10" />
      </Icon>
    ),
    title: "Mesa garantida",
    text: "Mesas longas compartilhadas, no estilo das tendas de Munique. Ninguém fica de pé com o copo na mão.",
  },
  {
    icon: (
      <Icon>
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </Icon>
    ),
    title: "Programação completa",
    text: "Danças típicas, provas alemãs (chope de metro e Masskrugstemmen) e as bandas ao vivo.",
  },
  {
    icon: (
      <Icon>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2" />
        <circle cx="17" cy="11" r="2" />
        <path d="M15 21v-1a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v1" />
      </Icon>
    ),
    title: "Espaço para crianças",
    text: "Brinquedos infláveis com monitores. Dá para vir com a família e continuar sentado.",
  },
  {
    icon: (
      <Icon>
        <path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <circle cx="12" cy="12.5" r="3.5" />
      </Icon>
    ),
    title: "Estações para foto",
    text: "Cenários montados pela festa inteira. Marque @hockenheim_br e apareça no nosso perfil.",
  },
];

function cellClasses(i: number) {
  const classes = ["py-10", "md:p-10"];
  if (i > 0) classes.push("border-t border-cream-15");
  // tablet: 2 columns
  classes.push(i >= 2 ? "md:border-t" : "md:border-t-0");
  classes.push(i % 2 !== 0 ? "md:border-l md:border-cream-15" : "md:border-l-0");
  // desktop: 3 columns
  classes.push(i >= 3 ? "lg:border-t" : "lg:border-t-0");
  classes.push(i % 3 !== 0 ? "lg:border-l lg:border-cream-15" : "lg:border-l-0");
  return classes.join(" ");
}

export function Incluso() {
  return (
    <section id="incluso" className="section-gap">
      <div className="container-okt">
        <Reveal>
          <div className="rounded-[28px] bg-navy p-10 md:px-16 md:py-[72px]">
            <div className="flex flex-col items-center text-center">
              <Diamonds />
              <p className="eyebrow-okt mt-3 text-blue">Um ingresso, tudo dentro</p>
              <h2 className="h2-okt mt-4 text-cream">O que está incluso</h2>
              <p className="lead-okt mt-6 text-cream-70">Você entra, senta e para de abrir a carteira.</p>
            </div>

            <ul className="mt-12 grid grid-cols-1 md:-m-10 md:mt-6 md:grid-cols-2 lg:grid-cols-3">
              {ITEMS.map((item, i) => (
                <Reveal as="li" key={item.title} delay={(i % 3) * 80} className={cellClasses(i)}>
                  {item.icon}
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
