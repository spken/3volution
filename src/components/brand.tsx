import type { SVGProps } from "react";

/** One bracketed slab "I", echoing the three bars of the 3volution logo. */
function slabI(x: number, y: number, w: number, h: number) {
  const bar = h * 0.095;
  const stemL = x + w * 0.31;
  const stemR = x + w * 0.69;
  const br = h * 0.08; // bracket depth
  return [
    `M${x},${y} H${x + w} V${y + bar}`,
    `Q${stemR + w * 0.02},${y + bar} ${stemR},${y + bar + br}`,
    `V${y + h - bar - br}`,
    `Q${stemR + w * 0.02},${y + h - bar} ${x + w},${y + h - bar}`,
    `V${y + h} H${x} V${y + h - bar}`,
    `Q${stemL - w * 0.02},${y + h - bar} ${stemL},${y + h - bar - br}`,
    `V${y + bar + br}`,
    `Q${stemL - w * 0.02},${y + bar} ${x},${y + bar} Z`,
  ].join(" ");
}

const markPath = [0, 1, 2].map((i) => slabI(i * 48, 0, 40, 60)).join(" ");

/** The "III" mark on its own. */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 136 60" fill="currentColor" aria-hidden="true" {...props}>
      <path d={markPath} />
    </svg>
  );
}

/** Full lockup: III cut by the 3VOLUTION wordmark, like the original logo. */
export function LogoLockup({ title = "3volution", ...props }: SVGProps<SVGSVGElement> & { title?: string }) {
  const bars = [0, 1, 2].map((i) => slabI(20 + i * 130, 5, 100, 240)).join(" ");
  return (
    <svg viewBox="0 0 400 250" fill="currentColor" role="img" aria-label={title} {...props}>
      <defs>
        <mask id="lockup-band">
          <rect width="400" height="250" fill="white" />
          <rect y="98" width="400" height="56" fill="black" />
        </mask>
      </defs>
      <path d={bars} mask="url(#lockup-band)" />
      <text
        x="200"
        y="143"
        textAnchor="middle"
        textLength="352"
        lengthAdjust="spacing"
        style={{ fontFamily: "var(--font-lato)", fontWeight: 300, fontSize: 50 }}
      >
        3VOLUTION
      </text>
    </svg>
  );
}

/** Header wordmark: small mark + name. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-6 w-auto" />
      <span className="flex flex-col leading-none">
        <span className="text-[0.95rem] font-light tracking-[0.22em]">3VOLUTION</span>
        <span className="mt-1 text-[0.55rem] font-bold tracking-[0.5em] text-caramel">COFFEE</span>
      </span>
    </span>
  );
}

/** A single coffee bean. */
export function Bean(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 56" aria-hidden="true" {...props}>
      <ellipse cx="20" cy="28" rx="18" ry="26" fill="currentColor" />
      <path
        d="M20 4 C 10 18, 30 36, 20 52"
        fill="none"
        stroke="var(--color-cream)"
        strokeOpacity=".55"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Soft organic wave used as a section edge. `flip` turns it upside down. */
export function Wave({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-[clamp(40px,7vw,110px)] w-full ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path
        fill="currentColor"
        d="M0,64 C180,10 360,0 560,38 C760,76 900,118 1120,92 C1260,76 1360,40 1440,28 L1440,120 L0,120 Z"
      />
    </svg>
  );
}

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
      <path d="M12 4v16M5 13l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
