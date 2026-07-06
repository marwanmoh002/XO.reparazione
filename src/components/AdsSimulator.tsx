/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Target, Search, ArrowRight, Gauge, Check, ShieldAlert, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface KeywordAdScenario {
  keyword: string;
  adTitle: string;
  adDesc: string;
  landingTitle: string;
  landingSubtitle: string;
  scoreExplanation: string;
}

const SCENARIOS: KeywordAdScenario[] = [
  {
    keyword: "riparazione iphone milano",
    adTitle: "Riparazione iPhone Milano | Espresso in 60 Minuti | Via Padova",
    adDesc: "Schermo rotto o batteria esausta? Ripariamo il tuo iPhone oggi stesso a Milano con ricambi di qualità originale e garanzia 6 mesi. Prenota subito!",
    landingTitle: "Riparazione iPhone Milano",
    landingSubtitle: "Sostituzione schermo, batteria e vetro posteriore in 60 minuti con ricambi di qualità originale e 6 mesi di garanzia in Via Padova.",
    scoreExplanation: "Message Match del 100%: Il titolo della Landing Page corrisponde esattamente alla parola chiave cercata e all'annuncio Google Ads. Punteggio di Qualità: 10/10. Costo per Click ridotto del 40%."
  },
  {
    keyword: "sostituzione schermo milano",
    adTitle: "Sostituzione Schermo Cellulare Milano | Vetro Rotto Sostituito Oggi",
    adDesc: "Hai rotto il vetro del telefono? Cambiamo schermi LCD/OLED a Milano in soli 30 minuti. Garanzia scritta di 6 mesi inclusa. Clicca per prezzi!",
    landingTitle: "Sostituzione Schermo e Vetro a Milano",
    landingSubtitle: "Sostituiamo schermi e vetri danneggiati per iPhone, Samsung, Xiaomi e altre marche in giornata a partire da €39. No perdita dati.",
    scoreExplanation: "Ottimizzazione Intento: L'utente cerca una riparazione specifica (lo schermo). Presentando un titolo incentrato sullo schermo riduciamo la frequenza di rimbalzo del 35%."
  },
  {
    keyword: "riparazione macbook milano vicino a me",
    adTitle: "Assistenza MacBook Milano | Centro Riparazioni Mac Via Padova",
    adDesc: "MacBook non si accende o bagnato con liquidi? Riparazioni elettroniche sulla scheda madre con risparmio del 60% rispetto ai canali ufficiali.",
    landingTitle: "Assistenza e Riparazione MacBook Milano",
    landingSubtitle: "Risoluzione guasti, lavaggio ossido liquidi e potenziamento SSD per MacBook Air e Pro a Milano. Tecnici certificati Apple.",
    scoreExplanation: "Targeting Geografico + Servizio: L'utente cerca nelle vicinanze a Milano. Evidenziare 'Via Padova' massimizza l'intento di visita in negozio."
  },
  {
    keyword: "assistenza xiaomi milano",
    adTitle: "Riparazione Xiaomi Milano | Schermo e Batteria in 45 Minuti",
    adDesc: "Problemi con il tuo telefono Xiaomi, Redmi o POCO? Riparazioni veloci con ricambi originali certificati a Milano. Richiedi preventivo istantaneo.",
    landingTitle: "Centro Assistenza e Riparazione Xiaomi Milano",
    landingSubtitle: "Riparazione immediata smartphone Xiaomi, Redmi e POCO in Via Padova 84. Prezzi trasparenti con ricambi originali e garanzia 6 mesi.",
    scoreExplanation: "Pertinenza del Brand: Google Ads premia gli annunci altamente focalizzati sul brand cercato. Il Quality Score elevato assicura la prima posizione nelle aste di Google."
  }
];

