import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  Smartphone,
  UserPlus,
  Video,
  MessageCircle,
  Check,
  X,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { useReveal } from "@/hooks/useReveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type PlanItem = { label: string; qty: string | number };
type Plan = { name: string; tagline?: string; items: PlanItem[] };

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
    plans?: Plan[];
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
      "Día de Shooting",
    ],
    plans: [
      {
        name: "Plan Básico",
        tagline: "Para marcas que están construyendo su presencia digital con bases sólidas.",
        items: [
          { label: "Diagnóstico actual (Buyer persona, diagnóstico de RR.SS, Benchmark)", qty: 1 },
          { label: "Estrategia digital (tono, estilo visual, objetivos, etc)", qty: 1 },
          { label: "Optimización del feed (Descripción, Botones de acción, Portadas destacadas, Mensajes automáticos)", qty: 1 },
          { label: "Dirección creativa y conceptualización (pilares, temáticas, estilo de grabación, tipografía, tomas)", qty: 1 },
          { label: "Parrilla de Contenido (Ideas)", qty: 18 },
          { label: "Guiones de Videos", qty: 8 },
          { label: "Boceto de Post Carrusel", qty: 2 },
          { label: "Boceto de historias", qty: 4 },
          { label: "Día de shooting", qty: 1 },
          { label: "Post carrusel x4 (fotos/diseño)", qty: 2 },
          { label: "Videos (shorts y regular)", qty: 8 },
          { label: "Historias (animación o estáticas)", qty: 4 },
          { label: "Gestión y Publicación de contenidos", qty: 10 },
          { label: "Copywriting", qty: 10 },
          { label: "Reporte", qty: 1 },
          { label: "Reuniones", qty: 1 },
        ],
      },
      {
        name: "Plan Premium",
        tagline: "Para marcas que quieren escalar con presencia constante e interacción real.",
        items: [
          { label: "Diagnóstico actual (Buyer persona, diagnóstico de RR.SS, Benchmark)", qty: 1 },
          { label: "Estrategia digital (tono, estilo visual, objetivos, etc)", qty: 1 },
          { label: "Optimización del feed (Descripción, Botones de acción, Portadas destacadas, Mensajes automáticos)", qty: 1 },
          { label: "Dirección creativa y conceptualización (pilares, temáticas, estilo de grabación, tipografía, tomas)", qty: 1 },
          { label: "Parrilla de Contenido (Ideas)", qty: 28 },
          { label: "Guiones de Videos", qty: 16 },
          { label: "Boceto de Post Carrusel", qty: 4 },
          { label: "Boceto de historias", qty: 8 },
          { label: "Día de shooting", qty: 1 },
          { label: "Post carrusel x4 (fotos/diseño)", qty: 4 },
          { label: "Videos (shorts y regular)", qty: 16 },
          { label: "Historias (animación o estáticas)", qty: 8 },
          { label: "Gestión y Publicación de contenidos", qty: 20 },
          { label: "Copywriting", qty: 20 },
          { label: "Interacción con el público", qty: "Sí" },
          { label: "Reporte", qty: 1 },
          { label: "Reuniones", qty: 1 },
        ],
      },
    ],
    next: { slug: "produccion-de-contenido", label: "Producción de Contenido" },
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
      "Día de Shooting",
    ],
    plans: [
      {
        name: "Plan Básico",
        tagline: "Para marcas que necesitan contenido visual profesional de forma puntual.",
        items: [
          { label: "Diagnóstico actual (Buyer persona, diagnóstico de contenidos, Benchmark)", qty: 1 },
          { label: "Estrategia digital (tono, estilo visual, objetivos, etc)", qty: 1 },
          { label: "Dirección creativa y conceptualización (pilares, temáticas, estilo de grabación, tipografía, tomas)", qty: 1 },
          { label: "Parrilla de Contenido (Ideas)", qty: 8 },
          { label: "Guiones de Videos", qty: 8 },
          { label: "Día de shooting", qty: 1 },
          { label: "Videos (shorts y regular)", qty: 8 },
          { label: "Reuniones", qty: 1 },
        ],
      },
      {
        name: "Plan Premium",
        tagline: "Para marcas que buscan volumen y consistencia con acompañamiento mensual.",
        items: [
          { label: "Diagnóstico actual (Buyer persona, diagnóstico de contenidos, Benchmark)", qty: 1 },
          { label: "Estrategia digital (tono, estilo visual, objetivos, etc)", qty: 1 },
          { label: "Dirección creativa y conceptualización (pilares, temáticas, estilo de grabación, tipografía, tomas)", qty: 1 },
          { label: "Parrilla de Contenido (Ideas)", qty: 16 },
          { label: "Guiones de Videos", qty: 16 },
          { label: "Día de shooting", qty: 1 },
          { label: "Videos (shorts y regular)", qty: 16 },
          { label: "Seguimiento Mensual", qty: "Sí" },
          { label: "Reuniones", qty: 1 },
        ],
      },
    ],
    next: { slug: "asesorias-personalizadas", label: "Asesorías Personalizadas" },
  },
  "asesorias-personalizadas": {
    slug: "asesorias-personalizadas",
    index: "03",
    icon: MessageCircle,
    kicker: "Asesorías",
    title: "Personalizadas",
    intro:
      "Para marcas que quieren claridad y dirección: sesiones uno a uno para tomar mejores decisiones.",
    description:
      "Te acompañamos con diagnóstico, estrategia y recomendaciones accionables para que tu marca avance con foco.",
    audience:
      "Marcas y emprendedores que gestionan sus redes pero necesitan guía estratégica para crecer.",
    includes: [
      "Diagnóstico actual",
      "Estrategia digital",
      "Optimización de perfil",
      "Lineamientos visuales",
      "Grilla de contenido",
      "Recomendaciones de Hook y CTA",
      "Recursos",
      "Reuniones",
    ],
    plans: [
      {
        name: "Plan Básico",
        tagline: "Para marcas que quieren bases sólidas y dirección clara para crecer.",
        items: [
          { label: "Diagnóstico actual (Buyer persona, diagnóstico de contenidos, Benchmark)", qty: 1 },
          { label: "Estrategia digital (tono, estilo visual, objetivos, etc)", qty: 1 },
          { label: "Optimización de perfil", qty: 1 },
          { label: "Recomendaciones de Lineamientos Visuales", qty: 1 },
          { label: "Grilla de Contenido (Ideas)", qty: 12 },
          { label: "Recomendaciones de Hook y CTA", qty: 12 },
          { label: "Recursos", qty: 1 },
          { label: "Reuniones", qty: 1 },
        ],
      },
      {
        name: "Plan Premium",
        tagline: "Para marcas que quieren acompañamiento más profundo y herramientas aplicadas.",
        items: [
          { label: "Diagnóstico actual (Buyer persona, diagnóstico de contenidos, Benchmark)", qty: 1 },
          { label: "Estrategia digital (tono, estilo visual, objetivos, etc)", qty: 1 },
          { label: "Optimización de perfil", qty: 1 },
          { label: "Recomendaciones de Lineamientos Visuales", qty: 1 },
          { label: "Grilla de Contenido (Ideas)", qty: 12 },
          { label: "Recomendaciones de publicación", qty: 1 },
          { label: "Recomendaciones de Hook y CTA", qty: 12 },
          { label: "Recomendaciones de copywriting y hashtag", qty: 1 },
          { label: "Recursos", qty: 1 },
          { label: "Reuniones", qty: 1 },
        ],
      },
    ],
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
  const serviceCtaUrl = (message?: string) =>
    service.slug === "redes-sociales"
      ? "https://wa.link/c5946w"
      : service.slug === "produccion-de-contenido"
      ? "https://wa.link/hxlmx0"
      : service.slug === "asesorias-personalizadas"
      ? "https://wa.link/d79god"
      : buildWhatsAppUrl(message);

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

          {service.plans ? (
            (() => {
              const [basic, premium] = service.plans!;
              const basicMap = new Map(basic.items.map((i) => [i.label, i.qty]));
              const premiumMap = new Map(premium.items.map((i) => [i.label, i.qty]));
              const allLabels: string[] = [];
              basic.items.forEach((i) => allLabels.push(i.label));
              premium.items.forEach((i) => {
                if (!allLabels.includes(i.label)) allLabels.push(i.label);
              });

              const renderCell = (
                val: string | number | undefined,
                featured: boolean,
                isWinner: boolean,
              ) => {
                if (val === undefined) {
                  return (
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${
                        featured
                          ? "bg-background/10 text-background/50"
                          : "bg-destructive/10 text-destructive/70"
                      }`}
                    >
                      <X size={16} strokeWidth={2.75} />
                    </span>
                  );
                }
                const winnerWrap = isWinner
                  ? featured
                    ? "inline-flex items-center justify-center rounded-full bg-background text-secondary px-4 py-1.5 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)]"
                    : "inline-flex items-center justify-center rounded-full bg-green-600/10 text-green-700 px-4 py-1.5"
                  : "inline-flex items-center justify-center";
                const textColor = isWinner
                  ? featured
                    ? "text-secondary"
                    : "text-green-700"
                  : featured
                  ? "text-background"
                  : "text-primary";
                if ((typeof val === "string" && val.toLowerCase() === "sí") || val === 1) {
                  return (
                    <span className={winnerWrap}>
                      <Check size={isWinner ? 20 : 18} strokeWidth={2.75} className={textColor} />
                    </span>
                  );
                }
                return (
                  <span className={winnerWrap}>
                    <span className={`font-display text-xl md:text-2xl leading-none ${textColor}`}>
                      {val}
                    </span>
                  </span>
                );
              };

              return (
                <div className="reveal relative">
                  {/* Premium spotlight column background */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute top-0 bottom-0 right-0 w-full md:w-[34%] bg-secondary hidden md:block"
                  />

                  <div className="relative grid grid-cols-1 md:grid-cols-[1.6fr_0.9fr_1.1fr] border border-border bg-background">
                    {/* HEADERS */}
                    <div className="hidden md:block p-8 md:p-10 border-b border-border">
                      <span className="text-[11px] uppercase tracking-[0.32em] text-secondary font-medium">
                        — Comparativa
                      </span>
                      <p className="mt-4 font-display text-primary uppercase leading-[1] text-2xl md:text-3xl">
                        Elige tu plan
                      </p>
                    </div>

                    <div className="p-8 md:p-10 border-b border-border bg-background">
                      <span className="text-[11px] uppercase tracking-[0.32em] text-secondary font-medium">
                        — Esencial
                      </span>
                      <h3 className="mt-3 font-display text-primary uppercase leading-[0.95] text-2xl md:text-3xl">
                        {basic.name}
                      </h3>
                      {basic.tagline && (
                        <p className="mt-3 text-xs md:text-sm leading-relaxed text-muted-foreground">
                          {basic.tagline}
                        </p>
                      )}
                    </div>

                    <div className="relative p-8 md:p-10 border-b border-background/10 bg-secondary text-background">
                      <span className="absolute -top-4 left-8 md:left-10 inline-flex items-center gap-2 bg-background text-primary px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] font-medium">
                        <Sparkles size={12} strokeWidth={2.5} /> Recomendado
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.32em] text-background/80 font-medium">
                        — Más completo
                      </span>
                      <h3 className="mt-3 font-display uppercase leading-[0.95] text-2xl md:text-3xl">
                        {premium.name}
                      </h3>
                      {premium.tagline && (
                        <p className="mt-3 text-xs md:text-sm leading-relaxed text-background/75">
                          {premium.tagline}
                        </p>
                      )}
                    </div>

                    {/* ROWS */}
                    {allLabels.map((label, i) => {
                      const b = basicMap.get(label);
                      const p = premiumMap.get(label);
                      const isDifferent = b !== p;
                      const bIsNum = typeof b === "number";
                      const pIsNum = typeof p === "number";
                      let basicWins = false;
                      let premiumWins = false;
                      if (isDifferent) {
                        if (b === undefined) premiumWins = true;
                        else if (p === undefined) basicWins = true;
                        else if (bIsNum && pIsNum) {
                          if ((p as number) > (b as number)) premiumWins = true;
                          else if ((b as number) > (p as number)) basicWins = true;
                        } else {
                          // string differences (e.g. "Sí" vs undefined handled above) → premium wins by default
                          premiumWins = true;
                        }
                      }
                      const zebra = i % 2 === 1;
                      return (
                        <div key={label} className="contents">
                          <div
                            className={`hidden md:flex items-center gap-4 px-8 md:px-10 py-4 border-t ${
                              isDifferent ? "border-secondary/30" : "border-border"
                            } ${zebra ? "bg-cream-deep" : "bg-background"}`}
                          >
                            <span className="text-sm leading-relaxed text-primary">{label}</span>
                          </div>
                          <div
                            className={`flex items-center justify-between md:justify-center gap-4 px-8 md:px-10 py-4 border-t ${
                              isDifferent ? "border-secondary/30" : "border-border"
                            } ${zebra ? "bg-cream-deep" : "bg-background"}`}
                          >
                            <span className="md:hidden text-sm text-primary pr-4">{label}</span>
                            <div className="flex items-center gap-3 md:gap-0">
                              <span className="md:hidden text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                                Básico
                              </span>
                              {renderCell(b, false, basicWins)}
                            </div>
                          </div>
                          <div className="flex items-center justify-between md:justify-center gap-4 px-8 md:px-10 py-4 border-t border-background/20 bg-secondary text-background">
                            <span className="md:hidden text-sm pr-4">{label}</span>
                            <div className="flex items-center gap-3 md:gap-0">
                              <span className="md:hidden text-[10px] uppercase tracking-[0.22em] text-background/60">
                                Premium
                              </span>
                              {renderCell(p, true, premiumWins)}
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {/* CTA ROW */}
                    <div className="hidden md:block border-t border-border bg-background" />
                    <div className="px-8 md:px-10 py-8 border-t border-border bg-background">
                      <a
                        href={serviceCtaUrl(`Hola! Me interesa el servicio de ${service.kicker} ${service.title} — ${basic.name}. ¿Me pueden dar más información?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex w-full justify-center items-center gap-3 px-6 py-4 text-xs uppercase tracking-[0.28em] bg-background text-primary border border-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-500"
                      >
                        Cotizar básico
                        <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
                      </a>
                    </div>
                    <div className="px-8 md:px-10 py-8 border-t border-background/20 bg-secondary text-background">
                      <a
                        href={serviceCtaUrl(`Hola! Me interesa el servicio de ${service.kicker} ${service.title} — ${premium.name}. ¿Me pueden dar más información?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex w-full justify-center items-center gap-3 px-6 py-4 text-xs uppercase tracking-[0.28em] bg-background text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-500"
                      >
                        Cotizar premium
                        <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })()
          ) : (
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
          )}

          {service.plans && service.slug !== "asesorias-personalizadas" && (
            <div className="mt-16 reveal">
              <div className="relative border border-border bg-background p-8 md:p-12 overflow-hidden">
                <span
                  aria-hidden
                  className="pointer-events-none select-none absolute -bottom-10 -right-4 font-display text-secondary/5 leading-none text-[10rem] md:text-[14rem]"
                >
                  +
                </span>
                <div className="relative grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7">
                    <span className="text-[11px] uppercase tracking-[0.32em] text-secondary font-medium">
                      — Alternativa adicional
                    </span>
                    <h3 className="mt-4 font-display text-primary uppercase leading-[0.95] text-3xl md:text-4xl">
                      Plan <span className="text-secondary">Personalizado</span>
                    </h3>
                    <p className="mt-5 text-primary/80 leading-relaxed md:text-lg">
                      ¿Ninguno de los planes encaja con lo que necesitas? Armamos un paquete a la medida con la cantidad de videos, días de shooting y entregables que tu marca requiere — pensado a tu ritmo y presupuesto.
                    </p>
                  </div>
                  <div className="lg:col-span-5 lg:justify-self-end w-full">
                    <a
                      href={serviceCtaUrl(`Hola! Me interesa un Plan Personalizado de ${service.kicker} ${service.title}. Quisiera armar un paquete a medida.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex w-full justify-center items-center gap-3 px-6 py-5 text-xs uppercase tracking-[0.28em] bg-primary text-background hover:bg-secondary transition-colors duration-500"
                    >
                      Cotizar plan personalizado
                      <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
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
