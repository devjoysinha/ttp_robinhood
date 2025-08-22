import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import katex from "katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "7.3.3 Profit and Loss Problems | General Word Problems",
  description:
    "Understand profit, loss, fixed vs. variable costs, and break‑even analysis. Practice with two GMAT‑style examples and full solutions using clear algebra.",
};

function Math({
  children,
  block = false,
  ariaLabel,
}: {
  children: string;
  block?: boolean;
  ariaLabel?: string;
}) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: block,
  });

  if (block) {
    return (
      <div
        aria-label={ariaLabel}
        role="math"
        className="my-3 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      aria-label={ariaLabel}
      role="math"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          7. General Word Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          7.3.3 Profit and Loss Problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Profit-and-loss questions hinge on a single idea: profit equals what
          you bring in minus what you spend. When revenue exceeds cost, you
          earn a profit; when costs exceed revenue, you take a loss. If the two
          are equal, you’ve reached the break‑even point.
        </p>

        <MustKnow>
          <p className="mb-2">
            Core relationship:
            <span className="ms-2">
              <Math ariaLabel="Profit equals total revenue minus total cost">
                \text{Profit}=\text{Total Revenue}-\text{Total Cost}
              </Math>
            </span>
          </p>
        </MustKnow>

        <p>
          Many real‑world setups include two kinds of expenses:
          fixed costs that recur regardless of how much you sell, and variable
          costs that scale with output. In such cases, the profit equation can
          be broadened to separate these pieces.
        </p>

        <MustKnow>
          <p className="mb-2">
            With fixed and variable costs:
          </p>
          <Math ariaLabel="Profit equals revenue minus the sum of fixed and variable costs" block>
            \text{Profit}=\text{Total Revenue}-\bigl(\text{Total Fixed Costs}+\text{Total Variable Costs}\bigr)
          </Math>
          <ul className="mt-3 list-disc space-y-1 ps-6">
            <li>Fixed costs stay the same (e.g., rent, salaries).</li>
            <li>Variable costs grow with each unit sold (e.g., materials).</li>
          </ul>
        </MustKnow>

        <p>Let’s apply these ideas to a couple of quick examples.</p>

        <MCQExample
          number={17}
          prompt="An ice‑cream stand pays $1,000 each week in fixed expenses. Each serving costs $2 to produce and sells for $4. How many servings must the stand sell in a week to break even?"
          options={["250", "400", "500", "667", "1,000"]}
          correct="500"
          solution={
            <>
              <p className="mb-2">
                Let x be the number of servings sold. Revenue is
                <Math ariaLabel="Four x">4x</Math>; total cost is fixed plus variable,
                <Math ariaLabel="Two x plus 1000">2x+1000</Math>. Break even when revenue equals cost:
              </p>
              <Math block ariaLabel="Break even equation and solution">
                4x=2x+1000 \;\;\Rightarrow\;\; 2x=1000 \;\;\Rightarrow\;\; x=500
              </Math>
              <p>So, 500 servings are required.</p>
            </>
          }
        />

        <MCQExample
          number={18}
          prompt="A bank lends a business n dollars for expansion. Each month, the business’ total expenses are (1/5)n dollars and total revenues are (1/4)n dollars. The business pays the bank 1/8 of its monthly profits until the loan is repaid. After 8 months, how many dollars of the loan remain unpaid (in terms of n)?"
          options={[
            "19/20 n",
            "3/5 n",
            "2/3 n",
            "1/3 n",
            "1/5 n",
          ]}
          correct="19/20 n"
          solution={
            <>
              <p className="mb-2">
                Monthly profit is revenue minus expenses:
              </p>
              <Math block ariaLabel="Monthly profit computation">
                \text{Profit}=\frac{1}{4}n-\frac{1}{5}n=\frac{1}{20}n
              </Math>
              <p className="mb-2">
                The bank receives
                <Math ariaLabel="One eighth"> \; \tfrac{1}{8} \;</Math>
                of that profit each month:
              </p>
              <Math block ariaLabel="Bank monthly payment">
                \text{Payment per month}=\frac{1}{8}\cdot\frac{1}{20}n=\frac{1}{160}n
              </Math>
              <p className="mb-2">
                Over 8 months, the total paid is:
              </p>
              <Math block ariaLabel="Total paid over eight months">
                8\cdot \frac{1}{160}n=\frac{1}{20}n
              </Math>
              <p className="mb-2">
                Therefore, the unpaid balance is the original loan minus what’s
                been paid:
              </p>
              <Math block ariaLabel="Remaining balance">
                n-\frac{1}{20}n=\frac{19}{20}n
              </Math>
              <p>Answer: 19/20 n.</p>
            </>
          }
        />

        <p>
          Takeaway: always translate the words into the profit identity, split
          costs into fixed and variable when needed, and set up the equation that
          matches the question—profit, loss, or break‑even.
        </p>
      </article>
    </main>
  );
}