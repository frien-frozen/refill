import { Download, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/language-context";
import { apiRequest } from "@/lib/queryClient";
import refillIcon from "@assets/Refillv2_1753553623656.png";
import googlePlayButton from "@assets/get it on google play_1753591775695.png";
import appStoreButton from "@assets/download on appstore_1753592138664.png";

export default function DownloadSection() {
  const { toast } = useToast();
  const { t } = useLanguage();

  const trackDownload = async (platform: string, url: string) => {
    try {
      await apiRequest("POST", "/api/track-download", {
        platform,
        source: "website"
      });
      
      // Open download link
      window.open(url, "_blank");
      
      toast({
        title: "Yuklab olish boshlandi!",
        description: `${platform} ilovasi yuklab olinmoqda...`,
      });
    } catch (error) {
      toast({
        title: "Xatolik",
        description: "Yuklab olishda xatolik yuz berdi. Qaytadan urinib ko'ring.",
        variant: "destructive",
      });
    }
  };

  const handleGooglePlayDownload = () => {
    trackDownload("Android", "https://play.google.com/store/apps");
  };

  const handleAppStoreDownload = () => {
    trackDownload("iOS", "https://apps.apple.com");
  };

  return (
    <section id="download" className="py-16 bg-background relative overflow-hidden">
      {/* Animated floating gradients background for download section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-48 h-64 rounded-full bg-gradient-radial from-[hsl(355,70%,60%)]/15 via-[hsl(355,50%,50%)]/8 to-transparent blur-2xl animate-download-float-1"></div>
        <div className="absolute w-56 h-48 rounded-full bg-gradient-radial from-[hsl(340,80%,65%)]/12 via-[hsl(340,60%,55%)]/6 to-transparent blur-xl animate-download-float-2"></div>
        <div className="absolute w-40 h-72 rounded-full bg-gradient-radial from-[hsl(320,60%,70%)]/10 via-[hsl(300,70%,60%)]/5 to-transparent blur-2xl animate-download-float-3"></div>
        <div className="absolute w-64 h-36 rounded-full bg-gradient-radial from-[hsl(15,85%,65%)]/12 via-[hsl(10,70%,55%)]/6 to-transparent blur-xl animate-download-float-4"></div>
        <div className="absolute w-36 h-56 rounded-full bg-gradient-radial from-[hsl(280,60%,65%)]/10 via-[hsl(270,50%,55%)]/5 to-transparent blur-2xl animate-download-float-5"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="w-20 h-20 mx-auto mb-6">
            <img src={refillIcon} alt="Refill Icon" className="w-full h-full object-contain" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            {t('downloadTitle')}
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('downloadDesc')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {/* Google Play Store Button */}
            <button 
              onClick={handleGooglePlayDownload}
              className="app-store-button"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '160px',
                height: '53px',
                border: 'none',
                borderRadius: '6px',
                background: 'hsl(355, 55%, 50%)',
                transition: 'all 0.3s ease',
                transform: 'scale(1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.backgroundColor = 'hsl(355, 55%, 45%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = 'hsl(355, 55%, 50%)';
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
              onClick={handleAppStoreDownload}
              className="app-store-button"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '160px',
                height: '53px',
                border: 'none',
                borderRadius: '6px',
                background: 'hsl(355, 55%, 50%)',
                transition: 'all 0.3s ease',
                transform: 'scale(1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.backgroundColor = 'hsl(355, 55%, 45%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = 'hsl(355, 55%, 50%)';
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
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 bg-[hsl(355,55%,50%)] rounded-full flex items-center justify-center mx-auto mb-3">
                <Download className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-[hsl(355,55%,50%)]">50K+</div>
              <div className="text-sm text-gray-600">Yuklab olishlar</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 bg-[hsl(355,55%,50%)] rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-[hsl(355,55%,50%)]">4.8</div>
              <div className="text-sm text-gray-600">Reyting</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="w-12 h-12 bg-[hsl(355,55%,50%)] rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-[hsl(355,55%,50%)]">25K+</div>
              <div className="text-sm text-gray-600">Faol foydalanuvchilar</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="w-12 h-12 bg-[hsl(355,55%,50%)] rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-[hsl(355,55%,50%)]">1K+</div>
              <div className="text-sm text-gray-600">Ijobiy sharhlar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
