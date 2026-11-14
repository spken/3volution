import type { Dictionary } from "./de";

export const en: Dictionary = {
  meta: {
    title: "3volution Coffee – Specialty coffee in Glattpark",
    description:
      "3volution Coffee at Boulevard Lilienthal 39 in Glattpark near Zurich: carefully made specialty coffee, pastries and a pause from your day – right next to Coiffeur 3volution.",
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
    eyebrow: "Specialty coffee · Glattpark, Zurich",
    lineA: "Good",
    lineB: "coffee",
    lineC: "takes time.",
    lead: "Espresso, filter coffee and fresh pastries – made with care, enjoyed without rush. Right next to Coiffeur 3volution.",
    primary: "See the menu",
    secondary: "How to find us",
    badge: "Specialty coffee · Glattpark · Zurich · ",
    badgeLabel: "Jump to the menu",
    scroll: "Scroll",
    note: "Opening hours coming soon",
    imageAlt: "Iced latte in a glass on a wooden table",
    detailAlt: "Cappuccino with latte art, seen from above",
  },
  marquee: ["Espresso", "Flat white", "Cold brew", "Cappuccino", "Filter coffee", "Chai latte", "Croissants"],
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
    title: "From salon to coffee bar.",
    paragraphs: [
      "Next door at Coiffeur 3volution we take care of hair, beauty and nails – and kept hearing the same question from our clients: “Is there a really good coffee anywhere around here?”",
      "Now there is, one door down. 3volution Coffee is our place for espresso, conversation and a short pause from the day. Same love for detail, different craft.",
    ],
    facts: [
      { value: "39", label: "Boulevard Lilienthal" },
      { value: "1", label: "door from the salon" },
      { value: "III", label: "things that matter" },
    ],
    imageAlt: "Milk being poured into a cappuccino, forming latte art",
    link: "Visit Coiffeur 3volution",
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
        label: "Filter & cold",
        imageAlt: "Iced coffee with milk in a tall glass",
        items: [
          { name: "V60 filter coffee", desc: "Rotating bean, hand poured", price: "6.50" },
          { name: "Cold brew", desc: "Steeped cold for 18 hours", price: "6.00" },
          { name: "Iced latte", desc: "Espresso, cold milk, ice", price: "6.50" },
          { name: "Espresso tonic", desc: "Tonic, ice, citrus, espresso", price: "7.00" },
          { name: "Chai latte", desc: "Spiced tea with steamed milk", price: "6.00" },
          { name: "Hot chocolate", desc: "Swiss chocolate, whole milk", price: "5.50" },
        ],
      },
      {
        id: "food",
        label: "Sweets & snacks",
        imageAlt: "Two croissants dusted with powdered sugar",
        items: [
          { name: "Butter croissant", desc: "Fresh from the bakery", price: "2.80" },
          { name: "Chocolate croissant", desc: "With dark chocolate", price: "3.50" },
          { name: "Cinnamon bun", desc: "Homemade, with cardamom", price: "4.80" },
          { name: "Banana bread", desc: "Moist, with walnuts", price: "4.50" },
          { name: "Overnight oats", desc: "Oats, yoghurt, seasonal fruit", price: "7.50" },
          { name: "Sandwich of the day", desc: "Changing daily, freshly made", price: "9.50" },
        ],
      },
    ],
  },
  statement:
    "A place to pause for a moment. For the espresso before your appointment, the flat white after – or just because.",
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
    addressNote: "Right next to Coiffeur 3volution",
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
      eyebrow: "Next door",
      title: "Coiffeur 3volution",
      text: "Hair · Beauty · Nail",
      cta: "Visit the salon",
    },
  },
  footer: {
    tagline: "Specialty coffee in Glattpark. Right next to Coiffeur 3volution.",
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
