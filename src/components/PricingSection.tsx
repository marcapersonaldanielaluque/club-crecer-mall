import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import rayasColores from "@/assets/rayas-colores.png";

const plans = [
  {
    name: "Consultoría Express",
    price: "$150 USD",
    subtitle: "Sesión única de 90 minutos",
    features: [
      "Análisis inicial de tu situación",
      "Recomendaciones estratégicas",
      "Plan de acción inmediato",
      "Resumen ejecutivo por email",
    ],
    popular: false,
  },
  {
    name: "Consultoría 3 Sesiones",
    price: "$300 USD",
    subtitle: "3 sesiones de 60 minutos cada una",
    features: [
      "Diagnóstico profundo y completo",
      "Estrategia personalizada detallada",
      "Acompañamiento en implementación",
      "Seguimiento de resultados",
      "Materiales y plantillas exclusivas",
    ],
    popular: true,
  },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-20 overflow-hidden" style={{ background: "var(--cta-gradient)" }} id="contacto">
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `url(${rayasColores})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-cream mb-3">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-brand-cream/60 max-w-xl mx-auto">
            Elige el plan de consultoría que mejor se adapte a tus necesidades.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 flex-1 flex flex-col transition-all duration-600 hover:scale-[1.02] ${
                plan.popular ? "ring-4 shadow-2xl" : "shadow-lg"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{
                ...(plan.popular ? { boxShadow: "0 0 0 4px hsl(var(--brand-green))" } : undefined),
                transitionDelay: isVisible ? `${300 + i * 200}ms` : "0ms",
              }}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-4 text-xs font-bold px-4 py-1 rounded-full font-mono uppercase tracking-wider bg-accent text-accent-foreground">
                  MÁS POPULAR
                </span>
              )}
              <h3 className="text-lg font-bold text-card-foreground mb-1 font-mono">{plan.name}</h3>
              <div className="text-3xl font-bold text-card-foreground mb-1 font-mono">{plan.price}</div>
              <p className="text-sm text-muted-foreground mb-6">{plan.subtitle}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="block text-center py-3 rounded-lg font-bold transition-all duration-300 bg-primary text-primary-foreground hover:brightness-110 hover:scale-105 font-mono uppercase tracking-wider text-sm"
              >
                Agendar {plan.name === "Consultoría Express" ? "Consultoría Express" : "3 Sesiones"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
