import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "14.5.1 Weighted Averages with Percents | Statistics",
  description:
    "Learn how to compute percent‑weighted means: when you can just sum p×value and when you must divide by the total percent. Includes two quick multiple‑choice examples with KaTeX solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.5.1 Weighted Averages with Percents
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Some problems give you each data value along with the percent of the
          group that has that value. In those cases, the overall average is the
          sum of “percent × value” across all categories. If the listed
          percentages already add up to 100% (that is, 1 as a decimal), you
          don’t divide again.
        </p>

        <MustKnow>
          <>
            - If the weights sum to 100%: just add the products.
            <BlockMath math="\text{Average}=\sum_{i=1}^{n} p_i \cdot x_i \quad \text{when}\ \sum_{i=1}^{n} p_i=1" />
            - If the weights do not sum to 100% for the group you are averaging:
            divide by the total percent you do have.
            <BlockMath math="\text{Average}=\dfrac{\sum p_i \cdot x_i}{\sum p_i}" />
          </>
        </MustKnow>

        <MCQExample
          number={24}
          prompt="At a school, an exam is scored from 0 to 80. Of 1,000 students, 30% scored 40, 50% scored 50, and 20% scored 70. What was the average score?"
          options={["48", "49", "50", "51", "52"]}
          correct="51"
          solution={
            <>
              <p>The weights cover 100%, so sum the products:</p>
              <BlockMath math="(0.30)(40) + (0.50)(50) + (0.20)(70)" />
              <BlockMath math="= 12 + 25 + 14 = 51" />
              <p>Average score = 51.</p>
              <p className="mt-3 text-gray-400">
                Why no division? The total weight is 1, so dividing by 1 does
                nothing.
              </p>
            </>
          }
        />

        <p>
          Another way to view this: when the listed percentages already add to
          1, your computation has implicitly divided by 1. That’s why you simply
          add the percent-weighted contributions.
        </p>

        <p>
          The same idea applies to portfolios. Suppose an investor holds 50
          shares of stock A and 100 shares of stock B. If A gained 10% and B
          gained 20% over the same period, then A is one third of the shares and
          B is two thirds. The portfolio’s percent return is:
        </p>
        <BlockMath math="\frac{1}{3}\cdot 10\% \;+\; \frac{2}{3}\cdot 20\% \;=\; 16\frac{2}{3}\%\;\approx\;16.7\%" />

        <p>
          Be careful, though: sometimes the given percentages don’t account for
          the entire group you’re supposed to average. In that case, you must
          divide by the sum of the relevant percentages.
        </p>

        <MCQExample
          number={25}
          prompt="In a store, 12% of customers spend exactly $10 and 18% spend exactly $20. Among customers who spend $20 or less, what is the average amount spent?"
          options={["$12", "$14", "$16", "$18", "$20"]}
          correct="$16"
          solution={
            <>
              <p>
                These percentages describe only the subgroup “$20 or less,” and
                they don’t total 100% overall. Divide by the sum of the
                subgroup’s percentages:
              </p>
              <BlockMath math="\text{Average}=\dfrac{0.12\cdot 10 + 0.18\cdot 20}{0.12+0.18}" />
              <BlockMath math="= \dfrac{1.2 + 3.6}{0.30} = \dfrac{4.8}{0.30} = 16" />
              <p>The average among customers who spend $20 or less is $16.</p>
              <p className="mt-3 text-gray-400">
                Sanity check: $16 lies between $10 and $20, and it’s nearer to
                $20 because more of this subgroup spends $20.
              </p>
            </>
          }
        />

        <MustKnow>
          If the percentages refer to only part of the target group, normalize
          by that partial total. When the listed weights already span the whole
          group, you’re effectively dividing by 1, so a simple sum of
          p×value is enough.
        </MustKnow>
      </article>
    </main>
  );
}