import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

function KaTeX({ expr, block = false, ariaLabel }: { expr: string; block?: boolean; ariaLabel?: string }) {
  const html = katex.renderToString(expr, {
    displayMode: block,
    throwOnError: false,
    strict: "ignore",
    trust: true,
    output: "html",
  });
  if (block) {
    return (
      <div
        className="katex-block my-3"
        role="img"
        aria-label={ariaLabel ?? `math: ${expr}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <span
      className="katex-inline"
      role="img"
      aria-label={ariaLabel ?? `math: ${expr}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export const metadata: Metadata = {
  title: "7.3.6 Price Plans: Which One Makes Sense? | GMAT Word Problems",
  description:
    "Compare pricing structures and compute total cost using piecewise rates. Includes a car‑rental formula derivation with KaTeX and two multiple‑choice practice problems with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">7. General Word Problems</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.3.6 Choosing a Price Structure / How much will I pay?
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Price‑structure questions mirror “salary plan” problems: you’re given alternative ways to be charged,
          and your job is to translate each plan into an expression for total cost, then compare.
          Most plans are piecewise: one rate for an initial chunk and a different rate after that.
        </p>

        <MustKnow>
          - Write a cost expression that matches how the plan charges across time or usage (often piecewise).
          - Combine the parts into a single formula in terms of the number of days/units.
          - To find the break‑even point between two plans, set the total‑cost expressions equal and solve.
        </MustKnow>

        <section aria-labelledby="rental-derivation">
          <h3 id="rental-derivation" className="text-xl font-semibold text-white">
            A quick template: first‑day vs. later‑days rental
          </h3>
          <p>
            Suppose a rental company charges d dollars for the first day and{" "}
            <KaTeX expr="d/4" ariaLabel="d over 4" /> dollars per day for every additional day. If a customer keeps the
            item for x days, the total cost is:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              First day: <KaTeX expr="d" />
            </li>
            <li>
              Remaining days: <KaTeX expr="x-1" /> days at <KaTeX expr="d/4" /> each, so{" "}
              <KaTeX expr="(d/4)\,(x-1)" ariaLabel="d over 4 times (x minus 1)" />
            </li>
          </ul>
          <p>Add the parts:</p>
          <KaTeX block expr="d + \frac{d}{4}(x-1)" ariaLabel="d plus d over 4 times (x minus 1)" />
          <p>Simplify to a compact form (handy for algebra and comparisons):</p>
          <KaTeX
            block
            expr="d + \frac{dx}{4} - \frac{d}{4} \;=\; \frac{4d}{4} + \frac{dx}{4} - \frac{d}{4} \;=\; \frac{(3d + dx)}{4} \;=\; d\left(\frac{x+3}{4}\right)"
            ariaLabel="d plus dx over 4 minus d over 4 equals (3d+dx)/4 equals d times (x+3)/4"
          />
          <p>
            So a compact, equivalent expression for the total is{" "}
            <strong>
              <KaTeX expr="d\left(\frac{x+3}{4}\right)" />
            </strong>{" "}
            dollars.
          </p>
        </section>

        <MCQExample
          number={21}
          prompt={
            <>
              Company A rents a car for $50 on day 1 and $40 per day thereafter. Company B charges $35 per day for the
              first two days and $50 per day from day 3 on. If the car is rented for more than two days, for how many
              total days will the two companies charge the same amount?
            </>
          }
          options={["3 days", "4 days", "5 days", "6 days", "7 days"]}
          correct="4 days"
          solution={
            <>
              <p>
                Let D be the total number of rental days (D &gt; 2). Then:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>
                  A: <KaTeX expr="50 + 40(D-1)" />
                </li>
                <li>
                  B: first two days cost <KaTeX expr="2\cdot 35 = 70" />, then <KaTeX expr="50" /> per day afterward:{" "}
                  <KaTeX expr="70 + 50(D-2)" />
                </li>
              </ul>
              <p>Set them equal and solve:</p>
              <KaTeX block expr="50 + 40(D-1) \;=\; 70 + 50(D-2)" />
              <KaTeX block expr="50 + 40D - 40 \;=\; 70 + 50D - 100" />
              <KaTeX block expr="10 + 40D \;=\; -30 + 50D" />
              <KaTeX block expr="40 \;=\; 10D \;\;\Rightarrow\;\; D = 4" />
              <p>They break even at 4 days.</p>
            </>
          }
        />

        <MCQExample
          number={22}
          prompt={
            <>
              An airline employee pays full price until the first $500 of annual spending. After crossing $500, the
              employee receives 80% off, i.e., pays only 20% of the full fare for the amount beyond $500. If the
              employee spent $3{","}000 in total that year, what was the total full‑fare value of the tickets purchased?
            </>
          }
          options={["$3,000", "$5,000", "$7,000", "$11,000", "$13,000"]}
          correct="$13,000"
          solution={
            <>
              <p>
                Let <KaTeX expr="x" /> be the full‑fare total. The employee pays:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>$500 at full price, plus</li>
                <li>
                  20% of the remainder: <KaTeX expr="0.2\,(x - 500)" />
                </li>
              </ul>
              <p>Set the sum equal to $3,000 and solve for x:</p>
              <KaTeX block expr="500 + 0.2(x-500) \;=\; 3000" />
              <KaTeX block expr="500 + 0.2x - 100 \;=\; 3000" />
              <KaTeX block expr="0.2x + 400 \;=\; 3000" />
              <KaTeX block expr="0.2x \;=\; 2600 \;\;\Rightarrow\;\; x = 13000" />
              <p>Thus, the full‑fare total was $13,000.</p>
            </>
          }
        />

        <MustKnow>
          - For tiered pricing, keep the thresholds straight (e.g., “first day,” “first two days,” “after $500”).
          - Express each portion precisely, then add them.
          - To compare plans, equate total‑cost expressions and solve for the variable (days, units, etc.).
        </MustKnow>
      </article>
    </main>
  );
}