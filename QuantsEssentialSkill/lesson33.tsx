import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "2.10.3 Squares and Square Roots Between 0 and 1 | GMAT Quant",
  description:
    "Understand why squaring a number between 0 and 1 makes it smaller while taking its square root makes it larger. Includes a must‑know summary and a quick practice question with solution.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          2. Essential GMAT Quant Skills
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          2.10.3 Squaring and Taking the Square Root of a Number Between 0 and 1
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When a positive number lives strictly between 0 and 1, squaring pulls it closer to 0, and taking its square root pushes it closer to 1. In symbols:
        </p>

        <div className="rounded-md bg-gray-800/50 p-4">
          <BlockMath math={"0 < x < 1 \\;\\implies\\; x^{2} < x < \\sqrt{x}"} />
        </div>

        <p>
          A quick check with a fraction confirms the pattern. Let{" "}
          <InlineMath math={"x = \\tfrac{1}{16}"} />. Then
        </p>

        <div className="rounded-md bg-gray-800/30 p-4">
          <p className="mb-2">
            <InlineMath math={"\\left(\\tfrac{1}{16}\\right)^2 = \\tfrac{1}{256}"} /> and{" "}
            <InlineMath math={"\\sqrt{\\tfrac{1}{16}} = \\tfrac{1}{4}"} />.
          </p>
          <p>
            Therefore{" "}
            <InlineMath math={"\\tfrac{1}{256} < \\tfrac{1}{16} < \\tfrac{1}{4}"} />, which matches{" "}
            <InlineMath math={"x^{2} < x < \\sqrt{x}"} />.
          </p>
        </div>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold text-white">Must Know</p>
            <p>
              For any real number with{" "}
              <InlineMath math={"0 < x < 1"} />, the relationship
              {" "}
              <InlineMath math={"x^{2} < x < \\sqrt{x}"} /> always holds. Squaring a proper fraction makes it smaller; taking its square root makes it larger.
            </p>
          </div>
        </MustKnow>

        <MCQExample
          number={65}
          prompt={
            <>
              If <InlineMath math={"x = 0.776"} />, which statement must be true?
            </>
          }
          options={[
            "√x < x",
            "x² > x",
            "x² < √x",
            "x² = √x",
            "√x = x",
          ]}
          correct="x² < √x"
          solution={
            <>
              <p>
                Since <InlineMath math={"0 < x < 1"} />, we know{" "}
                <InlineMath math={"x^2 < x < \\sqrt{x}"} />. Therefore, the true comparison between{" "}
                <InlineMath math={"x^2"} /> and <InlineMath math={"\\sqrt{x}"} /> is{" "}
                <InlineMath math={"x^2 < \\sqrt{x}"} />.
              </p>
              <p>
                Concretely, here <InlineMath math={"x = 0.776"} /> lies between 0 and 1, so the rule applies directly. The correct choice is C: <InlineMath math={"x^2 < \\sqrt{x}"} />.
              </p>
            </>
          }
        />

        <p>
          Bottom line: for numbers strictly between 0 and 1, square roots increase the value while squares decrease it. Keep{" "}
          <InlineMath math={"x^{2} < x < \\sqrt{x}"} /> in your toolkit for quick comparisons.
        </p>
      </article>
    </main>
  );
}