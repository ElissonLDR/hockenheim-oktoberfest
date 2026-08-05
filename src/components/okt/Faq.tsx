import { useRef, useState, type ReactNode } from "react";
import { Diamonds, Reveal } from "./ui";

const MAPS_URL =
  "https://maps.google.com/?q=Estrada+do+Vinho+5043+Canguera+Sao+Roque+SP+18145-002";

const ITEMS: { q: string; a: ReactNode }[] = [
  {
    q: "Vou conseguir mesa?",
    a: "Sim. A festa é montada com mesas longas compartilhadas, como nas tendas alemãs, e o número de ingressos é limitado à capacidade real do espaço. Ninguém circula procurando lugar.",
  },
  {
    q: "É um evento para família ou só para quem quer beber?",
    a: "Os dois convivem. Tem espaço kids interno e externo, com infláveis e monitores, e comida o dia todo, e tem chope artesanal liberado e banda ao vivo. O ambiente é pet friendly, com área interna e externa. É festa alemã, não bar.",
  },
  {
    q: "Como chego e onde estaciono?",
    a: (
      <>
        O evento acontece na estrutura da própria Cervejaria Hockenheim, na{" "}
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-navy underline underline-offset-2 transition-colors hover:text-blue"
        >
          Estrada do Vinho 5043, Canguera, São Roque, SP, 18145-002
        </a>
        .{" "}
        <strong className="font-bold text-navy">
          Estacionamento cortesia, grátis para todos os visitantes do evento
        </strong>
        .
      </>
    ),
  },
  {
    q: "Que horas começa e até quando vai?",
    a: "A festa acontece no dia 31 de outubro, das 13h às 21h: oito horas de open food, open bar e música ao vivo. Não há reentrada: depois que você sai, não é possível retornar.",
  },
  {
    q: "Preciso ir fantasiado?",
    a: "Não é obrigatório, mas vale. Dirndl e Lederhosen são super bem-vindos, e a lojinha Hockenheim tem as canecas oficiais e os kits Pilzen & Weissbier para quem quiser levar a festa para casa.",
  },
  {
    q: "Posso comprar depois, na porta?",
    a: "Não. A venda é 100% antecipada e encerra quando a capacidade for atingida. Nas últimas edições, os lotes finais esgotaram antes da data.",
  },
];

function Item({ q, a, open, onToggle }: { q: string; a: ReactNode; open: boolean; onToggle: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  return (
    <div className="border-b border-navy-10">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left"
        >
          <span className="font-display text-[24px] leading-[1.05] text-navy">{q}</span>
          <span
            className={`mt-1 shrink-0 text-blue transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            aria-hidden="true"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        ref={panelRef}
        style={{ maxHeight: open ? `${panelRef.current?.scrollHeight ?? 400}px` : 0 }}
        className="overflow-hidden transition-[max-height] duration-500 ease-out"
      >
        <p className="pb-7 pr-10 text-[16px] leading-[1.7] text-navy-60">{a}</p>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="duvidas" className="pb-8 pt-[clamp(56px,7vw,105px)] md:pb-10">
      <div className="container-okt">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <Reveal>
              <div className="md:sticky md:top-[120px]">
                <Diamonds />
                <p className="eyebrow-okt mt-3 text-blue">Antes de você perguntar</p>
                <h2 className="h2-okt mt-4 text-navy">Dúvidas frequentes</h2>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal delay={80}>
              <div className="border-t border-navy-10">
                {ITEMS.map((item, i) => (
                  <Item
                    key={item.q}
                    q={item.q}
                    a={item.a}
                    open={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
