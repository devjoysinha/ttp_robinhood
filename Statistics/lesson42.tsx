import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";

export const metadata: Metadata = {
  title: "14.11.3 Standard Deviation > 0 | Statistics",
  description:
    "Learn how to tell when a set’s standard deviation must be greater than zero: range > 0, extreme values not equal to the mean, and more. Includes a GMAT‑style Data Sufficiency example with full reasoning.",
};

function Math({
  expr,
  display = false,
  className = "",
}: {
  expr: string;
  display?: boolean;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: display,
    output: "htmlAndMathml",
  });
  if (display) {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: html }}
        aria-label="mathematical expression"
      />
    );
  }
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
      aria-label="mathematical expression"
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.11.3 When a Set’s Standard Deviation Is Not Zero
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Standard deviation is never negative. It is exactly zero only when
          every value in the set is identical. The moment at least two entries
          differ, the spread is positive, so the standard deviation is greater
          than zero.
        </p>

        <MustKnow>
          If a data set does not consist of a single repeated value, then its
          standard deviation is positive. Equivalently, showing that any two
          values differ guarantees a nonzero standard deviation.
        </MustKnow>

        <section aria-labelledby="quick-checks">
          <h3 id="quick-checks" className="sr-only">
            Quick checks for nonzero standard deviation
          </h3>
          <p>Here are two tiny sets that clearly have some spread:</p>
          <ul className="list-disc pl-6">
            <li>
              Set A = {"{2, 2, 2, 6}"} → not all values match, so SD {">"} 0
            </li>
            <li>
              Set B = {"{1, 2, 3, 4}"} → values differ, so SD {">"} 0
            </li>
          </ul>
        </section>

        <section aria-labelledby="indirect-tests">
          <h3 id="indirect-tests" className="sr-only">
            Indirect tests that force SD {" > 0"}
          </h3>
          <p>
            Often, you won’t see all terms in a set. In those cases, look for
            clues that prevent all values from being equal:
          </p>
          <ul className="list-disc pl-6">
            <li>The range is not zero.</li>
            <li>The largest value differs from the smallest value.</li>
            <li>The largest or smallest value is not equal to the mean.</li>
          </ul>
          <p>
            If any of the above is true, the set cannot be all one value, so the
            standard deviation must be positive.
          </p>
        </section>

        <section aria-labelledby="range-nonzero">
          <h3 id="range-nonzero" className="font-semibold text-white">
            When the range is nonzero
          </h3>
          <p>
            The range measures the gap between the biggest and smallest entries:
          </p>
          <Math
            display
            expr={`\\text{range} = \\max(S) - \\min(S)`}
            className="text-lg"
          />
          <p>
            If the range is not zero, then
            <Math expr={`\\;\\max(S) - \\min(S) > 0\\;`} /> so
            <Math expr={`\\;\\max(S) > \\min(S)`} />. That already proves at
            least two distinct values appear in the set, which forces
            <Math expr={`\\;\\text{SD} > 0`} />.
          </p>
        </section>

        <section aria-labelledby="extreme-vs-mean">
          <h3 id="extreme-vs-mean" className="font-semibold text-white">
            When an extreme value isn’t the mean
          </h3>
          <p>
            Suppose a set has four numbers A, B, C, and D (with D the largest),
            and the mean is 10. Then
          </p>
          <Math display expr={`\\text{sum} = \\text{average} \\times \\text{count} = 10\\times4 = 40`} />
          <Math display expr={`A + B + C + D = 40`} />
          <p>
            If we’re told the largest value D is not 10, then the four numbers
            cannot all be 10. Therefore, the entries are not all equal, and the
            standard deviation is positive.
          </p>
        </section>

        <MustKnow>
          Two reliable triggers for SD {">"} 0:
          <br />
          • range {">"} 0 (so max {">"} min), or
          <br />• an extreme value (max or min) differs from the mean.
          <br />
          Either condition prevents all terms from being the same.
        </MustKnow>

        <section aria-labelledby="ds-example">
          <h3 id="ds-example" className="sr-only">
            Data Sufficiency example: Is p greater than zero?
          </h3>

          <ExampleCard
            number={71}
            title="Is the standard deviation positive?"
            statements={[
              "For Monday through Friday last week, the standard deviation of the daily number of cars in lot X is p. Is p > 0?",
              "1) The average (arithmetic mean) number of cars for Monday–Friday is 120.",
              "2) Monday’s car count was less than Friday’s car count.",
            ]}
            correctLetter="B"
            solution={
              <>
                <p>
                  We must decide whether{" "}
                  <Math expr={`p > 0`} />. A standard deviation is zero only if
                  all five daily counts are equal; otherwise it’s positive.
                </p>

                <p>
                  <strong>Statement (1):</strong> Knowing only the five-day
                  mean, 120, lets us compute the total but doesn’t reveal
                  whether the five daily counts are identical or not. The counts
                  could all be 120 (SD = 0) or vary around 120 (SD {">"} 0).
                  Insufficient.
                </p>

                <p>
                  <strong>Statement (2):</strong> Monday’s count is strictly
                  less than Friday’s count. That guarantees at least two
                  different values in the set, so the spread is positive and{" "}
                  <Math expr={`p > 0`} />. Sufficient.
                </p>

                <p>
                  Therefore, statement (2) alone is sufficient, while statement
                  (1) alone is not. Answer: B.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: to prove a standard deviation is nonzero, you don’t need
          the exact spread. You only need to rule out the “all values equal”
          scenario using quick checks like range {">"} 0 or extremes that differ
          from the mean.
        </p>
      </article>
    </main>
  );
}