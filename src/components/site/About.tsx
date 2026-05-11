import teamImg from "@/assets/nosotras-team.png";

export const About = () => {
  return (
    <section id="nosotras" className="py-24 md:py-32 bg-cream-deep overflow-hidden">
      <div className="container">
        {/* Title */}
        <div className="grid grid-cols-12 gap-6 items-end mb-14 md:mb-20 reveal">
          <div className="col-span-12 md:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.32em] text-secondary font-medium">
              — Nosotras
            </span>
            <h2 className="mt-5 font-display text-primary uppercase leading-[0.85] text-[clamp(2.5rem,7vw,6rem)]">
              El <span className="font-script normal-case text-secondary">team</span><br />
              detrás
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:pb-3">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
              Dos marketers, una visión. Combinamos estrategia y creatividad
              para construir marcas que conectan, conversan y convierten.
            </p>
          </div>
        </div>

        {/* Team portrait */}
        <div className="max-w-5xl mx-auto reveal">
          <div className="relative overflow-hidden group">
            <img
              src={teamImg}
              alt="Rosa Valer y Alessandra Campuzano, el team detrás"
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <span className="absolute bottom-4 left-4 font-script text-cream bg-secondary px-5 py-2 text-3xl md:text-4xl leading-none shadow-md">
              Estratégica
            </span>
            <span className="absolute bottom-4 right-4 font-script text-cream bg-secondary px-5 py-2 text-3xl md:text-4xl leading-none shadow-md">
              Creativa
            </span>
          </div>

          {/* Names + descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-12 md:mt-16">
            <div className="reveal">
              <h3 className="font-display text-primary uppercase text-3xl md:text-4xl leading-[0.95]">
                Rosa Valer
              </h3>
              <div className="mt-4 flex items-start gap-4">
                <span className="mt-2 h-px w-10 bg-secondary shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                  Marketer enfocada en la estrategia de contenidos y automatizar
                  tu ecosistema digital.
                </p>
              </div>
            </div>

            <div className="reveal md:text-right">
              <h3 className="font-display text-primary uppercase text-3xl md:text-4xl leading-[0.95]">
                Alessandra<br className="hidden md:block" /> Campuzano
              </h3>
              <div className="mt-4 flex items-start gap-4 md:flex-row-reverse">
                <span className="mt-2 h-px w-10 bg-secondary shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm md:ml-auto">
                  Marketer enfocada en la creación de contenidos. Apasionada por
                  la edición y por contar historias que transmitan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
