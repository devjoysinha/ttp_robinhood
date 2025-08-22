import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import katex from "katex";

export const metadata: Metadata = {
  title: "17.16 Probability as a Fraction | Probability",
  description:
    "Probabilities are fractions, so fraction rules apply. Learn how shared denominators let you compare probabilities quickly. Includes a Data Sufficiency example with full reasoning.",
};

function Math({
  expr,
  block = false,
  ariaLabel,
  className,
}: {
  expr: string;
  block?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  const html = katex.renderToString(expr, {
    throwOnError: false,
    displayMode: block,
    strict: "ignore",
  });
  const Tag = block ? "div" : "span";
  return (
    <Tag
      className={className}
      role="math"
      aria-label={ariaLabel ?? expr}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          17. Probability
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          17.16 Probability as a Fraction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A probability is a fraction: favorable outcomes over all possible outcomes.
          Because of that, any valid rule for fractions can be used to reason about probabilities.
          This is especially handy when two probabilities share the same (positive) denominator.
        </p>

        <div aria-hidden="true" className="space-y-1">
          <Math
            block
            expr={`P(\\text{event}) = \\dfrac{\\text{successful outcomes}}{\\text{total outcomes}}`}
          />
          <Math block expr={`P(E) = \\dfrac{e}{d+e}\\quad\\text{and}\\quad P(D) = \\dfrac{d}{d+e}`} />
        </div>

        <MustKnow>
          If two positive fractions have the same positive denominator, the fraction with the
          larger numerator is greater. When probabilities share the same sample size in the
          denominator, you can compare them by comparing numerators only.
        </MustKnow>

        <section aria-labelledby="why-shared-denominators" className="space-y-3">
          <h3 id="why-shared-denominators" className="text-xl font-semibold text-white">
            Why shared denominators matter
          </h3>
          <p>
            If two probabilities are measured over the same total number of outcomes, the one
            with more favorable outcomes is larger. Also, if you expand the sample space by
            adding the same number of non‑relevant outcomes to both, the ordering between
            the probabilities does not change.
          </p>
        </section>

        <ExampleCard
          number={30}
          title="Comparing probabilities via shared denominators (Data Sufficiency)"
          statements={[
            "A vault has d diamonds and e emeralds only. Is the probability of randomly selecting an emerald greater than the probability of selecting a diamond?",
            "1) For some positive constant k, (d + k)/(d + e + k) > (e + k)/(d + e + k).",
            "2) If r rubies are added to the vault, then d/(d + e + r) > e/(d + e + r).",
          ]}
          correctLetter="D"
          solution={
            <>
              <p className="mb-2">
                The question asks whether P(emerald) &gt; P(diamond), i.e., whether e &gt; d when the
                denominator is the same total count.
              </p>

              <p className="mt-4 font-semibold text-white">Statement (1):</p>
              <div className="mt-2 space-y-2">
                <Math block expr={`\\dfrac{d + k}{d + e + k} > \\dfrac{e + k}{d + e + k} \\quad (k>0)`} />
                <p>
                  Both fractions are positive and have the same positive denominator <Math expr="d+e+k" />.
                  With shared denominators, compare numerators:
                </p>
                <Math block expr={`d + k > e + k \\;\\;\\Rightarrow\\;\\; d > e`} />
                <p>
                  If <Math expr="d" /> exceeds <Math expr="e" />, then P(diamond) &gt; P(emerald),
                  so the answer to the stem (“Is P(emerald) &gt; P(diamond)?”) is No. This is a
                  definitive result. Statement (1) is sufficient.
                </p>
              </div>

              <p className="mt-6 font-semibold text-white">Statement (2):</p>
              <div className="mt-2 space-y-2">
                <Math block expr={`\\dfrac{d}{d + e + r} > \\dfrac{e}{d + e + r}`} />
                <p>
                  Again, denominators match and are positive. Compare numerators directly:
                </p>
                <Math block expr={`d > e`} />
                <p>
                  Thus P(diamond) &gt; P(emerald), which answers the stem. Statement (2) is also sufficient.
                </p>
              </div>

              <p className="mt-6">
                Each statement alone determines the comparison. Therefore, the correct choice is D
                (each statement alone is sufficient).
              </p>
            </>
          }
        />

        <section aria-labelledby="big-picture" className="space-y-3">
          <h3 id="big-picture" className="text-xl font-semibold text-white">
            Big picture
          </h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Probabilities are fractions. When the denominators are equal and positive, compare numerators.
            </li>
            <li>
              Adding the same set of unrelated outcomes to both probabilities’ denominators does not change
              which probability is larger.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}