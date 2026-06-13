import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowUpRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

export const Hero = () => {

  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center pt-24 pb-32 md:pt-28 md:pb-40 overflow-hidden bg-cream-deep"
    >
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-cover bg-center scale-105 animate-[heroZoom_18s_ease-in-out_infinite_alternate]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Darkening + warm tint overlays */}
      <div aria-hidden className="absolute inset-0 z-0 bg-black/25 md:bg-black/20" />
      <div
        aria-hidden
        className="absolute inset-0 z-0 mix-blend-multiply bg-gradient-to-br from-cream-deep/30 via-transparent to-secondary/10"
      />


      {/* Editorial frame ticks */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[2] hidden md:block">
        <span className="absolute top-28 left-8 h-16 w-px bg-primary/30" />
        <span className="absolute top-28 left-8 h-px w-16 bg-primary/30" />
        <span className="absolute bottom-44 right-8 h-16 w-px bg-primary/30" />
        <span className="absolute bottom-44 right-8 h-px w-16 bg-primary/30" />
      </div>


      {/* Smooth fade to next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-px z-[1] h-48 md:h-64 bg-gradient-to-b from-transparent via-cream-deep/40 to-cream-deep"
      />

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">

          <p
            className="reveal font-sans font-semibold md:font-medium uppercase md:normal-case tracking-[0.18em] md:tracking-wide text-primary text-[clamp(0.8rem,3.2vw,2rem)] leading-tight text-balance"
            style={{ transitionDelay: "120ms" }}
          >
            ¿Tienes tu negocio<br className="md:hidden" /> y aún no estás en
          </p>

          <h1
            className="reveal mt-3 md:mt-2 font-display text-primary uppercase leading-[0.82] md:leading-[0.95] text-[clamp(4.25rem,14vw,7.5rem)] text-balance drop-shadow-sm"
            style={{ transitionDelay: "240ms" }}
          >
            El mundo{" "}
            <span className="relative inline-block">
              <span className="relative z-10">digital?</span>
              {/* Animated scribble underline */}
              <svg
                aria-hidden
                viewBox="0 0 300 30"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 w-full h-3 md:h-4 overflow-visible"
              >
                <path
                  d="M2 18 Q 75 4, 150 16 T 298 12"
                  fill="none"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  pathLength={1}
                  className="animate-[drawLine_2s_ease-out_1s_forwards]"
                  style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
                />
              </svg>
            </span>
          </h1>

          <div className="relative">
            <p
              className="reveal mt-5 md:mt-6 font-script text-secondary text-[clamp(3rem,10vw,4.5rem)] leading-[0.95] text-center md:text-right md:pr-[12%] animate-[scriptFloat_5s_ease-in-out_infinite]"
              style={{ transitionDelay: "360ms" }}
            >
              Hazlo con nosotras
            </p>
          </div>

          <div
            className="reveal mt-10 md:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-5 sm:gap-6"
            style={{ transitionDelay: "480ms" }}
          >
            <a
              href={buildWhatsAppUrl(
                "¡Hola! Vi su web y quiero llevar mi negocio al mundo digital con ustedes ✨ ¿Me cuentan más sobre cómo trabajan?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full sm:w-auto justify-center items-center gap-3 overflow-hidden bg-primary text-primary-foreground px-10 py-5 text-xs uppercase tracking-[0.28em] transition-colors duration-500"
            >
              <span
                aria-hidden
                className="absolute inset-0 bg-secondary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[700ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
              />
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-cream/30 to-transparent"
              />
              <span className="relative">Empecemos hoy</span>
              <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-cream/40 group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight size={12} strokeWidth={2} />
              </span>
            </a>
            <a
              href="#trabajo"
              className="group text-xs font-semibold uppercase tracking-[0.28em] text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors inline-flex items-center gap-2"
            >
              Ver nuestro trabajo
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Marquee strip — anchored at the bottom of the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 inset-x-0 z-[3] overflow-hidden border-y border-secondary/40 bg-secondary py-3"
      >
        <div className="flex gap-12 whitespace-nowrap animate-[marquee_30s_linear_infinite] will-change-transform">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12 items-center shrink-0">
              {[
                "Manejo de redes sociales",
                "✦",
                "Producción de contenido",
                "✦",
                "Asesorías personalizadas",
                "✦",
              ].map((t, i) => (
                <span
                  key={i}
                  className="text-[11px] uppercase tracking-[0.32em] text-cream font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-primary/70">Scroll</span>
        <span className="relative block h-14 w-[2px] bg-primary/40 overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-5 bg-secondary animate-[scrollDown_2.2s_ease-in-out_infinite]" />
        </span>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(250%); }
        }
        @keyframes heroZoom {
          from { transform: scale(1.02); }
          to { transform: scale(1.1); }
        }
        @keyframes scriptFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(-1deg); }
        }
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
};
