import { useState, useEffect } from "react";
import { Diamonds, Reveal, TicketButton } from "./ui";

export function OperaQueen() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (!showVideo) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowVideo(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [showVideo]);

  return (
    <>
      <section id="a-festa" className="section-gap">
        <div className="container-okt">
          <Reveal>
            <div className="grid overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#03060c_0%,#060b14_45%,#0a1220_100%)] md:grid-cols-12 md:items-center">
              <div className="order-2 flex flex-col justify-center p-8 md:order-1 md:col-span-5 md:px-12 md:py-16 lg:px-16">
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

              <button
                type="button"
                onClick={() => setShowVideo(true)}
                className="group relative order-1 w-full cursor-pointer bg-transparent p-0 md:order-2 md:col-span-7"
                aria-label="Assistir vídeo da Ópera Queen Tributo"
              >
                <img
                  src="/images/opera-queen.png?v=8"
                  alt="Banda Ópera Queen Tributo tocando no palco da Oktoberfest"
                  loading="lazy"
                  className="block h-auto w-full bg-transparent"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-20 items-center justify-center rounded-full bg-white/80 text-navy shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white md:size-24">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
                <img
                  src="/images/logo-opera-queen.png?v=8"
                  alt="Logo Ópera Queen Tributo"
                  loading="lazy"
                  className="pointer-events-none absolute bottom-5 left-5 h-16 w-auto bg-transparent md:bottom-6 md:left-6 md:h-24"
                />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {showVideo && (
        <div className="okt-video-modal" onClick={() => setShowVideo(false)}>
          <button
            type="button"
            onClick={() => setShowVideo(false)}
            className="absolute right-6 top-6 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            aria-label="Fechar vídeo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <video
            src="/videos/opera-queen.mp4"
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl"
          />
        </div>
      )}
    </>
  );
}
