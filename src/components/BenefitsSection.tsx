import { useScrollReveal } from "@/hooks/useScrollReveal";
import iconCheckmark from "@/assets/icons/checkmark.svg";

const benefits = [
  { title: "Resultados Medibles", desc: "Cada proyecto busca KPIs claros y seguimiento continuo para garantizar el cumplimiento de objetivos." },
  { title: "Enfoque Personalizado", desc: "No existen fórmulas genéricas. Cada estrategia se diseña específicamente para tu negocio y contexto." },
  { title: "Experiencia Comprobada", desc: "Más de 15 años trabajando con empresas exitosas en diversos sectores y mercados." },
  { title: "Implementación Práctica", desc: "No solo estrategia, sino acompañamiento en la ejecución para asegurar una implementación efectiva." },
  { title: "ROI Garantizado", desc: "Compromiso con la generación de valor real y retorno de inversión tangible en cada proyecto." },
  { title: "Acompañamiento Continuo", desc: "Soporte y consultoría constante y acceso al equipo durante todo el proceso a largo plazo." },
];

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="py-20"
      id="beneficios"
      style={{ background: "linear-gradient(180deg, hsl(var(--brand-cream)) 0%, hsl(var(--brand-cream) / 0.92) 100%)" }}
    >
      <div ref={ref} className="container mx-auto px-4">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">¿Por qué trabajar conmigo?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Los beneficios que obtendrás al trabajar estás estrategias personalizadas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`flex gap-4 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
              style={{ transitionDelay: isVisible ? `${200 + i * 120}ms` : "0ms" }}
            >
              <div className="flex-shrink-0 mt-1 w-10 h-10 flex items-center justify-center">
                <img src={iconCheckmark} alt="" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 font-mono">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
