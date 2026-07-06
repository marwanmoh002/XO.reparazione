/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, Calendar, MessageSquare, ShieldAlert, Users } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

export default function FloatingCTAs({ lang, onBookClick }: { lang: Language; onBookClick: () => void }) {
  const t = translations[lang];
  const [techniciansAvailable, setTechniciansAvailable] = useState(3);
  const [showNotification, setShowNotification] = useState(false);

  // Simulate dynamic technician count changes occasionally
  useEffect(() => {
    const interval = setInterval(() => {
      setTechniciansAvailable(prev => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return next >= 2 && next <= 5 ? next : prev;
      });
    }, 15000);

    // Show a small urgent toast after 5 seconds to boost bookings (Standard CRO)
    const toastTimeout = setTimeout(() => {
      setShowNotification(true);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(toastTimeout);
    };
  }, []);

  return (
    <>
      {/* 1. Urgency Notification Toast (Standard CRO) */}
      {showNotification && (
        <div className="fixed bottom-24 right-4 md:right-8 z-50 max-w-sm bg-zinc-950 border border-brand-electric/30 rounded-2xl p-4 shadow-2xl flex items-start gap-3 animate-slide-in glass">
          <div className="p-2 bg-brand-blue/20 text-brand-electric rounded-xl border border-brand-blue/30 mt-0.5">
            <Users className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              {lang === 'it' ? "Disponibilità In Tempo Reale" : "Live Laboratory Status"}
            </h4>
            <p className="text-[11px] text-zinc-300 mt-1 leading-normal">
              {lang === 'it' 
                ? `Ci sono ${techniciansAvailable} tecnici attivi in laboratorio a Milano Centro. Tempo medio d'attesa attuale: 15 minuti.` 
                : `There are ${techniciansAvailable} active technicians in our Milan lab. Current average wait: 15 minutes.`}
            </p>
            <button 
              onClick={() => { onBookClick(); setShowNotification(false); }}
              className="text-[10px] text-brand-electric font-semibold underline mt-2 block"
            >
              {lang === 'it' ? "Prenota riparazione immediata →" : "Book priority slot now →"}
            </button>
          </div>
          <button 
            onClick={() => setShowNotification(false)}
            className="text-zinc-500 hover:text-zinc-300 text-xs font-bold px-1"
          >
            ×
          </button>
        </div>
      )}

      {/* 2. Sticky Mobile Bottom CTA Bar (Only visible on sm/md screens) */}
      <div className="fixed bottom-0 inset-x-0 bg-zinc-950/90 backdrop-blur-md border-t border-zinc-800 p-3 flex gap-2 z-40 md:hidden justify-between">
        <a 
          href="tel:+393444100402"
          className="flex-1 bg-zinc-900 border border-zinc-800 text-white py-3 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>{t.ctaCall}</span>
        </a>
        <a 
          href="https://wa.me/393444100402?text=Ciao%20XO,%20vorrei%20informazioni%20per%20riparare%20il%20mio%20dispositivo"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95"
        >
          <MessageSquare className="w-4 h-4" />
          <span>{t.ctaWhatsApp}</span>
        </a>
        <button 
          onClick={onBookClick}
          className="flex-1 bg-brand-blue hover:bg-zinc-200 text-zinc-950 py-3 px-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-zinc-950" />
          <span>{t.navBookNow.split(' ')[0]}</span>
        </button>
      </div>

      {/* 3. Desktop Floating Side Controls (Sticky on right margins) */}
      <div className="fixed bottom-8 right-8 z-40 hidden md:flex flex-col gap-3">
        {/* Call Now button */}
        <a 
          href="tel:+393444100402" 
          title="Chiama Ora"
          className="w-12 h-12 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 rounded-full flex items-center justify-center text-white shadow-2xl transition-all hover:scale-115"
        >
          <Phone className="w-5 h-5 text-emerald-400" />
        </a>

        {/* WhatsApp direct floating button */}
        <a 
          href="https://wa.me/393444100402?text=Ciao%20XO,%20vorrei%20informazioni%20per%20riparare%20il%20mio%20dispositivo" 
          target="_blank" 
          rel="noopener noreferrer"
          title="WhatsApp Assistenza"
          className="w-12 h-12 bg-emerald-600 hover:bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-2xl transition-all hover:scale-115"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        {/* Book appointment button */}
        <button 
          onClick={onBookClick}
          title="Prenota Riparazione"
          className="w-12 h-12 bg-brand-blue hover:bg-zinc-200 rounded-full flex items-center justify-center text-zinc-950 shadow-2xl transition-all hover:scale-115 cursor-pointer"
        >
          <Calendar className="w-5 h-5 text-zinc-950" />
        </button>
      </div>
    </>
  );
}
