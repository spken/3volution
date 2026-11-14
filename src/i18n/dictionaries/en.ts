import type { Dictionary } from "./de";

export const en: Dictionary = {
  meta: {
    title: "3volution Coffee – Specialty coffee in Glattpark",
    description:
      "3volution Coffee at Boulevard Lilienthal 39 in Glattpark near Zurich: specialty coffee, matcha, iced coffee, Turkish çay and fine desserts. Hair, beauty and coffee – all in one place.",
  },
  nav: {
    skip: "Skip to content",
    links: [
      { href: "#philosophy", label: "Philosophy" },
      { href: "#menu", label: "Menu" },
      { href: "#story", label: "Story" },
      { href: "#visit", label: "Visit" },
    ],
    hairdresser: "Hair salon",
    cta: "Plan your visit",
    open: "Open menu",
    close: "Close menu",
    language: "Language",
    home: "3volution Coffee – Home",
  },
  hero: {
    eyebrow: "Hair · Beauty · Coffee · Glattpark, Zurich",
    lineA: "Good",
    lineB: "coffee",
    lineC: "takes time.",
    lead: "Specialty coffee, matcha, iced coffee, Turkish çay and fine desserts – made with care, enjoyed without rush. Right inside 3volution, where hair, beauty and coffee come together.",
    primary: "See the menu",
    secondary: "How to find us",
    badge: "Hair · Beauty · Coffee · Glattpark · ",
    badgeLabel: "Jump to the menu",
    scroll: "Scroll",
    note: "Opening hours coming soon",
    imageAlt: "Iced latte in a glass on a wooden table",
    detailAlt: "Cappuccino with latte art, seen from above",
  },
  marquee: ["Specialty coffee", "Matcha", "Iced coffee", "Turkish çay", "Flat white", "Cappuccino", "Desserts"],
  pillars: {
    eyebrow: "Philosophy",
    title: "Three things matter.",
    intro:
      "Three bars in our logo, three things in every cup. That's all it takes – but we get those three right.",
    items: [
      {
        numeral: "I",
        title: "The bean",
        text: "Specialty beans from small roasters, bought fresh and in small batches, so every cup tastes of where it comes from.",
        alt: "Portafilter, coffee beans and a cappuccino on a wooden board",
      },
      {
        numeral: "II",
        title: "The craft",
        text: "Precisely ground, extracted to the second, milk steamed with feeling. Craft you can taste rather than see.",
        alt: "Hand holding freshly roasted coffee beans",
      },
      {
        numeral: "III",
        title: "The time",
        text: "An espresso between two appointments or a long afternoon. Here, coffee takes as long as it takes.",
        alt: "Filter coffee being poured by hand",
      },
    ],
  },
  story: {
    eyebrow: "Story",
    title: "Three worlds. One place.",
    paragraphs: [
      "3volution is growing – and becoming more than hair & beauty. Next to cuts, colour, lashes and brows there is now specialty coffee: hair, beauty and coffee, all in one place on Boulevard Lilienthal.",
      "Since our grand opening in November 2026, 3volution Coffee is a place to arrive, unwind, get pampered and enjoy – for the espresso before your appointment, the matcha after or a çay in between, with or without an appointment.",
    ],
    facts: [
      { value: "39", label: "Boulevard Lilienthal" },
      { value: "III", label: "worlds: hair, beauty, coffee" },
      { value: "1", label: "place for it all" },
    ],
    imageAlt: "Milk being poured into a cappuccino, forming latte art",
    link: "Hair & beauty at 3volution",
  },
  menu: {
    eyebrow: "Menu",
    title: "What we pour.",
    note: "Sample menu & prices · final menu coming soon",
    currency: "CHF",
    milk: "Oat or almond milk +0.80",
    tabs: [
      {
        id: "espresso",
        label: "Espresso bar",
        imageAlt: "Espresso in a glass on a saucer",
        items: [
          { name: "Espresso", desc: "Short, dense, fine crema", price: "4.20" },
          { name: "Doppio", desc: "Double shot, double depth", price: "5.20" },
          { name: "Cortado", desc: "Espresso cut with a little warm milk", price: "5.00" },
          { name: "Cappuccino", desc: "Classic, with silky foam", price: "5.50" },
          { name: "Flat white", desc: "Double ristretto, velvety milk", price: "6.00" },
          { name: "Latte macchiato", desc: "Lots of milk, gentle espresso", price: "5.80" },
        ],
      },
      {
        id: "slow",
        label: "Matcha, çay & iced",
        imageAlt: "Iced coffee with milk in a tall glass",
        items: [
          { name: "Matcha latte", desc: "Matcha with steamed milk", price: "6.50" },
          { name: "Iced matcha latte", desc: "Matcha, cold milk, ice", price: "6.80" },
          { name: "Iced coffee", desc: "Espresso over ice, with or without milk", price: "6.00" },
          { name: "Iced latte", desc: "Espresso, cold milk, ice", price: "6.50" },
          { name: "Turkish çay", desc: "Black tea in a tulip glass", price: "3.50" },
          { name: "Hot chocolate", desc: "Swiss chocolate, whole milk", price: "5.50" },
        ],
      },
      {
        id: "food",
        label: "Desserts & pastries",
        imageAlt: "Two croissants dusted with powdered sugar",
        items: [
          { name: "Butter croissant", desc: "Fresh from the bakery", price: "2.80" },
          { name: "Chocolate croissant", desc: "With dark chocolate", price: "3.50" },
          { name: "Cinnamon bun", desc: "Homemade, with cardamom", price: "4.80" },
          { name: "Banana bread", desc: "Moist, with walnuts", price: "4.50" },
          { name: "Dessert of the day", desc: "Changing selection of fine desserts", price: "6.50" },
        ],
      },
    ],
  },
  statement:
    "First beauty. Then hair. And to finish? Coffee. A place to arrive, unwind and enjoy.",
  gallery: {
    eyebrow: "Moments",
    title: "One cup, many stories.",
    note: "Placeholder images – real photos coming soon.",
    alts: [
      "Café counter with an espresso machine",
      "Two hands toasting with cappuccinos",
      "Iced coffee with milk in a glass",
      "Croissants dusted with powdered sugar",
      "Cappuccinos with latte art between plants",
      "Black coffee in a white cup",
      "Espresso in a glass",
    ],
  },
  visit: {
    eyebrow: "Visit",
    title: "Come by.",
    addressLabel: "Address",
    addressNote: "Inside 3volution – Hair · Beauty · Coffee",
    maps: "Get directions",
    hoursLabel: "Opening hours",
    hoursNote: "Placeholder – final hours coming soon.",
    hours: [
      { days: "Mon – Fri", time: "07:00 – 18:00" },
      { days: "Sat", time: "08:00 – 17:00" },
      { days: "Sun", time: "closed" },
    ],
    contactLabel: "Contact",
    imageAlt: "Window table with a coffee cup and a notebook",
    neighbour: {
      eyebrow: "Under one roof",
      title: "Coiffeur 3volution",
      text: "Hair · Beauty",
      cta: "Visit the salon",
    },
  },
  footer: {
    tagline: "Hair · Beauty · Coffee. Specialty coffee, matcha and more in Glattpark.",
    navTitle: "Explore",
    contactTitle: "Contact",
    legalTitle: "Legal",
    impressum: "Legal notice",
    privacy: "Privacy",
    rights: "All rights reserved.",
    credit: "Photos: Unsplash (placeholders)",
    top: "Back to top",
  },
  legal: {
    back: "Back to the homepage",
    todo: "To be provided",
    impressum: {
      title: "Legal notice",
      operatorLabel: "Operator",
      ownerLabel: "Owner",
      uidLabel: "UID (company ID)",
      contactLabel: "Contact",
      disclaimerTitle: "Disclaimer",
      disclaimer:
        "The content of this website is created with the greatest possible care. No guarantee is given for the accuracy, completeness or timeliness of the content, in particular prices and opening hours.",
      photosTitle: "Image credits",
      photos: "Placeholder photos from Unsplash (unsplash.com), used under the Unsplash License.",
    },
    privacy: {
      title: "Privacy policy",
      draft: "Draft – to be reviewed by the operator or legal counsel before publication.",
      sections: [
        {
          title: "Controller",
          text: "3volution, Boulevard Lilienthal 39, 8152 Glattpark (Opfikon), Switzerland. E-mail: 333volution@gmail.com",
        },
        {
          title: "Principle",
          text: "We process personal data in accordance with the Swiss Federal Act on Data Protection (FADP). This website is purely informational: there are no forms, no customer accounts, no orders and no tracking.",
        },
        {
          title: "Server log files",
          text: "When you visit the website, the hosting provider stores technically necessary data (e.g. IP address, date and time, page requested, browser). This is used to operate the site securely and is deleted after a short time.",
        },
        {
          title: "Fonts and images",
          text: "Fonts and images are served directly from our own server. No data is transmitted to Google Fonts or other third parties.",
        },
        {
          title: "External links",
          text: "Links to Google Maps, Instagram and the Coiffeur 3volution website lead to third-party services. Their privacy policies apply only once you click them.",
        },
        {
          title: "Getting in touch",
          text: "If you contact us by e-mail or phone, we use your details only to handle your enquiry.",
        },
        {
          title: "Your rights",
          text: "You can request information about the data we hold about you at any time and ask for it to be corrected or deleted. Contact: 333volution@gmail.com",
        },
      ],
    },
  },
  notFound: {
    title: "This page doesn't exist.",
    text: "Maybe an espresso helps. Or the way back:",
  },
};
