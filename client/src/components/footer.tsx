import { Link } from "wouter";
import { Facebook, Twitter, Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import refillLogoWhite from "@assets/Refillv2w_1753553633852.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black py-12 text-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={refillLogoWhite} alt="Refill Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold">REFILL.UZ</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Yoqilg'i shahobchalarini topish, navbat boshqarish va to'lov qilish uchun 
              eng qulay mobil ilova. Vaqtingizni tejang, hayotingizni osonlashtiring.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/refill_uz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://t.me/refill_uz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Ilova</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="hover:text-white transition-colors"
                >
                  Xususiyatlar
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("download")}
                  className="hover:text-white transition-colors"
                >
                  Yuklab olish
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("screenshots")}
                  className="hover:text-white transition-colors"
                >
                  Galereya
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Yordamchi</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Aloqa</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@refill.uz</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+998944101777</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Ferghana, Uzb</span>
              </li>
            </ul>
          </div>
        </div>``
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2024 REFILL.UZ. Barcha huquqlar himoyalangan.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-white transition-colors">Foydalanish shartlari</a>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-white transition-colors"
            >
              Aloqa
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
