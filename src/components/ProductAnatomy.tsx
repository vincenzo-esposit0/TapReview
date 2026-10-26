import React, { useState } from 'react';
import { ShieldCheck, Radio, Droplets, Sun } from 'lucide-react';
import { Reveal, SectionHeader } from './ui';

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
          name: 'Packaging Elegante & Guida all\'Uso',
          desc: 'Incluso nella confezione speciale rigida con consigli strategici per massimizzare il tasso di risposta dei clienti.'
        }
      ],
      specs: [
        { label: 'Contenuto', val: '1 Espositore A6 + 2 Smart Card Tascabili' },
        { label: 'Sconto Bundle', val: 'Risparmio del 29% rispetto all\'acquisto singolo' },
        { label: 'Configurazione', val: 'Gratuita e pronta all\'uso' },
        { label: 'Garanzia', val: '30 Giorni Soddisfatti o Rimborsati' }
      ]
    }
  };

  const current = anatomyDetails[activeProduct];

  const tabs: { id: keyof typeof anatomyDetails; label: string }[] = [
    { id: 'espositore', label: 'Espositore' },
    { id: 'card', label: 'Smart Card' },
    { id: 'kit', label: 'Kit Business' }
  ];

  return (
    <section id="come-fatti" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Qualità costruttiva"
          title="Materiali premium, pensati per anni di utilizzo."
          description="Niente plastica economica o adesivi che si staccano: ecco cosa c’è dentro ogni dispositivo."
        />

        <div className="flex justify-center mt-10">
          <div className="inline-flex p-1.5 rounded-full bg-white border border-line" role="tablist">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={activeProduct === t.id}
                onClick={() => setActiveProduct(t.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-sm font-bold transition-colors ${
                  activeProduct === t.id ? 'bg-ink text-white' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <Reveal className="mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] bg-sand">
              <img key={current.image} src={current.image} alt={current.title} className="w-full h-full object-cover" loading="lazy" />
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-ink">
                <Radio className="w-3.5 h-3.5" /> Chip NFC NTAG215 · 13,56 MHz
              </span>
            </div>
            <dl className="grid grid-cols-2 gap-3">
              {current.specs.map((spec) => (
                <div key={spec.label} className="rounded-2xl bg-white border border-line p-4">
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-muted">{spec.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-ink">{spec.val}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl font-bold text-ink">{current.title}</h3>
            <p className="mt-2 text-ink-soft">{current.subtitle}</p>

            <ol className="mt-8 divide-y divide-line border-y border-line">
              {current.layers.map((layer) => (
                <li key={layer.num} className="flex gap-5 py-5">
                  <span className="font-display text-2xl font-bold text-star w-10 shrink-0">{layer.num}</span>
                  <div>
                    <h4 className="text-lg font-bold text-ink">{layer.name}</h4>
                    <p className="mt-1 text-[15px] text-ink-soft leading-relaxed">{layer.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { icon: <Droplets className="w-4 h-4" />, label: 'Impermeabile' },
                { icon: <Sun className="w-4 h-4" />, label: 'Resistente ai raggi UV' },
                { icon: <ShieldCheck className="w-4 h-4" />, label: 'Igienizzabile con alcol' }
              ].map((b) => (
                <span key={b.label} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-sand text-sm font-semibold text-ink">
                  {b.icon} {b.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
