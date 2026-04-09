import footerImage from "@/assets/footer-daniela.png";
import { Linkedin, Instagram, Youtube, Facebook, Globe } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/danielaluquediaz/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/danielaluquediaz", label: "Instagram" },
  { icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.21 20.03V24l-8.21-4.73L3.79 24v-3.97l8.21-4.73 8.21 4.73zM3.79 0h16.42v3.28H3.79V0zm0 5.63h16.42v3.28H3.79V5.63z"/>
    </svg>
  ), href: "https://substack.com/@danielaluquediaz", label: "Substack" },
  { icon: Youtube, href: "https://www.youtube.com/@danielaluquediaz", label: "YouTube" },
  { icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.79a8.28 8.28 0 0 0 4.84 1.56V6.85a4.84 4.84 0 0 1-1.08-.16z"/>
    </svg>
  ), href: "https://www.tiktok.com/@danielaluquediaz", label: "TikTok" },
  { icon: Facebook, href: "https://www.facebook.com/MarcapersonalDanielaLuque", label: "Facebook" },
  { icon: Globe, href: "https://danielaluque.com/club/", label: "Web" },
];

const FooterSection = () => {
  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      {/* Green glow effect — top-left corner */}
      <div
        className="absolute -left-20 -top-20 w-[600px] h-[400px]"
        style={{
          background: "radial-gradient(ellipse at 15% 15%, hsl(var(--brand-green) / 0.55) 0%, hsl(var(--brand-green) / 0.2) 40%, transparent 70%)",
        }}
      />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left: Profile */}
          <div className="flex flex-col items-center text-center md:w-1/4 flex-shrink-0">
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-brand-green/40 shadow-lg mb-3">
              <img src={footerImage} alt="Daniela Luque Díaz" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-brand-cream font-bold text-lg font-mono">Daniela Luque Díaz</h3>
            <p className="text-brand-cream/60 text-sm italic mt-1">
              Marketing de Autoridad<br />a través de tu Marca personal
            </p>
          </div>

          {/* Center: Social icons */}
          <div className="flex items-center justify-center gap-5 md:w-2/4">
            {socialLinks.map((link) => {
              const IconComp = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-brand-cream/80 hover:text-primary transition-colors duration-300"
                >
                  {typeof IconComp === "function" && !("render" in IconComp) ? (
                    <IconComp />
                  ) : (
                    <IconComp className="w-5 h-5" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right: Bio text */}
          <div className="md:w-1/4 text-center md:text-right">
            <p className="text-brand-cream/70 text-sm italic leading-relaxed">
              Pionera en la construcción de un sistema y una metodología de crecimiento en LinkedIn, así como de la aplicación de mejores prácticas replicables en tu marca personal.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
