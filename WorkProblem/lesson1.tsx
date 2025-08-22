import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "10.2 Rate–Time–Work Formula | Work Problems",
  description:
    "Understand the core relationship Work = Rate × Time, see how to rearrange it, and apply it with clean unit management. Includes a quick check example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          10. Work Problems
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          10.2 Rate–Time–Work Formula
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          In rate problems involving motion, we rely on the relationship
          “rate × time = distance.” For work problems, we use the same idea:
          the rate a worker or machine operates, multiplied by the time spent,
          yields the amount of work completed.
        </p>

        <div aria-label="Rate–Time–Work equation" className="rounded-md bg-gray-800/60 p-4">
          <BlockMath math="\text{Work} \;=\; \text{Rate} \times \text{Time}" />
        </div>

        <p>
          Here, “work” represents some completed task (for example, widgets produced
          or tasks finished), rather than distance traveled. The structure is identical,
          only the interpretation changes.
        </p>

        <p>
          Example: If a machine runs for 10 hours at a constant pace of 40 units per hour,
          the total output is:
        </p>

        <div className="rounded-md bg-gray-800/60 p-4">
          <BlockMath math="(40 \;\tfrac{\text{units}}{\text{hour}})\;\times\;(10\;\text{hours}) \;=\; 400\;\text{units}" />
        </div>

        <p>
          You can also solve for any one variable by rearranging the formula:
        </p>

        <div className="rounded-md bg-gray-800/60 p-4">
          <BlockMath math="\text{Rate} \;=\; \dfrac{\text{Work}}{\text{Time}} \qquad \text{and} \qquad \text{Time} \;=\; \dfrac{\text{Work}}{\text{Rate}}" />
        </div>

        <p>
          Keep units consistent. If the rate is measured in widgets per hour,
          the time must be in hours for the product to be in widgets. Mismatched units
          will lead to incorrect results.
        </p>

        <MustKnow>
          <span className="sr-only">Key fact:</span>
          <BlockMath math="(\,\text{Rate} \times \text{Time}\,) \;=\; \text{Work}" />
          <p className="mt-2">
            Use this identity to move between rate, time, and work. Always align units
            so they cancel correctly and produce the intended result.
          </p>
        </MustKnow>

        <MCQExample
          number={21}
          prompt="A machine operates at a steady rate of 40 units per hour for 10 hours. How much work is completed?"
          options={["200", "300", "360", "400", "450"]}
          correct="400"
          solution={
            <>
              <p>
                Apply <InlineMath math="\text{Work}=\text{Rate}\times\text{Time}" />:
              </p>
              <BlockMath math="(40 \;\tfrac{\text{units}}{\text{hour}})\times(10 \;\text{hours}) \;=\; 400 \;\text{units}" />
              <p>
                Hours cancel, leaving units. Therefore the total work is 400 units.
              </p>
            </>
          }
        />
      </article>
    </main>
  );
}