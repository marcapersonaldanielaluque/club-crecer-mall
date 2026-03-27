import heroImage from "@/assets/hero-consultant.jpg";
import rayasColores from "@/assets/rayas-colores.png";
import ondasCeleste from "@/assets/ondas-celeste.png";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center bg-brand-cream">
      {/* Rayas colores background pattern */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `url(${rayasColores})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom"
        }} />
      

      {/* Ondas celeste - bottom left behind card */}
      <div className="absolute bottom-[10%] left-0 z-0 w-[550px] h-[400px] opacity-70 pointer-events-none">
        <img src={ondasCeleste} alt="" className="w-full h-full object-contain object-left-bottom" />
      </div>




      

      <div className="container mx-auto relative z-[1] px-4 md:px-8 py-20">
        <div className="flex justify-center">
          {/* Navy card with horizontal layout */}
          <div className="relative bg-brand-navy rounded-3xl max-w-5xl w-full flex flex-col md:flex-row items-stretch overflow-hidden opacity-0 animate-scale-up border border-[#091033]">
            {/* Left: Text content */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center z-10">
              <h3 className="text-lg md:text-xl font-bold text-brand-cream/80 mb-2 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                Club Crecer en Autoridad y Negocio
              </h3>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-cream mb-4 leading-tight opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
                Marketing Digital
              </h1>

              <p className="text-brand-cream/70 text-base md:text-lg mb-8 max-w-lg leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }}>
                Consultoría estratégica personalizada de Marketing Digital que potencia tu marca personal en un activo digital de alto valor.
              </p>

              {/* CTA */}
              <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.9s" }}>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-lg hover:brightness-110 hover:scale-105 transition-all duration-300 font-mono uppercase tracking-wider text-sm">
                  
                  Agenda una consulta
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="relative w-full md:w-[40%] min-h-[300px] md:min-h-0 flex-shrink-0">
              <img
                src={heroImage}
                alt="Consultor profesional"
                className="absolute inset-0 w-full h-full object-cover object-top md:rounded-r-3xl" />
              
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 md:h-32"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, hsl(var(--brand-cream)) 100%)"
        }} />
      
    </section>);

};

export default HeroSection;