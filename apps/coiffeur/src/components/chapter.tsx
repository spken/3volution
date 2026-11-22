import type { ReactNode } from "react";
import { rich } from "@/lib/rich";
import { Reveal } from "./motion";

/** "(02) Leistungen": numbered chapter label, the coiffeur site's section signature. */
export function Chapter({ n, label, className = "" }: { n: number; label: string; className?: string }) {
  return (
    <p className={`flex items-baseline gap-3 ${className}`}>
      <span className="font-display text-lg italic">({String(n).padStart(2, "0")})</span>
      <span className="eyebrow">{label}</span>
    </p>
  );
}

/** Section title in Fraunces, `*word*` rendered italic in fall red (or `accent`). */
export function Title({
  text,
  className = "text-display-lg",
  accent = "text-rust",
  as: Tag = "h2",
  children,
}: {
  text: string;
  className?: string;
  accent?: string;
  as?: "h1" | "h2" | "h3";
  children?: ReactNode;
}) {
  return (
    <Reveal>
      <Tag className={className}>
        {rich(text, `italic ${accent}`)}
        {children}
      </Tag>
    </Reveal>
  );
}
