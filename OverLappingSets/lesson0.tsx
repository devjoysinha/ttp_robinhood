import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { ExampleCard } from "@/components/ui/ExampleCard";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title: "13.1 Overlapping Sets: Introduction | Quant",
  description:
    "Learn the difference between non-overlapping and overlapping counts, apply the two‑set inclusion–exclusion formula, and see why the set‑matrix is the go‑to organizer. Includes a quick MCQ and one Data Sufficiency drill with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          13. Overlapping Sets
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          13.1 Introduction
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Imagine a school that offers only two classes: English and Math. If 20
          students take English and 30 take Math, and no one is enrolled in both,
          the total number of students is simply 20 + 30 = 50. That’s a straight
          add because the groups don’t intersect.
        </p>

        <p>
          Now add some overlap: suppose 10 students take both English and Math.
          If we just add the two totals, those 10 students get counted twice.
          To correct for the double count, subtract the overlap once:
          {" "}
          <InlineMath math={"20 + 30 - 10 = 40"} />.
        </p>

        <MustKnow>
          <div className="space-y-2">
            <p className="font-semibold">
              Two‑set inclusion–exclusion (counts):
            </p>
            <BlockMath math={"\\lvert A \\cup B \\rvert = \\lvert A \\rvert + \\lvert B \\rvert - \\lvert A \\cap B \\rvert"} />
            <ul className="list-disc pl-6">
              <li>
                No overlap means <InlineMath math={"\\lvert A \\cap B \\rvert = 0"} />, so you just add.
              </li>
              <li>
                With overlap, subtract the intersection once to remove double‑counting.
              </li>
            </ul>
          </div>
        </MustKnow>

        <p>
          Real test questions can involve layered details and multiple constraints.
          The most reliable way to keep track of what belongs where is a set‑matrix:
          a compact table that organizes each region (only A, only B, both, neither)
          and row/column totals. We’ll build this tool in the next section and use it
          to handle even messy prompts with confidence.
        </p>

        <MCQExample
          number={1}
          prompt="In a school, 55 students take History, 35 take Economics, and 15 take both. How many students take at least one of the two subjects?"
          options={["60", "65", "70", "75", "85"]}
          correct="75"
          solution={
            <>
              <p>
                Use inclusion–exclusion:
                {" "}
                <InlineMath math={"\\lvert H \\cup E \\rvert = \\lvert H \\rvert + \\lvert E \\rvert - \\lvert H \\cap E \\rvert"} />.
              </p>
              <p>
                Substitute: <InlineMath math={"55 + 35 - 15 = 75"} />. The number of students taking at least one of the two is 75.
              </p>
            </>
          }
        />

        <ExampleCard
          number={2}
          title="Two sets and the union (Data Sufficiency)"
          statements={[
            "In a school, 130 students take Biology (B) and 150 take Chemistry (C). How many students take at least one of the two?",
            "1) Exactly 70 students take neither B nor C.",
            "2) 40% of the Biology students also take Chemistry.",
          ]}
          correctLetter="B"
          solution={
            <>
              <p>
                We want <InlineMath math={"\\lvert B \\cup C \\rvert"} />. By inclusion–exclusion,
                <InlineMath math={"\\lvert B \\cup C \\rvert = \\lvert B \\rvert + \\lvert C \\rvert - \\lvert B \\cap C \\rvert"} />.
              </p>
              <p>
                <strong>Statement (1):</strong> 70 take neither. That tells us about
                the outside region, but we don’t know the grand total of students,
                so we can’t convert “neither” into the union. Not sufficient.
              </p>
              <p>
                <strong>Statement (2):</strong> 40% of 130 Biology students are also in Chemistry,
                so <InlineMath math={"\\lvert B \\cap C \\rvert = 0.40\\times130 = 52"} />.
                Then <InlineMath math={"\\lvert B \\cup C \\rvert = 130 + 150 - 52 = 228"} />.
                The union is determined. Sufficient.
              </p>
              <p>
                Therefore, statement (2) alone is sufficient, (1) alone is not. Answer: B.
              </p>
            </>
          }
        />

        <p>
          Takeaway: when sets don’t overlap, totals add directly. With overlap,
          subtract the intersection once. As problems grow in complexity, a
          set‑matrix keeps the regions and totals straight, preventing logical
          slip‑ups. Up next: how to construct and use that matrix efficiently.
        </p>
      </article>
    </main>
  );
}