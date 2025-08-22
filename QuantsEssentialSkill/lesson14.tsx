import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "2.2.3 Use a Common Denominator to Compare Fractions | Essential GMAT Quant",
  description:
    "Learn how converting to a common denominator makes comparing positive fractions straightforward. Includes a step‑by‑step demo and two multiple‑choice practice problems with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.2.3 Using a Common Denominator to Compare the Size of Fractions
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A reliable way to compare positive fractions is to rewrite them so they
          all share the same denominator. Once the denominators match, you can
          compare the numerators directly: bigger numerator means bigger
          fraction.
        </p>

        <MustKnow>
          In any set of positive fractions with a common denominator, ordering
          the fractions is equivalent to ordering their numerators.
        </MustKnow>

        <section aria-labelledby="lcd-demo" className="space-y-4">
          <h3 id="lcd-demo" className="text-xl font-semibold text-white">
            Quick walkthrough
          </h3>
          <p>Suppose we want to rank the following fractions:</p>
          <p>
            <InlineMath math="\,\frac{2}{3},\ \frac{3}{5},\ \frac{3}{4},\ \frac{5}{6},\ \frac{1}{2}\," />
          </p>
          <p>
            A convenient common denominator here is the least common multiple of
            3, 5, 4, 6, and 2. Listing multiples of 6, the first value divisible
            by all the denominators is 60:
          </p>
          <p className="text-gray-400">6, 12, 18, 24, 30, 36, 42, 48, 54, 60</p>

          <p>Convert each fraction to a denominator of 60:</p>
          <div className="space-y-2">
            <BlockMath math="\frac{2}{3}=\frac{40}{60}\quad;\quad \frac{3}{5}=\frac{36}{60}" />
            <BlockMath math="\frac{3}{4}=\frac{45}{60}\quad;\quad \frac{5}{6}=\frac{50}{60}" />
            <BlockMath math="\frac{1}{2}=\frac{30}{60}" />
          </div>

          <p>Now order by numerator:</p>
          <BlockMath math="\frac{30}{60} < \frac{36}{60} < \frac{40}{60} < \frac{45}{60} < \frac{50}{60}" />
          <p>which corresponds to:</p>
          <BlockMath math="\frac{1}{2} < \frac{3}{5} < \frac{2}{3} < \frac{3}{4} < \frac{5}{6}" />
          <p>
            Note: There are other ways to compare fractions (e.g., converting to
            decimals or using reference points). The common‑denominator approach
            is a fast, general‑purpose tool to keep in your toolkit.
          </p>
        </section>

        <MCQExample
          number={37}
          prompt="The list consists of the fractions 1/2, 2/3, 5/6, 7/12, and x/12. If x is an integer and x/12 is neither the largest nor the smallest fraction in the list, which of the following could be the value of x?"
          options={["4", "5", "9", "11", "12"]}
          correct="9"
          solution={
            <>
              <p>
                Convert each fraction to denominator 12 to compare quickly:
              </p>
              <div className="space-y-2">
                <BlockMath math="\frac{1}{2}=\frac{6}{12},\quad \frac{2}{3}=\frac{8}{12},\quad \frac{5}{6}=\frac{10}{12},\quad \frac{7}{12}=\frac{7}{12},\quad \frac{x}{12}=\frac{x}{12}." />
              </div>
              <p>
                The existing numerators are 6, 7, 8, and 10. For{" "}
                <InlineMath math="\frac{x}{12}" /> to be neither smallest nor
                largest, x must fall strictly between 6 and 10 (and also be
                distinct if we want all five to be unique). Testing the answer
                choices, only x = 9 satisfies this. Thus, the correct choice is
                9.
              </p>
            </>
          }
        />

        <MCQExample
          number={38}
          prompt="Consider the set {7/12, 1/3, 3/4, x, 1/5}, which contains five distinct fractions. If x is the second greatest fraction in the set, which of the following could be the value of x? I. 32/60   II. 35/60   III. 38/60"
          options={["I only", "I and II", "II and III", "III only", "I, II, and III"]}
          correct="III only"
          solution={
            <>
              <p>
                First, order the known fractions using a common denominator of
                60:
              </p>
              <div className="space-y-2">
                <BlockMath math="\frac{1}{5}=\frac{12}{60},\quad \frac{1}{3}=\frac{20}{60},\quad \frac{7}{12}=\frac{35}{60},\quad \frac{3}{4}=\frac{45}{60}." />
              </div>
              <p>
                So, without x, the ascending order is{" "}
                <InlineMath math="\frac{12}{60} < \frac{20}{60} < \frac{35}{60} < \frac{45}{60}" />.
                If x is the second largest overall, x must lie strictly between{" "}
                <InlineMath math="\frac{35}{60}" /> and{" "}
                <InlineMath math="\frac{45}{60}" />.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  I. <InlineMath math="\frac{32}{60}" /> is less than{" "}
                  <InlineMath math="\frac{35}{60}" />, so it cannot be second
                  largest.
                </li>
                <li>
                  II. <InlineMath math="\frac{35}{60}" /> would tie{" "}
                  <InlineMath math="\frac{7}{12}" />, violating the “distinct”
                  condition.
                </li>
                <li>
                  III. <InlineMath math="\frac{38}{60}" /> lies between{" "}
                  <InlineMath math="\frac{35}{60}" /> and{" "}
                  <InlineMath math="\frac{45}{60}" />, making it the second
                  greatest when placed appropriately.
                </li>
              </ul>
              <p>Only III works. Therefore, the correct answer is “III only.”</p>
            </>
          }
        />

        <p>
          Bottom line: for positive fractions, matching denominators turns
          comparisons into simple integer comparisons. Use the least common
          denominator when convenient, and keep this method handy alongside
          other strategies.
        </p>
      </article>
    </main>
  );
}