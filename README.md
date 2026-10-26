<div align="center">

# ⭐ TapReview

**Più recensioni Google a 5 stelle. Con un solo tocco.**

Landing page di vendita per espositori da banco e Smart Review Card **NFC + QR Code** che portano i clienti direttamente al modulo recensione Google di un'attività.

[**🌐 Vedi il sito live**](https://vincenzo-esposit0.github.io/TapReview/)

![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-7-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss&logoColor=white)
![Deploy](https://img.shields.io/badge/deploy-GitHub_Pages-222?logo=github)

</div>

---

## Il prodotto

I clienti soddisfatti raramente lasciano una recensione: devono cercare l'attività su Google Maps, trovare la scheda, aprire il modulo. TapReview elimina tutti questi passaggi.

1. **Il cliente avvicina lo smartphone** all'espositore o alla card (oppure inquadra il QR Code).
2. **Si apre subito** il modulo recensione della scheda Google dell'attività.
3. **Sceglie le stelle e pubblica.** Meno di cinque secondi, nessuna app da installare.

| Prodotto | Ideale per | Prezzo |
|---|---|---|
| **Espositore da banco** | Cassa, reception, tavoli | da 34,99 € |
| **Smart Review Card** | Professionisti e lavoro in mobilità | da 24,99 € |
| **Kit Business** (1 espositore + 2 card) | Attività con cassa e staff | 59,99 € |

Pagamento una tantum, nessun abbonamento, programmazione del chip inclusa.

## Caratteristiche del sito

- **Struttura orientata alla conversione**: promessa e prova sociale subito visibili, problema → soluzione, come funziona, prezzi, garanzia, FAQ e invito finale all'acquisto.
- **Catalogo con prezzi dinamici**: scelta di quantità e finitura, con prezzo, prezzo barrato e percentuale di sconto aggiornati in tempo reale.
- **Demo interattiva** del "tap" NFC che simula l'esperienza del cliente.
- **Calcolatore** delle recensioni mensili stimate in base al numero di clienti.
- **Modulo d'ordine** che si apre con il prodotto e la quantità già selezionati.
- **Mobile-first**, con una barra d'acquisto fissa sugli schermi piccoli.
- **Animazioni leggere** che rispettano l'impostazione `prefers-reduced-motion`.

## Tecnologie

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) per lo sviluppo e la build
- [Tailwind CSS 4](https://tailwindcss.com/) con design token definiti in `src/index.css`
- [Motion](https://motion.dev/) per le animazioni allo scroll
- [Lucide](https://lucide.dev/) per le icone

## Avvio rapido

Requisiti: **Node.js 22+**.

```bash
git clone https://github.com/vincenzo-esposit0/TapReview.git
cd TapReview
npm install
npm run dev
```

Il sito è disponibile su **http://localhost:3000/TapReview/**.

| Comando | Descrizione |
|---|---|
| `npm run dev` | Server di sviluppo con hot reload sulla porta 3000 |
| `npm run build` | Build di produzione nella cartella `dist/` |
| `npm run preview` | Anteprima locale della build di produzione |
| `npm run lint` | Controllo dei tipi TypeScript |

## Struttura del progetto

```
TapReview/
├── public/images/          # Foto dei prodotti
├── src/
│   ├── components/         # Sezioni della landing page e modali
│   │   ├── Hero.tsx
│   │   ├── ProductCatalog.tsx
│   │   ├── QuoteModal.tsx
│   │   └── ...
│   ├── data/products.ts    # Prodotti, prezzi, testimonianze e FAQ
│   ├── config.ts           # Impostazioni dei contatti (WhatsApp)
│   ├── App.tsx             # Ordine delle sezioni della pagina
│   └── index.css           # Design token (colori, font) e animazioni
├── .github/workflows/      # Deploy automatico su GitHub Pages
└── vite.config.ts
```

## Personalizzazione

### Prezzi e prodotti
Tutti i prodotti si trovano in [`src/data/products.ts`](src/data/products.ts). Per ogni prodotto si definiscono:

- `basePrice`: il prezzo in offerta per un pezzo;
- `originalPrice`: il prezzo pieno, mostrato barrato;
- `pricingTiers`: gli sconti per quantità.

Il prezzo "a partire da" mostrato in tutto il sito viene calcolato in automatico dal listino.

### Contatti WhatsApp
In [`src/config.ts`](src/config.ts) imposta `WHATSAPP_NUMBER` (in formato internazionale, senza `+`) e porta `WHATSAPP_ENABLED` a `true`. Finché resta a `false`, i bottoni WhatsApp sono visibili ma non cliccabili.

### Colori e font
I design token (`ink`, `paper`, `star`, …) sono definiti nel blocco `@theme` di [`src/index.css`](src/index.css) e si usano come normali classi Tailwind, per esempio `bg-ink` o `text-star`.

## Deploy

Ogni push sul branch `main` avvia il workflow [`deploy.yml`](.github/workflows/deploy.yml), che esegue la build e pubblica il sito su **GitHub Pages**.

Il sito è servito dal percorso `/TapReview/`, impostato come `base` in `vite.config.ts`. Se il repository viene rinominato o si usa un dominio personalizzato, quel valore va aggiornato.

## Roadmap

- [ ] Collegare il modulo d'ordine a un servizio di invio (email o CRM)
- [ ] Attivare il contatto WhatsApp con il numero reale
- [ ] Sostituire i contenuti dimostrativi con testimonianze e dati reali dei clienti
- [ ] Pagamento online al checkout

## Licenza

© TapReview. Tutti i diritti riservati. Codice, testi e immagini non possono essere riutilizzati senza autorizzazione.
