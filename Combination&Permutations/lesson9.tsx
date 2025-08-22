import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import katex from "katex";

export const metadata: Metadata = {
  title: "16.2.8 Choosing from Multiple Groups with “and” | Combinations",
  description:
    "Learn how to count selections from several groups when the prompt uses “and.” Apply combinations within each group and multiply the results. Includes three worked examples.",
};

function Math({
  expr,
  display = false,
  ariaLabel,
  className,
}: {
  expr: string;
  display?: boolean;
  ariaLabel?: string;
  className?: string;
}) {
  // Render to MathML (accessible and doesn’t require KaTeX CSS)
  const html = katex.renderToString(expr, {
    displayMode: display,
    throwOnError: false,
    output: "mathml",
  });
  return (
    <span
      className={className}
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.2.8 Choosing multiple items from multiple groups using “and”
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Previously, we picked a single item from each category. In this
          section, we may have to pick several items from each of multiple
          categories. The natural approach is:
          count the number of ways to make each selection separately, then
          multiply those counts together.
          This is a direct use of the multiplication (fundamental counting)
          principle, and within each category, we typically use combinations
          because order doesn’t matter.
        </p>

        <MustKnow>
          When a prompt says “and” (for example, choose X from group A and Y
          from group B), compute the number of ways for each group independently
          using combinations, then multiply the results across groups. In
          symbols: if there are a ways for the first choice and b ways for the
          second, there are a × b total outcomes.
        </MustKnow>

        <MCQExample
          number={11}
          prompt="A dinner order allows choosing two different cheeses from four options and one veggie from three options. How many distinct topping sets are possible?"
          options={["12", "16", "18", "20", "24"]}
          correct="18"
          solution={
            <>
              <p>
                Choices are independent: pick cheeses and a veggie.
                Because order doesn’t matter within a group, use combinations.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Two cheeses from four:
                  <span className="ml-2 inline-block align-middle">
                    <Math expr="{}^4C_2 = 6" ariaLabel="4 choose 2 equals 6" />
                  </span>
                </li>
                <li>
                  One veggie from three:
                  <span className="ml-2 inline-block align-middle">
                    <Math expr="{}^3C_1 = 3" ariaLabel="3 choose 1 equals 3" />
                  </span>
                </li>
              </ul>
              <p className="mt-2">
                Multiply:
                <span className="ml-2 inline-block align-middle">
                  <Math
                    expr="{}^4C_2 \times {}^3C_1 = 6 \times 3 = 18"
                    ariaLabel="4 choose 2 times 3 choose 1 equals 18"
                  />
                </span>
              </p>
            </>
          }
        />

        <MCQExample
          number={12}
          prompt="A chest holds 4 different coins, 5 different jewels, and 6 different daggers. If someone selects two coins, two jewels, and two daggers, how many distinct bags are possible?"
          options={["150", "300", "450", "600", "900"]}
          correct="900"
          solution={
            <>
              <p>
                Selections happen within each group independently, and order
                doesn’t matter within a group:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Coins:
                  <span className="ml-2 inline-block align-middle">
                    <Math expr="{}^4C_2 = 6" ariaLabel="4 choose 2 equals 6" />
                  </span>
                </li>
                <li>
                  Jewels:
                  <span className="ml-2 inline-block align-middle">
                    <Math expr="{}^5C_2 = 10" ariaLabel="5 choose 2 equals 10" />
                  </span>
                </li>
                <li>
                  Daggers:
                  <span className="ml-2 inline-block align-middle">
                    <Math expr="{}^6C_2 = 15" ariaLabel="6 choose 2 equals 15" />
                  </span>
                </li>
              </ul>
              <p className="mt-2">
                Multiply across groups:
                <span className="ml-2 inline-block align-middle">
                  <Math
                    expr="6 \times 10 \times 15 = 900"
                    ariaLabel="6 times 10 times 15 equals 900"
                  />
                </span>
              </p>
            </>
          }
        />

        <p>
          Sometimes the prompt fixes the count for one group but leaves the rest
          flexible. In those cases, choose the fixed group first, then count the
          remaining selections from whatever items are still eligible.
        </p>

        <MCQExample
          number={13}
          prompt="From 5 distinct rubies, 4 distinct emeralds, and 3 distinct diamonds, choose 5 jewels in total, with exactly 3 rubies. How many selections are possible?"
          options={["10", "21", "30", "180", "210"]}
          correct="210"
          solution={
            <>
              <p>
                First pick the required rubies, then fill the other two slots
                from non‑rubies:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Rubies:
                  <span className="ml-2 inline-block align-middle">
                    <Math expr="{}^5C_3 = 10" ariaLabel="5 choose 3 equals 10" />
                  </span>
                </li>
                <li>
                  Remaining two jewels from 7 non‑rubies (4 emeralds + 3 diamonds):
                  <span className="ml-2 inline-block align-middle">
                    <Math expr="{}^7C_2 = 21" ariaLabel="7 choose 2 equals 21" />
                  </span>
                </li>
              </ul>
              <p className="mt-2">
                Total:
                <span className="ml-2 inline-block align-middle">
                  <Math
                    expr="{}^5C_3 \times {}^7C_2 = 10 \times 21 = 210"
                    ariaLabel="5 choose 3 times 7 choose 2 equals 210"
                  />
                </span>
              </p>
            </>
          }
        />

        <p>
          Takeaway: use combinations inside each group and multiply across
          groups whenever the task uses “and.” If a group has additional
          constraints (for example, “exactly three must be rubies”), honor those
          first, then count the remaining choices from what’s left.
        </p>
      </article>
    </main>
  );
}