import React, { useState } from 'react';
import { Cpu, ShieldCheck, Layers, Sparkles, CheckCircle2, Wrench, Radio, Flame, Droplets, Sun } from 'lucide-react';

export const ProductAnatomy: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<'espositore' | 'card' | 'kit'>('espositore');

  const anatomyDetails = {
    espositore: {
      title: 'Espositore da Banco Smart NFC + QR Code',
      subtitle: 'Come è realizzato il display rigido per cassa e tavoli',
      image: `${import.meta.env.BASE_URL}images/product_anatomy_nfc_1793021942326.jpg`,
      layers: [
        {
          num: '01',
          name: 'Plexiglass Acrilico Rigido 3mm',
          desc: 'Struttura autoportante ad altissima trasparenza e finitura brillante (disponibile in Bianco e Nero Opaco). Resistente ad urti e graffi.'
        },
        {
          num: '02',
          name: 'Microchip NFC NTAG215 Integrato',
          desc: 'Chip NFC NXP ad elevata sensibilità (frequenza 13.56 MHz). Riconoscimento immediato in meno di 0.5 secondi da una distanza fino a 4 cm.'
        },
        {
          num: '03',
          name: 'Stampa UV Anti-Sbiadimento',
          desc: 'Grafica Google e stelle a 5 colori stampate ad altissima risoluzione con inchiostri UV polimerizzati. Lavabile con alcol da banco e detergenti.'
        },
        {
          num: '04',
          name: 'QR Code ad Alto Contrasto',
          desc: 'Incisore laser ad alta precisione per garantire la scansione immediata da parte di qualsiasi fotocamera o smartphone senza NFC.'
        }
      ],
      specs: [
        { label: 'Dimensioni', val: '10 x 15 cm (Formato A6)' },
        { label: 'Peso', val: '120g bilanciato e stabile' },
        { label: 'Materiale', val: 'Plexiglass PMMA vergine anti-ingiallimento' },
        { label: 'Durata Chip', val: 'Oltre 100.000 tap e garanzia a vita' }
      ]
    },
    card: {
      title: 'Smart Review Card Tascabile NFC',
      subtitle: 'Come è fatta la carta di credito smart tascabile',
      image: `${import.meta.env.BASE_URL}images/nfc_card_anatomy_1793021942368.jpg`,
      layers: [
        {
          num: '01',
          name: 'Nucleo in PVC Soft-Touch Opaco',
          desc: 'Formato standard CR80 (85.6 x 54 x 0.84 mm). Finitura opaca anti-impronta piacevole al tatto e resistente alle pieghe.'
        },
        {
          num: '02',
          name: 'Antenna NFC Integrata Sottovuoto',
          desc: 'Chip NTAG215 sigillato ermeticamente all\'interno del PVC. Impermeabile al 100% (Grado IP68) per uso in qualsiasi condizione.'
        },
        {
          num: '03',
          name: 'Incisione / Laminatura Metallizzata Gold & Stealth',
          desc: 'Logo Google e stelle in lamina dorata rilucente o finitura Total Black per un impatto visivo estremamente professionale.'
        },
        {
          num: '04',
          name: 'Codifica Unica & Protezione Scrittura',
          desc: 'Il chip viene codificato con il link diretto della tua scheda e protetto da modifiche accidentali tramite blocco hardware.'
        }
      ],
      specs: [
        { label: 'Formato', val: 'Standard Carta di Credito (85.6 x 54 mm)' },
        { label: 'Spessore', val: 'Solamente 0.84 mm (entra in ogni portafoglio)' },
        { label: 'Impermeabilità', val: 'Certificazione IP68 subacquea' },
        { label: 'Compatibilità', val: '100% iPhone (dall\'XS in poi) & Android' }
      ]
    },
    kit: {
      title: 'Kit Completo Smart Business (Bundle)',
      subtitle: 'La combinazione perfetta per cassa e mobilità',
      image: `${import.meta.env.BASE_URL}images/counter_display_white_black_1793016159574.jpg`,
      layers: [
        {
          num: '01',
          name: '1x Espositore da Banco per la Cassa',
          desc: 'Posizionato vicino al POS o alla cassa per raccogliere le recensioni dei clienti al momento del pagamento.'
        },
        {
          num: '02',
          name: '2x Smart Card Tascabili per Titolare & Staff',
          desc: 'In dotazione ai camerieri di sala, venditori o tecnici esterni per raccogliere recensioni al tavolo o a domicilio.'
        },
        {
          num: '03',
          name: 'Programmazione Unificata o Differenziata',
          desc: 'Possiamo collegare tutti i dispositivi alla stessa scheda Google o personalizzarli per punti vendita o reparti differenti.'
        },
        {
          num: '04',
          name: 'Pakaging Elegante & Guida all\'Uso',
          desc: 'Incluso nella confezione speciale rigida con consigli strategici per massimizzare il tasso di risposta dei clienti.'
        }
      ],
      specs: [
        { label: 'Contenuto', val: '1 Espositore A6 + 2 Smart Card Tascabili' },
        { label: 'Sconto Bundle', val: 'Risparmio del 28% rispetto all\'acquisto singolo' },
        { label: 'Configurazione', val: 'Gratuita e pronta all\'uso' },
        { label: 'Garanzia', val: '30 Giorni Soddisfatti o Rimborsati' }
      ]
    }
  };

  const current = anatomyDetails[activeProduct];

  return (
    <section id="come-fatti" className="py-16 sm:py-24 bg-slate-900/90 relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <Wrench className="w-3.5 h-3.5" />
            <span>INGEGNERIA & MATERIALI PREMIUM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Come Sono Fatti i Nostri Prodotti Promozionali
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Esplora nei dettagli l'anatomia, la tecnologia dei chip NFC e i materiali di alta qualità utilizzati per ciascuna delle 3 tipologie di prodotto.
          </p>

          {/* Product Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveProduct('espositore')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeProduct === 'espositore'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <span>1. Espositore da Banco</span>
            </button>

            <button
              onClick={() => setActiveProduct('card')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeProduct === 'card'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <span>2. Smart Review Card</span>
            </button>

            <button
              onClick={() => setActiveProduct('kit')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeProduct === 'kit'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <span>3. Kit Completo Business</span>
            </button>
          </div>
        </div>

        {/* Detailed Breakdown Card */}
        <div className="mt-12 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 aspect-[4/3] group shadow-2xl">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800 text-[11px] font-bold text-blue-400 flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>NTAG215 13.56 MHz</span>
              </div>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {current.specs.map((spec, i) => (
                <div key={i} className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-0.5">
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">{spec.label}</span>
                  <span className="text-xs font-bold text-white">{spec.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Layer Breakdown Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">ANATOMIA & COSTRUZIONE</span>
              <h3 className="text-2xl font-extrabold text-white font-display">{current.title}</h3>
              <p className="text-sm text-slate-400">{current.subtitle}</p>
            </div>

            <div className="space-y-4 pt-2">
              {current.layers.map((layer, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors flex items-start gap-4"
                >
                  <span className="text-xs font-black text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-lg font-mono shrink-0">
                    {layer.num}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">{layer.name}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resistance Badges */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Droplets className="w-4 h-4 text-blue-400" />
                <span>100% Impermeabile</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sun className="w-4 h-4 text-yellow-400" />
                <span>Resistente ai Raggi UV</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Deterioramento</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
