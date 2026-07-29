import { useEffect, useState } from "react";
import { TICKET_URL } from "./ui";

export function MobileBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 h-[72px] bg-navy transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex h-full items-center justify-between gap-4 px-6">
        <p className="text-[14px] text-cream">31/10 · Ingressos limitados</p>
        <a
          href={TICKET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 shrink-0 items-center rounded-full bg-blue px-5 text-[14px] font-bold text-cream"
        >
          Ingressos
        </a>
      </div>
    </div>
  );
}
