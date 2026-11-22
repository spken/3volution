import { Fragment } from "react";

/** Renders `*text*` segments of a dictionary string as italics (editorial emphasis). */
export function rich(text: string, italicClass = "italic") {
  return text.split("*").map((part, i) =>
    i % 2 ? (
      <em key={i} className={italicClass}>
        {part}
      </em>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}
