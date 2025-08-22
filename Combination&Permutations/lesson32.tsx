import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "16.3.11 Anchor Method for Restricted Arrangements | Combinatorics",
  description:
    "Learn the anchor method for permutation problems with position restrictions. Place fixed items first, then count the remaining slots. Includes two quick multiple‑choice examples with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.3.11 Solve Restricted Arrangements with the Anchor Method
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When an arrangement problem tells you that certain items must occupy specific
          positions, an efficient strategy is to “anchor” those items first. By locking
          them into their required spots, you reduce the open choices and can then count
          the remaining positions straightforwardly.
        </p>

        <MustKnow>
          First place the constrained items into their required locations. After those
          positions are fixed, count the number of ways to fill the open slots with the
          remaining items. Anchoring prevents double‑counting and simplifies the
          multiplication of choices.
        </MustKnow>

        <p>
          The idea is positional: every anchored slot removes a decision you’d otherwise
          have to make. Once the fixed spots are set, the rest is a simple product of
          available choices per position.
        </p>

        <MCQExample
          number={40}
          prompt="Five dogs—Spot, Lucky, Happy, Jumpy, and Jack—are to be lined up for baths. If Jack must be first, how many distinct lineups are possible?"
          options={["12", "24", "32", "44", "52"]}
          correct="24"
          solution={
            <>
              <p>
                Anchor Jack in the first position. That removes any choice for slot 1.
                Four dogs remain to fill the last four positions.
              </p>
              <p>
                The number of ways to place the remaining dogs is{" "}
                <InlineMath math={"4\\times 3\\times 2\\times 1 = 24"} />.
              </p>
              <p>Therefore, there are 24 possible lineups.</p>
            </>
          }
        />

        <p>
          Sometimes more than one position is fixed. In those cases, anchor each required
          position first, then count the arrangements of the remaining items in the open
          slots.
        </p>

        <MCQExample
          number={41}
          prompt="Four people—Paul (P), Quinn (Q), Rosa (R), and Shelby (S)—are forming a line. If S must be at the front and R must be at the end, how many different lineups are possible?"
          options={["1", "2", "3", "4", "5"]}
          correct="2"
          solution={
            <>
              <p>
                Anchor S in the first position and R in the last. That leaves two middle
                positions to be filled by P and Q.
              </p>
              <p>
                The middle two can be arranged in{" "}
                <InlineMath math={"2\\times 1 = 2"} /> ways: P–Q or Q–P.
              </p>
              <p>Hence, there are exactly 2 valid lineups.</p>
            </>
          }
        />

        <p>
          Takeaway: reduce the problem to open positions by anchoring what’s fixed. Then
          multiply the available choices for each remaining slot to get the total count.
        </p>
      </article>
    </main>
  );
}