import React from 'react';
import { Smartphone, Zap, Star, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Avvicina lo Smartphone o Inquadra il QR',
      subtitle: 'Nessuna app da scaricare',
      description: 'Il cliente appoggia il proprio telefono (iPhone o Android) sull\'espositore sul banco cassa o sulla Smart Card, oppure inquadra il QR Code con la fotocamera.',
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      tag: 'NFC + QR Code'
    },
    {
      number: '02',
      title: 'Si Apre la Pagina Google della Tua Attività',
      subtitle: 'Apertura Istantanea in 1 Secondo',
      description: 'Senza bisogno di cercare la tua attività su Google Maps, lo smartphone apre direttamente la finestra ufficiale per inserire il giudizio.',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      tag: 'Direct Link 100%'
    },
    {
      number: '03',
      title: 'Il Cliente Lascia 5 Stelle e Salva',
      subtitle: 'In Meno di 5 Secondi',
      description: 'Il cliente seleziona le 5 stelle, lascia un breve commento e clicca su Pubblica. La tua reputazione e il posizionamento su Google volano!',
      icon: <Star className="w-8 h-8 text-emerald-400" />,
      tag: 'Recensione Pubblicata'
    }
  ];

  return (
    <section id="come-funziona" className="py-16 sm:py-24 bg-slate-950 relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <span>SEMPLICE & VELOCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Come Funziona in 3 Semplici Passaggi
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Abbatte il 99% dell’attrito: i tuoi clienti non dovranno più cercare la tua scheda manualmente su Google Maps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-8 relative flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
            >
              {/* Step Number Backdrop */}
              <div className="text-5xl font-extrabold text-slate-800/60 font-display absolute top-6 right-6 select-none group-hover:text-blue-500/20 transition-colors">
                {step.number}
              </div>

              <div className="space-y-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
                    {step.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white font-display leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-300">{step.subtitle}</span>
                {idx < 2 && <ArrowRight className="w-4 h-4 text-blue-500 hidden md:block" />}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-blue-900/30 border border-blue-800/50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Vuoi che programmiamo tutto noi prima della spedizione?</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Nel modulo di cassa inserisci il nome della tua attività: penseremo noi a configurare gratuitamente il chip NFC e il QR Code.
            </p>
          </div>
          <a
            href="#espositori"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors whitespace-nowrap shadow-lg shadow-blue-600/30 flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Scegli il tuo Dispositivo</span>
          </a>
        </div>

      </div>
    </section>
  );
};
