# Hockenheim Oktoberfest

Crie uma landing page de página única, em **português do Brasil**, para o evento **Oktoberfest Hockenheim 2026 — 2ª Edição**, com um único objetivo: **vender ingressos**. Use a copy exatamente como está escrita abaixo, sem reescrever, resumir, traduzir ou adicionar texto novo.

O resultado precisa parecer feito por um estúdio de design: moderno, editorial, com muito respiro, hierarquia tipográfica forte e alinhado à identidade da marca Hockenheim (cervejaria artesanal alemã). Nada de template genérico de evento.

---

## 1. IDENTIDADE VISUAL

### Cores (defina como tokens e use só elas)

| Token | Hex | Uso |
|---|---|---|
| `cream` | `#FEFFEF` | **Fundo de toda a página, sem exceção** |
| `navy` | `#1B2F4A` | Títulos, textos, boxes de destaque, footer |
| `blue` | `#18A0DC` | Cor de ação: botões, eyebrows, ícones, losangos, links, detalhes |

Derivados permitidos (apenas opacidades/variações das três acima):

- `navy-90` `rgba(27,47,74,.9)` — overlay de imagem
- `navy-70` `rgba(27,47,74,.7)` — gradiente sobre foto
- `navy-60` `rgba(27,47,74,.6)` — texto de corpo sobre creme
- `cream-70` `rgba(254,255,239,.7)` — texto de corpo sobre navy
- `cream-15` `rgba(254,255,239,.15)` — divisórias dentro dos boxes escuros
- `blue-12` `rgba(24,160,220,.12)` — fundo de badges e tags sobre creme

### Regra de fundo (importante)

**A página inteira tem o mesmo fundo: `cream`.** Não existe seção com fundo alternado, nem faixa colorida de largura total. O contraste visual vem exclusivamente de:

1. **Boxes escuros** (`navy`) usados em 3 seções específicas — ver item 4;
2. imagens grandes;
3. escala tipográfica.

### Elemento gráfico da marca

O logo usa **losangos azuis** (referência bandeira da Baviera). Reaproveite esse motivo como assinatura visual:

- Fita de losangos `blue` (~10px, espaçados, 3 a 5 unidades) usada como separador acima dos eyebrows.
- No fim de cada seção, uma linha divisória de 1px em `navy` a 10% de opacidade, com um losango azul centralizado sobre ela.
- Nunca use xadrez de fundo, textura pesada ou marca d'água atrás de texto.

---

## 2. TIPOGRAFIA

Carregue do Google Fonts: **Germania One** (400) e **Open Sans** (400, 600, 700).

- **Germania One** → exclusivamente títulos, números grandes e badges de data. É uma display robusta: use com `letter-spacing: 0` a `-0.01em` e `line-height` apertado (0.92–1.05). Nunca em blocos de texto corrido, nunca abaixo de 20px.
- **Open Sans** → todo o resto: parágrafos, listas, eyebrows, botões, FAQ, footer, header.

### Escala (respeite os limites)

**Títulos — Germania One**

| Nível | Mobile | Desktop | Regra |
|---|---|---|---|
| H1 | 44px | `clamp(44px, 7vw, 96px)` | line-height .92, máx. 2 linhas no desktop |
| H2 | 34px | `clamp(34px, 4.5vw, 68px)` | line-height .95, máx. 2 linhas |
| H3 | 24px | 28px | line-height 1.05 |
| Número/data | 40px | 72px | usado no badge de data do hero |

**Textos — Open Sans (nada passa de 16px)**

| Elemento | Tamanho | Detalhe |
|---|---|---|
| Lead (parágrafo abaixo do H1/H2) | 16px | line-height 1.65, `max-width: 58ch` |
| Corpo | 16px | line-height 1.7, `max-width: 62ch` |
| Corpo secundário / listas | 15px | line-height 1.65 |
| Eyebrow | 13px | caixa alta, weight 700, `letter-spacing .14em` |
| Tag / badge / categoria | 12px | caixa alta, weight 700, `letter-spacing .1em` |
| Botão | 16px | weight 700, `letter-spacing .02em` |
| Legenda / footer | 14px | — |

