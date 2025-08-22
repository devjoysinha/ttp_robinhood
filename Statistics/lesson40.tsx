import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { InlineMath, BlockMath } from "react-katex";

// Make sure KaTeX styles are loaded globally (e.g., in app/layout.tsx):
// import 'katex/dist/katex.min.css';

export const metadata: Metadata = {
  title: "14.11.2 Max/Min Equals Mean ⇒ All Values Match | Statistics",
  description:
    "See why a data set must be constant (standard deviation 0) when its mean equals the largest or smallest value. Includes a Data Sufficiency example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.11.2 When the Largest or Smallest Value Equals the Mean, Every Value Is the Same
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A quick way to certify that a set has zero spread is to notice that its average matches either its maximum or its minimum. In either case, every entry in the set must equal that common value, so the standard deviation is 0.
        </p>

        <MustKnow>
          If the mean equals the largest value or the smallest value in a data set, then all data points are identical. Consequently, the standard deviation is 0.
        </MustKnow>

        <section aria-labelledby="largest-equals-mean">
          <h3 id="largest-equals-mean" className="text-white font-semibold text-lg mt-6">
            When the largest value equals the mean
          </h3>
          <p>
            Suppose we have four numbers and the largest value is 10 while the mean is also 10. Using the average relationship:
          </p>
          <BlockMath math="\text{sum}=\text{average}\times\text{quantity}" />
          <BlockMath math="10\times 4 = 40" />
          <p>
            Let the other three values be <InlineMath math="A, B, C" />. Then:
          </p>
          <BlockMath math="A+B+C+10=40 \quad\Rightarrow\quad A+B+C=30" />
          <p>
            Each of <InlineMath math="A, B, C" /> cannot exceed the largest value 10. To reach a total of 30 with three numbers each no bigger than 10, all three must be 10. Thus, every number in the set is 10.
          </p>
          <p className="text-gray-400">
            Intuition: If all terms are at most the maximum, the only way the average can equal that maximum is if every term actually equals it.
          </p>
        </section>

        <section aria-labelledby="smallest-equals-mean">
          <h3 id="smallest-equals-mean" className="text-white font-semibold text-lg mt-6">
            When the smallest value equals the mean
          </h3>
          <p>
            Now suppose we have four numbers and the smallest value is 8 while the mean is 8. Again:
          </p>
          <BlockMath math="\text{sum}=\text{average}\times\text{quantity}" />
          <BlockMath math="8\times 4 = 32" />
          <p>
            If the other three numbers are <InlineMath math="B, C, D" />, then:
          </p>
          <BlockMath math="8+B+C+D=32 \quad\Rightarrow\quad B+C+D=24" />
          <p>
            Each of <InlineMath math="B, C, D" /> is at least the minimum 8. To total 24 with three numbers each at least 8, all three must be 8. Therefore, every value in the set is 8.
          </p>
          <p className="text-gray-400">
            Intuition: If all terms are at least the minimum, the only way the average can equal that minimum is if every term actually equals it.
          </p>
        </section>

        <section aria-labelledby="ds-example">
          <h3 id="ds-example" className="text-white font-semibold text-lg mt-6">
            Data Sufficiency Example
          </h3>

          <ExampleCard
            number={70}
            title="Zero standard deviation?"
            statements={[
              "If 11 items were purchased at a clothing store, is the standard deviation of the item prices equal to 0?",
              "1) The total cost of the 11 items was $440.",
              "2) The most expensive item cost $40.",
            ]}
            correctLetter="C"
            solution={
              <>
                <p>
                  We must decide whether all 11 prices are the same (that would make the standard deviation 0).
                </p>

                <p>
                  <strong>Statement (1) alone:</strong> From the total, the mean price is
                </p>
                <BlockMath math="\text{mean}=\dfrac{\text{sum}}{\text{quantity}}=\dfrac{440}{11}=40" />
                <p>
                  Knowing only the average does not force all prices to be equal. Not sufficient.
                </p>

                <p>
                  <strong>Statement (2) alone:</strong> The maximum price is $40. Prices could vary below $40, so we cannot conclude zero spread. Not sufficient.
                </p>

                <p>
                  <strong>Together:</strong> The mean is $40 and the maximum is $40. Since each price is at most 40 and their average is already 40, every price must be 40. Formally:
                </p>
                <BlockMath math="\bar{x}=\frac{1}{n}\sum_{i=1}^n x_i = 40 \ \text{and}\ x_i\le 40 \ \Rightarrow\ \sum_{i=1}^n (40-x_i)=0 \ \Rightarrow\ x_i=40\ \text{for all}\ i." />
                <p>
                  Therefore, all 11 prices are equal and the standard deviation is 0. Sufficient together. Answer: C.
                </p>
              </>
            }
          />
        </section>

        <p className="mt-6">
          Takeaway: If the mean coincides with the extreme (largest or smallest) of a set, the set must be constant—no variation, standard deviation 0.
        </p>
      </article>
    </main>
  );
}