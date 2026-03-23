import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
{ value: "10+", label: "Años de experiencia" },
{ value: "50+", label: "Marcas" },
{ value: "95%", label: "Tasa de éxito" }];


const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="py-20"
      id="sobre-mi"
      style={{ background: "linear-gradient(180deg, hsl(var(--brand-cream)) 0%, hsl(var(--brand-cream) / 0.92) 100%)" }}>
      
      <div ref={ref} className="container mx-auto px-4 max-w-3xl">
        <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Sobre mí
        </h2>
        <div className={`space-y-4 text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p>Mi nombre es Iris Horny von Bories. Soy estratega en Marketing Digital, especializada en publicidad digital y posicionamiento digital, con más de 10 años de experiencia impulsando el crecimiento y la transformación digital de emprendimientos y negocios.
            <span className="text-foreground font-semibold">Iris Horny von Bories</span>. 
            Soy estratega en Marketing Digital, especializada en publicidad digital y posicionamiento digital, 
            con más de 16 años de experiencia impulsando el crecimiento y la transformación digital de 
            emprendimientos y negocios.
          </p>
          <p>Soy Licenciada en Administración de Empresas, tengo dos maestrías enfocadas en el mundo de los negocios digitales (España y Argentina), y varios diplomados en gestión empresarial. Estudiar y estar actualizada es clave en este rubro.


A lo largo de mi carrera profesional, trabaje durante 8 años en agencia liderando la planificación, gestión y optimización de campañas en plataformas como Google Ads, Meta, LinkedIn, TikTok, X y plataformas de publicidad programática, administrando presupuestos superiores a USD 100.000.
Además, soy docente universitaria de pregrado y postgrado en la carrera Marketing y Comunicación en la Universidad Privada Boliviana.
          </p>
          <p>Dentro de El Club CRECER, mi objetivo es ayudar a los emprendedores a desarrollar y optimizar su estrategia de Marketing Digital como parte de su proceso de transformación digital, con un enfoque en resultados y sostenibilidad.



          </p>
        </div>
        <div className={`flex gap-12 mt-10 justify-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {stats.map((stat, i) =>
          <div key={stat.label} className="text-center" style={{ transitionDelay: `${600 + i * 150}ms` }}>
              <div className="text-3xl md:text-4xl font-bold text-primary font-mono">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default AboutSection;