Nenhum texto em Open Sans pode passar de 16px em nenhum breakpoint. O impacto vem dos títulos, não do corpo.

---

## 3. LAYOUT, GRID E ESPAÇAMENTO

- **Container geral: `max-width: 1200px`**, centralizado, padding lateral 24px (mobile) / 40px (desktop). **Tudo** na página respeita essa largura — incluindo os boxes escuros, que têm exatamente 1200px de largura máxima.
- Grid de 12 colunas com gap de 24px no desktop; 1 coluna no mobile.
- Espaçamento vertical entre seções: `clamp(80px, 10vw, 150px)`.
- Ritmo interno de cada seção: fita de losangos → eyebrow (12px abaixo) → título (16px abaixo) → lead (24px abaixo) → conteúdo (48px abaixo) → CTA (48px abaixo).
- Cantos: boxes escuros e imagens grandes com `border-radius: 28px`; imagens de card com 20px; botões com 999px (pill).
- Sombras: só em botão e em imagem sobreposta, sempre suaves (`0 12px 32px rgba(27,47,74,.14)`). Nada de sombra dura.
- Mobile-first, testado em 360 / 390 / 768 / 1280 / 1536px. Sem scroll horizontal em nenhum ponto.

---

## 4. PADRÃO "BOX ESCURO" (seções 2, 5 e 7)

Três seções usam este tratamento, e apenas elas: **Seção 2 (Ópera Queen)**, **Seção 5 (O que está incluso)** e **Seção 7 (CTA final)**.

Especificação do box:

- Fundo `navy`, `border-radius: 28px`, largura máxima **1200px** (a mesma dos conteúdos gerais da página), respirando dentro do fundo creme da página — ou seja, o creme aparece nas laterais, acima e abaixo do box.
- Padding interno: 40px (mobile) / `72px 64px` (desktop).
- Títulos em `cream`, eyebrow em `blue`, corpo em `cream-70`.
- **O conteúdo interno NÃO usa cards, caixas, molduras ou fundos próprios.** Os destaques ficam soltos sobre o navy, organizados por grid e separados por divisórias de 1px em `cream-15`.
- Ícones e números internos em `blue`.
- Nenhum box escuro dentro de outro box escuro.

---

## 5. IMAGENS

Vou usar **fotos reais do evento**. Crie placeholders em `public/images/` com estes nomes exatos (minúsculas, sem acento, hífen no lugar de espaço) e deixe as referências prontas para eu só substituir os arquivos:

- `hero-evento.jpg` — foto ampla da festa (hero)
- `logo-oktoberfest.png` — logo do evento (header e footer)
- `opera-queen.jpg` — banda no palco
- `logo-opera-queen.png` — logo da banda
- Comidas: `bretzel.jpg`, `oktober-burger.jpg`, `eisbein-sandwich.jpg`, `hot-dog-alemao.jpg`, `torresmo-crocante.jpg`, `apfelstrudel.jpg`, `oktober-eiscreme.jpg`
- Roteiro: `open-food.jpg`, `chope.jpg`, `provas-alemas.jpg`, `espaco-kids.jpg`

Tratamento: todas com `object-fit: cover` e aspect-ratio fixo (sem layout shift), `loading="lazy"` fora da primeira dobra, `alt` descritivo. Fotos dentro de boxes escuros ganham leve overlay `navy-70` na base quando houver texto sobreposto. Hover em imagem de card: `scale(1.04)` em 500ms, com `overflow: hidden` no container.

---

## 6. HEADER

- Fixo no topo, altura 72px (mobile) / 88px (desktop).
- Estado inicial: transparente sobre o hero, logo e links em `cream`.
- Após 80px de scroll: fundo `cream` com blur e sombra baixa; logo e links passam para `navy`. Transição de 300ms.
- Esquerda: `logo-oktoberfest.png` (altura 40px). Centro: links de âncora em Open Sans 14px, caixa alta, `letter-spacing .1em` — A festa · Comidas · Roteiro · Incluso · Dúvidas, com sublinhado azul animado no hover. Direita: botão **Garantir meu ingresso**.
- Mobile: só logo + botão compacto. Sem menu hambúrguer.

