"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CalendarIcon, CheckIcon, RotateCcwIcon } from "lucide-react";
import { de as deLocale, enGB } from "react-day-picker/locale";
import type { Dictionary } from "@/i18n/dictionaries/de";
import type { Locale } from "@/i18n/config";
import { BOOKING_WINDOW_DAYS, bookingMessage, closedWeekdays, timeSlots, whatsappUrl } from "@/lib/booking";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight, WhatsAppIcon } from "./brand";
import { Reveal, SplitReveal } from "./motion";

type T = Dictionary["booking"];
type Errors = Partial<Record<"name" | "guests" | "date" | "time", string>>;

const GUEST_OPTIONS = ["1", "2", "3", "4", "5", "6", "7+"] as const;
const EASE = [0.16, 1, 0.3, 1] as const;

/** Shared control sizing: larger, softer fields than the shadcn defaults. */
const control = "h-11 rounded-xl bg-cream px-3.5 text-base md:text-base";

export function Booking({ t, lang }: { t: T; lang: Locale }) {
  const f = t.form;
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const intl = lang === "de" ? "de-CH" : "en-GB";

  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [dateOpen, setDateOpen] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [sentUrl, setSentUrl] = useState<string>();

  const nameRef = useRef<HTMLInputElement>(null);
  const guestsRef = useRef<HTMLButtonElement>(null);
  const dateRef = useRef<HTMLButtonElement>(null);
  const timeRef = useRef<HTMLButtonElement>(null);

  // Only computed after a date is picked, i.e. never during prerender.
  const slots = date ? timeSlots(date) : [];
  const guestLabel = (v: string) =>
    v === "7+" ? f.guestMore : v === "1" ? f.guestOne : f.guestMany.replace("{n}", v);

  const clearError = (key: keyof Errors) => setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));

  const onPickDate = (d: Date | undefined) => {
    setDate(d);
    setDateOpen(false);
    clearError("date");
    // Keep the chosen time only if it still exists on the new day
    if (d && time && !timeSlots(d).includes(time)) setTime("");
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {
      name: name.trim() ? undefined : f.errors.name,
      guests: guests ? undefined : f.errors.guests,
      date: date ? undefined : f.errors.date,
      time: time ? undefined : f.errors.time,
    };
    setErrors(next);

    const firstInvalid = [
      [next.name, nameRef],
      [next.guests, guestsRef],
      [next.date, dateRef],
      [next.time, timeRef],
    ].find(([err]) => err)?.[1] as React.RefObject<HTMLElement> | undefined;
    if (firstInvalid || !date) {
      firstInvalid?.current?.focus();
      return;
    }

    const text = bookingMessage(
      { name, date, time, guests: guests === "7+" ? f.guestMore : guests, note },
      t.message,
      intl,
    );
    const url = whatsappUrl(text);
    window.open(url, "_blank", "noopener,noreferrer");
    setSentUrl(url);
  };

  const reset = () => {
    setName("");
    setGuests("");
    setDate(undefined);
    setTime("");
    setNote("");
    setErrors({});
    setSentUrl(undefined);
  };

  return (
    <section id="book" className="mx-auto max-w-[1600px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Intro */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-6 text-rust">{t.eyebrow}</p>
          </Reveal>
          <SplitReveal text={t.title} className="text-display-lg" />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/80">{t.lead}</p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-col gap-5 rounded-[1.5rem] bg-oxblood p-6 text-cream sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div>
                <p className="font-display text-xl font-semibold">{t.directTitle}</p>
                <p className="mt-1 text-sm text-cream/80">
                  {t.directText} <span className="whitespace-nowrap tabular-nums">{site.whatsapp}</span>
                </p>
              </div>
              <a
                href={whatsappUrl(t.chatGreeting)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-senf px-5 py-3 text-sm font-bold text-ink transition-colors hover:bg-cream sm:self-auto"
              >
                <WhatsAppIcon className="size-4" />
                {t.directCta}
                <ArrowUpRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-[1.75rem] border border-ink/15 bg-foam p-6 shadow-[0_40px_80px_-50px_rgba(58,18,13,.45)] sm:p-10">
            <div className="mb-8 flex items-center justify-between gap-4">
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">{f.title}</h3>
              <span className="grid size-10 place-items-center rounded-full bg-whatsapp/10 text-whatsapp">
                <WhatsAppIcon className="size-5" />
              </span>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              {sentUrl ? (
                <motion.div
                  key="sent"
                  role="status"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="py-6"
                >
                  <span className="grid size-14 place-items-center rounded-full bg-rust text-cream">
                    <CheckIcon className="size-7" strokeWidth={1.8} />
                  </span>
                  <p className="mt-6 font-display text-3xl font-semibold">{f.sentTitle}</p>
                  <p className="mt-3 max-w-md leading-relaxed text-ink/80">{f.sentText}</p>
                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <a
                      href={sentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-rust underline-offset-4 hover:underline"
                    >
                      <WhatsAppIcon className="size-4" />
                      {f.sentRetry}
                    </a>
                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex items-center gap-2 text-sm text-ink/70 underline-offset-4 hover:text-ink hover:underline"
                    >
                      <RotateCcwIcon className="size-3.5" />
                      {f.sentReset}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  noValidate
                  onSubmit={onSubmit}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <FieldGroup className="gap-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field data-invalid={!!errors.name}>
                        <FieldLabel htmlFor={id("name")}>{f.name}</FieldLabel>
                        <Input
                          ref={nameRef}
                          id={id("name")}
                          name="name"
                          autoComplete="name"
                          placeholder={f.namePlaceholder}
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            clearError("name");
                          }}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? id("name-error") : undefined}
                          className={control}
                        />
                        <FieldError id={id("name-error")}>{errors.name}</FieldError>
                      </Field>

                      <Field data-invalid={!!errors.guests}>
                        <FieldLabel htmlFor={id("guests")}>{f.guests}</FieldLabel>
                        <Select
                          value={guests}
                          onValueChange={(v) => {
                            setGuests(v);
                            clearError("guests");
                          }}
                        >
                          <SelectTrigger
                            ref={guestsRef}
                            id={id("guests")}
                            aria-invalid={!!errors.guests}
                            aria-describedby={errors.guests ? id("guests-error") : undefined}
                            className={`w-full data-[size=default]:h-11 ${control}`}
                          >
                            <SelectValue placeholder={f.guestsPlaceholder} />
                          </SelectTrigger>
                          <SelectContent position="popper" className="bg-foam">
                            {GUEST_OPTIONS.map((v) => (
                              <SelectItem key={v} value={v} className="py-2 text-base md:text-sm">
                                {guestLabel(v)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FieldError id={id("guests-error")}>{errors.guests}</FieldError>
                      </Field>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field data-invalid={!!errors.date}>
                        <FieldLabel htmlFor={id("date")}>{f.date}</FieldLabel>
                        <Popover open={dateOpen} onOpenChange={setDateOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              ref={dateRef}
                              id={id("date")}
                              type="button"
                              variant="outline"
                              data-empty={!date}
                              aria-invalid={!!errors.date}
                              aria-describedby={errors.date ? id("date-error") : undefined}
                              className={`w-full justify-between border-input font-normal hover:bg-cream data-[empty=true]:text-muted-foreground ${control}`}
                            >
                              {date
                                ? date.toLocaleDateString(intl, { weekday: "short", day: "numeric", month: "long" })
                                : f.datePlaceholder}
                              <CalendarIcon className="text-muted-foreground" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent align="start" className="w-auto rounded-2xl bg-foam p-2">
                            <DatePicker selected={date} onSelect={onPickDate} lang={lang} />
                          </PopoverContent>
                        </Popover>
                        <FieldError id={id("date-error")}>{errors.date}</FieldError>
                      </Field>

                      <Field data-invalid={!!errors.time} data-disabled={!date}>
                        <FieldLabel htmlFor={id("time")}>{f.time}</FieldLabel>
                        <Select
                          value={time}
                          disabled={!date}
                          onValueChange={(v) => {
                            setTime(v);
                            clearError("time");
                          }}
                        >
                          <SelectTrigger
                            ref={timeRef}
                            id={id("time")}
                            aria-invalid={!!errors.time}
                            aria-describedby={errors.time ? id("time-error") : undefined}
                            className={`w-full tabular-nums data-[size=default]:h-11 ${control}`}
                          >
                            <SelectValue placeholder={date ? f.timePlaceholder : f.timeNeedsDate} />
                          </SelectTrigger>
                          <SelectContent position="popper" className="max-h-72 bg-foam">
                            {slots.map((s) => (
                              <SelectItem key={s} value={s} className="py-2 text-base tabular-nums md:text-sm">
                                {s}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FieldError id={id("time-error")}>{errors.time}</FieldError>
                      </Field>
                    </div>

                    <Field>
                      <FieldLabel htmlFor={id("note")}>
                        {f.note} <span className="font-normal text-muted-foreground">({f.optional})</span>
                      </FieldLabel>
                      <Textarea
                        id={id("note")}
                        name="note"
                        rows={3}
                        maxLength={500}
                        placeholder={f.notePlaceholder}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        className="min-h-24 rounded-xl bg-cream px-3.5 py-3 text-base md:text-base"
                      />
                    </Field>

                    <div className="space-y-4 pt-2">
                      <Button type="submit" className="h-13 w-full gap-2.5 rounded-full text-base hover:bg-rust-deep">
                        <WhatsAppIcon className="size-5" />
                        {f.submit}
                      </Button>
                      <FieldDescription className="text-center text-xs">{f.disclaimer}</FieldDescription>
                    </div>
                  </FieldGroup>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Rendered only inside the open popover, so "today" is always the visitor's today. */
function DatePicker({
  selected,
  onSelect,
  lang,
}: {
  selected?: Date;
  onSelect: (d: Date | undefined) => void;
  lang: Locale;
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const last = new Date(today);
  last.setDate(today.getDate() + BOOKING_WINDOW_DAYS);
  // Today is only bookable while slots remain
  const firstDay = timeSlots(today).length ? today : new Date(today.getTime() + 864e5);

  return (
    <Calendar
      mode="single"
      selected={selected}
      onSelect={onSelect}
      locale={lang === "de" ? deLocale : enGB}
      weekStartsOn={1}
      startMonth={today}
      endMonth={last}
      defaultMonth={selected ?? firstDay}
      disabled={[{ before: firstDay }, { after: last }, { dayOfWeek: closedWeekdays }]}
      autoFocus
      className="bg-transparent [--cell-size:--spacing(9)]"
    />
  );
}
