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

   >>> TO ADD A STARTUP, copy one entry in the `startups` array. `category`
   >>> must be one of the ids listed in `startupCategories`.
   ========================================================================== */

window.TASTEUP = {
  /* -------------------------------------------------- 2026 OPEN QUESTIONS
     Set each flag to false once the real information is in. While a flag is
     true the page shows an honest "wird bekannt gegeben" placeholder instead
     of last year's data, so nothing outdated is ever published. */
  tbd: {
    times: false, // confirmed: 18:00 – 21:00
    venue: false, // confirmed: Brauerei Unser Bier
    agenda: true, // set false once the round count for 2026 is confirmed (gates the "Degustationsrunden" stat — no Programm section on the page right now)
    startups: true, // list below is the 2025 line-up, not the 2026 one
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
      "TasteUp ist ein Ort des Austauschs, der Degustation und des Netzwerkens. Entdecke kulinarische Trends und degustiere in entspannter Afterwork-Atmosphäre neue Produkte. Lerne spannende Gründer:innen kennen, triff Programme wie FoodFactory und FoodHealth und vernetze dich mit der Food & Beverage Startup Community.",
      "Ob als Foodie, Gastronom:in oder Startup – bei TasteUp findest du Inspiration, Geschmack und neue Kontakte."
    ]
  },

  /* ------------------------------------------------ what the evening gives
     Wording follows the official TasteUp poster. */
  highlights: [
    {
      icon: "sparkles",
      title: "Regionale Startups entdecken",
      text: "Craft Food & Beverage Gründer:innen aus der Region zeigen, woran sie gerade arbeiten – direkt am Stand, ohne Umwege."
    },
    {
      icon: "cup",
      title: "Unlimitiert degustieren",
      text: "Offene Verkostung an allen Ständen: Fingerfood, Getränkeproben und Neuheiten, so viel du probieren möchtest."
    },
    {
      icon: "mic",
      title: "Keynote mit Impact",
      /* `needs` gates a highlight on data being present. Shown only when a
         keynote speaker is actually booked. */
      needs: "speaker",
      text: "Ein kurzer, praxisnaher Input aus der Basler Foodszene – Wissen zum Mitnehmen statt langer Vortragsblock."
    },
    {
      icon: "users",
      title: "Inspiration & Networking",
      text: "Foodies, Gastronomiebetriebe und Gründer:innen an einem Ort. Fliessend, in entspannter Afterwork-Atmosphäre."
    }
    /* The 2025 line-up had a fifth highlight ("Food-Literatur zum Stöbern")
       about the reading corner at the old Literaturhaus venue. Removed
       outright rather than re-gated: it was specific to that location, and
       nothing about it carries over to Brauerei Unser Bier. */
  ],

  /* ------------------------------------------------------------ presenting
     "Presenting" section, directly below Was/Wann/Wo. Each entry is
     `{ name, logo, type, url }` (url is optional, for when one exists):
       - type: "badge" — a finished bubble graphic (colour, brush-stroke
         edge and text already baked into the artwork) shown as-is.
       - type: "logo"  — a flat logo mark with no bubble of its own, shown
         inside a plain white circle so it matches the badges around it.
     Leave `items` empty to fall back to a "folgen in Kürze" placeholder. */
  presenting: {
    title: "Presenting",
    lede: "Tauche mit uns in die regionale Food & Beverage Szene ein:",
    items: [
      { name: "10+ Startups", logo: "./images/10 Startups.png", type: "badge" },
      { name: "Food Factory", logo: "./images/Food Factory.png", type: "logo" },
      { name: "Event Floristik", logo: "./images/Event Floristik.png", type: "badge" },
      { name: "FoodHealth", logo: "./images/logo-foodhealth.png", type: "logo" },
      { name: "Food Fotografie", logo: "./images/Food Fotografie.png", type: "badge" },
      { name: "F&B Mentoring", logo: "./images/F&B Mentoring.png", type: "badge" }
    ]
  },

  /* --------------------------------------------------------------- figures
     The startup count is read live from the `startups` array below; the
     other three are static text, each gated by a `tbd` flag so nothing is
     claimed before it's actually confirmed. */
  stats: [
    { value: "14", label: "Startups am Marktplatz", from: "startups", needs: "startups" },
    { value: "2", label: "Degustationsrunden", needs: "agenda" },
    { value: "1", label: "Keynote", needs: "speaker" },
    { value: "3h", label: "Afterwork-Programm", needs: "times" }
  ],

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

  /* ------------------------------------------------------------- categories */
  startupCategories: [
    { id: "all", label: "Alle" },
    { id: "drinks", label: "Getränke" },
    { id: "sweets", label: "Süsses & Gebäck" },
    { id: "food", label: "Food" },
    { id: "foodtech", label: "FoodTech" },
    { id: "gastro", label: "Gastro & Catering" }
  ],

  /* --------------------------------------------------------------- startups */
  startups: [
    {
      name: "Passib Elixir",
      category: "drinks",
      logo: "./images/Passib Elixir Logo.png",
      url: "https://www.passibelixir.ch",
      text: "Celebrate with purity and style. Passib Elixir is a refined non-alcoholic sparkling wine, offering a premium alternative to traditional bubbly. Crafted in Switzerland from hibiscus, it is designed for conscious enjoyment."
    },
    {
      name: "Oh Crumble",
      category: "sweets",
      logo: "./images/Oh Crumble Logo.png",
      url: "https://www.ohcrumble.ch",
      text: "Oh Crumble bringt dir das ultimative Cookie-Erlebnis: 100 % vegan, handgemacht und voller Geschmack. Jeder Cookie vereint handwerkliche Qualität mit purer Genussfreude – ganz ohne tierische Produkte, aber mit jeder Menge Liebe."
    },
    {
      name: "Basler Boden",
      category: "drinks",
      logo: "./images/BaslerBoden logo.png",
      url: "https://www.instagram.com/baslerboden/",
      text: "Eine Basler Schnapsidee, die knallt. BaslerBoden vereint Minze, Frucht und eine ordentliche Portion Frechheit zu einem Likör, der mit Charakter und einem erfrischenden Kick begeistert."
    },
    {
      name: "Halestron Foods",
      category: "food",
      logo: "./images/halestron logo.png",
      url: "https://halestronfoods.ch/",
      text: "Fresh, authentic, and full of flavor. Halestron Foods stands for premium noodles made freshly in Switzerland with specially sourced flour and crafted on top-tier Japanese production machines."
    },
    {
      name: "AMARA Cacao",
      category: "sweets",
      logo: "./images/AMARA LOGO.png",
      url: "https://www.instagram.com/amara_cacao/",
      text: "Raw Cacao – pure, natural, energizing. Discover the power of nature with Amara Cacao. Their raw cacao is minimally processed to preserve its rich flavour, nutrients and natural energy."
    },
    {
      name: "Ingwer Manufaktur",
      category: "drinks",
      logo: "./images/Ingwer Manufaktur Logo.png",
      url: "https://www.ingwer-manufaktur.ch/",
      text: "Die Ingwer Manufaktur bringt dir die volle Kraft von Ingwer und Kurkuma ins Glas. In Basel frisch gepresst, zu 100 % bio und mit viel Liebe hergestellt. Natürlich, intensiv und belebend."
    },
    {
      name: "Maus Robotics",
      category: "foodtech",
      logo: "./images/maus robotics logo.png",
      url: "https://www.mausrobotics.com/en",
      text: "Frische Crêpes in 60 Sekunden. Mit Maus Robotics werden Crêpes frisch, vollautomatisch, aus regionalen Zutaten und mit wählbarer Füllung live zubereitet – auf Knopfdruck an Uni, Bahnhof oder Büro."
    },
    {
      name: "Nino Drinks",
      category: "drinks",
      logo: "./images/Logo_NINO_Schrift (1).png",
      url: "https://www.ninodrinks.com/",
      text: "Nino verwandelt alkoholfreien Genuss in ein prickelndes Erlebnis. Handwerklich komponierte Tees, Kräuter, Früchte und botanische Destillate vereinen sich zu vollmundigen Drinks – ob zu Speisen oder solo."
    },
    {
      name: "Remi's Bagels",
      category: "sweets",
      logo: "./images/Remis Bagels_ LOGO TRANSPARENCY 1-black.png",
      url: "https://www.remisbagels.ch/",
      text: "Remi's Bagels werden von Hand zu veganen Sauerteig-Bagels voller Charakter gerollt. Monatliche Spezialitäten mit frischen, regionalen Zutaten feiern die Jahreszeiten – kombiniert mit hausgemachtem Frischkäse."
    },
    {
      name: "Ting Yu Tea House",
      category: "drinks",
      logo: "./images/Ting Yu Logo.png",
      url: "https://tingyuteahouse.com/de",
      text: "Mit Ting Yu Tee in einen Zen-Moment eintauchen. Hochwertiger chinesischer Tee, direkt aus sorgfältig ausgewählten Provinzen importiert, schenkt Ruhe, Tradition und die Vielfalt der grünen chinesischen Gärten."
    },
    {
      name: "Zappa & Lotta",
      category: "sweets",
      logo: "./images/ZappaLotta Logo.png",
      url: "https://www.zappa-lotta.ch/",
      text: "Bei Zappa & Lotta trifft italienische Tradition auf Basler Handwerkskunst. Handgemachte Cantucci, ohne künstliche Aromen, mit feinen Gewürzen und nach original italienischem Rezept gebacken."
    },
    {
      name: "Vakeup",
      category: "gastro",
      logo: "./images/vakeup logo new.png",
      url: "https://vakeup.ch/",
      text: "Vakeup begeistert Gäste mit kreativen, pflanzlichen Geschmackserlebnissen. Vegane und vegetarische Menüs verwandeln jede Veranstaltung in ein kulinarisches Highlight – köstlich, innovativ und nachhaltig zugleich."
    },
    {
      name: "Awazé",
      category: "food",
      logo: "./images/Awaze Logo.png",
      url: "",
      text: "Awazé Saucen bietet ein authentisches Geschmackserlebnis mit handgemachten, natürlich konservierten Saucen und Würzmischungen, inspiriert von äthiopischen Wurzeln und verfeinert mit globalen Aromen."
    },
    {
      name: "Herbal Well",
      category: "drinks",
      logo: "./images/HerbalWell logo.png",
      url: "",
      text: "Herbal Well verbindet die alte Weisheit „Nahrung ist zugleich Heilmittel“ mit der Reinheit der Natur. Die Kräutertees richten sich besonders an Menschen im Büro, die mitten im Arbeitstag kleine Momente der Ruhe suchen."
    }
  ],

  /* --------------------------------------------------------------- partners */
  partners: [
    {
      role: "Patronat",
      name: "Lunch-Check Schweiz",
      logo: "./images/lunch check.png",
      url: "https://www.lunch-check.ch/"
    },
    {
      role: "Veranstalter",
      name: "Startup Academy Schweiz",
      logo: "./images/startup academy.png",
      url: "https://startup-academy.ch/"
    },
    {
      role: "Location-Partner",
      name: "Café Kafka",
      logo: "./images/café kafka.png",
      url: "https://www.literaturhaus-basel.ch/de/besuch/cafe-kafka/"
    },
    {
      role: "Medienpartner",
      name: "Basel Eats",
      logo: "./images/basel eats.png",
      url: "https://www.baseleats.ch/"
    }
  ]
};