---

## 7. BOTÕES E ESTADOS

- **Primário:** fundo `blue`, texto `cream`, altura 56px, padding lateral 32px, pill, Open Sans 700 16px. Hover: escurece 8%, sobe 2px, ganha sombra. Active: volta ao normal. Foco: anel de 3px `blue` a 40%.
- **Secundário (link de scroll do hero):** texto `cream`, sem fundo, com seta que faz um bounce vertical infinito e suave.
- Todos os CTAs têm exatamente o mesmo texto: **Garantir meu ingresso**, abrem em nova aba e apontam para uma constante única `TICKET_URL` (deixe como `#ingressos` por enquanto).
- Ícone opcional no botão: seta para a direita, deslocando 4px no hover.

---

## 8. ANIMAÇÃO

- Entrada por seção: `opacity 0→1` + `translateY(24px→0)`, 600ms, easing suave, disparada quando 20% do elemento entra na viewport, com stagger de 80ms entre itens de grid.
- Títulos podem entrar com um leve blur→nítido. Nada de zoom agressivo, parallax pesado, contador regressivo ou confete.
- Respeite `prefers-reduced-motion: reduce` desativando tudo.

---

## 9. SEÇÕES E COPY (usar literalmente)

### Seção 1 — Hero

Fundo `cream` (como toda a página), com a foto `hero-evento.jpg` dentro de um bloco arredondado de 28px ocupando a largura do container e altura `min(88vh, 820px)`, com gradiente `navy-90 → navy-70` sobre a foto e o texto em `cream`, alinhado à esquerda (centralizado no mobile).

- Selo pequeno acima de tudo: `2ª Edição`, em Open Sans 12px caixa alta, borda 1px `cream` a 40%, pill.
- Fita de losangos azuis.
- Eyebrow: `Hockenheim · Cervejaria Artesanal`
- Badge de data em Germania One, com `31 de outubro` grande e `· 2026` em 40% do tamanho, alinhado à base.
- H1 (único da página): `A Oktoberfest chegou na fábrica da Hockenheim.`
- Lead: `Um dia inteiro de open food, open bar de chope artesanal, provas típicas e música ao vivo — dos tanques da fábrica ao palco.`
- CTA primário: `Garantir meu ingresso`
- Abaixo, link secundário: `▾ conheça a festa`

### Seção 2 — Ópera Queen · **BOX ESCURO**

Box navy de 1200px, grid de duas colunas (7 texto / 5 imagem) no desktop, empilhado no mobile com a imagem primeiro.

- Eyebrow: `Música ao vivo · o principal atrativo`
- H2: `Ópera Queen Tributo no palco`
- Texto: `A banda que fecha a noite tocando os maiores clássicos do Queen — cerveja na mão e todo mundo cantando junto. Antes do show principal, a Radiophonica esquenta o palco com rock ao vivo.`
- CTA: `Garantir meu ingresso`
- Coluna direita: `opera-queen.jpg` em 4:5, radius 20px, e `logo-opera-queen.png` sobreposta no canto inferior, pequena (altura 56px), sem moldura.

### Seção 3 — Comidas (fundo creme, sem box)

- Fita de losangos · Eyebrow: `Open food o dia inteiro`
- H2: `As comidas típicas da festa`
- Lead: `Cozinha alemã de verdade, do salgado à sobremesa, liberada o dia todo. Uma amostra do que sai nas estações.`
- Galeria de 7 itens: grid de 3 colunas no desktop (o último item ocupa 2 colunas, sem buraco no grid), 2 no tablet, carrossel com scroll-snap e cards de 78vw no mobile.
- Cada item é **só a foto**, radius 20px, aspect-ratio 4:5, com gradiente `navy-70` na base e, sobre ele: título em Germania One 24px `cream` e categoria em Open Sans 12px caixa alta `blue`. Hover: zoom leve na foto e o gradiente escurece.
  1. `Bretzel` — `Comida`
  2. `Oktober Burger` — `Comida`
  3. `Eisbein Sandwich` — `Comida`
  4. `Hot Dog Alemão` — `Comida`
  5. `Torresmo Crocante` — `Comida`
  6. `Apfelstrudel` — `Sobremesa`
  7. `Oktober Eiscreme, gelato em casquinha` — `Sobremesa`

