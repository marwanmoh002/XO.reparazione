/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Smartphone, Tablet, Laptop, Watch, Gamepad2, Wrench, 
  Calendar, UserCheck, ShieldAlert, Sparkles, CheckCircle, 
  Upload, QrCode, MapPin, Clock, Phone, AlertTriangle 
} from 'lucide-react';
import { Language, BookingState } from '../types';
import { translations } from '../translations';

interface BookingSystemProps {
  lang: Language;
  prefilledCategory?: string;
  prefilledBrand?: string;
  prefilledRepair?: string;
  onBookingComplete?: () => void;
}

const CATEGORIES = [
  { id: 'smartphone', icon: Smartphone, label: { it: 'Smartphone', en: 'Smartphone', ar: 'هاتف ذكي' } },
  { id: 'tablet', icon: Tablet, label: { it: 'Tablet / iPad', en: 'Tablet / iPad', ar: 'تابلت / آيباد' } },
  { id: 'computer', icon: Laptop, label: { it: 'Computer / Mac', en: 'Laptop / Mac', ar: 'كمبيوتر / ماك' } },
  { id: 'wearable', icon: Watch, label: { it: 'Apple Watch / Smartwatch', en: 'Smartwatch', ar: 'ساعة ذكية' } },
  { id: 'gaming', icon: Gamepad2, label: { it: 'Console Giochi', en: 'Game Console', ar: 'جهاز ألعاب' } }
];

const BRANDS: Record<string, string[]> = {
  smartphone: ['Apple', 'Samsung', 'Xiaomi', 'Oppo', 'Google Pixel', 'Huawei', 'Motorola', 'Altro'],
  tablet: ['Apple iPad', 'Samsung Galaxy Tab', 'Lenovo Tab', 'Huawei MediaPad', 'Altro'],
  computer: ['Apple MacBook', 'ASUS', 'HP', 'Dell', 'Lenovo', 'Acer', 'Altro'],
  wearable: ['Apple Watch', 'Samsung Galaxy Watch', 'Huawei Watch', 'Garmin', 'Altro'],
  gaming: ['Sony PlayStation', 'Nintendo Switch', 'Microsoft Xbox', 'Altro']
};

const REPAIRS: Record<string, string[]> = {
  smartphone: ['Sostituzione Schermo / Vetro', 'Sostituzione Batteria', 'Riparazione Connettore Ricarica', 'Vetro Posteriore Laser', 'Riparazione Fotocamera', 'Danni da Acqua / Liquido', 'Face ID / Touch ID', 'Altro Guasto'],
  tablet: ['Vetro Touch Screen Crepato', 'Schermo LCD Interno Rotto', 'Cambio Batteria', 'Porta di Ricarica', 'Tasti / Audio', 'Altro'],
  computer: ['Schermo Retina / LCD', 'Tastiera / Trackpad', 'Batteria Esaurita', 'Lavaggio Ossidazione Liquidi', 'Rallentamento / Upgrade SSD', 'Altro'],
  wearable: ['Sostituzione Vetro Display', 'Sostituzione Batteria', 'Riparazione Sensori', 'Altro'],
  gaming: ['Porta HDMI Rotta (No Segnale)', 'Drift Analogici Controller', 'Surriscaldamento / Pulizia Ventole', 'Altro Guasto']
};

