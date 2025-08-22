import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
// KaTeX note: ensure the KaTeX CSS is included globally (e.g., in app/layout).
// If not already added, include: import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "19.23 Canceling Terms in a Sequence | Functions and Sequences",
  description:
    "Learn telescoping techniques for sequences: how consecutive terms cancel in sums and products, with worked examples and Data Sufficiency drills.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          19. Functions and Sequences
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          19.23 Canceling Terms in a Sequence
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In many sequence problems, you’re asked to add or multiply several consecutive terms.
          Even when there’s no obvious repeating pattern, a lot of these expressions simplify
          because adjacent pieces cancel. This is called telescoping.
        </p>

        <MustKnow>
          Telescoping happens when consecutive terms share parts that subtract or divide out.
          Before computing, rewrite terms to expose cancellation:
          - For sums, look for a representation like{" "}
          <InlineMath math="\;t_k = f(k) - f(k+1)\;" /> so the series collapses.
          - For products, aim for ratios such as{" "}
          <InlineMath math="\;t_k = \dfrac{g(k+1)}{g(k)}\;" /> so nearly everything cancels.
        </MustKnow>

        <section aria-labelledby="why-it-works" className="space-y-4">
          <h3 id="why-it-works" className="text-xl font-semibold text-white">
            Why cancellation works
          </h3>
          <p>
            Here’s a classic telescoping sum. Decompose each term:
          </p>
          <BlockMath math="\frac{1}{k(k+1)}=\frac{1}{k}-\frac{1}{k+1}" />
          <p>
            Summing from <InlineMath math="k=1" /> to <InlineMath math="n" /> gives
          </p>
          <BlockMath math="\sum_{k=1}^{n}\left(\frac{1}{k}-\frac{1}{k+1}\right) = 1 - \frac{1}{n+1}" />
          <p>
            All the middle terms cancel, leaving only the first and last pieces. The same idea powers many products:
          </p>
          <BlockMath math="\prod_{k=a}^{b}\frac{k+1}{k} = \frac{b+1}{a}" />
          <p>
            Once written this way, evaluating the result is quick and reliable.
          </p>
        </section>

        <MCQExample
          number={1}
          prompt="Evaluate the sum S = ∑ from k = 1 to 5 of 1/(k(k+1))."
          options={["2/3", "3/4", "5/6", "4/5", "7/8"]}
          correct="5/6"
          solution={
            <>
              <p>Rewrite each term using partial fractions:</p>
              <BlockMath math="\frac{1}{k(k+1)}=\frac{1}{k}-\frac{1}{k+1}" />
              <p>Then the sum telescopes:</p>
              <BlockMath math="\sum_{k=1}^{5}\left(\frac{1}{k}-\frac{1}{k+1}\right)=1-\frac{1}{6}=\frac{5}{6}" />
              <p>So S = 5/6.</p>
            </>
          }
        />

        <section aria-labelledby="ds-practice" className="space-y-4">
          <h3 id="ds-practice" className="text-xl font-semibold text-white">
            Data Sufficiency Drills
          </h3>

          <ExampleCard
            number={2}
            title="Telescoping sum with unknown bounds"
            statements={[
              "For integers m and n with 1 ≤ m < n ≤ 100, let S = ∑ from k = m to n of 1/(k(k+1)). What is the value of S?",
              "1) n − m = 4",
              "2) m = 3",
            ]}
            correctLetter="C"
            solution={
              <>
                <p>
                  Use the telescoping identity:
                </p>
                <BlockMath math="\sum_{k=m}^{n}\frac{1}{k(k+1)}=\frac{1}{m}-\frac{1}{n+1}" />
                <p>
                  Statement (1): Knowing only the gap n − m = 4 does not give a unique value for
                  1/m − 1/(n+1). Not sufficient.
                </p>
                <p>
                  Statement (2): Knowing only m = 3 leaves n unknown, so the sum is not fixed.
                  Not sufficient.
                </p>
                <p>
                  Together: m = 3 and n − m = 4 ⇒ n = 7, hence
                </p>
                <BlockMath math="S=\frac{1}{3}-\frac{1}{8}=\frac{5}{24}" />
                <p>Unique value found. Sufficient together. Answer: C.</p>
              </>
            }
          />

          <ExampleCard
            number={3}
            title="Telescoping product with unknown bounds"
            statements={[
              "For integers a and b with 1 ≤ a < b ≤ 50, let P = ∏ from k = a to b of (k+1)/k. What is the value of P?",
              "1) b − a = 5",
              "2) b = 12",
            ]}
            correctLetter="C"
            solution={
              <>
                <p>
                  Collapse the product:
                </p>
                <BlockMath math="\prod_{k=a}^{b}\frac{k+1}{k}=\frac{b+1}{a}" />
                <p>
                  Statement (1): b − a = 5 is not enough to find a or b, so P is not determined.
                  Not sufficient.
                </p>
                <p>
                  Statement (2): b = 12 alone leaves a unknown. Not sufficient.
                </p>
                <p>
                  Together: b = 12 and b − a = 5 ⇒ a = 7, so
                </p>
                <BlockMath math="P=\frac{12+1}{7}=\frac{13}{7}" />
                <p>Unique value found. Sufficient together. Answer: C.</p>
              </>
            }
          />
        </section>

        <section aria-labelledby="takeaways" className="space-y-3">
          <h3 id="takeaways" className="text-xl font-semibold text-white">
            Key takeaways
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Try to express sum terms as differences, e.g.,{" "}
              <InlineMath math="f(k)-f(k+1)" />, to make a telescoping series.
            </li>
            <li>
              For products, look for successive ratios, e.g.,{" "}
              <InlineMath math="g(k+1)/g(k)" />, so most factors cancel.
            </li>
            <li>
              After cancellation, you’ll usually keep only the first and last surviving pieces,
              which makes evaluation fast and clean.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}