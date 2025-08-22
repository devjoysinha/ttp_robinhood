// app/gmat/msr/6-7-execution/page.tsx
import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { Katex } from "@/components/ui/Katex";

export const metadata: Metadata = {
  title: "6.7 MSR: Execution Is the Differentiator | GMAT",
  description:
    "Multi‑Source Reasoning doesn’t demand new theory—it demands precise execution. Learn the four execution habits that consistently lift MSR performance.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Multi‑Source Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.7 The Key to Strong MSR Performance: Execution
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Multi‑Source Reasoning (MSR) doesn’t introduce fresh theory. The
          questions draw on skills you already sharpened elsewhere—Quant,
          Critical Reasoning, reading charts, and synthesizing information.
        </p>

        <MustKnow>
          You’re not learning new math or new logic just for MSR. You’re reusing
          tools you already have—only now across multiple tabs and formats.
        </MustKnow>

        <p>
          That’s good news: preparing for MSR isn’t about stockpiling formulas
          or memorizing novel frameworks. The separator is execution—how cleanly
          and carefully you work from prompt to answer.
        </p>

        <MustKnow>
          To excel on MSR, focus on execution. Be exacting at each step, from
          understanding the ask to validating the final choice.
        </MustKnow>

        <section aria-labelledby="exec-habits" className="space-y-3">
          <h3 id="exec-habits" className="text-xl font-semibold text-white">
            Four execution habits that consistently pay off
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Read the question stem with intent. Pin down what the answer must
              deliver (e.g., a single choice, all that apply, inference vs.
              computation).
            </li>
            <li>
              Define your mission before digging into data. Identify which tab,
              figure, or paragraph is likely relevant, and why.
            </li>
            <li>
              Work step by step. Track assumptions, units, and constraints so
              you don’t redo work or mix contexts across tabs.
            </li>
            <li>
              Hunt for details. Names, dates, labels, and footnotes frequently
              control the answer—verify them before you commit.
            </li>
          </ul>
        </section>

        <section
          aria-labelledby="quick-math"
          className="rounded-lg border border-white/10 bg-neutral-800/40 p-4"
        >
          <h3 id="quick-math" className="mb-2 text-lg font-semibold text-white">
            Quick math reminders that often surface in MSR
          </h3>
          <p className="mb-2">
            When a prompt includes light computation, lean on compact identities
            rather than long calculations:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li className="flex flex-wrap items-center gap-2">
              Total from average and count:
              <span className="sr-only">
                total equals n times x bar, where x bar is the mean
              </span>
              <Katex ariaLabel="T equals n times x bar">
                {String.raw`T = n \cdot \bar{x}`}
              </Katex>
            </li>
            <li className="flex flex-wrap items-center gap-2">
              Percent:
              <span className="sr-only">
                percent equals part over whole times one hundred percent
              </span>
              <Katex ariaLabel="Percent equals part over whole times 100 percent">
                {String.raw`\%\;=\;\dfrac{\text{part}}{\text{whole}}\times 100\%`}
              </Katex>
            </li>
            <li className="flex flex-wrap items-center gap-2">
              Weighted average:
              <span className="sr-only">
                x bar equals the sum of w sub i times x sub i over the sum of w
                sub i
              </span>
              <Katex ariaLabel="Weighted average equals sum of w i x i over sum of w i" display>
                {String.raw`\bar{x}=\dfrac{\sum w_i x_i}{\sum w_i}`}
              </Katex>
            </li>
          </ul>
          <p className="mt-3 text-sm text-gray-400">
            Tip: On MSR, the challenge is usually finding the right numbers and
            conditions—not heavy arithmetic.
          </p>
        </section>

        <p>
          Bottom line: MSR rewards precision and discipline. If you keep the
          task explicit, move methodically, and verify fine print, your accuracy
          goes up—without learning a single new formula.
        </p>
      </article>
    </main>
  );
}


// components/ui/Katex.tsx
"use client";

import { useEffect, useMemo } from "react";
import katex from "katex";

type KatexProps = {
  children: string;
  display?: boolean;
  ariaLabel?: string;
};

export function Katex({ children, display = false, ariaLabel }: KatexProps) {
  // Load KaTeX CSS once on the client for proper rendering
  useEffect(() => {
    const existing = document.getElementById("katex-css");
    if (!existing) {
      const link = document.createElement("link");
      link.id = "katex-css";
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css";
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    }
  }, []);

  const html = useMemo(
    () =>
      katex.renderToString(children, {
        throwOnError: false,
        displayMode: display,
        output: "html",
        strict: "warn",
      }),
    [children, display]
  );

  const Tag = display ? "div" : "span";

  return (
    <Tag
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      className={display ? "my-1 overflow-x-auto" : "align-baseline"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}