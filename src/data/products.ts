import { Product, Testimonial, FaqItem } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'espositore-banco-smart',
    title: 'Espositore da Banco Smart NFC + QR Code',
    subtitle: 'Display rigido da tavolo/cassa per ristoranti, bar e attività locali',
    category: 'espositore',
    description: 'Display espositore autoportante in plexiglass rigido ad alta trasparenza, progettato per essere posizionato sul banco cassa, sulla reception o sui tavoli. Con chip NFC integrato ad alta sensibilità e QR Code ad alta leggibilità, permette ai tuoi clienti di lasciarti una recensione Google a 5 stelle in meno di 2 secondi.',
    features: [
      'Tecnologia NFC "Tap & Review" integrata (NTAG215 professionale)',
      'QR Code in alta definizione inciso a laser per massima durata',
      'Zero abbonamenti o costi nascosti (acquisto una tantum)',
      'Collegamento diretto al tuo profilo Google Business',
      'Impermeabile, resistente ad alcol e detergenti per sanitizzazione',
      'Design elegante con logo Google e stelle di valutazione 5★'
    ],
    specs: {
      'Dimensioni': '10 x 15 cm (A6) o 15 x 21 cm (A5)',
      'Materiale': 'Acrilico Plexiglass rigido da 3mm anti-urto',
      'Compatibilità': '100% Smartphone iOS e Android',
      'Raggio NFC': 'Fino a 4 cm per un "tap" immediato',
      'Programmazione': 'Pre-configurato gratuitamente da noi con il tuo link'
    },
    targetAudience: ['Ristoranti & Pizzerie', 'Bar & Pub', 'Hotel & B&B', 'Centri Estetici & Parrucchieri', 'Negozi Fisici', 'Reception Studio Medico'],
    options: [
      { id: 'bianco', name: 'Bianco Candido Glossy', colorHex: '#FFFFFF', badge: 'Più venduto' },
      { id: 'nero', name: 'Nero Opaco Premium', colorHex: '#121212', badge: 'Elegante' }
    ],
    pricingTiers: [
      { quantity: 1, pricePerUnit: 34.99, totalPrice: 34.99, discountPercentage: 22 },
      { quantity: 3, pricePerUnit: 30.00, totalPrice: 89.99, discountPercentage: 33, isPopular: true },
      { quantity: 5, pricePerUnit: 28.00, totalPrice: 139.99, discountPercentage: 38 }
    ],
    basePrice: 34.99,
    originalPrice: 44.99,
    images: {
      bianco: `${import.meta.env.BASE_URL}images/hero_display_nfc_1793016159133.jpg`,
      nero: `${import.meta.env.BASE_URL}images/counter_display_white_black_1793016159574.jpg`,
      default: `${import.meta.env.BASE_URL}images/counter_display_white_black_1793016159574.jpg`
    },
    rating: 4.9,
    reviewsCount: 342
  },
  {
    id: 'smart-review-card',
    title: 'Smart Review Card Tascabile NFC',
    subtitle: 'Carta di credito smart per raccogliere recensioni in mobilità',
    category: 'card',
    description: 'Carta plastificata tascabile in formato standard CR80 (85.6 x 54 mm) dotata di tecnologia NFC invisibile integrata. Perfetta per professionisti, agenti e tecnici che lavorano direttamente a contatto con il cliente e vogliono raccogliere subito una recensione positiva prima di salutarsi.',
    features: [
      'Formato carta di credito ultrasottile con Chip NFC NTAG215',
      'Grafica "Review Us On Google" con stelle di valutazione dorate',
      'Superficie soft-touch opaca anti-graffio e resistente all\'acqua',
      'Portala sempre nel portafoglio, in tasca o nella custodia del telefono',
      'Funziona istantaneamente avvicinando lo smartphone del cliente',
      'Nessun software da installare, funziona nativamente su iOS e Android'
    ],
    specs: {
      'Dimensioni': '85.6 x 54 x 0.84 mm (Formato Carta di Credito)',
      'Materiale': 'PVC opaco ad alta densità con lamina NFC protetta',
      'Resistenza': 'Impermeabile IP68 e flessibile',
      'Cicli di lettura': 'Oltre 100.000 scansionate testate',
      'Configurazione': 'Modificabile in qualsiasi momento in futuro'
    },
    targetAudience: ['Liberi Professionisti', 'Agenti Immobiliari', 'Artigiani & Idraulici', 'Consulenti & Coach', 'Tecnici a Domicilio', 'Personal Trainer'],
    options: [
      { id: 'black-matte', name: 'Nero Opaco Stealth', colorHex: '#18181B', badge: 'Top Seller' },
      { id: 'white-clean', name: 'Bianco Puro Minimal', colorHex: '#FAFAFA' },
      { id: 'gold-edition', name: 'Luxury Gold Metal Finish', colorHex: '#EAB308', badge: 'Edizione Speciale' }
    ],
    pricingTiers: [
      { quantity: 1, pricePerUnit: 24.99, totalPrice: 24.99, discountPercentage: 24 },
      { quantity: 3, pricePerUnit: 21.66, totalPrice: 64.99, discountPercentage: 34 },
      { quantity: 5, pricePerUnit: 20.00, totalPrice: 99.99, discountPercentage: 39, isPopular: true },
      { quantity: 10, pricePerUnit: 18.00, totalPrice: 179.99, discountPercentage: 45 }
    ],
    basePrice: 24.99,
    originalPrice: 32.99,
    images: {
      'black-matte': `${import.meta.env.BASE_URL}images/smart_review_card_1793016159251.jpg`,
      'white-clean': `${import.meta.env.BASE_URL}images/smart_review_card_1793016159251.jpg`,
      'gold-edition': `${import.meta.env.BASE_URL}images/smart_review_card_1793016159251.jpg`,
      default: `${import.meta.env.BASE_URL}images/smart_review_card_1793016159251.jpg`
    },
    rating: 4.95,
    reviewsCount: 218
  },
  {
    id: 'bundle-business-kit',
    title: 'Kit Completo Smart Business (Espositore + 2 Card)',
    subtitle: 'La soluzione ideale per la tua cassa e per lo staff di sala o venditori',
    category: 'bundle',
    description: 'Il pack definitivo per coprire la tua attività a 360 gradi. Include 1 Espositore da Banco per la cassa o il banco accoglienza e 2 Smart Card Tascabili NFC per il titolare, i responsabili o gli operatori in mobilità.',
    features: [
      '1x Espositore da Banco Smart NFC + QR Code (A tua scelta Bianco o Nero)',
      '2x Smart Review Card Tascabili NFC',
      'Incisione / Programmazione gratuita di tutti i dispositivi',
      'Aumento garantito del tasso di conversione recensioni (+300%)',
      'Spedizione Espressa 24/48h Assicurata e Tracciata Gratuita',
      'Garanzia "100% Soddisfatti o Rimborsati" estesa a 30 giorni'
    ],
    specs: {
      'Contenuto Pack': '1 Espositore + 2 Card NFC Tascabili',
      'Valore Singoli Articoli': '84,97€ acquistati separatamente',
      'Risparmio Immediato': 'Quasi 25€ di sconto kit',
      'Configurazione': 'Unica per la stessa scheda o differenziata per punto vendita'
    },
    targetAudience: ['Ristoranti con servizio ai tavoli', 'Saloni Beauty & Spa', 'Studi Professionali con segreteria', 'Attività con venditori esterni'],
    options: [
      { id: 'kit-nero', name: 'Kit Nero Opaco Deluxe', colorHex: '#000000', badge: 'Consigliato' },
      { id: 'kit-bianco', name: 'Kit Bianco Candido Luxe', colorHex: '#FFFFFF' }
    ],
    pricingTiers: [
      { quantity: 1, pricePerUnit: 59.99, totalPrice: 59.99, discountPercentage: 29, isPopular: true },
      { quantity: 2, pricePerUnit: 55.00, totalPrice: 109.99, discountPercentage: 35 }
    ],
    basePrice: 59.99,
    originalPrice: 84.97,
    images: {
      'kit-nero': `${import.meta.env.BASE_URL}images/nfc_tap_smartphone_1793016159958.jpg`,
      'kit-bianco': `${import.meta.env.BASE_URL}images/nfc_tap_smartphone_1793016159958.jpg`,
      default: `${import.meta.env.BASE_URL}images/nfc_tap_smartphone_1793016159958.jpg`
    },
    rating: 5.0,
    reviewsCount: 189
  }
];

