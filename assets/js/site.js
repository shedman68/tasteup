/* ==========================================================================
   TasteUp — rendering + interactions
   Reads window.TASTEUP from data.js and builds the page from it.
   Plain script (no modules) so the site also works when opened from disk.
   ========================================================================== */

(function () {
  "use strict";

  var DATA = window.TASTEUP;
  if (!DATA) return;

  var TZ = "Europe/Zurich";

  /* ------------------------------------------------------------- helpers */

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function $$(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  /* Inline icon set — keeps the page free of an icon dependency. */
  var ICONS = {
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 7.8h.01"/>',
    arrow: '<path d="M5 12h13"/><path d="M12.5 6l6 6-6 6"/>'
  };

  function icon(name, size) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.8");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("aria-hidden", "true");
    if (size) {
      svg.setAttribute("width", size);
      svg.setAttribute("height", size);
    }
    svg.innerHTML = ICONS[name] || ICONS.info;
    return svg;
  }

  /* --------------------------------------------------------------- dates */

  var start = new Date(DATA.event.startsAt);
  var end = new Date(DATA.event.endsAt);
  var isUpcoming = start.getTime() > Date.now();

  function fmt(date, opts) {
    try {
      return new Intl.DateTimeFormat(
        "de-CH",
        Object.assign({ timeZone: TZ }, opts)
      ).format(date);
    } catch (err) {
      return date.toLocaleString("de-CH");
    }
  }

  var dateLong = fmt(start, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  var dateShort = fmt(start, { day: "numeric", month: "long", year: "numeric" });
  var timeRange =
    fmt(start, { hour: "2-digit", minute: "2-digit" }) +
    " – " +
    fmt(end, { hour: "2-digit", minute: "2-digit" }) +
    " Uhr";

  var venue = DATA.event.venue;
  var venueLine = venue.name + ", " + venue.street + ", " + venue.postalCode + " " + venue.city;

  /* ------------------------------------------------------ text injection */

  /* Anything still flagged in `tbd` shows a placeholder rather than last
     year's value, so the page never publishes information we don't have. */
  var TBD = DATA.tbd || {};

  var TOKENS = {
    date: dateShort,
    "date-long": dateLong,
    time: TBD.times ? "Uhrzeit folgt" : timeRange,
    "venue-name": TBD.venue ? "Location folgt" : venue.name,
    "venue-address": TBD.venue
      ? "Die neue Location geben wir in Kürze bekannt."
      : venue.street + ", " + venue.postalCode + " " + venue.city,
    "venue-note": TBD.venue ? "" : venue.note,
    "venue-line": TBD.venue ? "Location wird noch bekannt gegeben" : venueLine,
    claim: DATA.event.claim,
    tagline: DATA.event.tagline,
    closing: DATA.event.closing,
    email: DATA.event.contactEmail,
    year: String(new Date().getFullYear())
  };

  function injectText() {
    $$("[data-tu]").forEach(function (node) {
      var key = node.getAttribute("data-tu");
      if (TOKENS[key] == null) return;
      if (TOKENS[key] === "") {
        node.remove();
        return;
      }
      node.textContent = TOKENS[key];
    });

    $$("[data-tu-href]").forEach(function (node) {
      var key = node.getAttribute("data-tu-href");
      if (key === "ticket") node.href = DATA.event.ticketUrl;
      if (key === "maps") node.href = venue.mapsUrl;
      if (key === "mail") node.href = "mailto:" + DATA.event.contactEmail;
    });

    /* No confirmed venue means no map to point at. */
    if (TBD.venue) {
      $$("[data-tu-maps]").forEach(function (node) {
        node.remove();
      });
    }
  }

  /* --------------------------------------------- upcoming vs. past event */

  function renderEventState() {
    var countdown = $("#countdown");
    var ticketsLive = !TBD.tickets && !!DATA.event.ticketUrl && isUpcoming;

    if (countdown) {
      if (isUpcoming) startCountdown(countdown);
      else countdown.hidden = true;
    }

    /* Without a live ticket shop, every ticket button becomes a way to get
       in touch instead — never a dead link. */
    if (ticketsLive) return;

    $$("[data-tu-ticket]").forEach(function (link) {
      link.href =
        "mailto:" +
        DATA.event.contactEmail +
        "?subject=" +
        encodeURIComponent("TasteUp " + start.getFullYear() + " – auf dem Laufenden bleiben");
      link.removeAttribute("target");
      link.removeAttribute("rel");
      var label = $(".btn__label", link);
      (label || link).textContent = isUpcoming
        ? "Auf dem Laufenden bleiben"
        : "Infos zur nächsten Ausgabe";
    });
  }

  function startCountdown(root) {
    var units = [
      { key: "days", label: "Tage" },
      { key: "hours", label: "Std." },
      { key: "minutes", label: "Min." },
      { key: "seconds", label: "Sek." }
    ];

    root.hidden = false;
    root.textContent = "";

    var values = {};
    units.forEach(function (unit) {
      var box = el("div", "countdown__unit");
      var num = el("span", "countdown__num", "–");
      box.appendChild(num);
      box.appendChild(el("span", "countdown__label", unit.label));
      root.appendChild(box);
      values[unit.key] = num;
    });

    function tick() {
      var diff = start.getTime() - Date.now();
      if (diff <= 0) {
        window.clearInterval(timer);
        root.hidden = true;
        return;
      }
      var s = Math.floor(diff / 1000);
      values.days.textContent = Math.floor(s / 86400);
      values.hours.textContent = pad(Math.floor(s / 3600) % 24);
      values.minutes.textContent = pad(Math.floor(s / 60) % 60);
      values.seconds.textContent = pad(s % 60);
    }

    function pad(n) {
      return n < 10 ? "0" + n : String(n);
    }

    tick();
    var timer = window.setInterval(tick, 1000);
  }

  /* ------------------------------------------------------------- keynote
     No speaker in the data means no Keynote section and no nav entry. */

  function renderKeynote() {
    var section = $("#keynote");
    var speaker = DATA.speaker;

    if (!section) return;

    if (!speaker) {
      section.remove();
      $$("a[href='#keynote']").forEach(function (a) {
        a.remove();
      });
      return;
    }

    section.hidden = false;

    var body = $("#keynote-body");
    if (!body) return;

    if (speaker.image) {
      var portrait = el("div", "keynote__portrait");
      var img = el("img");
      img.src = speaker.image;
      img.alt = "Porträt von " + speaker.name;
      img.loading = "lazy";
      img.decoding = "async";
      portrait.appendChild(img);
      body.appendChild(portrait);
    }

    var text = el("div");
    text.appendChild(el("p", "keynote__role", speaker.role));
    text.appendChild(el("h3", null, speaker.name));
    if (speaker.talk) text.appendChild(el("p", "keynote__talk", speaker.talk));
    text.appendChild(el("p", null, speaker.bio));

    if (speaker.links && speaker.links.length) {
      var row = el("div", "btn-row");
      speaker.links.forEach(function (link, i) {
        var a = el("a", i === 0 ? "btn btn--ink" : "btn btn--outline", link.label);
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noopener";
        row.appendChild(a);
      });
      text.appendChild(row);
    }

    body.appendChild(text);
  }

  /* ------------------------------------------------------------ startups
     Cards run in one line and auto-scroll left (CSS animation on
     .marquee__track). The track holds the line-up twice back-to-back so
     the loop point is invisible; the second copy is built as its own set
     of nodes (not a clone) so its images still get their own load/error
     handling, and it's hidden from assistive tech and keyboard focus. */

  function renderStartups() {
    var grid = $("#startup-grid");
    if (!grid) return;

    function buildCard(startup, isDuplicate) {
      var card = el("article", "card");
      if (isDuplicate) card.setAttribute("aria-hidden", "true");

      var logoBox = el("div", "card__logo");
      if (startup.logo) {
        var img = el("img");
        img.src = startup.logo;
        img.alt = startup.name + " Logo";
        img.loading = "lazy";
        img.decoding = "async";
        img.addEventListener("error", function () {
          logoBox.removeChild(img);
          logoBox.appendChild(el("span", "card__logo-fallback", startup.name));
        });
        logoBox.appendChild(img);
      } else {
        logoBox.appendChild(el("span", "card__logo-fallback", startup.name));
      }
      card.appendChild(logoBox);

      card.appendChild(el("h3", null, startup.name));
      card.appendChild(el("p", null, startup.text));

      if (startup.url) {
        var link = el("a", "link");
        link.href = startup.url;
        link.target = "_blank";
        link.rel = "noopener";
        if (isDuplicate) link.tabIndex = -1;
        link.appendChild(document.createTextNode("Website besuchen"));
        link.appendChild(icon("arrow", 16));
        link.setAttribute("aria-label", "Website von " + startup.name + " besuchen");
        card.appendChild(link);
      } else {
        card.appendChild(el("span", "card__soon", "Website folgt bald"));
      }

      return card;
    }

    DATA.startups.forEach(function (startup) {
      grid.appendChild(buildCard(startup, false));
    });
    DATA.startups.forEach(function (startup) {
      grid.appendChild(buildCard(startup, true));
    });
  }

  /* ------------------------------------------------------ partner banner
     Stays out of the page (the <section> has `hidden`) until an image is
     set in DATA.partnerBanner. */

  function renderPartnerBanner() {
    var section = $("#partner-banner");
    var frame = $("#partner-banner-frame");
    var banner = DATA.partnerBanner;
    if (!section || !frame || !banner || !banner.image) return;

    section.hidden = false;

    var link = el(banner.url ? "a" : "div", "partner-banner__link");
    if (banner.url) {
      link.href = banner.url;
      link.target = "_blank";
      link.rel = "noopener";
    }

    var img = el("img");
    img.src = banner.image;
    img.alt = banner.alt || "";
    img.loading = "lazy";
    img.decoding = "async";
    link.appendChild(img);
    frame.appendChild(link);
  }

  /* ------------------------------------------------------------ partners */

  function renderPartners() {
    var root = $("#partners");
    if (!root) return;

    DATA.partners.forEach(function (partner) {
      var box = el("div", "partner reveal");
      box.appendChild(el("span", "partner__role", partner.role));

      var frame = el(partner.url ? "a" : "div", "partner__frame");
      if (partner.url) {
        frame.href = partner.url;
        frame.target = "_blank";
        frame.rel = "noopener";
      }
      frame.setAttribute("aria-label", partner.name + " (" + partner.role + ")");

      var img = el("img");
      img.src = partner.logo;
      img.alt = partner.name + " Logo";
      img.loading = "lazy";
      img.decoding = "async";
      frame.appendChild(img);
      box.appendChild(frame);
      box.appendChild(el("span", "partner__name", partner.name));

      root.appendChild(box);
    });
  }

  /* ----------------------------------------------------------- presenting
     Bubbles stacked above/below the "Line-up" title — #presenting-left
     renders as the row above it, #presenting-right as the row below. */

  function renderPresenting() {
    var leftGroup = $("#presenting-left");
    var rightGroup = $("#presenting-right");
    if (!leftGroup || !rightGroup) return;

    var items = (DATA.presenting && DATA.presenting.items) || [];

    if (!items.length) {
      leftGroup.appendChild(
        el("p", "presenting-row__placeholder", "Logos & Icons folgen in Kürze.")
      );
      return;
    }

    items.forEach(function (item) {
      var box = el(item.url ? "a" : "div", "presenting-row__item reveal");

      if (item.url) {
        box.href = item.url;
        box.target = "_blank";
        box.rel = "noopener";
        box.setAttribute("aria-label", item.name);
      }

      var img = el("img");
      img.src = item.logo;
      img.alt = item.name;
      img.loading = "lazy";
      img.decoding = "async";
      box.appendChild(img);

      (item.group === "right" ? rightGroup : leftGroup).appendChild(box);
    });
  }

  /* --------------------------------------------------------- about dialog */

  function initAboutDialog() {
    var dialog = $("#about-dialog");
    var trigger = $("#about-trigger");
    var closeBtn = $("#about-close");
    var body = $("#about-body");
    if (!dialog || !trigger) return;

    if (body) {
      (DATA.event.about || []).forEach(function (paragraph) {
        body.appendChild(el("p", null, paragraph));
      });
    }

    trigger.addEventListener("click", function (evt) {
      evt.preventDefault();
      dialog.showModal();
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        dialog.close();
      });
    }

    /* Native <dialog> click-outside-to-close: a click that lands on the
       dialog element itself (rather than something inside it) landed on
       the backdrop, since the dialog box is exactly the size of its
       content. */
    dialog.addEventListener("click", function (evt) {
      if (evt.target === dialog) dialog.close();
    });
  }

  /* ------------------------------------------------------ scroll reveal */

  function initReveal() {
    var nodes = $$(".reveal");
    if (!nodes.length) return;

    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (n) {
        n.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    nodes.forEach(function (n) {
      observer.observe(n);
    });
  }

  /* ------------------------------------------------- structured data (SEO)
     Built from the data file so the event markup can never drift from the
     dates and venue shown on the page. */

  function injectStructuredData() {
    var payload = {
      "@context": "https://schema.org",
      "@type": "Event",
      name: DATA.event.name + " – " + DATA.event.claim,
      description: DATA.event.about[0],
      startDate: DATA.event.startsAt,
      endDate: DATA.event.endsAt,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      image: "https://taste-up.ch/images/banner.png",
      location: TBD.venue
        ? {
            "@type": "Place",
            name: "Basel — Location wird bekannt gegeben",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Basel",
              addressCountry: "CH"
            }
          }
        : {
            "@type": "Place",
            name: venue.name,
            address: {
              "@type": "PostalAddress",
              streetAddress: venue.street,
              postalCode: venue.postalCode,
              addressLocality: venue.city,
              addressCountry: venue.country
            }
          },
      organizer: {
        "@type": "Organization",
        name: DATA.event.organiser.name,
        url: DATA.event.organiser.url
      }
    };

    if (DATA.speaker) {
      payload.performer = { "@type": "Person", name: DATA.speaker.name };
    }

    if (isUpcoming && !TBD.tickets && DATA.event.ticketUrl) {
      payload.offers = {
        "@type": "Offer",
        url: DATA.event.ticketUrl,
        availability: "https://schema.org/InStock",
        validFrom: new Date().toISOString()
      };
    }

    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(payload);
    document.head.appendChild(script);
  }

  /* ---------------------------------------------------------------- boot */

  function init() {
    injectText();
    renderKeynote();
    renderStartups();
    renderPartnerBanner();
    renderPartners();
    renderPresenting();
    initAboutDialog();
    renderEventState();
    initReveal();

    /* This file is also included on the legal pages so their footer can
       share the same live venue/date/contact data. Only the homepage has
       the hero's #top element, so the Event schema is only ever added
       there — a "Datenschutzerklärung" page has no business claiming to
       be a schema.org Event. */
    if ($("#top")) injectStructuredData();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
