import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "16.3.2 Solving Permutation Problems | Combinatorics",
  description:
    "Learn two go-to methods for permutations: the formula P(n, k) = n!/(n−k)! and the box‑and‑fill approach. Includes a fast GMAT‑style example with full reasoning.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.3.2 Solving permutation problems
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          Many permutation questions can be dispatched with the same two tools you used for combinations: a closed‑form formula and a structured counting (box‑and‑fill) plan. The difference is that order matters for permutations, so arrangements that look like the same selection in combinations become distinct outcomes here.
        </p>

        <section aria-labelledby="method-1" className="space-y-4">
          <h3 id="method-1" className="text-xl font-semibold text-white">
            Method 1: The permutation formula
          </h3>
          <p>The number of ways to arrange k items chosen from n distinct items is:</p>
          <div className="rounded-md bg-gray-900/40 p-4">
            <BlockMath math={"P(n,k)=\\dfrac{n!}{(n-k)!}"} />
          </div>
          <p>
            Here, <InlineMath math="n" /> is the size of the pool you can choose from, and <InlineMath math="k" /> is how many positions you are filling.
          </p>

          <MustKnow>
            Commit the permutation rule to memory:{" "}
            <InlineMath math={"P(n,k)=\\dfrac{n!}{(n-k)!}"} />. You will use it constantly whenever roles or positions are distinct and order is important.
          </MustKnow>
        </section>

        <MCQExample
          number={32}
          difficulty="easy"
          prompt="A softball coach has 7 players available and must assign a pitcher, a catcher, and a shortstop. In how many ways can the coach fill these three positions?"
          options={["30", "60", "120", "210", "320"]}
          correct="210"
          solution={
            <>
              <p className="mb-2">
                Positions are different, so order matters. Using the formula:
              </p>
              <div className="rounded-md bg-gray-900/40 p-4">
                <BlockMath math={"P(7,3)=\\dfrac{7!}{(7-3)!}=\\dfrac{7!}{4!}=7\\times6\\times5=210"} />
              </div>
              <p className="mt-4">
                You can reach the same result by the fundamental counting principle: 7 choices for pitcher, then 6 for catcher, then 5 for shortstop, giving <InlineMath math={"7\\times6\\times5=210"} />.
              </p>
              <p>Therefore, the correct answer is 210.</p>
            </>
          }
        />

        <section aria-labelledby="method-2" className="space-y-4">
          <h3 id="method-2" className="text-xl font-semibold text-white">
            Method 2: Box‑and‑fill (counting by positions)
          </h3>
          <p>
            Think of each role as a box to fill from left to right. For the softball example, the three boxes (pitcher, catcher, shortstop) have 7, 6, and 5 choices, respectively:
          </p>
          <div className="rounded-md bg-gray-900/40 p-4">
            <BlockMath math={"7\\;\\times\\;6\\;\\times\\;5\\;=\\;210"} />
          </div>
          <p>
            Unlike combinations, you do not divide by <InlineMath math={"k!"} /> here. That division removes duplicated selections when order doesn’t matter; in permutations, those “duplicates” are different arrangements, so they must remain.
          </p>

          <MustKnow>
            For permutations with distinct positions, create one box per decision and multiply the counts. Do not divide by <InlineMath math={"k!"} /> as you would in combinations.
          </MustKnow>
        </section>

        <p className="mt-6">
          Bottom line: when order is relevant, use <InlineMath math={"P(n,k)"} /> or multiply the per‑position choices. Both paths lead to the same answer; pick the one that gets you there fastest.
        </p>
      </article>
    </main>
  );
}