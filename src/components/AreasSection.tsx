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
  { 
    icon: iconEscaleras, 
    title: "Análisis Benchmarking", 
    desc: "Planificación y desarrollo de una plantilla personalizada y automatizada de análisis de tu competencia directa e indirecta, con herramientas digitales.\n\n\nDe esta forma, podrás obtener métricas referenciales para determinar tu objetivos de Marketing Digital y evaluar tu performance periódicamente en comparación a tu sector." 
  },
  { 
    icon: iconComunidad, 
    title: "Meta Business Suite", 
    desc: "Acompañamiento estratégico en la configuración del administrador comercial de Meta Business Suite, para que puedas gestionar de forma profesional y escalable todos tus activos digitales.\n\n\nTe ayudamos a centralizar y organizar plataformas como Facebook, Instagram y WhatsApp Business dentro de un entorno seguro y eficiente." 
  },
  { 
    icon: iconDialogo, 
    title: "Social Media Ads", 
    desc: "Gestión estratégica de campañas publicitarias en Meta Ads, TikTok Ads y LinkedIn Ads, diseñada para maximizar la visibilidad de tu marca, impulsar el lanzamiento de tus servicios o potenciar la promoción de tus eventos. \n\n\nLa consultoría incluye la configuración de la cuenta publicitaria y la planificación estratégica: definición de objetivos, segmentación precisa del público objetivo y desarrollo de anuncios." 
  },
  { 
    icon: iconValija, 
    title: "Google Ads", 
    desc: "Desarrollo e implementación de campañas publicitarias en Google Ads, abarcando la Red de Búsqueda, Red de Display y YouTube Ads, orientadas a atraer tráfico cualificado.\n\n\nPor lo tanto, este servicio es ideal para emprendimientos que cuentan con una landing page o sitio web y buscan incrementar sus visitas, generar oportunidades de negocio y construir una base sólida para futuras conversiones." 
  },
  { 
    icon: iconEbook, 
    title: "Reporting", 
    desc: "Servicio de análisis y reporting enfocado en medir, interpretar y optimizar el rendimiento de tu estrategia de Marketing Digital.\n\n\nConfiguración de herramientas analíticas digitales y desarrollo de plantillas personalizadas para la elaboración de informes mensuales. Además, entregamos insights estratégicos y recomendaciones concretas para optimizar las tácticas estratégicas y mejorar el rendimiento general de la estrategia de Marketing Digital." 
  },
  { 
    icon: iconLibro, 
    title: "Estrategia de Marketing Digital", 
    desc: "Desarrollo de una estrategia integral de Marketing Digital, orientada a definir el camino más eficiente para alcanzar tus objetivos. \n\n\nEl servicio incluye el análisis del contexto, la definición de objetivos claros, segmentación del público objetivo, selección del mix de medios y planificación de acciones tácticas.\n\n\nAdemás, se establecen lineamientos de contenido, inversión publicitaria y métricas clave (KPIs), permitiendo ejecutar un plan estructurado y medible para escalar el crecimiento de tu marca." 
  },
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Consultorías</h2>
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
              <p className="text-sm leading-relaxed font-sans text-primary-foreground whitespace-pre-line">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;