import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, Language } from "@/contexts/language-context";
import appIcon from "@assets/image_1753562052113.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentLanguage, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'uz' as Language, name: t('uzbek') },
    { code: 'ru' as Language, name: t('russian') },
    { code: 'en' as Language, name: t('english') },
  ];

  const handleLanguageChange = (languageCode: Language) => {
    setLanguage(languageCode);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 backdrop-blur-md z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/60' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <img src={appIcon} alt="Refill App Icon" className="h-10 w-10" />
            <span className="text-xl font-bold text-white">{t('brand')}</span>
          </Link>

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="text-white/90 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-0 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none data-[state=open]:outline-none"
              >
                <Globe className="h-4 w-4 mr-2" />
                {languages.find(lang => lang.code === currentLanguage)?.name}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black/90 border-white/20">
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className="text-white hover:bg-white/10 cursor-pointer"
                >
                  {language.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
