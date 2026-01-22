import { CheckCircle, Download, Play, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import heroMobileScreen from "@assets/image_1753553684585.png";
import googlePlayButton from "@assets/get it on google play_1753591775695.png";
import appStoreButton from "@assets/download on appstore_1753592138664.png";

export default function HeroSection() {
  const { t } = useLanguage();
  
  const scrollToDownload = () => {
    const element = document.getElementById("download");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToScreenshots = () => {
    const element = document.getElementById("screenshots");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="refill-gradient pt-24 pb-16 relative overflow-hidden">
      {/* Animated floating gradients background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary red gradient */}
        <div className="absolute w-56 h-72 rounded-full bg-gradient-radial from-[hsl(355,70%,60%)]/30 via-[hsl(355,50%,50%)]/20 to-transparent blur-2xl animate-gradient-float-1"></div>
        
        {/* Pinkish red gradient */}
        <div className="absolute w-48 h-64 rounded-full bg-gradient-radial from-[hsl(340,80%,65%)]/25 via-[hsl(340,60%,55%)]/15 to-transparent blur-xl animate-gradient-float-2"></div>
        
        {/* Greenish pink gradient */}
        <div className="absolute w-40 h-80 rounded-full bg-gradient-radial from-[hsl(320,60%,70%)]/25 via-[hsl(300,70%,60%)]/12 to-transparent blur-2xl animate-gradient-float-3"></div>
        
        {/* Coral gradient */}
        <div className="absolute w-60 h-44 rounded-full bg-gradient-radial from-[hsl(15,85%,65%)]/25 via-[hsl(10,70%,55%)]/15 to-transparent blur-xl animate-gradient-float-4"></div>
        
        {/* Additional random gradients */}
        <div className="absolute w-36 h-52 rounded-full bg-gradient-radial from-[hsl(280,60%,65%)]/20 via-[hsl(270,50%,55%)]/10 to-transparent blur-2xl animate-gradient-float-5"></div>
        
        <div className="absolute w-44 h-36 rounded-full bg-gradient-radial from-[hsl(30,75%,70%)]/25 via-[hsl(25,65%,60%)]/15 to-transparent blur-xl animate-gradient-float-6"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t('heroTitle')}
            </h1>
            
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              {t('heroSubtitle')}
            </p>

            <div className="flex flex-wrap justify-start gap-3 mb-8">
              {/* Google Play Store Button */}
              <button 
                className="app-store-button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '160px',
                  height: '53px',
                  border: '1px solid #fff',
                  borderRadius: '6px',
                  background: 'transparent',
                  transition: 'all 0.3s ease',
                  transform: 'scale(1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <img 
                  src={googlePlayButton} 
                  alt="Get it on Google Play" 
                  style={{
                    width: '116px',
                    height: '29px',
                    objectFit: 'contain'
                  }}
                />
              </button>

              {/* Apple App Store Button */}
              <button 
                className="app-store-button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '160px',
                  height: '53px',
                  border: '1px solid #fff',
                  borderRadius: '6px',
                  background: 'transparent',
                  transition: 'all 0.3s ease',
                  transform: 'scale(1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <img 
                  src={appStoreButton} 
                  alt="Download on the App Store" 
                  style={{
                    width: '100px',
                    height: '27px',
                    objectFit: 'contain'
                  }}
                />
              </button>
            </div>
          </div>

          <div className="lg:text-right animate-fade-in-up">
            <div className="relative inline-block animate-float">
              <img
                src={heroMobileScreen}
                alt="Refill App Main Screen"
                className="w-80 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