export default function AdsSimulator({ lang }: { lang: Language }) {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const activeScenario = SCENARIOS[scenarioIndex];

  return (
    <div id="google-ads-simulator" className="glass rounded-3xl p-6 md:p-8 max-w-4xl mx-auto border border-zinc-800 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h3 className="text-2xl font-bold font-display text-white flex items-center gap-2">
            <Target className="w-5.5 h-5.5 text-brand-electric" />
            {lang === 'it' ? "Simulatore di Messaggio Dinamico Google Ads" : "Dynamic Ads Message Match Simulator"}
          </h3>
          <p className="text-zinc-400 text-sm mt-1 max-w-xl">
            {lang === 'it' 
              ? "Clicca sulle diverse ricerche per simulare come XO Riparazione re-indirizza l'utente adattando testi e contenuti per massimizzare le conversioni e azzerare i costi pubblicitari sprecati."
              : "Click on different searches to simulate how XO Riparazione dynamically tailors headlines to secure 10/10 Quality Scores."}
          </p>
        </div>
      </div>

      {/* Select buttons for keywords */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {SCENARIOS.map((sc, idx) => (
          <button
            key={idx}
            onClick={() => setScenarioIndex(idx)}
            className={`p-3 rounded-xl border text-xs font-mono text-center transition-all cursor-pointer ${
              idx === scenarioIndex
                ? 'bg-brand-blue/20 text-brand-electric border-brand-electric'
                : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
            }`}
          >
            🔍 "{sc.keyword}"
          </button>
        ))}
      </div>

      {/* Grid of Google Search Result VS Dynamic Landing Outcome */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Google Search Result Mockup */}
        <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 border-b border-zinc-900 pb-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-[10px] text-zinc-500 font-mono ml-2">google.it/search?q={activeScenario.keyword.replace(/ /g, '+')}</span>
          </div>

          <div className="bg-zinc-900/60 p-4 rounded-xl space-y-2 border border-zinc-800/50">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-zinc-400 bg-zinc-850 px-1.5 py-0.5 rounded border border-zinc-700/50 font-semibold">Annuncio · Sponsorizzato</span>
              <span className="text-[10px] text-zinc-500 font-mono">xo-riparazione.it</span>
            </div>
            <h4 className="text-sm font-semibold text-blue-400 hover:underline cursor-pointer leading-snug">
              {activeScenario.adTitle}
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {activeScenario.adDesc}
            </p>
            <div className="flex gap-4 text-[11px] text-brand-electric font-mono pt-1">
              <span>✓ Prezzi Trasparenti</span>
              <span>✓ Via Padova 84</span>
              <span>✓ Max 60 Minuti</span>
            </div>
          </div>

          <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-xl p-3.5 space-y-2">
            <div className="flex items-center gap-2 text-brand-electric">
              <Gauge className="w-5 h-5 text-brand-electric animate-pulse" />
              <span className="text-xs font-mono font-bold">GOOGLE QUALITY SCORE: 10/10</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              {lang === 'it' 
                ? "Pertinenza dell'annuncio eccellente, esperienza sulla pagina di destinazione eccezionale e percentuale di clic (CTR) superiore alla media."
                : "Excellent ad relevance, outstanding landing page experience, and above-average expected Click-Through Rate."}
            </p>
          </div>
        </div>

        {/* Right: Dynamic Landing Page Outcome */}
        <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                {lang === 'it' ? "LANDING DYNAMIC ENGINE ATTIVO" : "DYNAMIC LANDING ACTIVE"}
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">xo-riparazione.it/milan</span>
            </div>

            {/* Simulated Hero Portion */}
            <div className="border border-brand-blue/30 bg-brand-blue/5 p-4 rounded-xl space-y-2 relative">
              <div className="absolute top-2 right-2 bg-brand-blue/20 border border-brand-blue/30 text-brand-electric text-[9px] px-1.5 py-0.5 rounded font-mono">
                Dynamic Tag matched
              </div>
              <span className="text-[9px] uppercase tracking-wider text-brand-electric font-mono block">Home / Milano Centro / {activeScenario.keyword}</span>
              <h1 className="text-lg font-extrabold text-white font-display leading-tight">{activeScenario.landingTitle}</h1>
              <p className="text-xs text-zinc-400 leading-relaxed">{activeScenario.landingSubtitle}</p>

              <div className="pt-2">
                <button className="bg-brand-blue hover:bg-zinc-200 text-zinc-950 text-[11px] font-bold py-2 px-4 rounded-lg flex items-center gap-1 cursor-pointer">
                  <span>{lang === 'it' ? "Prenota Riparazione Express" : "Book Express Repair"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* CRO value analysis */}
            <div className="bg-zinc-900/40 p-3.5 rounded-xl border border-zinc-800 space-y-1">
              <span className="text-[10px] font-mono text-zinc-500 block uppercase tracking-wide">Analisi Ottimizzazione Conversioni (CRO)</span>
              <p className="text-[11px] text-zinc-300 leading-relaxed">
                {activeScenario.scoreExplanation}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-900 flex items-center gap-2 text-xs text-emerald-400 font-mono">
            <Check className="w-4 h-4 bg-emerald-500/15 p-0.5 rounded-full" />
            <span>{lang === 'it' ? "Filtro rimbalzo attivo: tassi di conversione +45%" : "Bounce filter active: conversion rate +45%"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
