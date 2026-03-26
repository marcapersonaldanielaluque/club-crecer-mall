import { useScrollReveal } from "@/hooks/useScrollReveal";
import iconEscaleras from "@/assets/icons/escaleras.svg";
import iconComunidad from "@/assets/icons/comunidad.svg";
import iconDialogo from "@/assets/icons/cuadro-dialogo.svg";
import iconValija from "@/assets/icons/valija.svg";
import iconEbook from "@/assets/icons/ebook.svg";
import iconLibro from "@/assets/icons/libro.svg";
import iconPregunta from "@/assets/icons/signo-pregunta.svg";
import iconAvion from "@/assets/icons/avion.svg";
import rayasColores from "@/assets/rayas-colores.png";

const areas = [
  { icon: iconEscaleras, title: "Estrategia de Crecimiento", desc: "Diseño de planes estratégicos para escalar tu negocio de manera sostenible." },
  { icon: iconComunidad, title: "Gestión del Talento", desc: "Optimización de equipos y desarrollo de cultura organizacional de alto rendimiento." },
  { icon: iconDialogo, title: "Marketing y Ventas", desc: "Estrategias de posicionamiento y aumento de conversión de clientes." },
  { icon: iconValija, title: "Análisis Financiero", desc: "Evaluación de rentabilidad y optimización de recursos financieros." },
  { icon: iconEbook, title: "Innovación y Transformación", desc: "Implementación de procesos de innovación y transformación digital." },
  { icon: iconLibro, title: "Optimización de Procesos", desc: "Mejora de eficiencia operativa y reducción de costos." },
  { icon: iconPregunta, title: "Modelos de Negocio", desc: "Diseño y validación de nuevos modelos de monetización." },
  { icon: iconAvion, title: "Expansión de Mercado", desc: "Estrategias para entrar en nuevos mercados y segmentos." },
];

const brandColorsBg = [
  "hsl(150 93% 47%)",
  "hsl(52 95% 49%)",
  "hsl(16 93% 51%)",
  "hsl(316 100% 42%)",
  "hsl(150 93% 47%)",
  "hsl(52 95% 49%)",
  "hsl(16 93% 51%)",
  "hsl(316 100% 42%)",
];

const AreasSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-20 overflow-hidden" id="areas">
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `url(${rayasColores})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Áreas de Consultoría</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Las estrategias que se pueden abordar dentro de esta consultoría
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {areas.map((area, i) => (
            <div
              key={area.title}
              className={`bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300"
                style={{ backgroundColor: brandColorsBg[i] }}
              >
                <img src={area.icon} alt={area.title} className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground text-base mb-2 font-mono">{area.title}</h3>
              <p className="text-sm leading-relaxed font-sans text-primary-foreground">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
