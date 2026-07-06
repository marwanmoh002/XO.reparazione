/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Smartphone, Tablet, Laptop, Watch, Gamepad2, Wrench, 
  Calendar, Star, Check, Sparkles, MapPin, Clock, Phone, 
  Mail, Award, MessageSquare, ChevronRight, Menu, X, 
  ArrowLeft, Search, HelpCircle, FileText, Layout, Languages, 
  ShieldCheck, Users, ArrowUpRight, CheckCircle2, TrendingUp,
  Instagram, Facebook, ThumbsUp
} from 'lucide-react';

import { Language, BlogPost, Review, ServiceDetail } from './types';
import { translations } from './translations';
import { servicesData } from './data/services';
import { blogData } from './data/blog';

// Subcomponents
import BeforeAfterSlider from './components/BeforeAfterSlider';
import PriceCalculator from './components/PriceCalculator';
import BookingSystem from './components/BookingSystem';
import AdsSimulator from './components/AdsSimulator';
import LocalSchemaViewer from './components/LocalSchemaViewer';
import FloatingCTAs from './components/FloatingCTAs';
import { Logo } from './components/Logo';

const REVIEWS_DATA: Review[] = [
  {
    id: "rev1",
    author: "Federico Mancini",
    rating: 5,
    date: "2026-06-25",
    text: {
      it: "Servizio incredibile! Ho portato il mio iPhone 15 Pro con lo schermo distrutto. In soli 25 minuti l'hanno riparato con un ricambio fantastico sotto i miei occhi. Prezzo onesto e personale simpaticissimo.",
      en: "Incredible service! Brought my iPhone 15 Pro with a shattered screen. They fixed it in just 25 minutes right in front of me. Honest pricing and very friendly staff.",
      ar: "خدمة رائعة! أحضرت هاتف iPhone 15 Pro الخاص بي وكانت شاشته محطمة بالكامل. قاموا بإصلاحها في غضون 25 دقيقة فقط أمام عيني. السعر كان مناسباً جداً والطاقم لطيف للغاية."
    },
    device: "iPhone 15 Pro",
    verified: true
  },
  {
    id: "rev2",
    author: "Elena Castelli",
    rating: 5,
    date: "2026-06-18",
    text: {
      it: "Ho versato del caffè sul mio MacBook Air M2 e non si accendeva più. All'assistenza ufficiale mi avevano chiesto quasi 900€. XO Riparazione ha deossidato la scheda madre in 24 ore facendomi risparmiare più di 500€. Miti assoluti!",
      en: "Spilled coffee on my MacBook Air M2 and it wouldn't turn on. Official support quoted me nearly €900. XO Riparazione deoxidized the logic board in 24 hours, saving me over €500. Absolute legends!",
      ar: "سكبت القهوة على جهاز MacBook Air M2 وتوقف عن العمل تماماً. في الدعم الرسمي طلبوا مني حوالي 900 يورو. قامت شركة XO Riparazione بتنظيف وإزالة أكسدة البوردة في 24 ساعة ووفرت لي أكثر من 500 يورو. رائعون جداً!"
    },
    device: "MacBook Air M2",
    verified: true
  },
  {
    id: "rev3",
    author: "Alessandro Brambilla",
    rating: 5,
    date: "2026-06-02",
    text: {
      it: "Risolto il problema del drift ai Joy-Con della Nintendo Switch di mio figlio in 15 minuti cronometrati. Servizio celere, trasparente e professionale. Molto consigliato per chiunque a Milano.",
      en: "Solved the Joy-Con drift on my son's Nintendo Switch in exactly 15 minutes. Quick, transparent, and professional service. Highly recommended for anyone in Milan.",
      ar: "تم حل مشكلة انحراف عصا التحكم Joy-Con لجهاز نينتندو سويتش الخاص بابني في 15 دقيقة فقط. خدمة سريعة وشفافة ومحترفة. موصى به للغاية للجميع في ميلانو."
    },
    device: "Nintendo Switch OLED",
    verified: true
  },
  {
    id: "rev4",
    author: "Yasmin Al-Farsi",
    rating: 5,
    date: "2026-05-20",
    text: {
      it: "Ero in vacanza a Milano e ho rotto lo schermo del mio Samsung S24 Ultra. Parlano un ottimo inglese e mi hanno rimesso a nuovo il telefono in meno di un'ora. Molto onesti e professionali.",
      en: "I was vacationing in Milan and broke my Samsung S24 Ultra screen. They spoke excellent English and got my phone back like new in less than an hour. Very honest and professional.",
      ar: "كنت في إجازة في ميلانو وانكسرت شاشة هاتفي سامسونج S24 ألترا. يتحدثون الإنجليزية بطلاقة وأصلحوا لي الهاتف كأنه جديد تماماً في أقل من ساعة. صادقون ومحترفون للغاية."
    },
    device: "Samsung Galaxy S24 Ultra",
    verified: true
  }
];

const FAQS_DATA = [
  {
    q: {
      it: "Che tipo di ricambi utilizzate per le riparazioni?",
      en: "What kind of spare parts do you use?",
      ar: "ما هي نوعية قطع الغيار التي تستخدمونها؟"
    },
    a: {
      it: "Utilizziamo esclusivamente ricambi di Qualità Originale (OEM) o Service Pack certificati dei produttori. Questo ci consente di garantire la stessa resa cromatica degli schermi, l'efficienza energetica delle batterie e il mantenimento di tutte le funzioni di fabbrica.",
      en: "We exclusively use OEM (Original Equipment Manufacturer) quality components or certified factory Service Packs. This guarantees identical color representation, battery endurance, and full preservation of native features.",
      ar: "نحن نستخدم حصرياً قطع غيار بجودة أصلية (OEM) أو حزم الخدمة (Service Pack) المعتمدة من الشركات المصنعة. يضمن ذلك الحفاظ على دقة الألوان في الشاشات، وعمر البطارية الفعلي، وعمل كافة الميزات الأصلية."
    },
    cat: "ricambi"
  },
  {
    q: {
      it: "Quanto tempo ci vuole per una riparazione dello schermo?",
      en: "How long does a screen repair take?",
      ar: "كم من الوقت يستغرق إصلاح الشاشة؟"
    },
    a: {
      it: "La sostituzione dello schermo e la maggior parte delle riparazioni richiedono al massimo 60 minuti. Potrai rilassarti nella nostra area d'attesa climatizzata o assistere alla riparazione, eseguita a vista.",
      en: "Screen replacement and most other repairs take a maximum of 60 minutes. You can relax in our climate-controlled lounge or watch the entire repair, which is done in an open workspace.",
      ar: "استبدال الشاشة ومعظم عمليات الإصلاح الأخرى تستغرق 60 دقيقة كحد أقصى. يمكنك الانتظار في صالتنا المكيفة أو مشاهدة عملية الإصلاح التي تتم أمامك مباشرة."
    },
    cat: "tempi"
  },
  {
    q: {
      it: "C'è il rischio di perdere le foto e i dati personali?",
      en: "Is there a risk of losing my photos and personal data?",
      ar: "هل هناك خطر فقدان الصور والبيانات الشخصية الخاصة بي؟"
    },
    a: {
      it: "No. A differenza dei centri ufficiali che resettano obbligatoriamente il dispositivo per policy, XO Riparazione opera preservando l'integrità del tuo sistema operativo. Consigliamo comunque un backup preventivo se possibile, ma garantiamo la massima sicurezza dei tuoi dati.",
      en: "No. Unlike official service centers that mandate a factory reset, XO Riparazione works while fully preserving your OS integrity. We still advise a backup if possible, but we guarantee maximum privacy and data security.",
      ar: "لا. على عكس مراكز الصيانة الرسمية التي تفرض مسح بيانات الجهاز بالكامل، نحن نعمل مع الحفاظ التام على نظام تشغيلك وبياناتك. نوصي دائماً بعمل نسخة احتياطية إن أمكن، ولكننا نضمن أقصى درجات الحماية والخصوصية لبياناتك."
    },
    cat: "privacy"
  },
  {
    q: {
      it: "La riparazione è coperta da garanzia?",
      en: "Is the repair covered by a warranty?",
      ar: "هل الإصلاح مشمول بالضمان؟"
    },
    a: {
      it: "Assolutamente sì. Rilasciamo una ricevuta fiscale con validità di garanzia scritta di 6 mesi su qualsiasi componente sostituito e sulla manodopera. Se riscontri qualsiasi difetto di fabbricazione, interverremo immediatamente a costo zero.",
      en: "Absolutely. We issue a tax receipt which serves as a 6-month written warranty covering both the replaced parts and labor. If you experience any manufacturing defects, we'll fix it immediately for free.",
      ar: "بالتأكيد. نحن نسلمك فاتورة رسمية تعمل كضمان مكتوب لمدة 6 أشهر يغطي كلاً من قطع الغيار المستبدلة والعمل الفني. إذا واجهت أي عيب مصنعي، فسنقوم بإصلاحه فوراً دون أي تكلفة إضافية."
    },
    cat: "garanzia"
  },
  {
    q: {
      it: "Svolgete riparazioni a domicilio a Milano?",
      en: "Do you offer home repair pickups in Milan?",
      ar: "هل تقدمون خدمة استلام وإصلاح من المنزل في ميلانو؟"
    },
    a: {
      it: "Sì, offriamo un servizio di ritiro e consegna Express a domicilio a Milano tramite corriere dedicato. Ritiriamo il telefono rotto a casa o in ufficio, lo ripariamo in laboratorio e te lo riconsegniamo in sole 2-3 ore complessive.",
      en: "Yes, we offer an Express pickup and return service within Milan via a dedicated courier. We collect the broken device from your home or office, repair it in our lab, and deliver it back to you in just 2-3 hours total.",
      ar: "نعم، نحن نقدم خدمة استلام وتسليم سريعة في ميلانو عبر مندوب مخصص. نستلم جهازك التالف من منزلك أو مكتبك، ونقوم بإصلاحه في مختبرنا، ثم نعيده إليك في غضون 2-3 ساعات فقط."
    },
    cat: "servizi"
  }
];

