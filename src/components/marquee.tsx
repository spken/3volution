import { Bean } from "./brand";

/** Infinite ticker. Content is duplicated once; the track moves -50%. */
export function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <li key={i} className="flex items-center">
          <span
            className={`px-6 font-display text-[clamp(2rem,4.5vw,4rem)] font-semibold leading-none sm:px-10 ${
              i % 2 ? "font-medium italic text-outline" : ""
            }`}
          >
            {item}
          </span>
          <Bean className="w-4 shrink-0 rotate-45 text-caramel sm:w-5" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative -rotate-[1.5deg] scale-[1.03] overflow-hidden bg-espresso py-6 text-cream sm:py-8">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
