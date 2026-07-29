import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/okt/Header";
import { Hero } from "@/components/okt/Hero";
import { OperaQueen } from "@/components/okt/OperaQueen";
import { Comidas } from "@/components/okt/Comidas";
import { Roteiro } from "@/components/okt/Roteiro";
import { Incluso } from "@/components/okt/Incluso";
import { Faq } from "@/components/okt/Faq";
import { CtaFinal } from "@/components/okt/CtaFinal";
import { Footer } from "@/components/okt/Footer";
import { MobileBar } from "@/components/okt/MobileBar";
import { SectionDivider } from "@/components/okt/ui";

const title = "Oktoberfest Hockenheim 2026 · 2ª Edição · 31 de outubro";
const description =
  "Open food, open bar de chope artesanal, provas típicas e Ópera Queen Tributo ao vivo na fábrica da Hockenheim. Ingressos limitados, venda 100% antecipada.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <OperaQueen />
        <SectionDivider />
        <Comidas />
        <SectionDivider />
        <Roteiro />
        <Incluso />
        <SectionDivider />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