### Seção 4 — Roteiro do dia (fundo creme, sem box)

- Fita de losangos · Eyebrow: `O roteiro do dia`
- H2: `Do primeiro chope ao último show`
- Lead: `Do open food que não para até o show que fecha a noite — assim acontece o dia 31.`
- Quatro blocos em zig-zag (imagem/texto alternando lado), 6+6 colunas, imagem em 4:3 com radius 28px, empilhado no mobile com a imagem primeiro. Entre os blocos, espaçamento de 96px e a divisória com losango.
- Cada bloco: tag (pill com fundo `blue-12`, texto `blue`, 12px caixa alta) → kicker (Open Sans 13px caixa alta, `navy` a 50%) → H3 → texto.

1. Tag `Open food` · Kicker `O dia todo, sem limite` · H3 `Open food o dia inteiro` · Texto `Comida alemã de verdade saindo na sua frente, quantas vezes você quiser voltar.` · Abaixo, dois blocos de 15px separados por divisória fina, com a primeira palavra em weight 700: `Pratos principais — Bretzel, Eisbein Sandwich, Oktober Burger, Hot Dog Alemão, Linguiça com Batata Alemã, Tostex Canapé Currywurst, Torresmo Crocante, Bolinho de Linguiça Blumenau e Schnitzel & Cogumelo.` e `Sobremesas — Apfelstrudel e Oktober Eiscreme.` · Imagem `open-food.jpg`
2. Tag `Open bar` · Kicker `Direto dos tanques` · H3 `Chope tirado na origem` · Texto `Pilzen puro malte e Weissbier de trigo, produzidos e servidos no mesmo lugar. Mais o drink exclusivo da Oktoberfest, refrigerante e água mineral — tudo liberado, o dia inteiro.` · Imagem `chope.jpg`
3. Tag `Provas & palco` · Kicker `Com mestre de cerimônias` · H3 `Provas alemãs e danças típicas` · Texto `As provas típicas confirmadas: chope de metro cronometrado e o Masskrugstemmen — quem segura a caneca no braço estendido por mais tempo —, além das danças folclóricas alemãs. À noite, as bandas assumem o palco.` · Imagem `provas-alemas.jpg`
4. Tag `Espaço kids` · Kicker `Pode trazer a família` · H3 `Brinquedos infláveis com monitores` · Texto `Enquanto você fica na mesa com o chope e o bretzel, as crianças têm área própria com infláveis e monitores acompanhando. Festa alemã é festa de família — e aqui isso é levado a sério.` · Imagem `espaco-kids.jpg`

### Seção 5 — O que está incluso · **BOX ESCURO**

Box navy de 1200px. Topo do box centralizado:

- Fita de losangos · Eyebrow: `Um ingresso, tudo dentro`
- H2: `O que está incluso`
- Lead: `Você entra, senta e para de abrir a carteira.`

Abaixo, os 6 destaques em grid de 3 colunas × 2 linhas (2 colunas no tablet, 1 no mobile). **Sem cards, sem caixas, sem fundo próprio**: cada destaque é ícone lucide-style em `blue` (28px, traço fino) → H3 em `cream` → texto 15px em `cream-70`. Separação apenas por linhas de 1px `cream-15` entre colunas e linhas do grid (as bordas externas do grid não têm linha). Espaçamento interno generoso: 40px de gap.

1. `Open food o dia todo` — `As três estações liberadas, do salgado à sobremesa, sem consumação e sem limite de idas.`
2. `Open bar Hockenheim` — `Chope Pilzen e Weissbier artesanais, drink exclusivo, refrigerante e água.`
3. `Mesa garantida` — `Mesas longas compartilhadas, no estilo das tendas de Munique. Ninguém fica de pé com o copo na mão.`
4. `Programação completa` — `Danças típicas, provas alemãs (chope de metro e Masskrugstemmen) e as bandas ao vivo.`
5. `Espaço para crianças` — `Brinquedos infláveis com monitores. Dá para vir com a família e continuar sentado.`
6. `Estações para foto` — `Cenários montados pela festa inteira. Marque @hockenheim_br e apareça no nosso perfil.`

