import { useEffect } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Studio — Marketing Digital para tu Negocio";
    const desc =
      "Llevamos tu negocio al mundo digital. Manejo de redes, pautas publicitarias y edición de videos con estrategia y creatividad.";
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
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
