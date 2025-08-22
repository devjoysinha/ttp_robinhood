import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";

export const metadata: Metadata = {
  title: "6.10 Step‑by‑Step Execution | Multi‑Source Reasoning",
  description:
    "Learn a reliable step‑by‑step process to execute Multi‑Source Reasoning questions: define the task, gather the right info from tabs, compute, and compare. Includes a worked profit vs. projection walkthrough.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          6. Multi‑Source Reasoning
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          6.10 Execution Strategy #3: Go Step by Step
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Once you know your objective in a Multi‑Source Reasoning (MSR) problem,
          the most dependable way to carry it out is to break the work into small,
          ordered actions and follow them one by one. A clear checklist reduces
          errors and keeps you focused on only the information you need.
        </p>

        <MustKnow>
          For MSR, disciplined execution beats speed. Work through the task in
          deliberate, sequential steps to ensure accuracy.
        </MustKnow>

        <section aria-labelledby="profit-example" className="space-y-4">
          <h3 id="profit-example" className="text-xl font-semibold text-white">
            Walkthrough: Actual Profit vs. Projected Profit
          </h3>

          <p>
            Suppose your mission is to decide whether the actual profit for a
            particular item exceeds its projected profit. If it does, choose
            “Yes”; otherwise, choose “No.”
          </p>

          <p>
            You’re given two sources:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Tab 1: a passage listing projected profits by item</li>
            <li>Tab 2: a table with each item’s manufacturing cost and retail price</li>
          </ul>

          <p>
            Actual profit is computed as{" "}
            <InlineMath math="\text{Actual Profit} = \text{Retail Price} - \text{Manufacturing Cost}" />.
            So the question becomes: Is{" "}
            <InlineMath math="\text{Retail Price} - \text{Manufacturing Cost} > \text{Projected Profit}\,?" />
          </p>

          <h4 className="text-lg font-semibold text-gray-200">A step‑by‑step plan</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              In Tab 2, locate the item and note its retail price and manufacturing cost.
            </li>
            <li>
              Compute the actual profit:{" "}
              <InlineMath math="\text{Retail Price} - \text{Manufacturing Cost}" />.
            </li>
            <li>
              In Tab 1, find the item’s projected profit.
            </li>
            <li>
              Compare: if actual profit is greater than the projection, select “Yes”;
              otherwise, select “No.”
            </li>
          </ol>

          <p>
            This is just one scenario, but the same disciplined approach applies
            broadly: identify the data you need, fetch it from the right places,
            perform the required operation, and make the comparison the question demands.
          </p>
        </section>

        <MustKnow>
          Break MSR work into bite‑sized actions and complete them in order.
          This method helps you capture every necessary detail and reach the correct decision.
        </MustKnow>
      </article>
    </main>
  );
}