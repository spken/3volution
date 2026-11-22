import { ArrowDown } from "./brand";

/** Circular rotating text badge. Pass positioning (e.g. `absolute …`) via className. */
export function Badge({
  text,
  href,
  label,
  className = "",
}: {
  text: string;
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`group grid size-32 place-items-center rounded-full bg-senf text-ink shadow-[0_20px_50px_-20px_rgba(58,18,13,.6)] transition-transform duration-700 ease-out-expo hover:scale-105 sm:size-40 ${className}`}
    >
      <svg viewBox="0 0 200 200" className="absolute inset-0 size-full animate-spin-slow" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
        </defs>
        <text
          fill="currentColor"
          textLength="477"
          lengthAdjust="spacing"
          style={{ fontFamily: "var(--font-lato)", fontSize: 15, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}
        >
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="grid size-12 place-items-center rounded-full border border-ink/25 transition-colors duration-500 group-hover:bg-ink group-hover:text-senf sm:size-14">
        <ArrowDown className="size-5 transition-transform duration-500 ease-out-expo group-hover:translate-y-0.5" />
      </span>
    </a>
  );
}