export default function App() {
  const [lang, setLang] = useState<Language>('it');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('home'); // home, services, pricing, about, reviews, blog, contact, business, legal, privacy, cookie, terms
  
  // States for dynamic prefilled booking or active filters
  const [prefilledBooking, setPrefilledBooking] = useState<{cat?: string, brand?: string, repair?: string} | null>(null);
  const [serviceSearchQuery, setServiceSearchQuery] = useState('');
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | null>(null);
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string | null>(null);
  
  // Filter state for FAQ
  const [activeFaqCat, setActiveFaqCat] = useState<string>('all');

  const t = translations[lang];
  const isRtl = lang === 'ar';

  // Apply direction class to HTML body or root depending on language
  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.title = isRtl 
      ? "XO لإصلاح الهواتف الذكية والإلكترونيات بميلانو | ضمان وسرعة"
      : "XO Riparazione Milano | Smartphone, iPhone, Samsung e Computer Repair";
  }, [lang, isRtl]);

  // Hook scroll to top on tab/view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [activeTab, selectedServiceSlug, selectedBlogSlug]);

  const handleSelectRepairFromCalculator = (category: string, brand: string, repair: string) => {
    setPrefilledBooking({ cat: category, brand: brand, repair: repair });
    setActiveTab('book');
  };

  const handleServiceClick = (slug: string) => {
    setSelectedServiceSlug(slug);
    setActiveTab('service-detail');
  };

  const handleBlogClick = (slug: string) => {
    setSelectedBlogSlug(slug);
    setActiveTab('blog-detail');
  };

  const handleBookNowTrigger = () => {
    setPrefilledBooking(null);
    setActiveTab('book');
  };

  // Filtered Services based on search query
  const filteredServices = useMemo(() => {
    if (!serviceSearchQuery) return servicesData;
    return servicesData.filter(s => 
      s.name.toLowerCase().includes(serviceSearchQuery.toLowerCase()) ||
      s.shortDesc[lang].toLowerCase().includes(serviceSearchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(serviceSearchQuery.toLowerCase())
    );
  }, [serviceSearchQuery, lang]);

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    let result = FAQS_DATA;
    if (activeFaqCat !== 'all') {
      result = result.filter(f => f.cat === activeFaqCat);
    }
    if (faqSearchQuery) {
      result = result.filter(f => 
        f.q[lang].toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
        f.a[lang].toLowerCase().includes(faqSearchQuery.toLowerCase())
      );
    }
    return result;
  }, [faqSearchQuery, activeFaqCat, lang]);

  // Find active service object
  const activeService = useMemo(() => {
    if (!selectedServiceSlug) return null;
    return servicesData.find(s => s.slug === selectedServiceSlug);
  }, [selectedServiceSlug]);

  // Find active blog post
  const activeBlog = useMemo(() => {
    if (!selectedBlogSlug) return null;
    return blogData.find(b => b.slug === selectedBlogSlug);
  }, [selectedBlogSlug]);

  return (
    <div className={`min-h-screen bg-brand-black text-zinc-100 selection:bg-brand-blue selection:text-white flex flex-col font-sans ${isRtl ? 'text-right' : 'text-left'}`}>
      
      {/* Dynamic Floating CTAs & Notification toasts */}
      <FloatingCTAs lang={lang} onBookClick={handleBookNowTrigger} />

      {/* EMERGENCY SCROLLING BANNER (CRO urgency) */}
      <div className="bg-brand-blue py-2 border-b border-brand-electric/30 overflow-hidden relative z-50">
        <div className="whitespace-nowrap flex animate-marquee gap-8 text-xs font-bold text-white uppercase tracking-wider font-display">
          <span>{t.emergencyBanner}</span>
          <span className="text-brand-electric">•</span>
          <span>{t.emergencyBanner}</span>
          <span className="text-brand-electric">•</span>
          <span>{t.emergencyBanner}</span>
          <span className="text-brand-electric">•</span>
          <span>{t.emergencyBanner}</span>
        </div>
      </div>

      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-40 bg-brand-black/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <button 
            onClick={() => { setActiveTab('home'); setSelectedServiceSlug(null); }}
            className="flex items-center group cursor-pointer"
          >
            <Logo size={42} showText={true} />
          </button>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <button 
              onClick={() => { setActiveTab('home'); }} 
              className={`hover:text-white transition-colors cursor-pointer ${activeTab === 'home' ? 'text-brand-electric font-semibold' : 'text-zinc-400'}`}
            >
              {t.navHome}
            </button>
            <button 
              onClick={() => { setActiveTab('services'); }} 
              className={`hover:text-white transition-colors cursor-pointer ${activeTab === 'services' || activeTab === 'service-detail' ? 'text-brand-electric font-semibold' : 'text-zinc-400'}`}
            >
              {t.navServices}
            </button>
            <button 
              onClick={() => { setActiveTab('pricing'); }} 
              className={`hover:text-white transition-colors cursor-pointer ${activeTab === 'pricing' ? 'text-brand-electric font-semibold' : 'text-zinc-400'}`}
            >
              {t.navPricing}
            </button>
            <button 
              onClick={() => { setActiveTab('business'); }} 
              className={`hover:text-white transition-colors cursor-pointer ${activeTab === 'business' ? 'text-brand-electric font-semibold' : 'text-zinc-400'}`}
            >
              {t.navBusiness}
            </button>
            <button 
              onClick={() => { setActiveTab('about'); }} 
              className={`hover:text-white transition-colors cursor-pointer ${activeTab === 'about' ? 'text-brand-electric font-semibold' : 'text-zinc-400'}`}
            >
              {t.navAbout}
            </button>
            <button 
              onClick={() => { setActiveTab('reviews'); }} 
              className={`hover:text-white transition-colors cursor-pointer ${activeTab === 'reviews' ? 'text-brand-electric font-semibold' : 'text-zinc-400'}`}
            >
              {t.navReviews}
            </button>
            <button 
              onClick={() => { setActiveTab('faq'); }} 
              className={`hover:text-white transition-colors cursor-pointer ${activeTab === 'faq' ? 'text-brand-electric font-semibold' : 'text-zinc-400'}`}
            >
              {t.navFAQ}
            </button>
            <button 
              onClick={() => { setActiveTab('blog'); }} 
              className={`hover:text-white transition-colors cursor-pointer ${activeTab === 'blog' || activeTab === 'blog-detail' ? 'text-brand-electric font-semibold' : 'text-zinc-400'}`}
            >
              {t.navBlog}
            </button>
            <button 
              onClick={() => { setActiveTab('contact'); }} 
              className={`hover:text-white transition-colors cursor-pointer ${activeTab === 'contact' ? 'text-brand-electric font-semibold' : 'text-zinc-400'}`}
            >
              {t.navContact}
            </button>
          </nav>

          {/* Right Header Controls (Language + Book CTA) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex bg-zinc-900 border border-zinc-800 p-1 rounded-xl">
              {(['it', 'en', 'ar'] as const).map((langId) => (
                <button
                  key={langId}
                  onClick={() => setLang(langId)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold uppercase tracking-wide transition-all cursor-pointer ${
                    lang === langId 
                      ? 'bg-brand-blue text-zinc-950 font-bold shadow'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {langId}
                </button>
              ))}
            </div>

            <button 
              onClick={handleBookNowTrigger}
              className="bg-brand-blue hover:bg-zinc-200 text-zinc-950 font-extrabold py-2.5 px-5 rounded-xl text-sm transition-all hover:scale-[1.03] shadow-md cursor-pointer"
            >
              {t.navBookNow}
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Lang switcher on mobile */}
            <div className="flex bg-zinc-900 border border-zinc-800 p-0.5 rounded-lg">
              {(['it', 'en', 'ar'] as const).map((langId) => (
                <button
                  key={langId}
                  onClick={() => setLang(langId)}
                  className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold transition-all cursor-pointer ${
                    lang === langId 
                      ? 'bg-brand-blue text-zinc-950 font-extrabold'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {langId}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-400 hover:text-white p-1 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-brand-black/95 flex flex-col justify-between p-6 pt-24 lg:hidden">
          <nav className="flex flex-col gap-4 text-lg font-semibold text-zinc-300">
            <button 
              onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} 
              className={`text-left hover:text-white py-2 ${activeTab === 'home' ? 'text-brand-electric border-l-2 border-brand-electric pl-3' : ''}`}
            >
              {t.navHome}
            </button>
            <button 
              onClick={() => { setActiveTab('services'); setMobileMenuOpen(false); }} 
              className={`text-left hover:text-white py-2 ${activeTab === 'services' ? 'text-brand-electric border-l-2 border-brand-electric pl-3' : ''}`}
            >
              {t.navServices}
            </button>
            <button 
              onClick={() => { setActiveTab('pricing'); setMobileMenuOpen(false); }} 
              className={`text-left hover:text-white py-2 ${activeTab === 'pricing' ? 'text-brand-electric border-l-2 border-brand-electric pl-3' : ''}`}
            >
              {t.navPricing}
            </button>
            <button 
              onClick={() => { setActiveTab('business'); setMobileMenuOpen(false); }} 
              className={`text-left hover:text-white py-2 ${activeTab === 'business' ? 'text-brand-electric border-l-2 border-brand-electric pl-3' : ''}`}
            >
              {t.navBusiness}
            </button>
            <button 
              onClick={() => { setActiveTab('about'); setMobileMenuOpen(false); }} 
              className={`text-left hover:text-white py-2 ${activeTab === 'about' ? 'text-brand-electric border-l-2 border-brand-electric pl-3' : ''}`}
            >
              {t.navAbout}
            </button>
            <button 
              onClick={() => { setActiveTab('reviews'); setMobileMenuOpen(false); }} 
              className={`text-left hover:text-white py-2 ${activeTab === 'reviews' ? 'text-brand-electric border-l-2 border-brand-electric pl-3' : ''}`}
            >
              {t.navReviews}
            </button>
            <button 
              onClick={() => { setActiveTab('faq'); setMobileMenuOpen(false); }} 
              className={`text-left hover:text-white py-2 ${activeTab === 'faq' ? 'text-brand-electric border-l-2 border-brand-electric pl-3' : ''}`}
            >
              {t.navFAQ}
            </button>
            <button 
              onClick={() => { setActiveTab('blog'); setMobileMenuOpen(false); }} 
              className={`text-left hover:text-white py-2 ${activeTab === 'blog' ? 'text-brand-electric border-l-2 border-brand-electric pl-3' : ''}`}
            >
              {t.navBlog}
            </button>
            <button 
              onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }} 
              className={`text-left hover:text-white py-2 ${activeTab === 'contact' ? 'text-brand-electric border-l-2 border-brand-electric pl-3' : ''}`}
            >
              {t.navContact}
            </button>
          </nav>

          <div className="space-y-4">
            <button 
              onClick={() => { handleBookNowTrigger(); setMobileMenuOpen(false); }}
              className="w-full bg-brand-blue hover:bg-zinc-200 text-zinc-950 font-extrabold py-3 px-4 rounded-xl text-center block shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
            >
              {t.navBookNow}
            </button>
            <div className="flex justify-around text-xs text-zinc-500 font-mono">
              <span>Via Padova 84, Milano</span>
              <span>•</span>
              <span>+39 344 410 0402</span>
            </div>
          </div>
        </div>
      )}

      {/* MAIN BODY WRAPPER */}
      <main className="flex-grow">
        
        {/* --- VIEW: HOME PAGE --- */}
        {activeTab === 'home' && (
          <div className="space-y-24 pb-20">
            
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-12 md:pt-20 lg:pt-28 pb-16">
              {/* Glowing decorative circles */}
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-electric/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column Text Content */}
                  <div className="lg:col-span-7 space-y-6 md:space-y-8">
                    
                    {/* Floating badge for location */}
                    <div className="inline-flex items-center gap-1.5 bg-brand-blue/15 border border-brand-blue/30 rounded-full px-3.5 py-1.5 text-xs text-brand-electric font-mono font-bold">
                      <MapPin className="w-4 h-4 text-brand-electric" />
                      <span>{t.badgeLocation}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-white tracking-tight leading-none">
                      {t.heroTitle}
                    </h1>

                    <p className="text-zinc-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl">
                      {t.heroDescription}
                    </p>

                    {/* Trust assurances checkmarks */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                      <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                        <Check className="w-4 h-4 bg-brand-blue/20 p-0.5 rounded-full text-brand-electric" />
                        <span>{t.badgeWarranty}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                        <Check className="w-4 h-4 bg-brand-blue/20 p-0.5 rounded-full text-brand-electric" />
                        <span>{t.badgeSameDay}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                        <Check className="w-4 h-4 bg-brand-blue/20 p-0.5 rounded-full text-brand-electric" />
                        <span>{t.badgeParts}</span>
                      </div>
                    </div>

                    {/* Above the fold CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <button 
                        onClick={handleBookNowTrigger}
                        className="bg-brand-blue hover:bg-zinc-100 text-zinc-950 font-extrabold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.03] shadow-[0_0_25px_rgba(255,255,255,0.18)] text-sm cursor-pointer"
                      >
                        <Calendar className="w-4 h-4 text-zinc-950" />
                        <span>{t.ctaBook}</span>
                      </button>

                      <a 
                        href="https://wa.me/393444100402?text=Ciao%20XO,%20vorrei%20informazioni%20per%20riparare%20il%20mio%20dispositivo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all text-sm hover:border-zinc-700"
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-400" />
                        <span>{t.ctaWhatsApp}</span>
                      </a>

                      <a 
                        href="tel:+393444100402"
                        className="bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 text-xs"
                      >
                        <Phone className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{t.ctaCall}</span>
                      </a>
                    </div>

                    {/* Live review score integration */}
                    <div className="pt-6 border-t border-zinc-900 flex items-center gap-4">
                      <div className="flex text-amber-400 gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                      </div>
                      <div className="text-xs text-zinc-400 font-mono">
                        <strong className="text-white">4.9/5 stelle</strong> su Google Reviews (oltre 1,500 recensioni verificate)
                      </div>
                    </div>

                  </div>

                  {/* Right Column Bento Box or Premium Mockup */}
                  <div className="lg:col-span-5 relative">
                    <div className="relative glass rounded-3xl p-6 border border-zinc-800 overflow-hidden shadow-2xl flex flex-col gap-6">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">LABORATORIO MILANO VIA TORINO</span>
                        <span className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                          Aperto Ora
                        </span>
                      </div>

                      {/* Display beautiful interactive before/after screen repair mockup directly */}
                      <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-4 space-y-4">
                        <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
                          <span>iPhone 15 Pro Screen Fix</span>
                          <span className="text-brand-electric">Est. 25 min</span>
                        </div>
                        
                        <div className="h-44 w-full relative rounded-xl overflow-hidden border border-zinc-850">
                          <div className="absolute inset-0 bg-gradient-to-r from-red-950/20 to-zinc-900 flex items-center justify-center">
                            <span className="text-zinc-500 text-xs font-mono">Confronta Schermi sotto</span>
                          </div>
                          {/* Simulated repair transition */}
                          <div className="absolute inset-y-0 left-0 w-1/2 bg-red-900/10 border-r border-brand-electric flex items-center justify-center">
                            <span className="text-[10px] text-red-400 font-mono uppercase tracking-widest bg-zinc-900/80 px-2 py-1 rounded">Shattered Glass</span>
                          </div>
                          <div className="absolute inset-y-0 right-0 w-1/2 bg-emerald-950/10 flex items-center justify-center">
                            <span className="text-[10px] text-emerald-400 font-mono uppercase tracking-widest bg-zinc-900/80 px-2 py-1 rounded">Original OLED</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center text-xs">
                          <span className="text-zinc-500 font-mono">Prezzo trasparente</span>
                          <strong className="text-white font-display text-lg">€89.00 <span className="text-xs text-zinc-500 font-normal">tutto incl.</span></strong>
                        </div>
                      </div>

                      {/* Micro-booking teaser CTA */}
                      <button 
                        onClick={() => { setActiveTab('pricing'); }}
                        className="w-full bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>Calcola tariffa esatta per il tuo telefono</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* TRUST STATISTICS SECTION */}
            <section className="bg-zinc-950 py-12 border-y border-zinc-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="space-y-1">
                    <p className="text-4xl md:text-5xl font-black font-display text-brand-electric">{t.heroStat1}</p>
                    <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">{t.heroStat1Label}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-4xl md:text-5xl font-black font-display text-brand-electric">{t.heroStat2}</p>
                    <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">{t.heroStat2Label}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-4xl md:text-5xl font-black font-display text-brand-electric">{t.heroStat3}</p>
                    <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">{t.heroStat3Label}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-4xl md:text-5xl font-black font-display text-brand-electric">{t.heroStat4}</p>
                    <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">{t.heroStat4Label}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* INTERACTIVE BEFORE/AFTER SLIDER GALLERY */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <BeforeAfterSlider lang={lang} />
            </section>

            {/* SERVICES OVERVIEW SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center space-y-2">
                <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">{t.servicesTitle}</h2>
                <p className="text-zinc-400 text-sm max-w-2xl mx-auto">{t.servicesSubtitle}</p>
              </div>

              {/* Service Grid - Teasing 6 main categorised service pages */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {servicesData.slice(0, 6).map((service) => (
                  <div 
                    key={service.id}
                    className="glass rounded-3xl p-6 border border-zinc-800 hover:border-brand-blue/30 transition-all flex flex-col justify-between group h-80 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-brand-blue/5 rounded-full blur-xl pointer-events-none group-hover:bg-brand-blue/10 transition-all"></div>
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 text-brand-electric flex items-center justify-center mb-6 shadow">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-brand-electric transition-colors">{service.name}</h3>
                      <p className="text-zinc-400 text-xs mt-2 line-clamp-3 leading-relaxed">{service.shortDesc[lang]}</p>
                    </div>

                    <div className="pt-6 border-t border-zinc-900 flex justify-between items-center">
                      <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wide">DA €{service.priceStart} • {service.deliveryTime}</span>
                      <button 
                        onClick={() => handleServiceClick(service.slug)}
                        className="text-xs text-brand-electric font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                      >
                        <span>Scopri</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4">
                <button 
                  onClick={() => setActiveTab('services')}
                  className="bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-white font-semibold py-3 px-8 rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Visualizza tutti i 27 Servizi di Assistenza
                </button>
              </div>
            </section>

            {/* TRANSPARENT RATE CALCULATOR */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <PriceCalculator lang={lang} onSelectRepair={handleSelectRepairFromCalculator} />
            </section>

            {/* PROCESS ROADMAP */}
            <section className="bg-zinc-950 py-20 border-y border-zinc-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">{t.processTitle}</h2>
                  <p className="text-zinc-400 text-sm max-w-2xl mx-auto">{t.processSubtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="space-y-3 relative">
                    <h3 className="text-lg font-bold text-white font-display">{t.processStep1Title}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">{t.processStep1Desc}</p>
                    <span className="text-8xl font-black font-display text-zinc-900/30 absolute -top-8 -right-4 select-none pointer-events-none z-0">1</span>
                  </div>
                  <div className="space-y-3 relative">
                    <h3 className="text-lg font-bold text-white font-display">{t.processStep2Title}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">{t.processStep2Desc}</p>
                    <span className="text-8xl font-black font-display text-zinc-900/30 absolute -top-8 -right-4 select-none pointer-events-none z-0">2</span>
                  </div>
                  <div className="space-y-3 relative">
                    <h3 className="text-lg font-bold text-white font-display">{t.processStep3Title}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">{t.processStep3Desc}</p>
                    <span className="text-8xl font-black font-display text-zinc-900/30 absolute -top-8 -right-4 select-none pointer-events-none z-0">3</span>
                  </div>
                  <div className="space-y-3 relative">
                    <h3 className="text-lg font-bold text-white font-display">{t.processStep4Title}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">{t.processStep4Desc}</p>
                    <span className="text-8xl font-black font-display text-zinc-900/30 absolute -top-8 -right-4 select-none pointer-events-none z-0">4</span>
                  </div>
                </div>
              </div>
            </section>

            {/* GOOGLE ADS LANDING SIMULATOR */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AdsSimulator lang={lang} />
            </section>

            {/* REVIEWS TESTIMONIALS */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center space-y-2">
                <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">{t.reviewsTitle}</h2>
                <p className="text-zinc-400 text-sm max-w-2xl mx-auto">{t.reviewsSubtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {REVIEWS_DATA.map((rev) => (
                  <div key={rev.id} className="glass rounded-3xl p-6 border border-zinc-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-blue/15 text-brand-electric font-semibold flex items-center justify-center font-display border border-brand-blue/20">
                          {rev.author.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">{rev.author}</h4>
                          <span className="text-[10px] text-zinc-500 font-mono">{rev.date} • {rev.device}</span>
                        </div>
                      </div>
                      <div className="flex text-amber-400 gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                      </div>
                    </div>
                    <p className="text-zinc-300 text-xs md:text-sm leading-relaxed">"{rev.text[lang]}"</p>
                    <span className="text-[9px] text-zinc-500 font-mono block">✓ {t.reviewsVerified}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* LOCAL SCHEMA ORGANIZER MARKUP */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <LocalSchemaViewer lang={lang} />
            </section>

            {/* MAP & LOCATION DETAIL */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 space-y-6">
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-electric bg-brand-blue/15 border border-brand-blue/30 px-3 py-1 rounded-full">
                  VISITA IL LABORATORIO A MILANO
                </span>
                <h2 className="text-3xl font-extrabold font-display text-white">{t.contactTitle}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed">{t.contactSubtitle}</p>
                
                <div className="space-y-3.5 font-mono text-xs">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4.5 h-4.5 text-brand-electric" />
                    <span className="text-zinc-300">Via Padova, 84, 20131 Milano (MI)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4.5 h-4.5 text-brand-electric" />
                    <span className="text-zinc-300">{t.contactHoursWeek}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4.5 h-4.5 text-brand-electric" />
                    <span className="text-zinc-300">+39 344 410 0402</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4.5 h-4.5 text-brand-electric" />
                    <span className="text-zinc-300">milano@xo-riparazione.it</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a 
                    href="https://maps.app.goo.gl/m7kHLmEZgtafRUqDA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-brand-blue hover:bg-zinc-200 text-zinc-950 font-bold py-3 px-6 rounded-xl text-xs flex items-center justify-center gap-2 transition-all w-fit shadow-md"
                  >
                    <MapPin className="w-4 h-4 text-zinc-950" />
                    <span>{t.contactDirections}</span>
                  </a>
                </div>
              </div>

              {/* Simulated styled dark map representation to match Apple/Stripe sleekness */}
              <div className="md:col-span-7 h-80 rounded-3xl overflow-hidden border border-zinc-850 relative group">
                <div className="absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center p-6 text-center z-10 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
                  <div className="w-12 h-12 bg-brand-blue/15 border border-brand-blue/35 text-zinc-100 rounded-2xl flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 animate-bounce" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">XO Laboratorio Milano</h4>
                  <p className="text-xs text-zinc-400 mt-1 max-w-sm">
                    In Via Padova, 84, 20131 Milano. Comodamente raggiungibile con la metropolitana (M1, M2 fermata Loreto o M1 fermata Pasteur).
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/m7kHLmEZgtafRUqDA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-zinc-300 hover:text-white font-semibold underline mt-3 inline-block"
                  >
                    Visualizza su Google Maps →
                  </a>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* --- VIEW: SERVICES HUB PAGE (27 Services) --- */}
        {activeTab === 'services' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
            
            {/* Search and Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-900 pb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold font-display text-white">Assistenza Tecnica XO Milano</h1>
                <p className="text-zinc-400 text-sm mt-1">Siamo in grado di riparare qualsiasi componente di smartphone, tablet, smartwatch, PC e console.</p>
              </div>

              {/* Simple Search bar */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-zinc-500 absolute top-1/2 left-3.5 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cerca servizio (es. Face ID, Pixel, iPad)..."
                  value={serviceSearchQuery}
                  onChange={(e) => setServiceSearchQuery(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-electric font-mono"
                />
              </div>
            </div>

            {/* Category Groups list */}
            <div className="space-y-12">
              {(['smartphone', 'tablet', 'computer', 'wearable', 'gaming', 'common'] as const).map((catId) => {
                const catServices = filteredServices.filter(s => s.category === catId);
                if (catServices.length === 0) return null;

                return (
                  <div key={catId} className="space-y-6">
                    <div className="flex items-center gap-2 border-l-2 border-brand-electric pl-3">
                      <h2 className="text-xl font-bold font-display uppercase tracking-wider text-white">
                        {catId === 'smartphone' && "Smartphone Repair (SEO Dedicated)"}
                        {catId === 'tablet' && "Tablet & iPad Support"}
                        {catId === 'computer' && "Computers & MacBooks"}
                        {catId === 'wearable' && "Smartwatch & Wearables"}
                        {catId === 'gaming' && "Console Giochi (Nintendo/PS5/Xbox)"}
                        {catId === 'common' && "Riparazioni Comuni ed Esclusive"}
                      </h2>
                      <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">{catServices.length}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {catServices.map((service) => (
                        <div 
                          key={service.id}
                          className="bg-zinc-950/40 rounded-2xl p-5 border border-zinc-900 hover:border-zinc-800 transition-all flex flex-col justify-between group cursor-pointer"
                          onClick={() => handleServiceClick(service.slug)}
                        >
                          <div>
                            <div className="flex justify-between items-start mb-4">
                              <span className="text-[9px] text-zinc-500 font-mono uppercase bg-zinc-900 px-2 py-0.5 rounded border border-zinc-850">
                                {service.brand || "XO Certified"}
                              </span>
                              <span className="text-xs text-emerald-400 font-mono font-semibold">Da €{service.priceStart}</span>
                            </div>
                            <h3 className="text-base font-bold text-white group-hover:text-brand-electric transition-colors">{service.name}</h3>
                            <p className="text-zinc-400 text-xs mt-2 line-clamp-2 leading-relaxed">{service.shortDesc[lang]}</p>
                          </div>

                          <div className="pt-4 mt-4 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                            <span>⏱️ {service.deliveryTime}</span>
                            <span className="text-brand-electric font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                              Apri Landing SEO →
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* --- VIEW: INDIVIDUAL SERVICE LANDING PAGE (Sleek Apple style SEO landing) --- */}
        {activeTab === 'service-detail' && activeService && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
            
            {/* SEO Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <button onClick={() => setActiveTab('home')} className="hover:text-zinc-300">Home</button>
              <ChevronRight className="w-3 h-3" />
              <button onClick={() => setActiveTab('services')} className="hover:text-zinc-300">Servizi</button>
              <ChevronRight className="w-3 h-3" />
              <span className="text-brand-electric">{activeService.name}</span>
            </div>

            {/* Main Service Hero Column */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                
                {/* Simulated SEO Meta titles block */}
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Indicizzato Google: " {activeService.seoKeyword} "</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
                  {activeService.name} Milano Centro
                </h1>

                <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                  {activeService.longDesc[lang]}
                </p>

                {/* Common symptoms list */}
                <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    Sintomi Comuni Risolti:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.commonIssues[lang].map((issue, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check className="w-4 h-4 text-emerald-400 bg-emerald-500/15 p-0.5 rounded-full flex-shrink-0" />
                        <span>{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specific trust assurance badges */}
                <div className="flex flex-wrap gap-3 font-mono text-[10px] text-zinc-400">
                  <span className="bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">🔧 Riparato in {activeService.deliveryTime}</span>
                  <span className="bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">🛡️ Garanzia 6 Mesi inclusa</span>
                  <span className="bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full">💾 Zero Perdita Dati</span>
                </div>

              </div>

              {/* Booking Trigger / Call to Action sidebar */}
              <div className="lg:col-span-5 bg-zinc-950 border border-zinc-900 p-6 rounded-3xl space-y-6 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/10 rounded-full blur-2xl"></div>

                <div className="flex justify-between items-baseline border-b border-zinc-900 pb-4">
                  <div>
                    <span className="text-[10px] text-zinc-500 font-mono block">TARIFFA D'INGRESSO</span>
                    <strong className="text-3xl font-bold font-display text-white">Da €{activeService.priceStart}</strong>
                  </div>
                  <span className="text-xs text-brand-electric font-mono">Manodopera inclusa</span>
                </div>

                <div className="space-y-4 text-xs text-zinc-400">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brand-electric mt-0.5" />
                    <span>Nessun appuntamento obbligatorio. Puoi venire direttamente in negozio.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brand-electric mt-0.5" />
                    <span>Test di diagnostica preliminare gratuito.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brand-electric mt-0.5" />
                    <span>Disponibilità ricambio assicurata prenotando ora.</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button 
                    onClick={() => {
                      setPrefilledBooking({
                        cat: activeService.category,
                        brand: activeService.brand || 'Apple',
                        repair: activeService.name
                      });
                      setActiveTab('book');
                    }}
                    className="w-full bg-brand-blue hover:bg-zinc-100 text-zinc-950 font-extrabold py-3 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all text-xs shadow-lg cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-zinc-950" />
                    <span>Richiedi Sostituzione Ora</span>
                  </button>

                  <a 
                    href="https://wa.me/393444100402?text=Ciao%20XO,%20vorrei%20informazioni%20per%20la%20riparazione:%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-1.5 text-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Parla con un tecnico su WhatsApp</span>
                  </a>
                </div>

                <div className="text-center">
                  <button 
                    onClick={() => { setActiveTab('services'); }}
                    className="text-zinc-500 hover:text-zinc-300 text-xs font-mono underline"
                  >
                    ← Ritorna all'elenco servizi
                  </button>
                </div>

              </div>
            </div>

            {/* Custom Schema.org component showing the exact service schema for this page */}
            <div className="border border-zinc-900 rounded-3xl p-6 bg-zinc-950/40">
              <h3 className="text-sm font-semibold font-mono text-zinc-400 mb-3 flex items-center gap-1.5">
                <Layout className="w-4 h-4 text-brand-electric" />
                <span>Microdati Strutturati SEO (Schema.org) caricati per questa pagina:</span>
              </h3>
              <pre className="bg-zinc-950 p-4 rounded-xl text-emerald-400 font-mono text-xs overflow-x-auto border border-zinc-900">
{`{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "${activeService.name} Milano",
  "serviceType": "${activeService.name}",
  "provider": {
    "@type": "LocalBusiness",
    "name": "XO Riparazione Milano"
  },
  "areaServed": "Milano",
  "offers": {
    "@type": "Offer",
    "price": "${activeService.priceStart}.00",
    "priceCurrency": "EUR"
  }
}`}
              </pre>
            </div>

          </div>
        )}

        {/* --- VIEW: PRICING (Price Finder Calculator) --- */}
        {activeTab === 'pricing' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
            <div className="text-center space-y-2">
              <h1 className="text-3xl md:text-4xl font-extrabold font-display text-white">Tariffario Trasparente XO Riparazione</h1>
              <p className="text-zinc-400 text-sm max-w-2xl mx-auto">Seleziona il tuo modello per ottenere una stima immediata. Nessun costo nascosto. Diagnostica gratuita inclusa.</p>
            </div>

            <PriceCalculator lang={lang} onSelectRepair={handleSelectRepairFromCalculator} />
          </div>
        )}

        {/* --- VIEW: BOOKING WIZARD --- */}
        {activeTab === 'book' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <BookingSystem 
              lang={lang} 
              prefilledCategory={prefilledBooking?.cat} 
              prefilledBrand={prefilledBooking?.brand} 
              prefilledRepair={prefilledBooking?.repair} 
            />
          </div>
        )}

        {/* --- VIEW: ABOUT US --- */}
        {activeTab === 'about' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12 leading-relaxed">
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-extrabold font-display text-white">L'eccellenza tecnologica a Milano</h1>
              <p className="text-zinc-400 text-sm font-mono uppercase tracking-widest">XO RIPARAZIONE</p>
            </div>

            <div className="space-y-6 text-zinc-300">
              <p>
                Nato nel cuore di Milano, **XO Riparazione** è il punto di riferimento per chi non accetta compromessi sulla qualità dell'assistenza tecnologica. Fondato da un team di ingegneri elettronici e tecnici certificati, il nostro laboratorio in **Via Padova 84** combina strumentazione industriale di altissimo livello e un servizio clienti ultra-rapido, trasparente e cordiale.
              </p>
              
              <h3 className="text-xl font-bold font-display text-white pt-4">La nostra filosofia: Trasparenza a vista</h3>
              <p>
                Siamo convinti che la fiducia si costruisca con la trasparenza. Per questo motivo, tutte le nostre riparazioni vengono eseguite **a vista** sotto gli occhi del cliente. Non nascondiamo nulla: potrai vedere con quanta cura ed estrema precisione i nostri tecnici riparano i circuiti integrati, deossidano le schede madri o montano nuovi display OLED.
              </p>

              <h3 className="text-xl font-bold font-display text-white pt-4">Ricambi certificati e 6 mesi di garanzia scritta</h3>
              <p>
                Molti riparatori utilizzano componenti a basso costo per massimizzare i profitti, compromettendo l'affidabilità del telefono. Da XO Riparazione, ogni ricambio (sia originale o equivalente di grado A+) viene meticolosamente testato prima del montaggio. Rilasciamo una garanzia scritta completa di 6 mesi su qualsiasi riparazione hardware.
              </p>
            </div>

            {/* Photo illustration placeholders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="h-60 rounded-2xl bg-zinc-950 border border-zinc-900 flex flex-col items-center justify-center p-6 text-center">
                <Award className="w-10 h-10 text-brand-electric mb-3" />
                <h4 className="text-white font-bold font-display text-sm">Tecnici Certificati</h4>
                <p className="text-xs text-zinc-400 mt-1 max-w-xs">Tutto il nostro staff vanta certificazioni rilasciate dai principali costruttori mondiali.</p>
              </div>
              <div className="h-60 rounded-2xl bg-zinc-950 border border-zinc-900 flex flex-col items-center justify-center p-6 text-center">
                <Wrench className="w-10 h-10 text-brand-electric mb-3" />
                <h4 className="text-white font-bold font-display text-sm">Laboratorio Industriale</h4>
                <p className="text-xs text-zinc-400 mt-1 max-w-xs">Dotato di macchinari laser per vetri posteriori, stazioni di microsaldatura a infrarossi e lavaggi chimici ad ultrasuoni.</p>
              </div>
            </div>

          </div>
        )}

        {/* --- VIEW: BUSINESS CLIENTS --- */}
        {activeTab === 'business' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
            <div className="text-center space-y-2">
              <h1 className="text-4xl font-extrabold font-display text-white">Servizi IT & Riparazioni per Aziende</h1>
              <p className="text-zinc-400 text-sm max-w-2xl mx-auto">La corsia preferenziale per uffici, professionisti, hotel e negozi a Milano. Riduci al minimo i tempi di inattività del tuo team.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-5 space-y-3">
                <Check className="w-6 h-6 text-brand-electric bg-brand-blue/15 p-1 rounded-lg" />
                <h3 className="text-base font-bold text-white font-display">Fatturazione Mensile</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">Raccogli tutte le riparazioni in un'unica fattura mensile riepilogativa, semplificando la contabilità IT della tua azienda.</p>
              </div>
              <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-5 space-y-3">
                <Check className="w-6 h-6 text-brand-electric bg-brand-blue/15 p-1 rounded-lg" />
                <h3 className="text-base font-bold text-white font-display">Ritiro Express Gratuito</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">Mandiamo un corriere XO nel tuo ufficio a Milano per ritirare il dispositivo danneggiato e riconsegnartelo in giornata.</p>
              </div>
              <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-5 space-y-3">
                <Check className="w-6 h-6 text-brand-electric bg-brand-blue/15 p-1 rounded-lg" />
                <h3 className="text-base font-bold text-white font-display">Sconti a Scaglioni</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">Listini prezzi agevolati e sconti crescenti in base al volume flotta di smartphone, tablet e laptop aziendali gestiti.</p>
              </div>
            </div>

            {/* B2B contact form teaser */}
            <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-3xl p-8 space-y-6">
              <h3 className="text-lg font-bold text-white font-display">Richiedi la Convenzione Aziendale</h3>
              <p className="text-zinc-400 text-xs max-w-xl">Entro 2 ore un account manager ti invierà la proposta di convenzione commerciale su misura per la tua flotta aziendale.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Nome Azienda" className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-electric" />
                <input type="email" placeholder="Email Lavorativa" className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-electric" />
              </div>

              <button 
                onClick={() => alert("Richiesta inviata! Un consulente aziendale ti contatterà al più presto.")}
                className="bg-brand-blue hover:bg-zinc-200 text-zinc-950 font-bold py-3 px-6 rounded-xl text-xs transition-colors cursor-pointer"
              >
                Invia Candidatura Business
              </button>
            </div>

          </div>
        )}

        {/* --- VIEW: REVIEWS PAGE --- */}
        {activeTab === 'reviews' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
            <div className="text-center space-y-2">
              <h1 className="text-3xl md:text-4xl font-extrabold font-display text-white">Recensioni Verificate Clienti XO</h1>
              <p className="text-zinc-400 text-sm max-w-2xl mx-auto">La soddisfazione dei nostri clienti è il nostro miglior biglietto da visita. Leggi le esperienze reali raccolte su Google Maps.</p>
            </div>

            <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center space-y-2 md:border-r md:border-zinc-900 pr-4">
                <p className="text-6xl font-extrabold font-display text-white">4.9</p>
                <div className="flex justify-center text-amber-400 gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-[10px] text-zinc-500 font-mono">SU 1,540+ VALUTAZIONI</p>
              </div>

              <div className="md:col-span-2 space-y-2">
                <h3 className="text-base font-bold text-white font-display">100% Recensioni Reali</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Ogni recensione visualizzata è collegata a una scheda di riparazione effettiva nel nostro gestionale, garantendo la veridicità totale delle valutazioni.
                </p>
                <div className="pt-2">
                  <a href="https://maps.app.goo.gl/m7kHLmEZgtafRUqDA" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-300 hover:text-white font-mono underline inline-block">
                    Visualizza la scheda Google Maps ufficiale →
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {REVIEWS_DATA.map((rev) => (
                <div key={rev.id} className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-semibold text-white">{rev.author}</h4>
                      <span className="text-[10px] text-zinc-500 font-mono">{rev.date} • {rev.device}</span>
                    </div>
                    <div className="flex text-amber-400 gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                    </div>
                  </div>
                  <p className="text-zinc-300 text-xs md:text-sm leading-relaxed">"{rev.text[lang]}"</p>
                  <span className="text-[9px] text-zinc-500 font-mono block">✓ Recensione certificata</span>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* --- VIEW: FAQ PAGE --- */}
        {activeTab === 'faq' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
            
            <div className="text-center space-y-2">
              <h1 className="text-3xl md:text-4xl font-extrabold font-display text-white">{t.faqTitle}</h1>
              <p className="text-zinc-400 text-sm max-w-2xl mx-auto">{t.faqSubtitle}</p>
            </div>

            {/* Search and Category filters */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 text-zinc-500 absolute top-1/2 left-4 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={t.faqSearchPlaceholder}
                  value={faqSearchQuery}
                  onChange={(e) => setFaqSearchQuery(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-xs text-white focus:outline-none focus:border-brand-electric font-mono"
                />
              </div>

              {/* Cat selector */}
              <div className="flex flex-wrap gap-2">
                {['all', 'ricambi', 'tempi', 'privacy', 'garanzia', 'servizi'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFaqCat(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      activeFaqCat === cat
                        ? 'bg-brand-blue text-zinc-950 border-brand-blue font-bold shadow-md'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                    }`}
                  >
                    {cat === 'all' && "Tutte"}
                    {cat === 'ricambi' && "Qualità Ricambi"}
                    {cat === 'tempi' && "Tempistiche d'Attesa"}
                    {cat === 'privacy' && "Privacy & Dati"}
                    {cat === 'garanzia' && "Garanzie Scritte"}
                    {cat === 'servizi' && "Consegna/Ritiro"}
                  </button>
                ))}
              </div>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => (
                <div key={idx} className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 space-y-3">
                  <h3 className="text-sm font-bold text-white flex items-start gap-2 leading-relaxed">
                    <HelpCircle className="w-4.5 h-4.5 text-brand-electric flex-shrink-0 mt-0.5" />
                    <span>{faq.q[lang]}</span>
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed pl-6">
                    {faq.a[lang]}
                  </p>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* --- VIEW: BLOG HUB --- */}
        {activeTab === 'blog' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-12">
            
            <div className="text-center space-y-2">
              <h1 className="text-3xl md:text-4xl font-extrabold font-display text-white">Consigli e Guide di Riparazione</h1>
              <p className="text-zinc-400 text-sm max-w-2xl mx-auto">Tieniti informato sulla manutenzione del tuo dispositivo, scopri i costi reali e i trucchi degli esperti per evitare truffe.</p>
            </div>

            {/* Blog Post List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogData.map((post) => (
                <article 
                  key={post.id}
                  className="bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-800 transition-all flex flex-col justify-between cursor-pointer group"
                  onClick={() => handleBlogClick(post.slug)}
                >
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                      <span>{post.date}</span>
                      <span>⏱️ {post.readTime}</span>
                    </div>
                    <span className="text-[10px] text-brand-electric font-mono font-bold uppercase tracking-wider bg-brand-blue/15 px-2 py-0.5 rounded border border-brand-blue/20 w-fit block">
                      {post.category}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-brand-electric transition-colors leading-snug">
                      {post.title[lang]}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                      {post.excerpt[lang]}
                    </p>
                  </div>

                  <div className="px-6 py-4 border-t border-zinc-900 flex justify-between items-center text-xs font-semibold text-brand-electric font-mono">
                    <span>Leggi Articolo Completo</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              ))}
            </div>

          </div>
        )}

        {/* --- VIEW: BLOG SINGLE DETAIL --- */}
        {activeTab === 'blog-detail' && activeBlog && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-8">
            
            <button 
              onClick={() => setActiveTab('blog')}
              className="text-zinc-500 hover:text-zinc-300 text-xs font-mono flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Torna al Blog</span>
            </button>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs text-zinc-500 font-mono border-b border-zinc-900 pb-4">
                <span>Data Pubblicazione: {activeBlog.date}</span>
                <span>Tempo Lettura: {activeBlog.readTime}</span>
                <span>Autore: {activeBlog.author}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight">
                {activeBlog.title[lang]}
              </h1>
            </div>

            {/* Rich markdown simulation text content block */}
            <div className="text-zinc-300 text-xs md:text-sm leading-relaxed space-y-6 whitespace-pre-wrap font-sans">
              {activeBlog.content[lang]}
            </div>

            {/* Quick booking CTA footer on article */}
            <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
              <div>
                <h3 className="text-sm font-bold text-white font-display">Hai bisogno di riparare il tuo dispositivo oggi?</h3>
                <p className="text-zinc-400 text-xs mt-1">Prenota lo slot Express a Milano Centro in 60 secondi.</p>
              </div>
              <button 
                onClick={handleBookNowTrigger}
                className="bg-brand-blue hover:bg-zinc-200 text-zinc-950 font-extrabold py-2.5 px-5 rounded-xl text-xs transition-colors cursor-pointer"
              >
                Prenota Ora
              </button>
            </div>

          </div>
        )}

        {/* --- VIEW: CONTACT PAGE --- */}
        {activeTab === 'contact' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
            <div className="text-center space-y-2">
              <h1 className="text-3xl md:text-4xl font-extrabold font-display text-white">Contatta XO Riparazione Milano</h1>
              <p className="text-zinc-400 text-sm max-w-2xl mx-auto">Hai dubbi o vuoi richiedere un preventivo speciale? Scrivici o chiamaci. Rispondiamo in giornata.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-white font-display">I Nostri Recapiti</h3>
                <div className="space-y-4 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-brand-electric" />
                    <span className="text-zinc-300">Via Padova 84, 20131 Milano (MI)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand-electric" />
                    <span className="text-zinc-300">Lun - Dom: 10:00 - 21:00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-electric" />
                    <span className="text-zinc-300">+39 344 410 0402</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-brand-electric" />
                    <span className="text-zinc-300">assistenza@xo-riparazione.it</span>
                  </div>
                </div>

                {/* Social links block */}
                <div className="pt-4 border-t border-zinc-900 space-y-3">
                  <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wide">Seguici sui social</h4>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://www.instagram.com/xoriparazione" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 transition-colors">
                      <Instagram className="w-4 h-4 text-pink-500" />
                      <span>Instagram</span>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61586709075824" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 transition-colors">
                      <Facebook className="w-4 h-4 text-blue-500" />
                      <span>Facebook</span>
                    </a>
                    <a href="https://www.tiktok.com/@xo.riparazione" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 transition-colors">
                      <svg className="w-4 h-4 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                      </svg>
                      <span>TikTok</span>
                    </a>
                    <a href="https://linktr.ee/XO.riparazione" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 transition-colors">
                      <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </svg>
                      <span>Linktree</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Styled Message form */}
              <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-2xl space-y-4">
                <h3 className="text-base font-bold text-white font-display">Invia un Messaggio Diretto</h3>
                
                <div className="space-y-3">
                  <input type="text" placeholder="Nome" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-electric" />
                  <input type="email" placeholder="Email" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-electric" />
                  <textarea rows={3} placeholder="Come possiamo aiutarti?" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-electric" />
                </div>

                <button 
                  onClick={() => alert("Messaggio inviato con successo! Ti risponderemo entro pochissime ore.")}
                  className="w-full bg-brand-blue hover:bg-zinc-200 text-zinc-950 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Invia Messaggio
                </button>
              </div>
            </div>

          </div>
        )}

        {/* --- VIEW: PRIVACY POLICY --- */}
        {activeTab === 'privacy' && (
          <div className="max-w-3xl mx-auto px-4 py-16 space-y-6 text-zinc-300 text-xs md:text-sm leading-relaxed">
            <h1 className="text-3xl font-extrabold font-display text-white">Informativa sulla Privacy</h1>
            <p className="text-zinc-500 font-mono text-xs">Ultimo aggiornamento: Luglio 2026</p>
            
            <p>
              Benvenuto su XO Riparazione. Abbiamo a cuore la tutela dei tuoi dati personali. Ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR), ti informiamo che i dati raccolti attraverso i moduli di prenotazione, calcolatori di prezzo e richieste di contatto vengono memorizzati unicamente per lo scopo di adempiere al servizio richiesto.
            </p>
            <h3 className="text-sm font-bold text-white uppercase font-mono mt-4">1. Titolare del Trattamento</h3>
            <p>
              Il titolare del trattamento è XO Riparazione S.r.l., con sede legale in Milano, Via Padova 84. Email di contatto: privacy@xo-riparazione.it.
            </p>
            <h3 className="text-sm font-bold text-white uppercase font-mono mt-4">2. Finalità della Raccolta</h3>
            <p>
              I dati vengono elaborati per le seguenti finalità:
              <br />• Gestione e conferma degli appuntamenti di riparazione.
              <br />• Invio di comunicazioni tecniche via SMS o WhatsApp relative allo stato del dispositivo.
              <br />• Emissione di ricevute fiscali e garanzie scritte obbligatorie di 6 mesi.
            </p>
            <h3 className="text-sm font-bold text-white uppercase font-mono mt-4">3. Sicurezza dei Dati sul Dispositivo</h3>
            <p>
              Durante il processo di riparazione hardware, XO Riparazione garantisce la totale inaccessibilità e sicurezza dei dati personali residenti sulla memoria flash del dispositivo (foto, video, contatti, messaggi). Non effettuiamo formattazioni o ripristini a meno che non sia l'unica risorsa per guasti software, previo esplicito consenso del cliente.
            </p>
          </div>
        )}

        {/* --- VIEW: COOKIE POLICY --- */}
        {activeTab === 'cookie' && (
          <div className="max-w-3xl mx-auto px-4 py-16 space-y-6 text-zinc-300 text-xs md:text-sm leading-relaxed">
            <h1 className="text-3xl font-extrabold font-display text-white">Cookie Policy</h1>
            <p className="text-zinc-500 font-mono text-xs">Ultimo aggiornamento: Luglio 2026</p>
            
            <p>
              Questo sito web utilizza cookie tecnici ed analitici per assicurare il corretto funzionamento delle interfacce (come la lingua selezionata e lo stato dei calcolatori) e per comprendere in forma anonima le interazioni dei visitatori.
            </p>
            <h3 className="text-sm font-bold text-white uppercase font-mono mt-4">1. Cosa sono i Cookie</h3>
            <p>
              I cookie sono piccoli file di testo inviati dal sito al terminale dell'interessato, dove vengono memorizzati per essere poi ritrasmessi al sito alla visita successiva.
            </p>
            <h3 className="text-sm font-bold text-white uppercase font-mono mt-4">2. Cookie tecnici e di sessione</h3>
            <p>
              Questi cookie sono strettamente necessari per abilitare le funzionalità di prenotazione e visualizzazione del sito. Non memorizzano informazioni personali identificabili e non richiedono il consenso preventivo per legge.
            </p>
          </div>
        )}

        {/* --- VIEW: TERMS OF SERVICE --- */}
        {activeTab === 'terms' && (
          <div className="max-w-3xl mx-auto px-4 py-16 space-y-6 text-zinc-300 text-xs md:text-sm leading-relaxed">
            <h1 className="text-3xl font-extrabold font-display text-white">Termini e Condizioni di Servizio</h1>
            <p className="text-zinc-500 font-mono text-xs">Ultimo aggiornamento: Luglio 2026</p>
            
            <p>
              I presenti Termini disciplinano il rapporto contrattuale per qualsiasi servizio di riparazione fornito da XO Riparazione Milano in negozio o tramite ritiro a domicilio.
            </p>
            <h3 className="text-sm font-bold text-white uppercase font-mono mt-4">1. Accettazione del Dispositivo e Diagnostica</h3>
            <p>
              Ogni dispositivo consegnato in laboratorio viene sottoposto a una diagnostica preliminare gratuita per identificare i guasti dichiarati e latenti. Il preventivo stimato può essere modificato solo previo contatto e approvazione del cliente.
            </p>
            <h3 className="text-sm font-bold text-white uppercase font-mono mt-4">2. Termini di Garanzia Scritta</h3>
            <p>
              Tutte le riparazioni hardware beneficiano di una garanzia di 6 mesi a decorrere dalla data della fattura/ricevuta fiscale. La garanzia copre esclusivamente i difetti intrinseci del componente sostituito e decade immediatamente in presenza di danni fisici accidentali, infiltrazioni successive di liquidi o manomissioni terze.
            </p>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-24 md:pb-12 text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Logo & Legal block */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Logo size={36} showText={true} />
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Sito web ottimizzato per conversioni e campagne Google Ads. XO Riparazione è leader nell'assistenza espressa per dispositivi mobile, tablet e laptop a Milano Centro.
            </p>
            <span className="text-[10px] text-zinc-600 block">PIVA: IT02876543219 • Capitale Sociale i.v. €50,000</span>
          </div>

          {/* Links: Services shortcuts */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-white">Servizi Popolari</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => handleServiceClick('riparazione-iphone')} className="hover:text-white transition-colors cursor-pointer">Riparazione iPhone Milano</button></li>
              <li><button onClick={() => handleServiceClick('riparazione-samsung')} className="hover:text-white transition-colors cursor-pointer">Riparazione Samsung Milano</button></li>
              <li><button onClick={() => handleServiceClick('riparazione-macbook')} className="hover:text-white transition-colors cursor-pointer">Riparazione MacBook Milano</button></li>
              <li><button onClick={() => handleServiceClick('sostituzione-schermo')} className="hover:text-white transition-colors cursor-pointer">Sostituzione Schermo Milano</button></li>
              <li><button onClick={() => handleServiceClick('sostituzione-batteria')} className="hover:text-white transition-colors cursor-pointer">Sostituzione Batteria Milano</button></li>
            </ul>
          </div>

          {/* Links: Sitemap shortcuts */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-white">Mappa del Sito</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors cursor-pointer">{t.navHome}</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-white transition-colors cursor-pointer">{t.navServices}</button></li>
              <li><button onClick={() => setActiveTab('pricing')} className="hover:text-white transition-colors cursor-pointer">{t.navPricing}</button></li>
              <li><button onClick={() => setActiveTab('business')} className="hover:text-white transition-colors cursor-pointer">{t.navBusiness}</button></li>
              <li><button onClick={() => setActiveTab('blog')} className="hover:text-white transition-colors cursor-pointer">{t.navBlog}</button></li>
            </ul>
          </div>

          {/* Links: Legal & policies */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-white">Informazioni Legali</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => setActiveTab('privacy')} className="hover:text-white transition-colors cursor-pointer">{t.footerPrivacy}</button></li>
              <li><button onClick={() => setActiveTab('cookie')} className="hover:text-white transition-colors cursor-pointer">{t.footerCookie}</button></li>
              <li><button onClick={() => setActiveTab('terms')} className="hover:text-white transition-colors cursor-pointer">{t.footerTerms}</button></li>
            </ul>
          </div>

        </div>

        {/* Copywrite rights */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} {t.footerRights}</p>
          <p className="text-[10px] text-zinc-700 max-w-md text-center md:text-right leading-normal">{t.footerLegal}</p>
        </div>
      </footer>

    </div>
  );
}
