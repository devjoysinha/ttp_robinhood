```tsx
import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "14.3.9 Using the Average to Find the Sum | Statistics",
  description:
    "Learn how to turn the average formula into a fast tool for summing evenly spaced sets. Includes two GMAT‑style multiple‑choice examples with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.3.9 Use the Average Formula to Compute a Sum
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A quick way to add many numbers at once is to use the mean identity.
          If you know the average and how many terms there are, you can get the
          total immediately—this is especially powerful for evenly spaced sets
          such as consecutive integers, consecutive odds, or consecutive evens.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <div>
              <BlockMath math={"\\text{average} = \\dfrac{\\text{sum}}{\\#\\,\\text{of terms}}"} />
              <BlockMath math={"\\Rightarrow\\; \\text{sum} = (\\text{average})(\\#\\,\\text{of terms})"} />
            </div>
            <div>
              For any evenly spaced (arithmetic) sequence with first term{" "}
              <InlineMath math={"a_1"} /> and last term <InlineMath math={"a_n"} />:
              <BlockMath math={"\\text{average} = \\dfrac{a_1 + a_n}{2}"} />
              If the common difference is <InlineMath math={"d"} />, then the count is:
              <BlockMath math={"n = \\dfrac{a_n - a_1}{d} + 1"} />
            </div>
            <p className="m-0">
              Inclusive language matters. “From X to Y, inclusive” means both
              endpoints are part of the set, so use the +1 in the count.
            </p>
          </div>
        </MustKnow>

        <MCQExample
          number={18}
          prompt="What is the sum of the integers from 101 to 202, inclusive?"
          options={["15,002", "15,181", "15,233", "15,453", "15,563"]}
          correct="15,453"
          solution={
            <>
              <p>
                Count the terms and find the average, then multiply. The set is
                consecutive integers (difference 1), so:
              </p>
              <BlockMath math={"n = (202 - 101) + 1 = 102"} />
              <p>The average is the midpoint (bookends approach):</p>
              <BlockMath math={"\\text{average} = \\dfrac{101 + 202}{2} = 151.5"} />
              <p>Thus the sum is:</p>
              <BlockMath math={"\\text{sum} = 151.5 \\times 102 = 15{,}453"} />
              <p>Answer: 15,453.</p>
            </>
          }
        />

        <p>
          The same idea works when you only want the odds or only the evens: use
          the correct common difference (2) when you count, and the bookends for
          the average.
        </p>

        <MCQExample
          number={19}
          prompt="What is the sum of the odd integers from 5 to 55, inclusive?"
          options={["250", "360", "400", "780", "970"]}
          correct="780"
          solution={
            <>
              <p>
                These are consecutive odd integers, so the common difference is{" "}
                <InlineMath math={"d=2"} />.
              </p>
              <BlockMath math={"n = \\dfrac{55 - 5}{2} + 1 = \\dfrac{50}{2} + 1 = 26"} />
              <p>Average via bookends:</p>
              <BlockMath math={"\\text{average} = \\dfrac{5 + 55}{2} = 30"} />
              <p>Compute the sum:</p>
              <BlockMath math={"\\text{sum} = 30 \\times 26 = 780"} />
              <p>Answer: 780.</p>
            </>
          }
        />

        <p>
          Takeaway: turning “sum” questions into “average × count” is almost
          always faster than manual addition, especially for evenly spaced sets.
        </p>
      </article>
    </main>
  );
}
```