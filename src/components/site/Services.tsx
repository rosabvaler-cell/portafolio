import { Smartphone, UserPlus, Video, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

const services: {
  slug: string;
  icon: LucideIcon;
  kicker: string;
  title: string;
  benefit: string;
}[] = [
  {
    slug: "redes-sociales",
    icon: Smartphone,
    kicker: "Manejo de",
    title: "Redes Sociales",
    benefit:
      "Una presencia constante y estratégica que convierte seguidores en comunidad y comunidad en clientes.",
  },
  {
    slug: "pautas-publicitarias",
    icon: UserPlus,
    kicker: "Pautas",
    title: "Publicitarias",
    benefit:
      "Campañas segmentadas en Meta y Google diseñadas para generar retornos medibles y predecibles.",
  },
  {
    slug: "produccion-de-contenido",
    icon: Video,
    kicker: "Producción",
    title: "de Contenido",
    benefit:
      "Reels, shorts y piezas audiovisuales que capturan la esencia de tu marca y detienen el scroll.",
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-36 bg-cream-deep">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 mb-20 reveal">
          <div className="lg:col-span-8">
            <span className="text-[11px] uppercase tracking-[0.32em] text-secondary font-medium">
              — Lo que hacemos
            </span>
            <h2 className="mt-6 font-display text-primary uppercase leading-[0.9] text-[clamp(2.5rem,6vw,5.5rem)]">
              Lo que hacemos por tu <span className="text-secondary">marca</span>
            </h2>
          </div>
          <div className="lg:col-span-4 self-end">
            <p className="text-muted-foreground leading-relaxed">
              Tres disciplinas que trabajan en conjunto para llevar tu negocio
              al siguiente nivel — con estrategia, creatividad y datos.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.title}
                to={`/servicios/${s.slug}`}
                className="reveal group p-10 md:p-12 bg-cream-deep hover:bg-background transition-colors duration-500 block focus:outline-none focus:ring-2 focus:ring-secondary"
                style={{ transitionDelay: `${i * 100}ms` }}
                aria-label={`Ver detalles de ${s.kicker} ${s.title}`}
              >
                <div className="flex items-center justify-between mb-16">
                  <Icon className="text-secondary" size={36} strokeWidth={1.5} />
                  <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-xl">
                    →
                  </span>
                </div>
                <p className="font-script text-secondary text-3xl md:text-4xl leading-none mb-2">
                  {s.kicker}
                </p>
                <h3 className="font-display text-primary uppercase leading-[0.95] text-4xl md:text-5xl">
                  {s.title}
                </h3>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                  {s.benefit}
                </p>
                <span className="mt-8 inline-flex items-center text-[11px] uppercase tracking-[0.22em] text-primary/70 group-hover:text-secondary transition-colors">
                  Ver detalle →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
