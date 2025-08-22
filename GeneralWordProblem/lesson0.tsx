import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
// Note: Ensure KaTeX global CSS is imported once in app/layout.tsx:
// import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "7.1 Introduction | General Word Problems (GMAT)",
  description:
    "A quick tour of the most common GMAT word‑problem families and how to translate everyday language into equations. Includes core formulas for interest and growth rendered with KaTeX.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.1 Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          This part of the course gathers high‑value GMAT word problems that
          don’t sit neatly in other sections. Your goal is to turn plain
          English into clear equations, keep units consistent, and reason about
          constraints so you can solve quickly and accurately.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold text-white">
              Translate first, then solve.
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                Name the unknowns and what the question is asking for.
              </li>
              <li>
                Map keywords to math:
                {" "}
                “of” → multiplication, “per” → rate, “more/less than” → addition/subtraction,
                “is” → equality, “total” → sum.
              </li>
              <li>
                Track units and time frames carefully; align them before you compute.
              </li>
              <li>
                When growth or interest appears, choose the right model and formula.
              </li>
            </ul>

            <div className="rounded-md bg-slate-800/60 p-4">
              <p className="mb-2 text-sm text-gray-200">Common formulas:</p>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="shrink-0 text-gray-200">Simple interest:</span>
                  <InlineMath math="I = P r t" />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="shrink-0 text-gray-200">Amount with simple interest:</span>
                  <InlineMath math="A = P + I = P(1 + r t)" />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="shrink-0 text-gray-200">Compound interest:</span>
                  <InlineMath math="A = P\left(1 + \frac{r}{n}\right)^{n t}" />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="shrink-0 text-gray-200">Linear growth:</span>
                  <InlineMath math="y = y_0 + k t" />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="shrink-0 text-gray-200">Exponential growth/decay:</span>
                  <InlineMath math="A = A_0 \cdot b^{t}" />
                </div>
              </div>
            </div>
          </div>
        </MustKnow>

        <p className="mt-6">
          We’ll practice with the following frequent word‑problem themes:
        </p>

        <ol className="ml-5 list-decimal space-y-2">
          <li>
            Ages, lengths, weights, and money: set up linear relations across time or measure.
          </li>
          <li>
            Profit and loss: connect price, cost, markup/markdown, and margin.
          </li>
          <li>
            Income and salaries: model base pay, bonuses, commissions, and taxes.
          </li>
          <li>
            Fixed vs. variable expenses: write total cost as fixed + per‑unit parts.
          </li>
          <li>
            Fractions in context: part–whole relationships and fractional changes.
          </li>
          <li>
            Simple and compound interest: pick the correct interest model and apply the formula.
          </li>
          <li>
            Linear and exponential growth/decay: decide the driver and compute the result.
          </li>
          <li>
            Digit puzzles: express a number using its digits and place values.
          </li>
          <li>
            Consecutive integers: encode runs of integers (including even/odd).
          </li>
          <li>
            Mixtures: combine parts by quantity and concentration to find the new blend.
          </li>
          <li>
            Lines: slope, intercepts, and point‑slope relationships in coordinate form.
          </li>
          <li>
            Inequalities in word problems: convert conditions to inequalities and solve the range.
          </li>
        </ol>

        <div className="rounded-md bg-slate-800/50 p-4">
          <p className="mb-2 font-semibold text-white">Mini reference (KaTeX):</p>
          <div className="space-y-3">
            <BlockMath math="\text{Markup%} = \frac{\text{Price} - \text{Cost}}{\text{Cost}} \times 100\%" />
            <BlockMath math="\text{Profit%} = \frac{\text{Profit}}{\text{Cost}} \times 100\%" />
            <BlockMath math="\text{Mixture: } \; \text{total amount of solute} = \sum (\text{volume} \times \text{concentration})" />
          </div>
        </div>

        <p>
          As you work through these topics, keep your translation steps short,
          label variables, and check that each equation truly reflects the words
          in the prompt. Precision in setup leads to fast, reliable solutions.
        </p>
      </article>
    </main>
  );
}