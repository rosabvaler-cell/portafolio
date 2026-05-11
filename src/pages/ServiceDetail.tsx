import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  Smartphone,
  UserPlus,
  Video,
  Check,
  ArrowLeft,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { useReveal } from "@/hooks/useReveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Service = {
  slug: string;
  index: string;
  icon: LucideIcon;
  kicker: string;
  title: string;
  intro: string;
  description: string;
  audience: string;
  includes: string[];
  deliverables: string[];
  ideal: string;
  next: { slug: string; label: string };
};

const SERVICES: Record<string, Service> = {
  "redes-sociales": {
    slug: "redes-sociales",
    index: "01",
    icon: Smartphone,
    kicker: "Manejo de",
    title: "Redes Sociales",
    intro:
      "Para quienes quieren delegar por completo sus redes: estrategia, contenido, diseño y análisis.",
    description:
      "Nos encargamos de toda la operación de tus redes para que tú te enfoques en tu negocio.",
    audience:
      "Marcas que buscan presencia digital constante y profesional, sin ocuparse del día a día.",
    includes: [
      "Optimización de Feed",
      "Benchmarking",
      "Análisis de estrategia",
      "Parrilla de Contenido",
      "Edición de Reel",
      "Diseño de Post e Historias",
      "Copywriting",
      "Gestión y publicación de contenido",
      "Reporte mensual",
      "Workshops — 30 min",
      "Días de Shooting",
    ],
    deliverables: [
      "Parrilla de contenido mensual",
      "Reels, posts e historias publicados",
      "Reporte mensual de métricas",
      "Regalo sorpresa: portadas de historias destacadas",
    ],
    ideal:
      "Marcas que quieren delegar sus redes y construir presencia constante.",
    next: { slug: "pautas-publicitarias", label: "Pautas Publicitarias" },
  },
  "pautas-publicitarias": {
    slug: "pautas-publicitarias",
    index: "02",
    icon: UserPlus,
    kicker: "Pautas",
    title: "Publicitarias",
    intro:
      "Para quienes quieren invertir en Meta Ads y TikTok Ads, pero no saben por dónde empezar.",
    description:
      "Configuramos, lanzamos y optimizamos tus campañas para que cada peso invertido trabaje a favor de tu marca.",
    audience:
      "Negocios que quieren escalar con publicidad pagada y necesitan una guía estratégica.",
    includes: [
      "Creación de Perfil Publicitario",
      "Creación de Campaña",
      "Configuración de Segmentación",
      "Configuración de Presupuesto",
      "Creación estratégica de anuncios",
      "Copies persuasivos",
      "Reporte estadístico",
      "Reunión virtual",
      "Monitoreo de la campaña",
    ],
    deliverables: [
      "Campañas activas en Meta Ads y TikTok Ads",
      "Segmentación y presupuesto configurados",
      "Reporte estadístico de resultados",
    ],
    ideal:
      "Negocios que quieren invertir en publicidad digital con resultados reales.",
    next: { slug: "produccion-de-contenido", label: "Producción de Contenido" },
  },
  "produccion-de-contenido": {
    slug: "produccion-de-contenido",
    index: "03",
    icon: Video,
    kicker: "Producción",
    title: "de Contenido",
    intro:
      "Para marcas que necesitan contenido de calidad sin complicarse con la producción.",
    description:
      "Ideas, guiones, grabación, edición y diseño. Tú aportas la marca, nosotros el resto.",
    audience:
      "Marcas que quieren contenido visual profesional y consistente, sin gestionar equipos ni edición.",
    includes: [
      "Benchmarking",
      "Ideas de Contenido",
      "Dirección Creativa",
      "Edición de Reel",
      "Diseño de Post e Historias",
      "Workshops",
      "Días de Shooting",
    ],
    deliverables: [
      "Reels editados listos para publicar",
      "Posts e historias diseñadas",
      "Día(s) de shooting con dirección creativa",
    ],
    ideal:
      "Marcas que necesitan contenido de calidad de forma constante.",
    next: { slug: "redes-sociales", label: "Manejo de Redes Sociales" },
  },
};

