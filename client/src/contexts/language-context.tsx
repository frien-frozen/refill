import { createContext, useContext, useState, ReactNode } from "react";

export type Language = 'uz' | 'ru' | 'en';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  uz: {
    // Navigation
    brand: "REFILL.UZ",
    
    // Hero Section
    heroTitle: "Yoqilg'i shahobchalarini toping va navbatsiz yoqilg'i oling",
    heroSubtitle: "Refill ilovasi orqali eng yaqin yoqilg'i shahobchalarini toping, real vaqtda navbat holatini kuzatib boring va virtual to'lov tizimi orqali tez va qulay xarid qiling.",
    downloadApp: "Ilovani yuklab oling",
    learnMore: "Batafsil",
    
    // Features Section
    featuresTitle1: "Onlayn tarzda navbatga oling",
    featuresDesc1: "Vaqtingizni tejang hamda navbatingiz kelganda shahobchaga boring. Real vaqt rejimida navbat holatini kuzatib boring va aniq vaqtda yoqilg'i quyib oling.",
    feature1_1: "Oldindan navbat bandlaash va vaqt tanlash",
    feature1_2: "Navbat yaqinlashganda push-bildirishnoma",
    feature1_3: "QR kod orqali tez to'lov va hisob-kitob",
    
    featuresTitle2: "Yoqilg'i shahobchalarini virtual xaritada ko'rish",
    featuresDesc2: "Ilova sizning shahar yoki viloyatingizdagi barcha mavjud yoqilg'i shahobchalarini real vaqtda ko'rsatadi. Har bir shahobcha haqida to'liq ma'lumot.",
    feature2_1: "Barcha yoqilg'i shahobchalarining aniq joylashuvi",
    feature2_2: "Ish vaqti va navbat holatini real vaqtda kuzatish",
    feature2_3: "Foydalanuvchilar baholari va sharhlar",
    
    featuresTitle3: "Navbat boshqaruvi va smart to'lov tizimi",
    featuresDesc3: "Virtual navbat tizimi orqali vaqtingizni tejang. Stansiyaga yetguncha navbatingizni bronya qiling va aniq vaqtda yoqilg'i quyib oling.",
    feature3_1: "Oldindan navbat bandlaash va vaqt tanlash",
    feature3_2: "Navbat yaqinlashganda push-bildirishnoma",
    feature3_3: "QR kod orqali tez to'lov va hisob-kitob",
    
    // App Screenshots
    screenshotsTitle: "Ilova qulayliklari",
    screenshotsDesc: "Refill ilovasining zamonaviy va foydalanuvchi-do'st interfeysi bilan tanishing. Har bir ekran sodda va tushunarli qilib ishlab chiqilgan.",
    
    // Download Section
    downloadTitle: "Refill ilovasini yuklab oling",
    downloadDesc: "Android va iOS platformalari uchun bepul yuklab oling va yoqilg'i shahobchalarida vaqt tejashni boshlang",
    
    // Contact Section
    contactTitle: "Biz bilan bog'laning",
    contactDesc: "Savollaringiz bormi? Refill jamoasi sizga yordam berishga tayyor. Biz bilan bog'laning va javobni tez oling.",
    contactInfo: "Aloqa ma'lumotlari",
    
    // Language names
    uzbek: "O'zbek",
    russian: "Русский",
    english: "English",
    tajik: "Тоҷикӣ"
  },
  
  ru: {
    // Navigation
    brand: "REFILL.UZ",
    
    // Hero Section
    heroTitle: "Найдите АЗС и заправляйтесь без очередей",
    heroSubtitle: "С приложением Refill находите ближайшие заправки, следите за очередями в реальном времени и совершайте быстрые покупки через виртуальную систему оплаты.",
    downloadApp: "Скачать приложение",
    learnMore: "Подробнее",
    
    // Features Section
    featuresTitle1: "Онлайн бронирование очереди",
    featuresDesc1: "Экономьте время и приезжайте на заправку, когда подойдет ваша очередь. Отслеживайте статус очереди в реальном времени и заправляйтесь точно вовремя.",
    feature1_1: "Предварительное бронирование очереди и выбор времени",
    feature1_2: "Push-уведомления при приближении очереди",
    feature1_3: "Быстрая оплата и расчет через QR-код",
    
    featuresTitle2: "Просмотр АЗС на виртуальной карте",
    featuresDesc2: "Приложение показывает все доступные заправочные станции в вашем городе или регионе в реальном времени. Полная информация о каждой станции.",
    feature2_1: "Точное расположение всех АЗС",
    feature2_2: "Отслеживание рабочего времени и состояния очередей в реальном времени",
    feature2_3: "Оценки и отзывы пользователей",
    
    featuresTitle3: "Управление очередями и умная система оплаты",
    featuresDesc3: "Экономьте время с помощью виртуальной системы очередей. Забронируйте место в очереди до прибытия на станцию и заправляйтесь в точное время.",
    feature3_1: "Предварительное бронирование очереди и выбор времени",
    feature3_2: "Push-уведомления при приближении очереди",
    feature3_3: "Быстрая оплата и расчеты через QR-код",
    
    // App Screenshots
    screenshotsTitle: "Удобства приложения",
    screenshotsDesc: "Познакомьтесь с современным и удобным интерфейсом приложения Refill. Каждый экран разработан просто и понятно.",
    
    // Download Section
    downloadTitle: "Скачайте приложение Refill",
    downloadDesc: "Бесплатно скачайте для платформ Android и iOS и начните экономить время на заправках",
    
    // Contact Section
    contactTitle: "Свяжитесь с нами",
    contactDesc: "Есть вопросы? Команда Refill готова помочь вам. Свяжитесь с нами и получите быстрый ответ.",
    contactInfo: "Контактная информация",
    
    // Language names
    uzbek: "O'zbek",
    russian: "Русский",
    english: "English",
    tajik: "Тоҷикӣ"
  },
  
  en: {
    // Navigation
    brand: "REFILL.UZ",
    
    // Hero Section
    heroTitle: "Find gas stations and refuel without queues",
    heroSubtitle: "With the Refill app, find the nearest gas stations, track queues in real time, and make quick purchases through the virtual payment system.",
    downloadApp: "Download App",
    learnMore: "Learn More",
    
    // Features Section
    featuresTitle1: "Book online queue",
    featuresDesc1: "Save your time and go to the station when your turn comes. Track queue status in real time and refuel at the exact time.",
    feature1_1: "Pre-booking queue and time selection",
    feature1_2: "Push notifications when queue approaches",
    feature1_3: "Quick payment and calculations via QR code",
    
    featuresTitle2: "View gas stations on virtual map",
    featuresDesc2: "The app shows all available gas stations in your city or region in real time. Complete information about each station.",
    feature2_1: "Exact location of all gas stations",
    feature2_2: "Real-time tracking of working hours and queue status",
    feature2_3: "User ratings and reviews",
    
    featuresTitle3: "Queue management and smart payment system",
    featuresDesc3: "Save time with the virtual queue system. Book your queue before arriving at the station and refuel at the exact time.",
    feature3_1: "Pre-booking queue and time selection",
    feature3_2: "Push notifications when queue approaches",
    feature3_3: "Quick payment and calculations via QR code",
    
    // App Screenshots
    screenshotsTitle: "App Conveniences",
    screenshotsDesc: "Get familiar with the modern and user-friendly interface of the Refill app. Every screen is designed simple and clear.",
    
    // Download Section
    downloadTitle: "Download Refill App",
    downloadDesc: "Download for free for Android and iOS platforms and start saving time at gas stations",
    
    // Contact Section
    contactTitle: "Contact Us",
    contactDesc: "Have questions? The Refill team is ready to help you. Contact us and get a quick response.",
    contactInfo: "Contact Information",
    
    // Language names
    uzbek: "O'zbek",
    russian: "Русский", 
    english: "English",
    tajik: "Тоҷикӣ"
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('uz');

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key as keyof typeof translations[typeof currentLanguage]] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}