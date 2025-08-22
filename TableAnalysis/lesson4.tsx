import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";
import { renderToString } from "katex";

export const metadata: Metadata = {
  title: "5.5 One-Screen Solutions | Table Analysis",
  description:
    "Not every Table Analysis question requires multiple sorts. Learn how a single, well-chosen sort can reveal the answer, when more views are necessary, and how to decide quickly.",
};

function MathInline({ expr }: { expr: string }) {
  const html = renderToString(expr, { throwOnError: false, displayMode: false });
  return (
    <span
      className="align-baseline"
      aria-label="mathematical expression"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Table Analysis
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.5 Answering Some Questions with Just One Sorted Screen
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many Table Analysis prompts can be solved without hopping between multiple
          views. Often, one precise sort on the right column surfaces the row you
          need or groups the relevant rows together so you can read off the answer
          immediately. Before you start switching screens, ask yourself: “Is there a
          single sort that makes the result obvious?”
        </p>

        <MustKnow>
          The fastest path is usually to sort the column that directly matches the
          condition or metric in the question. If the query is about an extreme
          (maximum/minimum), a threshold, or a rank, one sorted screen is typically
          enough.
        </MustKnow>

        <p>
          Sorting establishes an order. If values are arranged as{" "}
          <MathInline expr="v_1 \le v_2 \le \cdots \le v_n" />, then the smallest is{" "}
          <MathInline expr="v_1" />, the largest is <MathInline expr="v_n" />, and any
          threshold like <MathInline expr="v \ge t" /> appears as a contiguous block at
          one end once you choose the appropriate ascending/descending order. That’s why
          a single sort often lets you read the answer straight from the top or bottom
          of the table—or from the point where the condition begins.
        </p>

        <p>
          When a question truly mixes unrelated criteria (for example, “highest margin
          among items with Units Sold above a cutoff and a specific category”), a single
          sort may not isolate the exact subset. In those cases, pick the fewest views
          that line up directly with the constraints, minimizing screen switches.
        </p>

        <MCQExample
          number={21}
          prompt="A table lists cities with a column Average Commute (min). You must identify the city with the longest average commute. What is the quickest way to get the answer on a single screen?"
          options={[
            "Sort Average Commute (min) in descending order and read the first row.",
            "Sort Population in ascending order and scan all rows.",
            "Sort City Name in alphabetical order and scan all rows.",
            "Open multiple sorted screens and compare manually.",
          ]}
          correct="Sort Average Commute (min) in descending order and read the first row."
          solution={
            <>
              <p>
                The question asks for a maximum. Sorting the target column in descending
                order puts the largest value first, so the answer is the top row after the
                sort—no extra screens needed.
              </p>
            </>
          }
        />

        <ExampleCard
          number={22}
          title="One sort isolates a threshold"
          statements={[
            "The table has columns: Name, Department, Salary ($). You need the count of employees with Salary ≥ 120,000.",
            "1) You can sort Salary in descending order and the table displays row numbers.",
            "2) You can sort Department alphabetically.",
          ]}
          correctLetter="A"
          solution={
            <>
              <p>
                We want to count how many rows satisfy <MathInline expr="\text{Salary} \ge 120{,}000" />.
              </p>
              <p>
                <strong>Statement (1):</strong> If you sort Salary descending, all qualifying
                rows appear at the top. With visible row numbers, you can locate the last row
                meeting the threshold and read its index to get the count. Sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> Sorting by Department does not cluster rows by
                Salary, so you cannot directly count <MathInline expr="\text{Salary} \ge 120{,}000" />{" "}
                from one view. Not sufficient.
              </p>
              <p>Therefore, statement (1) alone suffices. Answer: A.</p>
            </>
          }
        />

        <ExampleCard
          number={23}
          title="When one screen is not enough"
          statements={[
            "You must find the product with the highest Profit Margin among items with Units Sold > 1,000.",
            "1) The table includes a Margin column (Profit ÷ Revenue), and you can sort by Margin.",
            "2) You can sort by Units Sold.",
          ]}
          correctLetter="E"
          solution={
            <>
              <p>
                We need the top Margin subject to <MathInline expr="\text{Units Sold} &gt; 1000" />.
              </p>
              <p>
                <strong>Statement (1):</strong> Sorting by Margin finds the global maximum, but
                it may include products with Units Sold ≤ 1,000. Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> Sorting by Units Sold clusters the qualifying
                products, but it doesn’t rank them by Margin. Not sufficient.
              </p>
              <p>
                <strong>Together:</strong> With only single-column sorts, you cannot simultaneously
                enforce the Units Sold constraint and rank by Margin on one screen. You would need a
                filter or an additional step beyond a single sort. Not sufficient. Answer: E.
              </p>
            </>
          }
        />

        <p>
          Takeaway: Lead with the sort that aligns with the question’s target value or
          cutoff. If that sort cleanly exposes an extreme, a rank, or a threshold block,
          one screen is all you need. If it doesn’t, you likely need a filter or an extra
          view—keep those to the minimum needed to isolate the answer. 
        </p>
      </article>
    </main>
  );
}