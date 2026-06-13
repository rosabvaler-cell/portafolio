import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const links = [
  { hash: "servicios", label: "Servicios" },
  { hash: "trabajo", label: "Trabajo" },
  { hash: "nosotras", label: "Nosotras" },
  { hash: "contacto", label: "Contacto" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `/#${hash}`);
    } else {
      navigate(`/#${hash}`);
    }
  };

  // When landing on "/" with a hash, scroll to it
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              navigate("/");
            }
          }}
          className="flex items-baseline gap-2"
          aria-label="Inicio"
        >
          <span className="sr-only">Inicio</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.hash}
              href={`/#${l.hash}`}
              onClick={(e) => handleNav(e, l.hash)}
              className="text-xs font-bold uppercase tracking-[0.22em] text-primary hover:text-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={buildWhatsAppUrl("¡Hola! Quiero comenzar un proyecto con ustedes. ¿Podemos conversar?")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center text-xs font-bold uppercase tracking-[0.22em] text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors"
        >
          Comenzar →
        </a>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block h-px w-6 bg-primary transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-primary transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-primary transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.hash}
                href={`/#${l.hash}`}
                onClick={(e) => handleNav(e, l.hash)}
                className="text-sm font-bold uppercase tracking-[0.22em] text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
