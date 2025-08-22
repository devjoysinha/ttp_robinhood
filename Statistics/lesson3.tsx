import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "14.2.2 Averages with Variable Terms | Statistics",
  description:
    "Learn how to compute the average when the terms contain variables. Apply the mean formula, combine like terms, and solve for the unknown. Includes a quick multiple‑choice example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.2.2 Averages of Sets That Include Variables
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When expressions with variables appear in an average, treat them just like
          numbers: use the mean formula, combine like terms, and isolate the variable.
          The structure never changes—you simply keep track of how many terms you have
          and sum them correctly.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold text-white">Core relationships</p>
            <BlockMath math={"\\bar{x} = \\dfrac{\\text{sum of terms}}{n}"} />
            <BlockMath math={"\\text{sum of terms} = n\\,\\bar{x}"} />
            <p>
              If your terms are of the form{" "}
              <InlineMath math={"x + c_1,\\ x + c_2,\\ \\dots,\\ x + c_n"} />, then
              the total is{" "}
              <InlineMath math={"n\\,x + \\sum_{i=1}^{n} c_i"} />. From there, solve
              for <InlineMath math={"x"} /> as usual.
            </p>
          </div>
        </MustKnow>

        <MCQExample
          number={5}
          difficulty="easy"
          prompt="The average of (x + 3), (x + 7), and (x + 14) is 9. What is the value of x?"
          options={["1", "3", "4", "5", "6"]}
          correct="1"
          solution={
            <>
              <p>
                Apply the mean formula with three terms and then consolidate like terms.
              </p>
              <BlockMath math={"9 = \\dfrac{(x+3) + (x+7) + (x+14)}{3}"} />
              <BlockMath math={"27 = 3x + (3+7+14) = 3x + 24"} />
              <BlockMath math={"3x = 3"} />
              <BlockMath math={"x = 1"} />
              <p>
                So, <InlineMath math={"x = 1"} />.
              </p>
            </>
          }
        />

        <p>
          Bottom line: the average formula doesn’t change just because variables appear
          in the terms. Keep the count of terms correct, add the constants, and then
          isolate the variable.
        </p>
      </article>
    </main>
  );
}