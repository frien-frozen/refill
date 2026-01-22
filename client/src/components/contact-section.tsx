import { useState } from "react";
import { Send, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/language-context";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Xabar yuborildi!",
        description: "Tez orada siz bilan bog'lanamiz.",
      });
      
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast({
        title: "Xatolik",
        description: "Xabar yuborishda xatolik yuz berdi. Qaytadan urinib ko'ring.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 refill-gradient relative overflow-hidden">
      {/* Animated floating gradients background for contact section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary red gradient */}
        <div className="absolute w-72 h-56 rounded-full bg-gradient-radial from-[hsl(355,70%,60%)]/22 via-[hsl(355,50%,50%)]/14 to-transparent blur-2xl animate-contact-bg-float-1"></div>
        
        {/* Pinkish red gradient */}
        <div className="absolute w-48 h-68 rounded-full bg-gradient-radial from-[hsl(340,80%,65%)]/18 via-[hsl(340,60%,55%)]/11 to-transparent blur-xl animate-contact-bg-float-2"></div>
        
        {/* Greenish pink gradient */}
        <div className="absolute w-64 h-44 rounded-full bg-gradient-radial from-[hsl(320,60%,70%)]/20 via-[hsl(300,70%,60%)]/9 to-transparent blur-2xl animate-contact-bg-float-3"></div>
        
        {/* Coral gradient */}
        <div className="absolute w-52 h-60 rounded-full bg-gradient-radial from-[hsl(15,85%,65%)]/19 via-[hsl(10,70%,55%)]/12 to-transparent blur-xl animate-contact-bg-float-4"></div>
        
        {/* Purple gradient */}
        <div className="absolute w-68 h-48 rounded-full bg-gradient-radial from-[hsl(280,60%,65%)]/17 via-[hsl(270,50%,55%)]/8 to-transparent blur-2xl animate-contact-bg-float-5"></div>
        
        {/* Blue gradient */}
        <div className="absolute w-44 h-72 rounded-full bg-gradient-radial from-[hsl(240,70%,65%)]/18 via-[hsl(230,60%,55%)]/9 to-transparent blur-xl animate-contact-bg-float-6"></div>
      </div>
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('contactDesc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <div className="bg-gray-950 rounded-2xl shadow-lg border border-gray-700 p-8">
              <div className="flex items-center mb-6">
                <MessageCircle className="h-8 w-8 text-[hsl(355,55%,50%)] mr-3" />
                <h3 className="text-2xl font-bold text-white">Xabar yuborish</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Ism va familiya *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ismingizni kiriting"
                      className="w-full bg-gray-100 text-gray-900 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Telefon raqam
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+998 90 123 45 67"
                      className="w-full bg-gray-100 text-gray-900 placeholder:text-gray-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email manzil *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full bg-gray-100 text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Xabar *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Xabaringizni yozing..."
                    rows={8}
                    className="w-full min-h-[200px] bg-gray-100 text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[hsl(355,55%,50%)] hover:bg-[hsl(355,55%,45%)] w-full text-white py-3 text-lg font-semibold transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>Yuborilmoqda...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Xabar yuborish
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-8">
              <div className="refill-gradient-card rounded-2xl p-8 relative overflow-hidden">
                {/* Animated floating gradients background for contact info card */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute w-28 h-40 rounded-full bg-gradient-radial from-[hsl(355,70%,60%)]/8 via-[hsl(355,50%,50%)]/4 to-transparent blur-lg animate-contact-float-1"></div>
                  <div className="absolute w-36 h-28 rounded-full bg-gradient-radial from-[hsl(280,60%,65%)]/6 via-[hsl(270,50%,55%)]/3 to-transparent blur-xl animate-contact-float-2"></div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-6 relative z-10">{t('contactInfo')}</h3>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[hsl(355,55%,50%)] rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-white/90">contact@refill.uz</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Telefon</div>
                      <div className="text-white/90">+998946887004</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Manzil</div>
                      <div className="text-white/90">Ferghana, Uzb</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[hsl(355,55%,50%)] to-[hsl(355,60%,60%)] rounded-2xl p-8 text-white relative overflow-hidden">
                {/* Animated floating gradients background for support card */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute w-32 h-36 rounded-full bg-gradient-radial from-[hsl(340,70%,65%)]/10 via-[hsl(340,50%,55%)]/5 to-transparent blur-lg animate-contact-float-3"></div>
                  <div className="absolute w-28 h-44 rounded-full bg-gradient-radial from-[hsl(15,80%,70%)]/8 via-[hsl(10,60%,60%)]/4 to-transparent blur-xl animate-contact-float-4"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Qo'llab-quvvatlash</h3>
                <p className="text-lg opacity-90 mb-6 relative z-10">
                  24/7 qo'llab-quvvatlash xizmati orqali har qanday savolingizga javob oling.
                </p>
                <ul className="space-y-3 opacity-90 relative z-10">
                  <li>• Texnik yordam</li>
                  <li>• To'lov muammolari</li>
                  <li>• Ilova sozlamalari</li>
                  <li>• Umumiy savollar</li>
                </ul>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
