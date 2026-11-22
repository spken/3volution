import { Bean, LogoMark } from "./brand";
import { Parallax, ScrollWords } from "./motion";

export function Statement({ text }: { text: string }) {
  return (
    <section className="relative mx-auto max-w-[1600px] px-5 py-28 sm:px-8 lg:px-12 lg:py-44">
      <LogoMark className="mx-auto mb-12 h-7 w-auto text-senf-deep" />
      <ScrollWords
        text={text}
        className="mx-auto max-w-5xl text-center font-display text-[clamp(1.9rem,4.6vw,4.25rem)] font-medium leading-[1.08] tracking-[-0.02em]"
      />
      <Parallax offset={140} className="pointer-events-none absolute left-[6%] top-[22%] w-8 text-rust">
        <Bean className="w-full -rotate-12" />
      </Parallax>
      <Parallax offset={90} className="pointer-events-none absolute bottom-[18%] right-[8%] w-6 text-ink">
        <Bean className="w-full rotate-[60deg]" />
      </Parallax>
    </section>
  );
}
