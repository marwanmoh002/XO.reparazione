/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Eye } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface RepairSample {
  id: string;
  name: { it: string; en: string; ar: string };
  beforeLabel: { it: string; en: string; ar: string };
  afterLabel: { it: string; en: string; ar: string };
  beforeBg: string; // colors and effects for mockup
  afterBg: string;
  issueDesc: string;
}

const SAMPLES: RepairSample[] = [
  {
    id: "screen",
    name: { it: "Schermo Rotto iPhone", en: "Shattered iPhone Screen", ar: "شاشة آيفون محطمة" },
    beforeLabel: { it: "Vetro Distrutto", en: "Shattered Glass", ar: "زجاج محطم" },
    afterLabel: { it: "Qualità Originale", en: "Original Quality", ar: "جودة أصلية" },
    beforeBg: "from-red-950 to-zinc-900 border-red-500/30",
    afterBg: "from-zinc-900 to-emerald-950 border-emerald-500/30",
    issueDesc: "iPhone 15 Pro Max"
  },
  {
    id: "backglass",
    name: { it: "Vetro Posteriore Laser", en: "Laser Back Glass S24", ar: "الزجاج الخلفي بجهاز S24" },
    beforeLabel: { it: "Crepato", en: "Cracked Cover", ar: "غطاء مكسور" },
    afterLabel: { it: "Ripristino Filo", en: "Seamless Finish", ar: "مظهر مستوٍ" },
    beforeBg: "from-amber-950 to-zinc-900 border-amber-500/30",
    afterBg: "from-zinc-900 to-blue-950 border-blue-500/30",
    issueDesc: "Samsung Galaxy S24 Ultra"
  },
  {
    id: "liquid",
    name: { it: "Ossidazione MacBook", en: "MacBook Water Corrosion", ar: "أكسدة ماك بوك بسبب الماء" },
    beforeLabel: { it: "Scheda Corrosa", en: "Corroded Board", ar: "لوحة متآكلة" },
    afterLabel: { it: "Lavaggio Ultrasuoni", en: "Ultrasonic Clean", ar: "تنظيف بالموجات" },
    beforeBg: "from-yellow-950 to-zinc-900 border-yellow-500/30",
    afterBg: "from-zinc-900 to-cyan-950 border-cyan-500/30",
    issueDesc: "MacBook Air M2"
  }
];

export default function BeforeAfterSlider({ lang }: { lang: Language }) {
  const t = translations[lang];
  const [selectedId, setSelectedId] = useState("screen");
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const activeSample = SAMPLES.find(s => s.id === selectedId) || SAMPLES[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDraggingRef.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div id="before-after-gallery" className="glass rounded-3xl p-6 md:p-8 max-w-4xl mx-auto border border-zinc-800 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h3 className="text-2xl font-semibold font-display text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-brand-electric" />
            {t.beforeAfterTitle}
          </h3>
          <p className="text-zinc-400 text-sm mt-1 max-w-lg">
            {t.beforeAfterSubtitle}
          </p>
        </div>
        <div className="flex gap-2 bg-zinc-900 p-1.5 rounded-xl self-start">
          {SAMPLES.map(s => (
            <button
              key={s.id}
              onClick={() => setSelectedId(s.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedId === s.id
                  ? 'bg-brand-blue text-zinc-950 shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {s.name[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Stage */}
      <div 
        ref={containerRef}
        className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-zinc-800"
        onMouseDown={() => { isDraggingRef.current = true; }}
        onTouchStart={() => { isDraggingRef.current = true; }}
        onMouseMove={(e) => { if (isDraggingRef.current) handleMove(e.clientX); }}
        onTouchMove={(e) => { if (isDraggingRef.current && e.touches[0]) handleMove(e.touches[0].clientX); }}
      >
        {/* AFTER STATE (Right/Bottom) */}
        <div className={`absolute inset-0 bg-gradient-to-br ${activeSample.afterBg} flex items-center justify-center p-8 transition-colors duration-500`}>
          <div className="text-center max-w-sm">
            <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2.5 py-1 rounded-full font-mono border border-emerald-500/30">
              {activeSample.afterLabel[lang]}
            </span>
            <h4 className="text-xl md:text-2xl font-bold font-display text-white mt-4">{activeSample.issueDesc}</h4>
            <p className="text-zinc-300 text-xs md:text-sm mt-2">
              {selectedId === "screen" && (lang === 'it' ? "Vetro temperato premium e display OLED calibrato perfettamente. Luminosità di 2000 nits e supporto HDR attivo." : "Premium tempered glass and perfectly calibrated OLED display. 2000 nits brightness and active HDR support.")}
              {selectedId === "backglass" && (lang === 'it' ? "Scocca pulita con taglio laser di precisione. Sigillatura idrorepellente originale intatta." : "Clean frame with precision laser cutting. Original water-repellent sealing fully intact.")}
              {selectedId === "liquid" && (lang === 'it' ? "Scheda madre deossidata, contatti ripristinati e pasta termica MX-6 sostituita." : "Deoxidized motherboard, fully restored contacts, and fresh MX-6 thermal compound applied.")}
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-brand-electric font-mono bg-zinc-900/80 px-3 py-1 rounded-full border border-zinc-800">
              <Eye className="w-3.5 h-3.5" /> XO Certification Active
            </div>
          </div>
        </div>

        {/* BEFORE STATE (Left/Overlaid) */}
        <div 
          className={`absolute inset-y-0 left-0 bg-gradient-to-br ${activeSample.beforeBg} overflow-hidden border-r border-brand-electric/50 transition-colors duration-500`}
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 w-[800px] md:w-[1000px] flex items-center justify-center p-8">
            <div className="text-center max-w-sm">
              <span className="bg-red-500/20 text-red-300 text-xs px-2.5 py-1 rounded-full font-mono border border-red-500/30">
                {activeSample.beforeLabel[lang]}
              </span>
              <h4 className="text-xl md:text-2xl font-bold font-display text-white mt-4">{activeSample.issueDesc}</h4>
              <p className="text-zinc-300 text-xs md:text-sm mt-2">
                {selectedId === "screen" && (lang === 'it' ? "Vetro frantumato a ragnatela con sensore touch instabile e cristalli liquidi danneggiati." : "Web shattered glass with unstable touch response and damaged liquid crystals.")}
                {selectedId === "backglass" && (lang === 'it' ? "Copertura posteriore in frantumi, rischio infiltrazioni liquidi e ricarica wireless difettosa." : "Shattered back cover, high risk of liquid infiltration, and defective wireless charging.")}
                {selectedId === "liquid" && (lang === 'it' ? "Acqua infiltrata con ossidazione verde dei circuiti stampati e cortocircuiti continui." : "Water infiltration with green oxidation of printed circuit boards and recurring short-circuits.")}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-red-400 font-mono bg-zinc-900/80 px-3 py-1 rounded-full border border-zinc-800">
                ⚠️ Broken & Vulnerable
              </div>
            </div>
          </div>
        </div>

        {/* DRAGGABLE BAR */}
        <div 
          className="absolute inset-y-0 w-1 bg-brand-electric pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-black border-2 border-brand-electric flex items-center justify-center shadow-lg pointer-events-none">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-brand-electric rounded-full"></div>
              <div className="w-1 h-3 bg-brand-electric rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-zinc-500 text-xs mt-4 font-mono">
        ↔️ {t.beforeAfterCompare}
      </p>
    </div>
  );
}
