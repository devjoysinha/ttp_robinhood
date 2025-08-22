import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { BlockMath, InlineMath } from "react-katex";

export const metadata: Metadata = {
  title: "16.2.16 When two items can’t be in the same group | Combinations",
  description:
    "Learn a fast complement method for counting selections when certain members can’t appear together. Includes two multiple‑choice examples with full solutions.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.2.16 Some items can never be together in the same subgroup
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          A common counting restriction is “these two can’t be chosen together.”
          Rather than listing all valid groups, use the complement: count all
          possible groups, then subtract the groups that contain the forbidden
          pair. This works because “together” and “not together” are mutually
          exclusive and cover all cases.
        </p>

        <MustKnow>
          When two specific items are not allowed in the same subgroup of size
          k, a fast approach is:
          <br />
          Total valid = All k‑subsets − k‑subsets that include both restricted
          items.
          <div className="mt-3 space-y-1">
            <p className="m-0">
              • All k‑subsets from n items:{" "}
              <InlineMath math={"\\binom{n}{k}"} />
            </p>
            <p className="m-0">
              • If both restricted items are included, you only choose the
              remaining <InlineMath math={"k-2"} /> from the other{" "}
              <InlineMath math={"n-2"} /> items:{" "}
              <InlineMath math={"\\binom{n-2}{k-2}"} />
            </p>
          </div>
        </MustKnow>

        <MCQExample
          number={27}
          prompt="A committee of 3 is to be chosen from 5 people. Two particular people cannot serve together. How many different committees are possible?"
          options={["7", "6", "5", "4", "3"]}
          correct="7"
          solution={
            <>
              <p className="mb-2">Use complement counting.</p>
              <BlockMath math={"\\text{All committees} = \\binom{5}{3} = 10"} />
              <p className="mb-2">
                Committees that contain both restricted people: once those two
                are in, pick 1 more from the remaining 3.
              </p>
              <BlockMath math={"\\text{With both} = \\binom{3}{1} = 3"} />
              <BlockMath math={"\\text{Valid} = 10 - 3 = 7"} />
              <p className="mt-2">Answer: 7.</p>
            </>
          }
        />

        <p>
          The same idea scales to multi‑group selections. If only one group has
          a “can’t‑be‑together” rule, treat that group with the complement
          method and multiply by the counts for the other independent groups.
        </p>

        <MCQExample
          number={28}
          prompt="An investment team must include 2 portfolio managers, 2 assistants, and 3 analysts. There are 4 portfolio managers, 4 assistants, and 5 analysts available, but two of the analysts cannot be on the team together. How many different team configurations are possible?"
          options={["102", "152", "200", "252", "302"]}
          correct="252"
          solution={
            <>
              <p className="mb-2">
                Choices are independent across roles; multiply the counts.
              </p>
              <BlockMath math={"\\text{PMs: } \\binom{4}{2} = 6"} />
              <BlockMath math={"\\text{Assts: } \\binom{4}{2} = 6"} />
              <p className="mb-2">Handle the analysts with the restriction:</p>
              <BlockMath math={"\\text{All analysts: } \\binom{5}{3} = 10"} />
              <p className="mb-2">
                If both incompatible analysts are chosen, we need 1 more from
                the other 3:
              </p>
              <BlockMath math={"\\text{With both: } \\binom{3}{1} = 3"} />
              <BlockMath math={"\\text{Valid analysts: } 10 - 3 = 7"} />
              <BlockMath math={"\\text{Total teams } = 6 \\times 6 \\times 7 = 252"} />
              <p className="mt-2">Answer: 252.</p>
            </>
          }
        />

        <p>
          Takeaway: when a “forbidden pair” appears in a combination problem,
          think complement. Count everything, subtract the cases that violate
          the rule, and you’re done.
        </p>
      </article>
    </main>
  );
}