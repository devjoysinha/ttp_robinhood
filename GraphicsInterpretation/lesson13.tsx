import type { Metadata } from "next";
import Image from "next/image";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "2.14 Column Charts Without a Numerical Scale on the y‑Axis | Graphics Interpretation",
  description:
    "Learn how to read column charts that lack numerical labels on the y‑axis. Understand what you can and cannot conclude, including a pair of quick self‑checks on differences and ratios.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Graphics Interpretation
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.14 Column Charts Without a Numerical Scale on the y‑Axis
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a column chart omits numeric labels on the y‑axis, you can tell which categories
          rank higher or lower, but you cannot quantify by how much. Taller versus shorter is clear;
          exact differences, sums, or ratios are not.
        </p>

        <MustKnow>
          If a column chart has no numbers on the y‑axis, you can only make relative statements
          such as “Category X is greater than Category Y.” Precise amounts, differences, and
          ratios are unknowable because the vertical scale is unspecified.
        </MustKnow>

        <section aria-labelledby="illustration-heading" className="space-y-3">
          <h3 id="illustration-heading" className="text-xl font-semibold text-white">
            What you can see versus what you can compute
          </h3>
          <p>
            In the illustration below, one bar is clearly taller than another, so we know that its
            value is larger. However, without a labeled y‑axis, we can’t determine the numerical
            gap between them.
          </p>
          <figure className="rounded-lg border border-gray-800 bg-gray-900 p-3">
            <Image
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/522/content_Lesson_-_Column_Charts_Without_a_Numerical_Scale_on_the_y-Axis.png"
              alt="Example of a column chart without y‑axis numbers; only bar ordering is visible."
              width={1000}
              height={560}
              className="h-auto w-full rounded-md"
              sizes="(max-width: 768px) 100vw, 800px"
              priority={false}
            />
            <figcaption className="mt-2 text-sm text-gray-400">
              Bars can be compared by height, but exact values and differences are unknown without a numeric scale.
            </figcaption>
          </figure>
        </section>

        <section aria-labelledby="example-heading" className="space-y-4">
          <h3 id="example-heading" className="text-xl font-semibold text-white">
            Example: Five savings account balances
          </h3>
          <p>
            The chart below shows balances for five different accounts (A–E). The spacing between
            horizontal grid lines is uniform, but the actual amounts represented by those intervals
            are unknown.
          </p>
          <figure className="rounded-lg border border-gray-800 bg-gray-900 p-3">
            <Image
              src="https://ttpgmat-production.s3.amazonaws.com/uploads/ckeditor/pictures/523/content_Example_19.png"
              alt="Column chart for balances of accounts A through E without y‑axis labels."
              width={600}
              height={356}
              className="h-auto w-full rounded-md"
              sizes="(max-width: 768px) 100vw, 600px"
            />
            <figcaption className="mt-2 text-sm text-gray-400">
              Equal vertical intervals, but no numbers on the y‑axis.
            </figcaption>
          </figure>

          <MCQExample
            number={19}
            prompt={
              <>
                In the figure, does the balance of C exceed the balance of B by more than $2,000?
                Select the best description.
              </>
            }
            options={[
              "Definitely exceeds by more than $2,000",
              "Definitely does not exceed by more than $2,000",
              "May or may not exceed by more than $2,000",
            ]}
            correct="May or may not exceed by more than $2,000"
            solution={
              <>
                <p>
                  We only know that the bar for C is taller than the bar for B. Because the y‑axis has no
                  numbers, the size of each vertical interval is unknown. The difference{" "}
                  <InlineMath math={"C - B"} /> could be large or small depending on the scale.
                </p>
                <p>
                  For instance, if the y‑axis starts at $0 and each interval equals $1{","}000, then a plausible
                  reading is C = $5{","}000 and B = $1{","}500, so{" "}
                  <InlineMath math={"C - B = 3500 > 2000"} /> and the condition holds.
                </p>
                <p>
                  But if the axis starts at $500 and each interval equals $10, another plausible reading is
                  C = $550 and B = $515, so <InlineMath math={"C - B = 35"} />, which is not more than $2{","}000.
                </p>
                <p>
                  Conclusion: it <strong>may or may not</strong> be more than $2{","}000; the chart doesn’t fix a single answer.
                </p>
              </>
            }
          />

          <MCQExample
            number={20}
            prompt={
              <>
                Is the ratio of C to D greater than the ratio of A to E? In other words, is{" "}
                <InlineMath math={"\\dfrac{C}{D} > \\dfrac{A}{E}"} />?
              </>
            }
            options={[
              "Definitely greater",
              "Definitely less",
              "May or may not be greater",
            ]}
            correct="May or may not be greater"
            solution={
              <>
                <p>
                  Because the y‑axis may start at any baseline and use any interval size, the actual values of
                  A, B, C, D, and E aren’t fixed. Different legitimate scales can flip the comparison.
                </p>
                <p>
                  Example 1 (axis starts at $0, interval = $100): A = $200, B = $150, C = $500, D = $300, E = $100.
                  Then <InlineMath math={"\\frac{C}{D} = \\tfrac{500}{300} \\approx 1.67"} /> and{" "}
                  <InlineMath math={"\\frac{A}{E} = \\tfrac{200}{100} = 2"} />, so{" "}
                  <InlineMath math={"\\frac{C}{D} < \\frac{A}{E}"} />.
                </p>
                <p>
                  Example 2 (axis starts at $100, interval = $1): A = $102, B = $101.5, C = $105, D = $103, E = $101.
                  Then <InlineMath math={"\\frac{C}{D} = \\tfrac{105}{103} \\approx 1.02"} /> and{" "}
                  <InlineMath math={"\\frac{A}{E} = \\tfrac{102}{101} \\approx 1.01"} />, so{" "}
                  <InlineMath math={"\\frac{C}{D} > \\frac{A}{E}"} />.
                </p>
                <p>
                  Both outcomes are possible, so the statement <strong>may or may not</strong> be true based on the (unknown) scale.
                </p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: without a numeric y‑axis, treat the chart as ordinal—use it to compare heights,
          not to compute exact differences or ratios.
        </p>
      </article>
    </main>
  );
}