Fechando o box, centralizado: CTA `Garantir meu ingresso`.

### Seção 6 — FAQ (fundo creme, sem box)

- Fita de losangos · Eyebrow: `Antes de você perguntar`
- H2: `Dúvidas frequentes`
- Accordion de largura máxima 820px, alinhado à esquerda. Cada item: pergunta em Germania One 24px `navy`, ícone de "+" que rotaciona 45° ao abrir, resposta em Open Sans 16px `navy-60`, divisória de 1px `navy` a 10% entre itens. Primeiro item aberto por padrão. Acessível por teclado, um item aberto por vez, transição de altura suave.

1. `Vou conseguir mesa?` — `Sim. A festa é montada com mesas longas compartilhadas, como nas tendas alemãs, e o número de ingressos é limitado à capacidade real do espaço. Ninguém circula procurando lugar.`
2. `É um evento para família ou só para quem quer beber?` — `Os dois convivem. Tem brinquedo inflável com monitor para as crianças, dança folclórica e comida o dia todo — e tem chope artesanal liberado e banda à noite. É festa alemã, não bar.`
3. `Como chego e onde estaciono?` — `O evento acontece na estrutura da própria Cervejaria Hockenheim, em [ENDEREÇO COMPLETO], com [INFORMAR ESTACIONAMENTO]. Nada de estacionar longe e voltar a pé no escuro.`
4. `Preciso ir fantasiado?` — `Não é obrigatório, mas vale. Dirndl e Lederhosen são super bem-vindos, e a lojinha Hockenheim tem chapéu Gamsbart, tiaras e broches para quem quiser entrar no clima na hora — além das canecas oficiais e dos kits Pilzen & Weissbier.`
5. `Posso comprar depois, na porta?` — `Não. A venda é 100% antecipada e encerra quando a capacidade for atingida. Nas últimas edições, os lotes finais esgotaram antes da data.`

### Seção 7 — CTA final · **BOX ESCURO**

Box navy de 1200px, conteúdo centralizado, padding vertical maior (96px no desktop). Pode ter a foto do evento em `mix-blend` ou opacidade baixa (12%) dentro do box como textura de fundo, sem competir com o texto.

- Fita de losangos · Eyebrow: `31 de outubro · Cervejaria Hockenheim`
- H2 no maior tamanho da página depois do H1: `O barril só é aberto uma vez por ano`
- Lead: `Ingressos limitados à capacidade do espaço, com venda 100% antecipada. Quem deixa para depois assiste pelos stories.`
- CTA grande (altura 64px): `Garantir meu ingresso`

### Footer (fundo creme, sem box)

Logo Oktoberfest em `navy`, linha `31 de outubro · 2026 · Cervejaria Hockenheim` em 14px, link para o Instagram `@hockenheim_br`, links de âncora e linha de direitos em 14px `navy` a 50%. Divisória de 1px no topo.

### Barra fixa de CTA (só mobile)

Aparece depois do hero, fundo `navy`, altura 72px, com `31/10 · Ingressos limitados` em 14px `cream` à esquerda e botão azul compacto à direita.

---

## 10. RESTRIÇÕES

- Um único `

` (hero). Cada seção com `

`, cards e destaques com `

`.
- Contraste mínimo AA em todas as combinações; foco visível em tudo que é clicável.
- Não inventar preço, lote, horário, telefone, endereço ou nome de patrocinador. Manter `[ENDEREÇO COMPLETO]` e `[INFORMAR ESTACIONAMENTO]` literalmente.
- Não adicionar formulário, contador regressivo, depoimentos, mapa, newsletter, chat ou qualquer seção fora da lista acima.
- Não usar nenhuma cor fora da paleta, nenhuma fonte além de Germania One e Open Sans, e nenhum texto de corpo acima de 16px.
- Não usar fundo alternado por seção: a página é toda creme, e só as seções 2, 5 e 7 têm box navy.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/70ff68cf-4018-4607-9a9f-f0fedbc9ae1e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
