import type { Metadata } from "next";
import katex from "katex";
// Important: make sure to import KaTeX CSS once globally in app/layout.tsx
// import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

type MathProps = {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
};

function Math({ expr, display = false, ariaLabel }: MathProps) {
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
  });
  return (
    <span
      role="math"
      aria-label={ariaLabel}
      className={display ? "block my-4 overflow-x-auto" : ""}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "9.10.2 Converging Rates: Different Start Times | Rate Problems",
  description:
    "How to set up converging motion when objects depart at different times. Learn the time-setup trick, keep units consistent, and walk through two worked examples (including a multiple‑choice problem).",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          9. Rate Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          9.10.2 Variation 2: Two Objects Leave at Different Times
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In many “meet in the middle” problems, the two travelers don’t start
          at the same moment. That’s fine: just reflect the departure gap in how
          you define their travel times.
        </p>

        <p>
          The clean setup is to give the later starter a time of{" "}
          <Math expr="t" ariaLabel="t" /> hours. Then the earlier starter has
          been moving for the extra lead time as well, so its time is{" "}
          <Math expr="t+\Delta" ariaLabel="t plus delta" />, where{" "}
          <Math expr="\Delta" ariaLabel="delta" /> is the difference in start
          times (expressed in hours).
        </p>

        <MustKnow>
          If two objects move toward each other but begin at different times:
          - Let the later object’s travel time be t.
          - Let the earlier object’s travel time be t + (start‑time gap in
          hours).
          Then apply Distance = Rate × Time for each object and set the sum of
          the distances equal to the initial separation.
        </MustKnow>

        <section aria-labelledby="bus-mini-example" className="space-y-3">
          <h3 id="bus-mini-example" className="text-xl font-semibold text-white">
            Mini‑Example: Two buses leave at different times
          </h3>
          <p>
            A regular bus leaves city A heading toward city B at a steady{" "}
            <Math expr="40\ \text{mph}" ariaLabel="forty miles per hour" />. Half an hour later, an express bus
            leaves city B toward city A at{" "}
            <Math expr="55\ \text{mph}" ariaLabel="fifty five miles per hour" />. The cities are{" "}
            <Math expr="210" ariaLabel="two hundred ten" /> miles apart. How many hours after the
            express departs do they meet?
          </p>
          <p>
            Let the express bus travel for <Math expr="t" ariaLabel="t" /> hours. The regular bus
            travels for <Math expr="t+0.5" ariaLabel="t plus 0.5" /> hours.
          </p>
          <p>
            Write the converging equation (sum of distances = total distance):
          </p>
          <Math
            display
            expr="40(t+0.5)+55t=210"
            ariaLabel="forty times t plus zero point five plus fifty five t equals two hundred ten"
          />
          <Math display expr="95t+20=210" />
          <Math display expr="95t=190" />
          <Math display expr="t=2" />
          <p>
            They meet <strong>2 hours</strong> after the express bus leaves.
          </p>

          <p className="text-gray-400">
            Unit check: because speeds are in miles per hour, the half‑hour gap
            must be written as <Math expr="\tfrac{1}{2}" ariaLabel="one half" /> hour, not 30.
          </p>
        </section>

        <MCQExample
          number={13}
          prompt="The rail distance between Newark and Boston is 245 miles. Train A leaves Newark at 12:00 pm at a constant 50 mph toward Boston. Train B leaves Boston at 12:30 pm at a constant 60 mph toward Newark. On parallel tracks, at what time do they pass each other?"
          options={["2:00 pm", "2:30 pm", "3:00 pm", "3:30 pm", "4:00 pm"]}
          correct="2:30 pm"
          solution={
            <>
              <p>
                Give the later train (Train B) time <Math expr="t" /> hours.
                Then Train A, which left 30 minutes earlier, travels{" "}
                <Math expr="t+\tfrac{1}{2}" ariaLabel="t plus one half" /> hours.
              </p>
              <p>Apply Distance = Rate × Time and set the sum to 245:</p>
              <Math
                display
                expr="50\bigl(t+\tfrac{1}{2}\bigr)+60t=245"
                ariaLabel="fifty times open parenthesis t plus one half close parenthesis plus sixty t equals two hundred forty five"
              />
              <Math display expr="50t+25+60t=245" />
              <Math display expr="110t=220" />
              <Math display expr="t=2" />
              <p>
                Train B travels 2 hours starting at 12:30 pm, so they meet at{" "}
                <strong>2:30 pm</strong>. As a check, Train A travels{" "}
                <Math expr="2.5" ariaLabel="two point five" /> hours from 12:00 pm, which is also{" "}
                <strong>2:30 pm</strong>.
              </p>
            </>
          }
        />

        <p>
          Key takeaway: anchor the later departure at <Math expr="t" />, add the
          start‑time gap to the earlier departure, keep units consistent, and
          use a single equation where the two distances add to the separation.
        </p>
      </article>
    </main>
  );
}