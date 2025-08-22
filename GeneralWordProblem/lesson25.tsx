import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.6.2 Compound Interest Problems | General Word Problems",
  description:
    "Understand simple vs. compound interest, what a compounding period is, and how to use the compound interest formula A = P(1 + r/n)^(nt). Includes a worked example and a GMAT‑style multiple‑choice question with full solution.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.6.2 Compound Interest Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Interest questions on the GMAT often hinge on whether the growth is
          simple or compound. Knowing the difference, and how frequently the
          interest compounds, lets you pin down the amount quickly and safely.
        </p>

        <MustKnow>
          Simple interest is earned only on the original principal. The interest
          you earn in one period does not get added to the base for future
          calculations. So each period contributes the same dollar amount of
          interest.
        </MustKnow>

        <p>
          With compound interest, the base grows over time because previously
          earned interest is folded back into the balance. The single time
          interval at which this happens is called the compounding period (for
          example: annually, semiannually, quarterly, monthly, etc.).
        </p>

        <MustKnow>
          Compound interest pays on both the starting principal and all interest
          that has already accrued. After every compounding period, the new
          balance becomes the principal for the next period.
        </MustKnow>

        <section aria-labelledby="worked-example" className="space-y-4">
          <h3 id="worked-example" className="text-xl font-semibold text-white">
            Quick Walkthrough: 10% Annual Compounding
          </h3>
          <p>
            Suppose you invest $100 at 10% interest compounded once per year.
            What is the value after 2 years?
          </p>
          <p className="text-gray-200 font-medium">Step-by-step approach</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              End of year 1 interest:{" "}
              <InlineMath math={"0.10 \\times 100 = 10"} />. New balance: $
              110.
            </li>
            <li>
              End of year 2 interest:{" "}
              <InlineMath math={"0.10 \\times 110 = 11"} />. Final balance: $
              110 + $11 = $121.
            </li>
          </ul>

          <p className="text-gray-200 font-medium">Formula approach</p>
          <p>
            For compound interest, use{" "}
            <InlineMath math={"A = P\\left(1 + \\frac{r}{n}\\right)^{nt}"} />.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <InlineMath math={"A"} />: future amount
            </li>
            <li>
              <InlineMath math={"P"} />: initial principal
            </li>
            <li>
              <InlineMath math={"r"} />: annual rate (decimal)
            </li>
            <li>
              <InlineMath math={"n"} />: compounding periods per year
            </li>
            <li>
              <InlineMath math={"t"} />: years
            </li>
          </ul>
          <BlockMath math={"A = 100\\left(1 + \\frac{0.10}{1}\\right)^{1\\cdot 2} = 100(1.1)^2"} />
          <p>
            Since <InlineMath math={"1.1\\times 1.1 = 1.21"} />, we get{" "}
            <InlineMath math={"A = 100\\times 1.21 = 121"} />.
          </p>

          <p className="text-gray-400">
            Tip for decimals: multiply as integers and then restore the decimal
            places. For instance,{" "}
            <InlineMath math={"11\\times 11 = 121"} /> corresponds to{" "}
            <InlineMath math={"1.1\\times 1.1 = 1.21"} /> (two total decimal
            places).
          </p>
        </section>

        <MustKnow>
          The compound interest formula is{" "}
          <InlineMath math={"A = P\\left(1 + \\frac{r}{n}\\right)^{nt}"} />. Be
          sure to match the compounding frequency in{" "}
          <InlineMath math={"n"} /> with the problem statement.
        </MustKnow>

        <section aria-labelledby="mcq" className="space-y-4">
          <h3 id="mcq" className="text-xl font-semibold text-white">
            Practice: Problem Solving
          </h3>

          <MCQExample
            number={34}
            prompt="Horatio invests $5,000 at 20% interest compounded annually. What will the investment be worth after 2 years?"
            options={["$6,000", "$6,800", "$7,200", "$7,400", "$8,000"]}
            correct="$7,200"
            solution={
              <>
                <p>
                  Use{" "}
                  <InlineMath math={"A = P\\left(1 + \\frac{r}{n}\\right)^{nt}"} />
                  . Here, <InlineMath math={"P=5000"} />,{" "}
                  <InlineMath math={"r=0.20"} />,{" "}
                  <InlineMath math={"n=1"} /> (annual),{" "}
                  <InlineMath math={"t=2"} />.
                </p>
                <BlockMath math={"A = 5000\\left(1 + \\frac{0.20}{1}\\right)^{1\\cdot 2} = 5000(1.2)^2"} />
                <p>
                  Compute <InlineMath math={"(1.2)^2"} /> by ignoring decimals
                  temporarily: <InlineMath math={"12\\times 12 = 144"} /> →
                  restore two decimal places → 1.44.
                </p>
                <BlockMath math={"A = 5000\\times 1.44 = 7200"} />
                <p>Therefore, the value after 2 years is $7,200.</p>
              </>
            }
          />
        </section>

        <p>
          Bottom line: always identify whether interest is simple or compound
          and confirm the compounding period. If it’s compound, the formula{" "}
          <InlineMath math={"A = P\\left(1 + \\frac{r}{n}\\right)^{nt}"} /> is
          your fastest path to the result.
        </p>
      </article>
    </main>
  );
}