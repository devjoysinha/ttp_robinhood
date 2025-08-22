import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

// Note: Ensure KaTeX stylesheet is included globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "1.9 Estimate Whenever Possible in Data Insights | GMAT DI",
  description:
    "Learn why smart estimation is often all you need in GMAT Data Insights. See quick tactics, a percent‑change example, and a bounds‑based drill—without heavy computation.",
};

function Math({
  expr,
  display = false,
  ariaLabel,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const __html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    output: "html",
  });
  return display ? (
    <div
      aria-label={ariaLabel ?? expr}
      className="my-2 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html }}
    />
  ) : (
    <span
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          1. Introduction to Data Insights
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          1.9 Estimate Whenever Possible When Solving DI Questions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          On many Data Insights problems, you can reach the correct choice by
          making sensible approximations instead of grinding through exact
          arithmetic. The section rewards efficient reasoning: round numbers,
          compare magnitudes, set quick bounds, and move on when the choices are
          well separated.
        </p>

        <p>
          Start with estimation, then only switch to precise calculation if the
          answer options are tightly clustered or if the problem demands an
          exact value. This approach speeds you up and reduces mistakes from
          unnecessary computation.
        </p>

        <MustKnow>
          Estimation should be your default in Data Insights. Use rounding,
          benchmarks (such as halves, thirds, quarters), and upper/lower bounds.
          Compute exactly only when the choices are close or the prompt requires
          precision.
        </MustKnow>

        <section aria-labelledby="percent-change" className="space-y-3">
          <h3 id="percent-change" className="text-lg font-semibold text-white">
            Quick percent change, no heavy math
          </h3>
          <p>
            The percent change from an “old” value to a “new” value is
            <Math expr=" \\,\Delta\% \;=\; \dfrac{\text{new}-\text{old}}{\text{old}}\times 100\% " />
            If numbers are awkward, round to nearby friendly values to estimate.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt="A company’s revenue increases from 39.7 million dollars to 52.1 million dollars. Approximately what is the percent increase?"
          options={["20%", "25%", "30%", "35%", "40%"]}
          correct="30%"
          solution={
            <>
              <p>
                Round 39.7 to 40 and 52.1 to 52. Then
                <Math
                  display
                  expr="\dfrac{52-40}{40}\times 100\% \;=\; \dfrac{12}{40}\times 100\% \;=\; 30\%."
                />
                The 30% option is closest.
              </p>
              <p>
                Even with the exact values,
                <Math expr="\,(52.1-39.7)/39.7 \approx 12.4/39.7 \approx 31\%," />
                so 30% is the best rounded choice.
              </p>
            </>
          }
        />

        <section aria-labelledby="bounds" className="space-y-3">
          <h3 id="bounds" className="text-lg font-semibold text-white">
            Bounds tell you when you can stop
          </h3>
          <p>
            If you can prove an answer must be above or below a cutoff with
            conservative bounds, you don’t need the exact total. This is often
            faster and safer than detailed computation.
          </p>
        </section>

        <ExampleCard
          number={2}
          title="When do bounds suffice?"
          statements={[
            "Five monthly sales figures are 470, 490, 520, 540, and x. Is the average strictly greater than 500?",
            "1) 480 ≤ x ≤ 520",
            "2) The median of the five values is 520",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                The average exceeds 500 when the total exceeds 2,500. The sum of
                the four known months is 470 + 490 + 520 + 540 = 2,020, so we
                need x &gt; 480.
              </p>
              <p>
                Statement (1): x can be 480 (total 2,500, average 500) or 520
                (total 2,540, average 508). The result can be equal to or above
                500, so it’s not sufficient.
              </p>
              <p>
                Statement (2): Median is 520. With values 470, 490, 520, 540, x,
                for 520 to sit in the middle, we must have x ≥ 520. Then the
                total is at least 2,540, which is safely above 2,500, so the
                average is strictly greater than 500. Sufficient.
              </p>
              <p>Answer: B.</p>
            </>
          }
        />

        <p>
          Takeaway: estimation is about structure, not slogging through digits.
          Lean on rounding, benchmarks, and bounds. If the middle of the choices
          or a clear threshold is settled by quick approximations, you’ve done
          enough—submit and save the time.
        </p>
      </article>
    </main>
  );
}