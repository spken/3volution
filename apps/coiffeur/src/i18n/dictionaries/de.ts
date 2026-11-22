// German (Swiss spelling: "ss", never "ß"). Source of truth for the dictionary shape.
// Photos are the client's own (coiffeur3volution.ch). The current salon site has almost no copy: everything below is a draft for client approval.
// Service categories mirror the Shore booking tool (connect.shore.com/widget/3volution, checked 2026-11-22).
// Prices are Shore's starting prices (CHF). Keep `from` values identical in en.ts; Shore stays binding (see BRAND-INFO.md).

export const de = {
  meta: {
    title: "Coiffeur 3volution – Hair & Beauty im Glattpark",
    description:
      "Coiffeur 3volution am Boulevard Lilienthal 39 im Glattpark bei Zürich: Haarschnitt, Farbe, Styling, Lashes und Brows. Termin jetzt online buchen.",
  },
  nav: {
    skip: "Zum Inhalt springen",
    links: [
      { href: "#lookbook", label: "Lookbook" },
      { href: "#leistungen", label: "Leistungen" },
      { href: "#team", label: "Team" },
      { href: "#kontakt", label: "Kontakt" },
    ],
    sister: "Coffee",
    cta: "Termin buchen",
    open: "Menü öffnen",
    close: "Menü schliessen",
    language: "Sprache",
    home: "Coiffeur 3volution – Startseite",
  },
  hero: {
    eyebrow: "Coiffeur · Glattpark, Zürich",
    lineA: "Hair",
    lineB: "Beauty",
    primary: "Termin buchen",
    secondary: "Arbeiten ansehen",
    panels: [
      { alt: "Glattes, schulterlanges Haar mit sanftem Farbverlauf, beim Styling im Salon" },
      { alt: "Lange, blond gewellte Haare mit Balayage, im Salon vor dem 3volution-Logo" },
      { alt: "Blonde Wellen im Salon, von hinten fotografiert" },
    ],
  },
  services: {
    label: "Leistungen",
    title: "Von Kopf *bis Fuss.*",
    note: "Ab-Preise in CHF. Alle Preise und Dauer findest du im Buchungstool; sie variieren je nach Stylistin und Aufwand.",
    book: "Termin wählen",
    from: "ab",
    groups: [
      {
        id: "cut",
        title: "Schnitt & Styling",
        items: [
          { name: "Waschen, Schneiden, Föhnen", from: 68 },
          { name: "Cut & Go", from: 55 },
          { name: "Waschen und Föhnen", from: 47 },
          { name: "Fransen oder Konturen", from: 20 },
          { name: "Kinderhaarschnitt bis 12 Jahre", from: 29 },
        ],
      },
      {
        id: "colour",
        title: "Farbe",
        items: [
          { name: "Ansatz- oder Ganzkopffarbe", from: 90 },
          { name: "Refresh-Tönung mit Föhnen", from: 120 },
          { name: "Aufhellung", from: 185 },
          { name: "Meches und Balayage", from: 245 },
          { name: "Babylights", from: 300 },
        ],
      },
      {
        id: "men",
        title: "Herren",
        items: [
          { name: "Herrenhaarschnitt", from: 39 },
          { name: "Bart kürzen und formen", from: 17 },
          { name: "Haar- oder Bartfarbe", from: 30 },
          { name: "Dauerwelle for Men", from: 100 },
          { name: "Keratin-Behandlung", from: 140 },
        ],
      },
      {
        id: "care",
        title: "Pflege & Extensions",
        items: [
          { name: "Hairstyle-Beratung", from: 50 },
          { name: "Intensivpflege", from: 45 },
          { name: "Keratin-Behandlung", from: 350 },
          { name: "Tape-In Extensions", from: 260 },
          { name: "Weft Extensions", from: 260 },
        ],
      },
      {
        id: "occasion",
        title: "Hochzeit & Anlässe",
        items: [
          { name: "Hochsteckfrisur", from: 100 },
          { name: "Hochsteckfrisur Standesamt oder Henna", from: 280 },
          { name: "Brautfrisur", from: 650 },
          { name: "Make-up inkl. Wimpern", from: 100 },
          { name: "Braut-Make-up", from: 280 },
        ],
      },
      {
        id: "lashes",
        title: "Lashes & Brows",
        items: [
          { name: "Wimpernverlängerung, Neuset", from: 120 },
          { name: "Wimpern auffüllen", from: 65 },
          { name: "Wimpernlifting", from: 95 },
          { name: "Browlifting", from: 95 },
          { name: "Henna Brows", from: 45 },
          { name: "Augenbrauen zupfen", from: 17 },
        ],
      },
      {
        id: "face",
        title: "Gesicht",
        items: [
          { name: "Gesichtsreinigung", from: 120 },
          { name: "Korean Glass Skin", from: 155 },
          { name: "Microneedling", from: 185 },
          { name: "Lymphdrainage Face", from: 70 },
        ],
      },
      {
        id: "body",
        title: "Body",
        items: [
          { name: "Madero-Therapie", from: 75 },
          { name: "Brasilianische Lymphdrainage", from: 165 },
          { name: "Hijama (Schröpfen)", from: 130 },
        ],
      },
    ],
  },
  team: {
    label: "Team",
    title: "Die Hände hinter *3volution.*",
    roles: { hair: "Hair", beauty: "Lashes & Brows" },
    imageAlts: {
      hair: "Lange, dunkelbraun gewellte Haare, Arbeit aus dem Salon",
      beauty: "Wimpernverlängerung an einem grauen Auge, Arbeit aus dem Salon",
    },
    note: "Bilder: Arbeiten aus dem Salon. Porträts folgen.",
  },
  lookbook: {
    label: "Lookbook",
    title: "Aus dem *Salon.*",
    more: "Mehr auf Instagram",
    items: [
      { alt: "Lange, blond gewellte Haare von hinten" },
      { alt: "Blonde Balayage über die Schulter gelegt" },
      { alt: "Honigblonde Wellen vor einer Blumenwand" },
      { alt: "Kupferblonde Locken von hinten" },
      { alt: "Blonde Balayage mit dunklem Ansatz" },
      { alt: "Volle, karamellblonde Wellen" },
      { alt: "Braut mit Hochsteckfrisur, Schleier und Diadem" },
      { alt: "Wimpernverlängerung an einem braunen Auge" },
      { alt: "Natürliche Wimpernverlängerung an einem blauen Auge" },
    ],
  },
  booking: {
    label: "Termin",
    title: "Termin *online* buchen.",
    phoneTitle: "Lieber persönlich?",
    poweredBy: "Online-Buchung über unseren Partner Shore.",
    privacyLink: "Datenschutz",
    newTab: "In neuem Tab öffnen",
    frameTitle: "Online-Terminbuchung Coiffeur 3volution (Shore)",
  },
  visit: {
    label: "Kontakt",
    title: "Komm *vorbei.*",
    addressLabel: "Adresse",
    maps: "Route planen",
    hoursLabel: "Öffnungszeiten",
    hoursNote: "Termine ausserhalb der Öffnungszeiten nach Absprache möglich.",
    hours: [
      { days: "Di – Fr", time: "09:00 – 19:00" },
      { days: "Sa", time: "09:00 – 16:00" },
      { days: "So – Mo", time: "geschlossen" },
    ],
    contactLabel: "Kontakt",
    sister: {
      eyebrow: "Unter einem Dach",
      title: "3volution Coffee",
      cta: "Zum Café",
    },
  },
  footer: {
    tagline: "Hair · Beauty · Coffee. Coiffeur, Lashes und Brows im Glattpark bei Zürich.",
    navTitle: "Entdecken",
    contactTitle: "Kontakt",
    legalTitle: "Rechtliches",
    impressum: "Impressum",
    privacy: "Datenschutz",
    rights: "Alle Rechte vorbehalten.",
    credit: "Fotos: Coiffeur 3volution",
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
        "Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte, insbesondere der Leistungen und Öffnungszeiten, wird keine Gewähr übernommen. Verbindlich sind die Angaben im Buchungstool.",
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
          text: "Wir bearbeiten Personendaten gemäss dem Schweizer Datenschutzgesetz (DSG). Diese Website selbst hat kein Kundenkonto und kein Tracking.",
        },
        {
          title: "Server-Logfiles",
          text: "Beim Aufruf der Website speichert der Hosting-Anbieter technisch notwendige Daten (z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser). Diese dienen dem sicheren Betrieb und werden nach kurzer Zeit gelöscht.",
        },
        {
          title: "Schriften",
          text: "Schriften werden direkt von unserem Server ausgeliefert. Es werden keine Daten an Google Fonts oder andere Drittanbieter übertragen.",
        },
        {
          title: "Online-Terminbuchung (Shore)",
          text: "Für die Online-Buchung nutzen wir Shore (Shore GmbH, München, Deutschland). Das Buchungstool ist auf der Startseite eingebunden und wird beim Aufruf der Seite von Shore geladen. Dabei wird deine IP-Adresse an Shore übertragen. Wenn du buchst, werden zusätzlich die von dir eingegebenen Daten (z. B. Name, Kontaktangaben, gewünschte Leistung und Termin) an Shore übertragen und dort zur Verwaltung deines Termins gespeichert. Es gelten zusätzlich die Datenschutzbestimmungen von Shore.",
        },
        {
          title: "Externe Links",
          text: "Links zu Google Maps, Instagram und zur Website von 3volution Coffee führen auf Angebote Dritter bzw. separate Websites. Erst beim Anklicken gelten deren Datenschutzbestimmungen.",
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
    text: "Zurück zur Startseite:",
  },
};

export type Dictionary = typeof de;