const ServiceDetail = () => {
  useReveal();
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? SERVICES[slug] : undefined;

  useEffect(() => {
    if (!service) return;
    document.title = `${service.kicker} ${service.title} — Studio`;
    const desc = service.intro;
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + window.location.pathname);
  }, [service]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const Icon = service.icon;
  const nextService = SERVICES[service.next.slug];
  const NextIcon = nextService.icon;
  const whatsappUrl = buildWhatsAppUrl(
    `Hola! Me interesa el servicio de ${service.kicker} ${service.title}. ¿Me pueden dar más información?`,
  );

  return (
    <main className="min-h-screen bg-background">
      <Nav />

      {/* HERO */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 bg-cream-deep overflow-hidden">
        {/* Decorative oversized index */}
        <span
          aria-hidden
          className="pointer-events-none select-none absolute -top-10 -right-6 md:-top-16 md:-right-10 font-display text-secondary/10 leading-none text-[14rem] md:text-[22rem]"
        >
          {service.index}
        </span>

        <div className="container relative">
          <Link
            to="/#servicios"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary/70 hover:text-secondary transition-colors mb-12"
          >
            <ArrowLeft size={14} /> Volver a servicios
          </Link>

          <div className="grid lg:grid-cols-12 gap-10 reveal items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-5 mb-8">
                <span className="flex h-14 w-14 items-center justify-center bg-secondary/10 text-secondary">
                  <Icon size={28} strokeWidth={1.5} />
                </span>
                <span className="text-[11px] uppercase tracking-[0.32em] text-secondary font-medium">
                  Servicio {service.index} / 03
                </span>
              </div>
              <p className="font-script text-secondary text-3xl md:text-4xl leading-none mb-3">
                {service.kicker}
              </p>
              <h1 className="font-display text-primary uppercase leading-[0.88] text-[clamp(2.75rem,7.5vw,6.5rem)]">
                {service.title}
              </h1>
            </div>
            <div className="lg:col-span-4">
              <div className="border-l-2 border-secondary pl-6">
                <p className="text-primary/85 leading-relaxed text-lg">
                  {service.intro}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 reveal">
            <div className="lg:col-span-3">
              <span className="text-[11px] uppercase tracking-[0.32em] text-secondary font-medium">
                — En qué consiste
              </span>
            </div>
            <div className="lg:col-span-9">
              <p className="font-display text-primary leading-[1.15] text-[clamp(1.5rem,2.6vw,2.25rem)]">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="py-24 md:py-32 bg-cream-deep">
        <div className="container">
          <div className="mb-16 reveal">
            <span className="text-[11px] uppercase tracking-[0.32em] text-secondary font-medium">
              — Qué incluye
            </span>
            <h2 className="mt-6 font-display text-primary uppercase leading-[0.92] text-[clamp(2rem,4.5vw,3.75rem)]">
              Todo lo que <span className="text-secondary">recibes</span>
            </h2>
          </div>

          <ul className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {service.includes.map((item) => (
              <li
                key={item}
                className="bg-cream-deep hover:bg-background transition-colors duration-500 p-7 md:p-8 flex items-start gap-4"
              >
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <span className="text-primary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ENTREGABLES + IDEAL PARA */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 reveal">
              <span className="text-[11px] uppercase tracking-[0.32em] text-secondary font-medium">
                — Entregables
              </span>
              <ol className="mt-10 space-y-px bg-border border border-border">
                {service.deliverables.map((d, i) => (
                  <li
                    key={d}
                    className="bg-background p-7 md:p-8 flex items-start gap-6"
                  >
                    <span className="font-display text-secondary text-2xl md:text-3xl leading-none w-12 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-primary leading-relaxed text-lg">
                      {d}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="lg:col-span-5 reveal">
              <div className="sticky top-32">
                <div className="p-8 md:p-10 bg-primary text-background relative overflow-hidden">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-10 -right-6 font-display text-background/5 leading-none text-[12rem]"
                  >
                    {service.index}
                  </span>
                  <div className="relative">
                    <span className="text-[11px] uppercase tracking-[0.32em] text-background/60 font-medium">
                      — Ideal para
                    </span>
                    <p className="mt-6 font-display uppercase leading-[1.05] text-2xl md:text-3xl">
                      {service.ideal}
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] border-b border-background pb-1 hover:text-secondary hover:border-secondary transition-colors"
                    >
                      Cotizar ahora <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SIGUIENTE SERVICIO */}
      <section className="border-t border-border">
        <Link
          to={`/servicios/${nextService.slug}`}
          className="group block py-16 md:py-20 hover:bg-cream-deep transition-colors duration-500"
        >
          <div className="container">
            <div className="flex items-center justify-between gap-8">
              <div>
                <span className="text-[11px] uppercase tracking-[0.32em] text-secondary font-medium">
                  — Siguiente servicio {nextService.index}
                </span>
                <h3 className="mt-4 font-display text-primary uppercase leading-[0.95] text-[clamp(1.75rem,5vw,3.75rem)] group-hover:text-secondary transition-colors">
                  {nextService.kicker} {nextService.title}
                </h3>
              </div>
              <div className="hidden md:flex items-center gap-6 shrink-0">
                <NextIcon
                  className="text-secondary opacity-60 group-hover:opacity-100 transition-opacity"
                  size={48}
                  strokeWidth={1.5}
                />
                <ArrowRight
                  className="text-primary group-hover:text-secondary group-hover:translate-x-2 transition-all"
                  size={32}
                />
              </div>
            </div>
          </div>
        </Link>
      </section>

      <WhatsAppFab />
    </main>
  );
};

export default ServiceDetail;
