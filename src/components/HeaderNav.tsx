import brandLogo from "@/assets/brand-logo.png";

const navLinks = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Áreas de Consultoría", href: "#areas" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Planes", href: "#contacto" },
];


const HeaderNav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ background: "linear-gradient(90deg, hsl(var(--brand-green) / 0.85) 0%, hsl(var(--brand-navy) / 0.92) 40%, hsl(var(--brand-navy) / 0.95) 100%)" }}>
      <div className="container mx-auto px-4 flex items-center justify-between h-14">
        <div className="flex items-center gap-2">
          <img src={brandLogo} alt="Daniela Luque Díaz" className="h-12 w-auto" />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="text-brand-cream/90 hover:text-brand-cream text-sm font-mono transition-colors duration-200">
            
              {link.label}
            </a>
          )}
        </nav>
        <a
          href="#contacto"
          className="border border-brand-cream/60 text-brand-cream text-sm font-mono px-5 py-1.5 rounded-full hover:bg-brand-cream/10 transition-all duration-200">Agenda una consulta


        </a>
      </div>
    </header>);

};

export default HeaderNav;