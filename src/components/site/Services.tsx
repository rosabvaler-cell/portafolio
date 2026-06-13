import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    slug: "redes-sociales",
    kicker: "Manejo de",
    title: "Redes Sociales",
    benefit:
      "Una presencia constante y estratégica que convierte seguidores en comunidad y comunidad en clientes.",
    tags: ["Estrategia", "Community", "Calendario", "Analítica"],
  },
  {
    slug: "produccion-de-contenido",
    kicker: "Producción",
    title: "de Contenido",
    benefit:
      "Reels, shorts y piezas audiovisuales que capturan la esencia de tu marca y detienen el scroll.",
    tags: ["Reels", "Fotografía", "Edición", "Dirección"],
  },
  {
    slug: "asesorias-personalizadas",
    kicker: "Asesorías",
    title: "Personalizadas",
    benefit:
      "Sesiones uno a uno para resolver tus dudas, definir estrategia y darle dirección clara a tu marca.",
    tags: ["1 a 1", "Diagnóstico", "Roadmap", "Mentoría"],
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-36 bg-cream-deep overflow-hidden">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 md:mb-24 pb-10 md:pb-12 border-b border-primary/10 reveal">
          <div className="max-w-2xl">
            <span className="block text-[11px] uppercase tracking-[0.32em] text-primary/70 font-semibold mb-5">
              — Lo que hacemos
            </span>
            <h2 className="font-display uppercase leading-[0.95] text-primary text-[clamp(2.5rem,6vw,5.5rem)]">
              Lo que hacemos
              <br />
              por tu{" "}
              <span className="font-script normal-case text-secondary text-[1.15em] leading-none align-baseline ml-1">
                marca
              </span>
            </h2>
          </div>
          <div className="lg:max-w-xs">
            <p className="text-muted-foreground text-sm leading-relaxed italic font-light">
              Tres disciplinas estratégicas diseñadas para elevar la estética y
              conversión de tu presencia digital.
            </p>
          </div>
        </div>

        {/* Dynamic editorial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to={`/servicios/${s.slug}`}
              className={`group reveal relative block overflow-hidden border border-primary/10 bg-cream rounded-sm p-8 md:p-10 transition-all duration-700 hover:border-primary/30 hover:-translate-y-1 ${
                i === 1 ? "md:mt-10" : i === 2 ? "md:mt-20" : ""
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Burgundy sweep */}
              <span
                aria-hidden
                className="absolute inset-0 bg-secondary origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
              />

              {/* Giant outline number */}
              <span
                aria-hidden
                className="pointer-events-none absolute -top-6 -right-2 font-display font-black text-[10rem] md:text-[12rem] leading-none text-primary/[0.04] group-hover:text-cream/10 transition-colors duration-700 select-none"
              >
                0{i + 1}
              </span>

              <div className="relative flex flex-col h-full min-h-[440px] md:min-h-[480px]">
                {/* Top: index + script kicker */}
                <div className="flex items-center justify-between mb-10">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/60 group-hover:text-cream/70 transition-colors duration-500">
                    /  0{i + 1}
                  </span>
                  <span className="h-px w-12 bg-secondary group-hover:w-24 group-hover:bg-cream transition-all duration-700" />
                </div>

                {/* Title block */}
                <div className="mb-8">
                  <p className="font-script text-secondary group-hover:text-cream text-4xl md:text-5xl leading-none mb-1 transition-colors duration-500">
                    {s.kicker}
                  </p>
                  <h3 className="font-display uppercase tracking-tight text-primary group-hover:text-cream text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] break-words hyphens-auto transition-colors duration-500">
                    {s.title}
                  </h3>
                  <span className="mt-4 block h-1 w-16 bg-secondary group-hover:bg-cream transition-colors duration-500" />
                </div>

                {/* Benefit */}
                <p className="text-sm leading-relaxed text-primary/70 group-hover:text-cream/85 transition-colors duration-500 mb-8 max-w-[300px]">
                  {s.benefit}
                </p>

                {/* Tag pills */}
                <ul className="flex flex-wrap gap-2 mb-10">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 border border-primary/20 text-primary/70 group-hover:border-cream/40 group-hover:text-cream/80 transition-colors duration-500"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* CTA pinned bottom */}
                <div className="mt-auto pt-6 border-t border-primary/10 group-hover:border-cream/25 transition-colors duration-500 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-bold text-secondary group-hover:text-cream transition-colors duration-500">
                    Explorar servicio
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/25 text-primary/70 group-hover:border-cream group-hover:text-cream group-hover:rotate-45 transition-all duration-500">
                    <ArrowUpRight size={16} strokeWidth={1.8} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
