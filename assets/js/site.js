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
    sparkles:
      '<path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3z"/><path d="M18.5 14.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1z"/>',
    cup: '<path d="M4 5h11v7a5.5 5.5 0 01-11 0V5z"/><path d="M15 7h2.5a2.5 2.5 0 010 5H15"/><path d="M3 21h13"/>',
    mic: '<rect x="9" y="2.5" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0013 0"/><path d="M12 17.5V21"/><path d="M8.5 21h7"/>',
    users:
      '<circle cx="9" cy="8" r="3.4"/><path d="M2.5 20a6.5 6.5 0 0113 0"/><path d="M16.5 5.2a3.4 3.4 0 010 5.6"/><path d="M17.5 14.4A6.5 6.5 0 0121.5 20"/>',
    book: '<path d="M4 4.5A2 2 0 016 3h13v15H6a2 2 0 00-2 2V4.5z"/><path d="M4 20a2 2 0 012-2h13v3H6a2 2 0 01-2-2z"/><path d="M9 7.5h6"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 7.8h.01"/>',
    calendar:
      '<rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M8 3v4"/><path d="M16 3v4"/><path d="M3.5 10h17"/>',
    pin: '<path d="M12 21s7-5.3 7-11a7 7 0 10-14 0c0 5.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.2 1.9"/>',
    ticket:
      '<path d="M3.5 8.5V7a1.5 1.5 0 011.5-1.5h14A1.5 1.5 0 0120.5 7v1.5a2.6 2.6 0 000 5.2V17a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 17v-3.3a2.6 2.6 0 000-5.2z"/><path d="M13.5 6v12"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="M8.2 12.3l2.6 2.6 5-5.4"/>',
    arrow: '<path d="M5 12h13"/><path d="M12.5 6l6 6-6 6"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.6 6.6l8.4 6 8.4-6"/>'
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

  var TOKENS = {
    date: dateShort,
    "date-long": dateLong,
    time: timeRange,
    "venue-name": venue.name,
    "venue-address": venue.street + ", " + venue.postalCode + " " + venue.city,
    "venue-line": venueLine,
    claim: DATA.event.claim,
    tagline: DATA.event.tagline,
    closing: DATA.event.closing,
    email: DATA.event.contactEmail,
    year: String(new Date().getFullYear())
  };

  function injectText() {
    $$("[data-tu]").forEach(function (node) {
      var key = node.getAttribute("data-tu");
      if (TOKENS[key] != null) node.textContent = TOKENS[key];
    });

    $$("[data-tu-href]").forEach(function (node) {
      var key = node.getAttribute("data-tu-href");
      if (key === "ticket") node.href = DATA.event.ticketUrl;
      if (key === "maps") node.href = venue.mapsUrl;
      if (key === "mail") node.href = "mailto:" + DATA.event.contactEmail;
    });
  }

  /* --------------------------------------------- upcoming vs. past event */

  function renderEventState() {
    var countdown = $("#countdown");
    var note = $("#event-status");

    if (isUpcoming) {
      if (note) note.hidden = true;
      if (countdown) startCountdown(countdown);
      return;
    }

    /* The announced date has passed: never show a live ticket link or a
       negative countdown. Switch the page into "next edition" mode. */
    if (countdown) countdown.hidden = true;

    if (note) {
      note.hidden = false;
      note.textContent = "";
      note.appendChild(icon("info", 18));
      note.appendChild(
        document.createTextNode(
          "Die letzte Ausgabe fand am " +
            dateShort +
            " im " +
            venue.name +
            " statt. Das Datum der nächsten Edition wird bald bekannt gegeben."
        )
      );
    }

    $$("[data-tu-ticket]").forEach(function (link) {
      link.href =
        "mailto:" +
        DATA.event.contactEmail +
        "?subject=" +
        encodeURIComponent("TasteUp – Infos zur nächsten Ausgabe");
      var label = $(".btn__label", link);
      (label || link).textContent = "Infos zur nächsten Ausgabe";
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

  /* ---------------------------------------------------------- highlights */

  function renderHighlights() {
    var root = $("#highlights");
    if (!root) return;

    DATA.highlights.forEach(function (item) {
      var card = el("article", "highlight reveal");
      var box = el("div", "highlight__icon");
      box.appendChild(icon(item.icon));
      card.appendChild(box);
      card.appendChild(el("h3", null, item.title));
      card.appendChild(el("p", null, item.text));
      root.appendChild(card);
    });
  }

  /* --------------------------------------------------------------- stats */

  function renderStats() {
    var root = $("#stats");
    if (!root) return;

    DATA.stats.forEach(function (stat) {
      /* Counted values stay in sync with the data instead of being typed in. */
      var value = stat.from === "startups" ? String(DATA.startups.length) : stat.value;
      var box = el("div", "stat reveal");
      box.appendChild(el("span", "stat__num", value));
      box.appendChild(el("span", "stat__label", stat.label));
      root.appendChild(box);
    });
  }

  /* ----------------------------------------------------------- programme */

  function renderAgenda() {
    var root = $("#agenda");
    if (!root) return;

    DATA.agenda.forEach(function (slot) {
      var item = el("article", "slot reveal");

      var time = el("div", "slot__time", slot.from);
      time.appendChild(el("span", null, "bis " + slot.to));
      item.appendChild(time);

      var body = el("div");
      body.appendChild(el("h3", null, slot.title));
      var list = el("ul");
      slot.points.forEach(function (point) {
        list.appendChild(el("li", null, point));
      });
      body.appendChild(list);
      item.appendChild(body);

      root.appendChild(item);
    });
  }

  /* ------------------------------------------------------------ startups */

  function renderStartups() {
    var grid = $("#startup-grid");
    var filterBar = $("#startup-filters");
    if (!grid) return;

    var counts = {};
    DATA.startups.forEach(function (s) {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });

    var labels = {};
    DATA.startupCategories.forEach(function (cat) {
      labels[cat.id] = cat.label;
    });

    DATA.startups.forEach(function (startup) {
      var card = el("article", "card reveal");
      card.setAttribute("data-category", startup.category);

      var logoBox = el("div", "card__logo");
      var img = el("img");
      img.src = startup.logo;
      img.alt = startup.name + " Logo";
      img.loading = "lazy";
      img.decoding = "async";
      img.addEventListener("error", function () {
        logoBox.removeChild(img);
        var fallback = el("span", "card__tag", startup.name);
        logoBox.appendChild(fallback);
      });
      logoBox.appendChild(img);
      card.appendChild(logoBox);

      card.appendChild(
        el("span", "card__tag", labels[startup.category] || startup.category)
      );
      card.appendChild(el("h3", null, startup.name));
      card.appendChild(el("p", null, startup.text));

      if (startup.url) {
        var link = el("a", "link");
        link.href = startup.url;
        link.target = "_blank";
        link.rel = "noopener";
        link.appendChild(document.createTextNode("Website besuchen"));
        link.appendChild(icon("arrow", 16));
        link.setAttribute("aria-label", "Website von " + startup.name + " besuchen");
        card.appendChild(link);
      } else {
        card.appendChild(el("span", "card__soon", "Website folgt bald"));
      }

      grid.appendChild(card);
    });

    if (!filterBar) return;

    DATA.startupCategories.forEach(function (cat) {
      var count = cat.id === "all" ? DATA.startups.length : counts[cat.id] || 0;
      if (!count) return; /* hide categories nobody is in */

      var btn = el("button", "filter");
      btn.type = "button";
      btn.setAttribute("data-filter", cat.id);
      btn.setAttribute("aria-pressed", cat.id === "all" ? "true" : "false");
      btn.appendChild(document.createTextNode(cat.label));
      btn.appendChild(el("span", "filter__count", String(count)));
      filterBar.appendChild(btn);
    });

    var status = $("#startup-status");

    filterBar.addEventListener("click", function (evt) {
      var btn = evt.target.closest("[data-filter]");
      if (!btn) return;

      var wanted = btn.getAttribute("data-filter");
      $$("[data-filter]", filterBar).forEach(function (other) {
        other.setAttribute("aria-pressed", other === btn ? "true" : "false");
      });

      var shown = 0;
      $$(".card", grid).forEach(function (card) {
        var match = wanted === "all" || card.getAttribute("data-category") === wanted;
        card.hidden = !match;
        if (match) shown += 1;
      });

      if (status) {
        status.textContent =
          shown + (shown === 1 ? " Startup" : " Startups") + " angezeigt.";
      }
    });
  }

  /* ------------------------------------------------------------ partners */

  function renderPartners() {
    var root = $("#partners");
    if (!root) return;

    DATA.partners.forEach(function (partner) {
      var box = el("div", "partner reveal");
      box.appendChild(el("span", "partner__role", partner.role));

      var frame = el("a", "partner__frame");
      frame.href = partner.url;
      frame.target = "_blank";
      frame.rel = "noopener";
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

  /* ----------------------------------------------------------------- faq */

  function renderFaq() {
    var root = $("#faq-list");
    if (!root) return;

    var replacements = {
      "{date}": dateShort,
      "{time}": timeRange,
      "{venue}": venueLine,
      "{ticket}": "Eventfrog",
      "{mail}": DATA.event.contactEmail
    };

    DATA.faq.forEach(function (entry, index) {
      var item = el("div", "faq__item");
      var id = "faq-panel-" + index;

      var button = el("button", "faq__q");
      button.type = "button";
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-controls", id);
      button.appendChild(el("span", null, entry.q));
      button.appendChild(el("span", "faq__icon"));

      var panel = el("div", "faq__a");
      panel.id = id;
      var inner = el("div");
      var para = el("p");

      /* Split the answer on the tokens so live values become real links. */
      var parts = entry.a.split(/(\{date\}|\{time\}|\{venue\}|\{ticket\}|\{mail\})/g);
      parts.forEach(function (part) {
        if (part === "{ticket}") {
          var a = el("a", null, "Eventfrog");
          a.href = DATA.event.ticketUrl;
          a.target = "_blank";
          a.rel = "noopener";
          para.appendChild(a);
        } else if (part === "{mail}") {
          var m = el("a", null, DATA.event.contactEmail);
          m.href = "mailto:" + DATA.event.contactEmail;
          para.appendChild(m);
        } else if (replacements[part]) {
          para.appendChild(document.createTextNode(replacements[part]));
        } else {
          para.appendChild(document.createTextNode(part));
        }
      });

      inner.appendChild(para);
      panel.appendChild(inner);
      item.appendChild(button);
      item.appendChild(panel);
      root.appendChild(item);

      button.addEventListener("click", function () {
        var open = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", open ? "false" : "true");
        item.classList.toggle("is-open", !open);
      });
    });
  }

  /* -------------------------------------------------------- navigation */

  function initNav() {
    var header = $(".site-header");
    var toggle = $(".nav-toggle");
    var nav = $("#primary-nav");

    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", open ? "false" : "true");
        nav.classList.toggle("is-open", !open);
      });

      nav.addEventListener("click", function (evt) {
        if (evt.target.tagName === "A") {
          toggle.setAttribute("aria-expanded", "false");
          nav.classList.remove("is-open");
        }
      });

      document.addEventListener("keydown", function (evt) {
        if (evt.key === "Escape" && nav.classList.contains("is-open")) {
          toggle.setAttribute("aria-expanded", "false");
          nav.classList.remove("is-open");
          toggle.focus();
        }
      });
    }

    if (header) {
      var onScroll = function () {
        header.classList.toggle("is-stuck", window.scrollY > 8);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    /* Highlight the section currently in view. */
    var links = $$("#primary-nav a[href^='#']");
    if (!links.length || !("IntersectionObserver" in window)) return;

    var byId = {};
    var targets = [];
    links.forEach(function (link) {
      var section = document.getElementById(link.hash.slice(1));
      if (!section) return;
      byId[section.id] = link;
      targets.push(section);
    });

    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (l) {
            l.classList.remove("is-active");
          });
          var active = byId[entry.target.id];
          if (active) active.classList.add("is-active");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    targets.forEach(function (t) {
      spy.observe(t);
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
      location: {
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
      },
      performer: {
        "@type": "Person",
        name: DATA.speaker.name
      }
    };

    if (isUpcoming) {
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
    renderHighlights();
    renderStats();
    renderAgenda();
    renderStartups();
    renderPartners();
    renderFaq();
    renderEventState();
    initNav();
    initReveal();
    injectStructuredData();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