export default function BookingSystem({ 
  lang, 
  prefilledCategory, 
  prefilledBrand, 
  prefilledRepair,
  onBookingComplete 
}: BookingSystemProps) {
  const t = translations[lang];

  // Steps: 1 (Device/Brand), 2 (Repair/Model/Photo), 3 (Date/Time), 4 (Contact), 5 (Success Receipt)
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingState>({
    category: prefilledCategory || 'smartphone',
    brand: prefilledBrand || 'Apple',
    model: '',
    repairType: prefilledRepair || 'Sostituzione Schermo / Vetro',
    description: '',
    preferredDate: '',
    preferredTime: '',
    name: '',
    email: '',
    phone: '',
    agreedToTerms: false,
    uploadedPhoto: null
  });

  const [dragOver, setDragOver] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  // Sync pre-filled state from props
  useEffect(() => {
    if (prefilledCategory || prefilledBrand || prefilledRepair) {
      setFormData(prev => ({
        ...prev,
        category: prefilledCategory || prev.category,
        brand: prefilledBrand || prev.brand,
        repairType: prefilledRepair || prev.repairType
      }));
      setStep(2); // directly jump to step 2 for premium user experience
    }
  }, [prefilledCategory, prefilledBrand, prefilledRepair]);

  const handleCategorySelect = (catId: string) => {
    const brands = BRANDS[catId] || [];
    const repairsList = REPAIRS[catId] || [];
    setFormData(prev => ({
      ...prev,
      category: catId,
      brand: brands[0] || 'Altro',
      repairType: repairsList[0] || 'Altro'
    }));
    setStep(2);
  };

  const handleBrandSelect = (br: string) => {
    setFormData(prev => ({ ...prev, brand: br }));
  };

  const handleNextStep = () => {
    if (step === 2) {
      // Validate model
      if (!formData.model.trim()) {
        alert(lang === 'it' ? "Per favore, inserisci il modello del tuo dispositivo." : "Please enter your device model.");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      // Validate date/time
      if (!formData.preferredDate || !formData.preferredTime) {
        alert(lang === 'it' ? "Seleziona sia la data che l'orario." : "Please select both date and time.");
        return;
      }
      setStep(4);
    } else if (step === 4) {
      // Validate contacts
      if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
        alert(lang === 'it' ? "Compila tutti i campi di contatto richiesti." : "Please fill out all required contact fields.");
        return;
      }
      if (!formData.agreedToTerms) {
        alert(lang === 'it' ? "È necessario acconsentire al trattamento dei dati personali." : "You must agree to the privacy policy.");
        return;
      }
      // Generate simulated receipt & complete
      setStep(5);
      if (onBookingComplete) onBookingComplete();
    }
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotoPreview(reader.result as string);
        setFormData(prev => ({ ...prev, uploadedPhoto: file.name }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotoPreview(reader.result as string);
        setFormData(prev => ({ ...prev, uploadedPhoto: file.name }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Generate date options (next 7 days, skip Sundays)
  const getDateOptions = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 8; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      if (d.getDay() !== 0) { // skip Sunday
        dates.push(d);
      }
    }
    return dates;
  };

  const timeSlots = [
    "09:15 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00",
    "13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00",
    "17:00 - 18:00", "18:00 - 19:00"
  ];

  return (
    <div id="booking-wizard-container" className="max-w-3xl mx-auto glass rounded-3xl border border-zinc-800 shadow-2xl p-6 md:p-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-brand-electric to-transparent"></div>

      {/* Progress Header */}
      {step < 5 && (
        <div className="mb-8">
          <div className="flex justify-between text-xs text-zinc-500 font-mono mb-3">
            <span>STEP {step} OF 4</span>
            <span className="text-brand-electric uppercase tracking-widest font-semibold">
              {step === 1 && t.bookingStep1}
              {step === 2 && t.bookingStep2}
              {step === 3 && t.bookingStep4}
              {step === 4 && t.bookingStep5}
            </span>
          </div>
          <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden flex gap-0.5">
            {[1, 2, 3, 4].map((s) => (
              <div 
                key={s} 
                className={`h-full flex-1 transition-all duration-300 ${
                  s <= step ? 'bg-brand-blue' : 'bg-zinc-800'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* STEP 1: DEVICE CATEGORY & BRAND SELECT */}
      {step === 1 && (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold font-display text-white">{t.bookingTitle}</h3>
            <p className="text-zinc-400 text-sm mt-1">{t.bookingSubtitle}</p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-3">{t.bookingSelectDevice}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-brand-blue/45 transition-all group hover:scale-[1.03] cursor-pointer"
                  >
                    <Icon className="w-8 h-8 text-zinc-400 group-hover:text-brand-electric transition-colors mb-2" />
                    <span className="text-xs font-medium text-zinc-300 text-center">{cat.label[lang]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: BRAND, MODEL & REPAIR DETAILS */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-3">
              {lang === 'it' ? "Seleziona il Marchio" : "Select Brand"}
            </h4>
            <div className="flex flex-wrap gap-2">
              {(BRANDS[formData.category] || []).map((br) => (
                <button
                  key={br}
                  onClick={() => handleBrandSelect(br)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                    formData.brand === br
                      ? 'bg-brand-blue text-zinc-950 border-brand-blue font-extrabold shadow-lg'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                  }`}
                >
                  {br}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">
                {lang === 'it' ? "Inserisci il Modello Esatto" : "Exact Model"} *
              </label>
              <input
                type="text"
                required
                value={formData.model}
                onChange={(e) => setFormData(prev => ({ ...prev, model: e.target.value }))}
                placeholder="Es. iPhone 14 Pro, Samsung Galaxy S23 Ultra"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-electric"
              />
              <span className="text-[10px] text-zinc-500 mt-1 block">
                {lang === 'it' ? "Troverai il codice modello nelle impostazioni del telefono." : "Check phone settings to find exact model code."}
              </span>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">
                {t.bookingSelectRepair}
              </label>
              <select
                value={formData.repairType}
                onChange={(e) => setFormData(prev => ({ ...prev, repairType: e.target.value }))}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-electric"
              >
                {(REPAIRS[formData.category] || []).map((rep) => (
                  <option key={rep} value={rep}>{rep}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">
              {t.bookingDescribeIssue}
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={2}
              placeholder={lang === 'it' ? "Descrivi brevemente cosa è successo (es. caduto dalle scale, bagnato con caffè, microfono gracchiante...)" : "Describe briefly what happened..."}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-electric"
            />
          </div>

          {/* Drag & Drop Photo Upload */}
          <div>
            <label className="block text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">
              {t.bookingUploadPhoto}
            </label>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-6 text-center transition-all flex flex-col items-center justify-center cursor-pointer ${
                dragOver ? 'border-brand-electric bg-brand-blue/5' : 'border-zinc-800 bg-zinc-950 hover:border-zinc-700'
              }`}
              onClick={() => document.getElementById('file-upload-input')?.click()}
            >
              <input 
                id="file-upload-input"
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
              {photoPreview ? (
                <div className="space-y-2">
                  <img src={photoPreview} alt="Damage preview" className="w-24 h-24 object-cover rounded-lg mx-auto border border-zinc-800" />
                  <p className="text-xs text-brand-electric font-medium">{formData.uploadedPhoto}</p>
                  <p className="text-[10px] text-zinc-500">{lang === 'it' ? "Clicca per caricare un'altra foto" : "Click to replace photo"}</p>
                </div>
              ) : (
                <>
                  <Upload className="w-8 h-8 text-zinc-500 mb-2" />
                  <p className="text-xs text-zinc-300 font-medium">
                    {lang === 'it' ? "Trascina qui la foto del danno o sfoglia" : "Drag & drop damage photo or browse"}
                  </p>
                  <p className="text-[10px] text-zinc-500 mt-1">PNG, JPG fino a 5MB</p>
                </>
              )}
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex justify-between pt-4">
            <button 
              onClick={handlePrevStep}
              className="px-6 py-3 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 rounded-xl text-sm font-medium transition-colors cursor-pointer"
            >
              {lang === 'it' ? "Indietro" : "Back"}
            </button>
            <button 
              onClick={handleNextStep}
              className="px-6 py-3 bg-brand-blue hover:bg-zinc-200 text-zinc-950 font-extrabold rounded-xl text-sm flex items-center gap-1.5 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>{lang === 'it' ? "Continua" : "Next"}</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: DATE & TIME SELECTION */}
      {step === 3 && (
        <div className="space-y-6">
          <div className="text-center">
            <h4 className="text-lg font-bold text-white flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5 text-brand-electric" />
              {lang === 'it' ? "Scegli il tuo Appuntamento Express" : "Choose Express Booking Slot"}
            </h4>
            <p className="text-zinc-400 text-xs mt-1">
              {lang === 'it' ? "Seleziona giorno e ora. Ripariamo in media in 30 minuti senza costi aggiuntivi." : "Select date and time. Repair takes 30 mins average with no extra cost."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date Grid */}
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">
                {t.bookingSelectDate}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {getDateOptions().map((date) => {
                  const dateStr = date.toISOString().split('T')[0];
                  const dayName = date.toLocaleDateString(lang === 'it' ? 'it-IT' : lang === 'en' ? 'en-US' : 'ar-EG', { weekday: 'short' });
                  const dayNum = date.getDate();
                  const monthName = date.toLocaleDateString(lang === 'it' ? 'it-IT' : lang === 'en' ? 'en-US' : 'ar-EG', { month: 'short' });

                  return (
                    <button
                      key={dateStr}
                      onClick={() => setFormData(prev => ({ ...prev, preferredDate: dateStr }))}
                      className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                        formData.preferredDate === dateStr
                          ? 'bg-brand-blue text-zinc-950 border-brand-blue font-extrabold shadow-lg'
                          : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-mono tracking-wider">{dayName}</span>
                      <span className="text-lg font-bold my-0.5">{dayNum}</span>
                      <span className="text-[10px] uppercase font-mono">{monthName}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slot Grid */}
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2">
                {t.bookingSelectTime}
              </label>
              <div className="grid grid-cols-2 gap-2 h-[260px] overflow-y-auto pr-1">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setFormData(prev => ({ ...prev, preferredTime: slot }))}
                    className={`p-2.5 rounded-xl border text-xs font-mono text-center transition-all cursor-pointer ${
                      formData.preferredTime === slot
                        ? 'bg-brand-blue text-zinc-950 border-brand-blue font-extrabold shadow-md'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick same day notification banner */}
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex items-start gap-2.5">
            <CheckCircle className="w-4.5 h-4.5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <div className="text-xs text-emerald-300">
              <strong>{lang === 'it' ? 'Riparazione Prioritaria Riservata!' : 'Priority Slot Reserved!'}</strong> {lang === 'it' ? 'Il tuo ricambio sarà tenuto da parte per questo giorno e orario.' : 'Your spare part will be secured and reserved for this specific slot.'}
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex justify-between pt-4">
            <button 
              onClick={handlePrevStep}
              className="px-6 py-3 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 rounded-xl text-sm font-medium transition-colors cursor-pointer"
            >
              {lang === 'it' ? "Indietro" : "Back"}
            </button>
            <button 
              onClick={handleNextStep}
              className="px-6 py-3 bg-brand-blue hover:bg-zinc-200 text-zinc-950 font-extrabold rounded-xl text-sm flex items-center gap-1.5 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>{lang === 'it' ? "Continua" : "Next"}</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: CUSTOMER CONTACT DETAILS */}
      {step === 4 && (
        <div className="space-y-6">
          <div className="text-center">
            <h4 className="text-lg font-bold text-white flex items-center justify-center gap-2">
              <UserCheck className="w-5 h-5 text-brand-electric" />
              {t.bookingContactDetails}
            </h4>
            <p className="text-zinc-400 text-xs mt-1">
              {lang === 'it' ? "Inserisci i tuoi recapiti per ricevere la conferma immediata della prenotazione." : "Provide contacts to receive immediate booking verification."}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-500 tracking-wider mb-1">
                {lang === 'it' ? "Nome e Cognome" : "Full Name"} *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Es. Mario Rossi"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-electric"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-500 tracking-wider mb-1">
                  {lang === 'it' ? "Numero di Telefono / WhatsApp" : "Phone / WhatsApp Number"} *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="Es. +39 347 1234567"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-electric"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-500 tracking-wider mb-1">
                  {lang === 'it' ? "Email" : "Email Address"} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Es. mario.rossi@gmail.com"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-electric"
                />
              </div>
            </div>

            {/* Terms and conditions */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 text-xs text-zinc-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreedToTerms}
                  onChange={(e) => setFormData(prev => ({ ...prev, agreedToTerms: e.target.checked }))}
                  className="mt-1 rounded border-zinc-800 bg-zinc-900 text-brand-blue focus:ring-brand-blue"
                />
                <span>
                  {lang === 'it' ? (
                    <>Acconsento al trattamento dei miei dati personali ai sensi dell'informativa sulla privacy di XO Riparazione per la gestione del servizio di riparazione richiesto (Regolamento UE 2016/679 - GDPR).</>
                  ) : (
                    <>I consent to the processing of my personal data under GDPR regulations to manage my repair request with XO Riparazione.</>
                  )}
                </span>
              </label>
            </div>
          </div>

          {/* Security details note */}
          <div className="bg-zinc-950 border border-zinc-850 rounded-xl p-4 flex gap-3 items-start">
            <ShieldAlert className="w-5 h-5 text-brand-electric mt-0.5 flex-shrink-0" />
            <div>
              <h5 className="text-xs font-semibold text-white">{lang === 'it' ? "Nessuna Perdita di Dati Garantita" : "Data Safety Guaranteed"}</h5>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                {lang === 'it' ? "Non resettiamo i dispositivi. I tuoi dati personali (foto, contatti, chat) rimangono protetti e inaccessibili ai tecnici." : "We do not reset devices. Your private photos, chats, and records remain strictly untouched and secure."}
              </p>
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex justify-between pt-4">
            <button 
              onClick={handlePrevStep}
              className="px-6 py-3 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 rounded-xl text-sm font-medium transition-colors cursor-pointer"
            >
              {lang === 'it' ? "Indietro" : "Back"}
            </button>
            <button 
              onClick={handleNextStep}
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-xl text-sm flex items-center gap-1.5 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>{t.ctaSubmitBooking}</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: BOOKING SUCCESS RECEIPT (High Conversion Value) */}
      {step === 5 && (
        <div className="space-y-8 animate-fade-in text-center">
          <div className="inline-flex items-center justify-center p-3.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 mb-2">
            <CheckCircle className="w-12 h-12" />
          </div>

          <div>
            <h3 className="text-3xl font-extrabold font-display text-white">{t.bookingSuccess}</h3>
            <p className="text-zinc-300 text-sm max-w-md mx-auto mt-2">
              {t.bookingSuccessMsg}
            </p>
          </div>

          {/* Simulated Ticket receipt */}
          <div className="max-w-md mx-auto bg-zinc-950 border border-zinc-850 rounded-2xl overflow-hidden shadow-2xl relative text-left">
            {/* Thread borders for ticket visual */}
            <div className="absolute top-1/2 -left-3 w-6 h-6 bg-brand-black border border-zinc-850 rounded-full z-10"></div>
            <div className="absolute top-1/2 -right-3 w-6 h-6 bg-brand-black border border-zinc-850 rounded-full z-10"></div>

            <div className="bg-brand-blue/10 px-5 py-4 border-b border-zinc-900 flex justify-between items-center">
              <span className="text-xs font-mono text-brand-electric font-semibold uppercase tracking-widest">XO REPAIR PASS</span>
              <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">TICKET #XO-{Math.floor(Math.random() * 90000) + 10000}</span>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wide block">{lang === 'it' ? "DISPOSITIVO" : "DEVICE"}</span>
                  <span className="text-sm font-semibold text-white mt-0.5 block">{formData.brand} {formData.model}</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wide block">{lang === 'it' ? "SERVIZIO" : "SERVICE"}</span>
                  <span className="text-sm font-semibold text-white mt-0.5 block">{formData.repairType}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wide block">{lang === 'it' ? "DATA SELEZIONATA" : "APPOINTMENT DATE"}</span>
                  <span className="text-sm font-semibold text-brand-electric mt-0.5 block">{formData.preferredDate}</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wide block">{lang === 'it' ? "ORARIO" : "SLOT TIME"}</span>
                  <span className="text-sm font-semibold text-brand-electric mt-0.5 block">{formData.preferredTime}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-dashed border-zinc-850 grid grid-cols-3 gap-2 items-center">
                <div className="col-span-2 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-brand-electric" />
                    <span>Via Padova 84, Milano</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <Clock className="w-3.5 h-3.5 text-brand-electric" />
                    <span>10:00 - 21:00 | Lun - Dom</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <Phone className="w-3.5 h-3.5 text-brand-electric" />
                    <span>+39 344 410 0402</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <QrCode className="w-16 h-16 text-zinc-300 bg-white p-1 rounded-lg shadow" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 max-w-sm mx-auto pt-2">
            <a 
              href="https://maps.app.goo.gl/m7kHLmEZgtafRUqDA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <MapPin className="w-4 h-4 text-zinc-300" />
              <span>{lang === 'it' ? "Apri in Google Maps" : "Open in Google Maps"}</span>
            </a>
            <button 
              onClick={() => {
                setFormData({
                  category: 'smartphone',
                  brand: 'Apple',
                  model: '',
                  repairType: 'Sostituzione Schermo / Vetro',
                  description: '',
                  preferredDate: '',
                  preferredTime: '',
                  name: '',
                  email: '',
                  phone: '',
                  agreedToTerms: false,
                  uploadedPhoto: null
                });
                setStep(1);
                setPhotoPreview(null);
              }}
              className="text-zinc-500 hover:text-zinc-300 text-xs font-mono underline"
            >
              {lang === 'it' ? "Prenota un'altra riparazione" : "Book another device repair"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
