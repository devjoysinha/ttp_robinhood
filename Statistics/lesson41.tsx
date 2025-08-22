import type { Metadata } from "next";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";

export const metadata: Metadata = {
  title: "14.11.3 When the Standard Deviation Is Not Zero | Statistics",
  description:
    "Learn quick tests to conclude a data set’s standard deviation is greater than zero: nonzero range, unequal extremes, and extreme not equal to the mean. Includes a Data Sufficiency example with full reasoning.",
};

type MathInlineProps = {
  expr: string;
  ariaLabel?: string;
  className?: string;
};

function MathInline({ expr, ariaLabel, className }: MathInlineProps) {
  const html = katex.renderToString(expr, { throwOnError: false });
  return (
    <span
      aria-label={ariaLabel}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
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
          14.11.3 When the Standard Deviation of a Set Is Not Zero
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Standard deviation is never negative and drops to zero only when every
          value in the list is identical. So, to prove the standard deviation is
          positive, it’s enough to show that at least two entries differ.
        </p>

        <MustKnow>
          <p className="mb-2">
            <MathInline expr="\,\sigma \ge 0\,," ariaLabel="sigma is greater than or equal to zero" /> and{" "}
            <MathInline expr="\,\sigma = 0\, \Longleftrightarrow\, \text{all data values are equal}" ariaLabel="sigma equals zero if and only if all data values are equal" />.
            If any two values are unequal,{" "}
            <MathInline expr="\sigma > 0" ariaLabel="sigma greater than zero" />.
          </p>
        </MustKnow>

        <section aria-labelledby="examples-positive-sd" className="space-y-3">
          <h3 id="examples-positive-sd" className="text-xl font-semibold text-white">
            Quick checks that force a positive standard deviation
          </h3>
          <p>
            Consider two small sets:
            {" "}
            <MathInline expr="A=\{2,2,2,6\}" ariaLabel="Set A equals 2, 2, 2, 6" /> and{" "}
            <MathInline expr="B=\{1,2,3,4\}" ariaLabel="Set B equals 1, 2, 3, 4" />.
            In both, not all values match, so both have{" "}
            <MathInline expr="\sigma>0" ariaLabel="sigma greater than zero" />.
          </p>

          <MustKnow>
            When none of the “all-equal” triggers hold, the set must vary, and
            the standard deviation is therefore positive.
          </MustKnow>

          <div className="space-y-2">
            <p className="font-semibold text-gray-100">Useful signals:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                Nonzero range:
                {" "}
                <MathInline
                  expr="\text{range}=\max(S)-\min(S)\neq 0 \;\Rightarrow\; \max(S)-\min(S)>0 \;\Rightarrow\; \max(S)>\min(S)"
                  ariaLabel="range equals max minus min not equal to zero implies max greater than min"
                />
                . So at least two values differ ⇒{" "}
                <MathInline expr="\sigma>0" ariaLabel="sigma greater than zero" />.
              </li>
              <li>
                Largest not equal to smallest:
                {" "}
                <MathInline expr="\max(S)\ne \min(S)" ariaLabel="max not equal min" />
                {" "}immediately shows the set is not constant ⇒{" "}
                <MathInline expr="\sigma>0" ariaLabel="sigma greater than zero" />.
              </li>
              <li>
                An extreme not equal to the mean: if{" "}
                <MathInline expr="\max(S)\ne \bar{x}" ariaLabel="max not equal mean" /> or{" "}
                <MathInline expr="\min(S)\ne \bar{x}" ariaLabel="min not equal mean" />, then not all values are the same (a constant set would have every value equal to{" "}
                <MathInline expr="\bar{x}" ariaLabel="mean" />).
              </li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="range-not-zero" className="space-y-3">
          <h3 id="range-not-zero" className="text-xl font-semibold text-white">
            When the range is not zero
          </h3>
          <p>
            If{" "}
            <MathInline
              expr="\text{range}=\max(S)-\min(S)\ne 0"
              ariaLabel="range equals max minus min not equal to zero"
            />
            , then{" "}
            <MathInline expr="\max(S)>\min(S)" ariaLabel="max greater than min" />
            , which guarantees at least two different values. Hence{" "}
            <MathInline expr="\sigma>0" ariaLabel="sigma greater than zero" />.
          </p>
        </section>

        <section aria-labelledby="extreme-not-mean" className="space-y-3">
          <h3 id="extreme-not-mean" className="text-xl font-semibold text-white">
            When an extreme value is not equal to the mean
          </h3>
          <p>
            Suppose a 4‑value set has mean 10 and the largest value,{" "}
            <MathInline expr="D" ariaLabel="D" />, is not 10. Using{" "}
            <MathInline
              expr="\text{sum}=\text{mean}\times \text{count}"
              ariaLabel="sum equals mean times count"
            />
            , we get{" "}
            <MathInline expr="\text{sum}=10\times 4=40" ariaLabel="sum equals 10 times 4 equals 40" /> and
            {" "}
            <MathInline expr="A+B+C+D=40" ariaLabel="A plus B plus C plus D equals 40" />.
            If all four values were equal, each would be 10; but{" "}
            <MathInline expr="D\ne 10" ariaLabel="D not equal 10" /> contradicts that. Therefore, not all values are the same and{" "}
            <MathInline expr="\sigma>0" ariaLabel="sigma greater than zero" />.
          </p>
        </section>

        <MustKnow>
          If the range is nonzero, if the largest differs from the smallest, or
          if an extreme value differs from the mean, the set must have
          variation—so the standard deviation is strictly positive.
        </MustKnow>

        <section aria-labelledby="ds-practice" className="space-y-3">
          <h3 id="ds-practice" className="text-xl font-semibold text-white">
            Data Sufficiency Practice
          </h3>

          <ExampleCard
            number={71}
            title="Is the standard deviation positive?"
            statements={[
              "A parking lot records the number of cars Monday–Friday of last week. The standard deviation of those five daily counts is p. Is p > 0?",
              "1) The average (arithmetic mean) number of cars for Monday–Friday was 120.",
              "2) Monday’s count was less than Friday’s count.",
            ]}
            correctLetter="B"
            solution={
              <>
                <p>
                  A standard deviation of zero means all five daily counts are identical.
                  Otherwise, the standard deviation is positive.
                </p>
                <p>
                  <strong>Statement (1):</strong> Knowing only the mean doesn’t reveal whether
                  the five values are all equal. For instance, they could be
                  {` `}
                  {"{120,120,120,120,120}"} (then p = 0) or {`{100,110,120,130,140}`} (then p > 0).
                  Not sufficient.
                </p>
                <p>
                  <strong>Statement (2):</strong> Monday{" < "}Friday ensures at least two values differ,
                  so the data are not all the same. Therefore{" "}
                  <MathInline expr="p>0" ariaLabel="p greater than zero" />. Sufficient.
                </p>
                <p>
                  Only statement (2) is sufficient. Answer: B.
                </p>
              </>
            }
          />
        </section>
      </article>
    </main>
  );
}