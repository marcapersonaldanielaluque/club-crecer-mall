import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import specialty1 from "@/assets/specialty-1.jpg";
import specialty2 from "@/assets/specialty-2.jpg";
import specialty3 from "@/assets/specialty-3.jpg";
import specialty4 from "@/assets/specialty-4.jpg";

const specialties = [
  { img: specialty1, title: "Legal y Cumplimiento", name: "Diana Fernández", rating: 5 },
  { img: specialty2, title: "Comercio Internacional", name: "Carlos Torres", rating: 5 },
  { img: specialty3, title: "Experiencia del Cliente", name: "Mariel Rodríguez", rating: 5 },
  { img: specialty4, title: "Marketing Digital", name: "Pedro Gutiérrez", rating: 5 },
];

const CARD_WIDTH = 240;
const GAP = 24;
const STEP = CARD_WIDTH + GAP;
const AUTO_INTERVAL = 3500;

const SpecialtiesSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const items = [...specialties, ...specialties, ...specialties];
  const totalOriginal = specialties.length;
  const startOffset = totalOriginal * STEP;

  useEffect(() => {
    setIsTransitioning(false);
    setTranslateX(-startOffset);
    requestAnimationFrame(() => setIsTransitioning(true));
  }, [startOffset]);

  const resetIfNeeded = useCallback(() => {
    setTranslateX((current) => {
      const minBound = -(totalOriginal * 2) * STEP;
      const maxBound = 0;
      if (current <= minBound || current >= maxBound) {
        setIsTransitioning(false);
        requestAnimationFrame(() => {
          setTranslateX(-startOffset);
          requestAnimationFrame(() => setIsTransitioning(true));
        });
        return current;
      }
      return current;
    });
  }, [startOffset, totalOriginal]);

  const next = useCallback(() => {
    setTranslateX((prev) => prev - STEP);
    setTimeout(resetIfNeeded, 520);
  }, [resetIfNeeded]);

  const prev = useCallback(() => {
    setTranslateX((prev) => prev + STEP);
    setTimeout(resetIfNeeded, 520);
  }, [resetIfNeeded]);

  useEffect(() => {
    intervalRef.current = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, [next]);

  const pauseAuto = () => clearInterval(intervalRef.current);
  const resumeAuto = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, AUTO_INTERVAL);
  };

  return (
    <section
      className="py-20"
      id="especialidades"
      style={{ background: "linear-gradient(180deg, hsl(var(--brand-cream)) 0%, hsl(var(--background)) 100%)" }}
    >
      <div ref={ref} className="container mx-auto px-4">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Otras Especialidades de Consultoría
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explora nuestras diferentes áreas de especialización con mentores expertos
          </p>
        </div>
        <div
          className={`relative max-w-5xl mx-auto transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          onMouseEnter={pauseAuto}
          onMouseLeave={resumeAuto}
        >
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:brightness-110 hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-6"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: isTransitioning ? "transform 0.5s ease-out" : "none",
              }}
            >
              {items.map((s, i) => (
                <div key={`${s.title}-${i}`} className="min-w-[240px] flex-shrink-0">
                  <div className="rounded-xl overflow-hidden shadow-md bg-card border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <img src={s.img} alt={s.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground text-sm font-mono">{s.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{s.name}</p>
                      <div className="flex gap-0.5 mt-2">
                        {Array.from({ length: s.rating }).map((_, j) => (
                          <span key={j} className="text-accent text-xs">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:brightness-110 hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
