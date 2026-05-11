import { buildWhatsAppUrl } from "@/lib/whatsapp";

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 21l1.65-4.5A8.5 8.5 0 1 1 7.5 19.5L3 21z" />
    <path d="M8.5 9.5c.5 2 2 3.5 4 4 .5.1 1-.1 1.3-.5l.5-.7c.2-.3.6-.4.9-.2l1.8 1c.3.2.4.6.3.9-.4 1-1.4 1.7-2.5 1.7-3.6 0-6.5-2.9-6.5-6.5 0-1.1.7-2.1 1.7-2.5.3-.1.7 0 .9.3l1 1.8c.2.3.1.7-.2.9l-.7.5c-.4.3-.6.8-.5 1.3z" />
  </svg>
);

export const Contact = () => {
  return (
    <>
      <section id="contacto" className="py-32 md:py-44 bg-primary text-primary-foreground relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, hsl(var(--secondary)) 0%, transparent 45%), radial-gradient(circle at 85% 80%, hsl(var(--secondary)) 0%, transparent 50%)",
          }}
        />

        <div className="container relative">
          <div className="reveal max-w-5xl mx-auto text-center">
            <span className="text-[11px] uppercase tracking-[0.32em] text-primary-foreground/70 font-medium">
              — El siguiente paso
            </span>
            <h2 className="mt-8 font-display uppercase leading-[0.9] text-[clamp(2.75rem,8vw,7.5rem)]">
              ¿Listo para dar el
              <br />
              <span className="text-secondary">siguiente paso</span>?
            </h2>
            <p className="mt-10 font-script text-[clamp(3rem,6vw,5.5rem)] leading-[0.9] text-primary-foreground">
              Trabajemos juntos
            </p>

            <div className="mt-14 flex flex-wrap justify-center items-center gap-6">
              <a
                href={buildWhatsAppUrl("¡Hola! Estoy lista/o para dar el siguiente paso y trabajar con ustedes. ¿Cuándo podemos agendar una llamada?")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-10 py-5 text-xs uppercase tracking-[0.28em] hover:bg-primary-foreground hover:text-primary transition-colors duration-500"
              >
                <WhatsAppIcon />
                Enviar mensaje aquí
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.28em] text-primary-foreground border-b border-primary-foreground pb-1 hover:text-secondary hover:border-secondary transition-colors"
              >
                Síguenos en Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="container py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-baseline gap-2">
            <span className="font-script text-2xl text-primary leading-none">Studio</span>
          </div>
          <p>© {new Date().getFullYear()} Studio. Hecho con intención.</p>
        </div>
      </footer>
    </>
  );
};
