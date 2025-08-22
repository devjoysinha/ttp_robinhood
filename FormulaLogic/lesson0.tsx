import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "15.1 Formula Logic — Introduction | Quant",
  description:
    "Learn how to reason about formulas when inputs change. Convert percentage and factor changes into multipliers, choose between algebra or testing numbers, and predict the net effect on the output.",
};

// Lightweight KaTeX renderer (SSR-safe)
function Math({
  expression,
  display = false,
  ariaLabel,
}: {
  expression: string;
  display?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(expression, {
    throwOnError: false,
    displayMode: display,
    strict: "ignore",
    output: "html",
  });

  const Tag = display ? "div" : ("span" as const);

  return (
    <Tag
      className={display ? "my-2 overflow-x-auto" : "inline-block"}
      role="math"
      aria-label={ariaLabel ?? expression}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          15. Formula Logic
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">15.1 Introduction</h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some Quant questions hand you a formula and then tweak one or more inputs. Your job is to
          figure out how the output responds—ideally without crunching messy numbers. These are
          formula logic questions: reason about the structure of the formula and how multipliers
          travel through it.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">Two core tools</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Algebraic reasoning: convert each change into a clean multiplier and apply it through
                the formula.
              </li>
              <li>
                Pick simple numbers: when symbols feel sticky, test easy values to simulate the change
                and compare outputs.
              </li>
            </ul>

            <p className="font-semibold mt-4">Translate wording into multipliers</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                x increases by p% → new x = old x ·{" "}
                <Math expression={"\\left(1 + \\tfrac{p}{100}\\right)"} ariaLabel="one plus p over one hundred" />
              </li>
              <li>
                x decreases by p% → new x = old x ·{" "}
                <Math expression={"\\left(1 - \\tfrac{p}{100}\\right)"} ariaLabel="one minus p over one hundred" />
              </li>
              <li>
                x is multiplied by a factor of k → new x = old x · <Math expression={"k"} ariaLabel="k" />
              </li>
              <li>
                x is halved/doubled/trebled → multiply by{" "}
                <Math expression={"\\tfrac{1}{2},\\ 2,\\ 3"} ariaLabel="one half, two, three" />
                respectively.
              </li>
            </ul>
          </div>
        </MustKnow>

        <p>
          The best part: these multipliers combine multiplicatively. If a variable appears squared,
          its multiplier is squared; if it’s in a denominator, the multiplier goes in the denominator.
          For example, if
        </p>

        <Math
          display
          expression={"F = k\\,\\dfrac{a^{2}\\,b}{\\sqrt{c}}"}
          ariaLabel="F equals k times a squared times b divided by the square root of c"
        />

        <p>
          and a increases by 10%, b decreases by 5%, and c is doubled, then the overall multiplier on F is
        </p>

        <Math
          display
          expression={
            "\\left(1.10\\right)^{2} \\cdot \\left(0.95\\right) \\cdot \\dfrac{1}{\\sqrt{2}}"
          }
          ariaLabel="one point one squared times zero point nine five times one over square root of two"
        />

        <p>
          You can evaluate the product if needed or keep it symbolic when the answer choices are in
          terms of multipliers or percentages.
        </p>

        <section aria-labelledby="how-changes-are-stated">
          <h3 id="how-changes-are-stated" className="text-xl font-semibold text-white">
            How changes are usually described
          </h3>
          <ol className="list-decimal pl-6 mt-2 space-y-2">
            <li>
              Percent changes: “increase by p%,” “decrease by p%.” Convert to{" "}
              <Math expression={"1 \\pm \\tfrac{p}{100}"} ariaLabel="one plus or minus p over one hundred" />.
            </li>
            <li>
              Factor changes: “multiplied by k,” “divided by k,” “doubled/halved.” Convert directly
              to the multiplier <Math expression={"k"} ariaLabel="k" /> or{" "}
              <Math expression={"\\tfrac{1}{k}"} ariaLabel="one over k" />.
            </li>
          </ol>
          <p className="mt-2">
            Be precise with wording. “Increased by a factor of k” typically means “multiplied by k.”
            If the test wants “reduced to one k-th,” it will say “divided by k” or “reduced to
            1/k of its value.”
          </p>
        </section>

        <MCQExample
          number={1}
          prompt={
            'A rectangle has area A where A = ℓ·w. If the length ℓ increases by 20% and the width w decreases by 20%, what happens to the area A?'
          }
          options={[
            "A decreases by 20%",
            "A is unchanged",
            "A increases by 4%",
            "A decreases by 4%",
            "A increases by 20%",
          ]}
          correct="A decreases by 4%"
          solution={
            <>
              <p>
                Convert each change to a multiplier: ℓ → ℓ·1.2 and w → w·0.8. Thus,
              </p>
              <Math
                display
                expression={"A_{\\text{new}} = (1.2)(0.8)A_{\\text{old}} = 0.96\\,A_{\\text{old}}"}
                ariaLabel="A new equals one point two times zero point eight times A old equals zero point nine six A old"
              />
              <p>So the area drops by 4%.</p>
            </>
          }
        />

        <section aria-labelledby="strategy-picking">
          <h3 id="strategy-picking" className="text-xl font-semibold text-white">
            Choosing a strategy
          </h3>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              Use algebra when the formula is compact and changes are symbolic—you’ll combine
              multipliers quickly.
            </li>
            <li>
              Test numbers when the expression is messy or when the answer choices are numerical and
              easy to compare. Pick round inputs, apply the changes, and compute the before/after ratio.
            </li>
          </ul>
        </section>

        <p className="text-gray-300">
          Bottom line: translate wording → multipliers → propagate through the formula → combine.
          That workflow unlocks most “what-if” formula questions efficiently and accurately.
        </p>
      </article>
    </main>
  );
}