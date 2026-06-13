import teamImg from "@/assets/nosotras-team.png";

const members = [
  {
    index: "01",
    name: "Rosa Valer",
    role: "Estratégica",
    bio: "Marketer enfocada en la estrategia de contenidos y en automatizar tu ecosistema digital. Potenciamos tu presencia con metodología clara.",
    sign: "Rosi",
  },
  {
    index: "02",
    name: "Alessandra Campuzano",
    role: "Creativa",
    bio: "Marketer enfocada en la creación de contenidos. Apasionada por la edición y por contar historias visuales que realmente transmitan.",
    sign: "Ale",
  },
];

export const About = () => {
  return (
    <section
      id="nosotras"
      className="relative py-24 md:py-32 bg-cream-deep overflow-hidden"
    >
      {/* Dot pattern backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />


      <div className="container relative">
        {/* Eyebrow + headline */}
        <div className="reveal text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="hidden">
            <span />
            <span />
          </div>


          <h2 className="mt-7 font-display uppercase leading-[0.88] text-primary text-[clamp(2.4rem,6.5vw,5rem)]">
            <span className="block">
              <span className="inline-block animate-fade-in [animation-delay:0ms] [animation-fill-mode:both]">El</span>{" "}
              <span className="relative inline-block italic font-script normal-case text-secondary text-[1.25em] leading-[0.7] -rotate-[4deg] translate-y-1 mx-1 animate-fade-in [animation-delay:140ms] [animation-fill-mode:both]">
                team
              </span>{" "}
              <span className="inline-block animate-fade-in [animation-delay:280ms] [animation-fill-mode:both]">detrás</span>
            </span>
            <span className="block mt-2">
              <span className="inline-block animate-fade-in [animation-delay:420ms] [animation-fill-mode:both]">de</span>{" "}
              <span className="relative inline-block animate-fade-in [animation-delay:560ms] [animation-fill-mode:both]">
                tu marca
                <span
                  aria-hidden
                  className="absolute left-0 -bottom-2 h-[6px] w-full bg-secondary/70"
                  style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 80%)" }}
                />
              </span>
            </span>
          </h2>

          <p className="reveal reveal-delay-1 mt-8 max-w-xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed">
            Dos marketers, una visión. Estrategia y creatividad trabajando en sincronía
            para que tu marca crezca con intención.
          </p>
        </div>

        {/* Editorial spread: overlapping bios + photo */}
        <div className="relative max-w-6xl mx-auto">
          {/* Giant background numeral */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 select-none opacity-[0.05] z-0"
          >
            <span className="font-display text-primary text-[16rem] md:text-[22rem] leading-none">
              02
            </span>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
            {/* Rosa — left */}
            <article className="reveal reveal-delay-2 lg:col-span-4 order-2 lg:order-1 lg:pr-2 group/member relative z-10">
              <div className="relative text-center lg:text-right lg:pr-6">
                {/* Index */}
                <div className="flex items-center gap-3 justify-center lg:justify-end mb-3">
                  <span className="font-display text-secondary text-sm tracking-[0.3em]">
                    Nº {members[0].index}
                  </span>
                  <span className="h-px w-8 bg-secondary/50" />
                </div>

                <h3 className="font-display text-primary uppercase text-3xl md:text-[2.5rem] tracking-wide leading-[0.95]">
                  {members[0].name}
                </h3>
                <p className="font-script text-secondary text-3xl leading-none mt-2 mb-5">
                  {members[0].role}
                </p>
                <p className="text-muted-foreground text-[15px] leading-relaxed max-w-[300px] mx-auto lg:ml-auto lg:mr-0">
                  {members[0].bio}
                </p>

                {/* Signature */}
                <div className="mt-6 flex items-center gap-3 justify-center lg:justify-end">
                  <span className="h-px w-12 bg-secondary transition-all duration-500 group-hover/member:w-20" />
                  <span className="font-script text-primary/70 text-2xl leading-none">
                    — {members[0].sign}
                  </span>
                </div>
              </div>
            </article>

            {/* Photo — center */}
            <div className="reveal reveal-delay-1 lg:col-span-4 order-1 lg:order-2 relative z-20">
              <div className="group relative mx-auto w-full max-w-[420px]">
                {/* Corner brackets */}
                <span aria-hidden className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-secondary transition-all duration-500 group-hover:-top-4 group-hover:-left-4" />
                <span aria-hidden className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-secondary transition-all duration-500 group-hover:-top-4 group-hover:-right-4" />
                <span aria-hidden className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-secondary transition-all duration-500 group-hover:-bottom-4 group-hover:-left-4" />
                <span aria-hidden className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-secondary transition-all duration-500 group-hover:-bottom-4 group-hover:-right-4" />

                {/* Offset shadow frame */}
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-3 translate-y-3 bg-primary/10 transition-transform duration-700 ease-out group-hover:translate-x-2 group-hover:translate-y-2"
                />

                {/* Photo card */}
                <div className="relative bg-cream p-2 shadow-soft">
                  <div className="relative aspect-[4/5] overflow-hidden bg-primary/5">
                    <img
                      src={teamImg}
                      alt="Rosa y Alessandra, el team Rosalé"
                      className="w-full h-full object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                    />
                    {/* Subtle gradient at bottom */}
                    <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>

                  {/* Bottom caption strip */}
                  <div className="flex items-center justify-between px-2 pt-3 pb-1">
                    <span className="text-[9px] uppercase tracking-[0.35em] text-primary/60">
                      Lima · 2026
                    </span>
                    <span className="font-script text-secondary text-lg leading-none">
                      Rosi &amp; Ale
                    </span>
                  </div>
                </div>

                {/* Floating top label */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cream-deep px-4 py-1 border border-primary/15 z-10">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-primary font-medium whitespace-nowrap">
                    El Team
                  </span>
                </div>
              </div>
            </div>

            {/* Ale — right */}
            <article className="reveal reveal-delay-3 lg:col-span-4 order-3 lg:pl-2 group/member relative z-10">
              <div className="relative text-center lg:text-left lg:pl-6">
                <div className="flex items-center gap-3 justify-center lg:justify-start mb-3">
                  <span className="h-px w-8 bg-secondary/50" />
                  <span className="font-display text-secondary text-sm tracking-[0.3em]">
                    Nº {members[1].index}
                  </span>
                </div>

                <h3 className="font-display text-primary uppercase text-3xl md:text-[2.5rem] tracking-wide leading-[0.95]">
                  {members[1].name}
                </h3>
                <p className="font-script text-secondary text-3xl leading-none mt-2 mb-5">
                  {members[1].role}
                </p>
                <p className="text-muted-foreground text-[15px] leading-relaxed max-w-[300px] mx-auto lg:mr-auto lg:ml-0">
                  {members[1].bio}
                </p>

                <div className="mt-6 flex items-center gap-3 justify-center lg:justify-start">
                  <span className="font-script text-primary/70 text-2xl leading-none">
                    — {members[1].sign}
                  </span>
                  <span className="h-px w-12 bg-secondary transition-all duration-500 group-hover/member:w-20" />
                </div>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
};
