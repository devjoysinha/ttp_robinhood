import type { Metadata } from "next";
import katex from "katex";
import "katex/dist/katex.min.css";

import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";

function KInline({ expr, ariaLabel }: { expr: string; ariaLabel?: string }) {
  return (
    <span
      className="inline-block align-middle"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{
        __html: katex.renderToString(expr, {
          throwOnError: false,
          output: "html",
          displayMode: false,
        }),
      }}
    />
  );
}

export const metadata: Metadata = {
  title: "17.16 A Probability Is a Fraction | Probability",
  description:
    "Probabilities are fractions—so all the usual fraction rules apply. Learn how equal denominators let you compare numerators and why adding irrelevant outcomes won’t flip comparisons. Includes a Data Sufficiency example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.16 A Probability Is a Fraction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A probability is simply a fraction: favorable outcomes over total
          outcomes. Because of that, any principle you rely on for fractions
          works the same way for probabilities.
        </p>

        <MustKnow>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              If two positive probabilities share the same positive denominator,
              you can compare them by comparing their numerators alone.
            </li>
            <li>
              Adding outcomes that aren’t the target (for example, a new third
              category) increases only the denominator for both target events,
              so the comparison between those target probabilities does not
              change.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="ds-example-title" className="space-y-4">
          <h3 id="ds-example-title" className="sr-only">
            Data Sufficiency Example
          </h3>

          <ExampleCard
            number={30}
            title="Comparing probabilities by using fraction rules"
            statements={[
              "A vault contains only diamonds and emeralds. There are d diamonds and e emeralds. Is the probability of selecting an emerald greater than the probability of selecting a diamond?",
              "1) (d + k)/(d + e + k) > (e + k)/(e + d + k), where k is a positive constant",
              "2) If r rubies are added to the vault, then d/(d + e + r) > e/(d + e + r)",
            ]}
            correctLetter="D"
            solution={
              <>
                <p className="font-semibold">Stem goal</p>
                <p>
                  We need to know whether P(emerald) is greater than
                  P(diamond), which is equivalent to asking whether{" "}
                  <KInline expr="e > d" ariaLabel="e greater than d" />.
                </p>

                <p className="font-semibold">Statement (1)</p>
                <p>
                  We’re told{" "}
                  <KInline
                    expr="\dfrac{d + k}{d + e + k} > \dfrac{e + k}{e + d + k}"
                    ariaLabel="(d plus k) over (d plus e plus k) greater than (e plus k) over (e plus d plus k)"
                  />
                  , with <KInline expr="k > 0" ariaLabel="k greater than 0" />.
                  The denominators are equal and positive (
                  <KInline expr="d+e+k" ariaLabel="d plus e plus k" />), so the
                  comparison reduces to the numerators:{" "}
                  <KInline expr="d + k > e + k" ariaLabel="d plus k greater than e plus k" />
                  , which implies <KInline expr="d > e" ariaLabel="d greater than e" />.
                  Therefore, P(diamond) is greater than P(emerald), and the
                  answer to the question is No. Statement (1) is sufficient.
                </p>

                <p className="font-semibold">Statement (2)</p>
                <p>
                  After adding rubies, we have{" "}
                  <KInline
                    expr="\dfrac{d}{d + e + r} > \dfrac{e}{d + e + r}"
                    ariaLabel="d over (d plus e plus r) greater than e over (d plus e plus r)"
                  />
                  . Again, both fractions have the same positive denominator, so
                  we compare numerators:{" "}
                  <KInline expr="d > e" ariaLabel="d greater than e" />. This is
                  enough to conclude P(diamond) &gt; P(emerald) in the original
                  setting as well; adding a third category affected only the
                  denominator equally for both target events and does not change
                  their order. Statement (2) is also sufficient.
                </p>

                <p className="font-semibold">Conclusion</p>
                <p>
                  Each statement alone determines the answer. Correct answer: D.
                </p>
              </>
            }
          />
        </section>

        <p>
          Takeaway: treat probabilities like fractions. When denominators match
          and are positive, look to the numerators. And when you add outcomes
          that don’t count toward either of the events you’re comparing, you
          won’t flip which probability is larger.
        </p>
      </article>
    </main>
  );
}