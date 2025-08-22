import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
// If your app doesn't already include KaTeX styles globally,
// add `import "katex/dist/katex.min.css";` in app/layout.tsx or globals.css
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "14.10.4 Adding a Value Equal to the Mean Lowers Standard Deviation | Statistics",
  description:
    "See why adding numbers equal to the mean always shrinks a positive standard deviation. Includes one multiple‑choice drill and a Data Sufficiency example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">14. Statistics</h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.10.4 Adding a Number Equal to the Mean Lowers the Standard Deviation
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When you’re asked how to make a spread smaller, remember the floor:
          the smallest possible standard deviation is 0, which happens only when every element is identical.
        </p>

        <MustKnow>
          The minimum possible standard deviation is 0 (all values equal).
        </MustKnow>

        <p>
          On GMAT‑style problems that mention a positive standard deviation, a guaranteed way to reduce that
          deviation is to add values that match the current mean. Each added “mean‑value” pulls the set closer
          to the center without increasing spread.
        </p>

        <MustKnow>
          If a set’s standard deviation is greater than 0, appending values equal to the mean will strictly decrease the standard deviation.
        </MustKnow>

        <section aria-labelledby="worked-example" className="space-y-3">
          <h3 id="worked-example" className="text-xl font-semibold text-white">Quick check</h3>
          <p>
            Consider S = {`{3, 5, 7, 5}`}. The mean is
            {" "}
            <InlineMath math="\dfrac{3+5+7+5}{4}=\dfrac{20}{4}=5" />
            .
          </p>
          <p>
            The standard deviation of S is about 1.41. If we append another 5 (which equals the mean),
            the new deviation drops to roughly 1.26. The spread tightens because we added a central value.
          </p>
        </section>

        <section aria-labelledby="close-to-mean" className="space-y-3">
          <h3 id="close-to-mean" className="text-xl font-semibold text-white">“Close to” the mean can help—but not guaranteed</h3>
          <p>
            Being near the mean often reduces the deviation, but the exact cut‑off depends on the original data,
            so it’s not something GMAT questions will ask you to compute precisely.
          </p>
          <p>
            Example: S = {`{2, 5, 6, 11}`}. The mean is <InlineMath math="\dfrac{2+5+6+11}{4}=\dfrac{24}{4}=6" />.
            The standard deviation is about 3.24. If we add 9, the new deviation becomes about 3.14 (smaller).
            If we add 10 instead, the deviation increases to about 3.31. So “near” the mean doesn’t always shrink spread.
          </p>
        </section>

        <MustKnow>
          To definitely lower a positive standard deviation, add one or more values that are exactly equal to the current mean.
        </MustKnow>

        <MCQExample
          number={64}
          prompt={
            <>
              A data set has standard deviation <InlineMath math="x" /> and average 0.3, where <InlineMath math="x>0" />.
              Which pair of numbers, when both appended to the set, must produce a new standard deviation smaller than <InlineMath math="x" />?
            </>
          }
          options={[
            "1.3 and 1.3",
            "0.7 and 0.3",
            "1.3 and 0.3",
            "0.3 and 0.3",
            "0 and 1.3",
          ]}
          correct="0.3 and 0.3"
          solution={
            <>
              <p>
                To guarantee a decrease, add values that equal the mean. Appending two copies of 0.3 places more
                weight at the center and necessarily contracts the spread, so the new deviation is less than <InlineMath math="x" />.
              </p>
              <p>
                Adding a single 0.3 plus another value may or may not reduce spread—it depends on how far that other
                value sits from the mean. Therefore, the only must‑work choice is two copies of 0.3.
              </p>
            </>
          }
        />

        <ExampleCard
          number={65}
          title="Comparing standard deviations with one unknown (Data Sufficiency)"
          statements={[
            "Is the standard deviation of Set X greater than that of Set Y?",
            "Set X = {6, 6, 7, 1} and Set Y = {1, 7, 6, 6, n}",
            "1) The average of Set Y is 5.",
            "2) n = 5",
          ]}
          correctLetter="D"
          solution={
            <>
              <p>
                First compute the mean of Set X:
              </p>
              <p>
                <BlockMath math="\text{mean}_X=\dfrac{6+6+7+1}{4}=\dfrac{20}{4}=5" />
              </p>
              <p>
                The four known entries of Set Y are the same numbers as in Set X, so their mean (ignoring n) is also 5.
              </p>
              <p>
                Statement (1): If the average of Y is 5 and the four known values average to 5, then the fifth value must be
                <InlineMath math="n=5" />. Appending a value equal to the mean lowers the standard deviation, so
                SD(Y) &lt; SD(X). Sufficient.
              </p>
              <p>
                Statement (2): Directly tells us <InlineMath math="n=5" />. Again, adding the mean reduces spread, so
                SD(Y) &lt; SD(X). Sufficient.
              </p>
              <p>
                Each statement alone suffices. Answer: D.
              </p>
            </>
          }
        />

        <p>
          Bottom line: if the current standard deviation is positive, adding data points equal to the mean always
          compresses the spread. Values merely “close” to the mean might help, but only exact matches are a sure thing.
        </p>
      </article>
    </main>
  );
}