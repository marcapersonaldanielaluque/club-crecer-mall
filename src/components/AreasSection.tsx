import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Search, Briefcase } from "lucide-react";
import iconDialogo from "@/assets/icons/cuadro-dialogo.svg";
import iconValija from "@/assets/icons/valija.svg";
import iconEbook from "@/assets/icons/ebook.svg";
import iconLibro from "@/assets/icons/libro.svg";
import iconPregunta from "@/assets/icons/signo-pregunta.svg";
import iconAvion from "@/assets/icons/avion.svg";
import rayasColores from "@/assets/rayas-colores.png";
import type { LucideIcon } from "lucide-react";

type AreaItem = {
  icon?: string;
  lucideIcon?: LucideIcon;
  googleIcon?: boolean;
  title: string;
  desc: string;
};

const areas: AreaItem[] = [
  { 
    lucideIcon: Search, 
    title: "Análisis Benchmarking", 
    desc: "Planificación y desarrollo de una plantilla personalizada y automatizada de análisis de tu competencia directa e indirecta, con herramientas digitales.\n\nDe esta forma, podrás obtener métricas referenciales para determinar tu objetivos de Marketing Digital y evaluar tu performance periódicamente en comparación a tu sector." 
  },
  { 
    lucideIcon: Briefcase, 
    title: "Meta Business Suite", 
    desc: "Acompañamiento estratégico en la configuración del administrador comercial de Meta Business Suite, para que puedas gestionar de forma profesional y escalable todos tus activos digitales.\n\nTe ayudamos a centralizar y organizar plataformas como Facebook, Instagram y WhatsApp Business dentro de un entorno seguro y eficiente." 
  },
  { 
    icon: iconDialogo, 
    title: "Social Media Ads", 
    desc: "Gestión estratégica de campañas publicitarias en Meta Ads, TikTok Ads y LinkedIn Ads, diseñada para maximizar la visibilidad de tu marca, impulsar el lanzamiento de tus servicios o potenciar la promoción de tus eventos.\n\nLa consultoría incluye la configuración de la cuenta publicitaria y la planificación estratégica: definición de objetivos, segmentación precisa del público objetivo y desarrollo de anuncios." 
  },
  { 
    googleIcon: true, 
    title: "Google Ads", 
    desc: "Desarrollo e implementación de campañas publicitarias en Google Ads, abarcando la Red de Búsqueda, Red de Display y YouTube Ads, orientadas a atraer tráfico cualificado.\n\nPor lo tanto, este servicio es ideal para emprendimientos que cuentan con una landing page or sitio web y buscan incrementar sus visitas, generar oportunidades de negocio y construir una base sólida para futuras conversiones." 
  },
  { 
    icon: iconEbook, 
    title: "Reporting", 
    desc: "Servicio de análisis y reporting enfocado en medir, interpretar y optimizar el rendimiento de tu estrategia de Marketing Digital.\n\nConfiguración de herramientas analíticas digitales y desarrollo de plantillas personalizadas para la elaboración de informes mensuales. \n\n\nAdemás, entregamos insights estratégicos y recomendaciones concretas para optimizar las tácticas estratégicas y mejorar el rendimiento general de la estrategia de Marketing Digital." 
  },
  { 
    icon: iconLibro, 
    title: "Estrategia de Marketing Digital", 
    desc: "Desarrollo de una estrategia integral de Marketing Digital, orientada a definir el camino más eficiente para alcanzar tus objetivos.\n\nEl servicio incluye el análisis del contexto, la definición de objetivos claros, segmentación del público objetivo, selección del mix de medios y planificación de acciones tácticas.\n\nAdemás, se establecen lineamientos de contenido, inversión publicitaria y métricas clave (KPIs), permitiendo ejecutar un plan estructurado y medible para escalar el crecimiento de tu marca." 
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
                {area.lucideIcon ? (
                  <area.lucideIcon className="w-6 h-6 text-black" />
                ) : area.googleIcon ? (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#000"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#000"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#000"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#000"/>
                  </svg>
                ) : (
                  <img src={area.icon} alt={area.title} className="w-6 h-6" />
                )}
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