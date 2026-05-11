import { buildWhatsAppUrl } from "@/lib/whatsapp";
import heroBg from "@/assets/hero-bg.png";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Subtle darkening overlay */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-black/20 md:bg-black/15"
      />

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center animate-fade-in">
          <p className="font-sans font-semibold md:font-light uppercase md:normal-case tracking-[0.18em] md:tracking-wide text-primary text-[clamp(0.8rem,3.2vw,2rem)] leading-tight text-balance">
            ¿Tienes tu negocio<br className="md:hidden" /> y aún no estás en
          </p>

          <h1 className="mt-3 md:mt-2 font-display text-primary uppercase leading-[0.82] md:leading-[0.95] text-[clamp(4.25rem,14vw,7.5rem)] text-balance drop-shadow-sm">
            El mundo<br className="md:hidden" /> digital?
          </h1>

          <p className="mt-5 md:mt-6 font-script text-secondary text-[clamp(3rem,10vw,4.5rem)] leading-[0.95] text-right pr-[5%] md:pr-[12%]">
            Hazlo con nosotras
          </p>

          <div className="mt-10 md:mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-5 sm:gap-6">
            <a
              href={buildWhatsAppUrl("¡Hola! Vi su web y quiero llevar mi negocio al mundo digital con ustedes ✨ ¿Me cuentan más sobre cómo trabajan?")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-primary text-primary-foreground px-10 py-5 text-xs uppercase tracking-[0.28em] hover:bg-secondary hover:text-secondary-foreground transition-colors duration-500"
            >
              Empecemos hoy
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#trabajo"
              className="text-xs uppercase tracking-[0.28em] text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors"
            >
              Ver nuestro trabajo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
