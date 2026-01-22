import { MapPin, Clock, Star, Search, Route, Fuel, Calendar, Bell, Smartphone } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import languageScreen from "@assets/image_1753553701297.png";
import mapScreen from "@assets/image_1753553712882.png";

export default function FeaturesSection() {
  const { t } = useLanguage();
  
  return (
    <section id="features" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        
        {/* Violations Monitoring Feature */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              {t('featuresTitle1')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('featuresDesc1')}
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <Search className="text-[hsl(355,55%,50%)] mr-3 h-5 w-5" />
                <span>{t('feature1_1')}</span>
              </li>
              <li className="flex items-center">
                <Route className="text-[hsl(355,55%,50%)] mr-3 h-5 w-5" />
                <span>{t('feature1_2')}</span>
              </li>
              <li className="flex items-center">
                <Fuel className="text-[hsl(355,55%,50%)] mr-3 h-5 w-5" />
                <span>{t('feature1_3')}</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:text-right animate-fade-in-up">
            <div className="relative inline-block">
              <img
                src={languageScreen}
                alt="Queue Booking Screen"
                className="w-80 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Virtual Map Viewing Feature - Full Width Gradient */}
      <div className="refill-gradient py-16 relative overflow-hidden border border-transparent w-full">
        {/* Animated floating gradients background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Primary red gradient - made bigger */}
          <div className="absolute w-96 h-80 rounded-full bg-gradient-radial from-[hsl(355,70%,60%)]/35 via-[hsl(355,50%,50%)]/25 to-transparent blur-3xl animate-violations-float-1"></div>
          
          {/* Pinkish red gradient - made bigger */}
          <div className="absolute w-84 h-112 rounded-full bg-gradient-radial from-[hsl(340,80%,65%)]/30 via-[hsl(340,60%,55%)]/20 to-transparent blur-2xl animate-violations-float-2"></div>
          
          {/* Greenish pink gradient - made bigger */}
          <div className="absolute w-76 h-88 rounded-full bg-gradient-radial from-[hsl(320,60%,70%)]/30 via-[hsl(300,70%,60%)]/18 to-transparent blur-3xl animate-violations-float-3"></div>
          
          {/* Coral gradient - made bigger */}
          <div className="absolute w-100 h-72 rounded-full bg-gradient-radial from-[hsl(15,85%,65%)]/28 via-[hsl(10,70%,55%)]/18 to-transparent blur-2xl animate-violations-float-4"></div>
          
          {/* Purple gradient - made bigger */}
          <div className="absolute w-80 h-96 rounded-full bg-gradient-radial from-[hsl(280,60%,65%)]/25 via-[hsl(270,50%,55%)]/15 to-transparent blur-3xl animate-violations-float-5"></div>
          
          {/* Additional gradients for more density - made bigger */}
          {/* Blue-purple gradient */}
          <div className="absolute w-88 h-76 rounded-full bg-gradient-radial from-[hsl(250,70%,65%)]/28 via-[hsl(240,60%,55%)]/16 to-transparent blur-2xl animate-violations-float-6"></div>
          
          {/* Orange gradient */}
          <div className="absolute w-72 h-100 rounded-full bg-gradient-radial from-[hsl(35,80%,70%)]/26 via-[hsl(30,70%,60%)]/14 to-transparent blur-3xl animate-violations-float-7"></div>
          
          {/* Magenta gradient */}
          <div className="absolute w-92 h-84 rounded-full bg-gradient-radial from-[hsl(310,75%,65%)]/32 via-[hsl(305,65%,55%)]/18 to-transparent blur-2xl animate-violations-float-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">
          <div className="lg:order-2 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              {t('featuresTitle2')}
            </h2>
            <p className="text-lg text-white/90 mb-6">
              {t('featuresDesc2')}
            </p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center">
                <MapPin className="text-[hsl(355,55%,50%)] mr-3 h-5 w-5" />
                <span>{t('feature2_1')}</span>
              </li>
              <li className="flex items-center">
                <Clock className="text-[hsl(355,55%,50%)] mr-3 h-5 w-5" />
                <span>{t('feature2_2')}</span>
              </li>
              <li className="flex items-center">
                <Star className="text-[hsl(355,55%,50%)] mr-3 h-5 w-5" />
                <span>{t('feature2_3')}</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:order-1 animate-fade-in-up">
            <div className="relative inline-block animate-float">
              {/* Red circular gradient background */}
              <div className="absolute inset-0 -m-12 rounded-full bg-gradient-radial from-[hsl(355,55%,50%)]/35 via-[hsl(355,55%,50%)]/20 to-transparent opacity-75 blur-2xl"></div>
              <img
                src={mapScreen}
                alt="Map and Station Finder Screen"
                className="w-80 h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* Queue Management Feature */}
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-20">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              {t('featuresTitle3')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('featuresDesc3')}
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <Calendar className="text-[hsl(355,55%,50%)] mr-3 h-5 w-5" />
                <span>{t('feature3_1')}</span>
              </li>
              <li className="flex items-center">
                <Bell className="text-[hsl(355,55%,50%)] mr-3 h-5 w-5" />
                <span>{t('feature3_2')}</span>
              </li>
              <li className="flex items-center">
                <Smartphone className="text-[hsl(355,55%,50%)] mr-3 h-5 w-5" />
                <span>{t('feature3_3')}</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:text-center animate-fade-in-up">
            <div className="relative inline-block">
              <div className="w-80 h-[600px] bg-[hsl(355,55%,50%)] rounded-2xl shadow-2xl p-6 text-white flex flex-col justify-center">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-[hsl(355,55%,50%)]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Navbat boshqaruvi</h3>
                  <p className="text-sm opacity-90">Vaqtingizni tejang</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Joriy navbat</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Sizning raqamingiz:</span>
                      <span className="text-xl font-bold">#24</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Kutish vaqti</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Taxminiy:</span>
                      <span className="text-xl font-bold">15 daq</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Xizmat turi</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">To'liq yoqilg'i quyish</span>
                      <span className="text-green-300">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}