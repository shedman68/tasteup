/* ==========================================================================
   TasteUp — site content
   --------------------------------------------------------------------------
   This is the only file you need to touch to update the website's content.
   Everything on the page (facts, programme, startups, partners, FAQ) is
   rendered from the object below.

   >>> TO ANNOUNCE THE NEXT EDITION, EDIT `event.startsAt` / `event.endsAt`
   >>> AND `event.ticketUrl` BELOW. Everything else — the countdown, the
   >>> structured data for Google, the date shown in the hero, the FAQ answer
   >>> and the ticket buttons — updates itself from those values.

   >>> TO ADD A STARTUP, copy one entry in the `startups` array. `category`
   >>> must be one of the ids listed in `startupCategories`.
   ========================================================================== */

window.TASTEUP = {
  /* ---------------------------------------------------------------- event */
  event: {
    name: "TasteUp",
    tagline: "Gründen · Geniessen · Vernetzen",
    claim:
      "Der Afterwork-Marktplatz für Craft Food & Beverage Startups, Foodies & Gastronomie",
    closing: "Probieren, entdecken & vernetzen. Alles an einem Abend.",

    // ISO 8601 with Swiss timezone offset (+02:00 summer, +01:00 winter).
    startsAt: "2025-10-14T18:00:00+02:00",
    endsAt: "2025-10-14T21:00:00+02:00",

    venue: {
      name: "Literaturhaus Basel",
      street: "Barfüssergasse 3",
      postalCode: "4051",
      city: "Basel",
      country: "CH",
      mapsUrl: "https://maps.app.goo.gl/Zt3R4wRxnyoVk1Lc8",
      note: "Mitten in der Basler Innenstadt, direkt beim Barfüsserplatz."
    },

    ticketUrl:
      "https://eventfrog.ch/de/p/essen-trinken/tasteup-7369472601196881855.html",
    contactEmail: "info@startup-academy.ch",
    organiser: {
      name: "Verein Startup Academy Basel",
      street: "Picassoplatz 4",
      postalCode: "4052",
      city: "Basel",
      phone: "061 271 80 45",
      url: "https://startup-academy.ch/"
    },

    about: [
      "TasteUp ist ein Ort des Austauschs, der Degustation und des Netzwerkens. Entdecke kulinarische Trends und degustiere in entspannter Afterwork-Atmosphäre neue Produkte, lerne spannende Gründer:innen kennen und vernetze dich mit der Food & Beverage Startup Community.",
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
      text: "Ein kurzer, praxisnaher Input aus der Basler Foodszene – Wissen zum Mitnehmen statt langer Vortragsblock."
    },
    {
      icon: "users",
      title: "Inspiration & Networking",
      text: "Foodies, Gastronomiebetriebe und Gründer:innen an einem Ort. Fliessend, in entspannter Afterwork-Atmosphäre."
    },
    {
      icon: "book",
      title: "Food-Literatur zum Stöbern",
      text: "Eine Leseecke im Literaturhaus mit Kochbüchern und Food-Literatur zum Blättern zwischen zwei Degustationen."
    }
  ],

  /* --------------------------------------------------------------- figures
     All four numbers are counted from the programme and the startup list
     below, so they stay honest when you add or remove entries. */
  stats: [
    { value: "14", label: "Startups am Marktplatz", from: "startups" },
    { value: "2", label: "Degustationsrunden" },
    { value: "1", label: "Keynote" },
    { value: "3h", label: "Afterwork-Programm" }
  ],

  /* -------------------------------------------------------------- programme */
  agenda: [
    {
      from: "18:00",
      to: "18:10",
      title: "Begrüssung & Eröffnung",
      points: ["Kurzansprache durch Startup Academy und Lunch-Check"]
    },
    {
      from: "18:10",
      to: "19:10",
      title: "Marktplatz & Degustation – Runde 1",
      points: [
        "Startups präsentieren ihre Produkte an den Ständen",
        "Offene Verkostung für alle Gäste (Fingerfood, Getränkeproben etc.)",
        "Offener Austausch zwischen Publikum, Startups und Gastronomie"
      ]
    },
    {
      from: "19:15",
      to: "19:30",
      title: "Keynote: „Storytelling mit Geschmack“",
      points: [
        "Jessica Manurung, Gründerin von Basel Eats, zeigt, wie Food Startups und Gastronomiebetriebe mit authentischem Storytelling und kreativem Content-Marketing ihre Marke stärken, Emotionen wecken und Kund:innen nachhaltig binden können."
      ]
    },
    {
      from: "19:30",
      to: "21:00",
      title: "Marktplatz & Degustation – Runde 2 / Networking",
      points: [
        "Weitere Verkostungen, vertiefte Gespräche mit Startups",
        "Fliessendes Networking direkt am Marktplatz – Besucher:innen kommen und gehen nach eigenem Tempo",
        "Food-Literatur-Ecke"
      ]
    }
  ],

  /* ---------------------------------------------------------------- speaker */
  speaker: {
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
  ],

  /* -------------------------------------------------------------------- faq
     `{date}`, `{time}`, `{venue}`, `{ticket}` and `{mail}` are replaced with
     the live values from `event` above, so answers never go stale. */
  faq: [
    {
      q: "Was ist TasteUp genau?",
      a: "TasteUp ist ein Afterwork-Marktplatz: ein Ort des Austauschs, der Degustation und des Netzwerkens. Craft Food & Beverage Startups stellen ihre Produkte an Ständen vor, du probierst dich durch den Abend und kommst mit Gründer:innen, Foodies und Gastronomiebetrieben ins Gespräch."
    },
    {
      q: "Wann und wo findet TasteUp statt?",
      a: "{date}, {time}, im {venue}. Die Location liegt mitten in der Basler Innenstadt, direkt beim Barfüsserplatz – die Anfahrt mit dem ÖV ist am einfachsten."
    },
    {
      q: "Brauche ich ein Ticket?",
      a: "Ja, der Anlass ist ticketpflichtig. Tickets gibt es über {ticket}. Da die Zahl der Plätze durch die Location begrenzt ist, lohnt sich eine frühzeitige Anmeldung."
    },
    {
      q: "Sind die Degustationen im Ticket enthalten?",
      a: "Ja. An allen Ständen wird offen verkostet – Fingerfood, Getränkeproben und Produktneuheiten inklusive. Du bewegst dich frei über den Marktplatz und probierst, was dich interessiert."
    },
    {
      q: "Für wen ist der Anlass gedacht?",
      a: "Für alle drei Seiten des Tisches: Foodies, die Neues entdecken wollen; Gastronom:innen, die nach Produkten und Lieferant:innen suchen; und Gründer:innen, die ihr Produkt zeigen und sich vernetzen möchten."
    },
    {
      q: "Ich habe ein Food- oder Beverage-Startup. Kann ich ausstellen?",
      a: "Sehr gerne. Schreib uns an {mail} mit einer kurzen Beschreibung deines Produkts – wir melden uns mit den Details zur nächsten Ausgabe und zu den Standplätzen."
    },
    {
      q: "Können wir als Unternehmen Partner werden?",
      a: "Ja. TasteUp wird von der Startup Academy unter dem Patronat von Lunch-Check organisiert und lebt von Partnerschaften. Melde dich unter {mail}, dann besprechen wir die Möglichkeiten."
    },
    {
      q: "Wer steckt hinter TasteUp?",
      a: "TasteUp ist ein Anlass des Vereins Startup Academy Basel, Picassoplatz 4, 4052 Basel – unter dem Patronat von Lunch-Check Schweiz und in Partnerschaft mit dem Literaturhaus Basel / Café Kafka und Basel Eats."
    }
  ]
};
