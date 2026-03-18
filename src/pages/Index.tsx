import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AreasSection from "@/components/AreasSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav />
      <HeroSection />
      <AboutSection />
      <AreasSection />
      <BenefitsSection />
      <PricingSection />
      <SpecialtiesSection />
      <FooterSection />
    </div>
  );
};

export default Index;
