import { CreditCard, User } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function AppScreenshots() {
  const { t } = useLanguage();

  return (
    <section id="screenshots" className="py-16 refill-gradient relative overflow-hidden">
      {/* Animated floating gradients background - Enhanced visibility */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary red gradient - made bigger */}
        <div className="absolute w-104 h-88 rounded-full bg-gradient-radial from-[hsl(355,70%,60%)]/32 via-[hsl(355,50%,50%)]/22 to-transparent blur-3xl animate-screenshots-float-1"></div>
        
        {/* Pinkish red gradient - made bigger */}
        <div className="absolute w-80 h-112 rounded-full bg-gradient-radial from-[hsl(340,80%,65%)]/28 via-[hsl(340,60%,55%)]/18 to-transparent blur-2xl animate-screenshots-float-2"></div>
        
        {/* Greenish pink gradient - made bigger */}
        <div className="absolute w-96 h-76 rounded-full bg-gradient-radial from-[hsl(320,60%,70%)]/30 via-[hsl(300,70%,60%)]/20 to-transparent blur-3xl animate-screenshots-float-3"></div>
        
        {/* Coral gradient - made bigger */}
        <div className="absolute w-84 h-100 rounded-full bg-gradient-radial from-[hsl(15,85%,65%)]/28 via-[hsl(10,70%,55%)]/18 to-transparent blur-2xl animate-screenshots-float-4"></div>
        
        {/* Purple gradient - made bigger */}
        <div className="absolute w-108 h-80 rounded-full bg-gradient-radial from-[hsl(280,60%,65%)]/26 via-[hsl(270,50%,55%)]/16 to-transparent blur-3xl animate-screenshots-float-5"></div>
        
        {/* Blue gradient - made bigger */}
        <div className="absolute w-76 h-116 rounded-full bg-gradient-radial from-[hsl(240,70%,65%)]/25 via-[hsl(230,60%,55%)]/15 to-transparent blur-2xl animate-screenshots-float-6"></div>
        
        {/* Additional large gradients for more impact */}
        {/* Orange gradient */}
        <div className="absolute w-92 h-84 rounded-full bg-gradient-radial from-[hsl(35,80%,70%)]/24 via-[hsl(30,70%,60%)]/14 to-transparent blur-3xl animate-screenshots-float-1" style={{ animationDelay: '3s' }}></div>
        
        {/* Magenta gradient */}
        <div className="absolute w-88 h-96 rounded-full bg-gradient-radial from-[hsl(310,75%,65%)]/27 via-[hsl(305,65%,55%)]/17 to-transparent blur-2xl animate-screenshots-float-3" style={{ animationDelay: '5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            {t('screenshotsTitle')}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('screenshotsDesc')}
          </p>
        </div>



        {/* Additional Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="feature-card bg-gradient-to-br from-[hsl(355,55%,50%)] to-[hsl(355,60%,60%)] rounded-xl p-8 text-white relative overflow-hidden">
            {/* Animated floating gradients background for virtual payment card */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute w-32 h-48 rounded-full bg-gradient-radial from-[hsl(340,70%,65%)]/15 via-[hsl(340,50%,55%)]/8 to-transparent blur-xl animate-card1-float-1"></div>
              <div className="absolute w-40 h-36 rounded-full bg-gradient-radial from-[hsl(15,80%,70%)]/12 via-[hsl(10,60%,60%)]/6 to-transparent blur-lg animate-card1-float-2"></div>
              <div className="absolute w-28 h-52 rounded-full bg-gradient-radial from-[hsl(280,60%,65%)]/10 via-[hsl(270,50%,55%)]/5 to-transparent blur-xl animate-card1-float-3"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <CreditCard className="h-12 w-12 mr-4" />
                <h3 className="text-2xl font-bold">Virtual to'lov kartalari</h3>
              </div>
              <p className="text-lg opacity-90 mb-6">
                Xavfsiz virtual kartalar yarating va yoqilg'i uchun to'lovlarni tez amalga oshiring.
              </p>
              <ul className="space-y-2 opacity-90">
                <li>• Uzcard va Humo karta qo'llab-quvvatlash</li>
                <li>• Real vaqt rejimida balans tekshirish</li>
                <li>• To'lov tarixi va hisobotlar</li>
              </ul>
            </div>
          </div>

          <div className="feature-card refill-gradient-card border-2 border-[hsl(355,55%,50%)] rounded-xl p-8 relative overflow-hidden">
            {/* Animated floating gradients background for profile card */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute w-36 h-44 rounded-full bg-gradient-radial from-[hsl(355,70%,60%)]/12 via-[hsl(355,50%,50%)]/7 to-transparent blur-xl animate-card2-float-1"></div>
              <div className="absolute w-44 h-32 rounded-full bg-gradient-radial from-[hsl(320,65%,70%)]/10 via-[hsl(300,60%,60%)]/5 to-transparent blur-lg animate-card2-float-2"></div>
              <div className="absolute w-28 h-48 rounded-full bg-gradient-radial from-[hsl(240,70%,65%)]/8 via-[hsl(230,60%,55%)]/4 to-transparent blur-xl animate-card2-float-3"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[hsl(355,55%,50%)] rounded-lg flex items-center justify-center mr-4">
                  <User className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Shaxsiy profil</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                O'zingizning transport vositalaringizni boshqaring va navbatlaringizni kuzatib boring.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Mashina ma'lumotlarini saqlash</li>
                <li>• Navbat tarixi va statistika</li>
                <li>• Shaxsiy sozlamalar va tilni tanlash</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
