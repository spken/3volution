import type { Dictionary } from "./de";

export const en: Dictionary = {
  meta: {
    title: "Coiffeur 3volution – Hair & beauty in Glattpark",
    description:
      "Coiffeur 3volution at Boulevard Lilienthal 39 in Glattpark near Zurich: haircuts, colour, styling, lashes and brows. Book your appointment online.",
  },
  nav: {
    skip: "Skip to content",
    links: [
      { href: "#lookbook", label: "Lookbook" },
      { href: "#leistungen", label: "Services" },
      { href: "#team", label: "Team" },
      { href: "#kontakt", label: "Contact" },
    ],
    sister: "Coffee",
    cta: "Book now",
    open: "Open menu",
    close: "Close menu",
    language: "Language",
    home: "Coiffeur 3volution – Home",
  },
  hero: {
    eyebrow: "Hair salon · Glattpark, Zurich",
    lineA: "Hair",
    lineB: "Beauty",
    primary: "Book now",
    secondary: "See the work",
    panels: [
      { alt: "Straight, shoulder-length hair with a soft colour melt, being styled in the salon" },
      { alt: "Long, wavy blonde hair with balayage, in the salon in front of the 3volution logo" },
      { alt: "Blonde waves in the salon, photographed from behind" },
    ],
  },
  services: {
    label: "Services",
    title: "From head *to toe.*",
    note: "Starting prices in CHF. Every price and duration is listed in the booking tool; they vary by stylist and the work involved.",
    book: "Pick a time",
    from: "from",
    groups: [
      {
        id: "cut",
        title: "Cut & style",
        items: [
          { name: "Wash, cut and blow-dry", from: 68 },
          { name: "Cut & go", from: 55 },
          { name: "Wash and blow-dry", from: 47 },
          { name: "Fringe or outline trim", from: 20 },
          { name: "Kids' cut up to 12", from: 29 },
        ],
      },
      {
        id: "colour",
        title: "Colour",
        items: [
          { name: "Root or full-head colour", from: 90 },
          { name: "Refresh toning with blow-dry", from: 120 },
          { name: "Lightening", from: 185 },
          { name: "Highlights and balayage", from: 245 },
          { name: "Babylights", from: 300 },
        ],
      },
      {
        id: "men",
        title: "Men",
        items: [
          { name: "Men's cut", from: 39 },
          { name: "Beard trim and shaping", from: 17 },
          { name: "Hair or beard colour", from: 30 },
          { name: "Perm for men", from: 100 },
          { name: "Keratin treatment", from: 140 },
        ],
      },
      {
        id: "care",
        title: "Care & extensions",
        items: [
          { name: "Hairstyle consultation", from: 50 },
          { name: "Intensive care", from: 45 },
          { name: "Keratin treatment", from: 350 },
          { name: "Tape-in extensions", from: 260 },
          { name: "Weft extensions", from: 260 },
        ],
      },
      {
        id: "occasion",
        title: "Weddings & occasions",
        items: [
          { name: "Updo", from: 100 },
          { name: "Updo for civil wedding or henna night", from: 280 },
          { name: "Bridal hair", from: 650 },
          { name: "Make-up incl. lashes", from: 100 },
          { name: "Bridal make-up", from: 280 },
        ],
      },
      {
        id: "lashes",
        title: "Lashes & brows",
        items: [
          { name: "Lash extensions, new set", from: 120 },
          { name: "Lash refill", from: 65 },
          { name: "Lash lift", from: 95 },
          { name: "Brow lift", from: 95 },
          { name: "Henna brows", from: 45 },
          { name: "Brow shaping", from: 17 },
        ],
      },
      {
        id: "face",
        title: "Face",
        items: [
          { name: "Deep cleansing facial", from: 120 },
          { name: "Korean glass skin", from: 155 },
          { name: "Microneedling", from: 185 },
          { name: "Facial lymphatic drainage", from: 70 },
        ],
      },
      {
        id: "body",
        title: "Body",
        items: [
          { name: "Madero therapy", from: 75 },
          { name: "Brazilian lymphatic drainage", from: 165 },
          { name: "Hijama (cupping)", from: 130 },
        ],
      },
    ],
  },
  team: {
    label: "Team",
    title: "The hands behind *3volution.*",
    roles: { hair: "Hair", beauty: "Lashes & brows" },
    imageAlts: {
      hair: "Long, dark brown waves, work from the salon",
      beauty: "Lash extensions on a grey eye, work from the salon",
    },
    note: "Images: work from the salon. Portraits coming soon.",
  },
  lookbook: {
    label: "Lookbook",
    title: "Straight from the *salon.*",
    more: "More on Instagram",
    items: [
      { alt: "Long, wavy blonde hair from behind" },
      { alt: "Blonde balayage over the shoulder" },
      { alt: "Honey-blonde waves in front of a flower wall" },
      { alt: "Copper-blonde curls from behind" },
      { alt: "Blonde balayage with darker roots" },
      { alt: "Full, caramel-blonde waves" },
      { alt: "Bride with an updo, veil and tiara" },
      { alt: "Lash extensions on a brown eye" },
      { alt: "Natural lash extensions on a blue eye" },
    ],
  },
  booking: {
    label: "Booking",
    title: "Book your appointment *online.*",
    phoneTitle: "Rather talk to us?",
    poweredBy: "Online booking by our partner Shore.",
    privacyLink: "Privacy",
    newTab: "Open in new tab",
    frameTitle: "Online booking for Coiffeur 3volution (Shore)",
  },
  visit: {
    label: "Contact",
    title: "Come *by.*",
    addressLabel: "Address",
    maps: "Get directions",
    hoursLabel: "Opening hours",
    hoursNote: "Appointments outside opening hours by arrangement.",
    hours: [
      { days: "Tue – Fri", time: "09:00 – 19:00" },
      { days: "Sat", time: "09:00 – 16:00" },
      { days: "Sun – Mon", time: "closed" },
    ],
    contactLabel: "Contact",
    sister: {
      eyebrow: "Under one roof",
      title: "3volution Coffee",
      cta: "Visit the café",
    },
  },
  footer: {
    tagline: "Hair · Beauty · Coffee. Hair salon, lashes and brows in Glattpark near Zurich.",
    navTitle: "Explore",
    contactTitle: "Contact",
    legalTitle: "Legal",
    impressum: "Legal notice",
    privacy: "Privacy",
    rights: "All rights reserved.",
    credit: "Photos: Coiffeur 3volution",
    top: "Back to top",
  },
  legal: {
    back: "Back to home",
    todo: "to be confirmed",
    impressum: {
      title: "Legal notice",
      operatorLabel: "Operator",
      ownerLabel: "Owner",
      uidLabel: "Company ID (UID)",
      contactLabel: "Contact",
      disclaimerTitle: "Disclaimer",
      disclaimer:
        "The content of this website is created with the greatest possible care. No guarantee is given for its accuracy, completeness or timeliness, in particular for services and opening hours. The information in the booking tool is binding.",
    },
    privacy: {
      title: "Privacy",
      draft: "Draft – to be reviewed by the operator or a legal adviser before publication.",
      sections: [
        {
          title: "Controller",
          text: "3volution, Boulevard Lilienthal 39, 8152 Glattpark (Opfikon), Switzerland. E-mail: 333volution@gmail.com",
        },
        {
          title: "Principles",
          text: "We process personal data in accordance with the Swiss Federal Act on Data Protection (FADP). This website itself has no user accounts and no tracking.",
        },
        {
          title: "Server log files",
          text: "When you visit the website, the hosting provider stores technically necessary data (e.g. IP address, date and time, page requested, browser). This is used to operate the site securely and is deleted after a short time.",
        },
        {
          title: "Fonts",
          text: "Fonts are served directly from our server. No data is sent to Google Fonts or other third parties.",
        },
        {
          title: "Online booking (Shore)",
          text: "Online booking is provided by Shore (Shore GmbH, Munich, Germany). The booking tool is embedded on the home page and loads from Shore when you open the page, which sends your IP address to Shore. If you book, the details you enter (e.g. name, contact details, chosen service and time) are also sent to Shore and stored there to manage your appointment. Shore's privacy policy also applies.",
        },
        {
          title: "External links",
          text: "Links to Google Maps, Instagram and the 3volution Coffee website lead to third-party or separate websites. Their privacy policies apply once you click them.",
        },
        {
          title: "Contacting us",
          text: "If you contact us by e-mail or phone, we only use your details to handle your request.",
        },
        {
          title: "Your rights",
          text: "You can request information about the data we hold about you at any time, and ask for it to be corrected or deleted. Contact: 333volution@gmail.com",
        },
      ],
    },
  },
  notFound: {
    title: "This page doesn't exist.",
    text: "Back to the home page:",
  },
};
