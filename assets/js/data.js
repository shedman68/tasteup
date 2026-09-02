/* ==========================================================================
   TasteUp — site content
   --------------------------------------------------------------------------
   This is the only file you need to touch to update the website's content.
   Everything on the page (facts, startups, partners, presenting logos) is
   rendered from the object below.

   >>> WHAT STILL NEEDS FILLING IN FOR 2026 is listed in the `tbd` block at
   >>> the top. While a `tbd` flag is true, that part of the page shows a
   >>> "wird bekannt gegeben" placeholder rather than 2025's information.
   >>> Enter the real content, set the flag to false, done.

   >>> THE DATE lives in `event.startsAt` / `event.endsAt`. The countdown,
   >>> the hero and the structured data for Google all read
   >>> from it, so it only ever needs changing in that one place.

   >>> TO ADD A STARTUP, copy one entry in the `startups` array.
   ========================================================================== */

window.TASTEUP = {
  /* -------------------------------------------------- 2026 OPEN QUESTIONS
     Set each flag to false once the real information is in. While a flag is
     true the page shows an honest "wird bekannt gegeben" placeholder instead
     of last year's data, so nothing outdated is ever published. */
  tbd: {
    times: false, // confirmed: 18:00 – 21:00
    venue: false, // confirmed: Brauerei Unser Bier
    startups: false, // confirmed: 2026 line-up below
    tickets: false // confirmed: eventfrog.ch/taste-up
  },

  /* ---------------------------------------------------------------- event */
  event: {
    name: "TasteUp",
    tagline: "Gründen · Geniessen · Vernetzen",
    claim:
      "Der Afterwork-Marktplatz für Craft Food & Beverage Startups, Foodies & Gastronomie",
    closing: "Probieren, entdecken & vernetzen. Alles an einem Abend.",

    /* CONFIRMED: 13 October 2026, 18:00 – 21:00.
       ISO 8601 with Swiss timezone offset (+02:00 summer, +01:00 winter). */
    startsAt: "2026-10-13T18:00:00+02:00",
    endsAt: "2026-10-13T21:00:00+02:00",

    /* CONFIRMED venue for 2026. */
    venue: {
      name: "Brauerei Unser Bier",
      street: "Gundeldingerstrasse 287",
      postalCode: "4053",
      city: "Basel",
      country: "CH",
      mapsUrl: "https://maps.app.goo.gl/FUinzqZwu4mQvghSA",
      note: "Im Gundeldingerfeld."
    },

    ticketUrl: "https://eventfrog.ch/taste-up",
    contactEmail: "info@startup-academy.ch",
    organiser: {
      name: "Verein Startup Academy Basel",
      street: "Picassoplatz 4",
      postalCode: "4052",
      city: "Basel",
      phone: "061 271 80 45",
      url: "https://startup-academy.ch/"
    },

    /* Shown in the "Mehr Details" dialog opened from the Was?-card. */
    about: [
      "TasteUp ist ein Ort des Austauschs, der Degustation und des Netzwerkens. Entdecke kulinarische Trends und degustiere in entspannter Afterwork-Atmosphäre neue Produkte. Lerne spannende Gründer:innen kennen, triff Programme wie Food Factory und Food Health und vernetze dich mit der Food & Beverage Startup Community.",
      "Ob als Foodie, Gastronom:in oder Startup – bei TasteUp findest du Inspiration, Geschmack und neue Kontakte."
    ]
  },

  /* --------------------------------------------------------- presenting row
     The sponsor/programme bubbles shown stacked above and below the
     "Line-up" title, ahead of the startup cards. Each entry is
     `{ name, logo, group, url, big }` (url and big optional): every bubble
     is a finished painted-oval graphic (colour, brush-stroke edge and text
     baked into the artwork) shown as-is.
       - group: "left" | "right" — "left" renders as the row of three above
         the title, "right" as the row of three below it (the names are
         legacy from when the two groups sat side by side).
       - big: true sizes that one bubble up above the rest.
     Leave `items` empty to fall back to a "folgen in Kürze" placeholder. */
  presenting: {
    items: [
      { name: "10+ Startups", logo: "./images/10 Startups.png", group: "left", big: true },
      { name: "Food Health", logo: "./images/foodhealth-badge.png", group: "left" },
      { name: "Food Factory", logo: "./images/food-factory-badge.png", group: "left", big: true },
      { name: "F&B Mentoring", logo: "./images/F&B Mentoring.png", group: "right" },
      { name: "Food Fotografie", logo: "./images/Food Fotografie.png", group: "right" },
      { name: "Event Floristik", logo: "./images/Event Floristik.png", group: "right" }
    ]
  },

  /* ---------------------------------------------------------------- speaker
     No keynote speaker for the 2026 edition. `speaker: null` removes the
     whole Keynote section and its navigation entry. To bring the section
     back, move an object like `previousSpeaker` below into `speaker`. */
  speaker: null,

  /* Archived — the 2025 keynote. Not rendered anywhere. */
  previousSpeaker: {
    name: "Jessica Manurung",
    role: "Keynote Speakerin",
    talk:
      "„Storytelling mit Geschmack: Die Kraft von Content in der Gastro-Welt“",
    image: "./images/speaker.png",
    bio: "Jessica Manurung, besser bekannt als @basel_eats, ist eine Food-Bloggerin aus Basel, die seit 2019 authentische Restaurant-Tipps auf Instagram und TikTok teilt. Neben ihrer Expertise in Marketing und Content Creation veröffentlichte sie 2023 das Basel Cookbook, lancierte 2024 den Bestie Cider und startete 2025 mit Basel Eats Together ein modernes Supper-Club-Konzept, das Menschen durch gutes Essen verbindet und die lokale Gastroszene erlebbar macht.",
    links: [
      { label: "@basel_eats", url: "https://instagram.com/basel_eats" },
      { label: "baseleats.ch", url: "https://www.baseleats.ch/" }
    ]
  },

  /* --------------------------------------------------------------- startups
     2026 line-up. No logo files supplied yet for any of these — each card
     falls back to a plain name tag in place of a logo until one is added. */
  startups: [
    {
      name: "RadicalCacao",
      logo: "./images/Radical Cacao.png",
      url: "https://radicalcacao.com/",
      text: "Beyond cacao, nothing. RadicalCacao makes 100% single-origin bean-to-bar chocolate, handcrafted in small batches in Basel. No sugar, no additives, just stone-ground cacao beans, left to speak for themselves."
    },
    {
      name: "WÜRZMEISTER",
      logo: "./images/wurzmeister-logo.jpg",
      url: "https://www.wuerzmeister.ch/",
      text: "Gewürze mit Herz. WÜRZMEISTER stellt eigene Gewürzmischungen in kleinen Bio-Chargen her - frisch gemahlen, ohne Zusatzstoffe, glutenfrei und vegan. Gleichzeitig bietet das Sozialunternehmen rund zwanzig Menschen in schwierigen Lebenslagen eine sinnstiftende Aufgabe."
    },
    {
      name: "Atelier Gourmetch",
      logo: "",
      url: "https://www.instagram.com/ateliergourmetch/?hl=de",
      text: "Süsse Erinnerung an Brasilien. Atelier Gourmetch fertigt in Basel handgemachte brasilianische Kuchen und Süssigkeiten auf Bestellung, allen voran den brasilianischen Klassiker Brigadeiro."
    },
    {
      name: "Mimmis Kombucha",
      logo: "./images/MIMMIS_Kombucha.png",
      url: "https://mimmis-kombucha.ch/",
      text: "Lebendig, spritzig, vegan. Das Team von Mimmis Kombucha braut in einer kleinen Basler Craft-Brauerei Kombucha aus biozertifiziertem Darjeeling- und Earl-Grey-Tee sowie Fairtrade-Rohrzucker. In einer zweiten Fermentation entstehen fruchtige Sorten wie Apfel & Rosmarin, Rhabarber & Chili oder Passionsfrucht."
    },
    {
      name: "Haferey",
      logo: "./images/Haferey_2025_black.png",
      url: "https://haferey.ch/",
      text: "Haferey – the hafer way. Samy Küng will mit seiner Basler Haferey den unterschätzten Hafer zum Trend-Food machen: Seine Haferbowls verkauft er an Basler Märkten im Gundeli und steht für eine bewusste Ernährung mitten im schnellen Alltag."
    },
    {
      name: "Kitchen Angel",
      logo: "./images/kitchen Angel Logo.png",
      url: "https://kitchenangel.ch/",
      text: "Kulinarik mit Herz & Verstand. Kitchen Angel ist Sarahs Herzensprojekt in Basel-Gundeli: ein Café- und Catering-Betrieb, der Menschen in herausfordernden Lebenslagen echte Arbeit mit Würde bietet. Für Events entstehen handgemachte Kreationen mit lokalen Zutaten – von Käse vom Milchhüsli beider Basel bis zu Bagels von Remi's."
    },
    {
      name: "Sauerteigfreude",
      logo: "./images/SauerteigFreude.png",
      url: "https://www.sauerteigfreude.ch/",
      text: "Sauerteig mit Geduld und Hingabe. Bei SauerteigFreude entsteht jede Woche frisches Sauerteigbrot aus Bio-Mehl – von Hand geformt und über viele Stunden fermentiert, bis sich Geschmack, Aroma und eine saftige Krume entwickeln. Wer das Handwerk selbst lernen möchte, wird in Fallones Workshops Schritt für Schritt dorthin begleitet: entspannt, in kleiner Runde und mit ganz viel SauerteigFreude."
    },
    {
      name: "Stielbruch (Event & Gastro Floristik)",
      logo: "./images/stielbruch logo.jpg",
      url: "https://stielbruch.ch/index.html",
      text: "Ethische Floristik. Stielbruch verzichtet komplett auf importierte Pestizid-Schnittblumen und kombiniert stattdessen handgefertigte Kunstblumen aus Brockenstuben mit lokal gefundenem Grünschnitt. Die Basler Sträusse werden per Velo geliefert, später wieder abgeholt, neu zusammengestellt und wiederverwendet – nachhaltige Floristik im lokalen Kreislauf für Gastronomie und Events."
    },
    {
      name: "Seraina Oppliger Fotografie (Food Fotografie)",
      logo: "./images/Seraina Oppliger Logo.png",
      url: "https://www.serainaoppliger.com/",
      text: "Bilder, die Appetit machen. Seraina Oppliger ist diplomierte Fotodesignerin HFP aus Basel und seit 2016 freischaffend, mit Fokus auf Food- und Still-Life-Fotografie für Werbung und Firmenkunden. Am TasteUp zeigt sie, wie aus feinen Zutaten ein Bild wird, das man am liebsten anbeissen möchte."
    }
  ],

  /* ---------------------------------------------------------- partner banner
     A small image banner shown just above Partnerschaften. Leave `image`
     empty (as now) and the section stays out of the page entirely; drop in
     an image path (and optionally a `url`) once there's content for it. */
  partnerBanner: {
    image: "",
    alt: "",
    url: ""
  },

  /* --------------------------------------------------------------- partners
     `url` is optional — leave it out and the logo renders without a link
     instead of pointing nowhere. */
  partners: [
    {
      role: "Veranstalter",
      name: "Startup Academy Schweiz",
      logo: "./images/startup academy.png",
      url: "https://startup-academy.ch/"
    },
    {
      role: "Location-Partner",
      name: "Unser Bier",
      logo: "./images/Unser-Bier.png",
      url: "https://www.unserbier.ch/"
    },
    {
      role: "Netzwerkpartner",
      name: "Food Health",
      logo: "./images/logo-foodhealth.png",
      url: "https://foodhealth.ch/"
    },
    {
      role: "Netzwerkpartner",
      name: "Food Factory",
      logo: "./images/Food Factory.png",
      url: "https://foodfactorybasel.ch/"
    }
  ]
};