// Lowest single-unit price, shown as "da X€" across the site
export const STARTING_PRICE = Math.min(...PRODUCTS.map((p) => p.basePrice));

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Matteo Rossi',
    role: 'Titolare',
    company: 'Trattoria Il Vecchio Borgo',
    city: 'Milano',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'Avevamo meno di 40 recensioni in 3 anni perché i clienti dimenticavano sempre di lasciarla a casa. Mettendo 2 espositori sui banchi del bar e cassa, in 60 giorni siamo passati a 280 recensioni 5 stelle! Ora siamo primi su Google Maps nella nostra zona.',
    beforeStats: '38 Recensioni',
    afterStats: '310+ Recensioni',
    category: 'Ristorazione'
  },
  {
    id: '2',
    name: 'Laura Bianchi',
    role: 'Founder & Beautician',
    company: 'Luxe Beauty Lounge',
    city: 'Roma',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'Le clienti a fine trattamento usano subito la card o l\'espositore mentre pagano. È diventato un gesto naturale ed elegante. L\'investimento si è ripagato letteralmente dopo il primo pomeriggio di utilizzo.',
    beforeStats: '4.2 Voto medio',
    afterStats: '4.9 Voto medio (190 recensioni)',
    category: 'Beauty & Estetica'
  },
  {
    id: '3',
    name: 'Ing. Stefano Moretti',
    role: 'Consulente Immobiliare',
    company: 'Moretti Real Estate',
    city: 'Bologna',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    text: 'Tengo la Smart Review Card sempre nel portafoglio. Subito dopo un rogito o la firma di un contratto, la appoggio al telefono del cliente: il modulo 5 stelle si apre in un secondo. Indispensabile per chi fa personal branding.',
    beforeStats: '15 Recensioni sporadiche',
    afterStats: '94 Recensioni verificate',
    category: 'Professionisti'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Funziona davvero con tutti gli smartphone?',
    answer: 'Assolutamente sì! I nostri dispositivi integrano sia la tecnologia NFC (compatibile con oltre il 98% degli smartphone iPhone e Android moderni) sia un QR Code ad alta risoluzione. Se l\'NFC è disattivato o il cliente ha un telefono datato, basta inquadrare il QR Code con la fotocamera.',
    category: 'Generale'
  },
  {
    question: 'Ci sono abbonamenti o costi mensili?',
    answer: 'No! Nessun abbonamento, zero costi ricorrenti e nessun canone mensile. Paghi solo una volta l\'hardware e sarà tuo per sempre con uso illimitato.',
    category: 'Prezzi'
  },
  {
    question: 'Come configurate il link della mia attività Google?',
    answer: 'Durante l\'ordine puoi semplicemente scriverci il nome della tua attività o incollare il link della tua scheda Google Maps. I nostri tecnici provvederanno a programmare gratuitamente il chip NFC e stampare il QR Code prima della spedizione. Ti arriverà a casa già pronto all\'uso: lo tiri fuori dalla scatola ed è subito funzionante!',
    category: 'Configurazione'
  },
  {
    question: 'E se in futuro cambio la mia scheda Google o il link?',
    answer: 'Nessun problema. I nostri chip NFC sono riprogrammabili con qualsiasi smartphone dotato di lettore NFC (tramite app gratuite come NFC Tools). Se hai bisogno di aiuto, il nostro supporto clienti ti guiderà passo passo.',
    category: 'Assistenza'
  },
  {
    question: 'Quali sono i tempi e i costi di spedizione?',
    answer: 'Spediamo con Corriere Espresso Tracciato (SDA/DHL/BRT) in tutta Italia in 24/48 ore lavorative. La spedizione è GRATUITA per tutti gli ordini superiori a 49€. Per ordini inferiori, il costo di spedizione è di 4,90€.',
    category: 'Spedizione'
  },
  {
    question: 'Offrite la garanzia o il reso?',
    answer: 'Sì! Offriamo una garanzia estesa di 30 giorni "Soddisfatti o Rimborsati 100%". Se per qualsiasi motivo il dispositivo non dovesse soddisfare le tue aspettative, puoi restituircelo ed ottenere un rimborso completo.',
    category: 'Garanzia'
  }
];
