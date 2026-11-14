// German (Swiss spelling: "ss", never "ß"). Source of truth for the dictionary shape.
// Copy marked TODO/placeholder must be confirmed by the client (see BRAND-INFO.md §4).

export const de = {
  meta: {
    title: "3volution Coffee – Specialty Coffee im Glattpark",
    description:
      "3volution Coffee am Boulevard Lilienthal 39 im Glattpark bei Zürich: sorgfältig zubereiteter Specialty Coffee, Gebäck und eine Pause vom Tag – gleich neben Coiffeur 3volution.",
  },
  nav: {
    skip: "Zum Inhalt springen",
    links: [
      { href: "#philosophy", label: "Philosophie" },
      { href: "#menu", label: "Karte" },
      { href: "#story", label: "Geschichte" },
      { href: "#visit", label: "Besuch" },
    ],
    hairdresser: "Coiffeur",
    cta: "Besuch planen",
    open: "Menü öffnen",
    close: "Menü schliessen",
    language: "Sprache",
    home: "3volution Coffee – Startseite",
  },
  hero: {
    eyebrow: "Specialty Coffee · Glattpark, Zürich",
    lineA: "Guter",
    lineB: "Kaffee",
    lineC: "braucht Zeit.",
    lead: "Espresso, Filterkaffee und frisches Gebäck – sorgfältig zubereitet, in Ruhe getrunken. Gleich neben Coiffeur 3volution.",
    primary: "Zur Karte",
    secondary: "So findest du uns",
    badge: "Specialty Coffee · Glattpark · Zürich · ",
    badgeLabel: "Zur Karte springen",
    scroll: "Scrollen",
    note: "Öffnungszeiten folgen",
    imageAlt: "Iced Latte in einem Glas auf einem Holztisch",
    detailAlt: "Cappuccino mit Latte Art, von oben fotografiert",
  },
  marquee: ["Espresso", "Flat White", "Cold Brew", "Cappuccino", "Filterkaffee", "Chai Latte", "Gipfeli"],
  pillars: {
    eyebrow: "Philosophie",
    title: "Drei Dinge zählen.",
    intro:
      "Drei Balken im Logo, drei Dinge in jeder Tasse. Mehr braucht es nicht – aber diese drei machen wir richtig.",
    items: [
      {
        numeral: "I",
        title: "Die Bohne",
        text: "Specialty-Bohnen aus kleinen Röstereien, frisch und in kleinen Mengen eingekauft. Damit jede Tasse nach ihrer Herkunft schmeckt.",
        alt: "Siebträger, Kaffeebohnen und ein Cappuccino auf einem Holzbrett",
      },
      {
        numeral: "II",
        title: "Das Handwerk",
        text: "Präzise gemahlen, auf die Sekunde extrahiert, Milch mit Gefühl aufgeschäumt. Handwerk, das man schmeckt – nicht sieht.",
        alt: "Hand hält frisch geröstete Kaffeebohnen",
      },
      {
        numeral: "III",
        title: "Die Zeit",
        text: "Für einen Espresso zwischen zwei Terminen oder einen langen Nachmittag. Bei uns darf Kaffee so lange dauern, wie er dauert.",
        alt: "Filterkaffee wird von Hand aufgegossen",
      },
    ],
  },
  story: {
    eyebrow: "Geschichte",
    title: "Vom Salon zur Kaffeebar.",
    paragraphs: [
      "Nebenan im Coiffeur 3volution kümmern wir uns um Hair, Beauty und Nails. Und immer wieder um dieselbe Frage unserer Kundinnen und Kunden: «Gibt es hier irgendwo einen richtig guten Kaffee?»",
      "Jetzt gibt es ihn – eine Tür weiter. 3volution Coffee ist unser Ort für Espresso, Gespräche und eine kurze Pause vom Tag. Gleiche Liebe zum Detail, anderes Handwerk.",
    ],
    facts: [
      { value: "39", label: "Boulevard Lilienthal" },
      { value: "1", label: "Tür neben dem Salon" },
      { value: "III", label: "Dinge, die zählen" },
    ],
    imageAlt: "Milch wird in einen Cappuccino gegossen und formt Latte Art",
    link: "Zum Coiffeur 3volution",
  },
  menu: {
    eyebrow: "Karte",
    title: "Was wir ausschenken.",
    note: "Beispielkarte & -preise · definitive Karte folgt",
    currency: "CHF",
    milk: "Hafer- oder Mandelmilch +0.80",
    tabs: [
      {
        id: "espresso",
        label: "Espresso-Bar",
        imageAlt: "Espresso in einem Glas auf einer Untertasse",
        items: [
          { name: "Espresso", desc: "Kurz, dicht, mit feiner Crema", price: "4.20" },
          { name: "Doppio", desc: "Doppelte Portion, doppelte Tiefe", price: "5.20" },
          { name: "Cortado", desc: "Espresso mit wenig warmer Milch", price: "5.00" },
          { name: "Cappuccino", desc: "Klassisch, mit feinem Milchschaum", price: "5.50" },
          { name: "Flat White", desc: "Doppelter Ristretto, samtige Milch", price: "6.00" },
          { name: "Latte Macchiato", desc: "Viel Milch, sanfter Espresso", price: "5.80" },
        ],
      },
      {
        id: "slow",
        label: "Filter & Kalt",
        imageAlt: "Iced Coffee mit Milch in einem hohen Glas",
        items: [
          { name: "Filterkaffee V60", desc: "Wechselnde Bohne, von Hand aufgegossen", price: "6.50" },
          { name: "Cold Brew", desc: "18 Stunden kalt extrahiert", price: "6.00" },
          { name: "Iced Latte", desc: "Espresso, kalte Milch, Eis", price: "6.50" },
          { name: "Espresso Tonic", desc: "Tonic, Eis, Zitrus, Espresso", price: "7.00" },
          { name: "Chai Latte", desc: "Gewürztee mit aufgeschäumter Milch", price: "6.00" },
          { name: "Heisse Schokolade", desc: "Schweizer Schokolade, Vollmilch", price: "5.50" },
        ],
      },
      {
        id: "food",
        label: "Süsses & Snacks",
        imageAlt: "Zwei Gipfeli, mit Puderzucker bestäubt",
        items: [
          { name: "Buttergipfeli", desc: "Frisch vom Beck", price: "2.80" },
          { name: "Schoggigipfeli", desc: "Mit dunkler Schokolade", price: "3.50" },
          { name: "Zimtschnecke", desc: "Hausgemacht, mit Kardamom", price: "4.80" },
          { name: "Bananenbrot", desc: "Saftig, mit Walnüssen", price: "4.50" },
          { name: "Overnight Oats", desc: "Hafer, Joghurt, saisonale Früchte", price: "7.50" },
          { name: "Sandwich des Tages", desc: "Wechselnd, frisch belegt", price: "9.50" },
        ],
      },
    ],
  },
  statement:
    "Ein Ort, um kurz anzuhalten. Für den Espresso vor dem Termin, den Flat White danach – oder einfach so.",
  gallery: {
    eyebrow: "Momente",
    title: "Eine Tasse, viele Geschichten.",
    note: "Platzhalterbilder – echte Fotos folgen.",
    alts: [
      "Theke eines Cafés mit Siebträgermaschine",
      "Zwei Hände stossen mit Cappuccinos an",
      "Iced Coffee mit Milch in einem Glas",
      "Gipfeli mit Puderzucker",
      "Cappuccinos mit Latte Art zwischen Pflanzen",
      "Schwarzer Kaffee in einer weissen Tasse",
      "Espresso in einem Glas",
    ],
  },
  visit: {
    eyebrow: "Besuch",
    title: "Komm vorbei.",
    addressLabel: "Adresse",
    addressNote: "Gleich neben Coiffeur 3volution",
    maps: "Route planen",
    hoursLabel: "Öffnungszeiten",
    hoursNote: "Platzhalter – definitive Zeiten folgen in Kürze.",
    hours: [
      { days: "Mo – Fr", time: "07:00 – 18:00" },
      { days: "Sa", time: "08:00 – 17:00" },
      { days: "So", time: "geschlossen" },
    ],
    contactLabel: "Kontakt",
    imageAlt: "Tisch am Fenster mit Kaffeetasse und Notizbuch",
    neighbour: {
      eyebrow: "Nebenan",
      title: "Coiffeur 3volution",
      text: "Hair · Beauty · Nail",
      cta: "Zum Salon",
    },
  },
  footer: {
    tagline: "Specialty Coffee im Glattpark. Gleich neben Coiffeur 3volution.",
    navTitle: "Entdecken",
    contactTitle: "Kontakt",
    legalTitle: "Rechtliches",
    impressum: "Impressum",
    privacy: "Datenschutz",
    rights: "Alle Rechte vorbehalten.",
    credit: "Fotos: Unsplash (Platzhalter)",
    top: "Nach oben",
  },
  legal: {
    back: "Zurück zur Startseite",
    todo: "Angabe folgt",
    impressum: {
      title: "Impressum",
      operatorLabel: "Betreiberin",
      ownerLabel: "Inhaber/in",
      uidLabel: "UID",
      contactLabel: "Kontakt",
      disclaimerTitle: "Haftungsausschluss",
      disclaimer:
        "Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte, insbesondere der Preise und Öffnungszeiten, wird keine Gewähr übernommen.",
      photosTitle: "Bildnachweis",
      photos: "Platzhalterfotos von Unsplash (unsplash.com), verwendet gemäss Unsplash-Lizenz.",
    },
    privacy: {
      title: "Datenschutz",
      draft: "Entwurf – vor Veröffentlichung durch Betreiberin bzw. Rechtsberatung zu prüfen.",
      sections: [
        {
          title: "Verantwortliche Stelle",
          text: "3volution, Boulevard Lilienthal 39, 8152 Glattpark (Opfikon), Schweiz. E-Mail: 333volution@gmail.com",
        },
        {
          title: "Grundsatz",
          text: "Wir bearbeiten Personendaten gemäss dem Schweizer Datenschutzgesetz (DSG). Diese Website ist rein informativ: Es gibt keine Formulare, kein Kundenkonto, keine Bestellungen und kein Tracking.",
        },
        {
          title: "Server-Logfiles",
          text: "Beim Aufruf der Website speichert der Hosting-Anbieter technisch notwendige Daten (z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser). Diese dienen dem sicheren Betrieb und werden nach kurzer Zeit gelöscht.",
        },
        {
          title: "Schriften und Bilder",
          text: "Schriften und Bilder werden direkt von unserem Server ausgeliefert. Es werden keine Daten an Google Fonts oder andere Drittanbieter übertragen.",
        },
        {
          title: "Externe Links",
          text: "Links zu Google Maps, Instagram und zur Website des Coiffeur 3volution führen auf Angebote Dritter. Erst beim Anklicken gelten deren Datenschutzbestimmungen.",
        },
        {
          title: "Kontaktaufnahme",
          text: "Wenn du uns per E-Mail oder Telefon kontaktierst, verwenden wir deine Angaben nur zur Bearbeitung deiner Anfrage.",
        },
        {
          title: "Deine Rechte",
          text: "Du kannst jederzeit Auskunft über deine bei uns gespeicherten Daten verlangen sowie deren Berichtigung oder Löschung beantragen. Kontakt: 333volution@gmail.com",
        },
      ],
    },
  },
  notFound: {
    title: "Diese Seite gibt es nicht.",
    text: "Vielleicht hilft ein Espresso. Oder der Weg zurück:",
  },
};

export type Dictionary = typeof de;
