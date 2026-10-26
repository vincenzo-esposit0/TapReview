import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/products';
import { Star, CheckCircle, Quote, Building, TrendingUp } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('Tutte');

  const categories = ['Tutte', 'Ristorazione', 'Beauty & Estetica', 'Professionisti'];

  const filtered = filterCategory === 'Tutte'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === filterCategory);

  return (
    <section className="py-16 sm:py-24 bg-slate-950 relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <span>STORIE DI SUCCESSO VERIFICATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Oltre 2.400 Attività Hanno Scalato Google Maps
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Leggi le opinioni di ristoratori, commercianti e liberi professionisti che hanno scelto le nostre soluzioni hardware NFC.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  filterCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              <Quote className="w-10 h-10 text-slate-800 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
                </div>

                {/* Text Quote */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              {/* Quantified Before/After Proof Box */}
              <div className="mt-6 pt-4 border-t border-slate-800 space-y-4">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                  <div className="text-slate-400">
                    <span>Prima: </span>
                    <strong className="text-slate-300">{item.beforeStats}</strong>
                  </div>
                  <div className="text-emerald-400 font-bold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Dopo: {item.afterStats}</span>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                    </h4>
                    <p className="text-xs text-slate-400">
                      {item.role} · <strong className="text-slate-300">{item.company}</strong> ({item.city})
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
