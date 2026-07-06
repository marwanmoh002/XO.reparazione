/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Database, FileCode, Check, Copy } from 'lucide-react';
import { Language } from '../types';

export default function LocalSchemaViewer({ lang }: { lang: Language }) {
  const [activeSchemaTab, setActiveSchemaTab] = useState<'business' | 'service' | 'faq' | 'reviews'>('business');
  const [copied, setCopied] = useState(false);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MobilePhoneRepairService",
    "name": "XO Riparazione Milano",
    "image": "https://xo-riparazione.it/assets/logo.png",
    "@id": "https://xo-riparazione.it/#milan-store",
    "url": "https://xo-riparazione.it",
    "telephone": "+393444100402",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Padova 84",
      "addressLocality": "Milano",
      "postalCode": "20131",
      "addressRegion": "MI",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.4637",
      "longitude": "9.1873"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "sunday"],
        "opens": "10:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/xoriparazione",
      "https://www.facebook.com/profile.php?id=61586709075824",
      "https://www.tiktok.com/@xo.riparazione",
      "https://linktr.ee/XO.riparazione",
      "https://maps.app.goo.gl/m7kHLmEZgtafRUqDA"
    ],
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Milano"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Sostituzione Schermo iPhone",
    "provider": {
      "@type": "LocalBusiness",
      "name": "XO Riparazione Milano"
    },
    "areaServed": {
      "@type": "City",
      "name": "Milano"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": "39.00",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto tempo richiede la riparazione di uno schermo iPhone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La sostituzione dello schermo dell'iPhone viene eseguita in massimo 60 minuti dai nostri tecnici certificati direttamente in negozio a Milano."
        }
      },
      {
        "@type": "Question",
        "name": "I miei dati personali andranno persi durante la riparazione?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, garantiamo la totale sicurezza dei tuoi dati. Non effettuiamo il ripristino di fabbrica a meno che non sia strettamente necessario o concordato."
        }
      },
      {
        "@type": "Question",
        "name": "Che tipo di garanzia offrite sulle riparazioni?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Offriamo una garanzia scritta completa di 6 mesi su qualsiasi ricambio sostituito e sulla manodopera dei nostri tecnici."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Servizi di Riparazione XO Riparazione Milano",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "1540"
    }
  };

  const getActiveSchemaJson = () => {
    switch (activeSchemaTab) {
      case 'business': return localBusinessSchema;
      case 'service': return serviceSchema;
      case 'faq': return faqSchema;
      case 'reviews': return reviewSchema;
    }
  };

  const handleCopy = () => {
    const jsonStr = JSON.stringify(getActiveSchemaJson(), null, 2);
    navigator.clipboard.writeText(jsonStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="local-seo-schema-explorer" className="glass rounded-3xl p-6 md:p-8 max-w-4xl mx-auto border border-zinc-800 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-2xl font-bold font-display text-white flex items-center gap-2">
            <Database className="w-5.5 h-5.5 text-brand-electric" />
            {lang === 'it' ? "Esploratore Schema.org Local SEO integrato" : "Built-in Schema.org Local SEO Explorer"}
          </h3>
          <p className="text-zinc-400 text-sm mt-1 max-w-xl">
            {lang === 'it' 
              ? "Ispeziona il codice JSON-LD strutturato reale iniettato in ogni pagina. Questo codice indica ai motori di ricerca la nostra localizzazione a Milano, i servizi, prezzi e recensioni per dominare i primi risultati di ricerca locali."
              : "Inspect the structured JSON-LD microdata injected into our pages to claim local search domination."}
          </p>
        </div>
      </div>

      {/* Tabs list */}
      <div className="flex flex-wrap gap-2 mb-4 bg-zinc-900 p-1.5 rounded-xl self-start w-fit">
        {(['business', 'service', 'faq', 'reviews'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSchemaTab(tab)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              activeSchemaTab === tab
                ? 'bg-brand-blue text-white shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {tab === 'business' && "LocalBusiness"}
            {tab === 'service' && "Service Schema"}
            {tab === 'faq' && "FAQ Schema"}
            {tab === 'reviews' && "AggregateRating"}
          </button>
        ))}
      </div>

      {/* Editor Panel */}
      <div className="bg-zinc-950 rounded-2xl border border-zinc-900 overflow-hidden relative">
        <div className="bg-zinc-900 px-4 py-2 flex justify-between items-center border-b border-zinc-950">
          <div className="flex items-center gap-2 text-zinc-500 font-mono text-[11px]">
            <FileCode className="w-3.5 h-3.5 text-zinc-500" />
            <span>structured-data-{activeSchemaTab}.json-ld</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 text-[11px]">Copiato!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span className="text-[11px]">Copia</span>
              </>
            )}
          </button>
        </div>

        <pre className="p-4 md:p-6 overflow-x-auto text-[11px] md:text-xs font-mono text-emerald-300 max-h-80 select-all no-scrollbar leading-relaxed">
          {JSON.stringify(getActiveSchemaJson(), null, 2)}
        </pre>
      </div>

      <p className="text-[11px] text-zinc-500 mt-3 font-mono leading-relaxed">
        {lang === 'it' 
          ? "💡 Questo markup viene caricato automaticamente nell'HTML head per assicurare rich snippet (stelline di valutazione, indirizzo e orari di apertura) visibili direttamente nei risultati di ricerca organici di Google."
          : "💡 This markup is automatically injected into the HTML layout to enable Google rich snippets (review stars, address, phone and maps pins)."}
      </p>
    </div>
  );
}
