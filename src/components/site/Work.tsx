import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Volume2, VolumeX } from "lucide-react";

type Industry = {
  label: string;
  align: "left" | "right";
  videos?: string[];
};

const industries: Industry[] = [
  {
    label: "Beauty",
    align: "left",
    videos: [
      "/videos/Beauty_1.mp4",
      "/videos/Beauty_2.mp4",
      "/videos/Beauty_3.mp4",
      "/videos/Beauty_4.mp4",
      "/videos/Beauty_5.mp4",
    ],
  },
  {
    label: "Inmobiliario",
    align: "right",
    videos: ["/videos/Inmobiliario_1.mp4", "/videos/Inmobiliario_2.mp4", "/videos/Inmobiliario_3.mp4"],
  },
  {
    label: "Eventos",
    align: "left",
    videos: ["/videos/Eventos_1.mp4", "/videos/Eventos_2.mp4"],
  },
  {
    label: "Ecommerce",
    align: "right",
    videos: [
      "/videos/Ecommerce_1.mp4",
      "/videos/Ecommerce_2.mp4",
      "/videos/Ecommerce_3.mp4",
      "/videos/Ecommerce_4.mp4",
      "/videos/Ecommerce_5.mp4",
      "/videos/Ecommerce_6.mp4",
    ],
  },
];

const VideoCarousel = ({ videos, label }: { videos: string[]; label: string }) => {
  const [index, setIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((v, i) => {
      if (!v) return;
      v.muted = muted || i !== index;
      if (i === index && playing) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [index, muted, playing]);

  const go = (e: React.MouseEvent, dir: number) => {
    e.stopPropagation();
    setIndex((prev) => (prev + dir + videos.length) % videos.length);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMuted((m) => !m);
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPlaying((p) => !p);
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {videos.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-500 ${
            i === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <video
            ref={(el) => (refs.current[i] = el)}
            src={src}
            className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        </div>
      ))}

      <div
        aria-hidden
        className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none"
      />

      {videos.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => go(e, -1)}
            aria-label="Anterior"
            className="group/btn absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-background/20 text-secondary backdrop-blur-md ring-1 ring-secondary/40 shadow-lg transition-all duration-300 hover:bg-secondary hover:text-primary hover:ring-secondary hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={(e) => go(e, 1)}
            aria-label="Siguiente"
            className="group/btn absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-background/20 text-secondary backdrop-blur-md ring-1 ring-secondary/40 shadow-lg transition-all duration-300 hover:bg-secondary hover:text-primary hover:ring-secondary hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>
        </>
      )}

      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1 rounded-full bg-background/20 backdrop-blur-md ring-1 ring-secondary/30 p-1 shadow-lg">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pausar" : "Reproducir"}
          className="flex h-9 w-9 items-center justify-center rounded-full text-secondary transition-all duration-200 hover:bg-secondary hover:text-primary active:scale-90"
        >
          {playing ? <Pause size={16} strokeWidth={2.5} fill="currentColor" /> : <Play size={16} strokeWidth={2.5} fill="currentColor" />}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Activar sonido" : "Silenciar"}
          className="flex h-9 w-9 items-center justify-center rounded-full text-secondary transition-all duration-200 hover:bg-secondary hover:text-primary active:scale-90"
        >
          {muted ? <VolumeX size={16} strokeWidth={2.5} /> : <Volume2 size={16} strokeWidth={2.5} />}
        </button>
      </div>

      {videos.length > 1 && (
        <div className="absolute bottom-6 left-4 z-10 flex gap-1.5 rounded-full bg-background/20 backdrop-blur-md ring-1 ring-secondary/30 px-2.5 py-2 shadow-lg">
          {videos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
              aria-label={`Ir al video ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-secondary" : "w-1.5 bg-secondary/40 hover:bg-secondary/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const Work = () => {
  return (
    <section id="trabajo" className="py-24 md:py-32">
      <div className="container">
        <div className="mb-14 md:mb-20 reveal max-w-2xl">
          <h2 className="font-display text-primary uppercase leading-[0.9] text-[clamp(2.25rem,5.5vw,4.5rem)]">
            Así se ve nuestro <span className="text-secondary">trabajo</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
            Descubre cómo adaptamos nuestra creatividad y estrategia a distintos
            rubros.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
          {industries.map((it, i) => (
            <div
              key={it.label}
              className="reveal flex flex-col gap-3"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p
                className={`font-script text-primary text-4xl md:text-5xl lg:text-6xl leading-none ${
                  it.align === "left" ? "text-left" : "text-right"
                }`}
              >
                {it.label}
              </p>
              <article className="group relative aspect-[9/16] overflow-hidden bg-primary cursor-pointer">
                {it.videos && it.videos.length > 0 ? (
                  <VideoCarousel videos={it.videos} label={it.label} />
                ) : (
                  <div
                    aria-hidden
                    className="absolute inset-0 transition-transform duration-[1400ms] group-hover:scale-[1.05]"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)) 50%, hsl(var(--secondary) / 0.85) 100%)",
                    }}
                  />
                )}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
