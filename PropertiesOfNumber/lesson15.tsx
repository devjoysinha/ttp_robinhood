import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
// If your app provides a shared KaTeX component, prefer that.
// The project’s global KaTeX styles should be loaded in the root layout.
// import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "4.6.4 Adding Numbers with Opposite Signs | Properties of Numbers",
  description:
    "Learn how to add numbers with different signs: the result lies between the two addends. Use absolute values to determine the sign and magnitude, with quick checks, examples, and two Data Sufficiency drills.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          4. Properties of Numbers
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          4.6.4 Adding Numbers with Opposite Signs
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When you add a positive number to a negative number, the sum always falls
          between the two addends on the number line. It will be larger than the negative
          addend (you’re moving right) and smaller than the positive addend (you’re moving
          left).
        </p>

        <MustKnow>
          <p className="mb-2">
            To add numbers with different signs, compare their absolute values:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              If <InlineMath math="|x| &gt; |y|" /> and x and y have opposite signs, compute{" "}
              <InlineMath math="|x| - |y|" /> and keep the sign of the number with the greater
              absolute value (here, x).
            </li>
            <li>
              If <InlineMath math="|y| &gt; |x|" />, do <InlineMath math="|y| - |x|" /> and keep
              the sign of y.
            </li>
          </ul>
        </MustKnow>

        <section aria-labelledby="worked-examples">
          <h3 id="worked-examples" className="sr-only">
            Worked examples
          </h3>
          <p>Quick checks:</p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              <span className="font-mono text-gray-100">−8 + 6 = −2</span> (|−8| &gt; |6|, keep the negative sign)
            </li>
            <li>
              <span className="font-mono text-gray-100">10 + (−9) = 1</span> (|10| &gt; |−9|, keep the positive sign)
            </li>
            <li>
              <span className="font-mono text-gray-100">5x + (−10x) = −5x</span> (combine like terms)
            </li>
          </ul>
        </section>

        <MCQExample
          number={31}
          prompt="What is the value of −7 + 12?"
          options={["−19", "−5", "0", "5", "19"]}
          correct="5"
          solution={
            <>
              <p>
                The addends have opposite signs. Since <InlineMath math="|12| &gt; |{-7}|"/>
                , subtract absolute values: <InlineMath math="12 - 7 = 5" /> and keep the
                sign of 12 (positive). So the sum is 5.
              </p>
            </>
          }
        />

        <p>
          The absolute‑value comparison tells you both the size of the result and which
          sign survives. If the larger magnitude is positive, the sum is positive; if it’s
          negative, the sum is negative. If the magnitudes match, the sum is 0.
        </p>

        <ExampleCard
          number={32}
          title="Is x + y positive?"
          statements={[
            "1) x and y have opposite signs and |x| > |y|.",
            "2) x > 0",
          ]}
          correctLetter="C"
          solution={
            <>
              <p>
                We need the sign of <InlineMath math="x + y" />.
              </p>
              <p>
                <strong>Statement (1):</strong> Opposite signs and{" "}
                <InlineMath math="|x| &gt; |y|" /> guarantee the sum takes x’s sign, but
                we don’t know whether x is positive or negative. Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> Knowing only <InlineMath math="x &gt; 0" /> is
                not enough; for instance, x = 3 and y = −10 gives a negative sum, while
                x = 9 and y = −2 gives a positive sum. Not sufficient.
              </p>
              <p>
                <strong>Together:</strong> From (1), the sum has x’s sign. From (2),
                x is positive, so <InlineMath math="x + y &gt; 0" />. Sufficient together.
              </p>
              <p>Answer: C.</p>
            </>
          }
        />

        <ExampleCard
          number={33}
          title="Is 5x + (−10x) negative?"
          statements={["1) x > 0", "2) x < 0"]}
          correctLetter="D"
          solution={
            <>
              <p>
                Simplify first: <InlineMath math="5x + (−10x) = −5x" />. The sign is the
                opposite of x’s sign, unless x = 0 (in which case it’s 0).
              </p>
              <p>
                <strong>Statement (1):</strong> If <InlineMath math="x &gt; 0" />, then{" "}
                <InlineMath math="−5x &lt; 0" />. Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> If <InlineMath math="x &lt; 0" />, then{" "}
                <InlineMath math="−5x &gt; 0" />. Sufficient.
              </p>
              <p>
                Each statement alone determines the sign. Answer: D.
              </p>
            </>
          }
        />

        <p>
          Big picture: adding unlike signs is a tug‑of‑war of magnitudes. Subtract the
          absolute values to get the size, and let the stronger magnitude dictate the sign.
        </p>
      </article>
    </main>
  );
}