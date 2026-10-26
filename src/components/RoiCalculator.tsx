import React, { useState } from 'react';
import { Calculator, TrendingUp, Users, Star, Sparkles, ArrowRight } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [dailyClients, setDailyClients] = useState<number>(45);
  const [tapRatePercentage, setTapRatePercentage] = useState<number>(15);

  // Math calculations
  const monthlyClients = dailyClients * 26; // 26 working days average
  const monthlyReviews = Math.round(monthlyClients * (tapRatePercentage / 100));
  const yearlyReviews = monthlyReviews * 12;
  const estimatedRevenueBoost = Math.round(monthlyReviews * 18); // ~18€ average revenue boost per new 5-star review impact

  return (
    <section id="calcolatore" className="py-16 sm:py-24 bg-slate-900/50 relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <Calculator className="w-3.5 h-3.5 text-blue-400" />
            <span>CALCOLATORE DI IMPATTO BUSINESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Calcola Quante Recensioni Guadagnerai Ogni Mese
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Sposta i cursori in base al volume della tua attività e scopri il potenziale di crescita del tuo profilo Google Maps.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="mt-12 max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sliders Input Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Slider 1: Daily Clients */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold text-slate-200">
                <label className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>Clienti / Coperti serviti al giorno:</span>
                </label>
                <span className="text-xl font-bold text-blue-400 font-mono bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-500/20">
                  {dailyClients} clienti/giorno
                </span>
              </div>
              
              <input
                type="range"
                min={10}
                max={250}
                step={5}
                value={dailyClients}
                onChange={(e) => setDailyClients(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>10 clienti</span>
                <span>125 clienti</span>
                <span>250+ clienti</span>
              </div>
            </div>

            {/* Slider 2: Conversion Tap Rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold text-slate-200">
                <label className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span>Stima di clienti che faranno il Tap (NFC/QR):</span>
                </label>
                <span className="text-xl font-bold text-yellow-400 font-mono bg-yellow-500/10 px-3 py-1 rounded-lg border border-yellow-500/20">
                  {tapRatePercentage}%
                </span>
              </div>

              <input
                type="range"
                min={5}
                max={40}
                step={1}
                value={tapRatePercentage}
                onChange={(e) => setTapRatePercentage(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>5% (Conservativo)</span>
                <span>20% (Standard)</span>
                <span>40% (Staff Proattivo)</span>
              </div>
            </div>

            {/* Explanatory note */}
            <p className="text-xs text-slate-400 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              💡 <strong>Consiglio strategico:</strong> I ristoranti e i locali che invitano proattivamente il cliente durante il pagamento ("Se ti è piaciuta la serata, ti basta un tap sull'espositore!") raggiungono tassi di conversione superiori al 25%.
            </p>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6 text-center shadow-xl">
            
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              RISULTATI STIMATI
            </span>

            {/* Monthly Reviews Counter */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400">Recensioni 5★ Stimate al Mese</span>
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 font-display">
                +{monthlyReviews} <span className="text-sm font-semibold text-slate-300">/mese</span>
              </div>
              <span className="text-[11px] text-emerald-400 font-mono font-medium block pt-1">
                ➔ Circa <strong>+{yearlyReviews} recensioni</strong> all'anno
              </span>
            </div>

            {/* Estimated Revenue Boost */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-xs text-slate-400">Valore Stimato Visibilità Google</span>
              <div className="text-2xl font-bold text-white font-mono">
                +{estimatedRevenueBoost.toLocaleString('it-IT')}€ <span className="text-xs font-normal text-slate-400">/mese</span>
              </div>
              <p className="text-[10px] text-slate-400">
                Basato su studi di local SEO dove +100 recensioni aumentano le visite da Google Maps del +45%.
              </p>
            </div>

            <a
              href="#espositori"
              className="w-full py-3 px-4 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <span>Ordina Ora per la Tua Attività</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
