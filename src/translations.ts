/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language } from './types';

export const translations: Record<Language, Record<string, string>> = {
  it: {
    // Navigation
    navHome: "Home",
    navServices: "Servizi",
    navBrands: "Marchi",
    navPricing: "Listino",
    navAbout: "Chi Siamo",
    navReviews: "Recensioni",
    navFAQ: "FAQ",
    navBlog: "Blog",
    navContact: "Contatti",
    navBookNow: "Prenota Riparazione",
    navBusiness: "Per Aziende",

    // CTAs & Trust Badges
    ctaBook: "Prenota Ora",
    ctaCall: "Chiama Ora",
    ctaWhatsApp: "WhatsApp",
    ctaQuote: "Preventivo Istantaneo",
    ctaSubmitBooking: "Invia Prenotazione",
    badgeWarranty: "Garanzia 6 Mesi",
    badgeSameDay: "Riparazione in Giornata",
    badgeCertified: "Tecnici Certificati",
    badgeParts: "Ricambi Qualità Originale",
    badgeNoDataLoss: "Sicurezza Dati Garantita",
    badgeLocation: "Milano - Via Padova 84",

    // Emergency Banner
    emergencyBanner: "⚡ Hai fretta? Ripariamo il tuo smartphone in massimo 60 minuti a Milano. Chiama ora!",

    // Hero Section
    heroTitle: "Riparazioni Smartphone ed Elettronica a Milano",
    heroSubtitle: "Rapido. Premium. Affidabile.",
    heroDescription: "Centro riparazioni specializzato a Milano per iPhone, Samsung, Xiaomi, MacBook e altro. Ripristiniamo il tuo dispositivo in giornata con ricambi di massima qualità e 6 mesi di garanzia.",
    heroStat1: "15k+",
    heroStat1Label: "Dispositivi Riparati",
    heroStat2: "Max 60 min",
    heroStat2Label: "Tempo di Riparazione",
    heroStat3: "4.9/5",
    heroStat3Label: "Su Google Reviews",
    heroStat4: "6 Mesi",
    heroStat4Label: "Garanzia Scritta",

    // Before/After Section
    beforeAfterTitle: "Prima & Dopo le Nostre Riparazioni",
    beforeAfterSubtitle: "Guarda l'incredibile qualità del lavoro dei nostri tecnici certificati. Zero compromessi.",
    beforeAfterCompare: "Trascina lo slider per confrontare",

    // Process Section
    processTitle: "Come Funziona",
    processSubtitle: "Il percorso più semplice e veloce per riavere il tuo dispositivo come nuovo",
    processStep1Title: "1. Richiedi un Preventivo",
    processStep1Desc: "Scegli il tuo dispositivo online o contattaci su WhatsApp per ricevere un prezzo trasparente e bloccato.",
    processStep2Title: "2. Consegna il Dispositivo",
    processStep2Desc: "Vieni nel nostro laboratorio a Milano in Via Padova 84 o prenota il ritiro a domicilio Express.",
    processStep3Title: "3. Riparazione Express",
    processStep3Desc: "I nostri tecnici certificati riparano il tuo dispositivo in massimo 60 minuti nella nostra area a vista.",
    processStep4Title: "4. Test e Consegna",
    processStep4Desc: "Sottoponiamo il dispositivo a 32 test di controllo, applichiamo la garanzia di 6 mesi e te lo consegniamo.",

    // Booking Section
    bookingTitle: "Prenota la tua Riparazione in 60 Secondi",
    bookingSubtitle: "Salta la coda. Riserva i ricambi e assicurati la riparazione immediata al tuo arrivo.",
    bookingStep1: "Dispositivo",
    bookingStep2: "Modello",
    bookingStep3: "Riparazione",
    bookingStep4: "Data & Ora",
    bookingStep5: "Contatto",
    bookingSelectDevice: "Seleziona la categoria del dispositivo",
    bookingSelectBrand: "Seleziona il marchio",
    bookingEnterModel: "Inserisci il modello (es. iPhone 15 Pro, Galaxy S24)",
    bookingSelectRepair: "Seleziona il tipo di riparazione",
    bookingDescribeIssue: "Descrivi il problema (opzionale)",
    bookingUploadPhoto: "Carica foto del danno (opzionale)",
    bookingSelectDate: "Scegli una data disponibile",
    bookingSelectTime: "Scegli l'orario preferito",
    bookingContactDetails: "I tuoi dati di contatto",
    bookingSuccess: "Prenotazione Ricevuta!",
    bookingSuccessMsg: "Grazie! La tua prenotazione è stata registrata con successo. Riceverai una conferma via WhatsApp o SMS entro 10 minuti.",

    // Calculator / Quote Section
    calcTitle: "Calcolatore Tariffe Trasparente",
    calcSubtitle: "Nessuna sorpresa. I nostri prezzi includono sempre ricambi di qualità originale e manodopera.",
    calcDevicePlaceholder: "Scegli Dispositivo...",
    calcBrandPlaceholder: "Scegli Marchio...",
    calcModelPlaceholder: "Scegli Modello...",
    calcRepairPlaceholder: "Scegli Riparazione...",
    calcEstimatePrice: "Prezzo Stimato (Tutto Incluso)",
    calcExpressBonus: "⚡ Riparazione Express inclusa (30-60 min)",

    // Partner/Brand Section
    brandsTitle: "Ripariamo Qualsiasi Marchio",
    brandsSubtitle: "Siamo specializzati nei principali produttori mondiali, con ricambi originali o di qualità equivalente.",

    // Services Overview Section
    servicesTitle: "I Nostri Servizi Specializzati",
    servicesSubtitle: "Qualunque sia il problema, abbiamo la soluzione ideale con strumentazione di livello industriale.",

    // SEO / Ads Simulator UI
    simTitle: "Simulatore di Traffico Google Ads",
    simSubtitle: "Guarda come la nostra landing page si adatta istantaneamente alle ricerche degli utenti a Milano per garantire un Quality Score del 10/10 e tassi di conversione strabilianti.",
    simKeywordLabel: "Seleziona la ricerca dell'utente su Google:",
    simStatusLabel: "Stato Pagina Ottimizzata per l'Annuncio:",
    simPerfectMatch: "Corrispondenza Perfetta del Messaggio Attiva",

    // SEO Schema visualizer
    schemaTitle: "Generatore Schema.org SEO Locale per Milano",
    schemaSubtitle: "Ispeziona i microdati strutturati integrati nel codice che permettono a XO Riparazione di dominare i risultati di Google Maps e Google Search.",
    schemaButtonShow: "Visualizza Schema",

    // FAQ Section
    faqTitle: "Domande Frequenti (FAQ)",
    faqSubtitle: "Tutto quello che c'è da sapere sulle nostre riparazioni, garanzie e tempi di attesa",
    faqSearchPlaceholder: "Cerca una domanda...",

    // Reviews
    reviewsTitle: "Cosa Dicono i Nostri Clienti",
    reviewsSubtitle: "Con oltre 1,500 recensioni a 5 stelle, siamo il centro riparazioni più amato di Milano Centro.",
    reviewsVerified: "Recensione verificata da Google Maps",

    // Contact
    contactTitle: "Vieni a Trovarci a Milano",
    contactSubtitle: "Siamo in Via Padova 84, 20131 Milano.",
    contactHoursTitle: "Orari di Apertura",
    contactHoursWeek: "Lunedì - Domenica: 10:00 - 21:00 (Orario Continuato)",
    contactHoursSun: "Aperto tutti i giorni",
    contactPhone: "Telefono:",
    contactEmail: "Email:",
    contactDirections: "Ottieni Indicazioni",

    // Footer
    footerRights: "Tutti i diritti riservati. XO Riparazione Milano.",
    footerLegal: "XO Riparazione è un marchio indipendente. I nomi dei prodotti, i marchi e i loghi appartengono ai rispettivi proprietari.",
    footerPrivacy: "Privacy Policy",
    footerCookie: "Cookie Policy",
    footerTerms: "Termini e Condizioni",
    footerTitle: "XO RIPARAZIONE"
  },
  en: {
    // Navigation
    navHome: "Home",
    navServices: "Services",
    navBrands: "Brands",
    navPricing: "Pricing",
    navAbout: "About Us",
    navReviews: "Reviews",
    navFAQ: "FAQ",
    navBlog: "Blog",
    navContact: "Contact",
    navBookNow: "Book Repair",
    navBusiness: "For Business",

    // CTAs & Trust Badges
    ctaBook: "Book Now",
    ctaCall: "Call Now",
    ctaWhatsApp: "WhatsApp",
    ctaQuote: "Instant Quote",
    ctaSubmitBooking: "Submit Booking",
    badgeWarranty: "6 Months Warranty",
    badgeSameDay: "Same-Day Repair",
    badgeCertified: "Certified Technicians",
    badgeParts: "Original Quality Parts",
    badgeNoDataLoss: "Data Security Guaranteed",
    badgeLocation: "Milan - Via Padova 84",

    // Emergency Banner
    emergencyBanner: "⚡ In a hurry? We repair your smartphone in a maximum of 60 minutes in Milan. Call now!",

    // Hero Section
    heroTitle: "Smartphone and Electronics Repair in Milan",
    heroSubtitle: "Fast. Premium. Reliable.",
    heroDescription: "Specialized repair center in Milan for iPhone, Samsung, Xiaomi, MacBook, and more. We restore your device on the same day with premium quality parts and a 6-month warranty.",
    heroStat1: "15k+",
    heroStat1Label: "Devices Repaired",
    heroStat2: "Max 60 min",
    heroStat2Label: "Repair Time",
    heroStat3: "4.9/5",
    heroStat3Label: "On Google Reviews",
    heroStat4: "6 Mos",
    heroStat4Label: "Written Warranty",

    // Before/After Section
    beforeAfterTitle: "Before & After Our Repairs",
    beforeAfterSubtitle: "See the incredible quality of work by our certified technicians. Zero compromises.",
    beforeAfterCompare: "Drag the slider to compare",

    // Process Section
    processTitle: "How It Works",
    processSubtitle: "The easiest and fastest path to get your device back like new",
    processStep1Title: "1. Request a Quote",
    processStep1Desc: "Choose your device online or contact us on WhatsApp to receive a transparent and locked price.",
    processStep2Title: "2. Hand Over the Device",
    processStep2Desc: "Visit our laboratory in Milan on Via Padova 84 or book an Express home pickup service.",
    processStep3Title: "3. Express Repair",
    processStep3Desc: "Our certified technicians repair your device in maximum 60 minutes in our visible work area.",
    processStep4Title: "4. Test & Handback",
    processStep4Desc: "We subject the device to 32 quality control tests, apply the 6-month warranty, and deliver it to you.",

    // Booking Section
    bookingTitle: "Book Your Repair in 60 Seconds",
    bookingSubtitle: "Skip the queue. Reserve parts and ensure immediate repair upon arrival.",
    bookingStep1: "Device",
    bookingStep2: "Model",
    bookingStep3: "Repair",
    bookingStep4: "Date & Time",
    bookingStep5: "Contact",
    bookingSelectDevice: "Select device category",
    bookingSelectBrand: "Select brand",
    bookingEnterModel: "Enter model (e.g. iPhone 15 Pro, Galaxy S24)",
    bookingSelectRepair: "Select type of repair",
    bookingDescribeIssue: "Describe the issue (optional)",
    bookingUploadPhoto: "Upload damage photo (optional)",
    bookingSelectDate: "Choose an available date",
    bookingSelectTime: "Choose your preferred time",
    bookingContactDetails: "Your contact details",
    bookingSuccess: "Booking Received!",
    bookingSuccessMsg: "Thank you! Your booking has been successfully recorded. You will receive a confirmation via WhatsApp or SMS within 10 minutes.",

    // Calculator / Quote Section
    calcTitle: "Transparent Rates Calculator",
    calcSubtitle: "No surprises. Our prices always include original quality spare parts and labor.",
    calcDevicePlaceholder: "Choose Device...",
    calcBrandPlaceholder: "Choose Brand...",
    calcModelPlaceholder: "Choose Model...",
    calcRepairPlaceholder: "Choose Repair...",
    calcEstimatePrice: "Estimated Price (All Included)",
    calcExpressBonus: "⚡ Express repair included (30-60 min)",

    // Partner/Brand Section
    brandsTitle: "We Repair Any Brand",
    brandsSubtitle: "We specialize in major global manufacturers, using original or equivalent quality spare parts.",

    // Services Overview Section
    servicesTitle: "Our Specialized Services",
    servicesSubtitle: "Whatever the issue, we have the ideal solution using industrial-grade instrumentation.",

    // SEO / Ads Simulator UI
    simTitle: "Google Ads Traffic Simulator",
    simSubtitle: "See how our landing page instantly adapts to user searches in Milan to guarantee a 10/10 Quality Score and jaw-dropping conversion rates.",
    simKeywordLabel: "Select user search query on Google:",
    simStatusLabel: "Ad-Optimized Page Status:",
    simPerfectMatch: "Message Match Active",

    // SEO Schema visualizer
    schemaTitle: "Milan Local SEO Schema.org Generator",
    schemaSubtitle: "Inspect the structured JSON-LD microdata embedded in our code that helps XO Riparazione dominate Google Maps and local search.",
    schemaButtonShow: "View Schema",

    // FAQ Section
    faqTitle: "Frequently Asked Questions (FAQ)",
    faqSubtitle: "Everything you need to know about our repairs, warranty, and turnaround times",
    faqSearchPlaceholder: "Search for a question...",

    // Reviews
    reviewsTitle: "What Our Customers Say",
    reviewsSubtitle: "With over 1,500 5-star reviews, we are the most loved repair center in Milan Center.",
    reviewsVerified: "Verified review from Google Maps",

    // Contact
    contactTitle: "Come Visit Us in Milan",
    contactSubtitle: "We are located at Via Padova 84, 20131 Milan.",
    contactHoursTitle: "Opening Hours",
    contactHoursWeek: "Monday - Sunday: 10:00 a.m. - 9:00 p.m. (No afternoon closure)",
    contactHoursSun: "Open daily",
    contactPhone: "Phone:",
    contactEmail: "Email:",
    contactDirections: "Get Directions",

    // Footer
    footerRights: "All rights reserved. XO Riparazione Milan.",
    footerLegal: "XO Riparazione is an independent brand. Product names, trademarks, and logos belong to their respective owners.",
    footerPrivacy: "Privacy Policy",
    footerCookie: "Cookie Policy",
    footerTerms: "Terms and Conditions",
    footerTitle: "XO REPAIR"
  },
  ar: {
    // Navigation
    navHome: "الرئيسية",
    navServices: "الخدمات",
    navBrands: "العلامات التجارية",
    navPricing: "الأسعار",
    navAbout: "من نحن",
    navReviews: "الآراء",
    navFAQ: "الأسئلة الشائعة",
    navBlog: "المدونة",
    navContact: "اتصل بنا",
    navBookNow: "حجز إصلاح",
    navBusiness: "للشركات",

    // CTAs & Trust Badges
    ctaBook: "احجز الآن",
    ctaCall: "اتصل الآن",
    ctaWhatsApp: "واتساب",
    ctaQuote: "تسعيرة فورية",
    ctaSubmitBooking: "إرسال الطلب",
    badgeWarranty: "ضمان 6 أشهر",
    badgeSameDay: "الإصلاح في نفس اليوم",
    badgeCertified: "فنيون معتمدون",
    badgeParts: "قطع غيار جودة أصلية",
    badgeNoDataLoss: "أمان البيانات مضمون",
    badgeLocation: "ميلانو - شارع بادوفا 84",

    // Emergency Banner
    emergencyBanner: "⚡ على عجل؟ نقوم بإصلاح هاتفك الذكي في 60 دقيقة كحد أقصى في ميلانو. اتصل الآن!",

    // Hero Section
    heroTitle: "إصلاح الهواتف الذكية والأجهزة الإلكترونية في ميلانو",
    heroSubtitle: "سريع. ممتاز. موثوق.",
    heroDescription: "مركز إصلاح متخصص في ميلانو لأجهزة iPhone و Samsung و Xiaomi و MacBook والمزيد. نقوم بإعادة جهازك للعمل في نفس اليوم بقطع غيار عالية الجودة وضمان لمدة 6 أشهر.",
    heroStat1: "+15k",
    heroStat1Label: "جهاز تم إصلاحه",
    heroStat2: "60 دقيقة كحد أقصى",
    heroStat2Label: "وقت الإصلاح",
    heroStat3: "4.9/5",
    heroStat3Label: "على تقييمات جوجل",
    heroStat4: "6 أشهر",
    heroStat4Label: "ضمان مكتوب",

    // Before/After Section
    beforeAfterTitle: "قبل وبعد عمليات الإصلاح",
    beforeAfterSubtitle: "شاهد الجودة المذهلة لعمل فنيينا المعتمدين. لا مساومة على الجودة.",
    beforeAfterCompare: "اسحب الشريط للمقارنة",

    // Process Section
    processTitle: "كيف نعمل",
    processSubtitle: "الطريق الأسهل والأسرع لاستعادة جهازك كأنه جديد",
    processStep1Title: "1. اطلب عرض سعر",
    processStep1Desc: "اختر جهازك عبر الإنترنت أو تواصل معنا عبر واتساب للحصول على سعر شفاف ومضمون.",
    processStep2Title: "2. تسليم الجهاز",
    processStep2Desc: "تفضل بزيارة مختبرنا في ميلانو بشارع بادوفا 84 أو احجز خدمة الاستلام السريع من المنزل.",
    processStep3Title: "3. إصلاح سريع ومباشر",
    processStep3Desc: "يقوم فنيونا المعتمدون بإصلاح جهازك خلال 60 دقيقة كحد أقصى في منطقة العمل المفتوحة أمامك.",
    processStep4Title: "4. الفحص والتسليم",
    processStep4Desc: "نخضع الجهاز لـ 32 اختبار جودة، ونفعل ضمان الـ 6 أشهر ونسلمك إياه.",

    // Booking Section
    bookingTitle: "احجز إصلاح جهازك في 60 ثانية",
    bookingSubtitle: "تجنب الانتظار. احجز قطع الغيار لضمان الإصلاح الفوري فور وصولك.",
    bookingStep1: "الجهاز",
    bookingStep2: "الموديل",
    bookingStep3: "الإصلاح",
    bookingStep4: "التاريخ والوقت",
    bookingStep5: "الاتصال",
    bookingSelectDevice: "اختر فئة الجهاز",
    bookingSelectBrand: "اختر العلامة التجارية",
    bookingEnterModel: "أدخل الموديل (مثال: iPhone 15 Pro, Galaxy S24)",
    bookingSelectRepair: "اختر نوع الإصلاح",
    bookingDescribeIssue: "صف المشكلة (اختياري)",
    bookingUploadPhoto: "أرفق صورة للعطل (اختياري)",
    bookingSelectDate: "اختر تاريخاً متاحاً",
    bookingSelectTime: "اختر الوقت المفضل",
    bookingContactDetails: "بيانات الاتصال الخاصة بك",
    bookingSuccess: "تم استلام طلب الحجز!",
    bookingSuccessMsg: "شكراً لك! تم تسجيل حجزك بنجاح. ستتلقى تأكيداً عبر واتساب أو رسالة نصية قصيرة خلال 10 دقائق.",

    // Calculator / Quote Section
    calcTitle: "حاسبة الأسعار الشفافة",
    calcSubtitle: "بدون مفاجآت. تشمل أسعارنا دائماً قطع الغيار عالية الجودة وأجور العمل.",
    calcDevicePlaceholder: "اختر الجهاز...",
    calcBrandPlaceholder: "اختر العلامة التجارية...",
    calcModelPlaceholder: "اختر الموديل...",
    calcRepairPlaceholder: "اختر نوع الإصلاح...",
    calcEstimatePrice: "السعر التقديري (شامل كل شيء)",
    calcExpressBonus: "⚡ تشمل ميزة الإصلاح السريع (30-60 دقيقة)",

    // Partner/Brand Section
    brandsTitle: "نصلح جميع العلامات التجارية",
    brandsSubtitle: "متخصصون في الأجهزة من كبرى الشركات العالمية باستخدام قطع غيار أصلية أو بجودة مماثلة.",

    // Services Overview Section
    servicesTitle: "خدماتنا المتخصصة",
    servicesSubtitle: "مهما كانت المشكلة، لدينا الحل الأمثل باستخدام معدات وأجهزة متطورة على مستوى صناعي.",

    // SEO / Ads Simulator UI
    simTitle: "محاكي زيارات إعلانات جوجل (Google Ads)",
    simSubtitle: "شاهد كيف تتكيف صفحة الهبوط فورياً مع عمليات بحث المستخدمين في ميلانو لضمان نقاط جودة (Quality Score) كاملة 10/10 ومعدلات تحويل مذهلة.",
    simKeywordLabel: "اختر عبارة البحث للمستخدم على جوجل:",
    simStatusLabel: "حالة الصفحة المحسنة للإعلان:",
    simPerfectMatch: "تطابق الرسالة الإعلانية نشط ومثالي",

    // SEO Schema visualizer
    schemaTitle: "مولد مخطط Schema.org لتحسين محركات البحث المحلية لميلانو",
    schemaSubtitle: "افحص البيانات المنظمة JSON-LD المدمجة في الكود والتي تضمن لـ XO Riparazione تصدر نتائج خرائط جوجل وبحث جوجل.",
    schemaButtonShow: "عرض المخطط",

    // FAQ Section
    faqTitle: "الأسئلة الشائعة",
    faqSubtitle: "كل ما تحتاج لمعرفته حول خدمات الإصلاح والضمان وأوقات الانتظار لدينا",
    faqSearchPlaceholder: "ابحث عن سؤال...",

    // Reviews
    reviewsTitle: "ماذا يقول عملاؤنا",
    reviewsSubtitle: "مع أكثر من 1500 تقييم 5 نجوم، نحن مركز الإصلاح الأكثر شعبية وتفضيلاً في وسط ميلانو.",
    reviewsVerified: "تقييم موثق من خرائط جوجل",

    // Contact
    contactTitle: "تفضل بزيارتنا في ميلانو",
    contactSubtitle: "نحن في شارع بادوفا 84، 20131 ميلانو.",
    contactHoursTitle: "أوقات العمل",
    contactHoursWeek: "الاثنين - الأحد: 10:00 صباحاً - 9:00 مساءً (عمل متواصل دون توقف)",
    contactHoursSun: "مفتوح يومياً",
    contactPhone: "الهاتف:",
    contactEmail: "البريد الإلكتروني:",
    contactDirections: "الحصول على الاتجاهات",

    // Footer
    footerRights: "جميع الحقوق محفوظة. XO لإصلاح الأجهزة في ميلانو.",
    footerLegal: "XO لإصلاح الأجهزة هي علامة مستقلة. جميع أسماء المنتجات والشعارات هي ملك لأصحابها المعنيين.",
    footerPrivacy: "سياسة الخصوصية",
    footerCookie: "سياسة ملفات الارتباط",
    footerTerms: "الشروط والأحكام",
    footerTitle: "XO للإصلاح"
  }
};
