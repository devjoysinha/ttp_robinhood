import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";

export const metadata: Metadata = {
  title:
    "14.3.6 Count Consecutive Integers When Only One Endpoint Is Included | Statistics",
  description:
    "Learn the fast rule for counting how many consecutive integers are in a span when exactly one endpoint is included. Includes a quick multiple‑choice example with full explanation.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          14. Statistics
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          14.3.6 Counting Consecutive Integers When Only One Endpoint Is Included
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Sometimes a question asks for a count of consecutive integers that includes just
          the first or just the last number in the run—but not both. In those cases, there’s
          a simple position-based shortcut that avoids listing terms.
        </p>

        <MustKnow>
          <div className="space-y-3">
            <p className="font-medium">
              If a span of consecutive integers includes exactly one endpoint, the count is:
            </p>
            <BlockMath math="\text{count} = \text{last} - \text{first}" />
            <p className="text-sm text-gray-300/90">
              For context:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Include both endpoints:{" "}
                <InlineMath math="\text{count} = \text{last} - \text{first} + 1" />
              </li>
              <li>
                Exclude both endpoints (strictly between):{" "}
                <InlineMath math="\text{count} = \text{last} - \text{first} - 1" />
              </li>
            </ul>
          </div>
        </MustKnow>

        <p>
          The idea is purely positional: with one end included and the other excluded,
          the distance between positions directly equals the number of terms.
        </p>

        <MCQExample
          number={14}
          difficulty="easy"
          prompt="Tom stands 10th in line and Sara stands 50th in the same line. How many people are counted from Tom up to—but not including—Sara?"
          options={["38", "39", "40", "41", "42"]}
          correct="40"
          solution={
            <>
              <p>
                We’re including Tom’s position but excluding Sara’s. Using the one-endpoint rule:
              </p>
              <p className="mt-2">
                <InlineMath math="\text{count} = 50 - 10 = 40" />
              </p>
              <p className="mt-2">
                Therefore, there are 40 people in that segment of the line.
              </p>
            </>
          }
        />

        <p>
          Takeaway: when exactly one endpoint is part of the count, subtract the first position
          from the last. No list needed, and no off‑by‑one mistakes.
        </p>
      </article>
    </main>
  );
}