import ComprofSection from "@/components/sections/Comprof";
import ContactSection from "@/components/sections/Contacs";
import FAQSection from "@/components/sections/FAQ";
import FeaturesSection from "@/components/sections/Features";
import HRSection from "@/components/sections/HR";
import LandingSection from "@/components/sections/Landing";
import MetricsSection from "@/components/sections/Metrics";
import PartnersSection from "@/components/sections/Partners";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <LandingSection />
      <ComprofSection />
      <FeaturesSection />
      <MetricsSection />
      <PartnersSection />
      <HRSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
