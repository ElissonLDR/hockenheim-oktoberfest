import { useRef, useState } from "react";
import { Diamonds, Reveal } from "./ui";

const ITEMS = [
  {
    q: "Vou conseguir mesa?",
    a: "Sim. A festa é montada com mesas longas compartilhadas, como nas tendas alemãs, e o número de ingressos é limitado à capacidade real do espaço. Ninguém circula procurando lugar.",
  },
  {
    q: "É um evento para família ou só para quem quer beber?",
    a: "Os dois convivem. Tem brinquedo inflável com monitor para as crianças, dança folclórica e comida o dia todo — e tem chope artesanal liberado e banda à noite. É festa alemã, não bar.",
  },
  {
    q: "Como chego e onde estaciono?",
    a: "O evento acontece na estrutura da própria Cervejaria Hockenheim, em [ENDEREÇO COMPLETO], com [INFORMAR ESTACIONAMENTO]. Nada de estacionar longe e voltar a pé no escuro.",
  },
  {
    q: "Preciso ir fantasiado?",
    a: "Não é obrigatório, mas vale. Dirndl e Lederhosen são super bem-vindos, e a lojinha Hockenheim tem chapéu Gamsbart, tiaras e broches para quem quiser entrar no clima na hora — além das canecas oficiais e dos kits Pilzen & Weissbier.",
  },
  {
    q: "Posso comprar depois, na porta?",
    a: "Não. A venda é 100% antecipada e encerra quando a capacidade for atingida. Nas últimas edições, os lotes finais esgotaram antes da data.",
  },
];

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  return (
    <div className="border-b border-navy-10">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="flex w-full items-start justify-between gap-6 py-6 text-left"
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
        <p className="body-okt pb-7 pr-10 text-navy-60">{a}</p>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="duvidas" className="section-gap">
      <div className="container-okt">
        <Reveal>
          <Diamonds />
          <p className="eyebrow-okt mt-3 text-blue">Antes de você perguntar</p>
          <h2 className="h2-okt mt-4 text-navy">Dúvidas frequentes</h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 max-w-[820px] border-t border-navy-10">
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
    </section>
  );
}
