import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "14.6 Median | Statistics",
  description:
    "Understand the median for ordered data sets, including odd and even cases. Includes a quick multiple‑choice example with a full explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.6 Median
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a list of numbers is arranged from smallest to largest (or largest
          to smallest), the median is the central value that splits the ordered
          list. Informally, half of the entries fall on one side of the median
          and half on the other—though what “half” means depends on whether the
          list length is odd or even.
        </p>

        <MustKnow>
          • Odd number of terms: after sorting, the median is the single value in
          position <InlineMath math="(n + 1)/2" aria-label="open parenthesis n plus 1 close parenthesis over 2" />.
          • Even number of terms: after sorting, the median is the average of the
          two middle values in positions <InlineMath math="n/2" /> and{" "}
          <InlineMath math="n/2 + 1" />. The median may not be a member of the
          set in this case.
        </MustKnow>

        <section aria-labelledby="odd-case">
          <h3 id="odd-case" className="text-xl font-semibold text-white">
            Odd number of terms
          </h3>
          <p>
            For an odd-length list, the median is the one value exactly in the
            middle after ordering. For instance, with S = {"{1, 2, 4, 6, 9, 10, 12}"},
            there are seven numbers. The 4th value (the middle) is 6, so the
            median is 6. There are three values below 6 and three above 6. Note
            that <InlineMath math="\tfrac{1}{2}" /> of 7 is 3.5, which explains
            why the counts on each side are 3 and 3 rather than an exact half in
            a fractional sense.
          </p>
        </section>

        <section aria-labelledby="even-case">
          <h3 id="even-case" className="text-xl font-semibold text-white">
            Even number of terms
          </h3>
          <p>
            For an even-length list, there are two central positions; the median
            is the mean of those two middle values. For example, if S = {"{1, 2, 4, 6, 9, 10}"},
            the two central numbers are 4 and 6, so the median is{" "}
            <InlineMath math="(4 + 6)/2 = 5" />. Here, exactly three numbers lie
            below 5 and three lie above 5, even though 5 itself doesn’t appear in
            the set.
          </p>
        </section>

        <MCQExample
          number={37}
          prompt="Set A = {3, 6, 9, 10, −1, −8, 5}. What is the median of set A?"
          options={["3", "4", "5", "6", "7"]}
          correct="5"
          solution={
            <>
              <p>
                First, sort the values: −8, −1, 3, 5, 6, 9, 10. There are 7
                numbers, so the median is the 4th term after ordering.
              </p>
              <p>
                The 4th value is 5, so the median of A is 5.
              </p>
            </>
          }
        />

        <section aria-labelledby="recap">
          <h3 id="recap" className="text-xl font-semibold text-white">
            Quick recap
          </h3>
          <p>
            • Odd-sized set: pick the single middle number after sorting. •
            Even-sized set: average the two middle numbers after sorting. Focus
            on order and position—no heavy computation is needed.
          </p>
        </section>
      </article>
    </main>
  );
}