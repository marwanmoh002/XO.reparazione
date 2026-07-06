/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Calculator, Zap, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

const CATEGORIES = [
  { id: 'smartphone', label: { it: 'Smartphone', en: 'Smartphones', ar: 'الهواتف الذكية' } },
  { id: 'tablet', label: { it: 'Tablet / iPad', en: 'Tablets / iPads', ar: 'الأجهزة اللوحية' } },
  { id: 'computer', label: { it: 'Computer / MacBook', en: 'Computers / MacBooks', ar: 'الكمبيوتر واللابتوب' } },
  { id: 'wearable', label: { it: 'Smartwatch / Apple Watch', en: 'Smartwatches', ar: 'الساعات الذكية' } },
  { id: 'gaming', label: { it: 'Console (PS5, Switch, Xbox)', en: 'Gaming Consoles', ar: 'أجهزة الألعاب' } }
];

const BRANDS_BY_CAT: Record<string, string[]> = {
  smartphone: ['Apple', 'Samsung', 'Xiaomi', 'Oppo', 'Google Pixel', 'Huawei', 'Motorola'],
  tablet: ['Apple (iPad)', 'Samsung Galaxy Tab', 'Lenovo Tab', 'Huawei MediaPad'],
  computer: ['Apple (MacBook)', 'ASUS', 'HP', 'Dell', 'Lenovo', 'Acer'],
  wearable: ['Apple Watch', 'Samsung Galaxy Watch', 'Huawei Watch', 'Garmin / Fitbit'],
  gaming: ['Sony PlayStation', 'Nintendo Switch', 'Microsoft Xbox']
};

const REPAIRS_BY_CAT: Record<string, { name: { it: string; en: string; ar: string }; basePrice: number; time: string }[]> = {
  smartphone: [
    { name: { it: 'Sostituzione Schermo LCD/OLED', en: 'Screen Replacement', ar: 'استبدال الشاشة' }, basePrice: 49, time: '30 min' },
    { name: { it: 'Sostituzione Batteria', en: 'Battery Replacement', ar: 'استبدال البطارية' }, basePrice: 29, time: '15 min' },
    { name: { it: 'Riparazione Connettore Ricarica', en: 'Charging Port Repair', ar: 'إصلاح منفذ الشحن' }, basePrice: 35, time: '30 min' },
    { name: { it: 'Sostituzione Vetro Posteriore', en: 'Back Glass Replacement', ar: 'استبدال الزجاج الخلفi' }, basePrice: 59, time: '2 ore' },
    { name: { it: 'Riparazione Fotocamera', en: 'Camera Repair', ar: 'إصلاح الكاميرا' }, basePrice: 39, time: '30 min' },
    { name: { it: 'Lavaggio Chimico (Danni da Liquidi)', en: 'Water Damage Wash', ar: 'إصلاح أضرار السوائل' }, basePrice: 49, time: '24 ore' },
    { name: { it: 'Riparazione Face ID / Sensori', en: 'Face ID / Touch ID Repair', ar: 'إصلاح بصمة الوجه' }, basePrice: 59, time: '2 ore' },
    { name: { it: 'Recupero Dati Avanzato', en: 'Data Recovery', ar: 'استرجاع البيانات' }, basePrice: 79, time: '2-3 giorni' }
  ],
  tablet: [
    { name: { it: 'Sostituzione Vetro Touch Screen', en: 'Glass / Digitizer Repair', ar: 'استبدال زجاج اللمس' }, basePrice: 59, time: '3 ore' },
    { name: { it: 'Sostituzione Blocco Schermo LCD', en: 'LCD Display Replacement', ar: 'استبدال شاشة العرض' }, basePrice: 79, time: '24 ore' },
    { name: { it: 'Sostituzione Batteria', en: 'Battery Replacement', ar: 'استبدال البطارية' }, basePrice: 39, time: '24 ore' },
    { name: { it: 'Riparazione Connettore di Ricarica', en: 'Charging Port Repair', ar: 'إscلاح منفذ الشحن' }, basePrice: 45, time: '24 ore' }
  ],
  computer: [
    { name: { it: 'Sostituzione Schermo Retina / LCD', en: 'Screen Replacement', ar: 'استبدال الشاشة' }, basePrice: 99, time: '24 ore' },
    { name: { it: 'Sostituzione Batteria interna', en: 'Internal Battery Swap', ar: 'استبدال البطارية الداخلية' }, basePrice: 69, time: '2-4 ore' },
    { name: { it: 'Riparazione Tastiera / Trackpad', en: 'Keyboard / Trackpad Fix', ar: 'إصلاح الكيبورد/الماوس' }, basePrice: 59, time: '24 ore' },
    { name: { it: 'Lavaggio Ossidazione Liquidi', en: 'Liquid Spill Recovery', ar: 'إصلاح سوائل الكمبيوتر' }, basePrice: 89, time: '24-48 ore' },
    { name: { it: 'Upgrade SSD ultra-veloce + Pulizia', en: 'SSD Upgrade & Cleaning', ar: 'ترقية القرص وتنظيفه' }, basePrice: 79, time: '3 ore' }
  ],
  wearable: [
    { name: { it: 'Sostituzione Vetro o Display', en: 'Glass / Display Fix', ar: 'استبدال زجاج/شاشة الساعة' }, basePrice: 49, time: '24 ore' },
    { name: { it: 'Sostituzione Batteria ricaricabile', en: 'Battery Swap', ar: 'استبدال البطارية' }, basePrice: 39, time: '24 ore' },
    { name: { it: 'Riparazione Vetro Sensori Cardio', en: 'Sensor Glass Repair', ar: 'إصلاح زجاج المستشعرات' }, basePrice: 45, time: '24 ore' }
  ],
  gaming: [
    { name: { it: 'Riparazione Porta HDMI (Microsaldatura)', en: 'HDMI Port Micro-soldering', ar: 'إصلاح منفذ الـ HDMI' }, basePrice: 59, time: '24 ore' },
    { name: { it: 'Riparazione Drift Analogici Joy-Con', en: 'Joy-Con Analog Drift Repair', ar: 'إصلاح انحراف عصا التحكم' }, basePrice: 20, time: '15 min' },
    { name: { it: 'Pulizia Professionale Ventole + Pasta', en: 'Pro Fan Cleaning & Paste', ar: 'تنظيف وتغيير معجون التبريد' }, basePrice: 49, time: '3 ore' },
    { name: { it: 'Riparazione Alimentatore / Lettore BluRay', en: 'Power Supply / Drive Fix', ar: 'إصلاح مزود الطاقة/القارئ' }, basePrice: 59, time: '24 ore' }
  ]
};

