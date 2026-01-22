import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import AppScreenshots from "@/components/app-screenshots";
import DownloadSection from "@/components/download-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AppScreenshots />
      <DownloadSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
