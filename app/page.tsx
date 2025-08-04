import { HeroSection } from "@/components/feature/HeroSection";
import { ServiceSection } from "@/components/feature/ServiceSection";
import { TestimonialsSection } from "@/components/feature/TestimonialsSection";
import { GoogleMapSection } from "@/components/feature/GoogleMapSection";
import { CTASection } from "@/components/feature/CTASection";
import { Footer } from "@/components/feature/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <ServiceSection />
        <TestimonialsSection />
        <GoogleMapSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}