import type { Metadata } from "next";
import { MustKnow } from "@/components/ui/MustKnow";
import { MCQExample } from "@/components/ui/MCQExample";
// Note: Ensure KaTeX styles are loaded globally (e.g., in app/layout.tsx):
// import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export const metadata: Metadata = {
  title: "16.3.9 Circular Arrangements | Combinatorics",
  description:
    "Learn how to count distinct circular arrangements and why rotations are equivalent. Includes the circular permutation formula and a quick multiple-choice example.",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 md:py-12">
      <header className="mb-8">
        <h1 className="mt-2 text-2xl font-bold text-white md:text-3xl">
          16. Combinations and Permutations
        </h1>
        <h2 className="mt-1 text-lg font-semibold text-gray-200">
          16.3.9 Circular Arrangements
        </h2>
      </header>

      <article className="space-y-6 text-gray-300">
        <p>
          When items are arranged around a circle, turning the whole circle does
          not create a new arrangement. Because rotations are considered the
          same, there are fewer distinct outcomes than in a straight-line (linear)
          arrangement. For instance, arranging five campers in a line yields{" "}
          <InlineMath math={"5!"} />, but arranging those same five campers
          around a circle produces only{" "}
          <InlineMath math={"(5-1)! = 24"} /> unique seatings.
        </p>

        <div aria-label="Circular permutation formula" className="rounded-md bg-gray-800/60 p-4">
          <p className="mb-2 font-semibold text-gray-100">
            Circular permutation formula
          </p>
          <BlockMath math={"\\text{# of distinct circular arrangements of } K \\text{ items} = (K-1)!"} />
          <p className="mt-2">
            Here, <InlineMath math={"K"} /> is the number of distinct items arranged
            around the circle.
          </p>
        </div>

        <MustKnow>
          In a circular arrangement, rotating every item together doesn’t change
          the relative order. Fixing one position as a reference removes this
          rotational symmetry, leaving <InlineMath math={"(K-1)!"} /> distinct
          arrangements for <InlineMath math={"K"} /> items.
        </MustKnow>

        <section aria-labelledby="example39">
          <h3 id="example39" className="sr-only">
            Example 39
          </h3>

          <MCQExample
            number={39}
            prompt="Six distinct people are to be seated around a round table. If two seatings are considered different only when the relative order of people changes (not mere rotations), how many distinct seatings are possible?"
            options={["24", "45", "120", "210", "250"]}
            correct="120"
            solution={
              <>
                <p>
                  For circular arrangements of <InlineMath math={"K"} /> distinct
                  items, use <InlineMath math={"(K-1)!"} />. With{" "}
                  <InlineMath math={"K = 6"} />, we have:
                </p>
                <BlockMath math={"(6-1)! = 5! = 5\\times4\\times3\\times2\\times1 = 120"} />
                <p>Therefore, there are 120 distinct seatings.</p>
              </>
            }
          />
        </section>

        <p>
          Why does the formula work? If we place the first person to “break” the
          circular symmetry (think of fixing one seat as a reference), the remaining{" "}
          <InlineMath math={"K-1"} /> people can be arranged freely in a line around
          the circle, giving <InlineMath math={"(K-1)!"} /> unique configurations.
        </p>
      </article>
    </main>
  );
}