// Coefficient factors based on Brand tier
const BRAND_TIERS: Record<string, number> = {
  'Apple': 1.6,
  'Apple (iPad)': 1.5,
  'Apple (MacBook)': 1.8,
  'Apple Watch': 1.4,
  'Samsung': 1.4,
  'Samsung Galaxy Tab': 1.3,
  'Samsung Galaxy Watch': 1.2,
  'Sony PlayStation': 1.3,
  'Nintendo Switch': 1.1,
  'Microsoft Xbox': 1.2,
  'Oppo': 1.1,
  'Xiaomi': 1.1,
  'Google Pixel': 1.3,
  'Huawei': 1.1,
  'Motorola': 1.0,
  'ASUS': 1.3,
  'HP': 1.2,
  'Dell': 1.3,
  'Lenovo': 1.1,
  'Lenovo Tab': 1.1,
  'Huawei MediaPad': 1.1,
  'Huawei Watch': 1.1,
  'Garmin / Fitbit': 1.2,
  'Acer': 1.1
};

interface PriceCalculatorProps {
  lang: Language;
  onSelectRepair: (category: string, brand: string, repair: string) => void;
}

export default function PriceCalculator({ lang, onSelectRepair }: PriceCalculatorProps) {
  const t = translations[lang];

  const [category, setCategory] = useState('smartphone');
  const [brand, setBrand] = useState('Apple');
  const [repairIndex, setRepairIndex] = useState(0);
  const [model, setModel] = useState('');

  // When category changes, auto-select first available brand & repair
  useEffect(() => {
    const brands = BRANDS_BY_CAT[category] || [];
    if (brands.length > 0) {
      setBrand(brands[0]);
    }
    setRepairIndex(0);
  }, [category]);

  const repairs = REPAIRS_BY_CAT[category] || [];
  const activeRepair = repairs[repairIndex] || repairs[0] || { name: { it: '', en: '', ar: '' }, basePrice: 0, time: '' };

  // Price math: basePrice * brandMultiplier
  const multiplier = BRAND_TIERS[brand] || 1.1;
  const estimatedPrice = Math.round(activeRepair.basePrice * multiplier);

  const handleBookClick = () => {
    onSelectRepair(category, brand, activeRepair.name[lang]);
  };

  return (
    <div id="price-calculator" className="glass rounded-3xl p-6 md:p-8 max-w-4xl mx-auto border border-zinc-800 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-brand-blue/15 rounded-2xl border border-brand-blue/30 text-brand-electric">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold font-display text-white">
            {t.calcTitle}
          </h3>
          <p className="text-zinc-400 text-sm mt-1">
            {t.calcSubtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Dropdowns Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-zinc-400 text-xs font-mono mb-1.5 uppercase tracking-wide">
              {lang === 'it' ? "1. Categoria" : lang === 'en' ? "1. Category" : "1. الفئة"}
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-electric"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label[lang]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-zinc-400 text-xs font-mono mb-1.5 uppercase tracking-wide">
              {lang === 'it' ? "2. Marchio" : lang === 'en' ? "2. Brand" : "2. العلامة التجارية"}
            </label>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-electric"
            >
              {(BRANDS_BY_CAT[category] || []).map((br) => (
                <option key={br} value={br}>
                  {br}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-zinc-400 text-xs font-mono mb-1.5 uppercase tracking-wide">
              {lang === 'it' ? "3. Modello Consigliato / Cerca" : lang === 'en' ? "3. Suggested Model" : "3. الموديل"}
            </label>
            <input
              type="text"
              placeholder={lang === 'it' ? "Es. iPhone 15 Pro, Galaxy S24..." : lang === 'en' ? "E.g. iPhone 15 Pro, Galaxy S24..." : "مثال: iPhone 15 Pro..."}
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-electric"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-xs font-mono mb-1.5 uppercase tracking-wide">
              {lang === 'it' ? "4. Tipo di Guasto" : lang === 'en' ? "4. Type of Repair" : "4. نوع العطل"}
            </label>
            <select
              value={repairIndex}
              onChange={(e) => setRepairIndex(Number(e.target.value))}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-electric"
            >
              {repairs.map((rep, idx) => (
                <option key={idx} value={idx}>
                  {rep.name[lang]} - Da €{Math.round(rep.basePrice * multiplier)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Dynamic Ticket Display (CRO Optimised) */}
        <div className="bg-zinc-950 border border-zinc-850 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-full min-h-[300px]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase font-mono tracking-widest bg-brand-blue/20 text-brand-electric px-2 py-0.5 rounded-full border border-brand-blue/30">
                XO Price Shield Actived
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">
                ID: {category.slice(0, 3).toUpperCase()}-{brand.slice(0, 3).toUpperCase()}-{repairIndex}
              </span>
            </div>

            <p className="text-zinc-500 text-xs font-mono">{brand} {model ? `| ${model}` : ''}</p>
            <h4 className="text-lg font-bold text-white mt-1">{activeRepair.name[lang]}</h4>

            {/* Price Output */}
            <div className="my-6">
              <p className="text-zinc-400 text-xs">{t.calcEstimatePrice}</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-5xl font-extrabold text-white tracking-tight font-display">
                  €{estimatedPrice}
                </span>
                <span className="text-zinc-500 text-sm font-mono">/ {lang === 'it' ? 'tutto incl.' : lang === 'en' ? 'all incl.' : 'شامل الضريبة'}</span>
              </div>
            </div>

            {/* Quick trust notes */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Clock className="w-4 h-4 text-brand-electric flex-shrink-0" />
                <span>{lang === 'it' ? 'Riparato in:' : lang === 'en' ? 'Repaired in:' : 'وقت الإصلاح:'} <strong>{activeRepair.time}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span><strong>{lang === 'it' ? '6 Mesi' : lang === 'en' ? '6 Months' : '6 أشهر'}</strong> {lang === 'it' ? 'di Garanzia scritta su Ricambio e Lavoro' : lang === 'en' ? 'written warranty on parts & labor' : 'ضمان مكتوب على قطع الغيار والعمل'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-electric bg-brand-blue/10 p-2 rounded-lg border border-brand-blue/20">
                <Zap className="w-4 h-4 flex-shrink-0 animate-pulse" />
                <span className="text-[11px] leading-tight">{t.calcExpressBonus}</span>
              </div>
            </div>
          </div>

          <button 
            onClick={handleBookClick}
            className="w-full bg-brand-blue hover:bg-zinc-200 text-zinc-950 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>{t.ctaBook} {activeRepair.name[lang].split(' ')[0]}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
