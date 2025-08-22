import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: '12.7 "Percent Less Than" | Percent Word Problems',
  description:
    'Translate “x% less than y” into a simple multiplier and apply it quickly. Two worked multiple‑choice examples with clear, step‑by‑step reasoning.',
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          12. Percent Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          12.7 “Percent less than” problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          “Percent less than” questions describe a decrease from an initial amount. You can
          handle these quickly by multiplying the original value by a one‑step factor that
          removes the specified percentage.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-semibold">
              Translate “x% less than y” as “(100 − x)% of y.”
            </p>
            <div aria-label='Formula: Final equals Initial times (1 - x/100)'>
              <BlockMath math="\text{Final}=(\text{Initial})\left(1-\frac{x}{100}\right)" />
            </div>
            <p className="text-sm text-gray-400">
              This multiplier approach avoids extra steps and reduces errors on test day.
            </p>
          </div>
        </MustKnow>

        <MCQExample
          number={51}
          prompt="An item priced at z dollars is discounted by 89%. The sale price is what percent of the original price?"
          options={["60%", "51%", "33%", "19%", "11%"]}
          correct="11%"
          solution={
            <>
              <p>
                Apply the “percent less than” multiplier with <InlineMath math="x=89" />:
              </p>
              <div aria-label="Final = z * (1 - 89/100) = z * (11/100)">
                <BlockMath math="\text{Final}=z\left(1-\frac{89}{100}\right)=z\cdot\frac{11}{100}" />
              </div>
              <p>
                The sale price is <strong>11%</strong> of the original price. So the correct choice is 11%.
              </p>
            </>
          }
        />

        <MCQExample
          number={52}
          prompt="The price of an item was originally $40 and was marked down 30%. What is the new price?"
          options={["$60", "$42", "$33", "$28", "$25"]}
          correct="$28"
          solution={
            <>
              <p>
                Use the multiplier with <InlineMath math="x=30" /> on the original price:
              </p>
              <div aria-label="Final = 40 * (1 - 30/100) = 40 * (70/100) = 28">
                <BlockMath math="\text{Final}=40\left(1-\frac{30}{100}\right)=40\cdot\frac{70}{100}=28" />
              </div>
              <p>
                The discounted price is <strong>$28</strong>.
              </p>
            </>
          }
        />

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">
              Quick check:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                “x% less than y” equals <InlineMath math="(100-x)\%" /> of <InlineMath math="y" />.
              </li>
              <li>
                If a price drops by 30%, multiply by <InlineMath math="0.70" />; if it drops by 89%, multiply by <InlineMath math="0.11" />.
              </li>
            </ul>
          </div>
        </MustKnow>

        <p>
          Bottom line: convert the wording directly into a single multiplier to move fast and stay accurate.
        </p>
      </article>
    </main>
  );
}