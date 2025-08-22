import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "5.4 Choose the Right Column to Sort | Table Analysis",
  description:
    "Table Analysis strategy: learn how to pick the column and sort direction so answers surface fast. Two must‑know takeaways and a quick practice check.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          5. Table Analysis
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          5.4 Picking the Right Column to Sort Is the Shortcut to Accurate Answers
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Fast, correct work in Table Analysis usually comes down to one decision:
          which column to sort and in which direction. When the sort aligns with the
          question’s goal, the rows you need rise to the top, and the answer often
          becomes obvious.
        </p>

        <MustKnow>
          To work efficiently, sort the table by the field that directly measures
          what the question is asking for, and choose the direction that brings the
          desired records to the top.
        </MustKnow>

        <p>
          You can think of sorting as choosing a key function{" "}
          <InlineMath math={"k(\\text{row})"} /> that orders the rows. If a prompt
          asks for a smallest value, make sure the key is the relevant quantity and
          sort ascending; for a largest value, sort descending:
        </p>

        <div className="rounded-md border border-gray-700/50 bg-gray-900/40 p-4">
          <BlockMath math={"\\text{If goal is }\\min q:\\quad \\text{sort by } q \\text{ (ascending)}"} />
          <BlockMath math={"\\text{If goal is }\\max q:\\quad \\text{sort by } q \\text{ (descending)}"} />
        </div>

        <p>
          Sorting by a convenient but irrelevant column can bury the signal or even
          point you to the wrong conclusion. The right sort, on the other hand,
          frequently places the correct row at or near the top, minimizing extra
          filtering or computation.
        </p>

        <MustKnow>
          An optimal sort can make the answer jump out—sometimes no further math is
          needed once the table is ordered correctly.
        </MustKnow>

        <p className="text-gray-300">
          Practical workflow:
        </p>
        <ul className="list-inside list-disc space-y-2 text-gray-300">
          <li>Translate the question into a target quantity q (what are we maximizing/minimizing/comparing?).</li>
          <li>Identify the column that directly represents q or the best available proxy.</li>
          <li>Pick the direction: ascending for “least/smallest/earliest,” descending for “greatest/most/latest.”</li>
          <li>Only add a secondary sort when ties or grouping make it helpful.</li>
        </ul>

        <MCQExample
          number={1}
          prompt="A table shows Clinic, Avg. Wait (min), Visits, and Satisfaction (%). To quickly find the clinic with the shortest expected wait right now, which single-column sort should you use first?"
          options={[
            "Sort Avg. Wait ascending",
            "Sort Visits descending",
            "Sort Satisfaction descending",
            "Sort Clinic name A→Z",
            "Sort Avg. Wait descending",
          ]}
          correct="Sort Avg. Wait ascending"
          solution={
            <>
              <p>
                The question targets the smallest wait time. The directly relevant
                metric is Avg. Wait. Sorting that column in ascending order moves the
                lowest wait to the top, minimizing additional steps.
              </p>
              <p>
                Visits and Satisfaction are not direct measures of wait time; sorting
                by them could mislead. Sorting descending by Avg. Wait would push the
                longest waits to the top—the opposite of our goal.
              </p>
            </>
          }
        />

        <p>
          Takeaway: choose the sort that lines up with the question’s objective, and
          make the direction do the heavy lifting. When in doubt, restate the goal
          as “bring rows with smallest/largest q to the top,” then sort accordingly.
        </p>
      </article>
    </main>
  );
}