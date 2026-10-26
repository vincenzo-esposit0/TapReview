import React from 'react';
import { CreditCard, QrCode, Smartphone, Zap, ShieldCheck, Sparkles, TrendingUp, Layers } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Zero Abbonamenti o Canoni',
      description: 'Nessun costo ricorrente né canoni mensili hidden. Acquisti il dispositivo hardware una sola volta ed è tuo per sempre con utilizzi illimitati.',
      badge: 'Acquisto Una Tantum'
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      title: 'Doppia Tecnologia NFC + QR Code',
      description: 'Compatibilità totale al 100% con tutti i modelli di smartphone iOS e Android. NFC istantaneo per il "Tap" e QR Code per scansione rapida.',
      badge: '100% Compatibile'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
      title: 'Pronto all\'Uso Senza Stress',
      description: 'Inserisci il nome della tua attività o il link della scheda Google Business: lo programmiamo noi gratuitamente prima di spedire!',
      badge: 'Setup Gratuito'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: 'Materiali Ultra Resistenti',
      description: 'Plexiglass acrilico rigido e PVC ad altissima resistenza. Lavabile, igienizzabile con alcol da cassa e resistente ai graffi o all\'usura quotidiana.',
      badge: 'Qualità Premium'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-red-400" />,
      title: '+300% Recensioni su Google Maps',
      description: 'Abbatte la barriera della pigrizia: i clienti soddisfatti lasciano 5 stelle in 5 secondi mentre pagano il conto o salutano.',
      badge: 'Crescita Garantita'
    },
    {
      icon: <CreditCard className="w-6 h-6 text-yellow-400" />,
      title: 'Versatilità da Banco e Tascabile',
      description: 'Scegli la versione da banco per la cassa e i tavoli, o la Smart Review Card formato carta di credito per consulenti e tecnici in mobilità.',
      badge: 'Da Banco & Tascabile'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900/60 relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <span>PERCHÉ SCEGLIERE TAPREVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Il modo più semplice ed efficace per moltiplicare le recensioni a 5 Stelle
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Sostituisci i vecchi e inefficaci biglietti di carta con una soluzione tecnologica elegante, duratura e immediata.
          </p>
        </div>

        {/* Benefits Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-slate-950 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                    {benefit.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-900/80 mt-4 flex items-center text-xs text-slate-500 gap-2">
                <Smartphone className="w-3.5 h-3.5 text-blue-500" />
                <span>Compatibile con iOS e Android</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
