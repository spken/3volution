import { openingHours, site } from "./site";

/** Booking requests are sent over WhatsApp; nothing is stored on our side. */
export type BookingRequest = {
  name: string;
  date: Date;
  time: string;
  guests: string;
  note?: string;
};

/** How far ahead guests can request a spot. */
export const BOOKING_WINDOW_DAYS = 60;
/** Last bookable slot is this long before closing. */
const LAST_SLOT_BEFORE_CLOSE_MIN = 30;
const SLOT_STEP_MIN = 30;

export const closedWeekdays = Object.entries(openingHours)
  .filter(([, hours]) => hours === null)
  .map(([day]) => Number(day));

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};
const toHHMM = (min: number) => `${String(Math.floor(min / 60)).padStart(2, "0")}:${String(min % 60).padStart(2, "0")}`;

/** Bookable times for a day. Past slots are dropped when `date` is today. */
export function timeSlots(date: Date, now = new Date()): string[] {
  const hours = openingHours[date.getDay()];
  if (!hours) return [];
  const [open, close] = hours.map(toMinutes);
  const isToday = date.toDateString() === now.toDateString();
  const earliest = isToday ? now.getHours() * 60 + now.getMinutes() + SLOT_STEP_MIN : 0;

  const slots: string[] = [];
  for (let t = open; t <= close - LAST_SLOT_BEFORE_CLOSE_MIN; t += SLOT_STEP_MIN) {
    if (t >= earliest) slots.push(toHHMM(t));
  }
  return slots;
}

/** wa.me deep link, optionally with a prefilled message. Opens the app on mobile, WhatsApp Web on desktop. */
export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export type BookingMessageCopy = {
  greeting: string;
  name: string;
  date: string;
  time: string;
  guests: string;
  note: string;
  thanks: string;
};

export function bookingMessage(req: BookingRequest, copy: BookingMessageCopy, locale: string) {
  const date = req.date.toLocaleDateString(locale, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const lines = [
    copy.greeting,
    "",
    `${copy.name}: ${req.name.trim()}`,
    `${copy.date}: ${date}`,
    `${copy.time}: ${req.time}`,
    `${copy.guests}: ${req.guests}`,
  ];
  if (req.note?.trim()) lines.push(`${copy.note}: ${req.note.trim()}`);
  lines.push("", copy.thanks);
  return lines.join("\n");
}
