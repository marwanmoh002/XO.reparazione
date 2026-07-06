/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceDetail } from '../types';

export const servicesData: ServiceDetail[] = [
  // --- Smartphones ---
  {
    id: "iphone-repair",
    slug: "riparazione-iphone",
    name: "Riparazione iPhone",
    category: "smartphone",
    brand: "Apple",
    iconName: "Smartphone",
    priceStart: 39,
    deliveryTime: "20-40 min",
    shortDesc: {
      it: "Servizio di riparazione espresso per tutti i modelli di iPhone con garanzia 6 mesi.",
      en: "Express repair service for all iPhone models with 6 months warranty.",
      ar: "خدمة إصلاح سريعة لجميع موديلات الآيفون مع ضمان لمدة 6 أشهر."
    },
    longDesc: {
      it: "Offriamo un servizio di riparazione completo ed ultra-veloce per qualsiasi modello di iPhone. Dalla sostituzione dello schermo alla batteria, fotocamera e riparazioni complesse sulla scheda madre. Utilizziamo solo strumentazione professionale certificata.",
      en: "We offer a complete and ultra-fast repair service for any iPhone model. From screen replacement to battery, camera, and complex logic board repairs. We use only professional certified instrumentation.",
      ar: "نقدم خدمة إصلاح شاملة وفائقة السرعة لأي موديل آيفون. من استبدال الشاشة إلى البطارية والكاميرا وإصلاحات لوحة الأم المعقدة. نستخدم فقط معدات احترافية معتمدة."
    },
    commonIssues: {
      it: ["Schermo rotto o rigato", "Batteria degradata", "Vetro posteriore crepato", "Problema ricarica", "Face ID non funzionante"],
      en: ["Broken or scratched screen", "Degraded battery", "Cracked back glass", "Charging issues", "Face ID not working"],
      ar: ["شاشة مكسورة أو مخدوشة", "بطارية ضعيفة", "زجاج خلفي مكسور", "مشاكل الشحن", "عطل في معرف الوجه Face ID"]
    },
    seoKeyword: "riparazione iphone milano"
  },
  {
    id: "samsung-repair",
    slug: "riparazione-samsung",
    name: "Riparazione Samsung",
    category: "smartphone",
    brand: "Samsung",
    iconName: "Smartphone",
    priceStart: 45,
    deliveryTime: "30-60 min",
    shortDesc: {
      it: "Riparazioni certificate Samsung Galaxy Serie S, A, Note, Z Fold e Z Flip.",
      en: "Certified repairs for Samsung Galaxy S, A, Note, Z Fold, and Z Flip Series.",
      ar: "إصلاحات معتمدة لسلسلة سامسونج جالاكسي S و A و Note و Z Fold و Z Flip."
    },
    longDesc: {
      it: "Siamo specializzati nella riparazione di smartphone Samsung Galaxy. Utilizziamo schermi originali AMOLED e batterie originali certificate per assicurare la perfetta calibrazione del touch screen e l'impermeabilità del dispositivo.",
      en: "We specialize in Samsung Galaxy smartphone repairs. We use original AMOLED screens and certified original batteries to ensure perfect touch screen calibration and device water resistance.",
      ar: "نحن متخصصون في إصلاح هواتف سامسونج جالاكسي. نستخدم شاشات AMOLED أصلية وبطاريات معتمدة لضمان معايرة دقيقة للمس ومقاومة الجهاز للماء."
    },
    commonIssues: {
      it: ["Schermo AMOLED spento o righe verdi", "Batteria gonfia", "Porta USB-C ossidata", "Cover posteriore scolata"],
      en: ["AMOLED black screen or green lines", "Swollen battery", "Oxidized USB-C port", "Loose back cover"],
      ar: ["شاشة أموليد سوداء أو خطوط خضراء", "بطارية منتفخة", "منفذ USB-C تالف", "غطاء خلفي مفكك"]
    },
    seoKeyword: "riparazione samsung milano"
  },
  {
    id: "xiaomi-repair",
    slug: "riparazione-xiaomi",
    name: "Riparazione Xiaomi",
    category: "smartphone",
    brand: "Xiaomi",
    iconName: "Smartphone",
    priceStart: 39,
    deliveryTime: "30-60 min",
    shortDesc: {
      it: "Riparazioni veloci ed economiche per smartphone Xiaomi, Redmi e POCO.",
      en: "Fast and affordable repairs for Xiaomi, Redmi, and POCO smartphones.",
      ar: "إصلاحات سريعة وبأسعار معقولة لهواتف شاومي، ريدمي، وبوكو."
    },
    longDesc: {
      it: "Il tuo Xiaomi ha lo schermo rotto o problemi di ricarica? Ripariamo tutti i modelli Xiaomi, Redmi e POCO con ricambi di altissima qualità, ripristinando le funzionalità di fabbrica in pochissimo tempo.",
      en: "Is your Xiaomi screen broken or suffering charging issues? We repair all Xiaomi, Redmi, and POCO models with top-quality parts, restoring factory functions in no time.",
      ar: "هل شاشة شاومي مكسورة أو يعاني من مشاكل شحن؟ نصلح جميع موديلات شاومي وريدمي وبوكو بقطع غيار عالية الجودة ونعيد تشغيله فوراً."
    },
    commonIssues: {
      it: ["Schermo LCD o OLED rotto", "Ricarica lenta", "Tasto accensione bloccato", "Problemi sensore di prossimità"],
      en: ["Broken LCD or OLED screen", "Slow charging", "Stuck power button", "Proximity sensor issues"],
      ar: ["شاشة LCD أو OLED مكسورة", "شحن بطيء", "زر طاقة معلق", "مشاكل مستشعر التقارب"]
    },
    seoKeyword: "riparazione xiaomi milano"
  },
  {
    id: "huawei-repair",
    slug: "riparazione-huawei",
    name: "Riparazione Huawei",
    category: "smartphone",
    brand: "Huawei",
    iconName: "Smartphone",
    priceStart: 39,
    deliveryTime: "30-60 min",
    shortDesc: {
      it: "Assistenza tecnica per smartphone Huawei serie P, Mate e Nova.",
      en: "Technical support for Huawei P, Mate, and Nova series smartphones.",
      ar: "دعم فني لهواتف هواوي من سلسلة P و Mate و Nova."
    },
    longDesc: {
      it: "Nonostante i modelli più recenti, offriamo ancora ricambi eccellenti e riparazioni immediate per tutti i telefoni Huawei. Schermi, batterie e connettori riparati in giornata.",
      en: "Regardless of the model release year, we offer premium spare parts and immediate repairs for all Huawei phones. Screens, batteries, and connectors repaired on the same day.",
      ar: "على الرغم من تاريخ إصدار الموديلات، فإننا نوفر قطع غيار ممتازة وإصلاحات فورية لجميع هواتف هواوي. شاشات وبطاريات وموصلات يتم إصلاحها في نفس اليوم."
    },
    commonIssues: {
      it: ["Schermo rotto", "Batteria esaurita", "Fotocamera Leica sfocata", "Vetro posteriore danneggiato"],
      en: ["Broken screen", "Depleted battery", "Leica camera out of focus", "Damaged back glass"],
      ar: ["شاشة مكسورة", "بطارية تالفة", "كاميرا لايكا غير واضحة", "زجاج خلفي مكسور"]
    },
    seoKeyword: "riparazione huawei milano"
  },
  {
    id: "oppo-repair",
    slug: "riparazione-oppo",
    name: "Riparazione Oppo",
    category: "smartphone",
    brand: "Oppo",
    iconName: "Smartphone",
    priceStart: 45,
    deliveryTime: "45-60 min",
    shortDesc: {
      it: "Riparazioni professionali per telefoni Oppo Find, Reno e serie A.",
      en: "Professional repairs for Oppo Find, Reno, and A-series phones.",
      ar: "إصلاحات احترافية لهواتف أوبو من طراز Find و Reno وسلسلة A."
    },
    longDesc: {
      it: "Riparazione rapida Oppo a Milano. Risolviamo problemi allo schermo, batteria e fotocamere pop-up con la massima cura e ricambi certificati.",
      en: "Fast Oppo repair in Milan. We resolve screen, battery, and pop-up camera issues with maximum care and certified components.",
      ar: "إصلاح أوبو سريع في ميلانو. نحل مشاكل الشاشة والبطارية والكاميرات المنبثقة بأقصى درجات العناية وقطع غيار معتمدة."
    },
    commonIssues: {
      it: ["Schermo nero", "Batteria che si scarica velocemente", "Meccanismo fotocamera bloccato", "Vetro fotocamera graffiato"],
      en: ["Black screen", "Battery draining fast", "Stuck camera mechanism", "Scratched camera glass"],
      ar: ["شاشة سوداء", "نفاد سريع للبطارية", "آلية الكاميرا معلقة", "زجاج الكاميرا مخدوش"]
    },
    seoKeyword: "riparazione oppo milano"
  },
  {
    id: "pixel-repair",
    slug: "riparazione-google-pixel",
    name: "Riparazione Google Pixel",
    category: "smartphone",
    brand: "Google",
    iconName: "Smartphone",
    priceStart: 49,
    deliveryTime: "45-60 min",
    shortDesc: {
      it: "Risoluzione guasti hardware e software per dispositivi Google Pixel.",
      en: "Hardware and software troubleshooting for Google Pixel devices.",
      ar: "حل مشاكل العتاد والبرمجيات لأجهزة جوجل بكسل."
    },
    longDesc: {
      it: "I dispositivi Google Pixel richiedono precisione unica. I nostri tecnici sono addestrati specificamente per gestire l'apertura e la riparazione di schermi OLED e componenti interni dei Pixel.",
      en: "Google Pixel devices require unique precision. Our technicians are specifically trained to handle OLED screen replacements and internal component repairs on Pixel phones.",
      ar: "تتطلب أجهزة جوجل بكسل دقة فريدة. فنيونا مدربون خصيصاً للتعامل مع فتح وإصلاح شاشات OLED والمكونات الداخلية لهواتف بكسل."
    },
    commonIssues: {
      it: ["Schermo OLED difettoso", "Vetro fotocamera posteriore rotto", "Connettore di ricarica", "Aggiornamenti software bloccati"],
      en: ["Defective OLED screen", "Broken rear camera glass", "Charging port replacement", "Stuck software updates"],
      ar: ["شاشة OLED معطلة", "زجاج الكاميرا الخلفية مكسور", "منفذ الشحن", "تحديثات النظام معلقة"]
    },
    seoKeyword: "riparazione google pixel milano"
  },
  {
    id: "motorola-repair",
    slug: "riparazione-motorola",
    name: "Riparazione Motorola",
    category: "smartphone",
    brand: "Motorola",
    iconName: "Smartphone",
    priceStart: 39,
    deliveryTime: "45-60 min",
    shortDesc: {
      it: "Riparazione schermi e batterie per serie Moto G, Edge e Razr.",
      en: "Screen and battery repairs for Moto G, Edge, and Razr series.",
      ar: "إصلاح شاشات وبطاريات لسلسلة موتو G و Edge و Razr."
    },
    longDesc: {
      it: "Sostituiamo vetri e display curvi o pieghevoli per i più recenti modelli Motorola Edge e Razr, garantendo un ripristino estetico e funzionale impeccabile.",
      en: "We replace curved or folding glass and displays for the latest Motorola Edge and Razr models, ensuring an impeccable aesthetic and functional restoration.",
      ar: "نقوم باستبدال الشاشات المنحنية أو القابلة للطي لأحدث موديلات موتورولا Edge و Razr لضمان استعادة المظهر والأداء بشكل مثالي."
    },
    commonIssues: {
      it: ["Display pieghevole rigato", "Vetro anteriore in frantumi", "Batteria che non tiene la carica"],
      en: ["Scratched folding display", "Shattered front glass", "Battery not holding charge"],
      ar: ["شاشة قابلة للطي مخدوشة", "شاشة أمامية محطمة", "البطارية لا تحتفظ بالشحن"]
    },
    seoKeyword: "riparazione motorola milano"
  },

  // --- Tablets ---
  {
    id: "tablet-repair",
    slug: "riparazione-tablet",
    name: "Riparazione Tablet",
    category: "tablet",
    iconName: "Tablet",
    priceStart: 49,
    deliveryTime: "24 ore",
    shortDesc: {
      it: "Servizio di riparazione per tablet Android di qualsiasi marca (Samsung, Lenovo, Huawei).",
      en: "Repair service for Android tablets of any brand (Samsung, Lenovo, Huawei).",
      ar: "خدمة إصلاح لأجهزة التابلت التي تعمل بنظام أندرويد من أي علامة تجارية (سامسونج، لينوفو، هواوي)."
    },
    longDesc: {
      it: "Hai un tablet lento, rigato o che non si accende? Risolviamo problemi su tutti i modelli di tablet Android con tempi rapidi e preventivi trasparenti.",
      en: "Is your tablet slow, scratched, or not turning on? We solve issues on all Android tablet models with fast turnarounds and transparent quotes.",
      ar: "هل جهازك اللوحي بطيء، مخدوش، أو لا يعمل؟ نحل المشاكل في جميع موديلات التابلت بنظام أندرويد بسرعة وبأسعار شفافة."
    },
    commonIssues: {
      it: ["Vetro touch rotto", "Display LCD nero o macchiato", "Batteria esausta", "Porta micro-USB / USB-C dissaldata"],
      en: ["Broken touch glass", "Black or stained LCD display", "Exhausted battery", "Damaged micro-USB / USB-C port"],
      ar: ["زجاج لمس مكسور", "شاشة LCD سوداء أو مبقعة", "بطارية ضعيفة", "منفذ شحن تالف أو مفكك"]
    },
    seoKeyword: "riparazione tablet milano"
  },
  {
    id: "ipad-repair",
    slug: "riparazione-ipad",
    name: "Riparazione iPad",
    category: "tablet",
    brand: "Apple",
    iconName: "Tablet",
    priceStart: 59,
    deliveryTime: "24 ore",
    shortDesc: {
      it: "Sostituzione vetro e display per iPad, iPad Air, iPad Mini e iPad Pro.",
      en: "Glass and display replacement for iPad, iPad Air, iPad Mini, and iPad Pro.",
      ar: "استبدال الزجاج والشاشة لأجهزة iPad و iPad Air و iPad Mini و iPad Pro."
    },
    longDesc: {
      it: "Riparazioni professionali di iPad a Milano. Sostituiamo il solo vetro (nei modelli che lo consentono) o l'intero blocco schermo per iPad Pro, mantenendo la compatibilità con Apple Pencil e la calibrazione originale dei colori.",
      en: "Professional iPad repairs in Milan. We replace only the glass (on models that support it) or the complete display assembly on iPad Pro, maintaining full Apple Pencil compatibility and original color calibration.",
      ar: "إصلاحات آيباد احترافية في ميلانو. نقوم باستبدال الزجاج فقط (في الموديلات التي تدعم ذلك) أو الشاشة بالكامل لأجهزة آيباد برو مع الحفاظ على توافق قلم آبل ومعايرة الألوان الأصلية."
    },
    commonIssues: {
      it: ["Vetro crepato", "Touch screen che impazzisce", "Jack cuffie rotto all'interno", "Scocca deformata"],
      en: ["Cracked glass", "Erratic touch screen response", "Broken headphone jack inside port", "Bent chassis"],
      ar: ["زجاج مكسور", "استجابة عشوائية للمس", "منفذ سماعات مكسور بالداخل", "جسم جهاز منحنٍ"]
    },
    seoKeyword: "riparazione ipad milano"
  },

  // --- Computers ---
  {
    id: "macbook-repair",
    slug: "riparazione-macbook",
    name: "Riparazione MacBook",
    category: "computer",
    brand: "Apple",
    iconName: "Laptop",
    priceStart: 89,
    deliveryTime: "24-48 ore",
    shortDesc: {
      it: "Assistenza hardware e software per MacBook Air, Pro, iMac e Mac Mini.",
      en: "Hardware and software support for MacBook Air, Pro, iMac, and Mac Mini.",
      ar: "دعم برامجي وعتادي لأجهزة MacBook Air و Pro و iMac و Mac Mini."
    },
    longDesc: {
      it: "Riparazioni hardware avanzate per Mac. Eseguiamo rigenerazione tastiere, riparazioni della scheda madre a livello di micro-componenti (chip-level) risparmiando fino al 60% rispetto alla sostituzione ufficiale, e sostituzione schermi retina.",
      en: "Advanced hardware repairs for Macs. We perform keyboard refurbishments, micro-component logic board repairs (saving up to 60% compared to official replacement), and retina screen replacements.",
      ar: "إصلاحات متقدمة لأجهزة ماك. نقوم بتجديد لوحة المفاتيح، وإصلاح اللوحة الأم على مستوى المكونات الدقيقة (توفير حتى 60% مقارنة بالاستبدال الرسمي)، واستبدال شاشات ريتنا."
    },
    commonIssues: {
      it: ["Liquido versato sulla tastiera", "MacBook non si accende", "Schermo retina rigato o rotto", "Batteria 'Sostituire Presto'"],
      en: ["Spilled liquid on keyboard", "MacBook not turning on", "Scratched or broken retina screen", "Battery status 'Replace Soon'"],
      ar: ["سائل مسكوب على لوحة المفاتيح", "الماك لا يعمل", "شاشة ريتنا مكسورة أو مخدوشة", "حالة البطارية بحاجة للاستبدال"]
    },
    seoKeyword: "riparazione macbook milano"
  },
  {
    id: "laptop-repair",
    slug: "riparazione-laptop",
    name: "Riparazione Laptop / PC",
    category: "computer",
    iconName: "Laptop",
    priceStart: 69,
    deliveryTime: "24-48 ore",
    shortDesc: {
      it: "Riparazione e potenziamento computer portatili Asus, HP, Dell, Lenovo, Acer.",
      en: "Repair and upgrades for Asus, HP, Dell, Lenovo, and Acer laptops.",
      ar: "إصلاح وترقية أجهزة لابتوب أسوس، إتش بي، ديل، لينوفو، وآيسر."
    },
    longDesc: {
      it: "Assistenza professionale PC portatili e fissi. Sostituzione hard disk con SSD ultra-veloci (velocizza il PC fino a 10 volte!), pulizia interna polvere con cambio pasta termica, e rimozione virus/ripristino Windows.",
      en: "Professional laptop and desktop support. Hard drive upgrade to ultra-fast SSDs (speeds up the PC up to 10x!), internal dust cleaning with thermal paste replacement, virus removal, and Windows restoration.",
      ar: "دعم احترافي لأجهزة الكمبيوتر واللابتوب. ترقية القرص الصلب إلى SSD فائق السرعة (تسريع الجهاز حتى 10 مرات!)، تنظيف الغبار الداخلي وتغيير المعجون الحراري، إزالة الفيروسات وإعادة تثبيت ويندوز."
    },
    commonIssues: {
      it: ["Computer lento o si blocca", "Ventole rumorose / riscaldamento", "Schermo rotto", "Cerniere dello schermo spezzate"],
      en: ["Computer slow or freezing", "Noisy fans / overheating", "Broken screen", "Shattered screen hinges"],
      ar: ["الكمبيوتر بطيء أو يعلق", "مراوح صاخبة / ارتفاع الحرارة", "شاشة مكسورة", "مفصلات الشاشة مكسورة"]
    },
    seoKeyword: "riparazione laptop milano"
  },

  // --- Wearables ---
  {
    id: "apple-watch-repair",
    slug: "riparazione-apple-watch",
    name: "Riparazione Apple Watch",
    category: "wearable",
    brand: "Apple",
    iconName: "Watch",
    priceStart: 49,
    deliveryTime: "24 ore",
    shortDesc: {
      it: "Sostituzione vetro e batteria per tutti i modelli di Apple Watch.",
      en: "Glass and battery replacement for all Apple Watch models.",
      ar: "استبدال الزجاج والبطارية لجميع موديلات ساعة آبل."
    },
    longDesc: {
      it: "Riparazione qualificata Apple Watch a Milano. Utilizziamo guarnizioni adesive speciali resistenti all'acqua per sigillare il display dopo la sostituzione, mantenendo la sicurezza del dispositivo.",
      en: "Qualified Apple Watch repair in Milan. We use special water-resistant adhesive seals to close the display after replacement, keeping the device secure and protected.",
      ar: "إصلاح ساعة آبل معتمد في ميلانو. نستخدم مواد لاصقة خاصة مقاومة للماء لإغلاق الشاشة بعد الاستبدال للحفاظ على سلامة وحماية الجهاز."
    },
    commonIssues: {
      it: ["Vetro dello schermo scollato o rotto", "Batteria gonfia che solleva lo schermo", "Sensore cardio graffiato"],
      en: ["Loose or broken display glass", "Swollen battery lifting screen", "Scratched heart rate sensor"],
      ar: ["زجاج الشاشة مفكك أو مكسور", "بطارية منتفخة ترفع الشاشة", "مستشعر ضربات القلب مخدوش"]
    },
    seoKeyword: "riparazione apple watch milano"
  },
  {
    id: "smartwatch-repair",
    slug: "riparazione-smartwatch",
    name: "Riparazione Smartwatch",
    category: "wearable",
    iconName: "Watch",
    priceStart: 45,
    deliveryTime: "24-48 ore",
    shortDesc: {
      it: "Assistenza tecnica per smartwatch Samsung Galaxy Watch, Huawei e Garmin.",
      en: "Technical assistance for Samsung Galaxy Watch, Huawei, and Garmin smartwatches.",
      ar: "دعم فني لساعات سامسونج الذكية، هواوي، وجارمن."
    },
    longDesc: {
      it: "Il tuo smartwatch ha smesso di rispondere ai comandi o dura poche ore? Sostituiamo schermi, batterie e tasti fisici su orologi sportivi e smartwatch di tutte le marche.",
      en: "Did your smartwatch stop responding or last only a few hours? We replace screens, batteries, and physical buttons on sport watches and smartwatches of all brands.",
      ar: "هل توقفت ساعتك عن الاستجابة أو تدوم بضع ساعات فقط؟ نستبدل الشاشات والبطاريات والأزرار في الساعات الرياضية والذكية من جميع الماركات."
    },
    commonIssues: {
      it: ["Display che non mostra immagini", "Batteria che dura meno di un giorno", "Tasti bloccati da sudore o sporco"],
      en: ["Blank screen display", "Battery lasting less than a day", "Buttons stuck from sweat or dirt"],
      ar: ["شاشة لا تعرض شيئاً", "البطارية تدوم أقل من يوم", "أزرار معلقة بسبب العرق أو الأوساخ"]
    },
    seoKeyword: "riparazione smartwatch milano"
  },

  // --- Gaming ---
  {
    id: "nintendo-switch-repair",
    slug: "riparazione-nintendo-switch",
    name: "Riparazione Nintendo Switch",
    category: "gaming",
    brand: "Nintendo",
    iconName: "Gamepad2",
    priceStart: 39,
    deliveryTime: "24 ore",
    shortDesc: {
      it: "Risoluzione drift Joy-Con, connettore USB-C e schermo per Nintendo Switch.",
      en: "Joy-Con drift fix, USB-C connector, and screen repair for Nintendo Switch.",
      ar: "إصلاح انحراف يد التحكم (Joy-Con drift)، منفذ USB-C، وشاشة نينتندو سويتش."
    },
    longDesc: {
      it: "Riparazioni veloci per Nintendo Switch (modello standard, Lite e OLED). Sostituiamo gli analogici Joy-Con in 15 minuti, ripariamo il connettore USB-C di ricarica e risolviamo i cortocircuiti del chip video.",
      en: "Fast repairs for Nintendo Switch (standard, Lite, and OLED models). We replace Joy-Con analog sticks in 15 minutes, repair the USB-C charging connector, and fix video chip short circuits.",
      ar: "إصلاحات سريعة لجهاز نينتندو سويتش (الموديل العادي، لايت، وأوليد). نستبدل عصا التحكم في 15 دقيقة، ونصلح منفذ شحن USB-C، وأعطال شريحة الفيديو."
    },
    commonIssues: {
      it: ["Analogici Joy-Con che si muovono da soli (Drift)", "Console non si ricarica / non si collega alla TV", "Schermo touch rigato", "Lettore cartucce giochi difettoso"],
      en: ["Joy-Con analog drift", "Console not charging / not connecting to TV", "Scratched touch screen", "Defective game card reader"],
      ar: ["انحراف عصا التحكم Joy-Con", "الجهاز لا يشحن / لا يتصل بالتلفزيون", "شاشة لمس مخدوشة", "قارئ ألعاب تالف"]
    },
    seoKeyword: "riparazione nintendo switch milano"
  },
  {
    id: "playstation-repair",
    slug: "riparazione-playstation",
    name: "Riparazione PlayStation",
    category: "gaming",
    brand: "Sony",
    iconName: "Gamepad2",
    priceStart: 49,
    deliveryTime: "24-48 ore",
    shortDesc: {
      it: "Assistenza tecnica PlayStation 4 e PlayStation 5: pulizia, HDMI, e lettori.",
      en: "Technical support for PlayStation 4 and PlayStation 5: cleaning, HDMI, and optical drives.",
      ar: "دعم فني لأجهزة بلايستيشن 4 وبلايستيشن 5: تنظيف، منفذ HDMI، والقارئ."
    },
    longDesc: {
      it: "La tua PS5 scalda e si spegne improvvisamente o ha la porta HDMI distrutta? Offriamo sostituzione della porta HDMI con microsaldatura, sostituzione del metallo liquido e pulizia professionale completa per eliminare i rumori.",
      en: "Is your PS5 overheating and shutting down, or is the HDMI port broken? We offer HDMI port replacement via micro-soldering, liquid metal thermal paste replacement, and full professional cleaning to eliminate fan noise.",
      ar: "هل جهاز PS5 يسخن وينطفئ فجأة أو منفذ HDMI تالف؟ نقدم استبدال منفذ HDMI باللحام الدقيق، واستبدال المعجون المعدني السائل، وتنظيفاً احترافياً كاملاً لإزالة الضوضاء."
    },
    commonIssues: {
      it: ["Porta HDMI rotta o senza segnale video", "Console rumorosa (surriscaldamento)", "Lettore Blu-Ray non trascina i dischi", "Errore spegnimento improvviso"],
      en: ["Broken HDMI port / no video signal", "Noisy console (overheating)", "Blu-Ray drive not feeding discs", "Sudden shutdown error"],
      ar: ["منفذ HDMI مكسور / لا توجد إشارة", "صوت مروحة مرتفع (حرارة زائدة)", "القارئ لا يسحب الأقراص", "انطفاء مفاجئ للجهاز"]
    },
    seoKeyword: "riparazione playstation milano"
  },
  {
    id: "xbox-repair",
    slug: "riparazione-xbox",
    name: "Riparazione Xbox",
    category: "gaming",
    brand: "Microsoft",
    iconName: "Gamepad2",
    priceStart: 49,
    deliveryTime: "24-48 ore",
    shortDesc: {
      it: "Assistenza Xbox Series X, Series S e One. Sostituzione HDMI, alimentatore e ventole.",
      en: "Xbox Series X, Series S, and One support. HDMI replacement, power supply, and fans.",
      ar: "دعم فني لجهاز Xbox Series X و Series S و One. استبدال HDMI ومزود الطاقة والمراوح."
    },
    longDesc: {
      it: "Riparazione Xbox rapida ed affidabile a Milano. Risolviamo guasti all'accensione, problemi all'alimentatore interno, errori del disco fisso ed eseguiamo microsaldature sulla porta HDMI.",
      en: "Fast and reliable Xbox repairs in Milan. We resolve boot failures, internal power supply issues, hard drive errors, and perform precision micro-soldering on the HDMI port.",
      ar: "إصلاح إكس بوكس سريع وموثوق في ميلانو. نحل مشاكل التشغيل، ومزود الطاقة الداخلي، وأعطال القرص الصلب، ونقوم باللحام الدقيق لمنفذ HDMI."
    },
    commonIssues: {
      it: ["Nessun segnale sulla TV (HDMI rotto)", "Console non si accende", "Aggiornamento di sistema fallito", "Ventola rumorosa"],
      en: ["No signal on TV (broken HDMI)", "Console not turning on", "System update failed", "Loud fan"],
      ar: ["لا توجد إشارة على التلفزيون (منفذ HDMI مكسور)", "الجهاز لا يعمل", "فشل تحديث النظام", "مروحة صاخبة"]
    },
    seoKeyword: "riparazione xbox milano"
  },

  // --- Common Issues & Specific Repairs ---
  {
    id: "battery-replacement",
    slug: "sostituzione-batteria",
    name: "Sostituzione Batteria",
    category: "common",
    iconName: "Battery",
    priceStart: 29,
    deliveryTime: "15-30 min",
    shortDesc: {
      it: "Sostituzione batteria istantanea per smartphone e tablet di qualsiasi marca.",
      en: "Instant battery replacement for smartphones and tablets of any brand.",
      ar: "استبدال فوري للبطارية للهواتف الذكية والأجهزة اللوحية من أي علامة تجارية."
    },
    longDesc: {
      it: "Se la batteria del tuo telefono si scarica rapidamente, si spegne al 20% o è gonfia, è il momento di sostituirla. Operazione eseguita in 15 minuti con rilascio di certificazione di sicurezza.",
      en: "If your phone battery drains fast, shuts down at 20%, or is swollen, it's time to replace it. Done in 15 minutes with complete safety certification.",
      ar: "إذا كانت بطارية هاتفك تنفد بسرعة، أو ينطفئ عند 20%، أو منتفخة، فقد حان الوقت لاستبدالها. تتم العملية في 15 دقيقة مع شهادة أمان."
    },
    commonIssues: {
      it: ["Autonomia molto ridotta", "Telefono si spegne all'improvviso", "Retro del telefono sollevato", "Ricarica estremamente lenta"],
      en: ["Very short battery life", "Phone shuts down suddenly", "Lifted phone back cover", "Extremely slow charging"],
      ar: ["عمر بطارية قصير جداً", "ينطفئ الهاتف فجأة", "ارتفاع الغطاء الخلفي للهاتف", "شحن بطيء للغاية"]
    },
    seoKeyword: "sostituzione batteria iphone milano"
  },
  {
    id: "screen-replacement",
    slug: "sostituzione-schermo",
    name: "Sostituzione Schermo / Vetro",
    category: "common",
    iconName: "Smartphone",
    priceStart: 39,
    deliveryTime: "20-40 min",
    shortDesc: {
      it: "Sostituzione vetro o schermo intero LCD/OLED rotto o rigato.",
      en: "Replacement of broken or scratched glass or complete LCD/OLED screen.",
      ar: "استبدال الزجاج المكسور أو الشاشة بالكامل LCD/OLED التالفة أو المخدوشة."
    },
    longDesc: {
      it: "Sostituiamo schermi scheggiati o completamente distrutti. Utilizziamo adesivi impermeabilizzanti originali per sigillare il telefono e preservare il touch feedback ad alta sensibilità.",
      en: "We replace chipped or completely shattered screens. We use original waterproof adhesives to seal the phone and preserve highly sensitive touch response.",
      ar: "نستبدل الشاشات المكسورة أو المحطمة بالكامل. نستخدم مواد لاصقة أصلية مقاومة للماء لإغلاق الهاتف والحفاظ على استجابة لمس عالية الحساسية."
    },
    commonIssues: {
      it: ["Vetro crepato con linee colorate", "Touch screen che non risponde", "Schermo completamente nero con vibrazione", "Sfarfallio dello schermo"],
      en: ["Cracked glass with colored lines", "Unresponsive touch screen", "Completely black screen but phone vibrates", "Screen flickering"],
      ar: ["زجاج مكسور مع خطوط ملونة", "شاشة لمس لا تستجيب", "شاشة سوداء بالكامل مع اهتزاز الهاتف", "وميض في الشاشة"]
    },
    seoKeyword: "sostituzione schermo iphone milano"
  },
  {
    id: "charging-port-repair",
    slug: "riparazione-connettore-ricarica",
    name: "Riparazione Connettore di Ricarica",
    category: "common",
    iconName: "Zap",
    priceStart: 29,
    deliveryTime: "30 min",
    shortDesc: {
      it: "Risoluzione problemi di ricarica lenta, cavo che si scollega o porta ossidata.",
      en: "Fixes for slow charging, loose cable connection, or oxidized charging port.",
      ar: "إصلاح مشاكل الشحن البطيء، ارتخاء كابل الشحن، أو تلف منفذ الشحن."
    },
    longDesc: {
      it: "Se devi posizionare il cavo in un certo modo per caricare o il computer non riconosce il telefono, sostituiamo il connettore USB-C o Lightning in soli 30 minuti con componenti protetti.",
      en: "If you have to wiggle the cable to charge or the computer doesn't recognize your phone, we replace the USB-C or Lightning port in just 30 minutes.",
      ar: "إذا كنت تضطر لتحريك الكابل ليشحن الهاتف أو لا يتعرف الكمبيوتر عليه، نقوم باستبدال منفذ USB-C أو Lightning في 30 دقيقة فقط."
    },
    commonIssues: {
      it: ["Il cavo cade o si scollega", "Umidità rilevata nel connettore", "Nessun segno di ricarica", "Falso contatto"],
      en: ["Cable falls out or disconnects", "Moisture detected in port error", "No sign of charging at all", "Loose contact connection"],
      ar: ["الكابل يقع أو ينفصل", "خطأ رطوبة في منفذ الشحن", "لا توجد إشارة شحن على الإطلاق", "توصيل غير ثابت"]
    },
    seoKeyword: "riparazione connettore ricarica milano"
  },
  {
    id: "water-damage-repair",
    slug: "riparazione-danni-da-liquido",
    name: "Riparazione Danni da Liquidi",
    category: "common",
    iconName: "Droplet",
    priceStart: 49,
    deliveryTime: "24-48 ore",
    shortDesc: {
      it: "Lavaggio chimico ad ultrasuoni e ossidazione per telefoni caduti in acqua.",
      en: "Ultrasonic chemical wash and deoxidation for water-damaged phones.",
      ar: "تنظيف كيميائي بالموجات فوق الصوتية وإزالة الأكسدة للهواتف الساقطة في الماء."
    },
    longDesc: {
      it: "Il telefono è caduto in acqua o nel wc? Non provare ad accenderlo! Portacelo subito per un ciclo di lavaggio ad ultrasuoni e ispezione dei circuiti con microscopio per fermare la corrosione.",
      en: "Did your phone fall in water or a pool? Do not try to turn it on! Bring it to us immediately for an ultrasonic cleaning wash and microscopic board inspection to stop corrosion.",
      ar: "هل سقط هاتفك في الماء أو المسبح؟ لا تحاول تشغيله! أحضره إلينا فوراً لإجراء غسيل بالموجات فوق الصوتية وفحص اللوحة بالمجهر لمنع التآكل."
    },
    commonIssues: {
      it: ["Telefono bagnato che non si accende", "Macchie d'acqua sotto lo schermo", "Fotocamera appannata internamente", "Surriscaldamento immediato"],
      en: ["Wet phone not turning on", "Water marks under screen", "Fogged up camera lens", "Immediate overheating"],
      ar: ["هاتف مبلل لا يعمل", "علامات مياه أسفل الشاشة", "عدسة الكاميرا مغبشة من الداخل", "ارتفاع فوري في الحرارة"]
    },
    seoKeyword: "riparazione cellulari caduti in acqua milano"
  },
  {
    id: "back-glass-replacement",
    slug: "sostituzione-vetro-posteriore",
    name: "Sostituzione Vetro Posteriore",
    category: "common",
    iconName: "Scissors", // used as laser cutter representation
    priceStart: 49,
    deliveryTime: "2-3 ore",
    shortDesc: {
      it: "Sostituzione del vetro posteriore frantumato con macchinario laser di ultima generazione.",
      en: "Shattered back glass replacement using state-of-the-art laser machinery.",
      ar: "استبدال الزجاج الخلفي المحطم باستخدام أحدث أجهزة الليزر دون فتح الجهاز."
    },
    longDesc: {
      it: "La rimozione manuale del vetro posteriore rovina la scocca. Noi usiamo un avanzato macchinario a raggio Laser che scioglie la colla di fabbrica in modo ultra-preciso, permettendoci di montare una nuova cover posteriore a filo perfetto.",
      en: "Manual removal of back glass ruins the metal frame. We use advanced high-precision Laser machinery to vaporize factory glue, ensuring perfect seamless fit of the new back cover.",
      ar: "إزالة الزجاج الخلفي يدوياً تتلف الإطار المعدني. نحن نستخدم جهاز ليزر متطوراً وعالي الدقة لإذابة الغراء الأصلي، مما يضمن تركيب الغطاء الخلفي الجديد بشكل مثالي ومستوٍ."
    },
    commonIssues: {
      it: ["Vetro posteriore crepato a ragnatela", "Schegge di vetro che si staccano", "Ricarica wireless non funzionante per danni fisici"],
      en: ["Spiderweb cracks on back cover", "Glass splinters falling off", "Wireless charging not working due to physical damage"],
      ar: ["كسور شبكة العنكبوت على الغطاء الخلفي", "شظايا زجاجية تتساقط من الخلف", "الشحن اللاسلكي لا يعمل بسبب الضرر الفيزيائي"]
    },
    seoKeyword: "sostituzione vetro posteriore iphone milano"
  },
  {
    id: "camera-repair",
    slug: "riparazione-fotocamera",
    name: "Riparazione Fotocamera",
    category: "common",
    iconName: "Camera",
    priceStart: 39,
    deliveryTime: "30-45 min",
    shortDesc: {
      it: "Sostituzione lenti fotocamera rigate e sensori che non mettono a fuoco.",
      en: "Replacement of scratched camera lenses and sensors failing to focus.",
      ar: "استبدال عدسات الكاميرا المخدوشة والمستشعرات التي تفشل في التركيز (الفوكس)."
    },
    longDesc: {
      it: "Sostituiamo il modulo fotocamera anteriore o posteriore danneggiato, eliminando vibrazioni dovute al guasto dello stabilizzatore ottico (OIS) o schermi neri dell'app fotocamera.",
      en: "We replace damaged front or rear camera modules, eliminating camera vibrations due to optical image stabilization (OIS) failure or black camera screens.",
      ar: "نستبدل وحدات الكاميرا الأمامية أو الخلفية التالفة، ونقضي على اهتزاز الكاميرا الناتج عن تعطل مثبت الصورة البصري (OIS) أو الشاشة السوداء في تطبيق الكاميرا."
    },
    commonIssues: {
      it: ["La fotocamera vibra o fa rumore", "Foto sfocate o con macchie nere", "Il flash non funziona", "Schermata nera nell'app fotocamera"],
      en: ["Camera vibrates or makes buzzing noise", "Blurry photos or black dots", "Flash is not working", "Black screen on camera app open"],
      ar: ["الكاميرا تهتز أو تصدر صوتاً", "صور مغبشة أو بقع سوداء", "الفلاش لا يعمل", "شاشة سوداء عند فتح الكاميرا"]
    },
    seoKeyword: "sostituzione fotocamera cellulare milano"
  },
  {
    id: "speaker-repair",
    slug: "riparazione-altoparlante",
    name: "Riparazione Altoparlante",
    category: "common",
    iconName: "Volume2",
    priceStart: 29,
    deliveryTime: "30 min",
    shortDesc: {
      it: "Pulizia professionale e sostituzione altoparlante gracchiante o muto.",
      en: "Professional cleaning and replacement of crackling or silent speakers.",
      ar: "تنظيف احترافي واستبدال مكبر الصوت الذي يصدر حشرجة أو لا يعمل."
    },
    longDesc: {
      it: "Se la suoneria gracchia o non senti l'audio dei video, effettuiamo la pulizia delle griglie acustiche ad ultrasuoni o la sostituzione immediata della cassa audio inferiore.",
      en: "If the ringtone crackles or you cannot hear audio on videos, we perform ultrasonic cleaning of protective meshes or complete replacement of the lower speaker.",
      ar: "إذا كان صوت الرنين يوشوش أو لا يمكنك سماع الصوت في الفيديوهات، نقوم بالتنظيف بالموجات فوق الصوتية للشبكة الواقية أو استبدال كامل لمكبر الصوت السفلي."
    },
    commonIssues: {
      it: ["Audio gracchia al massimo volume", "Nessun suono dai video", "Vivavoce muto", "Polvere ostinata nelle griglie"],
      en: ["Sound crackles at high volume", "No sound on video playback", "Muted speakerphone", "Heavy dust clogging speaker mesh"],
      ar: ["الصوت يوشوش عند رفعه", "لا يوجد صوت عند تشغيل الفيديو", "مكبر الصوت صامت", "أتربة كثيفة تسد شبكة الصوت"]
    },
    seoKeyword: "riparazione altoparlante telefono milano"
  },
  {
    id: "microphone-repair",
    slug: "riparazione-microfono",
    name: "Riparazione Microfono",
    category: "common",
    iconName: "Mic",
    priceStart: 29,
    deliveryTime: "30-45 min",
    shortDesc: {
      it: "Risoluzione problemi di audio basso o assente durante le chiamate e vocali.",
      en: "Resolution of low or missing audio during phone calls and voice notes.",
      ar: "حل مشاكل الصوت المنخفض أو المفقود أثناء المكالمات الهاتفية والملاحظات الصوتية."
    },
    longDesc: {
      it: "Chi ti chiama non ti sente? Sostituiamo il modulo microfono del tuo telefono (solitamente integrato sulla scheda di ricarica) ripristinando una voce limpida e cristallina.",
      en: "Can't people hear you during calls? We replace your phone's microphone module (usually integrated on the charging daughterboard) to restore crisp, crystal-clear voice notes.",
      ar: "هل يشتكي الآخرون من عدم سماعك أثناء المكالمات؟ نستبدل وحدة الميكروفون في هاتفك (المدمجة عادة في لوحة الشحن) لاستعادة صوت نقي وواضح."
    },
    commonIssues: {
      it: ["Interlocutore sente la voce lontana", "Audio assente nei messaggi WhatsApp", "Assistenti vocali non rispondono"],
      en: ["The caller hears your voice as if far away", "No audio on WhatsApp voice notes", "Siri or Google Assistant not responding"],
      ar: ["المتصل يسمع صوتك كأنه بعيد", "لا يوجد صوت في رسائل واتساب الصوتية", "المساعد الصوتي لا يستجيب"]
    },
    seoKeyword: "riparazione microfono cellulare milano"
  },
  {
    id: "face-id-repair",
    slug: "riparazione-face-id",
    name: "Riparazione Face ID / Touch ID",
    category: "common",
    iconName: "Shield",
    priceStart: 59,
    deliveryTime: "2-3 ore",
    shortDesc: {
      it: "Riparazione sensori biometrici Face ID e impronte digitali con microsaldatura.",
      en: "Biometric sensor repair for Face ID and fingerprint readers using micro-soldering.",
      ar: "إصلاح المستشعرات الحيوية لـ Face ID وقارئ البصمة باستخدام اللحام الدقيق."
    },
    longDesc: {
      it: "Il Face ID disattivato è spesso causato da infiltrazioni di acqua o urti che danneggiano il proiettore di punti (Dot Projector). Ripariamo il sensore originale mantenendo la sicurezza crittografica del processore Apple.",
      en: "Face ID failure is often caused by water drops or bumps damaging the Dot Projector. We repair the original sensor, maintaining the cryptographic security calibrated to your Apple processor.",
      ar: "غش غطاء معرف الوجه (Face ID) ناتج عن تسرب قطرات الماء أو الصدمات التي تتلف مسقط النقاط (Dot Projector). نحن نصلح المستشعر الأصلي مع الحفاظ على الأمان المشفر المربوط بمعالج آبل."
    },
    commonIssues: {
      it: ["Messaggio 'Rilevato un problema con Face ID'", "Impossibile configurare il volto", "Touch ID non riconosce l'impronta dopo cambio schermo"],
      en: ["'A problem was detected with Face ID' error", "Unable to set up facial recognition", "Touch ID doesn't recognize fingerprint after screen swap"],
      ar: ["خطأ 'تم اكتشاف مشكلة في معرف الوجه Face ID'", "لا يمكن إعداد التعرف على الوجه", "قارئ البصمة لا يتعرف على بصمتك بعد تغيير الشاشة"]
    },
    seoKeyword: "riparazione face id iphone milano"
  },
  {
    id: "data-recovery",
    slug: "recupero-dati",
    name: "Recupero Dati",
    category: "common",
    iconName: "Database",
    priceStart: 79,
    deliveryTime: "3-5 giorni",
    shortDesc: {
      it: "Recupero professionale foto, contatti e dati da dispositivi rotti o spenti.",
      en: "Professional recovery of photos, contacts, and files from broken or dead devices.",
      ar: "استرجاع احترافي للصور وجهات الاتصال والملفات من الأجهزة المكسورة أو التالفة تماماً."
    },
    longDesc: {
      it: "Se il tuo telefono è distrutto, piegato o non dà segni di vita, non perdere le tue memorie. Effettuiamo dissaldatura dei chip di memoria (Chip-Off) per estrarre direttamente i dati.",
      en: "If your phone is crushed, bent, or dead, don't lose your memories. We perform direct memory chip desoldering (Chip-Off technique) to extract your precious photos and data safely.",
      ar: "إذا كان هاتفك محطماً أو منحنياً أو لا يعمل، فلا تفقد ذكرياتك. نقوم بفك شريحة الذاكرة مباشرة (تقنية Chip-Off) لاستخراج صورك وبياناتك الثمينة بأمان."
    },
    commonIssues: {
      it: ["Telefono spento che non si accende più", "Scheda madre spezzata", "Dati cancellati per errore", "Bootloop continuo"],
      en: ["Dead phone that won't turn on", "Shattered or cracked motherboard", "Accidentally deleted data", "Continuous bootloop cycle"],
      ar: ["هاتف ميت لا يعمل على الإطلاق", "لوحة أم مكسورة", "بيانات تم مسحها بالخطأ", "إعادة تشغيل مستمرة دون إقلاع (Bootloop)"]
    },
    seoKeyword: "recupero dati cellulare rotto milano"
  },
  {
    id: "software-repair",
    slug: "riparazione-software",
    name: "Riparazione Software",
    category: "common",
    iconName: "Cpu",
    priceStart: 29,
    deliveryTime: "1-2 ore",
    shortDesc: {
      it: "Ripristino sistemi operativi, sblocco codici, backup dati e rimozione malware.",
      en: "Operating system reinstall, code unlocks, data backups, and malware removal.",
      ar: "إعادة تثبيت نظام التشغيل، فك رموز القفل، النسخ الاحتياطي للبيانات، وإزالة الفيروسات."
    },
    longDesc: {
      it: "Risolviamo problemi di telefoni bloccati sul logo iniziale (bootloop), errori di sistema, infezioni da adware e aiutiamo nel trasferimento sicuro dei dati dal vecchio al nuovo telefono.",
      en: "We resolve issues with phones stuck on the logo screen (bootloop), system crashes, adware infections, and perform safe, comprehensive data transfers from your old phone to the new one.",
      ar: "نحل مشاكل الهواتف المعلقة على شعار البدء (Bootloop)، وانهيار النظام، والبرمجيات الخبيثة، ونقوم بنقل البيانات بالكامل وبأمان من هاتفك القديم إلى الجديد."
    },
    commonIssues: {
      it: ["Schermata di ripristino (iTunes o Recovery)", "Memoria piena che blocca il telefono", "App che si chiudono da sole", "Password dimenticata (previo sblocco legale)"],
      en: ["Recovery mode screen (iTunes or recovery error)", "Full storage blocking phone boot", "Apps closing immediately", "Forgotten passcode (legal proof required)"],
      ar: ["شاشة وضع الاسترداد (Recovery Mode)", "الذاكرة ممتلئة وتمنع إقلاع الهاتف", "تطبيقات تغلق تلقائياً", "نسيان رمز القفل (يتطلب إثبات ملكية)"]
    },
    seoKeyword: "riparazione software cellulari milano"
  }
];
