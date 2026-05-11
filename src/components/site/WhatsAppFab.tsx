import { buildWhatsAppUrl } from "@/lib/whatsapp";

const WhatsAppGlyph = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 21l1.65-4.5A8.5 8.5 0 1 1 7.5 19.5L3 21z" />
    <path d="M8.5 9.5c.5 2 2 3.5 4 4 .5.1 1-.1 1.3-.5l.5-.7c.2-.3.6-.4.9-.2l1.8 1c.3.2.4.6.3.9-.4 1-1.4 1.7-2.5 1.7-3.6 0-6.5-2.9-6.5-6.5 0-1.1.7-2.1 1.7-2.5.3-.1.7 0 .9.3l1 1.8c.2.3.1.7-.2.9l-.7.5c-.4.3-.6.8-.5 1.3z" />
  </svg>
);

export const WhatsAppFab = () => {
  return (
    <a
      href={buildWhatsAppUrl("¡Hola! Tengo una consulta rápida sobre sus servicios 🌟")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group inline-flex items-center justify-center h-20 w-20 md:h-24 md:w-24 rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-secondary transition-all duration-500 hover:scale-105"
    >
      <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping opacity-60" aria-hidden />
      <span className="relative flex items-center justify-center">
        <WhatsAppGlyph />
      </span>
      <span className="sr-only">WhatsApp</span>
    </a>
  );
};
